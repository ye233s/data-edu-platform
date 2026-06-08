import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { getUserProgress, getUserStats } from '../lib/storage'
import { coursesData } from '../lib/courseData'

interface LearningRecord {
  id: string
  courseName: string
  chapterName: string
  contentName: string
  completedAt: string
  duration: string
}

const Profile: React.FC = () => {
  const [userInfo, setUserInfo] = useState({
    name: '学习者',
    avatar: '👨‍🎓',
    bio: '商务数据分析与应用专业学生，热爱数据分析和Python编程'
  })

  const [learningRecords, setLearningRecords] = useState<LearningRecord[]>([])
  const [stats, setStats] = useState({ coursesStarted: 0, totalCompleted: 0, achievementsCount: 0, learningDays: 0 })
  const [courseProgress, setCourseProgress] = useState<{ courseId: string; title: string; progress: number; completed: number; total: number }[]>([])

  useEffect(() => {
    loadLearningRecords()
    loadStats()
    loadCourseProgress()
  }, [])

  const loadLearningRecords = () => {
    const progress = getUserProgress()
    const records: LearningRecord[] = []

    Object.entries(progress).forEach(([courseId, chapters]) => {
      const course = coursesData.find(c => c.id === courseId)
      if (!course) return

      Object.entries(chapters).forEach(([chapterId, chapterProgress]) => {
        const chapter = course.chapters.find(c => c.id === chapterId)
        if (!chapter) return

        chapterProgress.completedContents.forEach((contentId) => {
          const content = chapter.contents.find(c => c.id === contentId)
          if (!content) return

          const now = new Date()
          const completedAt = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`

          records.push({
            id: `${courseId}-${chapterId}-${contentId}`,
            courseName: course.title,
            chapterName: chapter.title,
            contentName: content.title,
            completedAt,
            duration: `${content.duration}分钟`
          })
        })
      })
    })

    records.sort((a, b) => new Date(b.completedAt).getTime() - new Date(a.completedAt).getTime())
    setLearningRecords(records.slice(0, 10))
  }

  const loadStats = () => {
    const userStats = getUserStats()
    setStats(userStats)
  }

  const loadCourseProgress = () => {
    const progress = getUserProgress()
    const progressList = coursesData.map(course => {
      const courseProgress = progress[course.id]
      if (!courseProgress) {
        return { courseId: course.id, title: course.title, progress: 0, completed: 0, total: 0 }
      }

      let completedContents = 0
      let totalContents = course.chapters.reduce((sum, ch) => sum + ch.contents.length, 0)

      Object.values(courseProgress).forEach(chapter => {
        completedContents += chapter.completedContents.length
      })

      const prog = totalContents > 0 ? Math.round((completedContents / totalContents) * 100) : 0

      return {
        courseId: course.id,
        title: course.title,
        progress: prog,
        completed: completedContents,
        total: totalContents
      }
    })

    setCourseProgress(progressList)
  }

  const totalHours = Math.round(stats.totalCompleted * 0.5)

  return (
    <Layout>
      <section className="py-20 pt-32">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-12 text-center">个人中心</h1>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                <div className="flex flex-col items-center mb-6">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center mb-4 text-white text-4xl">
                    {userInfo.avatar}
                  </div>
                  <h2 className="text-xl font-semibold">{userInfo.name}</h2>
                  <p className="text-gray-600 text-sm">数据分析师学员</p>
                </div>
                <div className="mb-6">
                  <h3 className="font-medium mb-2">个人简介</h3>
                  <p className="text-gray-600 text-sm">{userInfo.bio}</p>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <div className="text-xl font-bold text-blue-700">{totalHours}</div>
                    <div className="text-xs text-gray-500">学习小时</div>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <div className="text-xl font-bold text-green-700">{stats.coursesStarted}</div>
                    <div className="text-xs text-gray-500">已学课程</div>
                  </div>
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <div className="text-xl font-bold text-purple-700">{stats.totalCompleted}</div>
                    <div className="text-xs text-gray-500">完成内容</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-2/3">
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-xl font-semibold mb-6">📊 课程学习进度</h2>
                <div className="space-y-6">
                  {courseProgress.map(course => (
                    <div key={course.courseId}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">{course.title}</span>
                        <span className="text-sm text-gray-500">{course.completed}/{course.total} 内容</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div 
                          className="bg-gradient-to-r from-blue-600 to-blue-700 h-3 rounded-full transition-all duration-500"
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                      <div className="text-right text-sm text-blue-600 mt-1">{course.progress}%</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-6">📝 最近学习记录</h2>
                {learningRecords.length > 0 ? (
                  <div className="space-y-4">
                    {learningRecords.map(record => (
                      <div key={record.id} className="flex items-start justify-between p-4 bg-gray-50 rounded-lg">
                        <div>
                          <div className="font-medium">{record.contentName}</div>
                          <div className="text-sm text-gray-500">{record.courseName} → {record.chapterName}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-gray-500">{record.completedAt}</div>
                          <div className="text-sm text-gray-400">{record.duration}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <div className="text-6xl mb-4">📚</div>
                    <p className="text-gray-500">暂无学习记录</p>
                    <p className="text-gray-400 text-sm mt-2">开始学习，记录你的学习历程</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Profile
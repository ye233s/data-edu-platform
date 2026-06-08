import React, { useEffect, useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import Layout from '../components/Layout'
import { getUserAchievements, getUserStats, getUserProgress, addAchievement } from '../lib/storage'
import { coursesData } from '../lib/courseData'

interface Achievement {
  id: string
  name: string
  description: string
  icon: string
  unlocked: boolean
  unlockedAt?: string
}

const Achievements: React.FC = () => {
  const [achievements, setAchievements] = useState<Achievement[]>([])
  const [stats, setStats] = useState({ coursesStarted: 0, totalCompleted: 0, achievementsCount: 0, learningDays: 0 })
  const [learningStats, setLearningStats] = useState([
    { name: '周一', hours: 0 },
    { name: '周二', hours: 0 },
    { name: '周三', hours: 0 },
    { name: '周四', hours: 0 },
    { name: '周五', hours: 0 },
    { name: '周六', hours: 0 },
    { name: '周日', hours: 0 }
  ])

  useEffect(() => {
    updateStats()
    checkAndUnlockAchievements()
    generateLearningStats()
  }, [])

  const updateStats = () => {
    const userStats = getUserStats()
    setStats(userStats)

    const unlockedIds = getUserAchievements()
    const allAchievements: Achievement[] = [
      {
        id: 'python_beginner',
        name: 'Python初学者',
        description: '完成Python基础入门课程的任意一章',
        icon: '🐍',
        unlocked: unlockedIds.includes('python_beginner'),
        unlockedAt: unlockedIds.includes('python_beginner') ? getDateString() : undefined
      },
      {
        id: 'data_analyst',
        name: '数据分析师',
        description: '完成数据分析与可视化课程',
        icon: '📊',
        unlocked: unlockedIds.includes('data_analyst'),
        unlockedAt: unlockedIds.includes('data_analyst') ? getDateString() : undefined
      },
      {
        id: 'learning_streak',
        name: '学习达人',
        description: '连续学习3天',
        icon: '🔥',
        unlocked: unlockedIds.includes('learning_streak'),
        unlockedAt: unlockedIds.includes('learning_streak') ? getDateString() : undefined
      },
      {
        id: 'code_master',
        name: '代码高手',
        description: '完成5个代码实践任务',
        icon: '💻',
        unlocked: unlockedIds.includes('code_master'),
        unlockedAt: unlockedIds.includes('code_master') ? getDateString() : undefined
      },
      {
        id: 'quiz_master',
        name: '学习之星',
        description: '完成10个学习内容',
        icon: '⭐',
        unlocked: unlockedIds.includes('quiz_master'),
        unlockedAt: unlockedIds.includes('quiz_master') ? getDateString() : undefined
      },
      {
        id: 'course_completion',
        name: '课程完成者',
        description: '完成任意一门完整课程',
        icon: '🏆',
        unlocked: unlockedIds.includes('course_completion'),
        unlockedAt: unlockedIds.includes('course_completion') ? getDateString() : undefined
      },
      {
        id: 'advanced_learner',
        name: '进阶学习者',
        description: '完成中级课程',
        icon: '📈',
        unlocked: unlockedIds.includes('advanced_learner'),
        unlockedAt: unlockedIds.includes('advanced_learner') ? getDateString() : undefined
      },
      {
        id: 'pro_analyst',
        name: '高级分析师',
        description: '完成所有课程',
        icon: '👑',
        unlocked: unlockedIds.includes('pro_analyst'),
        unlockedAt: unlockedIds.includes('pro_analyst') ? getDateString() : undefined
      }
    ]

    setAchievements(allAchievements)
  }

  const getDateString = () => {
    const now = new Date()
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`
  }

  const checkAndUnlockAchievements = () => {
    const progress = getUserProgress()
    const completedCount = stats.totalCompleted
    const unlockedIds = getUserAchievements()

    coursesData.forEach(course => {
      const courseProgress = progress[course.id]
      if (courseProgress) {
        let chapterCompleted = 0
        Object.values(courseProgress).forEach(chapter => {
          if (chapter.completedContents.length > 0) {
            chapterCompleted++
          }
        })

        if (chapterCompleted > 0 && !unlockedIds.includes('python_beginner')) {
          addAchievement('python_beginner')
        }

        const totalContents = course.chapters.reduce((sum, ch) => sum + ch.contents.length, 0)
        let completedContents = 0
        Object.values(courseProgress).forEach(chapter => {
          completedContents += chapter.completedContents.length
        })

        if (completedContents >= totalContents && !unlockedIds.includes('course_completion')) {
          addAchievement('course_completion')
        }

        if (course.difficulty === '中级' && completedContents >= totalContents && !unlockedIds.includes('advanced_learner')) {
          addAchievement('advanced_learner')
        }

        if (course.difficulty === '高级' && completedContents >= totalContents && !unlockedIds.includes('pro_analyst')) {
          addAchievement('pro_analyst')
        }
      }
    })

    if (completedCount >= 5 && !unlockedIds.includes('code_master')) {
      addAchievement('code_master')
    }

    if (completedCount >= 10 && !unlockedIds.includes('quiz_master')) {
      addAchievement('quiz_master')
    }

    if (completedCount >= 3 && !unlockedIds.includes('learning_streak')) {
      addAchievement('learning_streak')
    }

    updateStats()
  }

  const generateLearningStats = () => {
    const progress = getUserProgress()
    let totalCompleted = 0
    Object.values(progress).forEach(course => {
      Object.values(course).forEach(chapter => {
        totalCompleted += chapter.completedContents.length
      })
    })

    const avgPerDay = Math.round((totalCompleted * 0.5 + Math.random() * 2) * 10) / 10
    const newStats = [
      { name: '周一', hours: Math.max(0, avgPerDay + (Math.random() - 0.5) * 2) },
      { name: '周二', hours: Math.max(0, avgPerDay + (Math.random() - 0.5) * 2) },
      { name: '周三', hours: Math.max(0, avgPerDay + (Math.random() - 0.5) * 2) },
      { name: '周四', hours: Math.max(0, avgPerDay + (Math.random() - 0.5) * 2) },
      { name: '周五', hours: Math.max(0, avgPerDay + (Math.random() - 0.5) * 2) },
      { name: '周六', hours: Math.max(0, avgPerDay * 1.5 + (Math.random() - 0.5) * 2) },
      { name: '周日', hours: Math.max(0, avgPerDay * 1.5 + (Math.random() - 0.5) * 2) }
    ]
    setLearningStats(newStats)
  }

  const unlockedCount = achievements.filter(a => a.unlocked).length
  const totalHours = Math.round(stats.totalCompleted * 0.5)

  return (
    <Layout>
      <section className="py-20 pt-32">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-12 text-center">成就中心</h1>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-4xl mb-2">🏅</div>
              <div className="text-3xl font-bold text-blue-700">{unlockedCount}/{achievements.length}</div>
              <div className="text-gray-600">已获得徽章</div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-4xl mb-2">📚</div>
              <div className="text-3xl font-bold text-blue-700">{stats.coursesStarted}</div>
              <div className="text-gray-600">已学习课程</div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-4xl mb-2">✅</div>
              <div className="text-3xl font-bold text-blue-700">{stats.totalCompleted}</div>
              <div className="text-gray-600">已完成内容</div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-4xl mb-2">⏱️</div>
              <div className="text-3xl font-bold text-blue-700">{totalHours}</div>
              <div className="text-gray-600">学习时长(小时)</div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-8">我的徽章</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6">
              {achievements.map(achievement => (
                <div 
                  key={achievement.id} 
                  className={`flex flex-col items-center p-4 rounded-lg transition-all ${
                    achievement.unlocked 
                      ? 'bg-white shadow-md hover:shadow-lg' 
                      : 'bg-gray-100 opacity-50'
                  }`}
                >
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-3 ${
                    achievement.unlocked ? 'bg-gradient-to-br from-yellow-400 to-orange-500' : 'bg-gray-300'
                  }`}>
                    <span className="text-3xl">{achievement.icon}</span>
                  </div>
                  <h3 className="font-medium text-center text-sm">{achievement.name}</h3>
                  <p className="text-gray-500 text-xs text-center mt-1">
                    {achievement.unlocked ? achievement.unlockedAt : '未解锁'}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-8">学习统计</h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="mb-6">
                <h3 className="font-medium mb-4">本周学习时长</h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={learningStats}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis label={{ value: '小时', angle: -90, position: 'insideLeft' }} />
                      <Tooltip formatter={(value: number) => [`${value.toFixed(1)} 小时`, '学习时长']} />
                      <Bar dataKey="hours" fill="#1E40AF" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-700">{totalHours}</div>
                  <div className="text-gray-600 text-sm">总学习小时</div>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-green-700">{stats.coursesStarted}</div>
                  <div className="text-gray-600 text-sm">已开始课程</div>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-purple-700">{stats.totalCompleted}</div>
                  <div className="text-gray-600 text-sm">已完成内容</div>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-orange-700">{unlockedCount}</div>
                  <div className="text-gray-600 text-sm">获得徽章</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Achievements
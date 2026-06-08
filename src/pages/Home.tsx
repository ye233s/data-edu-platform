import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import { coursesData } from '../lib/courseData'
import { getCourseProgress, getUserStats } from '../lib/storage'

const Home: React.FC = () => {
  const [userStats, setUserStats] = useState<any>(null)
  const [progressMap, setProgressMap] = useState<{[key: string]: number}>({})

  useEffect(() => {
    // 加载用户统计
    const stats = getUserStats()
    setUserStats(stats)
    
    // 加载各课程进度
    const map: {[key: string]: number} = {}
    coursesData.forEach(course => {
      map[course.id] = getCourseProgress(course.id)
    })
    setProgressMap(map)
  }, [])

  // 课程排序：按学习路径（从基础到高级，从通用技能到行业实战）
  const getSortedCourses = () => {
    const order: {[key: string]: number} = {
      'Python基础入门': 1,
      'SQL数据分析实战': 2,
      'Excel数据分析从入门到精通': 3,
      '统计学基础与应用': 4,
      '数据分析与可视化': 5,
      '数据仓库实战': 6,
      '商务数据分析实战': 7,
      '电商数据分析实战': 8,
      '金融数据分析': 9,
      '零售数据分析实战': 10,
    }
    
    return [...coursesData].sort((a, b) => {
      const orderA = order[a.title] || 99
      const orderB = order[b.title] || 99
      return orderA - orderB
    })
  }

  const sortedCourses = getSortedCourses()

  return (
    <Layout>
      {/* 英雄区 */}
      <section className="bg-blue-700 text-white py-20 pt-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">掌握数据分析技能，开启职业新篇章</h1>
            <p className="text-xl mb-8">专为商务数据分析与应用专业学生设计的在线学习平台，提供完整的课程体系、互动式学习模块和成就激励系统</p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/courses" className="bg-white text-blue-700 px-6 py-3 rounded-md font-medium hover:bg-gray-100 text-center">
                浏览课程
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 课程推荐 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">推荐课程</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedCourses.map(course => (
              <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <img src={course.coverImage} alt={course.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="mb-2">
                    <span className={`text-xs font-medium px-2.5 py-0.5 rounded ${
                      course.difficulty === '初级' ? 'bg-green-100 text-green-800' :
                      course.difficulty === '中级' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>{course.difficulty}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{course.description}</p>
                  
                  {progressMap[course.id] > 0 && (
                    <div className="mb-4">
                      <div className="flex justify-between mb-1 text-sm">
                        <span className="text-gray-600">学习进度</span>
                        <span className="text-blue-700 font-medium">{progressMap[course.id]}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full transition-all" 
                          style={{ width: `${progressMap[course.id]}%` }}
                        ></div>
                      </div>
                    </div>
                  )}
                  
                  <div className="flex gap-3">
                    <Link to={`/courses/${course.id}`} className="flex-1 text-center bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition-colors">
                      查看详情
                    </Link>
                    {progressMap[course.id] > 0 && (
                      <Link to={`/learn/${course.id}/1`} className="flex-1 text-center bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors">
                        继续学习
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/courses" className="text-blue-700 font-medium hover:underline">
              查看全部课程 →
            </Link>
          </div>
        </div>
      </section>

      {/* 学习进度 */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">学习记录</h2>
          <div className="max-w-3xl mx-auto">
            {userStats && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-white p-4 rounded-lg text-center shadow">
                  <div className="text-3xl font-bold text-blue-700">{userStats.coursesStarted}</div>
                  <div className="text-gray-600">已开始课程</div>
                </div>
                <div className="bg-white p-4 rounded-lg text-center shadow">
                  <div className="text-3xl font-bold text-green-700">{userStats.totalCompleted}</div>
                  <div className="text-gray-600">完成内容</div>
                </div>
                <div className="bg-white p-4 rounded-lg text-center shadow">
                  <div className="text-3xl font-bold text-yellow-600">{userStats.achievementsCount}</div>
                  <div className="text-gray-600">获得成就</div>
                </div>
                <div className="bg-white p-4 rounded-lg text-center shadow">
                  <div className="text-3xl font-bold text-purple-700">{userStats.learningDays}</div>
                  <div className="text-gray-600">学习天数</div>
                </div>
              </div>
            )}
            
            {/* 显示有进度的课程 */}
            {Object.entries(progressMap).filter(([_, p]) => p > 0).length > 0 ? (
              <div className="space-y-4">
                {Object.entries(progressMap).filter(([_, p]) => p > 0).map(([courseId, progress]) => {
                  const course = coursesData.find(c => c.id === courseId)
                  if (!course) return null
                  return (
                    <div key={courseId} className="bg-white p-4 rounded-lg shadow">
                      <div className="flex justify-between mb-2 items-center">
                        <span className="font-medium text-lg">{course.title}</span>
                        <span className="text-blue-700 font-semibold">{progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-blue-700 h-3 rounded-full transition-all" 
                          style={{ width: `${progress}%` }}
                        ></div>
                      </div>
                      <div className="mt-3 flex justify-end">
                        <Link to={`/learn/${courseId}/1`} className="text-blue-600 hover:underline text-sm font-medium">
                          继续学习 →
                        </Link>
                      </div>
                    </div>
                  )
                })}
              </div>
            ) : (
              <div className="bg-white p-8 rounded-lg shadow text-center">
                <p className="text-gray-600 mb-4">还没有开始学习，从选择一门课程开始吧！</p>
                <Link to="/courses" className="inline-block bg-blue-700 text-white px-6 py-2 rounded-md hover:bg-blue-800">
                  浏览课程
                </Link>
              </div>
            )}
            
            <div className="mt-8 text-center">
              <Link to="/profile" className="text-blue-700 font-medium hover:underline">
                查看详细学习记录 →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 成就展示 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">成就激励</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              {
                id: '1',
                name: '新手上路',
                description: '完成第一个内容',
                icon: '🎯'
              },
              {
                id: '2',
                name: '学习达人',
                description: '完成5个内容',
                icon: '⭐'
              },
              {
                id: '3',
                name: '坚持一周',
                description: '连续学习7天',
                icon: '🏆'
              },
              {
                id: '4',
                name: '编程高手',
                description: '完成所有编程练习',
                icon: '💻'
              },
              {
                id: '5',
                name: '数据专家',
                description: '完成数据分析课程',
                icon: '📊'
              },
              {
                id: '6',
                name: 'Python大师',
                description: '完成Python全部课程',
                icon: '🐍'
              }
            ].map(achievement => (
              <div key={achievement.id} className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 shadow-md flex items-center justify-center mb-3 text-4xl">
                  {achievement.icon}
                </div>
                <h3 className="font-medium text-center">{achievement.name}</h3>
                <p className="text-gray-500 text-xs text-center mt-1">{achievement.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/achievements" className="text-blue-700 font-medium hover:underline">
              查看全部成就 →
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Home
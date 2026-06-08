import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import { coursesData } from '../lib/courseData'
import { getCourseProgress } from '../lib/storage'

const Courses: React.FC = () => {
  const [filter, setFilter] = useState('全部')
  const [search, setSearch] = useState('')

  // 课程排序：按学习路径（从基础到高级，从通用技能到行业实战）
  const sortCourses = (courses: typeof coursesData) => {
    const order = {
      // 初级基础技能
      'Python基础入门': 1,
      'SQL数据分析实战': 2,
      'Excel数据分析从入门到精通': 3,
      '统计学基础与应用': 4,
      // 中级进阶技能
      '数据分析与可视化': 5,
      '数据仓库实战': 6,
      // 高级行业实战
      '商务数据分析实战': 7,
      '电商数据分析实战': 8,
      '金融数据分析': 9,
      '零售数据分析实战': 10,
    }
    
    return [...courses].sort((a, b) => {
      const orderA = order[a.title as keyof typeof order] || 99
      const orderB = order[b.title as keyof typeof order] || 99
      return orderA - orderB
    })
  }

  const filteredCourses = sortCourses(coursesData.filter(course => {
    const matchesDifficulty = filter === '全部' || course.difficulty === filter
    const matchesSearch = course.title.toLowerCase().includes(search.toLowerCase()) || 
                         course.description.toLowerCase().includes(search.toLowerCase())
    return matchesDifficulty && matchesSearch
  }))

  return (
    <Layout>
      <section className="py-20 pt-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">数据分析师成长之路</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              从零基础到实战专家，系统学习数据分析技能，开启职业新篇章
            </p>
          </div>
          
          <div className="mb-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                <button 
                  className={`px-4 py-2 rounded-lg transition-colors ${filter === '全部' ? 'bg-blue-700 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                  onClick={() => setFilter('全部')}
                >
                  全部
                </button>
                <button 
                  className={`px-4 py-2 rounded-lg transition-colors ${filter === '初级' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                  onClick={() => setFilter('初级')}
                >
                  初级
                </button>
                <button 
                  className={`px-4 py-2 rounded-lg transition-colors ${filter === '中级' ? 'bg-yellow-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                  onClick={() => setFilter('中级')}
                >
                  中级
                </button>
                <button 
                  className={`px-4 py-2 rounded-lg transition-colors ${filter === '高级' ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                  onClick={() => setFilter('高级')}
                >
                  高级
                </button>
              </div>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="搜索课程..." 
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map(course => {
              const progress = getCourseProgress(course.id)
              return (
                <div key={course.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <img src={course.coverImage} alt={course.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <div className="mb-3">
                      <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                        course.difficulty === '初级' ? 'bg-green-100 text-green-800' :
                        course.difficulty === '中级' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>{course.difficulty}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{course.description}</p>
                    
                    <div className="flex items-center mb-4">
                      <span className="text-yellow-500 mr-1">★</span>
                      <span className="font-medium">{course.rating}</span>
                      <span className="text-gray-500 text-sm ml-2">({course.reviewCount}人评价)</span>
                    </div>
                    
                    {progress > 0 && (
                      <div className="mb-4">
                        <div className="flex justify-between mb-1 text-sm">
                          <span className="text-gray-600">学习进度</span>
                          <span className="text-blue-700 font-medium">{progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full" 
                            style={{ width: `${progress}%` }}
                          ></div>
                        </div>
                      </div>
                    )}
                    
                    <div className="flex gap-3">
                      <Link to={`/courses/${course.id}`} className="flex-1 text-center bg-blue-700 text-white px-4 py-3 rounded-lg hover:bg-blue-800 transition-colors font-medium">
                        查看详情
                      </Link>
                      {progress > 0 && (
                        <Link to={`/learn/${course.id}/1`} className="flex-1 text-center bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium">
                          继续学习
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Courses

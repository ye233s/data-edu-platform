import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'

const Courses: React.FC = () => {
  // 模拟课程数据
  const courses = [
    {
      id: '1',
      title: 'Python基础入门',
      description: '掌握Python编程语言的基础知识，为数据分析打下基础',
      coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=python%20programming%20course%20cover&image_size=landscape_4_3',
      difficulty: '初级',
      duration: 12
    },
    {
      id: '2',
      title: '数据分析与可视化',
      description: '学习使用Python进行数据清洗、分析和可视化',
      coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=data%20analysis%20visualization%20course%20cover&image_size=landscape_4_3',
      difficulty: '中级',
      duration: 16
    },
    {
      id: '3',
      title: '商务数据分析实战',
      description: '应用数据分析技术解决实际商务问题',
      coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=business%20data%20analysis%20course%20cover&image_size=landscape_4_3',
      difficulty: '高级',
      duration: 20
    },
    {
      id: '4',
      title: '数据挖掘与机器学习',
      description: '学习数据挖掘和机器学习的基本概念和应用',
      coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=data%20mining%20machine%20learning%20course%20cover&image_size=landscape_4_3',
      difficulty: '高级',
      duration: 24
    },
    {
      id: '5',
      title: 'SQL数据库基础',
      description: '学习SQL语言和数据库操作的基础知识',
      coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=sql%20database%20course%20cover&image_size=landscape_4_3',
      difficulty: '初级',
      duration: 10
    },
    {
      id: '6',
      title: '商业智能与报表',
      description: '学习使用商业智能工具创建数据报表和仪表盘',
      coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=business%20intelligence%20reporting%20course%20cover&image_size=landscape_4_3',
      difficulty: '中级',
      duration: 14
    }
  ]

  const [filter, setFilter] = useState('全部')
  const [search, setSearch] = useState('')

  const filteredCourses = courses.filter(course => {
    const matchesDifficulty = filter === '全部' || course.difficulty === filter
    const matchesSearch = course.title.toLowerCase().includes(search.toLowerCase()) || 
                         course.description.toLowerCase().includes(search.toLowerCase())
    return matchesDifficulty && matchesSearch
  })

  return (
    <Layout>
      <section className="py-20 pt-32">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8 text-center">课程中心</h1>
          
          {/* 筛选和搜索 */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                <button 
                  className={`px-4 py-2 rounded-md ${filter === '全部' ? 'bg-blue-700 text-white' : 'bg-gray-200 text-gray-700'}`}
                  onClick={() => setFilter('全部')}
                >
                  全部
                </button>
                <button 
                  className={`px-4 py-2 rounded-md ${filter === '初级' ? 'bg-blue-700 text-white' : 'bg-gray-200 text-gray-700'}`}
                  onClick={() => setFilter('初级')}
                >
                  初级
                </button>
                <button 
                  className={`px-4 py-2 rounded-md ${filter === '中级' ? 'bg-blue-700 text-white' : 'bg-gray-200 text-gray-700'}`}
                  onClick={() => setFilter('中级')}
                >
                  中级
                </button>
                <button 
                  className={`px-4 py-2 rounded-md ${filter === '高级' ? 'bg-blue-700 text-white' : 'bg-gray-200 text-gray-700'}`}
                  onClick={() => setFilter('高级')}
                >
                  高级
                </button>
              </div>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="搜索课程..." 
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full md:w-64"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* 课程列表 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map(course => (
              <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={course.coverImage} alt={course.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">{course.difficulty}</span>
                    <span className="text-gray-500 text-sm">{course.duration} 小时</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <Link to={`/courses/${course.id}`} className="block text-center bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800">
                    查看详情
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Courses
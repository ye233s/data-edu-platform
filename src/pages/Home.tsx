import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'

const Home: React.FC = () => {
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
    }
  ]

  // 模拟学习进度
  const learningProgress = [
    {
      courseId: '1',
      courseName: 'Python基础入门',
      progress: 75
    },
    {
      courseId: '2',
      courseName: '数据分析与可视化',
      progress: 45
    }
  ]

  // 模拟成就
  const achievements = [
    {
      id: '1',
      name: 'Python初学者',
      description: '完成Python基础入门课程',
      badgeUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=python%20beginner%20badge&image_size=square'
    },
    {
      id: '2',
      name: '数据分析师',
      description: '完成数据分析与可视化课程',
      badgeUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=data%20analyst%20badge&image_size=square'
    },
    {
      id: '3',
      name: '学习达人',
      description: '连续学习7天',
      badgeUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=learning%20master%20badge&image_size=square'
    }
  ]

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
              <Link to="/register" className="bg-orange-500 text-white px-6 py-3 rounded-md font-medium hover:bg-orange-600 text-center">
                立即注册
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
            {courses.map(course => (
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
          <h2 className="text-3xl font-bold mb-8 text-center">学习进度</h2>
          <div className="max-w-3xl mx-auto">
            {learningProgress.map(item => (
              <div key={item.courseId} className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{item.courseName}</span>
                  <span>{item.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-blue-700 h-2.5 rounded-full" 
                    style={{ width: `${item.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
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
          <h2 className="text-3xl font-bold mb-8 text-center">我的成就</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {achievements.map(achievement => (
              <div key={achievement.id} className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-white shadow-md flex items-center justify-center mb-3">
                  <img src={achievement.badgeUrl} alt={achievement.name} className="w-16 h-16 object-contain" />
                </div>
                <h3 className="font-medium text-center">{achievement.name}</h3>
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
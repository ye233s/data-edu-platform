import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Layout from '../components/Layout'

const CourseDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>()

  // 模拟课程详情数据
  const course = {
    id: id || '1',
    title: 'Python基础入门',
    description: '本课程将帮助你掌握Python编程语言的基础知识，为数据分析打下坚实的基础。通过理论学习和实践练习，你将学会Python的基本语法、数据类型、控制结构、函数、模块等核心概念。',
    coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=python%20programming%20course%20cover&image_size=landscape_4_3',
    difficulty: '初级',
    duration: 12,
    instructor: '张老师',
    instructorBio: '拥有5年Python教学经验，曾在多家科技公司担任数据分析师，擅长Python编程和数据分析。',
    rating: 4.8,
    reviewCount: 120,
    chapters: [
      {
        id: '1',
        title: 'Python简介',
        duration: 60,
        contents: [
          { id: '1', type: 'video', title: 'Python的历史和应用', duration: 20 },
          { id: '2', type: 'text', title: 'Python的安装和环境配置', duration: 15 },
          { id: '3', type: 'code', title: '第一个Python程序', duration: 25 }
        ]
      },
      {
        id: '2',
        title: 'Python基础语法',
        duration: 90,
        contents: [
          { id: '4', type: 'video', title: '变量和数据类型', duration: 25 },
          { id: '5', type: 'text', title: '运算符和表达式', duration: 20 },
          { id: '6', type: 'code', title: '练习：基本运算', duration: 45 }
        ]
      },
      {
        id: '3',
        title: '控制结构',
        duration: 120,
        contents: [
          { id: '7', type: 'video', title: '条件语句', duration: 30 },
          { id: '8', type: 'video', title: '循环语句', duration: 35 },
          { id: '9', type: 'code', title: '练习：控制结构', duration: 55 }
        ]
      },
      {
        id: '4',
        title: '函数和模块',
        duration: 150,
        contents: [
          { id: '10', type: 'video', title: '函数的定义和调用', duration: 40 },
          { id: '11', type: 'text', title: '模块的导入和使用', duration: 25 },
          { id: '12', type: 'code', title: '练习：函数和模块', duration: 85 }
        ]
      }
    ]
  }

  return (
    <Layout>
      <section className="py-20 pt-32">
        <div className="container mx-auto px-4">
          {/* 课程信息 */}
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <img src={course.coverImage} alt={course.title} className="w-full rounded-lg shadow-md" />
              <div className="mt-6">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-500">★★★★★</div>
                  <span className="ml-2 text-gray-700">{course.rating} ({course.reviewCount} 评价)</span>
                </div>
                <div className="space-y-2">
                  <p><strong>难度：</strong>{course.difficulty}</p>
                  <p><strong>时长：</strong>{course.duration} 小时</p>
                  <p><strong>讲师：</strong>{course.instructor}</p>
                </div>
                <Link to={`/learn/${course.id}/1`} className="mt-6 block text-center bg-blue-700 text-white px-4 py-3 rounded-md hover:bg-blue-800 font-medium">
                  开始学习
                </Link>
              </div>
            </div>
            <div className="md:w-2/3">
              <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
              <p className="text-gray-600 mb-6">{course.description}</p>
              
              <h2 className="text-2xl font-semibold mb-4">讲师介绍</h2>
              <div className="bg-gray-100 p-4 rounded-lg mb-8">
                <h3 className="font-medium mb-2">{course.instructor}</h3>
                <p className="text-gray-600">{course.instructorBio}</p>
              </div>

              <h2 className="text-2xl font-semibold mb-4">课程大纲</h2>
              <div className="space-y-4">
                {course.chapters.map(chapter => (
                  <div key={chapter.id} className="border border-gray-200 rounded-lg overflow-hidden">
                    <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                      <div className="flex justify-between items-center">
                        <h3 className="font-medium">{chapter.title}</h3>
                        <span className="text-gray-500 text-sm">{chapter.duration} 分钟</span>
                      </div>
                    </div>
                    <div className="px-4 py-3">
                      <ul className="space-y-2">
                        {chapter.contents.map(content => (
                          <li key={content.id} className="flex items-center">
                            <span className="mr-2 text-blue-700">
                              {content.type === 'video' && '📹'}
                              {content.type === 'text' && '📄'}
                              {content.type === 'code' && '💻'}
                            </span>
                            <span>{content.title}</span>
                            <span className="ml-auto text-gray-500 text-sm">{content.duration} 分钟</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default CourseDetail
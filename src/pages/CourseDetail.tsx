import React from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import Layout from '../components/Layout'
import { getCourseById } from '../lib/courseData'
import { getCourseProgress, isContentComplete } from '../lib/storage'

const CourseDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const course = getCourseById(id || '1')

  if (!course) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 pt-32 text-center">
          <h2 className="text-2xl font-bold mb-4">课程未找到</h2>
          <p className="text-gray-600 mb-6">抱歉，该课程不存在</p>
          <Link to="/courses" className="text-blue-700 hover:underline">返回课程列表</Link>
        </div>
      </Layout>
    )
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
                <div className="space-y-2 mb-4">
                  <p><strong>难度：</strong>{course.difficulty}</p>
                  <p><strong>时长：</strong>{course.duration} 小时</p>
                  <p><strong>讲师：</strong>{course.instructor}</p>
                </div>
                
                {/* 进度展示 */}
                {(() => {
                  const progress = getCourseProgress(course.id)
                  if (progress > 0) {
                    return (
                      <div className="mb-4">
                        <div className="flex justify-between mb-1 text-sm">
                          <span className="text-gray-600">学习进度</span>
                          <span className="text-blue-700 font-medium">{progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <div 
                            className="bg-gradient-to-r from-green-500 to-blue-600 h-3 rounded-full" 
                            style={{ width: `${progress}%` }}
                          ></div>
                        </div>
                      </div>
                    )
                  }
                  return null
                })()}
                
                <button 
                  onClick={() => navigate(`/learn/${course.id}/1`)}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-3 rounded-md hover:from-blue-700 hover:to-blue-800 font-medium transition-all shadow-lg"
                >
                  {getCourseProgress(course.id) > 0 ? '继续学习' : '开始学习'}
                </button>
              </div>
            </div>
            <div className="md:w-2/3">
              <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
              <p className="text-gray-600 mb-6 leading-relaxed">{course.description}</p>
              
              <h2 className="text-2xl font-semibold mb-4">讲师介绍</h2>
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border border-blue-100">
                <h3 className="font-medium mb-2 text-lg">{course.instructor}</h3>
                <p className="text-gray-600">{course.instructorBio}</p>
              </div>

              <h2 className="text-2xl font-semibold mb-4">课程大纲</h2>
              <div className="space-y-4">
                {course.chapters.map((chapter, chapterIndex) => {
                  let completedCount = 0
                  chapter.contents.forEach(content => {
                    if (isContentComplete(course.id, chapter.id, content.id)) {
                      completedCount++
                    }
                  })
                  
                  return (
                    <div key={chapter.id} className="border border-gray-200 rounded-lg overflow-hidden">
                      <div className="bg-gradient-to-r from-gray-50 to-blue-50 px-4 py-3 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                          <h3 className="font-medium flex items-center">
                            <span className="w-8 h-8 bg-blue-600 text-white rounded-full inline-flex items-center justify-center mr-3 text-sm font-bold">
                              {chapterIndex + 1}
                            </span>
                            {chapter.title}
                          </h3>
                          <div className="flex items-center gap-3">
                            {completedCount > 0 && (
                              <span className="text-green-600 text-sm font-medium">
                                ✓ {completedCount}/{chapter.contents.length}
                              </span>
                            )}
                            <span className="text-gray-500 text-sm">{chapter.duration} 分钟</span>
                          </div>
                        </div>
                      </div>
                      <div className="px-4 py-3">
                        <ul className="space-y-2">
                          {chapter.contents.map((content, contentIndex) => {
                            const completed = isContentComplete(course.id, chapter.id, content.id)
                            return (
                              <li 
                                key={content.id} 
                                onClick={() => navigate(`/learn/${course.id}/${chapter.id}`)}
                                className={`flex items-center p-2 rounded cursor-pointer transition-colors hover:bg-blue-50 ${completed ? 'bg-green-50' : ''}`}
                              >
                                <span className="mr-3">
                                  {completed ? (
                                    <span className="text-green-600 text-xl">✓</span>
                                  ) : (
                                    content.type === 'video' && '📹'
                                  )}
                                  {!completed && content.type === 'text' && '📄'}
                                  {!completed && content.type === 'code' && '💻'}
                                </span>
                                <span className={`flex-1 ${completed ? 'text-gray-500 line-through' : ''}`}>{content.title}</span>
                                <span className="text-gray-400 text-sm mr-2">{content.duration} 分钟</span>
                                <span className="text-blue-500 text-sm">→</span>
                              </li>
                            )
                          })}
                        </ul>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default CourseDetail
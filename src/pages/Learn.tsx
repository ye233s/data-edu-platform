import React, { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import Layout from '../components/Layout'
import { getCourseById } from '../lib/courseData'
import { markContentComplete, isContentComplete, getCourseProgress } from '../lib/storage'
import { textToHtml } from '../lib/markdown'
import Editor from '@monaco-editor/react'

const Learn: React.FC = () => {
  const { courseId, chapterId } = useParams<{ courseId: string; chapterId: string }>()
  const navigate = useNavigate()
  const course = getCourseById(courseId || '1')
  
  if (!course) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 pt-32 text-center">
          <h2 className="text-2xl font-bold mb-4">课程未找到</h2>
          <Link to="/courses" className="text-blue-700 hover:underline">返回课程列表</Link>
        </div>
      </Layout>
    )
  }

  const chapter = course.chapters.find(ch => ch.id === chapterId) || course.chapters[0]
  const [activeContentId, setActiveContentId] = useState(chapter.contents[0].id)
  const [codeOutput, setCodeOutput] = useState('')
  const [userCode, setUserCode] = useState('')
  const [activeEditorType, setActiveEditorType] = useState<'python' | 'sql' | 'excel' | 'statistics'>('python')
  const [showSuccess, setShowSuccess] = useState(false)

  const activeContent = chapter.contents.find(c => c.id === activeContentId) || chapter.contents[0]

  useEffect(() => {
    if (activeContent.type === 'code') {
      setUserCode(activeContent.code || '')
      // 根据课程类型设置编辑器
      if (course.title.includes('SQL')) {
        setActiveEditorType('sql')
      } else if (course.title.includes('Excel')) {
        setActiveEditorType('excel')
      } else if (course.title.includes('统计学')) {
        setActiveEditorType('statistics')
      } else {
        setActiveEditorType('python')
      }
    }
  }, [activeContent, course.title])

  const handleRunCode = () => {
    if (activeContent.expectedOutput) {
      setCodeOutput(activeContent.expectedOutput)
    } else {
      setCodeOutput('✅ 代码已运行！\n(注：这是演示环境，实际运行需要真实的Python解释器)')
    }
    
    if (!isContentComplete(course.id, chapter.id, activeContentId)) {
      markContentComplete(course.id, chapter.id, activeContentId)
      setShowSuccess(true)
      setTimeout(() => setShowSuccess(false), 3000)
    }
  }

  const handleContentClick = (contentId: string) => {
    setActiveContentId(contentId)
    if (!isContentComplete(course.id, chapter.id, contentId)) {
      markContentComplete(course.id, chapter.id, contentId)
    }
  }

  const currentChapterIndex = course.chapters.findIndex(ch => ch.id === chapter.id)
  const prevChapter = currentChapterIndex > 0 ? course.chapters[currentChapterIndex - 1] : null
  const nextChapter = currentChapterIndex < course.chapters.length - 1 ? course.chapters[currentChapterIndex + 1] : null

  return (
    <Layout>
      <section className="py-20 pt-32">
        {showSuccess && (
          <div className="fixed top-20 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50">
            ✅ 学习进度已保存！
          </div>
        )}
        
        <div className="container mx-auto px-4">
          <div className="mb-6 text-sm text-gray-600">
            <Link to="/" className="hover:text-blue-700">首页</Link>
            <span className="mx-2">→</span>
            <Link to={`/courses/${course.id}`} className="hover:text-blue-700">{course.title}</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-900">{chapter.title}</span>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/4">
              <div className="bg-white rounded-xl shadow-lg p-4 sticky top-20">
                <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                  <h3 className="font-semibold mb-2">📊 课程进度</h3>
                  <div className="flex justify-between mb-1 text-sm">
                    <span>总进度</span>
                    <span className="text-blue-700 font-medium">{getCourseProgress(course.id)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full" 
                      style={{ width: `${getCourseProgress(course.id)}%` }}
                    ></div>
                  </div>
                </div>
                
                <h2 className="text-xl font-bold mb-4 flex items-center">
                  <span className="w-6 h-6 bg-blue-600 text-white rounded-full inline-flex items-center justify-center mr-2 text-sm">
                    {currentChapterIndex + 1}
                  </span>
                  {chapter.title}
                </h2>
                
                <div className="mb-4">
                  <select 
                    className="w-full p-2 border rounded-lg text-sm"
                    value={chapter.id}
                    onChange={(e) => navigate(`/learn/${course.id}/${e.target.value}`)}
                  >
                    {course.chapters.map((ch, idx) => (
                      <option key={ch.id} value={ch.id}>
                        第{idx + 1}章: {ch.title}
                      </option>
                    ))}
                  </select>
                </div>
                
                <ul className="space-y-2">
                  {chapter.contents.map((content, idx) => {
                    const completed = isContentComplete(course.id, chapter.id, content.id)
                    return (
                      <li key={content.id}>
                        <button
                          className={`w-full text-left px-3 py-3 rounded-lg transition-all ${
                            activeContentId === content.id 
                              ? 'bg-gradient-to-r from-blue-100 to-blue-50 text-blue-800 shadow border border-blue-200' 
                              : completed
                                ? 'bg-green-50 hover:bg-green-100 text-gray-700'
                                : 'hover:bg-gray-100 text-gray-700'
                          }`}
                          onClick={() => handleContentClick(content.id)}
                        >
                          <div className="flex items-center">
                            <span className="mr-3 text-lg">
                              {completed ? <span className="text-green-600">✓</span> : (
                                content.type === 'video' && '📹'
                              )}
                              {!completed && content.type === 'text' && '📄'}
                              {!completed && content.type === 'code' && '💻'}
                            </span>
                            <span className="flex-1 font-medium text-sm">{content.title}</span>
                            <span className="text-gray-500 text-xs">{content.duration}分</span>
                          </div>
                        </button>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>

            <div className="lg:w-3/4">
              <div className="bg-white rounded-xl shadow-lg p-6 lg:p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <div className="text-sm text-blue-600 font-medium mb-1">
                      {activeContent.type === 'video' ? '📹 视频教程' : 
                       activeContent.type === 'text' ? '📄 课程文档' : '💻 编程练习'}
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold">{activeContent.title}</h3>
                  </div>
                </div>

                {activeContent.type === 'video' && activeContent.videoUrl && (
                  <div className="mb-8 rounded-lg overflow-hidden shadow-md">
                    <div className="aspect-video bg-gray-900">
                      <iframe 
                        src={activeContent.videoUrl} 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen 
                        className="w-full h-full"
                      ></iframe>
                    </div>
                  </div>
                )}

                {activeContent.type === 'text' && activeContent.content && (
                  <div className="mb-8">
                    <div 
                      className="prose prose-lg max-w-none"
                      dangerouslySetInnerHTML={{ __html: textToHtml(activeContent.content) }} 
                    />
                  </div>
                )}

                {activeContent.type === 'code' && (
                  <div className="mb-8">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="font-semibold text-lg">
                        {activeEditorType === 'python' && '🐍 Python 代码编辑器'}
                        {activeEditorType === 'sql' && '🗄️ SQL 查询编辑器'}
                        {activeEditorType === 'excel' && '📊 Excel 公式练习'}
                        {activeEditorType === 'statistics' && '📈 统计计算器'}
                      </h4>
                      <button 
                        className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-2 rounded-lg hover:from-green-700 hover:to-green-800 font-medium shadow transition-all flex items-center gap-2"
                        onClick={handleRunCode}
                      >
                        <span>▶</span>
                        <span>运行代码</span>
                      </button>
                    </div>
                    
                    {activeEditorType === 'python' && (
                      <div className="border-2 border-gray-200 rounded-lg overflow-hidden shadow-lg">
                        <div className="bg-gray-100 px-4 py-2 border-b border-gray-200 flex items-center gap-2">
                          <span className="text-sm font-medium text-gray-700">Python</span>
                          <span className="text-xs text-gray-500">编辑器</span>
                        </div>
                        <Editor
                          height="400px"
                          defaultLanguage="python"
                          theme="vs-dark"
                          value={userCode}
                          onChange={(value) => setUserCode(value || '')}
                          options={{
                            fontSize: 14,
                            fontFamily: "'Fira Code', 'Consolas', monospace",
                            minimap: { enabled: false },
                            lineNumbers: 'on',
                            scrollBeyondLastLine: false,
                            automaticLayout: true,
                            tabSize: 4,
                            wordWrap: 'on',
                            padding: { top: 10, bottom: 10 },
                            renderLineHighlight: 'all',
                          }}
                        />
                      </div>
                    )}

                    {activeEditorType === 'sql' && (
                      <div className="border-2 border-gray-200 rounded-lg overflow-hidden shadow-lg">
                        <div className="bg-blue-100 px-4 py-2 border-b border-gray-200 flex items-center gap-2">
                          <span className="text-sm font-medium text-blue-700">SQL</span>
                          <span className="text-xs text-blue-500">MySQL / PostgreSQL 语法</span>
                        </div>
                        <Editor
                          height="400px"
                          defaultLanguage="sql"
                          theme="vs-dark"
                          value={userCode}
                          onChange={(value) => setUserCode(value || '')}
                          options={{
                            fontSize: 14,
                            fontFamily: "'Fira Code', 'Consolas', monospace",
                            minimap: { enabled: false },
                            lineNumbers: 'on',
                            scrollBeyondLastLine: false,
                            automaticLayout: true,
                            tabSize: 2,
                            wordWrap: 'on',
                            padding: { top: 10, bottom: 10 },
                            renderLineHighlight: 'line',
                          }}
                        />
                      </div>
                    )}

                    {activeEditorType === 'excel' && (
                      <div className="border-2 border-gray-200 rounded-lg overflow-hidden shadow-lg">
                        <div className="bg-green-100 px-4 py-2 border-b border-gray-200 flex items-center gap-2">
                          <span className="text-sm font-medium text-green-700">Excel</span>
                          <span className="text-xs text-green-500">公式和函数练习</span>
                        </div>
                        <div className="bg-white p-6">
                          <div className="mb-4 text-sm text-gray-600">
                            💡 在下方输入Excel公式，如：<code className="bg-gray-100 px-2 py-1 rounded">=SUM(A1:A10)</code>
                          </div>
                          <textarea
                            className="w-full h-48 p-4 bg-gray-50 border-2 border-gray-200 rounded-lg font-mono text-sm focus:border-green-500 focus:outline-none"
                            placeholder="在此输入Excel公式，例如：&#10;=SUM(A1:A10)&#10;=AVERAGE(B1:B5)&#10;=MAX(C1:C20)"
                            value={userCode}
                            onChange={(e) => setUserCode(e.target.value)}
                          />
                        </div>
                      </div>
                    )}

                    {activeEditorType === 'statistics' && (
                      <div className="border-2 border-gray-200 rounded-lg overflow-hidden shadow-lg">
                        <div className="bg-purple-100 px-4 py-2 border-b border-gray-200 flex items-center gap-2">
                          <span className="text-sm font-medium text-purple-700">统计计算</span>
                          <span className="text-xs text-purple-500">输入数值进行计算</span>
                        </div>
                        <div className="bg-white p-6">
                          <div className="mb-4 text-sm text-gray-600">
                            💡 输入数值数据，系统将自动计算统计指标
                          </div>
                          <textarea
                            className="w-full h-48 p-4 bg-gray-50 border-2 border-gray-200 rounded-lg font-mono text-sm focus:border-purple-500 focus:outline-none"
                            placeholder="在此输入数值（每行一个），例如：&#10;85&#10;92&#10;78&#10;90&#10;88"
                            value={userCode}
                            onChange={(e) => setUserCode(e.target.value)}
                          />
                        </div>
                      </div>
                    )}
                    
                    {codeOutput && (
                      <div className="mt-4">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="font-medium text-gray-700">📤 运行结果</h4>
                          <span className="text-xs text-gray-500">(演示环境)</span>
                        </div>
                        <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm whitespace-pre-wrap border-l-4 border-green-500 shadow-inner">
                          {codeOutput}
                        </div>
                      </div>
                    )}
                  </div>
                )}
                
                <div className="mt-10 pt-6 border-t flex justify-between items-center">
                  {prevChapter ? (
                    <button 
                      onClick={() => navigate(`/learn/${course.id}/${prevChapter.id}`)}
                      className="flex items-center gap-2 px-4 py-2 text-blue-700 hover:bg-blue-50 rounded-lg transition-colors"
                    >
                      ← 上一章: {prevChapter.title}
                    </button>
                  ) : (
                    <div></div>
                  )}
                  
                  {nextChapter ? (
                    <button 
                      onClick={() => navigate(`/learn/${course.id}/${nextChapter.id}`)}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-lg transition-colors shadow"
                    >
                      下一章: {nextChapter.title} →
                    </button>
                  ) : (
                    <div></div>
                  )}
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <Link to={`/courses/${course.id}`} className="text-gray-600 hover:text-blue-700">
                  ← 返回课程详情
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Learn

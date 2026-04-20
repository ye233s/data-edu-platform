import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Layout from '../components/Layout'

const Learn: React.FC = () => {
  const { courseId, chapterId } = useParams<{ courseId: string; chapterId: string }>()

  // 模拟学习内容数据
  const course = {
    id: courseId || '1',
    title: 'Python基础入门',
    chapters: [
      {
        id: '1',
        title: 'Python简介',
        contents: [
          {
            id: '1',
            type: 'video',
            title: 'Python的历史和应用',
            videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            duration: 20
          },
          {
            id: '2',
            type: 'text',
            title: 'Python的安装和环境配置',
            content: '# Python的安装和环境配置\n\n## 下载Python\n\n1. 访问Python官方网站：https://www.python.org/\n2. 点击"Downloads"选项卡\n3. 选择适合你操作系统的版本进行下载\n\n## 安装Python\n\n### Windows\n1. 运行下载的安装程序\n2. 勾选"Add Python to PATH"\n3. 点击"Install Now"\n\n### macOS\n1. 运行下载的.pkg文件\n2. 按照安装向导的指示进行操作\n\n### Linux\n大多数Linux发行版已经预装了Python。你可以通过运行以下命令来检查Python版本：\n```bash\npython --version\n```\n\n## 验证安装\n\n安装完成后，打开命令提示符或终端，运行以下命令来验证Python是否安装成功：\n```bash\npython --version\n```\n\n你应该看到类似以下输出：\n```\nPython 3.10.0\n```\n\n## 安装IDE\n\n推荐使用以下IDE：\n1. PyCharm\n2. Visual Studio Code\n3. Jupyter Notebook'
          },
          {
            id: '3',
            type: 'code',
            title: '第一个Python程序',
            code: '# 第一个Python程序\nprint("Hello, World!")\n\n# 变量和数据类型\nname = "John"\nage = 25\nheight = 1.75\nis_student = True\n\n# 打印变量\nprint("Name:", name)\nprint("Age:", age)\nprint("Height:", height)\nprint("Is student:", is_student)'
          }
        ]
      },
      {
        id: '2',
        title: 'Python基础语法',
        contents: [
          {
            id: '4',
            type: 'video',
            title: '变量和数据类型',
            videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            duration: 25
          },
          {
            id: '5',
            type: 'text',
            title: '运算符和表达式',
            content: '# 运算符和表达式\n\n## 算术运算符\n- + 加法\n- - 减法\n- * 乘法\n- / 除法\n- % 取模\n- ** 幂\n- // 整除\n\n## 比较运算符\n- == 等于\n- != 不等于\n- > 大于\n- < 小于\n- >= 大于等于\n- <= 小于等于\n\n## 逻辑运算符\n- and 与\n- or 或\n- not 非\n\n## 赋值运算符\n- = 赋值\n- += 加赋值\n- -= 减赋值\n- *= 乘赋值\n- /= 除赋值\n- %= 取模赋值\n- **= 幂赋值\n- //= 整除赋值'
          },
          {
            id: '6',
            type: 'code',
            title: '练习：基本运算',
            code: '# 练习：基本运算\n\n# 计算圆的面积\nradius = 5\npi = 3.14159\narea = pi * radius ** 2\nprint("圆的面积:", area)\n\n# 计算矩形的周长\nlength = 10\nwidth = 5\nperimeter = 2 * (length + width)\nprint("矩形的周长:", perimeter)\n\n# 计算平均值\nnumbers = [10, 20, 30, 40, 50]\naverage = sum(numbers) / len(numbers)\nprint("平均值:", average)'
          }
        ]
      }
    ]
  }

  const chapter = course.chapters.find(ch => ch.id === chapterId) || course.chapters[0]
  const [activeContentId, setActiveContentId] = useState(chapter.contents[0].id)
  const [codeOutput, setCodeOutput] = useState('')
  const [userCode, setUserCode] = useState(chapter.contents.find(c => c.type === 'code')?.code || '')

  const handleRunCode = () => {
    // 模拟代码执行
    setCodeOutput('Hello, World!\nName: John\nAge: 25\nHeight: 1.75\nIs student: True')
  }

  const activeContent = chapter.contents.find(c => c.id === activeContentId) || chapter.contents[0]

  return (
    <Layout>
      <section className="py-20 pt-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* 侧边栏 - 章节内容列表 */}
            <div className="lg:w-1/4">
              <div className="bg-white rounded-lg shadow-md p-4 sticky top-20">
                <h2 className="text-xl font-semibold mb-4">{chapter.title}</h2>
                <ul className="space-y-2">
                  {chapter.contents.map(content => (
                    <li key={content.id}>
                      <button
                        className={`w-full text-left px-3 py-2 rounded-md ${activeContentId === content.id ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-100'}`}
                        onClick={() => setActiveContentId(content.id)}
                      >
                        <div className="flex items-center">
                          <span className="mr-2">
                            {content.type === 'video' && '📹'}
                            {content.type === 'text' && '📄'}
                            {content.type === 'code' && '💻'}
                          </span>
                          <span className="flex-1">{content.title}</span>
                          <span className="text-gray-500 text-sm">{content.duration} 分钟</span>
                        </div>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 主内容区 */}
            <div className="lg:w-3/4">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-2xl font-semibold mb-6">{activeContent.title}</h3>

                {/* 视频内容 */}
                {activeContent.type === 'video' && (
                  <div className="aspect-w-16 aspect-h-9 mb-6">
                    <iframe 
                      src={activeContent.videoUrl} 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen 
                      className="w-full h-96"
                    ></iframe>
                  </div>
                )}

                {/* 文本内容 */}
                {activeContent.type === 'text' && (
                  <div className="prose max-w-none mb-6">
                    {activeContent.content && (
                      <div dangerouslySetInnerHTML={{ __html: activeContent.content.replace(/\n/g, '<br>').replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>').replace(/# (.*?)(?=\n|$)/g, '<h1>$1</h1>').replace(/## (.*?)(?=\n|$)/g, '<h2>$1</h2>') }} />
                    )}
                  </div>
                )}

                {/* 代码内容 */}
                {activeContent.type === 'code' && (
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium">代码编辑器</h4>
                      <button 
                        className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800"
                        onClick={handleRunCode}
                      >
                        运行代码
                      </button>
                    </div>
                    <textarea 
                      className="w-full h-64 p-4 border border-gray-300 rounded-md font-mono text-sm" 
                      value={userCode}
                      onChange={(e) => setUserCode(e.target.value)}
                    ></textarea>
                    <div className="mt-4">
                      <h4 className="font-medium mb-2">运行结果</h4>
                      <div className="bg-gray-100 p-4 rounded-md font-mono text-sm whitespace-pre">
                        {codeOutput}
                      </div>
                    </div>
                  </div>
                )}

                {/* 互动练习 */}
                {activeContent.type === 'code' && (
                  <div className="mt-8">
                    <h4 className="font-medium mb-4">互动练习</h4>
                    <div className="bg-gray-50 p-4 rounded-md">
                      <p className="mb-4">请完成以下练习：</p>
                      <p className="mb-4">编写一个Python程序，计算1到100的和。</p>
                      <div className="mt-4">
                        <button className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800">
                          提交答案
                        </button>
                      </div>
                    </div>
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

export default Learn
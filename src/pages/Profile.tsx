import React, { useState } from 'react'
import Layout from '../components/Layout'

const Profile: React.FC = () => {
  // 模拟用户信息
  const [userInfo, setUserInfo] = useState({
    name: '张三',
    email: 'zhangsan@example.com',
    avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=user%20avatar%20portrait&image_size=square',
    bio: '商务数据分析与应用专业学生，热爱数据分析和Python编程'
  })

  // 模拟学习记录
  const learningRecords = [
    {
      id: '1',
      courseName: 'Python基础入门',
      chapterName: 'Python简介',
      contentName: '第一个Python程序',
      completedAt: '2026-04-20 14:30',
      duration: '25分钟'
    },
    {
      id: '2',
      courseName: 'Python基础入门',
      chapterName: 'Python基础语法',
      contentName: '变量和数据类型',
      completedAt: '2026-04-19 16:45',
      duration: '30分钟'
    },
    {
      id: '3',
      courseName: '数据分析与可视化',
      chapterName: '数据清洗',
      contentName: 'Pandas基础',
      completedAt: '2026-04-18 10:20',
      duration: '45分钟'
    },
    {
      id: '4',
      courseName: '数据分析与可视化',
      chapterName: '数据可视化',
      contentName: 'Matplotlib入门',
      completedAt: '2026-04-17 13:15',
      duration: '40分钟'
    }
  ]

  // 模拟设置选项
  const [settings, setSettings] = useState({
    notifications: true,
    emailUpdates: false,
    darkMode: false
  })

  const handleSettingChange = (key: keyof typeof settings) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  return (
    <Layout>
      <section className="py-20 pt-32">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-12 text-center">个人中心</h1>

          <div className="flex flex-col md:flex-row gap-8">
            {/* 个人信息 */}
            <div className="md:w-1/3">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex flex-col items-center mb-6">
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                    <img src={userInfo.avatar} alt={userInfo.name} className="w-full h-full object-cover" />
                  </div>
                  <h2 className="text-xl font-semibold">{userInfo.name}</h2>
                  <p className="text-gray-600">{userInfo.email}</p>
                </div>
                <div className="mb-6">
                  <h3 className="font-medium mb-2">个人简介</h3>
                  <p className="text-gray-600">{userInfo.bio}</p>
                </div>
                <button className="w-full bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800">
                  编辑个人资料
                </button>
              </div>
            </div>

            {/* 学习记录和设置 */}
            <div className="md:w-2/3">
              {/* 学习记录 */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-xl font-semibold mb-6">学习记录</h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">课程</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">章节</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">内容</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">完成时间</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">时长</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {learningRecords.map(record => (
                        <tr key={record.id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="font-medium text-gray-900">{record.courseName}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-gray-600">{record.chapterName}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-gray-600">{record.contentName}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-gray-600">{record.completedAt}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-gray-600">{record.duration}</div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 设置 */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-6">设置</h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">通知提醒</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="sr-only peer" 
                        checked={settings.notifications}
                        onChange={() => handleSettingChange('notifications')}
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-700"></div>
                    </label>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">邮件更新</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="sr-only peer" 
                        checked={settings.emailUpdates}
                        onChange={() => handleSettingChange('emailUpdates')}
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-700"></div>
                    </label>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">深色模式</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="sr-only peer" 
                        checked={settings.darkMode}
                        onChange={() => handleSettingChange('darkMode')}
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-700"></div>
                    </label>
                  </div>
                  <div className="pt-4 border-t border-gray-200">
                    <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
                      退出登录
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Profile
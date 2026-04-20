import React, { ReactNode } from 'react'
import Navbar from './Navbar'

interface LayoutProps {
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">数据分析在线教育平台</h3>
              <p className="text-gray-400">专为商务数据分析与应用专业学生设计的在线学习平台</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">快速链接</h3>
              <ul className="space-y-2">
                <li><a href="/" className="text-gray-400 hover:text-white">首页</a></li>
                <li><a href="/courses" className="text-gray-400 hover:text-white">课程中心</a></li>
                <li><a href="/achievements" className="text-gray-400 hover:text-white">成就中心</a></li>
                <li><a href="/profile" className="text-gray-400 hover:text-white">个人中心</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">联系我们</h3>
              <p className="text-gray-400">邮箱：contact@data-learning.com</p>
              <p className="text-gray-400">电话：123-456-7890</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>© 2026 数据分析在线教育平台. 保留所有权利.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
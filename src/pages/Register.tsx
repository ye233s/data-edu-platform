import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'

const Register: React.FC = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 模拟注册逻辑
    if (name && email && password && confirmPassword) {
      if (password === confirmPassword) {
        // 注册成功，跳转到登录页
        window.location.href = '/login'
      } else {
        setError('两次输入的密码不一致')
      }
    } else {
      setError('请填写所有必填字段')
    }
  }

  return (
    <Layout>
      <section className="py-20 pt-32">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <h1 className="text-3xl font-bold mb-8 text-center">注册</h1>
            <div className="bg-white rounded-lg shadow-md p-6">
              {error && (
                <div className="bg-red-100 text-red-700 p-3 rounded-md mb-4">
                  {error}
                </div>
              )}
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 mb-2">姓名</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="请输入姓名"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 mb-2">邮箱</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="请输入邮箱"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="password" className="block text-gray-700 mb-2">密码</label>
                  <input 
                    type="password" 
                    id="password" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="请输入密码"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="confirmPassword" className="block text-gray-700 mb-2">确认密码</label>
                  <input 
                    type="password" 
                    id="confirmPassword" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="请确认密码"
                  />
                </div>
                <button type="submit" className="w-full bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800 font-medium">
                  注册
                </button>
                <div className="mt-4 text-center">
                  <Link to="/login" className="text-blue-700 hover:underline">
                    已有账号？立即登录
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Register
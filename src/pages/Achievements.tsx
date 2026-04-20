import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import Layout from '../components/Layout'

const Achievements: React.FC = () => {
  // 模拟成就数据
  const achievements = [
    {
      id: '1',
      name: 'Python初学者',
      description: '完成Python基础入门课程',
      badgeUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=python%20beginner%20badge&image_size=square',
      unlockedAt: '2026-04-01'
    },
    {
      id: '2',
      name: '数据分析师',
      description: '完成数据分析与可视化课程',
      badgeUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=data%20analyst%20badge&image_size=square',
      unlockedAt: '2026-04-10'
    },
    {
      id: '3',
      name: '学习达人',
      description: '连续学习7天',
      badgeUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=learning%20master%20badge&image_size=square',
      unlockedAt: '2026-04-15'
    },
    {
      id: '4',
      name: '代码高手',
      description: '完成10个代码实践任务',
      badgeUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=code%20master%20badge&image_size=square',
      unlockedAt: '2026-04-18'
    },
    {
      id: '5',
      name: '测验达人',
      description: '章节测验平均得分90分以上',
      badgeUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=quiz%20master%20badge&image_size=square',
      unlockedAt: '2026-04-20'
    },
    {
      id: '6',
      name: '课程完成者',
      description: '完成3门课程',
      badgeUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=course%20completion%20badge&image_size=square',
      unlockedAt: '2026-04-25'
    }
  ]

  // 模拟学习统计数据
  const learningStats = [
    { name: '周一', hours: 2 },
    { name: '周二', hours: 1.5 },
    { name: '周三', hours: 3 },
    { name: '周四', hours: 2.5 },
    { name: '周五', hours: 1 },
    { name: '周六', hours: 4 },
    { name: '周日', hours: 3.5 }
  ]

  // 模拟排行榜数据
  const leaderboard = [
    { rank: 1, name: '张三', score: 1250 },
    { rank: 2, name: '李四', score: 1120 },
    { rank: 3, name: '王五', score: 980 },
    { rank: 4, name: '赵六', score: 850 },
    { rank: 5, name: '孙七', score: 720 },
    { rank: 6, name: '周八', score: 680 },
    { rank: 7, name: '吴九', score: 550 },
    { rank: 8, name: '郑十', score: 420 }
  ]

  return (
    <Layout>
      <section className="py-20 pt-32">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-12 text-center">成就中心</h1>

          {/* 徽章系统 */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-8">我的徽章</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {achievements.map(achievement => (
                <div key={achievement.id} className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-white shadow-md flex items-center justify-center mb-3">
                    <img src={achievement.badgeUrl} alt={achievement.name} className="w-16 h-16 object-contain" />
                  </div>
                  <h3 className="font-medium text-center">{achievement.name}</h3>
                  <p className="text-gray-500 text-sm text-center">{achievement.unlockedAt}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 学习统计 */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-8">学习统计</h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="mb-6">
                <h3 className="font-medium mb-4">本周学习时长</h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={learningStats}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis label={{ value: '小时', angle: -90, position: 'insideLeft' }} />
                      <Tooltip />
                      <Bar dataKey="hours" fill="#1E40AF" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-gray-50 p-4 rounded-md text-center">
                  <div className="text-3xl font-bold text-blue-700">12</div>
                  <div className="text-gray-600">总学习小时</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-md text-center">
                  <div className="text-3xl font-bold text-blue-700">3</div>
                  <div className="text-gray-600">完成课程</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-md text-center">
                  <div className="text-3xl font-bold text-blue-700">25</div>
                  <div className="text-gray-600">完成练习</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-md text-center">
                  <div className="text-3xl font-bold text-blue-700">6</div>
                  <div className="text-gray-600">获得徽章</div>
                </div>
              </div>
            </div>
          </div>

          {/* 排行榜 */}
          <div>
            <h2 className="text-2xl font-semibold mb-8">排行榜</h2>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">排名</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">用户名</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">分数</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {leaderboard.map((user, index) => (
                    <tr key={index} className={index === 0 ? 'bg-yellow-50' : index === 1 ? 'bg-gray-50' : index === 2 ? 'bg-amber-50' : ''}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium text-gray-900">{user.rank}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium text-gray-900">{user.name}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium text-gray-900">{user.score}</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Achievements
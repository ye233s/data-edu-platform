# 数据分析在线教育平台

基于Python的数据分析在线教育平台，专为商务数据分析与应用专业学生设计。

## 功能特性

1. **完整的课程体系**：提供从基础到高级的数据分析课程
2. **互动式学习模块**：包含视频学习、代码实践和互动练习
3. **学、练习、测评**：完整的学习闭环
4. **成就激励系统**：徽章系统、学习统计和排行榜

## 技术栈

- **前端**：React 18 + TypeScript + Tailwind CSS + Vite
- **后端**：Supabase (认证、数据库、存储)
- **部署**：Cloudflare Pages

## 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

### 构建

```bash
npm run build
```

### 部署到Cloudflare Pages

1. 登录Cloudflare控制台
2. 创建新的Pages项目
3. 连接你的Git仓库
4. 配置构建命令：`npm run build`
5. 配置输出目录：`dist`
6. 点击部署

## 项目结构

```
├── src/
│   ├── components/       # 组件
│   ├── pages/            # 页面
│   ├── lib/              # 工具库
│   ├── utils/            # 工具函数
│   ├── hooks/            # 自定义钩子
│   ├── App.tsx           # 应用入口
│   └── main.tsx          # 主文件
├── .env                  # 环境变量
├── package.json          # 项目配置
└── tailwind.config.js    # Tailwind配置
```

## 环境变量

需要在`.env`文件中配置以下环境变量：

```
VITE_SUPABASE_URL=https://your-supabase-url.supabase.co
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
```

## 许可证

MIT

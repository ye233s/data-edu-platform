// 真实的课程数据
export interface ContentItem {
  id: string
  type: 'video' | 'text' | 'code'
  title: string
  duration: number
  content?: string
  videoUrl?: string
  code?: string
  expectedOutput?: string
}

export interface Chapter {
  id: string
  title: string
  duration: number
  contents: ContentItem[]
}

export interface Course {
  id: string
  title: string
  description: string
  coverImage: string
  difficulty: '初级' | '中级' | '高级'
  duration: number
  instructor: string
  instructorBio: string
  rating: number
  reviewCount: number
  chapters: Chapter[]
}

export const coursesData: Course[] = [
  {
    id: '1',
    title: 'Python基础入门',
    description: '本课程将帮助你掌握Python编程语言的基础知识，为数据分析打下坚实的基础。通过理论学习和实践练习，你将学会Python的基本语法、数据类型、控制结构、函数、模块等核心概念。',
    coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=python%20programming%20course%20cover%20professional&image_size=landscape_4_3',
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
          { 
            id: '1', 
            type: 'video', 
            title: 'Python的历史和应用', 
            duration: 10,
            videoUrl: 'https://www.youtube.com/embed/Y8Tko2YC5hA'
          },
          { 
            id: '2', 
            type: 'text', 
            title: 'Python的安装和环境配置', 
            duration: 15,
            content: '# Python的安装和环境配置\n\n## 下载Python\n\n1. 访问Python官方网站：https://www.python.org/\n2. 点击"Downloads"选项卡\n3. 选择适合你操作系统的版本进行下载\n\n## 安装Python\n\n### Windows\n1. 运行下载的安装程序\n2. 勾选"Add Python to PATH"（非常重要！）\n3. 点击"Install Now"\n\n### macOS\n1. 运行下载的.pkg文件\n2. 按照安装向导的指示进行操作\n\n### Linux\n大多数Linux发行版已经预装了Python。你可以通过运行以下命令来检查Python版本：\n```bash\npython3 --version\n```\n\n## 验证安装\n\n安装完成后，打开命令提示符或终端，运行以下命令来验证Python是否安装成功：\n```bash\npython3 --version\n```\n\n你应该看到类似以下输出：\n```\nPython 3.11.0\n```\n\n## 推荐的开发工具\n\n推荐使用以下开发环境：\n1. **Visual Studio Code** - 免费且功能强大\n2. **PyCharm Community Edition** - 专业的Python IDE\n3. **Jupyter Notebook** - 适合数据分析'
          },
          { 
            id: '3', 
            type: 'code', 
            title: '第一个Python程序', 
            duration: 25,
            code: '# 第一个Python程序\nprint("Hello, World!")\n\n# 变量和数据类型\nname = "张三"\nage = 25\nheight = 1.75\nis_student = True\n\n# 打印变量\nprint("姓名:", name)\nprint("年龄:", age)\nprint("身高:", height, "米")\nprint("是学生:", is_student)\n\n# 计算\nx = 10\ny = 20\nsum_result = x + y\nprint(x, "+", y, "=", sum_result)',
            expectedOutput: 'Hello, World!\n姓名: 张三\n年龄: 25\n身高: 1.75 米\n是学生: True\n10 + 20 = 30'
          }
        ]
      },
      {
        id: '2',
        title: '变量和数据类型',
        duration: 90,
        contents: [
          { 
            id: '4', 
            type: 'text', 
            title: '基本数据类型', 
            duration: 20,
            content: '# Python基本数据类型\n\n## 数据类型概述\n\nPython是一种动态类型语言，变量不需要声明类型。\n\n## 主要数据类型\n\n### 1. 整数 (int)\n```python\nage = 25\nyear = 2024\n```\n\n### 2. 浮点数 (float)\n```python\nprice = 19.99\npi = 3.14159\n```\n\n### 3. 字符串 (str)\n```python\nname = "张三"\nmessage = \'Hello World\'\n```\n\n### 4. 布尔值 (bool)\n```python\nis_student = True\nis_working = False\n```\n\n## 类型转换\n\n```python\n# 字符串转整数\nnum_str = "100"\nnum_int = int(num_str)\n\n# 整数转浮点数\nnum_float = float(100)\n\n# 查看类型\nprint(type(100))  # <class \'int\'>\n```'
          },
          { 
            id: '5', 
            type: 'code', 
            title: '数据类型练习', 
            duration: 35,
            code: '# 数据类型练习\n\n# 1. 创建变量\nname = "张三"\nage = 25\nscore = 95.5\nis_pass = True\n\n# 2. 打印变量和类型\nprint("姓名:", name, type(name))\nprint("年龄:", age, type(age))\nprint("分数:", score, type(score))\nprint("是否及格:", is_pass, type(is_pass))\n\n# 3. 类型转换\nage_str = str(age)\nprint("年龄字符串:", age_str, type(age_str))\n\nscore_int = int(score)\nprint("分数整数:", score_int, type(score_int))\n\n# 4. 计算\nresult = age + score_int\nprint("年龄 + 分数:", result)',
            expectedOutput: '姓名: 张三 <class \'str\'>\n年龄: 25 <class \'int\'>\n分数: 95.5 <class \'float\'>\n是否及格: True <class \'bool\'>\n年龄字符串: 25 <class \'str\'>\n分数整数: 95 <class \'int\'>\n年龄 + 分数: 120'
          }
        ]
      },
      {
        id: '3',
        title: '运算符和表达式',
        duration: 120,
        contents: [
          { 
            id: '6', 
            type: 'text', 
            title: '算术运算符', 
            duration: 25,
            content: '# Python算术运算符\n\n## 基本运算符\n\n| 运算符 | 说明 | 示例 |\n|--------|------|------|\n| + | 加法 | 5 + 3 = 8 |\n| - | 减法 | 5 - 3 = 2 |\n| * | 乘法 | 5 * 3 = 15 |\n| / | 除法 | 5 / 2 = 2.5 |\n| // | 整除 | 5 // 2 = 2 |\n| % | 取模 | 5 % 2 = 1 |\n| ** | 幂 | 5 ** 2 = 25 |\n\n## 示例\n\n```python\n# 基本运算\na = 10\nb = 3\n\nprint(a + b)  # 13\nprint(a - b)  # 7\nprint(a * b)  # 30\nprint(a / b)  # 3.333...\nprint(a // b) # 3\nprint(a % b)  # 1\nprint(a ** b) # 1000\n```\n\n## 复合赋值运算符\n\n```python\nx = 10\nx += 5  # x = x + 5 = 15\nx -= 3  # x = x - 3 = 12\nx *= 2  # x = x * 2 = 24\nx /= 4  # x = x / 4 = 6\n```'
          },
          { 
            id: '7', 
            type: 'code', 
            title: '运算符练习', 
            duration: 45,
            code: '# 运算符练习\n\n# 1. 基本运算\nprint("=== 基本运算 ===")\na = 15\nb = 4\nprint(f"{a} + {b} =", a + b)\nprint(f"{a} - {b} =", a - b)\nprint(f"{a} * {b} =", a * b)\nprint(f"{a} / {b} =", a / b)\nprint(f"{a} // {b} =", a // b)\nprint(f"{a} % {b} =", a % b)\nprint(f"{a} ** {b} =", a ** b)\n\n# 2. 圆的面积计算\nprint("\\n=== 圆面积计算 ===")\nradius = 5\npi = 3.14159\narea = pi * radius ** 2\nprint(f"半径 {radius} 的圆面积 =", area)\n\n# 3. 温度转换\nprint("\\n=== 温度转换 ===")\ncelsius = 25\nfahrenheit = celsius * 9 / 5 + 32\nprint(f"{celsius}°C = {fahrenheit}°F")\n\n# 4. 平均值\nprint("\\n=== 平均值计算 ===")\nscores = [85, 92, 78, 90, 88]\naverage = sum(scores) / len(scores)\nprint("分数:", scores)\nprint("平均分:", average)',
            expectedOutput: '=== 基本运算 ===\n15 + 4 = 19\n15 - 4 = 11\n15 * 4 = 60\n15 / 4 = 3.75\n15 // 4 = 3\n15 % 4 = 3\n15 ** 4 = 50625\n\n=== 圆面积计算 ===\n半径 5 的圆面积 = 78.53975\n\n=== 温度转换 ===\n25°C = 77.0°F\n\n=== 平均值计算 ===\n分数: [85, 92, 78, 90, 88]\n平均分: 86.6'
          }
        ]
      }
    ]
  },
  {
    id: '2',
    title: '数据分析与可视化',
    description: '学习使用Python进行数据清洗、分析和可视化。掌握Pandas、NumPy和Matplotlib等核心库，能够独立完成数据分析项目。',
    coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=data%20analysis%20visualization%20course%20professional&image_size=landscape_4_3',
    difficulty: '中级',
    duration: 16,
    instructor: '李老师',
    instructorBio: '资深数据科学家，10年数据分析经验，曾在互联网大厂负责用户增长分析。',
    rating: 4.9,
    reviewCount: 85,
    chapters: [
      {
        id: '1',
        title: 'NumPy基础',
        duration: 90,
        contents: [
          { 
            id: '1', 
            type: 'text', 
            title: 'NumPy数组入门', 
            duration: 20,
            content: '# NumPy基础\n\n## 什么是NumPy\n\nNumPy是Python的科学计算库，提供高性能的多维数组对象。\n\n## 安装\n\n```bash\npip install numpy\n```\n\n## 创建数组\n\n```python\nimport numpy as np\n\n# 从列表创建\narr1 = np.array([1, 2, 3, 4, 5])\n\n# 创建全0数组\narr2 = np.zeros(5)\n\n# 创建全1数组\narr3 = np.ones(5)\n\n# 创建范围数组\narr4 = np.arange(0, 10, 2)  # [0, 2, 4, 6, 8]\n\nprint(arr1)\n```'
          },
          { 
            id: '2', 
            type: 'code', 
            title: 'NumPy数组练习', 
            duration: 40,
            code: '# NumPy练习\nimport numpy as np\n\n# 1. 创建数组\nprint("=== 创建数组 ===")\narr1 = np.array([1, 2, 3, 4, 5])\nprint("数组1:", arr1)\n\narr2 = np.zeros(5)\nprint("全0数组:", arr2)\n\narr3 = np.ones(5)\nprint("全1数组:", arr3)\n\narr4 = np.arange(1, 11)\nprint("1-10:", arr4)\n\n# 2. 数组运算\nprint("\\n=== 数组运算 ===")\na = np.array([1, 2, 3])\nb = np.array([4, 5, 6])\nprint("a + b =", a + b)\nprint("a * b =", a * b)\nprint("a * 2 =", a * 2)\n\n# 3. 统计\nprint("\\n=== 统计计算 ===")\nscores = np.array([85, 92, 78, 90, 88, 95, 82])\nprint("分数:", scores)\nprint("平均分:", np.mean(scores))\nprint("最高分:", np.max(scores))\nprint("最低分:", np.min(scores))\nprint("标准差:", np.std(scores))',
            expectedOutput: '=== 创建数组 ===\n数组1: [1 2 3 4 5]\n全0数组: [0. 0. 0. 0. 0.]\n全1数组: [1. 1. 1. 1. 1.]\n1-10: [ 1  2  3  4  5  6  7  8  9 10]\n\n=== 数组运算 ===\na + b = [5 7 9]\na * b = [ 4 10 18]\na * 2 = [2 4 6]\n\n=== 统计计算 ===\n分数: [85 92 78 90 88 95 82]\n平均分: 87.14285714285714\n最高分: 95\n最低分: 78\n标准差: 5.494519316455111'
          }
        ]
      }
    ]
  },
  {
    id: '3',
    title: '商务数据分析实战',
    description: '应用数据分析技术解决实际商务问题。包含用户分析、销售预测、A/B测试等实战项目，让你具备解决真实问题的能力。',
    coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=business%20data%20analysis%20course%20professional&image_size=landscape_4_3',
    difficulty: '高级',
    duration: 20,
    instructor: '王老师',
    instructorBio: '前京东商业分析专家，主导过多个千万级用户的数据分析项目。',
    rating: 4.7,
    reviewCount: 62,
    chapters: [
      {
        id: '1',
        title: '商务分析框架',
        duration: 120,
        contents: [
          { 
            id: '1', 
            type: 'text', 
            title: '商务数据分析方法论', 
            duration: 30,
            content: '# 商务数据分析实战\n\n## 分析框架\n\n### 1. 明确问题\n- 我们要解决什么问题？\n- 这个问题对业务有什么影响？\n\n### 2. 数据收集\n- 需要哪些数据？\n- 数据来源是什么？\n- 数据质量如何？\n\n### 3. 数据清洗\n- 处理缺失值\n- 处理异常值\n- 数据格式转换\n\n### 4. 数据分析\n- 描述性统计\n- 探索性分析\n- 建模分析\n\n### 5. 结果呈现\n- 数据可视化\n- 业务洞察\n- 行动建议\n\n## 关键指标\n\n- **用户指标**：DAU、MAU、留存率、转化率\n- **销售指标**：GMV、客单价、复购率\n- **产品指标**：点击率、使用时长、功能渗透率'
          }
        ]
      }
    ]
  }
]

export function getCourseById(id: string): Course | undefined {
  return coursesData.find(course => course.id === id)
}

export function getChapterById(courseId: string, chapterId: string): Chapter | undefined {
  const course = getCourseById(courseId)
  return course?.chapters.find(ch => ch.id === chapterId)
}

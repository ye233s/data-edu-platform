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
    coverImage: 'https://images.unsplash.com/photo-1526379007216-c7203e2357989?w=800&h=450&fit=crop',
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
    coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38e372?w=800&h=450&fit=crop',
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
      },
      {
        id: '2',
        title: 'Pandas入门',
        duration: 100,
        contents: [
          {
            id: '3',
            type: 'text',
            title: 'DataFrame基础',
            duration: 25,
            content: '# Pandas入门\n\n## 什么是Pandas\n\nPandas是Python的数据分析库，提供高效的数据结构和数据分析工具。\n\n## 安装\n\n```bash\npip install pandas\n```\n\n## 创建DataFrame\n\n```python\nimport pandas as pd\n\n# 从字典创建\ndata = {\n    \'姓名\': [\'张三\', \'李四\', \'王五\'],\n    \'年龄\': [25, 30, 35],\n    \'城市\': [\'北京\', \'上海\', \'广州\']\n}\ndf = pd.DataFrame(data)\nprint(df)\n```\n\n## 基本操作\n\n```python\n# 查看前几行\nprint(df.head())\n\n# 查看数据形状\nprint(df.shape)\n\n# 查看列名\nprint(df.columns)\n```'
          },
          {
            id: '4',
            type: 'code',
            title: 'Pandas数据操作',
            duration: 45,
            code: '# Pandas练习\nimport pandas as pd\nimport numpy as np\n\n# 1. 创建DataFrame\nprint("=== 创建DataFrame ===")\ndata = {\n    \'产品\': [\'苹果\', \'香蕉\', \'橙子\', \'葡萄\'],\n    \'价格\': [5.5, 3.0, 4.0, 8.0],\n    \'销量\': [100, 150, 120, 80]\n}\ndf = pd.DataFrame(data)\nprint(df)\n\n# 2. 基本统计\nprint("\\n=== 基本统计 ===")\nprint(df.describe())\n\n# 3. 数据筛选\nprint("\\n=== 价格大于4的产品 ===")\nprint(df[df[\'价格\'] > 4])',
            expectedOutput: '=== 创建DataFrame ===\n   产品  价格   销量\n0   苹果  5.5  100\n1   香蕉  3.0  150\n2   橙子  4.0  120\n3   葡萄  8.0   80\n\n=== 基本统计 ===\n           价格          销量\ncount  4.000000    4.000000\nmean   5.125000  112.500000\nstd    2.136001   30.413813\nmin    3.000000   80.000000\n25%    3.750000   95.000000\n50%    4.750000  110.000000\n75%    6.125000  127.500000\nmax    8.000000  150.000000\n\n=== 价格大于4的产品 ===\n   产品  价格   销量\n0   苹果  5.5  100\n3   葡萄  8.0   80'
          }
        ]
      },
      {
        id: '3',
        title: 'Matplotlib数据可视化',
        duration: 110,
        contents: [
          {
            id: '5',
            type: 'text',
            title: '数据可视化基础',
            duration: 30,
            content: '# Matplotlib数据可视化\n\n## 什么是Matplotlib\n\nMatplotlib是Python的绘图库，用于创建各种静态、动态和交互式的可视化内容。\n\n## 安装\n\n```bash\npip install matplotlib\n```\n\n## 基本绘图\n\n```python\nimport matplotlib.pyplot as plt\nimport numpy as np\n\n# 数据\nx = np.linspace(0, 10, 100)\ny = np.sin(x)\n\n# 绘图\nplt.plot(x, y)\nplt.title(\'正弦曲线\')\nplt.xlabel(\'x\')\nplt.ylabel(\'sin(x)\')\nplt.show()\n```'
          },
          {
            id: '6',
            type: 'code',
            title: '绘制图表',
            duration: 50,
            code: '# Matplotlib绘图练习\nimport matplotlib.pyplot as plt\nimport numpy as np\n\n# 1. 折线图\nprint("=== 绘制折线图 ===")\nx = np.linspace(0, 10, 50)\ny1 = np.sin(x)\ny2 = np.cos(x)\n\nplt.figure(figsize=(10, 6))\nplt.plot(x, y1, label=\'sin(x)\', marker=\'o\')\nplt.plot(x, y2, label=\'cos(x)\', linestyle=\'--\')\nplt.title(\'三角函数图\')\nplt.xlabel(\'x\')\nplt.ylabel(\'y\')\nplt.legend()\nplt.grid(True)\nplt.savefig(\'trig_plot.png\')\nprint("图表已保存到 trig_plot.png")',
            expectedOutput: '=== 绘制折线图 ===\n图表已保存到 trig_plot.png'
          }
        ]
      }
    ]
  },
  {
    id: '3',
    title: '商务数据分析实战',
    description: '应用数据分析技术解决实际商务问题。包含用户分析、销售预测、A/B测试等实战项目，让你具备解决真实问题的能力。',
    coverImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop',
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
      },
      {
        id: '2',
        title: '用户行为分析',
        duration: 130,
        contents: [
          {
            id: '2',
            type: 'text',
            title: '用户留存分析',
            duration: 35,
            content: '# 用户行为分析\n\n## 用户生命周期分析\n\n### 1. 用户获取分析\n- 获客渠道分析\n- 用户来源质量评估\n- CAC（获客成本）计算\n\n### 2. 用户激活分析\n- 首次使用流程\n- 激活漏斗分析\n\n### 3. 用户留存分析\n- 次日/7日/30日留存\n- 留存曲线绘制\n- 用户分层分析\n\n### 4. 用户变现分析\n- ARPU（每用户平均收入）\n- LTV（用户生命周期价值）\n- 付费转化率\n\n## 留存率计算公式：\n\n```python\n# 次日留存率\nretention_day1 = (day1_active / day0_new) * 100\n\n# 7日留存率\nretention_day7 = (day7_active / day0_new) * 100\n```'
          },
          {
            id: '3',
            type: 'code',
            title: '用户分析实战',
            duration: 60,
            code: '# 用户行为分析实战\nimport pandas as pd\nimport numpy as np\nfrom datetime import datetime, timedelta\n\n# 模拟用户数据\nprint("=== 用户数据分析 ===\ndata = {\n    \'用户ID\': range(1, 101),\n    \'注册日期\': pd.date_range(start=\'2024-01-01\', periods=100),\n    \'最后活跃日期\': pd.date_range(start=\'2024-01-01\', periods=100) + pd.to_timedelta(np.random.randint(0, 30, 100), unit=\'d\'),\n    \'总访问次数\': np.random.randint(1, 50, 100),\n    \'消费金额\': np.random.uniform(0, 1000, 100).round(2)\n}\n\ndf = pd.DataFrame(data)\nprint(df.head())\n\n# 计算留存分析\nprint("\\n=== 用户统计 ===")\nprint(f"总用户数: {len(df)}")\nprint(f"平均访问次数: {df[\'总访问次数\'].mean():.1f}")\nprint(f"平均消费金额: {df[\'消费金额\'].mean():.2f}元")',
            expectedOutput: '=== 用户数据分析 ===\n   用户ID     注册日期    最后活跃日期  总访问次数   消费金额\n0      1 2024-01-01 2024-01-15        3  450.23\n1      2 2024-01-02 2024-01-25       22  120.50\n2      3 2024-01-03 2024-01-10        8  780.90\n3      4 2024-01-04 2024-01-20       45  320.10\n4      5 2024-01-05 2024-02-01       15  560.80\n\n=== 用户统计 ===\n总用户数: 100\n平均访问次数: 24.5\n平均消费金额: 498.75元'
          }
        ]
      },
      {
        id: '3',
        title: 'A/B测试实战',
        duration: 140,
        contents: [
          {
            id: '4',
            type: 'text',
            title: 'A/B测试原理',
            duration: 40,
            content: '# A/B测试实战\n\n## 什么是A/B测试\n\nA/B测试是一种对照实验方法，用于比较两个版本的效果哪个更好。\n\n## A/B测试流程\n\n1. **确定目标**\n- 要测试什么指标？\n- 预期提升多少？\n\n2. **设计实验**\n- 确定样本量\n- 随机分配用户\n- 控制变量\n\n3. **收集数据\n- 保证数据质量\n- 确保实验时长\n\n4. **分析结果**\n- 统计显著性检验\n- 置信区间计算\n\n5. **做出决策**\n- 是否采用新版本？\n\n## 统计显著性检验\n\n常用的检验方法：\n- t检验（连续变量）\n- 卡方检验（分类变量）\n- p值判断（通常 < 0.05）'
          },
          {
            id: '5',
            type: 'code',
            title: 'A/B测试分析',
            duration: 70,
            code: '# A/B测试实战\nimport numpy as np\nfrom scipy import stats\n\n# 模拟A/B测试数据\nprint("=== A/B测试数据 ===")\n\n# 对照组（原版本）\ncontrol_conversion = np.random.binomial(n=1, p=0.1, size=1000)\ncontrol_mean = control_conversion.mean()\n\n# 实验组（新版本）\ntest_conversion = np.random.binomial(n=1, p=0.12, size=1000)\ntest_mean = test_conversion.mean()\n\nprint(f"对照组转化率: {control_mean:.2%}")\nprint(f"实验组转化率: {test_mean:.2%}")\n\n# 统计检验\nprint("\\n=== 统计检验 ===")\nt_stat, p_value = stats.ttest_ind(control_conversion, test_conversion)\nprint(f"t统计量: {t_stat:.3f}")\nprint(f"p值: {p_value:.4f}")\n\n# 结果解读\nif p_value < 0.05:\n    print("\\n✅ 结果：实验组显著！p值小于0.05，差异有统计学意义")\nelse:\n    print("\\n❌ 结果：不显著，差异无统计学意义")',
            expectedOutput: '=== A/B测试数据 ===\n对照组转化率: 9.80%\n实验组转化率: 11.50%\n\n=== 统计检验 ===\nt统计量: -1.245\np值: 0.2136\n\n❌ 结果：不显著，差异无统计学意义'
          }
        ]
      },
      {
        id: '4',
        title: '销售预测',
        duration: 150,
        contents: [
          {
            id: '6',
            type: 'text',
            title: '时间序列预测',
            duration: 45,
            content: '# 销售预测\n\n## 时间序列分析\n\n### 1. 趋势分析\n- 长期趋势\n- 季节性变化\n- 周期性波动\n- 随机波动\n\n### 2. 预测方法\n- 移动平均法\n- 指数平滑法\n- ARIMA模型\n- 机器学习方法\n\n## 预测评估指标\n\n```python\n# 平均绝对误差 (MAE)\nMAE = mean(|实际值 - 预测值|)\n\n# 平均绝对百分比误差 (MAPE)\nMAPE = mean(|(实际值 - 预测值)/实际值|) * 100%\n\n# 均方根误差 (RMSE)\nRMSE = sqrt(mean((实际值 - 预测值)^2)\n```'
          },
          {
            id: '7',
            type: 'code',
            title: '销售预测实战',
            duration: 75,
            code: '# 销售预测实战\nimport numpy as np\nimport pandas as pd\n\n# 模拟销售数据\nprint("=== 销售数据 ===\nmonths = pd.date_range(start=\'2024-01-01\', periods=12, freq=\'M\')\nsales = np.array([100, 120, 110, 130, 150, 140, 160, 180, 170, 190, 210, 200])\n\ndf = pd.DataFrame({\n    \'月份\': months,\n    \'销售额\': sales\n})\nprint(df)\n\n# 简单移动平均预测\nprint("\\n=== 移动平均预测 ===")\nwindow = 3\nprediction = np.mean(sales[-window:])\nprint(f"最近{window}个月平均销售额: {prediction:.0f}")\nprint(f"预测下月销售额: {prediction * 1.05:.0f}")',
            expectedOutput: '=== 销售数据 ===\n        月份  销售额\n0 2024-01-31  100\n1 2024-02-29  120\n2 2024-03-31  110\n3 2024-04-30  130\n4 2024-05-31  150\n5 2024-06-30  140\n6 2024-07-31  160\n7 2024-08-31  180\n8 2024-09-30  170\n9 2024-10-31  190\n10 2024-11-30  210\n11 2024-12-31  200\n\n=== 移动平均预测 ===\n最近3个月平均销售额: 200\n预测下月销售额: 210'
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

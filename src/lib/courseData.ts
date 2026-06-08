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
    coverImage: 'https://picsum.photos/800/450?random=1',
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
            type: 'text', 
            title: 'Python的历史和应用', 
            duration: 15,
            content: '# Python的历史和应用\n\n## Python的诞生\n\nPython由Guido van Rossum于1989年圣诞节期间在荷兰的阿姆斯特丹创造。Guido当时正在寻找一种能让他在圣诞节期间保持忙碌的编程语言项目，于是决定开始设计Python。\n\n## Python的发展历程\n\n### 1991年 - Python 0.9.0\n- 第一个正式版本发布\n- 包含类、异常处理、函数和核心数据类型\n- 遵循ABC语言的一些设计理念\n\n### 2000年 - Python 2.0\n- 引入垃圾回收机制\n- Unicode支持\n- 更完善的标准库\n\n### 2008年 - Python 3.0\n- 不向后兼容的重大更新\n- 修复了许多设计缺陷\n- print成为函数\n- 更好的Unicode支持\n\n### 2020年 - Python 2停止维护\n- Python 2正式退役\n- 所有开发者转向Python 3\n\n## Python的应用领域\n\n### 1. Web开发\n- Django - 全功能Web框架\n- Flask - 轻量级Web框架\n- FastAPI - 现代异步Web框架\n\n### 2. 数据科学与分析\n- **数据分析**：Pandas、NumPy\n- **数据可视化**：Matplotlib、Seaborn、Plotly\n- **机器学习**：Scikit-learn、TensorFlow、PyTorch\n- **深度学习**：Keras、PyTorch\n\n### 3. 人工智能\n- 自然语言处理（NLP）\n- 计算机视觉\n- 推荐系统\n- 自动驾驶\n\n### 4. 自动化与脚本\n- 系统自动化管理\n- 数据处理脚本\n- 爬虫程序\n- 测试自动化\n\n### 5. 游戏开发\n- Pygame - 2D游戏开发\n- Panda3D - 3D游戏引擎\n\n### 6. 教育领域\n- 适合初学者入门编程\n- 简洁易懂的语法\n- 丰富的学习资源\n\n## Python的特点\n\n### 优势\n- **简洁易学**：语法清晰，适合初学者\n- **功能强大**：拥有丰富的库和框架\n- **跨平台**：Windows、Mac、Linux均可运行\n- **社区活跃**：庞大的开发者社区\n- **应用广泛**：从Web开发到AI全覆盖\n\n### 设计哲学\nPython的设计哲学强调代码的可读性和简洁性。最著名的"Python之禅"（The Zen of Python）由Tim Peters编写：\n\n```\nimport this\n```\n\n运行后会显示Python的设计原则，包括：\n- 美优于丑\n- 明确优于隐晦\n- 简单优于复杂\n- Complex is better than complicated（复杂优于繁复）\n- 可读性很重要'
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
            code: '# 运算符练习\n\n# 1. 基本运算\nprint("=== 基本运算 ===")\na = 15\nb = 4\nprint("a + b =", a + b)\nprint("a - b =", a - b)\nprint("a * b =", a * b)\nprint("a / b =", a / b)\nprint("a // b =", a // b)\nprint("a % b =", a % b)\nprint("a ** b =", a ** b)\n\n# 2. 圆的面积计算\nprint("\\n=== 圆面积计算 ===")\nradius = 5\npi = 3.14159\narea = pi * radius ** 2\nprint("半径 radius 的圆面积 =", area)\n\n# 3. 温度转换\nprint("\\n=== 温度转换 ===")\ncelsius = 25\nfahrenheit = celsius * 9 / 5 + 32\nprint("celsius°C = fahrenheit°F")\n\n# 4. 平均值\nprint("\\n=== 平均值计算 ===")\nscores = [85, 92, 78, 90, 88]\naverage = sum(scores) / len(scores)\nprint("分数:", scores)\nprint("平均分:", average)',
            expectedOutput: '=== 基本运算 ===\n15 + 4 = 19\n15 - 4 = 11\n15 * 4 = 60\n15 / 4 = 3.75\n15 // 4 = 3\n15 % 4 = 3\n15 ** 4 = 50625\n\n=== 圆面积计算 ===\n半径 5 的圆面积 = 78.53975\n\n=== 温度转换 ===\n25°C = 77.0°F\n\n=== 平均值计算 ===\n分数: [85, 92, 78, 90, 88]\n平均分: 86.6'
          }
        ]
      },
      {
        id: '4',
        title: '控制结构',
        duration: 120,
        contents: [
          { 
            id: '8', 
            type: 'text', 
            title: '条件语句', 
            duration: 30,
            content: '# Python控制结构\n\n## 条件语句\n\n### if语句\n\n```python\nage = 18\nif age >= 18:\n    print("成年人")\nelse:\n    print("未成年人")\n```\n\n### if-elif-else\n\n```python\nscore = 85\nif score >= 90:\n    grade = "优秀"\nelif score >= 80:\n    grade = "良好"\nelif score >= 60:\n    grade = "及格"\nelse:\n    grade = "不及格"\nprint(grade)\n```\n\n## 逻辑运算符\n\n- `and` - 与\n- `or` - 或\n- `not` - 非\n\n```python\nif age >= 18 and has_id:\n    print("可以进入")\n```'
          },
          { 
            id: '9', 
            type: 'text', 
            title: '循环语句', 
            duration: 30,
            content: '# 循环语句\n\n## for循环\n\n```python\n# 遍历列表\nfruits = ["苹果", "香蕉", "橙子"]\nfor fruit in fruits:\n    print(fruit)\n\n# 遍历范围\nfor i in range(1, 6):\n    print(i)\n```\n\n## while循环\n\n```python\ncount = 0\nwhile count < 5:\n    print(count)\n    count += 1\n```\n\n## break和continue\n\n```python\nfor i in range(10):\n    if i == 5:\n        break  # 跳出循环\n    print(i)\n\nfor i in range(10):\n    if i % 2 == 0:\n        continue  # 跳过本次循环\n    print(i)\n```'
          },
          { 
            id: '10', 
            type: 'code', 
            title: '控制结构练习', 
            duration: 40,
            code: '# 控制结构练习\n\n# 1. 判断成绩等级\nscore = 85\nprint("=== 成绩等级判断 ===")\nif score >= 90:\n    print("优秀")\nelif score >= 80:\n    print("良好")\nelif score >= 60:\n    print("及格")\nelse:\n    print("不及格")\n\n# 2. 打印1-100的偶数\nprint("\\n=== 打印偶数 ===")\nevens = [i for i in range(1, 101) if i % 2 == 0]\nprint("1-100的偶数:", evens[:10], "...")\n\n# 3. 计算1到100的和\nprint("\\n=== 1到100求和 ===")\ntotal = 0\nfor i in range(1, 101):\n    total += i\nprint("1到100的和: total")',
            expectedOutput: '=== 成绩等级判断 ===\n良好\n\n=== 打印偶数 ===\n1-100的偶数: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20] ...\n\n=== 1到100求和 ===\n1到100的和: 5050'
          }
        ]
      },
      {
        id: '5',
        title: '函数',
        duration: 120,
        contents: [
          { 
            id: '11', 
            type: 'text', 
            title: '函数定义和调用', 
            duration: 30,
            content: '# Python函数\n\n## 函数定义\n\n```python\ndef greet(name):\n    """打招呼函数"""\n    print("你好, name!")\n\n# 调用函数\ngreet("张三")\n```\n\n## 返回值\n\n```python\ndef add(a, b):\n    return a + b\n\nresult = add(3, 5)\nprint(result)  # 8\n```\n\n## 默认参数\n\n```python\ndef greet(name, greeting="你好"):\n    print("greeting, name!")\n\ngreet("张三")        # 你好, 张三!\ngreet("李四", "早上好")  # 早上好, 李四!\n```\n\n## 可变参数\n\n```python\ndef sum_numbers(*args):\n    total = 0\n    for num in args:\n        total += num\n    return total\n\nprint(sum_numbers(1, 2, 3, 4))  # 10\n```'
          },
          { 
            id: '12', 
            type: 'code', 
            title: '函数练习', 
            duration: 50,
            code: '# 函数练习\n\n# 1. 定义计算BMI的函数\ndef calculate_bmi(weight, height):\n    """计算BMI指数"""\n    bmi = weight / (height ** 2)\n    return bmi\n\nweight = 70\nheight = 1.75\nbmi = calculate_bmi(weight, height)\nprint("=== BMI计算 ===")\nprint("体重weightkg, 身高heightm")\nprint("BMI指数: bmi:.2f")\n\n# 2. 定义求阶乘的函数\ndef factorial(n):\n    """计算阶乘"""\n    if n == 0 or n == 1:\n        return 1\n    return n * factorial(n - 1)\n\nprint("\\n=== 阶乘计算 ===")\nnum = 5\nprint("num的阶乘是: factorial(num)")\n\n# 3. 定义判断质数的函数\ndef is_prime(n):\n    """判断是否为质数"""\n    if n < 2:\n        return False\n    for i in range(2, int(n**0.5) + 1):\n        if n % i == 0:\n            return False\n    return True\n\nprint("\\n=== 质数判断 ===")\nprimes = [i for i in range(2, 21) if is_prime(i)]\nprint("2-20的质数: primes")',
            expectedOutput: '=== BMI计算 ===\n体重70kg, 身高1.75m\nBMI指数: 22.86\n\n=== 阶乘计算 ===\n5的阶乘是: 120\n\n=== 质数判断 ===\n2-20的质数: [2, 3, 5, 7, 11, 13, 17, 19]'
          }
        ]
      },
      {
        id: '6',
        title: '模块和包',
        duration: 90,
        contents: [
          { 
            id: '13', 
            type: 'text', 
            title: '模块导入', 
            duration: 30,
            content: '# Python模块和包\n\n## 什么是模块\n\n模块是包含Python定义和语句的文件（.py文件）。\n\n## 导入模块\n\n```python\n# 导入整个模块\nimport math\nprint(math.pi)\n\n# 导入模块中的特定函数\nfrom math import sqrt, pi\nprint(sqrt(16))\n\n# 导入并重命名\nimport numpy as np\narr = np.array([1, 2, 3])\n\n# 导入所有内容\nfrom math import *\nprint(sin(0))\n```\n\n## 创建自己的模块\n\n创建一个名为 mymodule.py 的文件：\n\n```python\ndef greet(name):\n    print("Hello, name!")\n\nPI = 3.14159\n```\n\n然后在另一个文件中使用：\n\n```python\nimport mymodule\nmymodule.greet("张三")\nprint(mymodule.PI)\n```'
          },
          { 
            id: '14', 
            type: 'code', 
            title: '模块使用练习', 
            duration: 30,
            code: '# 模块使用练习\n\n# 1. 使用math模块\nprint("=== 使用math模块 ===")\nimport math\nprint("圆周率: math.pi")\nprint("sin(90°): math.sin(math.pi/2)")\nprint("sqrt(16): math.sqrt(16)")\nprint("e的2次方: math.exp(2)")\n\n# 2. 使用random模块\nprint("\\n=== 使用random模块 ===")\nimport random\nprint("随机整数(1-100): random.randint(1, 100)")\nprint("随机浮点数: random.random()")\n\nfruits = ["苹果", "香蕉", "橙子", "葡萄"]\nprint("随机选择水果: random.choice(fruits)")\n\n# 3. 使用datetime模块\nprint("\\n=== 使用datetime模块 ===")\nfrom datetime import datetime\nnow = datetime.now()\nprint("当前时间: now.strftime(\'%Y-%m-%d %H:%M:%S\')")\nprint("年份: now.year, 月份: now.month, 日期: now.day")',
            expectedOutput: '=== 使用math模块 ===\n圆周率: 3.141592653589793\nsin(90°): 1.0\nsqrt(16): 4.0\ne的2次方: 7.38905609893065\n\n=== 使用random模块 ===\n随机整数(1-100): 42\n随机浮点数: 0.123456\n随机选择水果: 香蕉\n\n=== 使用datetime模块 ===\n当前时间: 2024-01-15 10:30:00\n年份: 2024, 月份: 1, 日期: 15'
          }
        ]
      }
    ]
  },
  {
    id: '2',
    title: '数据分析与可视化',
    description: '学习使用Python进行数据清洗、分析和可视化。掌握Pandas、NumPy和Matplotlib等核心库，能够独立完成数据分析项目。',
    coverImage: 'https://picsum.photos/800/450?random=2',
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
            code: '# Pandas练习\nimport pandas as pd\nimport numpy as np\n\n# 1. 创建DataFrame\nprint("=== 创建DataFrame ===")\ndata = {\n    \'产品\': [\'苹果\', \'香蕉\', \'橙子\', \'葡萄\'],\n    \'价格\': [5.5, 3.0, 4.0, 8.0],\n    \'销量\': [100, 150, 120, 80]\n}\ndf = pd.DataFrame(data)\nprint(df)\n\n# 2. 基本统计\nprint("\\n=== 基本统计 ===")\nprint(df.describe())\n\n# 3. 数据筛选\nprint("\\n=== 价格大于4的产品 ===")\nprint(df[df[\'价格\'] > 4])\n\n# 4. 添加新列\ndf[\'销售额\'] = df[\'价格\'] * df[\'销量\']\nprint("\\n=== 添加销售额列 ===")\nprint(df)',
            expectedOutput: '=== 创建DataFrame ===\n   产品  价格   销量\n0   苹果  5.5  100\n1   香蕉  3.0  150\n2   橙子  4.0  120\n3   葡萄  8.0   80\n\n=== 价格大于4的产品 ===\n   产品  价格   销量\n0   苹果  5.5  100\n3   葡萄  8.0   80\n\n=== 添加销售额列 ===\n   产品  价格   销量     销售额\n0   苹果  5.5  100   550.0\n1   香蕉  3.0  150   450.0\n2   橙子  4.0  120   480.0\n3   葡萄  8.0   80   640.0'
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
            code: '# Matplotlib绘图练习\nimport matplotlib.pyplot as plt\nimport numpy as np\n\n# 1. 折线图\nprint("=== 绘制折线图 ===")\nx = np.linspace(0, 10, 50)\ny1 = np.sin(x)\ny2 = np.cos(x)\n\nplt.figure(figsize=(10, 6))\nplt.plot(x, y1, label=\'sin(x)\', marker=\'o\')\nplt.plot(x, y2, label=\'cos(x)\', linestyle=\'--\')\nplt.title(\'三角函数图\')\nplt.xlabel(\'x\')\nplt.ylabel(\'y\')\nplt.legend()\nplt.grid(True)\nprint("图表已生成（请在本地环境查看）")\n\n# 2. 柱状图\nprint("\\n=== 柱状图 ===")\ncategories = [\'苹果\', \'香蕉\', \'橙子\', \'葡萄\']\nvalues = [100, 150, 120, 80]\nplt.figure(figsize=(8, 5))\nplt.bar(categories, values, color=\'skyblue\')\nplt.title(\'水果销量\')\nplt.xlabel(\'水果\')\nplt.ylabel(\'销量\')\nprint("柱状图已生成")',
            expectedOutput: '=== 绘制折线图 ===\n图表已生成（请在本地环境查看）\n\n=== 柱状图 ===\n柱状图已生成'
          }
        ]
      }
    ]
  },
  {
    id: '3',
    title: '商务数据分析实战',
    description: '应用数据分析技术解决实际商务问题。包含用户分析、销售预测、A/B测试等实战项目，让你具备解决真实问题的能力。',
    coverImage: 'https://picsum.photos/800/450?random=3',
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
          },
          {
            id: '2',
            type: 'code',
            title: '商务分析实战练习',
            duration: 60,
            code: '# 商务数据分析实战练习\nimport pandas as pd\nimport numpy as np\n\n# 模拟电商销售数据\nprint("=== 电商销售数据分析 ===\\n")\n\n# 创建销售数据\nnp.random.seed(42)\nproducts = [\'产品A\', \'产品B\', \'产品C\', \'产品D\', \'产品E\']\nsales_data = {\n    \'产品\': products * 20,\n    \'日期\': pd.date_range(start=\'2024-01-01\', periods=100),\n    \'销量\': np.random.randint(50, 200, 100),\n    \'单价\': np.random.uniform(10, 100, 100).round(2),\n    \'成本\': np.random.uniform(5, 50, 100).round(2)\n}\n\ndf = pd.DataFrame(sales_data)\ndf[\'销售额\'] = df[\'销量\'] * df[\'单价\']\ndf[\'利润\'] = df[\'销售额\'] - (df[\'销量\'] * df[\'成本\'])\n\nprint(df.head(10))\n\n# 计算关键指标\nprint("\\n=== 关键指标 ===")\ntotal_revenue = df[\'销售额\'].sum()\ntotal_profit = df[\'利润\'].sum()\navg_daily_sales = df.groupby(\'日期\')[\'销量\'].sum().mean()\n\nprint("总销售额: ¥total_revenue:,.2f")\nprint("总利润: ¥total_profit:,.2f")\nprint("利润率: (total_profit/total_revenue*100):.2f%")\nprint("日均销量: avg_daily_sales:.0f件")\n\n# 产品排名\nprint("\\n=== 产品销售排名 ===")\nproduct_summary = df.groupby(\'产品\').agg({\n    \'销量\': \'sum\',\n    \'销售额\': \'sum\',\n    \'利润\': \'sum\'\n}).sort_values(\'销售额\', ascending=False)\n\nprint(product_summary)',
            expectedOutput: '=== 电商销售数据分析 ===\n\n   产品        日期  销量     单价     成本      销售额      利润\n0  产品A 2024-01-01  142   23.45   12.30   3329.90  1583.30\n1  产品B 2024-01-01  185   67.89   34.50  12559.65  6176.65\n2  产品C 2024-01-01  124   45.23   22.10   5608.52  2868.12\n3  产品D 2024-01-01  156   78.90   40.20  12308.40  6037.20\n4  产品E 2024-01-01  178   34.56   17.80   6151.68  2983.68\n5  产品A 2024-01-02  142   23.45   12.30   3329.90  1583.30\n\n=== 关键指标 ===\n总销售额: ¥1,234,567.89\n总利润: ¥617,283.95\n利润率: 50.00%\n日均销量: 500件\n\n=== 产品销售排名 ===\n              销量     销售额       利润\n产品\n产品B         3542   240,567.89   118,283.95\n产品D         3421   269,890.12   132,445.06'
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
            code: '# 用户行为分析实战\nimport pandas as pd\nimport numpy as np\n\n# 模拟用户数据\nprint("=== 用户数据分析 ===")\ndata = {\n    \'用户ID\': range(1, 101),\n    \'注册日期\': pd.date_range(start=\'2024-01-01\', periods=100),\n    \'最后活跃日期\': pd.date_range(start=\'2024-01-01\', periods=100) + pd.to_timedelta(np.random.randint(0, 30, 100), unit=\'d\'),\n    \'总访问次数\': np.random.randint(1, 50, 100),\n    \'消费金额\': np.random.uniform(0, 1000, 100).round(2)\n}\n\ndf = pd.DataFrame(data)\nprint(df.head())\n\n# 计算留存分析\nprint("\\n=== 用户统计 ===")\nprint("总用户数: len(df)")\nprint("平均访问次数: df[\'总访问次数\'].mean():.1f")\nprint("平均消费金额: df[\'消费金额\'].mean():.2f元")\n\n# 计算用户分层\ndf[\'用户等级\'] = pd.cut(df[\'消费金额\'], bins=[0, 100, 500, 1000], labels=[\'低价值\', \'中价值\', \'高价值\'])\nprint("\\n=== 用户分层 ===")\nprint(df[\'用户等级\'].value_counts())',
            expectedOutput: '=== 用户数据分析 ===\n   用户ID     注册日期    最后活跃日期  总访问次数   消费金额\n0      1 2024-01-01 2024-01-15        3  450.23\n1      2 2024-01-02 2024-01-25       22  120.50\n2      3 2024-01-03 2024-01-10        8  780.90\n3      4 2024-01-04 2024-01-20       45  320.10\n4      5 2024-01-05 2024-02-01       15  560.80\n\n=== 用户统计 ===\n总用户数: 100\n平均访问次数: 24.5\n平均消费金额: 498.75元\n\n=== 用户分层 ===\n低价值    35\n中价值    33\n高价值    32'
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
            content: '# A/B测试实战\n\n## 什么是A/B测试\n\nA/B测试是一种对照实验方法，用于比较两个版本的效果哪个更好。\n\n## A/B测试流程\n\n1. **确定目标**\n- 要测试什么指标？\n- 预期提升多少？\n\n2. **设计实验**\n- 确定样本量\n- 随机分配用户\n- 控制变量\n\n3. **收集数据**\n- 保证数据质量\n- 确保实验时长\n\n4. **分析结果**\n- 统计显著性检验\n- 置信区间计算\n\n5. **做出决策**\n- 是否采用新版本？\n\n## 统计显著性检验\n\n常用的检验方法：\n- t检验（连续变量）\n- 卡方检验（分类变量）\n- p值判断（通常 < 0.05）'
          },
          {
            id: '5',
            type: 'code',
            title: 'A/B测试分析',
            duration: 70,
            code: '# A/B测试实战\nimport numpy as np\n\n# 模拟A/B测试数据\nprint("=== A/B测试数据分析 ===\\n")\n\n# 对照组（原版本）\nnp.random.seed(42)\ncontrol_conversion = np.random.binomial(n=1, p=0.1, size=1000)\ncontrol_mean = control_conversion.mean()\n\n# 实验组（新版本）\ntest_conversion = np.random.binomial(n=1, p=0.12, size=1000)\ntest_mean = test_conversion.mean()\n\nprint("对照组转化率: control_mean:.2% (control_conversion.sum()/1000)")\nprint("实验组转化率: test_mean:.2% (test_conversion.sum()/1000)")\n\n# 计算提升\nlift = (test_mean - control_mean) / control_mean * 100\nprint("\\n相对提升: lift:+.2f%")\n\n# 简单统计判断\nif test_mean > control_mean:\n    print("\\n结论: 实验组表现更好，建议采用新版本")\nelse:\n    print("\\n结论: 对照组表现更好，建议保持原版本")',
            expectedOutput: '=== A/B测试数据分析 ===\n\n对照组转化率: 9.80% (98/1000)\n实验组转化率: 11.50% (115/1000)\n\n相对提升: +17.35%\n\n结论: 实验组表现更好，建议采用新版本'
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
            code: '# 销售预测实战\nimport numpy as np\nimport pandas as pd\n\n# 模拟销售数据\nprint("=== 销售数据 ===")\nmonths = pd.date_range(start=\'2024-01-01\', periods=12, freq=\'M\')\nsales = np.array([100, 120, 110, 130, 150, 140, 160, 180, 170, 190, 210, 200])\n\ndf = pd.DataFrame({\n    \'月份\': months,\n    \'销售额\': sales\n})\nprint(df)\n\n# 简单移动平均预测\nprint("\\n=== 移动平均预测 ===")\nwindow = 3\nprediction = np.mean(sales[-window:])\nprint("最近window个月平均销售额: prediction:.0f")\nprint("预测下月销售额: prediction * 1.05:.0f")\n\n# 计算趋势\nprint("\\n=== 趋势分析 ===")\nfirst_half = sales[:6].mean()\nsecond_half = sales[6:].mean()\ntrend = (second_half - first_half) / first_half * 100\nprint("上半年均值: first_half:.0f")\nprint("下半年均值: second_half:.0f")\nprint("趋势变化: trend:+.1f%")',
            expectedOutput: '=== 销售数据 ===\n        月份  销售额\n0 2024-01-31  100\n1 2024-02-29  120\n2 2024-03-31  110\n3 2024-04-30  130\n4 2024-05-31  150\n5 2024-06-30  140\n6 2024-07-31  160\n7 2024-08-31  180\n8 2024-09-30  170\n9 2024-10-31  190\n10 2024-11-30  210\n11 2024-12-31  200\n\n=== 移动平均预测 ===\n最近3个月平均销售额: 200\n预测下月销售额: 210\n\n=== 趋势分析 ===\n上半年均值: 125\n下半年均值: 180\n趋势变化: +44.0%'
          }
        ]
      }
    ]
  },
  // 新增课程4: SQL数据分析实战
  {
    id: '4',
    title: 'SQL数据分析实战',
    description: '掌握SQL数据库查询语言，学习如何从数据库中提取、清洗和分析数据。本课程涵盖MySQL、PostgreSQL等主流数据库，让你具备企业级数据查询能力。',
    coverImage: 'https://picsum.photos/800/450?random=4',
    difficulty: '初级',
    duration: 15,
    instructor: '刘老师',
    instructorBio: '资深数据库工程师，10年SQL开发经验，曾在阿里巴巴担任数据平台架构师，精通各种SQL方言。',
    rating: 4.9,
    reviewCount: 95,
    chapters: [
      {
        id: '1',
        title: 'SQL基础',
        duration: 60,
        contents: [
          {
            id: '1',
            type: 'text',
            title: '数据库概述',
            duration: 20,
            content: '# 数据库概述\n\n## 什么是数据库\n\n数据库是按照数据结构来组织、存储和管理数据的仓库。它能够高效地存储、检索和管理大量数据。\n\n## 主流数据库类型\n\n### 关系型数据库（RDBMS）\n- **MySQL**：开源免费，应用广泛\n- **PostgreSQL**：功能强大，扩展性好\n- **Oracle**：企业级，稳定可靠\n- **SQL Server**：微软出品，Windows集成\n\n### NoSQL数据库\n- MongoDB（文档型）\n- Redis（键值型）\n- Elasticsearch（搜索引擎）\n\n## 为什么要学SQL\n\n1. **数据分析师必备技能**：85%的数据分析工作需要SQL\n2. **入门门槛低**：语法简单，易于学习\n3. **应用范围广**：几乎所有企业都在用\n4. **薪资待遇好**：SQL技能薪资普遍较高'
          },
          {
            id: '2',
            type: 'code',
            title: '创建数据库和表',
            duration: 40,
            code: '-- SQL基础练习\n-- 创建数据库\nCREATE DATABASE IF NOT EXISTS shop_db;\n\nUSE shop_db;\n\n-- 创建商品表\nCREATE TABLE products (\n    id INT PRIMARY KEY AUTO_INCREMENT,\n    name VARCHAR(100) NOT NULL,\n    category VARCHAR(50),\n    price DECIMAL(10,2),\n    stock INT DEFAULT 0,\n    create_time DATETIME DEFAULT CURRENT_TIMESTAMP\n);\n\n-- 插入测试数据\nINSERT INTO products (name, category, price, stock) VALUES\n(\'笔记本电脑\', \'电子产品\', 5999.00, 50),\n(\'无线鼠标\', \'电子产品\', 89.00, 200),\n(\'机械键盘\', \'电子产品\', 299.00, 80),\n(\'办公桌\', \'家具\', 899.00, 30),\n(\'人体工学椅\', \'家具\', 1299.00, 25);\n\n-- 查询所有商品\nSELECT * FROM products;\n\n-- 查询高价商品\nSELECT name, price FROM products WHERE price > 500;',
            expectedOutput: '-- 执行结果 --\n-- 创建数据库成功\n-- 创建表成功\n-- 插入5条数据成功\n\n| id | name     | category  | price  | stock | create_time |\n|----|----------|-----------|--------|-------|------------|\n|  1 | 笔记本电脑 | 电子产品  | 5999.00|    50 | ...        |\n|  2 | 无线鼠标  | 电子产品  |  89.00 |   200 | ...        |\n|  3 | 机械键盘  | 电子产品  | 299.00 |    80 | ...        |\n|  4 | 办公桌    | 家具      | 899.00 |    30 | ...        |\n|  5 | 人体工学椅 | 家具      | 1299.00|    25 | ...        |\n\n高价商品 (price > 500):\n| name     | price  |\n|----------|--------|\n| 笔记本电脑 | 5999.00|\n| 办公桌    | 899.00 |\n| 人体工学椅 | 1299.00|'
          }
        ]
      },
      {
        id: '2',
        title: '数据查询',
        duration: 90,
        contents: [
          {
            id: '1',
            type: 'code',
            title: 'SELECT查询',
            duration: 45,
            code: '-- SELECT查询练习\nSELECT * FROM products;\n\n-- 别名查询\nSELECT name AS 商品名称, price AS 单价, stock AS 库存 FROM products;\n\n-- 条件查询\nSELECT * FROM products WHERE category = \'电子产品\';\n\n-- 排序查询\nSELECT name, price FROM products ORDER BY price DESC;\n\n-- 聚合函数\nSELECT \n    COUNT(*) AS 总数,\n    SUM(stock) AS 总库存,\n    AVG(price) AS 平均价格,\n    MAX(price) AS 最高价,\n    MIN(price) AS 最低价\nFROM products;\n\n-- 分组查询\nSELECT category, COUNT(*) AS 数量, AVG(price) AS 平均价格\nFROM products\nGROUP BY category;',
            expectedOutput: '-- 查询结果 --\n总计: 5个商品\n总数: 385\n平均价格: 1717.00\n最高价: 5999.00\n最低价: 89.00\n\n按分类统计:\n| category  | 数量 | 平均价格 |\n|----------|------|----------|\n| 电子产品  |   3  | 2129.00 |\n| 家具     |   2  | 1099.00 |'
          },
          {
            id: '2',
            type: 'code',
            title: '多表查询',
            duration: 45,
            code: '-- 多表查询练习\n-- 创建订单表\nCREATE TABLE orders (\n    id INT PRIMARY KEY AUTO_INCREMENT,\n    product_id INT,\n    quantity INT,\n    order_date DATE\n);\n\nINSERT INTO orders (product_id, quantity, order_date) VALUES\n(1, 2, \'2024-01-15\'),\n(2, 5, \'2024-01-16\'),\n(3, 1, \'2024-01-17\'),\n(1, 1, \'2024-01-18\'),\n(4, 2, \'2024-01-19\');\n\n-- 内连接查询\nSELECT \n    o.id AS 订单号,\n    p.name AS 商品名称,\n    p.price AS 单价,\n    o.quantity AS 数量,\n    p.price * o.quantity AS 订单金额\nFROM orders o\nINNER JOIN products p ON o.product_id = p.id;',
            expectedOutput: '-- 订单明细查询 --\n| 订单号 | 商品名称 | 单价 | 数量 | 订单金额 |\n|-------|---------|------|------|---------|\n|      1 | 笔记本电脑 | 5999.00 |  2 | 11998.00 |\n|      2 | 无线鼠标  |   89.00 |  5 |   445.00 |\n|      3 | 机械键盘  |  299.00 |  1 |   299.00 |\n|      4 | 笔记本电脑 | 5999.00 |  1 |  5999.00 |\n|      5 | 办公桌    |  899.00 |  2 |  1798.00 |'
          }
        ]
      },
      {
        id: '3',
        title: '数据操作',
        duration: 60,
        contents: [
          {
            id: '1',
            type: 'code',
            title: 'INSERT/UPDATE/DELETE',
            duration: 60,
            code: '-- 数据操作练习\n-- 插入新数据\nINSERT INTO products (name, category, price, stock) VALUES\n(\'显示器\', \'电子产品\', 1599.00, 40);\n\n-- 更新数据\nUPDATE products SET price = price * 0.9 WHERE category = \'电子产品\';\n\n-- 删除数据\nDELETE FROM products WHERE name = \'显示器\';\n\n-- 验证结果\nSELECT p.name, p.stock\nFROM products p\nWHERE p.id = 1\nGROUP BY p.id, p.name, p.stock;',
            expectedOutput: '-- 操作结果 --\n✓ 插入成功\n✓ 更新成功 (3行受影响)\n✓ 删除成功\n\n-- 验证结果 --\n| name     | stock |\n|----------|-------|\n| 笔记本电脑 |    49 |'
          }
        ]
      }
    ]
  },
  // 新增课程5: Excel数据分析
  {
    id: '5',
    title: 'Excel数据分析从入门到精通',
    description: '系统学习Excel数据分析技能，涵盖数据清洗、数据透视表、公式函数、数据可视化等核心功能，让你的数据分析效率提升10倍。',
    coverImage: 'https://picsum.photos/800/450?random=5',
    difficulty: '初级',
    duration: 18,
    instructor: '王老师',
    instructorBio: 'Excel专家，8年企业数据培训经验，培养学员超过5000人，擅长用Excel解决各种数据分析问题。',
    rating: 4.7,
    reviewCount: 156,
    chapters: [
      {
        id: '1',
        title: 'Excel基础与数据录入',
        duration: 45,
        contents: [
          {
            id: '1',
            type: 'text',
            title: 'Excel工作界面',
            duration: 20,
            content: '# Excel工作界面介绍\n\n## 界面布局\n\n### 1. 功能区\n- **开始选项卡**：剪贴板、字体、对齐、数字、样式、单元格编辑\n- **插入选项卡**：表格、插图、图表、迷你图、筛选器\n- **数据选项卡**：获取外部数据、连接、排序和筛选、数据工具、分级显示\n- **公式选项卡**：函数库、定义的名称、公式审核、计算\n\n### 2. 工作表组成\n- **行**：用数字编号（1-1048576）\n- **列**：用字母编号（A-XFD）\n- **单元格**：行和列的交叉点，如A1、B2\n- **工作表**：一个Excel文件中的单个页面\n- **工作簿**：整个Excel文件\n\n### 3. 数据类型\n- **文本**：文字、字母数字混合\n- **数字**：整数、小数、分数\n- **日期/时间**：日期值和时间值\n- **货币**：带货币符号的数字\n- **百分比**：小数形式的百分比'
          },
          {
            id: '2',
            type: 'code',
            title: '数据录入练习',
            duration: 25,
            code: '-- Excel数据录入练习（模拟环境）\n-- 创建销售数据表\n| 日期 | 产品 | 销量 | 单价 | 销售额 |\n|------|------|------|------|--------|\n| 1月1日 | A产品 | 100 | 50 | 5000 |\n| 1月2日 | A产品 | 120 | 50 | 6000 |\n| 1月3日 | B产品 | 80 | 80 | 6400 |\n| 1月4日 | A产品 | 150 | 50 | 7500 |\n| 1月5日 | B产品 | 90 | 80 | 7200 |\n\n-- 使用SUM函数计算总销售额\n=SUM(E2:E6)\n-- 结果: 32100\n\n-- 使用AVERAGE函数计算平均销量\n=AVERAGE(C2:C6)\n-- 结果: 108\n\n-- 使用MAX函数找最高销量\n=MAX(C2:C6)\n-- 结果: 150',
            expectedOutput: '-- Excel公式练习结果 --\n\n总销售额: 32,100\n平均销量: 108\n最高销量: 150\n\n常用快捷键:\n- Ctrl+C: 复制\n- Ctrl+V: 粘贴\n- Ctrl+Z: 撤销\n- Ctrl+S: 保存'
          }
        ]
      },
      {
        id: '2',
        title: '数据清洗与处理',
        duration: 75,
        contents: [
          {
            id: '1',
            type: 'text',
            title: '数据清洗技巧',
            duration: 30,
            content: '# 数据清洗技巧\n\n## 常见数据问题\n\n### 1. 去除重复项\n- 使用"数据"选项卡 → "删除重复项"\n- 根据指定列判断重复\n\n### 2. 处理空值\n- 定位空值：Ctrl+G → 定位条件 → 空值\n- 填充空值：使用上一个值填充\n- 删除包含空值的行\n\n### 3. 数据分列\n- 分割单元格内容\n- 按分隔符（如逗号、空格）分列\n- 按固定宽度分列\n\n### 4. 清除格式\n- 清除所有格式\n- 只保留值\n\n### 5. 数据验证\n- 设置输入范围\n- 下拉列表选择\n- 输入提示和错误警告'
          },
          {
            id: '2',
            type: 'code',
            title: '数据清洗实战',
            duration: 45,
            code: '-- Excel数据清洗实战（模拟环境）\n-- 原始数据\n| 姓名 | 联系方式 | 地区 | 销售额 |\n|------|----------|------|--------|\n| 张三 | 13800138000 | 北京 | 5000 |\n| 李四 | 139****8888 | 上海 | 6000 |\n| 王五 | 13600136000 | 广州 | 4500 |\n| 赵六 | null | 深圳 | 7000 |\n| 孙七 | 13700137000 | 北京 | 5500 |\n\n-- 清洗步骤：\n-- 1. 删除重复项（假设无重复）\n-- 2. 处理空值：赵六联系方式缺失\n-- 3. 统一电话号码格式\n\n-- 清洗后数据\n| 姓名 | 联系方式 | 地区 | 销售额 |\n|------|----------|------|--------|\n| 张三 | 138****8000 | 北京 | 5000 |\n| 李四 | 139****8888 | 上海 | 6000 |\n| 王五 | 136****6000 | 广州 | 4500 |\n| 赵六 | 未知 | 深圳 | 7000 |\n| 孙七 | 137****7000 | 北京 | 5500 |\n\n-- 统计结果\n北京地区合计: 10,500\n上海地区合计: 6,000\n广州地区合计: 4,500\n深圳地区合计: 7,000\n总计: 28,000',
            expectedOutput: '-- 数据清洗结果 --\n\n处理记录:\n✓ 删除重复项: 0条\n✓ 填充空值: 1条\n✓ 统一格式: 4条\n\n地区销售统计:\n| 地区 | 销售额 | 占比 |\n|------|--------|------|\n| 北京 | 10,500 | 37.5% |\n| 深圳 |  7,000 | 25.0% |\n| 上海 |  6,000 | 21.4% |\n| 广州 |  4,500 | 16.1% |'
          }
        ]
      },
      {
        id: '3',
        title: '数据透视表',
        duration: 90,
        contents: [
          {
            id: '1',
            type: 'code',
            title: '创建数据透视表',
            duration: 45,
            code: '-- Excel数据透视表练习（模拟环境）\n-- 原始销售数据\n| 日期 | 地区 | 产品 | 销量 | 销售额 |\n|------|------|------|------|--------|\n| 1月 | 北京 | 电脑 | 100 | 500000 |\n| 1月 | 北京 | 手机 | 200 | 400000 |\n| 1月 | 上海 | 电脑 | 80 | 400000 |\n| 1月 | 上海 | 手机 | 150 | 300000 |\n| 2月 | 北京 | 电脑 | 120 | 600000 |\n| 2月 | 北京 | 手机 | 180 | 360000 |\n| 2月 | 上海 | 电脑 | 90 | 450000 |\n| 2月 | 上海 | 手机 | 160 | 320000 |\n\n-- 创建数据透视表\n-- 行: 地区\n-- 列: 产品\n-- 值: 销售额（求和）\n\n透视结果:\n| 地区 | 电脑 | 手机 | 总计 |\n|------|------|------|------|\n| 北京 | 1,100,000 | 760,000 | 1,860,000 |\n| 上海 | 850,000 | 620,000 | 1,470,000 |\n| 总计 | 1,950,000 | 1,380,000 | 3,330,000 |',
            expectedOutput: '-- 数据透视表结果 --\n\n按地区-产品交叉统计:\n\n        电脑        手机       总计\n北京  1,100,000   760,000  1,860,000\n上海    850,000   620,000  1,470,000\n\n总计: 3,330,000'
          }
        ]
      }
    ]
  },
  // 新增课程6: 统计学基础
  {
    id: '6',
    title: '统计学基础与应用',
    description: '学习统计学的基本概念和方法，包括描述性统计、概率分布、假设检验、回归分析等，为数据分析和机器学习打下坚实的理论基础。',
    coverImage: 'https://picsum.photos/800/450?random=6',
    difficulty: '初级',
    duration: 20,
    instructor: '陈老师',
    instructorBio: '统计学博士，5年教学经验，专注于统计学在商业领域的应用，发表多篇统计学相关论文。',
    rating: 4.8,
    reviewCount: 88,
    chapters: [
      {
        id: '1',
        title: '描述性统计',
        duration: 60,
        contents: [
          {
            id: '1',
            type: 'text',
            title: '集中趋势',
            duration: 30,
            content: '# 集中趋势\n\n## 什么是集中趋势\n\n集中趋势是指一组数据向中心聚集的程度，反映了数据的典型值或中心值。\n\n## 常用指标\n\n### 1. 均值（Mean）\n- 所有数值的算术平均\n- 公式: x̄ = (x₁ + x₂ + ... + xₙ) / n\n- 特点: 受极端值影响大\n\n### 2. 中位数（Median）\n- 将数据排序后位于中间位置的值\n- 奇数个数据: 中间的值\n- 偶数个数据: 中间两个值的平均\n- 特点: 不受极端值影响\n\n### 3. 众数（Mode）\n- 出现次数最多的值\n- 一组数据可以有多个众数\n- 适用于分类数据'
          },
          {
            id: '2',
            type: 'code',
            title: '计算集中趋势',
            duration: 30,
            code: '-- 描述性统计计算\nimport numpy as np\n\n# 某公司员工月薪数据（元）\nsalaries = [5000, 5500, 6000, 6500, 7000, 7500, 8000, \n            12000, 15000, 50000]\n\nprint("=== 集中趋势指标 ===\\n")\n\n# 均值\nmean_salary = np.mean(salaries)\nprint("均值: ¥mean_salary:,.2f")\n\n# 中位数\nmedian_salary = np.median(salaries)\nprint("中位数: ¥median_salary:,.2f")\n\n# 众数\nfrom collections import Counter\ncounter = Counter(salaries)\nmode_salary = counter.most_common(1)[0][0]\nprint("众数: ¥mode_salary:,.2f")\n\nprint("\\n分析: 均值被高管薪资拉高，")\nprint("中位数更能代表普通员工水平")',
            expectedOutput: '=== 集中趋势指标 ===\n\n均值: ¥12,000.00\n中位数: ¥7,000.00\n众数: ¥5,000.00\n\n分析: 均值被高管薪资拉高，\n中位数更能代表普通员工水平'
          }
        ]
      },
      {
        id: '2',
        title: '离散程度',
        duration: 60,
        contents: [
          {
            id: '1',
            type: 'text',
            title: '离散程度指标',
            duration: 30,
            content: '# 离散程度\n\n## 什么是离散程度\n\n离散程度反映数据分散或聚集的程度，是衡量数据稳定性的重要指标。\n\n## 常用指标\n\n### 1. 极差（Range）\n- 最大值与最小值的差\n- 公式: R = Max - Min\n- 特点: 简单但易受极端值影响\n\n### 2. 方差（Variance）\n- 各数据与均值差平方的平均值\n- 总体方差: σ² = Σ(xᵢ - μ)² / N\n- 样本方差: s² = Σ(xᵢ - x̄)² / (n-1)\n\n### 3. 标准差（Standard Deviation）\n- 方差的平方根\n- 与原数据单位相同\n- 常用的离散程度指标\n\n### 4. 变异系数（CV）\n- 标准差与均值的比值\n- 公式: CV = σ / μ × 100%\n- 用于比较不同数据集的离散程度'
          },
          {
            id: '2',
            type: 'code',
            title: '计算离散程度',
            duration: 30,
            code: '-- 离散程度计算\nimport numpy as np\n\n# 两组学生成绩\nclass_a = [85, 87, 89, 91, 93, 95, 97, 99]\nclass_b = [60, 70, 80, 90, 90, 100, 110, 120]\n\nprint("=== 离散程度比较 ===\\n")\n\nfor name, scores in [("A班", class_a), ("B班", class_b)]:\n    mean = np.mean(scores)\n    std = np.std(scores)\n    variance = np.var(scores)\n    cv = (std / mean) * 100\n    \n    print("name")\n    print("  均值: mean:.1f")\n    print("  标准差: std:.2f")\n    print("  方差: variance:.2f")\n    print("  变异系数: cv:.1f%")\n    print()\n\nprint("结论: A班成绩更稳定（标准差小）")',
            expectedOutput: '=== 离散程度比较 ===\n\nA班\n  均值: 92.0\n  标准差: 4.62\n  方差: 21.38\n  变异系数: 5.0%\n\nB班\n  均值: 90.0\n  标准差: 20.00\n  方差: 400.00\n  变异系数: 22.2%\n\n结论: A班成绩更稳定（标准差小）'
          }
        ]
      },
      {
        id: '3',
        title: '概率分布',
        duration: 75,
        contents: [
          {
            id: '1',
            type: 'code',
            title: '正态分布',
            duration: 45,
            code: '-- 正态分布\nimport numpy as np\n\n# 某品牌手机使用寿命（年）\n# 假设服从正态分布，均值4年，标准差1年\nnp.random.seed(42)\nlifespan = np.random.normal(loc=4, scale=1, size=1000)\n\nprint("=== 手机使用寿命分析 ===\\n")\n\n# 基本统计\nprint("样本数量: len(lifespan)\")\nprint("平均寿命: np.mean(lifespan):.2f年")\nprint("标准差: np.std(lifespan):.2f年")\n\n# 概率计算（使用68-95-99.7法则）\nmean, std = 4, 1\nwithin_1std = np.sum((lifespan >= mean-std) & (lifespan <= mean+std))\nwithin_2std = np.sum((lifespan >= mean-2*std) & (lifespan <= mean+2*std))\nwithin_3std = np.sum((lifespan >= mean-3*std) & (lifespan <= mean+3*std))\n\nprint("\\n68-95-99.7法则验证:")\nprint("  1个标准差内: within_1std/len(lifespan)*100:.1f% (理论68.3%)")\nprint("  2个标准差内: within_2std/len(lifespan)*100:.1f% (理论95.5%)")\nprint("  3个标准差内: within_3std/len(lifespan)*100:.1f% (理论99.7%)")',
            expectedOutput: '=== 手机使用寿命分析 ===\n\n样本数量: 1000\n平均寿命: 4.02年\n标准差: 0.98年\n\n68-95-99.7法则验证:\n  1个标准差内: 68.6% (理论68.3%)\n  2个标准差内: 95.3% (理论95.5%)\n  3个标准差内: 99.7% (理论99.7%)\n\n结论: 数据符合正态分布'
          }
        ]
      }
    ]
  },
  // 新增课程7: 数据仓库
  {
    id: '7',
    title: '数据仓库实战',
    description: '学习数据仓库的基本概念、架构设计、ETL流程、数据建模（星型模型、雪花模型）等核心知识，为企业级数据分析奠定基础。',
    coverImage: 'https://picsum.photos/800/450?random=7',
    difficulty: '中级',
    duration: 22,
    instructor: '赵老师',
    instructorBio: '数据架构师，12年数据仓库建设经验，曾主导多个大型企业数据仓库项目，精通Hive、Spark等大数据技术。',
    rating: 4.6,
    reviewCount: 72,
    chapters: [
      {
        id: '1',
        title: '数据仓库基础',
        duration: 60,
        contents: [
          {
            id: '1',
            type: 'text',
            title: '数据仓库概念',
            duration: 30,
            content: '# 数据仓库基础\n\n## 什么是数据仓库\n\n数据仓库（Data Warehouse）是一个面向主题的、集成的、相对稳定的数据集合，用于支持管理决策。\n\n## 数据仓库特点\n\n### 1. 面向主题（Subject-Oriented）\n-围绕主要业务主题组织数据\n- 如：用户、商品、订单、库存\n\n### 2. 集成性（Integrated）\n- 整合多个数据源\n- 统一数据格式和编码\n\n### 3. 相对稳定性（Non-Volatile）\n- 历史数据不可随意更改\n- 主要用于查询和分析\n\n### 4. 随时间变化（Time-Variant）\n- 记录历史数据\n- 数据随时间不断追加'
          },
          {
            id: '2',
            type: 'code',
            title: '数据仓库架构',
            duration: 30,
            code: '-- 数据仓库架构设计\n-- 数据流向\n\nprint("""数据仓库分层架构:\n\n┌─────────────┐\n│ 数据源层    │ ← MySQL, PostgreSQL, API, 日志\n└──────┬──────┘\n       ↓\n┌─────────────┐\n│ ODS层       │ ← 原始数据层（临时存储）\n└──────┬──────┘\n       ↓\n┌─────────────┐\n│ DW层        │ ← 数据仓库层（明细/汇总）\n└──────┬──────┘\n       ↓\n┌─────────────┐\n│ ADS层       │ ← 数据应用层（报表/BI）\n└─────────────┘\n""")\n\n-- 创建ODS层表\nCREATE TABLE ods_orders (\n    order_id STRING,\n    user_id STRING,\n    product_id STRING,\n    quantity INT,\n    amount DECIMAL(10,2),\n    create_time STRING,\n    etl_time STRING\n);',
            expectedOutput: '数据仓库分层:\n\n1. ODS层（操作数据存储）\n   - 原始数据暂存\n   - 数据质量检查\n   - 保留原始格式\n\n2. DW层（数据仓库层）\n   - 清洗转换\n   - 统一建模\n   - 历史数据\n\n3. ADS层（应用数据层）\n   - 业务报表\n   - 数据分析\n   - 数据共享'
          }
        ]
      },
      {
        id: '2',
        title: '数据建模',
        duration: 90,
        contents: [
          {
            id: '1',
            type: 'text',
            title: '维度建模',
            duration: 45,
            content: '# 维度建模\n\n## Kimball方法论\n\nRalph Kimball提出的维度数据仓库设计方法，核心是构建可理解、易使用的分析模型。\n\n## 核心概念\n\n### 1. 事实表（Fact Table）\n- 存储业务度量值（数字）\n- 如：销售额、订单数量、访问量\n- 与维度表关联\n\n### 2. 维度表（Dimension Table）\n- 存储业务上下文信息\n- 如：时间、产品、客户\n- 提供分析角度\n\n## 模型类型\n\n### 星型模型（Star Schema）\n- 一个事实表 + 多个维度表\n- 维度表直接关联事实表\n- 查询效率高\n\n### 雪花模型（Snowflake Schema）\n- 维度表进一步规范化\n- 形成多级层次\n- 节省存储空间'
          },
          {
            id: '2',
            type: 'code',
            title: '星型模型实战',
            duration: 45,
            code: '-- 星型模型实战：电商数据分析\n\n-- 创建时间维度表\nCREATE TABLE dim_date (\n    date_id STRING,\n    date DATE,\n    year INT,\n    month INT\n);\n\n-- 创建产品维度表\nCREATE TABLE dim_product (\n    product_id STRING,\n    product_name STRING,\n    category_name STRING,\n    brand_name STRING\n);\n\n-- 创建订单事实表\nCREATE TABLE fact_orders (\n    order_id STRING,\n    date_id STRING,\n    product_id STRING,\n    user_id STRING,\n    quantity INT,\n    amount DECIMAL(10,2)\n);\n\n-- 查询：各品牌月度销售额\nSELECT \n    d.year, d.month,\n    p.brand_name,\n    SUM(f.amount) AS total_amount\nFROM fact_orders f\nJOIN dim_date d ON f.date_id = d.date_id\nJOIN dim_product p ON f.product_id = p.product_id\nGROUP BY d.year, d.month, p.brand_name;',
            expectedOutput: '-- 星型模型查询结果 --\n\n各品牌月度销售额:\n| 年 | 月 | 品牌 | 销售额 |\n|----|----|----|--------|\n| 2024 | 1 | 苹果 | 520,000 |\n| 2024 | 1 | 三星 | 380,000 |\n| 2024 | 1 | 华为 | 290,000 |\n\n查询特点:\n✓ 表连接少，查询快\n✓ 结构清晰易懂\n✓ 适合快速分析'
          }
        ]
      },
      {
        id: '3',
        title: 'ETL流程',
        duration: 75,
        contents: [
          {
            id: '1',
            type: 'code',
            title: 'ETL实战',
            duration: 45,
            code: '-- ETL流程示例\n-- Extract -> Transform -> Load\n\nprint("=== ETL数据处理流程 ===")\n\n# 1. Extract 抽取\nprint("抽取数据...")\nsource_data = [100, 200, 150]\nprint("抽取记录数:", len(source_data))\n\n# 2. Transform 转换\nprint("\\nTransform数据转换...")\ntransformed = []\nfor amt in source_data:\n    if amt > 0:\n        transformed.append(amt * 1.1)\nprint("转换后记录数:", len(transformed))\n\n# 3. Load 加载\nprint("\\nLoad数据加载...")\nfor i, val in enumerate(transformed):\n    print("  加载记录", i+1)\nprint("ETL完成")',
            expectedOutput: '=== ETL数据处理流程 ===\n\n抽取数据...\n抽取记录数: 3\n\nTransform数据转换...\n转换后记录数: 3\n\nLoad数据加载...\n  加载记录 1\n  加载记录 2\n  加载记录 3\nETL完成'
          }
        ]
      }
    ]
  },
  // 新增课程8: 电商数据分析
  {
    id: '8',
    title: '电商数据分析实战',
    description: '深入学习电商行业的数据分析技能，涵盖用户行为分析、商品分析、转化漏斗、GMV分析等，通过真实电商数据案例提升实战能力。',
    coverImage: 'https://picsum.photos/800/450?random=8',
    difficulty: '高级',
    duration: 25,
    instructor: '周老师',
    instructorBio: '前京东数据分析师，8年电商数据分析经验，擅长用户增长、转化优化方向，主导过多个千万级项目。',
    rating: 4.9,
    reviewCount: 105,
    chapters: [
      {
        id: '1',
        title: '用户行为分析',
        duration: 90,
        contents: [
          {
            id: '1',
            type: 'text',
            title: '用户行为概述',
            duration: 30,
            content: '# 用户行为分析\n\n## 什么是用户行为分析\n\n用户行为分析是通过收集、分析用户在产品上的行为数据，了解用户如何与产品互动，发现用户痛点，优化产品体验。\n\n## 用户行为路径\n\n### 典型电商路径\n1. **访问** → 首页/活动页\n2. **浏览** → 商品列表/详情页\n3. **搜索** → 关键词搜索商品\n4. **加购** → 加入购物车\n5. **下单** → 提交订单\n6. **支付** → 完成支付\n7. **复购** → 再次购买\n\n## 关键指标\n\n### 用户获取指标\n- UV（独立访客）\n- 新访客数/占比\n- 渠道转化率\n\n### 用户活跃指标\n- DAU（日活）\n- MAU（月活）\n- 页面访问深度'
          },
          {
            id: '2',
            type: 'code',
            title: '用户路径分析',
            duration: 60,
            code: '-- 电商用户行为路径分析\nimport pandas as pd\nimport numpy as np\n\nprint("=== 电商用户路径分析 ===\\n")\n\n# 模拟用户行为数据\nnp.random.seed(42)\nuser_behavior = pd.DataFrame({\n    "user_id": ["Ustr(i).zfill(4)" for i in range(1, 1001)],\n    "pv_home": np.random.randint(1, 10, 1000),\n    "pv_product": np.random.randint(0, 20, 1000),\n    "cart_count": np.random.randint(0, 5, 1000),\n    "order_count": np.random.randint(0, 3, 1000),\n    "pay_count": np.random.randint(0, 3, 1000),\n})\n\n# 计算转化率\ntotal_users = len(user_behavior)\nhome_users = (user_behavior["pv_home"] > 0).sum()\nproduct_users = (user_behavior["pv_product"] > 0).sum()\ncart_users = (user_behavior["cart_count"] > 0).sum()\norder_users = (user_behavior["order_count"] > 0).sum()\npay_users = (user_behavior["pay_count"] > 0).sum()\n\nprint("用户漏斗分析:")\nprint("访问用户: home_users (100%)")\nprint("浏览商品: product_users (product_users/home_users*100:.1f%)")\nprint("加入购物车: cart_users (cart_users/home_users*100:.1f%)")\nprint("提交订单: order_users (order_users/home_users*100:.1f%)")\nprint("完成支付: pay_users (pay_users/home_users*100:.1f%)")',
            expectedOutput: '=== 电商用户路径分析 ===\n\n用户漏斗分析:\n访问用户: 1000 (100%)\n浏览商品: 892 (89.2%)\n加入购物车: 687 (68.7%)\n提交订单: 423 (42.3%)\n完成支付: 389 (38.9%)\n\n关键转化率:\n浏览→加购: 77.0%\n加购→下单: 61.6%\n下单→支付: 92.0%'
          }
        ]
      },
      {
        id: '2',
        title: 'GMV分析',
        duration: 75,
        contents: [
          {
            id: '1',
            type: 'code',
            title: 'GMV实战分析',
            duration: 45,
            code: '-- GMV核心指标分析\nimport pandas as pd\nimport numpy as np\n\nprint("=== GMV核心指标分析 ===\\n")\n\n# 模拟30天GMV数据\nnp.random.seed(42)\ndates = pd.date_range("2024-01-01", periods=30)\ngmv = np.abs(np.random.normal(100000, 15000, 30).astype(int))\norder_count = np.random.randint(800, 1500, 30)\n\n# 汇总统计\nprint("30天GMV汇总:")\nprint("  总GMV: ¥gmv.sum():,.0f")\nprint("  日均GMV: ¥gmv.mean():,.0f")\nprint("  最高GMV: ¥gmv.max():,.0f")\nprint("  最低GMV: ¥gmv.min():,.0f")\n\nprint("\\n订单指标:")\nprint("  总订单数: order_count.sum():,")\nprint("  日均订单: order_count.mean():.0f")\n\n# 环比分析\nfirst_half = gmv[:15].sum()\nsecond_half = gmv[15:].sum()\ngrowth = (second_half - first_half) / first_half * 100\n\nprint("\\n环比分析:")\nprint("  上半月GMV: ¥first_half:,.0f")\nprint("  下半月GMV: ¥second_half:,.0f")\nprint("  环比增长: growth:+.1f%")',
            expectedOutput: '=== GMV核心指标分析 ===\n\n30天GMV汇总:\n  总GMV: ¥3,012,580\n  日均GMV: ¥100,419\n  最高GMV: ¥145,280\n  最低GMV: ¥65,420\n\n订单指标:\n  总订单数: 34,280\n  日均订单: 1,143\n\n环比分析:\n  上半月GMV: ¥1,420,580\n  下半月GMV: ¥1,592,000\n  环比增长: +12.1%'
          }
        ]
      },
      {
        id: '3',
        title: '用户画像分析',
        duration: 90,
        contents: [
          {
            id: '1',
            type: 'code',
            title: '用户画像实战',
            duration: 60,
            code: '-- 电商用户画像分析\nimport pandas as pd\nimport numpy as np\n\nprint("=== 电商用户画像分析 ===\\n")\n\n# 模拟用户画像数据\nnp.random.seed(42)\nusers = pd.DataFrame({\n    "user_id": ["Ustr(i).zfill(5)" for i in range(1, 5001)],\n    "age": np.random.randint(18, 60, 5000),\n    "total_amount": np.random.exponential(500, 5000),\n    "order_count": np.random.poisson(3, 5000),\n})\n\n# 用户分层（RFM模型）\nusers["r_score"] = pd.qcut(users["order_count"], q=4, labels=[1,2,3,4])\nusers["f_score"] = pd.qcut(users["total_amount"], q=4, labels=[1,2,3,4])\n\n# 用户分层\ndef get_user_level(row):\n    if row["r_score"] >= 3 and row["f_score"] >= 3:\n        return "VIP用户"\n    elif row["f_score"] >= 3:\n        return "价值用户"\n    elif row["r_score"] >= 3:\n        return "活跃用户"\n    else:\n        return "普通用户"\n\nusers["user_level"] = users.apply(get_user_level, axis=1)\n\n# 统计结果\nprint("用户分层统计:")\nlevel_counts = users["user_level"].value_counts()\nfor level, count in level_counts.items():\n    pct = count / len(users) * 100\n    print("  level: count (pct:.1f%)")\n\nprint("\\n用户特征:")\nprint("  平均年龄: users[\'age\'].mean():.0f岁")\nprint("  平均客单价: ¥users[\'total_amount\'].mean():.0f")',
            expectedOutput: '=== 电商用户画像分析 ===\n\n用户分层统计:\n  VIP用户: 625 (12.5%)\n  价值用户: 1,250 (25.0%)\n  活跃用户: 1,250 (25.0%)\n  普通用户: 1,875 (37.5%)\n\n用户特征:\n  平均年龄: 34岁\n  平均客单价: ¥498'
          }
        ]
      }
    ]
  },
  // 新增课程9: 金融数据分析
  {
    id: '9',
    title: '金融数据分析',
    description: '学习金融领域的数据分析方法，涵盖风险评估、信用评分、交易数据分析、财报分析等，掌握金融行业必备的数据分析技能。',
    coverImage: 'https://picsum.photos/800/450?random=9',
    difficulty: '高级',
    duration: 24,
    instructor: '吴老师',
    instructorBio: '金融数据分析师，CFA持证人，10年金融行业经验，曾在银行、证券、互金公司从事数据分析工作。',
    rating: 4.7,
    reviewCount: 78,
    chapters: [
      {
        id: '1',
        title: '风控数据分析',
        duration: 90,
        contents: [
          {
            id: '1',
            type: 'text',
            title: '风控概述',
            duration: 30,
            content: '# 金融风控数据分析\n\n## 什么是风控\n\n风险管理是指在金融机构运营过程中，对可能发生的风险进行识别、评估、控制的过程。\n\n## 风控数据类型\n\n### 1. 交易数据\n- 交易金额、频率、时间\n- 交易对手信息\n- 交易渠道\n\n### 2. 客户数据\n- 基本信息（年龄、职业、收入）\n- 信用历史\n- 资产负债情况\n\n### 3. 行为数据\n- 登录习惯\n- 操作路径\n- 异常行为模式\n\n## 风控核心指标\n\n| 指标 | 说明 | 理想值 |\n|------|------|--------|\n| 不良率 | 逾期90天以上贷款占比 | <3% |\n| 坏账率 | 无法回收的贷款占比 | <1% |\n| 拨备覆盖率 | 坏账准备/不良贷款 | >150% |'
          },
          {
            id: '2',
            type: 'code',
            title: '风控指标分析',
            duration: 60,
            code: '-- 金融风控指标分析\nimport pandas as pd\nimport numpy as np\n\nprint("=== 金融风控指标分析 ===\\n")\n\n# 模拟贷款客户数据\nnp.random.seed(42)\ncustomers = pd.DataFrame({\n    "customer_id": ["Cstr(i).zfill(6)" for i in range(1, 5001)],\n    "age": np.random.randint(22, 60, 5000),\n    "income": np.random.normal(15000, 8000, 5000),\n    "loan_amount": np.random.normal(50000, 30000, 5000),\n    "overdue_days": np.random.exponential(10, 5000).astype(int),\n})\n\n# 计算风控指标\ntotal_loans = len(customers)\noverdue_loans = (customers["overdue_days"] > 0).sum()\nbad_loans = (customers["overdue_days"] > 90).sum()\n\nprint("贷款概况:")\nprint("  总贷款笔数: total_loans:,")\nprint("  逾期笔数: overdue_loans:, (overdue_loans/total_loans*100:.2f%)")\nprint("  不良笔数: bad_loans:, (bad_loans/total_loans*100:.2f%)")\n\n# 逾期率分布\nprint("\\n逾期天数分布:")\nfor days, label in [(0, "正常"), (1, "M1"), (30, "M2"), (90, "M3+")]:\n    if days == 0:\n        count = (customers["overdue_days"] == days).sum()\n    else:\n        count = (customers["overdue_days"] > days).sum()\n    print("  label: count (count/total_loans*100:.2f%)")',
            expectedOutput: '=== 金融风控指标分析 ===\n\n贷款概况:\n  总贷款笔数: 5,000\n  逾期笔数: 2,845 (56.90%)\n  不良笔数: 521 (10.42%)\n\n逾期天数分布:\n  正常: 2,155 (43.10%)\n  M1: 521 (10.42%)\n  M2: 521 (10.42%)\n  M3+: 521 (10.42%)'
          }
        ]
      },
      {
        id: '2',
        title: '用户分群',
        duration: 75,
        contents: [
          {
            id: '1',
            type: 'code',
            title: '风控用户分群',
            duration: 45,
            code: '-- 风控用户分群分析\nimport pandas as pd\nimport numpy as np\n\nprint("=== 风控用户分群分析 ===\\n")\n\n# 模拟客户数据\nnp.random.seed(42)\ncustomers = pd.DataFrame({\n    "customer_id": ["Cstr(i).zfill(5)" for i in range(1, 1001)],\n    "credit_score": np.random.normal(650, 100, 1000).clip(300, 850),\n    "annual_income": np.random.normal(120000, 40000, 1000),\n    "debt_ratio": np.random.uniform(0.1, 0.9, 1000),\n    "overdue_count": np.random.poisson(0.5, 1000),\n})\n\n# 风控分群\ndef risk_segment(row):\n    score = 0\n    if row["credit_score"] >= 700: score += 2\n    elif row["credit_score"] >= 600: score += 1\n    \n    if row["debt_ratio"] <= 0.3: score += 2\n    elif row["debt_ratio"] <= 0.5: score += 1\n    \n    if row["overdue_count"] == 0: score += 2\n    elif row["overdue_count"] <= 1: score += 1\n    else: score -= 1\n    \n    if score >= 5: return "低风险"\n    elif score >= 3: return "中风险"\n    else: return "高风险"\n\ncustomers["risk_level"] = customers.apply(risk_segment, axis=1)\n\n# 统计结果\nprint("风控分群统计:")\nrisk_stats = customers.groupby("risk_level").agg({\n    "credit_score": "mean",\n    "annual_income": "mean",\n    "debt_ratio": "mean",\n    "customer_id": "count"\n}).rename(columns={"customer_id": "count"})\n\nfor level in ["低风险", "中风险", "高风险"]:\n    row = risk_stats.loc[level]\n    print("\\nlevel (int(row[\'count\'])人):")\n    print("  平均信用分: row[\'credit_score\']:.0f")\n    print("  平均年收入: ¥row[\'annual_income\']:,.0f")',
            expectedOutput: '=== 风控用户分群分析 ===\n\n风控分群统计:\n\n低风险 (523人):\n  平均信用分: 720\n  平均年收入: ¥135,000\n\n中风险 (312人):\n  平均信用分: 635\n  平均年收入: ¥115,000\n\n高风险 (165人):\n  平均信用分: 548\n  平均年收入: ¥98,000'
          }
        ]
      }
    ]
  },
  // 新增课程10: 零售数据分析
  {
    id: '10',
    title: '零售数据分析实战',
    description: '学习零售行业的数据分析方法，涵盖门店分析、商品分析、库存分析、促销分析等，帮助零售企业实现数据驱动决策。',
    coverImage: 'https://picsum.photos/800/450?random=10',
    difficulty: '高级',
    duration: 22,
    instructor: '林老师',
    instructorBio: '零售数据专家，前沃尔玛数据分析经理，擅长零售行业的数据化运营，帮助多家零售企业提升业绩。',
    rating: 4.8,
    reviewCount: 92,
    chapters: [
      {
        id: '1',
        title: '门店分析',
        duration: 75,
        contents: [
          {
            id: '1',
            type: 'text',
            title: '零售门店指标',
            duration: 30,
            content: '# 零售门店分析\n\n## 门店核心指标\n\n### 1. 销售额指标\n- **GMV（成交总额）**：含退款\n- **净销售额**：GMV - 退款\n- **客单价**：销售额/客单数\n- **件单价**：销售额/销售件数\n\n### 2. 客流指标\n- **进店人数**：进入门店的顾客数\n- **成交人数**：实际购买的顾客数\n- **转化率**：成交人数/进店人数\n\n### 3. 效率指标\n- **坪效**：销售额/面积（评估门店效率）\n- **人效**：销售额/员工数\n\n## 门店分析维度\n\n| 维度 | 分析内容 |\n|------|----------|\n| 时间 | 日/周/月/季/年 |\n| 区域 | 城市/商圈/门店 |\n| 商品 | 品类/品牌/单品 |'
          },
          {
            id: '2',
            type: 'code',
            title: '门店业绩分析',
            duration: 45,
            code: '-- 零售门店业绩分析\nimport pandas as pd\nimport numpy as np\n\nprint("=== 零售门店业绩分析 ===\\n")\n\n# 模拟门店数据\nnp.random.seed(42)\nstores = pd.DataFrame({\n    "store_id": ["Sstr(i).zfill(3)" for i in range(1, 21)],\n    "area": np.random.randint(100, 500, 20),\n    "staff_count": np.random.randint(5, 20, 20),\n    "daily_sales": np.random.randint(5000, 30000, 20),\n    "monthly_cost": np.random.randint(30000, 100000, 20),\n})\n\n# 计算指标\nstores["sales_per_m2"] = stores["daily_sales"] / stores["area"]\nstores["sales_per_staf"] = stores["daily_sales"] / stores["staff_count"]\nstores["profit"] = stores["daily_sales"] * 0.25 - stores["monthly_cost"] / 30\n\n# TOP5门店\nprint("门店业绩排名（按销售额）:")\ntop5 = stores.nlargest(5, "daily_sales")[["store_id", "daily_sales", "sales_per_m2"]]\nprint(top5.to_string(index=False))\n\nprint("\\n门店效率分析:")\nprint("  平均坪效: ¥stores[\'sales_per_m2\'].mean():.0f/m²")\nprint("  平均人效: ¥stores[\'sales_per_staff\'].mean():.0f/人")\nprint("  盈利门店: (stores[\'profit\'] > 0).sum()/len(stores)")',
            expectedOutput: '=== 零售门店业绩分析 ===\n\n门店业绩排名（按销售额）:\n  store_id  daily_sales  sales_per_m2\n      S015        29,850           92\n      S008        28,420           85\n      S003        27,150           88\n      S019        26,890           82\n      S012        26,500           79\n\n门店效率分析:\n  平均坪效: ¥68/m²\n  平均人效: ¥2,180/人\n  盈利门店: 15/20'
          }
        ]
      },
      {
        id: '2',
        title: '商品分析',
        duration: 75,
        contents: [
          {
            id: '1',
            type: 'code',
            title: '商品ABC分析',
            duration: 45,
            code: '-- 零售商品ABC分析\nimport pandas as pd\nimport numpy as np\n\nprint("=== 商品ABC分析 ===\\n")\n\n# 模拟商品销售数据\nnp.random.seed(42)\nproducts = pd.DataFrame({\n    "product_id": ["Pstr(i).zfill(4)" for i in range(1, 101)],\n    "category": np.random.choice(["食品", "服装", "家电", "日用品"], 100),\n    "cost": np.random.uniform(10, 500, 100),\n    "sales": np.random.uniform(50, 5000, 100),\n})\n\nproducts["profit"] = products["sales"] - products["cost"]\n\n# ABC分类\nproducts_sorted = products.sort_values("sales", ascending=False)\ntotal_sales = products_sorted["sales"].sum()\nproducts_sorted["cum_pct"] = products_sorted["sales"].cumsum() / total_sales * 100\n\ndef abc_classify(cum_pct):\n    if cum_pct <= 80: return "A"\n    elif cum_pct <= 95: return "B"\n    else: return "C"\n\nproducts_sorted["abc_class"] = products_sorted["cum_pct"].apply(abc_classify)\n\n# ABC统计\nprint("ABC分类结果:")\nabc_stats = products_sorted.groupby("abc_class").agg({\n    "product_id": "count",\n    "sales": "sum",\n}).rename(columns={"product_id": "count"})\n\nfor cls in ["A", "B", "C"]:\n    row = abc_stats.loc[cls]\n    pct = row["sales"] / total_sales * 100\n    print("\\ncls类商品:")\n    print("  数量: int(row[\'count\'])个")\n    print("  销售额占比: pct:.1f%")',
            expectedOutput: '=== 商品ABC分析 ===\n\nABC分类结果:\n\nA类商品:\n  数量: 18个\n  销售额占比: 72.3%\n\nB类商品:\n  数量: 32个\n  销售额占比: 22.1%\n\nC类商品:\n  数量: 50个\n  销售额占比: 5.6%'
          }
        ]
      },
      {
        id: '3',
        title: '库存分析',
        duration: 60,
        contents: [
          {
            id: '1',
            type: 'code',
            title: '库存周转分析',
            duration: 45,
            code: '-- 零售库存周转分析\nimport pandas as pd\nimport numpy as np\n\nprint("=== 库存周转分析 ===\\n")\n\n# 模拟库存数据\nnp.random.seed(42)\ninventory = pd.DataFrame({\n    "product_id": ["Pstr(i).zfill(4)" for i in range(1, 51)],\n    "product_name": ["商品i" for i in range(1, 51)],\n    "opening_stock": np.random.randint(50, 500, 50),\n    "sales": np.random.randint(80, 800, 50),\n    "closing_stock": np.random.randint(30, 400, 50),\n})\n\n# 计算指标\ninventory["avg_stock"] = (inventory["opening_stock"] + inventory["closing_stock"]) / 2\ninventory["turnover_days"] = inventory["avg_stock"] / (inventory["sales"] / 30)\n\n# 判断库存状态\ndef stock_status(row):\n    if row["closing_stock"] == 0:\n        return "缺货"\n    elif row["turnover_days"] < 7:\n        return "畅销"\n    elif row["turnover_days"] > 30:\n        return "滞销"\n    else:\n        return "正常"\n\ninventory["status"] = inventory.apply(stock_status, axis=1)\n\n# 统计结果\nprint("库存状态分布:")\nstatus_counts = inventory["status"].value_counts()\nfor status, count in status_counts.items():\n    print("  status: count个 (count/len(inventory)*100:.1f%)")\n\nprint("\\n周转指标:")\nprint("  平均周转天数: inventory[\'turnover_days\'].mean():.1f天")',
            expectedOutput: '=== 库存周转分析 ===\n\n库存状态分布:\n  正常: 28个 (56.0%)\n  滞销: 12个 (24.0%)\n  畅销: 8个 (16.0%)\n  缺货: 2个 (4.0%)\n\n周转指标:\n  平均周转天数: 18.5天'
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
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
  // 课程1: Python基础入门 - 10章，覆盖Python核心内容
  {
    id: '1',
    title: 'Python基础入门',
    description: '本课程将帮助你掌握Python编程语言的基础知识，为数据分析打下坚实的基础。通过理论学习和实践练习，你将学会Python的基本语法、数据类型、控制结构、函数、模块等核心概念。',
    coverImage: 'https://picsum.photos/800/450?random=1',
    difficulty: '初级',
    duration: 20,
    instructor: '张老师',
    instructorBio: '拥有5年Python教学经验，曾在多家科技公司担任数据分析师，擅长Python编程和数据分析。',
    rating: 4.8,
    reviewCount: 120,
    chapters: [
      { id: '1', title: 'Python简介与环境配置', duration: 60, contents: [
        { id: '1', type: 'text', title: 'Python的历史和应用', duration: 15, content: '# Python的历史和应用\n\n## Python的诞生\n\nPython由Guido van Rossum于1989年圣诞节期间在荷兰的阿姆斯特丹创造。\n\n## Python的发展历程\n\n### 1991年 - Python 0.9.0\n- 第一个正式版本发布\n- 包含类、异常处理、函数和核心数据类型\n\n### 2000年 - Python 2.0\n- 引入垃圾回收机制\n- Unicode支持\n\n### 2008年 - Python 3.0\n- 不向后兼容的重大更新\n- 修复了许多设计缺陷\n\n## Python的应用领域\n\n### 1. Web开发\n- Django、Flask、FastAPI\n\n### 2. 数据科学与分析\n- Pandas、NumPy、Matplotlib\n- Scikit-learn、TensorFlow\n\n### 3. 人工智能\n- 机器学习、深度学习\n- 自然语言处理\n\n### 4. 自动化与脚本\n- 系统自动化\n- 爬虫程序\n\n## Python的特点\n\n- **简洁易学**：语法清晰\n- **功能强大**：库丰富\n- **跨平台**：多系统支持' },
        { id: '2', type: 'text', title: 'Python安装和环境配置', duration: 20, content: '# Python的安装和环境配置\n\n## 下载Python\n\n1. 访问Python官网：https://www.python.org/\n2. 选择适合你操作系统的版本\n\n## 安装步骤\n\n### Windows\n1. 运行安装程序\n2. 勾选"Add Python to PATH"\n3. 点击"Install Now"\n\n### 验证安装\n打开命令提示符，运行：\n```bash\npython --version\n```\n\n## 推荐开发工具\n\n1. **VS Code** - 免费且功能强大\n2. **PyCharm** - 专业的Python IDE\n3. **Jupyter Notebook** - 适合数据分析' },
        { id: '3', type: 'code', title: '第一个Python程序', duration: 25, code: '# 第一个Python程序\nprint("Hello, World!")\n\n# 变量和数据类型\nname = "张三"\nage = 25\nheight = 1.75\nis_student = True\n\nprint("姓名:", name)\nprint("年龄:", age)\nprint("身高:", height, "米")\nprint("是学生:", is_student)\n\n# 计算\nx = 10\ny = 20\nprint(x, "+", y, "=", x + y)', expectedOutput: 'Hello, World!\n姓名: 张三\n年龄: 25\n身高: 1.75 米\n是学生: True\n10 + 20 = 30' }
      ]},
      { id: '2', title: '变量和数据类型', duration: 90, contents: [
        { id: '1', type: 'text', title: '基本数据类型', duration: 20, content: '# Python基本数据类型\n\n## 主要数据类型\n\n### 1. 整数 (int)\n```python\nage = 25\nyear = 2024\n```\n\n### 2. 浮点数 (float)\n```python\nprice = 19.99\npi = 3.14159\n```\n\n### 3. 字符串 (str)\n```python\nname = "张三"\nmessage = \'Hello World\'\n```\n\n### 4. 布尔值 (bool)\n```python\nis_student = True\nis_working = False\n```\n\n## 类型转换\n\n```python\nnum_str = "100"\nnum_int = int(num_str)\nnum_float = float(100)\n```' },
        { id: '2', type: 'code', title: '数据类型练习', duration: 35, code: '# 数据类型练习\n\n# 1. 创建变量\nname = "张三"\nage = 25\nscore = 95.5\nis_pass = True\n\nprint("姓名:", name, type(name))\nprint("年龄:", age, type(age))\nprint("分数:", score, type(score))\nprint("是否及格:", is_pass, type(is_pass))\n\n# 2. 类型转换\nage_str = str(age)\nscore_int = int(score)\nprint("年龄字符串:", age_str)\nprint("分数整数:", score_int)\n\n# 3. 计算\nresult = age + score_int\nprint("年龄 + 分数:", result)', expectedOutput: '姓名: 张三 <class \'str\'>\n年龄: 25 <class \'int\'>\n分数: 95.5 <class \'float\'>\n是否及格: True <class \'bool\'>\n年龄字符串: 25\n分数整数: 95\n年龄 + 分数: 120' },
        { id: '3', type: 'text', title: '字符串操作', duration: 20, content: '# 字符串操作\n\n## 字符串基础\n\n```python\ntext = "Hello, Python!"\nprint(text[0])  # H\nprint(text[0:5])  # Hello\n```\n\n## 常用方法\n\n```python\ntext = "  Hello World  "\nprint(text.upper())  # HELLO WORLD\nprint(text.lower())  # hello world\nprint(text.strip())  # Hello World\nprint(text.replace("World", "Python"))  # Hello Python\n```\n\n## 字符串格式化\n\n```python\nname = "张三"\nage = 25\nprint(f"姓名: {name}, 年龄: {age}")\n```' },
        { id: '4', type: 'code', title: '字符串练习', duration: 30, code: '# 字符串练习\n\ntext = "  Python数据分析  "\n\nprint("原字符串:", repr(text))\nprint("去空格:", text.strip())\nprint("转大写:", text.upper())\nprint("转小写:", text.lower())\n\n# 字符串切片\ns = "HelloWorld"\nprint("前5个字符:", s[0:5])\nprint("后5个字符:", s[-5:])\n\n# 字符串连接\nparts = ["Python", "数据分析", "入门"]\nprint("-".join(parts))', expectedOutput: '原字符串: \'  Python数据分析  \'\n去空格: Python数据分析\n转大写:   PYTHON数据分析  \n转小写:   python数据分析  \n前5个字符: Hello\n后5个字符: World\nPython-数据分析-入门' }
      ]},
      { id: '3', title: '运算符和表达式', duration: 90, contents: [
        { id: '1', type: 'text', title: '算术运算符', duration: 25, content: '# Python算术运算符\n\n## 基本运算符\n\n| 运算符 | 说明 | 示例 |\n|--------|------|------|\n| + | 加法 | 5 + 3 = 8 |\n| - | 减法 | 5 - 3 = 2 |\n| * | 乘法 | 5 * 3 = 15 |\n| / | 除法 | 5 / 2 = 2.5 |\n| // | 整除 | 5 // 2 = 2 |\n| % | 取模 | 5 % 2 = 1 |\n| ** | 幂 | 5 ** 2 = 25 |' },
        { id: '2', type: 'code', title: '运算符练习', duration: 40, code: '# 运算符练习\n\n# 1. 基本运算\na = 15\nb = 4\nprint(a, "+", b, "=", a + b)\nprint(a, "-", b, "=", a - b)\nprint(a, "*", b, "=", a * b)\nprint(a, "/", b, "=", a / b)\nprint(a, "//", b, "=", a // b)\nprint(a, "%", b, "=", a % b)\nprint(a, "**", b, "=", a ** b)\n\n# 2. 圆的面积\nradius = 5\npi = 3.14159\narea = pi * radius ** 2\nprint("半径", radius, "的圆面积 =", area)\n\n# 3. 温度转换\ncelsius = 25\nfahrenheit = celsius * 9 / 5 + 32\nprint(celsius, "C =", fahrenheit, "F")', expectedOutput: '15 + 4 = 19\n15 - 4 = 11\n15 * 4 = 60\n15 / 4 = 3.75\n15 // 4 = 3\n15 % 4 = 3\n15 ** 4 = 50625\n半径 5 的圆面积 = 78.53975\n25 C = 77.0 F' },
        { id: '3', type: 'text', title: '比较和逻辑运算符', duration: 20, content: '# 比较和逻辑运算符\n\n## 比较运算符\n\n| 运算符 | 说明 |\n|--------|------|\n| == | 等于 |\n| != | 不等于 |\n| > | 大于 |\n| < | 小于 |\n| >= | 大于等于 |\n| <= | 小于等于 |\n\n## 逻辑运算符\n\n```python\na = True\nb = False\nprint(a and b)  # False\nprint(a or b)   # True\nprint(not a)   # False\n```' }
      ]},
      { id: '4', title: '控制结构', duration: 100, contents: [
        { id: '1', type: 'text', title: '条件语句', duration: 30, content: '# 条件语句\n\n## if语句\n\n```python\nage = 18\nif age >= 18:\n    print("成年人")\nelse:\n    print("未成年人")\n```\n\n## if-elif-else\n\n```python\nscore = 85\nif score >= 90:\n    grade = "优秀"\nelif score >= 80:\n    grade = "良好"\nelif score >= 60:\n    grade = "及格"\nelse:\n    grade = "不及格"\n```' },
        { id: '2', type: 'text', title: '循环语句', duration: 25, content: '# 循环语句\n\n## for循环\n\n```python\nfor i in range(1, 6):\n    print(i)\n\nfruits = ["苹果", "香蕉", "橙子"]\nfor fruit in fruits:\n    print(fruit)\n```\n\n## while循环\n\n```python\ncount = 0\nwhile count < 5:\n    print(count)\n    count += 1\n```\n\n## break和continue\n\n```python\nfor i in range(10):\n    if i == 5:\n        break\n    print(i)\n```' },
        { id: '3', type: 'code', title: '控制结构练习', duration: 40, code: '# 控制结构练习\n\n# 1. 判断成绩等级\nscore = 85\nif score >= 90:\n    print("优秀")\nelif score >= 80:\n    print("良好")\nelif score >= 60:\n    print("及格")\nelse:\n    print("不及格")\n\n# 2. 打印1-100的偶数\nprint("1-100的偶数:")\nfor i in range(2, 101, 2):\n    print(i, end=" ")\nprint()\n\n# 3. 计算1到100的和\ntotal = 0\nfor i in range(1, 101):\n    total += i\nprint("1到100的和:", total)', expectedOutput: '良好\n1-100的偶数:\n2 4 6 8 10 12 14 16 18 20 22 24 26 28 30 32 34 36 38 40 42 44 46 48 50 52 54 56 58 60 62 64 66 68 70 72 74 76 78 80 82 84 86 88 90 92 94 96 98 100 \n1到100的和: 5050' }
      ]},
      { id: '5', title: '数据结构：列表和元组', duration: 100, contents: [
        { id: '1', type: 'text', title: '列表基础', duration: 25, content: '# 列表\n\n## 创建列表\n\n```python\nfruits = ["苹果", "香蕉", "橙子"]\nnumbers = [1, 2, 3, 4, 5]\nmixed = [1, "hello", True, 3.14]\n```\n\n## 列表操作\n\n```python\nfruits.append("葡萄")\nfruits.insert(0, "草莓")\nfruits.remove("香蕉")\nprint(fruits[0])\nprint(len(fruits))\n```' },
        { id: '2', type: 'code', title: '列表操作练习', duration: 35, code: '# 列表练习\n\nfruits = ["苹果", "香蕉", "橙子"]\nprint("原始列表:", fruits)\n\n# 添加元素\nfruits.append("葡萄")\nprint("添加后:", fruits)\n\n# 插入元素\nfruits.insert(1, "草莓")\nprint("插入后:", fruits)\n\n# 删除元素\nfruits.remove("香蕉")\nprint("删除后:", fruits)\n\n# 列表切片\nnumbers = [0, 1, 2, 3, 4, 5]\nprint("前3个:", numbers[0:3])\nprint("后3个:", numbers[-3:])\n\n# 列表推导式\nsquares = [x**2 for x in range(1, 6)]\nprint("1-5的平方:", squares)', expectedOutput: '原始列表: [\'苹果\', \'香蕉\', \'橙子\']\n添加后: [\'苹果\', \'香蕉\', \'橙子\', \'葡萄\']\n插入后: [\'苹果\', \'草莓\', \'香蕉\', \'橙子\', \'葡萄\']\n删除后: [\'苹果\', \'草莓\', \'橙子\', \'葡萄\']\n前3个: [0, 1, 2]\n后3个: [3, 4, 5]\n1-5的平方: [1, 4, 9, 16, 25]' },
        { id: '3', type: 'text', title: '元组', duration: 20, content: '# 元组\n\n## 元组特点\n- 与列表类似，但元素不可修改\n- 使用圆括号()\n\n## 创建元组\n\n```python\npoint = (10, 20)\ncolors = ("红色", "绿色", "蓝色")\n```\n\n## 元组操作\n\n```python\npoint = (10, 20)\nprint(point[0])  # 10\nprint(point[1])  # 20\n\nx, y = point\nprint(x, y)  # 10 20\n```' }
      ]},
      { id: '6', title: '数据结构：字典和集合', duration: 90, contents: [
        { id: '1', type: 'text', title: '字典基础', duration: 25, content: '# 字典\n\n## 创建字典\n\n```python\nperson = {\n    "name": "张三",\n    "age": 25,\n    "city": "北京"\n}\n```\n\n## 字典操作\n\n```python\nperson["email"] = "zhangsan@example.com"\nprint(person["name"])\nprint(person.get("phone", "未填写"))\n```' },
        { id: '2', type: 'code', title: '字典练习', duration: 35, code: '# 字典练习\n\nperson = {\n    "name": "张三",\n    "age": 25,\n    "city": "北京",\n    "skills": ["Python", "SQL", "Excel"]\n}\n\nprint("个人信息:")\nprint("姓名:", person["name"])\nprint("年龄:", person["age"])\nprint("城市:", person["city"])\n\n# 添加字段\nperson["email"] = "zhangsan@example.com"\nprint("\\n添加邮箱:", person["email"])\n\n# 遍历字典\nprint("\\n所有键值对:")\nfor key, value in person.items():\n    print(f"  {key}: {value}")', expectedOutput: '个人信息:\n姓名: 张三\n年龄: 25\n城市: 北京\n\n添加邮箱: zhangsan@example.com\n\n所有键值对:\n  name: 张三\n  age: 25\n  city: 北京\n  skills: [\'Python\', \'SQL\', \'Excel\']\n  email: zhangsan@example.com' },
        { id: '3', type: 'text', title: '集合', duration: 20, content: '# 集合\n\n## 集合特点\n- 无序、不重复\n- 用于去重和集合运算\n\n## 创建集合\n\n```python\nfruits = {"苹果", "香蕉", "橙子"}\nnumbers = set([1, 2, 2, 3, 3])\n```\n\n## 集合操作\n\n```python\na = {1, 2, 3}\nb = {2, 3, 4}\nprint(a | b)  # 并集\nprint(a & b)  # 交集\nprint(a - b)  # 差集\n```' },
        { id: '4', type: 'code', title: '集合练习', duration: 25, code: '# 集合练习\n\n# 创建集合\na = {1, 2, 3, 4, 5}\nb = {4, 5, 6, 7, 8}\n\nprint("集合A:", a)\nprint("集合B:", b)\n\n# 并集\nprint("并集:", a | b)\n\n# 交集\nprint("交集:", a & b)\n\n# 差集\nprint("A-B差集:", a - b)\nprint("B-A差集:", b - a)\n\n# 去重\nnumbers = [1, 2, 2, 3, 3, 3, 4, 4, 5]\nunique = set(numbers)\nprint("\\n原列表:", numbers)\nprint("去重后:", unique)', expectedOutput: '集合A: {1, 2, 3, 4, 5}\n集合B: {4, 5, 6, 7, 8}\n并集: {1, 2, 3, 4, 5, 6, 7, 8}\n交集: {4, 5}\nA-B差集: {1, 2, 3}\nB-A差集: {6, 7, 8}\n原列表: [1, 2, 2, 3, 3, 3, 4, 4, 5]\n去重后: {1, 2, 3, 4, 5}' }
      ]},
      { id: '7', title: '函数', duration: 100, contents: [
        { id: '1', type: 'text', title: '函数定义和调用', duration: 25, content: '# 函数\n\n## 函数定义\n\n```python\ndef greet(name):\n    print(f"你好, {name}!")\n\ngreet("张三")\n```\n\n## 返回值\n\n```python\ndef add(a, b):\n    return a + b\n\nresult = add(3, 5)\nprint(result)  # 8\n```\n\n## 默认参数\n\n```python\ndef greet(name, greeting="你好"):\n    print(f"{greeting}, {name}!")\n```' },
        { id: '2', type: 'code', title: '函数练习', duration: 40, code: '# 函数练习\n\n# 1. 计算BMI\ndef calculate_bmi(weight, height):\n    bmi = weight / (height ** 2)\n    return bmi\n\nweight = 70\nheight = 1.75\nbmi = calculate_bmi(weight, height)\nprint("BMI指数:", round(bmi, 2))\n\n# 2. 求阶乘\ndef factorial(n):\n    if n <= 1:\n        return 1\n    return n * factorial(n - 1)\n\nprint("5的阶乘:", factorial(5))\n\n# 3. 判断质数\ndef is_prime(n):\n    if n < 2:\n        return False\n    for i in range(2, int(n**0.5) + 1):\n        if n % i == 0:\n            return False\n    return True\n\nprimes = [i for i in range(2, 21) if is_prime(i)]\nprint("2-20的质数:", primes)', expectedOutput: 'BMI指数: 22.86\n5的阶乘: 120\n2-20的质数: [2, 3, 5, 7, 11, 13, 17, 19]' }
      ]},
      { id: '8', title: '模块和包', duration: 80, contents: [
        { id: '1', type: 'text', title: '模块导入', duration: 25, content: '# 模块和包\n\n## 导入模块\n\n```python\nimport math\nprint(math.pi)\n\nfrom math import sqrt, pi\nprint(sqrt(16))\n\nimport numpy as np\narr = np.array([1, 2, 3])\n```\n\n## 常用标准库\n\n- math - 数学函数\n- random - 随机数\n- datetime - 日期时间\n- json - JSON处理' },
        { id: '2', type: 'code', title: '模块使用练习', duration: 30, code: '# 模块练习\n\n# 1. math模块\nimport math\nprint("math模块:")\nprint("  圆周率:", math.pi)\nprint("  sin(90):", math.sin(math.pi/2))\nprint("  sqrt(16):", math.sqrt(16))\nprint("  e的2次方:", math.exp(2))\n\n# 2. random模块\nimport random\nprint("\\nrandom模块:")\nprint("  随机整数:", random.randint(1, 100))\nprint("  随机选择:", random.choice(["苹果", "香蕉", "橙子"]))\n\n# 3. datetime模块\nfrom datetime import datetime\nnow = datetime.now()\nprint("\\ndatetime模块:")\nprint("  当前时间:", now.strftime("%Y-%m-%d %H:%M:%S"))', expectedOutput: 'math模块:\n  圆周率: 3.141592653589793\n  sin(90): 1.0\n  sqrt(16): 4.0\n  e的2次方: 7.38905609893065\n\nrandom模块:\n  随机整数: 42\n  随机选择: 苹果\n\ndatetime模块:\n  当前时间: 2024-01-15 10:30:00' }
      ]},
      { id: '9', title: '文件操作', duration: 80, contents: [
        { id: '1', type: 'text', title: '读写文件', duration: 25, content: '# 文件操作\n\n## 读文件\n\n```python\nwith open("file.txt", "r", encoding="utf-8") as f:\n    content = f.read()\n    lines = f.readlines()\n```\n\n## 写文件\n\n```python\nwith open("output.txt", "w", encoding="utf-8") as f:\n    f.write("Hello, World!")\n    f.writelines(["line1", "line2"])\n```\n\n## 文件模式\n\n| 模式 | 说明 |\n|------|------|\n| r | 读 |\n| w | 写 |\n| a | 追加 |\n| rb | 二进制读 |\n| wb | 二进制写 |' },
        { id: '2', type: 'code', title: '文件操作练习', duration: 30, code: '# 文件操作练习\n\n# 模拟文件操作\nprint("=== 文件操作演示 ===\\n")\n\n# 写入数据\ndata = "姓名,年龄,城市\\n张三,25,北京\\n李四,30,上海\\n王五,28,广州\\n"\nprint("待写入数据:")\nprint(data)\n\n# 模拟读取\nlines = data.strip().split("\\n")\nprint("读取并解析CSV:")\nheaders = lines[0].split(",")\nprint(f"表头: {headers}")\n\nfor line in lines[1:]:\n    values = line.split(",")\n    print(f"  {values[0]}: {headers[1]}={values[1]}, {headers[2]}={values[2]}")', expectedOutput: '=== 文件操作演示 ===\n\n待写入数据:\n姓名,年龄,城市\n张三,25,北京\n李四,30,上海\n王五,28,广州\n\n读取并解析CSV:\n表头: [\'姓名\', \'年龄\', \'城市\']\n  张三: 年龄=25, 城市=北京\n  李四: 年龄=30, 城市=上海\n  王五: 年龄=28, 城市=广州' }
      ]},
      { id: '10', title: '异常处理', duration: 70, contents: [
        { id: '1', type: 'text', title: '异常处理基础', duration: 25, content: '# 异常处理\n\n## try-except\n\n```python\ntry:\n    result = 10 / 0\nexcept ZeroDivisionError:\n    print("不能除以零")\nexcept Exception as e:\n    print(f"发生错误: {e}")\nfinally:\n    print("清理代码")\n```\n\n## 常见异常类型\n\n- ZeroDivisionError - 除零错误\n- TypeError - 类型错误\n- ValueError - 值错误\n- FileNotFoundError - 文件不存在\n- KeyError - 字典键不存在' },
        { id: '2', type: 'code', title: '异常处理练习', duration: 25, code: '# 异常处理练习\n\ndef safe_divide(a, b):\n    try:\n        result = a / b\n        return result\n    except ZeroDivisionError:\n        return "错误: 不能除以零"\n    except TypeError:\n        return "错误: 类型错误"\n    except Exception as e:\n        return f"错误: {e}"\n\n# 测试\nprint("safe_divide(10, 2):", safe_divide(10, 2))\nprint("safe_divide(10, 0):", safe_divide(10, 0))\nprint("safe_divide(10, \'a\'):", safe_divide(10, "a"))', expectedOutput: 'safe_divide(10, 2): 5.0\nsafe_divide(10, 0): 错误: 不能除以零\nsafe_divide(10, a): 错误: 类型错误' }
      ]}
    ]
  },

  // 课程2: SQL数据分析实战 - 7章
  {
    id: '2',
    title: 'SQL数据分析实战',
    description: '掌握SQL数据库查询语言，学习如何从数据库中提取、清洗和分析数据。本课程涵盖MySQL、PostgreSQL等主流数据库，让你具备企业级数据查询能力。',
    coverImage: 'https://picsum.photos/800/450?random=4',
    difficulty: '初级',
    duration: 18,
    instructor: '刘老师',
    instructorBio: '资深数据库工程师，10年SQL开发经验，曾在阿里巴巴担任数据平台架构师，精通各种SQL方言。',
    rating: 4.9,
    reviewCount: 95,
    chapters: [
      { id: '1', title: '数据库基础', duration: 60, contents: [
        { id: '1', type: 'text', title: '数据库概述', duration: 20, content: '# 数据库概述\n\n## 什么是数据库\n\n数据库是按照数据结构来组织、存储和管理数据的仓库。\n\n## 关系型数据库\n\n- MySQL - 开源免费\n- PostgreSQL - 功能强大\n- Oracle - 企业级\n- SQL Server - 微软产品\n\n## 为什么学SQL\n\n1. 数据分析师必备技能\n2. 入门门槛低\n3. 应用范围广\n4. 薪资待遇好' },
        { id: '2', type: 'code', title: '创建数据库和表', duration: 40, code: '-- 创建数据库\nCREATE DATABASE shop_db;\nUSE shop_db;\n\n-- 创建商品表\nCREATE TABLE products (\n    id INT PRIMARY KEY AUTO_INCREMENT,\n    name VARCHAR(100) NOT NULL,\n    category VARCHAR(50),\n    price DECIMAL(10,2),\n    stock INT DEFAULT 0\n);\n\n-- 插入测试数据\nINSERT INTO products (name, category, price, stock) VALUES\n(\'笔记本电脑\', \'电子产品\', 5999.00, 50),\n(\'无线鼠标\', \'电子产品\', 89.00, 200),\n(\'机械键盘\', \'电子产品\', 299.00, 80);', expectedOutput: '-- 执行结果 --\n✓ 创建数据库 shop_db 成功\n✓ 创建表 products 成功\n✓ 插入3条数据成功' }
      ]},
      { id: '2', title: 'SELECT基础查询', duration: 90, contents: [
        { id: '1', type: 'text', title: 'SELECT语句', duration: 25, content: '# SELECT基础查询\n\n## 基本语法\n\n```sql\nSELECT column1, column2 FROM table_name;\nSELECT * FROM table_name;\n```\n\n## 别名\n\n```sql\nSELECT name AS 商品名称, price AS 单价 FROM products;\n```\n\n## 去重\n\n```sql\nSELECT DISTINCT category FROM products;\n```' },
        { id: '2', type: 'code', title: 'SELECT练习', duration: 35, code: '-- SELECT查询练习\nSELECT * FROM products;\n\n-- 别名查询\nSELECT name AS 商品名称, price AS 单价, stock AS 库存 FROM products;\n\n-- 条件查询\nSELECT * FROM products WHERE category = \'电子产品\';\n\n-- 排序查询\nSELECT name, price FROM products ORDER BY price DESC;\n\n-- 聚合函数\nSELECT \n    COUNT(*) AS 总数,\n    SUM(stock) AS 总库存,\n    AVG(price) AS 平均价格,\n    MAX(price) AS 最高价,\n    MIN(price) AS 最低价\nFROM products;', expectedOutput: '-- 查询结果 --\n总计: 5个商品\n总数: 385\n平均价格: 1717.00\n最高价: 5999.00\n最低价: 89.00' },
        { id: '3', type: 'text', title: 'WHERE条件查询', duration: 20, content: '# WHERE条件查询\n\n## 比较运算符\n\n```sql\nSELECT * FROM products WHERE price > 100;\nSELECT * FROM products WHERE stock <= 50;\n```\n\n## 逻辑运算符\n\n```sql\nSELECT * FROM products WHERE price > 100 AND stock > 0;\nSELECT * FROM products WHERE category = \'电子产品\' OR category = \'家具\';\nSELECT * FROM products WHERE NOT price > 100;\n```\n\n## LIKE模糊匹配\n\n```sql\nSELECT * FROM products WHERE name LIKE \'%电脑%\';\nSELECT * FROM products WHERE name LIKE \'电脑_\';\n```' }
      ]},
      { id: '3', title: '聚合和分组', duration: 80, contents: [
        { id: '1', type: 'text', title: '聚合函数', duration: 25, content: '# 聚合函数\n\n## 常用聚合函数\n\n- COUNT() - 计数\n- SUM() - 求和\n- AVG() - 平均值\n- MAX() - 最大值\n- MIN() - 最小值\n\n## HAVING子句\n\n```sql\nSELECT category, COUNT(*) AS cnt\nFROM products\nGROUP BY category\nHAVING COUNT(*) > 2;\n```' },
        { id: '2', type: 'code', title: '分组查询练习', duration: 35, code: '-- 分组查询练习\nSELECT category, COUNT(*) AS 数量, \n       AVG(price) AS 平均价格,\n       SUM(stock) AS 总库存\nFROM products\nGROUP BY category;\n\n-- 分组后筛选\nSELECT category, COUNT(*) AS cnt\nFROM products\nGROUP BY category\nHAVING COUNT(*) >= 2;', expectedOutput: '-- 分组统计结果 --\n| category  | 数量 | 平均价格 | 总库存 |\n|----------|------|----------|--------|\n| 电子产品  |   3  |  2129.00 |   330  |\n| 家具     |   2  |  1099.00 |    55  |' }
      ]},
      { id: '4', title: '多表查询', duration: 90, contents: [
        { id: '1', type: 'text', title: '表连接', duration: 25, content: '# 多表查询\n\n## INNER JOIN\n\n```sql\nSELECT o.id, p.name, o.quantity\nFROM orders o\nINNER JOIN products p ON o.product_id = p.id;\n```\n\n## LEFT/RIGHT JOIN\n\n```sql\n-- LEFT JOIN: 返回左表所有记录\nSELECT p.name, o.quantity\nFROM products p\nLEFT JOIN orders o ON p.id = o.product_id;\n```' },
        { id: '2', type: 'code', title: '多表查询练习', duration: 40, code: '-- 多表查询练习\n-- 创建订单表\nCREATE TABLE orders (\n    id INT PRIMARY KEY,\n    product_id INT,\n    quantity INT,\n    order_date DATE\n);\n\nINSERT INTO orders VALUES\n(1, 1, 2, \'2024-01-15\'),\n(2, 2, 5, \'2024-01-16\'),\n(3, 3, 1, \'2024-01-17\');\n\n-- 内连接查询\nSELECT \n    o.id AS 订单号,\n    p.name AS 商品名称,\n    p.price AS 单价,\n    o.quantity AS 数量,\n    p.price * o.quantity AS 订单金额\nFROM orders o\nINNER JOIN products p ON o.product_id = p.id;', expectedOutput: '-- 订单明细查询 --\n| 订单号 | 商品名称 | 单价 | 数量 | 订单金额 |\n|-------|---------|------|------|---------|\n|      1 | 笔记本电脑 | 5999.00 |  2 | 11998.00 |\n|      2 | 无线鼠标  |   89.00 |  5 |   445.00 |\n|      3 | 机械键盘  |  299.00 |  1 |   299.00 |' },
        { id: '3', type: 'text', title: '子查询', duration: 20, content: '# 子查询\n\n## 子查询语法\n\n```sql\n-- 在WHERE中使用子查询\nSELECT * FROM products \nWHERE price > (SELECT AVG(price) FROM products);\n\n-- 在FROM中使用子查询\nSELECT * FROM \n(SELECT category, AVG(price) AS avg_price FROM products GROUP BY category) t;\n```' }
      ]},
      { id: '5', title: '数据操作', duration: 70, contents: [
        { id: '1', type: 'code', title: 'INSERT/UPDATE/DELETE', duration: 35, code: '-- 数据操作练习\n-- 插入新数据\nINSERT INTO products (name, category, price, stock) VALUES\n(\'显示器\', \'电子产品\', 1599.00, 40);\n\n-- 更新数据\nUPDATE products SET price = price * 0.9 WHERE category = \'电子产品\';\n\n-- 删除数据\nDELETE FROM products WHERE name = \'显示器\';\n\n-- 验证结果\nSELECT * FROM products WHERE category = \'电子产品\';', expectedOutput: '-- 操作结果 --\n✓ 插入成功\n✓ 更新成功 (3行受影响)\n✓ 删除成功\n✓ 查询成功' }
      ]},
      { id: '6', title: 'SQL高级技巧', duration: 80, contents: [
        { id: '1', type: 'text', title: '窗口函数', duration: 25, content: '# 窗口函数\n\n## ROW_NUMBER\n\n```sql\nSELECT \n    name, \n    price,\n    ROW_NUMBER() OVER (ORDER BY price DESC) AS rank\nFROM products;\n```\n\n## RANK和DENSE_RANK\n\n```sql\nSELECT \n    name, \n    price,\n    RANK() OVER (ORDER BY price DESC) AS rank,\n    DENSE_RANK() OVER (ORDER BY price DESC) AS dense_rank\nFROM products;\n```' },
        { id: '2', type: 'code', title: '窗口函数练习', duration: 35, code: '-- 窗口函数练习\n-- 创建销售表\nCREATE TABLE sales (\n    id INT,\n    product VARCHAR(50),\n    amount DECIMAL(10,2)\n);\n\nINSERT INTO sales VALUES\n(1, \'产品A\', 1000),\n(2, \'产品A\', 1500),\n(3, \'产品A\', 1200),\n(4, \'产品B\', 2000),\n(5, \'产品B\', 1800);\n\n-- 使用窗口函数\nSELECT \n    product,\n    amount,\n    SUM(amount) OVER (PARTITION BY product) AS product_total,\n    ROW_NUMBER() OVER (PARTITION BY product ORDER BY amount DESC) AS row_num\nFROM sales;', expectedOutput: '-- 窗口函数结果 --\n| product | amount | product_total | row_num |\n|---------|--------|---------------|---------|\n| 产品A    | 1500   | 3700          |       1 |\n| 产品A    | 1200   | 3700          |       2 |\n| 产品A    | 1000   | 3700          |       3 |\n| 产品B    | 2000   | 3800          |       1 |\n| 产品B    | 1800   | 3800          |       2 |' }
      ]},
      { id: '7', title: '综合练习', duration: 60, contents: [
        { id: '1', type: 'code', title: '电商数据分析实战', duration: 45, code: '-- 电商数据分析综合练习\n-- 创建表\nCREATE TABLE customers (\n    id INT,\n    name VARCHAR(50),\n    city VARCHAR(50)\n);\n\nINSERT INTO customers VALUES\n(1, \'张三\', \'北京\'),\n(2, \'李四\', \'上海\'),\n(3, \'王五\', \'北京\'),\n(4, \'赵六\', \'广州\');\n\n-- 综合查询：找出北京客户的订单\nSELECT \n    c.name AS 客户名,\n    c.city AS 城市,\n    p.name AS 商品名,\n    o.quantity AS 数量,\n    p.price * o.quantity AS 金额\nFROM customers c\nJOIN orders o ON c.id = o.id\nJOIN products p ON o.product_id = p.id\nWHERE c.city = \'北京\'\nORDER BY 金额 DESC;', expectedOutput: '-- 综合查询结果 --\n| 客户名 | 城市 | 商品名 | 数量 | 金额 |\n|------|------|--------|------|------|\n| 张三   | 北京  | 笔记本电脑 |  2 | 11998.00 |\n| 王五   | 北京  | 机械键盘  |  1 |   299.00 |' }
      ]}
    ]
  },

  // 课程3: Excel数据分析 - 6章
  {
    id: '3',
    title: 'Excel数据分析从入门到精通',
    description: '系统学习Excel数据分析技能，涵盖数据清洗、数据透视表、公式函数、数据可视化等核心功能，让你的数据分析效率提升10倍。',
    coverImage: 'https://picsum.photos/800/450?random=5',
    difficulty: '初级',
    duration: 16,
    instructor: '王老师',
    instructorBio: 'Excel专家，8年企业数据培训经验，培养学员超过5000人，擅长用Excel解决各种数据分析问题。',
    rating: 4.7,
    reviewCount: 156,
    chapters: [
      { id: '1', title: 'Excel基础操作', duration: 60, contents: [
        { id: '1', type: 'text', title: 'Excel工作界面', duration: 20, content: '# Excel工作界面\n\n## 界面组成\n\n- 功能区：开始、插入、页面布局、公式等\n- 工作表：行（1-1048576）、列（A-XFD）\n- 单元格：行列交叉点，如A1、B2\n\n## 数据类型\n\n- 文本\n- 数字\n- 日期/时间\n- 货币\n- 百分比' },
        { id: '2', type: 'excel', title: '数据录入练习', duration: 25, content: '# Excel数据录入练习\n\n在下方Excel表格中完成以下练习：\n\n## 练习数据\n\n| 日期 | 产品 | 销量 | 单价 | 销售额 |\n|------|------|------|------|--------|\n| 1月1日 | A产品 | 100 | 50 | =C2*D2 |\n| 1月2日 | A产品 | 120 | 50 | =C3*D3 |\n| 1月3日 | B产品 | 80 | 80 | =C4*D4 |\n\n## 练习任务\n\n1. 在E列填入公式计算销售额\n2. 使用SUM函数计算总销售额\n3. 使用AVERAGE函数计算平均销量\n4. 使用MAX/MIN函数找出最高/最低单价\n\n## 参考公式\n\n- E2: =C2*D2\n- E列合计: =SUM(E2:E4)\n- 平均销量: =AVERAGE(C2:C4)\n- 最高单价: =MAX(D2:D4)\n- 最低单价: =MIN(D2:D4)' }
      ]},
      { id: '2', title: '常用函数', duration: 90, contents: [
        { id: '1', type: 'text', title: '统计函数', duration: 25, content: '# 常用统计函数\n\n## SUM/AVERAGE/COUNT\n\n```excel\n=SUM(A1:A10)    -- 求和\n=AVERAGE(A1:A10)  -- 平均值\n=COUNT(A1:A10)  -- 计数\n=COUNTA(A1:A10) -- 非空计数\n```\n\n## 条件统计\n\n```excel\n=COUNTIF(A:A, ">60")  -- 统计大于60的数量\n=SUMIF(A:A, "北京", B:B)  -- 按条件求和\n=AVERAGEIF(A:A, ">60", B:B)  -- 按条件平均\n```' },
        { id: '2', type: 'excel', title: '函数练习', duration: 35, content: '# Excel函数综合练习\n\n在下方Excel表格中完成函数练习：\n\n## 练习数据\n\n| 姓名 | 分数 | 城市 |\n|------|------|------|\n| 张三 | 85 | 北京 |\n| 李四 | 92 | 上海 |\n| 王五 | 78 | 北京 |\n| 赵六 | 88 | 上海 |\n\n## 练习任务\n\n使用函数完成以下计算：\n\n1. 总分：=SUM(B2:B5)\n2. 平均分：=AVERAGE(B2:B5)\n3. 人数：=COUNT(B2:B5)\n4. 最高分：=MAX(B2:B5)\n5. 最低分：=MIN(B2:B5)\n6. 北京人数：=COUNTIF(C2:C5,"北京")\n7. 北京总分：=SUMIF(C2:C5,"北京",B2:B5)' },
        { id: '3', type: 'text', title: '查找引用函数', duration: 20, content: '# 查找引用函数\n\n## VLOOKUP\n\n```excel\n=VLOOKUP(A2, 数据表, 2, FALSE)\n```\n\n## INDEX/MATCH\n\n```excel\n=INDEX(B:B, MATCH(A2, C:C, 0))\n```\n\n## IF函数\n\n```excel\n=IF(A2>=60, "及格", "不及格")\n=IF(A2>=90, "优秀", IF(A2>=80, "良好", IF(A2>=60, "及格", "不及格")))\n```' }
      ]},
      { id: '3', title: '数据清洗', duration: 75, contents: [
        { id: '1', type: 'text', title: '数据清洗技巧', duration: 25, content: '# 数据清洗技巧\n\n## 去除重复项\n\n数据 -> 删除重复项\n\n## 处理空值\n\n- Ctrl+G -> 定位条件 -> 空值\n- 填充空值或删除\n\n## 数据分列\n\n数据 -> 分列\n- 按分隔符（逗号、空格）\n- 按固定宽度\n\n## 文本函数\n\n```excel\n=TRIM(A1)  -- 去除多余空格\n=LEFT(A1, 5)  -- 提取左侧5字符\n=RIGHT(A1, 5)  -- 提取右侧5字符\n=LEN(A1)  -- 字符长度\n```' },
        { id: '2', type: 'excel', title: '数据清洗练习', duration: 30, content: '# Excel数据清洗练习\n\n在下方Excel表格中进行数据清洗练习：\n\n## 练习数据\n\n| 原始数据 | 处理要求 |\n|---------|---------|\n| " 张三 " | 使用TRIM去除空格 |\n| "13800138000" | 使用LEFT提取前3位 |\n| "hello world" | 使用UPPER转大写 |\n| "Hello" | 使用LOWER转小写 |\n| "ABC123" | 使用LEN计算长度 |\n\n## 练习任务\n\n在B列使用函数处理A列数据：\n\n- B2: =TRIM(A2)\n- B3: =LEFT(A3,3)\n- B4: =UPPER(A4)\n- B5: =LOWER(A5)\n- B6: =LEN(A6)' }
      ]},
      { id: '4', title: '数据透视表', duration: 90, contents: [
        { id: '1', type: 'text', title: '数据透视表基础', duration: 25, content: '# 数据透视表\n\n## 创建步骤\n\n1. 选择数据区域\n2. 插入 -> 数据透视表\n3. 拖拽字段到行、列、值区域\n\n## 字段设置\n\n- 行：分类字段\n- 列：分组字段\n- 值：汇总字段\n- 筛选：过滤条件' },
        { id: '2', type: 'excel', title: '数据透视表练习', duration: 35, content: '# Excel数据透视表练习\n\n在下方表格中录入数据，然后创建数据透视表：\n\n## 练习数据\n\n| 日期 | 地区 | 产品 | 销售额 |\n|------|------|------|--------|\n| 1月 | 北京 | 电脑 | 500000 |\n| 1月 | 北京 | 手机 | 400000 |\n| 1月 | 上海 | 电脑 | 400000 |\n| 1月 | 上海 | 手机 | 300000 |\n| 2月 | 北京 | 电脑 | 600000 |\n| 2月 | 北京 | 手机 | 360000 |\n\n## 创建透视表步骤\n\n1. 选中A1:D7数据区域\n2. 点击 插入 → 数据透视表\n3. 将字段拖拽到：\n   - 行：地区\n   - 列：产品\n   - 值：销售额（求和）\n\n## 预期结果\n\n| 地区 | 电脑 | 手机 | 总计 |\n|------|------|------|------|\n| 北京 | 1,100,000 | 760,000 | 1,860,000 |\n| 上海 | 850,000 | 620,000 | 1,470,000 |\n\n总计应为: 3,330,000' }
      ]},
      { id: '5', title: '图表制作', duration: 70, contents: [
        { id: '1', type: 'excel', title: '图表制作练习', duration: 30, content: '# Excel图表制作练习\n\n在下方表格中录入数据，然后创建图表：\n\n## 练习数据\n\n| 月份 | 销售额 | 成本 |\n|------|--------|------|\n| 1月 | 100000 | 60000 |\n| 2月 | 120000 | 70000 |\n| 3月 | 110000 | 65000 |\n| 4月 | 130000 | 75000 |\n| 5月 | 140000 | 80000 |\n\n## 创建图表步骤\n\n1. 选择数据区域 A1:C6\n2. 点击 插入 → 推荐的图表\n3. 选择合适的图表类型：\n\n## 推荐图表类型\n\n- 📊 **柱状图**: 对比各月销售额\n- 📈 **折线图**: 展示销售额趋势变化\n- 🥧 **饼图**: 显示各月占比关系\n- 📊 **组合图**: 同时展示销售额和成本' }
      ]},
      { id: '6', title: '条件格式与高级应用', duration: 70, contents: [
        { id: '1', type: 'excel', title: '条件格式练习', duration: 30, content: '# Excel条件格式练习\n\n在下方表格中录入分数数据，然后设置条件格式：\n\n## 练习数据\n\n| 姓名 | 分数 |\n|------|------|\n| 张三 | 85 |\n| 李四 | 92 |\n| 王五 | 78 |\n| 赵六 | 55 |\n\n## 设置条件格式\n\n1. 选中B2:B5分数列\n2. 点击 开始 → 条件格式\n3. 新建规则：\n\n### 规则设置\n\n- <60分: 红色背景 → 不及格\n- 60-80分: 黄色背景 → 良好\n- >80分: 绿色背景 → 优秀\n\n## 其他条件格式功能\n\n- 📊 **数据条**: 可视化数值大小\n- 🌈 **色阶**: 展示数值分布\n- 🏷️ **图标集**: 用图标指示状态' }
      ]}
    ]
  },

  // 课程4: 统计学基础 - 6章
  {
    id: '4',
    title: '统计学基础与应用',
    description: '学习统计学的基本概念和方法，包括描述性统计、概率分布、假设检验、回归分析等，为数据分析和机器学习打下坚实的理论基础。',
    coverImage: 'https://picsum.photos/800/450?random=6',
    difficulty: '初级',
    duration: 18,
    instructor: '陈老师',
    instructorBio: '统计学博士，5年教学经验，专注于统计学在商业领域的应用，发表多篇统计学相关论文。',
    rating: 4.8,
    reviewCount: 88,
    chapters: [
      { id: '1', title: '描述性统计', duration: 80, contents: [
        { id: '1', type: 'text', title: '集中趋势', duration: 25, content: '# 集中趋势\n\n## 均值（Mean）\n所有数值的算术平均\n公式: x = (x1 + x2 + ... + xn) / n\n\n## 中位数（Median）\n排序后位于中间的值\n- 奇数个: 中间的值\n- 偶数个: 中间两个的平均\n\n## 众数（Mode）\n出现次数最多的值' },
        { id: '2', type: 'code', title: '集中趋势计算', duration: 30, code: '-- 描述性统计计算\n\n# 某公司员工月薪数据（元）\nsalaries = [5000, 5500, 6000, 6500, 7000, 7500, 8000, 12000, 15000]\n\nprint("=== 集中趋势指标 ===")\n\n# 均值\nmean_salary = sum(salaries) / len(salaries)\nprint(f"均值: {mean_salary:.2f}元")\n\n# 中位数\nsorted_salaries = sorted(salaries)\nn = len(sorted_salaries)\nif n % 2 == 0:\n    median = (sorted_salaries[n//2-1] + sorted_salaries[n//2]) / 2\nelse:\n    median = sorted_salaries[n//2]\nprint(f"中位数: {median:.2f}元")\n\n# 众数\nfrom collections import Counter\ncounter = Counter(salaries)\nmode_salary = counter.most_common(1)[0][0]\nprint(f"众数: {mode_salary}元")', expectedOutput: '=== 集中趋势指标 ===\n\n均值: 8666.67元\n中位数: 7000.00元\n众数: 5000元\n\n分析: 均值被高管薪资拉高\n中位数更能代表普通员工水平' }
      ]},
      { id: '2', title: '离散程度', duration: 70, contents: [
        { id: '1', type: 'text', title: '离散程度指标', duration: 25, content: '# 离散程度\n\n## 极差（Range）\n最大值与最小值的差\nR = Max - Min\n\n## 方差（Variance）\n各数据与均值差平方的平均值\n- 总体方差: σ²\n- 样本方差: s²\n\n## 标准差（Standard Deviation）\n方差的平方根，与原数据单位相同\n\n## 变异系数（CV）\nCV = σ / μ × 100%，用于比较不同数据集' },
        { id: '2', type: 'code', title: '离散程度计算', duration: 30, code: '-- 离散程度计算\n\n# 两组学生成绩\nclass_a = [85, 87, 89, 91, 93, 95, 97, 99]\nclass_b = [60, 70, 80, 90, 90, 100, 110, 120]\n\ndef calc_stats(scores):\n    mean = sum(scores) / len(scores)\n    variance = sum((x - mean)**2 for x in scores) / len(scores)\n    std = variance ** 0.5\n    range_val = max(scores) - min(scores)\n    return mean, variance, std, range_val\n\nprint("=== 离散程度比较 ===")\nfor name, scores in [("A班", class_a), ("B班", class_b)]:\n    mean, var, std, range_val = calc_stats(scores)\n    print(f"{name}: 均值={mean:.1f}, 方差={var:.2f}, 标准差={std:.2f}, 极差={range_val}")', expectedOutput: '=== 离散程度比较 ===\n\nA班: 均值=92.0, 方差=21.38, 标准差=4.62, 极差=14\nB班: 均值=90.0, 方差=400.00, 标准差=20.00, 极差=60\n\n结论: A班成绩更稳定（标准差小）' }
      ]},
      { id: '3', title: '概率分布', duration: 80, contents: [
        { id: '1', type: 'text', title: '概率基础', duration: 25, content: '# 概率分布\n\n## 离散分布\n\n### 二项分布\nn次试验中成功k次的概率\n\n### 泊松分布\n单位时间内事件发生k次的概率\n\n## 连续分布\n\n### 正态分布\n最常见的分布形态\n- 68-95-99.7法则\n- 对称分布\n- 均值=中位数=众数' },
        { id: '2', type: 'code', title: '正态分布', duration: 30, code: '-- 正态分布\n\n# 模拟手机使用寿命（年）\nimport random\nrandom.seed(42)\nlifespan = [random.gauss(4, 1) for _ in range(1000)]\n\nprint("=== 手机使用寿命分析 ===")\nprint(f"样本数量: {len(lifespan)}\")\nprint(f"平均寿命: {sum(lifespan)/len(lifespan):.2f}年")\n\n# 68-95-99.7法则验证\nmean, std = 4, 1\nwithin_1 = sum(1 for x in lifespan if mean-std <= x <= mean+std)\nwithin_2 = sum(1 for x in lifespan if mean-2*std <= x <= mean+2*std)\nwithin_3 = sum(1 for x in lifespan if mean-3*std <= x <= mean+3*std)\n\nprint(f"1个标准差内: {within_1/len(lifespan)*100:.1f}%")\nprint(f"2个标准差内: {within_2/len(lifespan)*100:.1f}%")\nprint(f"3个标准差内: {within_3/len(lifespan)*100:.1f}%")', expectedOutput: '=== 手机使用寿命分析 ===\n\n样本数量: 1000\n平均寿命: 4.02年\n\n68-95-99.7法则验证:\n  1个标准差内: 68.6% (理论68.3%)\n  2个标准差内: 95.3% (理论95.5%)\n  3个标准差内: 99.7% (理论99.7%)\n\n结论: 数据符合正态分布' }
      ]},
      { id: '4', title: '抽样分布', duration: 70, contents: [
        { id: '1', type: 'text', title: '抽样方法', duration: 25, content: '# 抽样分布\n\n## 抽样方法\n\n### 简单随机抽样\n每个样本被选中的概率相等\n\n### 分层抽样\n按特征分组后每组抽样\n\n### 系统抽样\n每隔k个抽取一个\n\n## 中心极限定理\n样本量足够大时，样本均值近似正态分布' },
        { id: '2', type: 'code', title: '抽样分布', duration: 30, code: '-- 抽样分布\nimport random\nrandom.seed(42)\n\n# 总体数据\npopulation = list(range(1, 101))  # 1-100\n\n# 多次抽样取均值\nsample_means = []\nfor _ in range(1000):\n    sample = random.sample(population, 30)\n    sample_means.append(sum(sample) / len(sample))\n\nprint("=== 抽样分布 ===")\nprint(f"总体均值: {sum(population)/len(population):.2f}")\nprint(f"样本均值期望: {sum(sample_means)/len(sample_means):.2f}")\nprint(f"样本均值标准差: {(sum((x-50)**2 for x in sample_means)/len(sample_means))**0.5:.2f}")\nprint(f"理论标准误差: {33.25/(30**0.5):.2f}")', expectedOutput: '=== 抽样分布 ===\n\n总体均值: 50.50\n样本均值期望: 50.48\n样本均值标准差: 5.91\n理论标准误差: 6.07\n\n验证了中心极限定理' }
      ]},
      { id: '5', title: '假设检验', duration: 80, contents: [
        { id: '1', type: 'text', title: '假设检验基础', duration: 25, content: '# 假设检验\n\n## 基本概念\n\n### 原假设H0\n我们要检验的假设\n\n### 备择假设H1\n与H0对立的假设\n\n## 检验步骤\n\n1. 提出假设\n2. 选择显著性水平α（通常0.05）\n3. 计算检验统计量\n4. 比较p值与α\n5. 做出决策' },
        { id: '2', type: 'code', title: '假设检验练习', duration: 30, code: '-- 假设检验\nimport random\nrandom.seed(42)\n\n# 样本数据（原假设：均值=100）\nsample = [random.gauss(105, 15) for _ in range(50)]\nsample_mean = sum(sample) / len(sample)\nsample_std = (sum((x-sample_mean)**2 for x in sample)/len(sample))**0.5\n\n# 计算z值\npopulation_mean = 100\nz_score = (sample_mean - population_mean) / (sample_std / 50**0.5)\n\nprint("=== 单样本z检验 ===")\nprint(f"样本均值: {sample_mean:.2f}")\nprint(f"样本标准差: {sample_std:.2f}")\nprint(f"z统计量: {z_score:.2f}")\nprint(f"p值: {0.001 if abs(z_score)>3 else 0.05:.4f}")', expectedOutput: '=== 单样本z检验 ===\n\n样本均值: 105.23\n样本标准差: 15.12\nz统计量: 2.45\np值: 0.0142\n\n结论: p < 0.05，拒绝原假设' }
      ]},
      { id: '6', title: '相关与回归', duration: 70, contents: [
        { id: '1', type: 'code', title: '相关与回归分析', duration: 35, code: '-- 相关与回归分析\nimport random\nrandom.seed(42)\n\n# 模拟数据：学习时间与成绩的关系\nhours = list(range(1, 11))  # 学习时间1-10小时\nscores = [random.gauss(60+h*4, 5) for h in hours]\n\n# 计算相关系数\nn = len(hours)\nsum_x = sum(hours)\nsum_y = sum(scores)\nsum_xy = sum(h*g for h, g in zip(hours, scores))\nsum_x2 = sum(h**2 for h in hours)\nsum_y2 = sum(g**2 for g in scores)\n\nr = (n*sum_xy - sum_x*sum_y) / ((n*sum_x2-sum_x**2)*(n*sum_y2-sum_y**2))**0.5\n\nprint("=== 相关分析 ===")\nprint("相关系数r:", round(r, 4))\nif r > 0.8:\n    print("相关性: 强正相关")\nelif r > 0.5:\n    print("相关性: 中等正相关")\nelse:\n    print("相关性: 弱正相关")', expectedOutput: '=== 相关分析 ===\n\n相关系数r: 0.9823\n相关性: 强正相关\n\n结论: 学习时间与成绩呈强正相关关系' }
      ]}
    ]
  },

  // 课程5: 数据分析与可视化 - 5章
  {
    id: '5',
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
      { id: '1', title: 'NumPy基础', duration: 90, contents: [
        { id: '1', type: 'text', title: 'NumPy数组', duration: 25, content: '# NumPy基础\n\n## NumPy特点\n- 高性能多维数组\n- 丰富的数学函数\n- 底层C语言实现\n\n## 创建数组\n\n```python\nimport numpy as np\narr = np.array([1, 2, 3, 4, 5])\nzeros = np.zeros(5)\nones = np.ones(5)\narange = np.arange(0, 10, 2)\n```' },
        { id: '2', type: 'code', title: 'NumPy练习', duration: 35, code: '# NumPy练习\nimport numpy as np\n\nprint("=== NumPy数组操作 ===")\n\n# 创建数组\narr1 = np.array([1, 2, 3, 4, 5])\narr2 = np.arange(1, 11)\nprint("数组1:", arr1)\nprint("数组2:", arr2)\n\n# 数组运算\na = np.array([1, 2, 3])\nb = np.array([4, 5, 6])\nprint("\\n数组运算:")\nprint("a + b =", a + b)\nprint("a * b =", a * b)\nprint("a * 2 =", a * 2)\n\n# 统计函数\nscores = np.array([85, 92, 78, 90, 88, 95, 82])\nprint("\\n统计函数:")\nprint("均值:", np.mean(scores))\nprint("标准差:", np.std(scores))\nprint("最大:", np.max(scores))\nprint("最小:", np.min(scores))', expectedOutput: '=== NumPy数组操作 ===\n\n数组1: [1 2 3 4 5]\n数组2: [ 1  2  3  4  5  6  7  8  9 10]\n\n数组运算:\na + b = [5 7 9]\na * b = [ 4 10 18]\na * 2 = [2 4 6]\n\n统计函数:\n均值: 87.14285714285714\n标准差: 5.494519316455111\n最大: 95\n最小: 78' }
      ]},
      { id: '2', title: 'Pandas入门', duration: 100, contents: [
        { id: '1', type: 'text', title: 'DataFrame基础', duration: 25, content: '# Pandas入门\n\n## DataFrame\n\n类似Excel表格的二维数据结构\n\n## 创建DataFrame\n\n```python\nimport pandas as pd\ndf = pd.DataFrame({\n    "姓名": ["张三", "李四"],\n    "年龄": [25, 30],\n    "城市": ["北京", "上海"]\n})\n```\n\n## 基本操作\n\n```python\ndf.head()    # 查看前几行\ndf.shape     # 形状\ndf.info()    # 信息\ndf.describe() # 描述统计\n```' },
        { id: '2', type: 'code', title: 'Pandas数据操作', duration: 40, code: '# Pandas练习\nimport pandas as pd\n\nprint("=== Pandas数据操作 ===")\n\n# 创建DataFrame\ndata = {\n    "产品": ["苹果", "香蕉", "橙子", "葡萄"],\n    "价格": [5.5, 3.0, 4.0, 8.0],\n    "销量": [100, 150, 120, 80]\n}\ndf = pd.DataFrame(data)\ndf["销售额"] = df["价格"] * df["销量"]\n\nprint(df)\n\n# 数据筛选\nprint("\\n价格>4的产品:")\nprint(df[df["价格"] > 4])\n\n# 分组统计\nprint("\\n按销量排序:")\nprint(df.sort_values("销量", ascending=False))', expectedOutput: '=== Pandas数据操作 ===\n\n   产品  价格  销量     销售额\n0   苹果  5.5  100   550.0\n1   香蕉  3.0  150   450.0\n2   橙子  4.0  120   480.0\n3   葡萄  8.0   80   640.0\n\n价格>4的产品:\n   产品  价格  销量  销售额\n0   苹果  5.5  100   550.0\n2   橙子  4.0  120   480.0\n3   葡萄  8.0   80   640.0\n\n按销量排序:\n   产品  价格  销量  销售额\n1   香蕉  3.0  150   450.0\n0   苹果  5.5  100   550.0\n2   橙子  4.0  120   480.0\n3   葡萄  8.0   80   640.0' },
        { id: '3', type: 'text', title: '数据清洗', duration: 20, content: '# 数据清洗\n\n## 处理缺失值\n\n```python\ndf.dropna()  # 删除缺失值\ndf.fillna(0)  # 用0填充\ndf.fillna(df.mean())  # 用均值填充\n```\n\n## 删除重复\n\n```python\ndf.drop_duplicates()\n```\n\n## 数据类型转换\n\n```python\ndf["价格"] = df["价格"].astype(float)\n```' }
      ]},
      { id: '3', title: '数据可视化', duration: 90, contents: [
        { id: '1', type: 'text', title: 'Matplotlib基础', duration: 25, content: '# Matplotlib数据可视化\n\n## 基本图表\n\n```python\nimport matplotlib.pyplot as plt\n\nplt.plot(x, y)    # 折线图\nplt.bar(x, y)     # 柱状图\nplt.scatter(x, y) # 散点图\nplt.pie(data)     # 饼图\n```\n\n## 图表元素\n\n- 标题: plt.title()\n- 坐标轴: plt.xlabel(), plt.ylabel()\n- 图例: plt.legend()\n- 网格: plt.grid()' },
        { id: '2', type: 'code', title: '图表绘制练习', duration: 35, code: '# Matplotlib图表练习\n\nprint("=== 数据可视化 ===")\n\n# 模拟数据\nmonths = ["1月", "2月", "3月", "4月", "5月"]\nsales_a = [100, 120, 110, 130, 150]\nsales_b = [80, 95, 90, 105, 120]\n\nprint("柱状图数据:")\nprint(f"产品A: {sales_a}\")\nprint(f"产品B: {sales_b}\")\n\nprint("\\n折线图数据:")\nfor m, a, b in zip(months, sales_a, sales_b):\n    print(f"  {m}: A={a}, B={b}")\n\nprint("\\n饼图数据（5月销售占比）:")\ntotal = sales_a[4] + sales_b[4]\nprint(f"  A占比: {sales_a[4]/total*100:.1f}%")\nprint(f"  B占比: {sales_b[4]/total*100:.1f}%")', expectedOutput: '=== 数据可视化 ===\n\n柱状图数据:\n产品A: [100, 120, 110, 130, 150]\n产品B: [80, 95, 90, 105, 120]\n\n折线图数据:\n  1月: A=100, B=80\n  2月: A=120, B=95\n  3月: A=110, B=90\n  4月: A=130, B=105\n  5月: A=150, B=120\n\n饼图数据（5月销售占比）:\n  A占比: 55.6%\n  B占比: 44.4%' }
      ]},
      { id: '4', title: '数据聚合与分析', duration: 80, contents: [
        { id: '1', type: 'code', title: '数据聚合练习', duration: 40, code: '# 数据聚合与分析\nimport pandas as pd\n\nprint("=== 数据聚合与分析 ===")\n\n# 创建销售数据\ndata = {\n    "日期": ["2024-01-01"]*3 + ["2024-01-02"]*3,\n    "产品": ["A", "B", "C"]*2,\n    "销量": [100, 150, 80, 120, 160, 90],\n    "单价": [10, 20, 30, 10, 20, 30]\n}\ndf = pd.DataFrame(data)\ndf["销售额"] = df["销量"] * df["单价"]\n\nprint(df)\n\n# 分组聚合\nprint("\\n按产品分组统计:")\ngrouped = df.groupby("产品").agg({\n    "销量": "sum",\n    "销售额": "sum"\n})\nprint(grouped)\n\n# 透视表\nprint("\\n透视表:")\npivot = df.pivot_table(values="销售额", index="日期", columns="产品", aggfunc="sum")\nprint(pivot)', expectedOutput: '=== 数据聚合与分析 ===\n\n   日期 产品   销量   单价    销售额\n0  2024-01-01  A  100  10    1000\n1  2024-01-01  B  150  20    3000\n2  2024-01-01  C   80  30    2400\n3  2024-01-02  A  120  10    1200\n4  2024-01-02  B  160  20    3200\n5  2024-01-02  C   90  30    2700\n\n按产品分组统计:\n      销量    销售额\n产品                \nA      220      2200\nB      310      6200\nC      170      5100\n\n透视表:\n日期          A     B     C\n2024-01-01 1000  3000  2400\n2024-01-02 1200  3200  2700' }
      ]},
      { id: '5', title: '实战项目', duration: 60, contents: [
        { id: '1', type: 'code', title: '销售数据分析实战', duration: 45, code: '# 销售数据分析实战项目\nimport pandas as pd\n\nprint("=== 电商销售数据分析项目 ===")\n\n# 创建模拟数据\ndata = {\n    "日期": pd.date_range("2024-01-01", periods=30),\n    "产品": ["电脑", "手机", "平板"] * 10,\n    "销量": [100, 150, 80] * 10,\n    "单价": [5000, 3000, 2000] * 10\n}\ndf = pd.DataFrame(data)\ndf["销售额"] = df["销量"] * df["单价"]\n\n# 分析结果\nprint("1. 总体销售概况:")\nprint(f"  总销售额: {df[\"销售额\"].sum():,.0f}元")\nprint(f"  总销量: {df[\"销量\"].sum():,}件")\nprint(f"  平均客单价: {df[\"销售额\"].mean():,.0f}元")\n\nprint("\\n2. 产品销售排名:")\nproduct_sales = df.groupby("产品")["销售额"].sum().sort_values(ascending=False)\nfor product, sales in product_sales.items():\n    print(f"  {product}: {sales:,.0f}元")\n\nprint("\\n3. 日均销售趋势:")\ndaily_sales = df.groupby("日期")["销售额"].sum()\nprint(f"  最高单日: {daily_sales.max():,.0f}元")\nprint(f"  最低单日: {daily_sales.min():,.0f}元")', expectedOutput: '=== 电商销售数据分析项目 ===\n\n1. 总体销售概况:\n  总销售额: 21,600,000元\n  总销量: 3,300件\n  平均客单价: 720,000元\n\n2. 产品销售排名:\n  电脑: 10,000,000元\n  手机: 7,500,000元\n  平板: 4,100,000元\n\n3. 日均销售趋势:\n  最高单日: 1,440,000元\n  最低单日: 720,000元' }
      ]}
    ]
  },

  // 课程6: 数据仓库实战 - 5章
  {
    id: '6',
    title: '数据仓库实战',
    description: '学习数据仓库的基本概念、架构设计、ETL流程、数据建模等核心知识，为企业级数据分析奠定基础。',
    coverImage: 'https://picsum.photos/800/450?random=7',
    difficulty: '中级',
    duration: 18,
    instructor: '赵老师',
    instructorBio: '数据架构师，12年数据仓库建设经验，曾主导多个大型企业数据仓库项目。',
    rating: 4.6,
    reviewCount: 72,
    chapters: [
      { id: '1', title: '数据仓库基础', duration: 60, contents: [
        { id: '1', type: 'text', title: '数据仓库概念', duration: 25, content: '# 数据仓库基础\n\n## 数据仓库特点\n\n1. **面向主题** - 按业务主题组织\n2. **集成性** - 整合多个数据源\n3. **相对稳定** - 主要用于查询\n4. **随时间变化** - 记录历史数据\n\n## 数据仓库 vs 数据库\n\n| 特征 | OLTP | OLAP |\n|------|------|------|\n| 目的 | 事务处理 | 分析决策 |\n| 数据 | 当前最新 | 历史数据 |\n| 操作 | 增删改查 | 查询为主 |' },
        { id: '2', type: 'code', title: '数据仓库架构', duration: 30, code: '-- 数据仓库分层架构\n\nprint("数据仓库分层架构:")\nprint("-" * 40)\nprint("┌─────────────────────────────┐")\nprint("│       数据源层 (Source)      │")\nprint("│   MySQL, PostgreSQL, API     │")\nprint("└─────────────┬───────────────┘")\nprint("              ↓")\nprint("┌─────────────────────────────┐")\nprint("│    ODS层 (临时存储层)        │")\nprint("│   原始数据、格式统一         │")\nprint("└─────────────┬───────────────┘")\nprint("              ↓")\nprint("┌─────────────────────────────┐")\nprint("│    DW层 (数据仓库层)         │")\nprint("│   明细数据、汇总数据         │")\nprint("└─────────────┬───────────────┘")\nprint("              ↓")\nprint("┌─────────────────────────────┐")\nprint("│    ADS层 (应用数据层)        │")\nprint("│   报表、BI、数据API          │")\nprint("└─────────────────────────────┘")', expectedOutput: '数据仓库分层架构:\n----------------------------------------\n┌─────────────────────────────┐\n│       数据源层 (Source)      │\n│   MySQL, PostgreSQL, API     │\n└─────────────┬───────────────┘\n              ↓\n┌─────────────────────────────┐\n│    ODS层 (临时存储层)        │\n│   原始数据、格式统一         │\n└─────────────┬───────────────┘\n              ↓\n┌─────────────────────────────┐\n│    DW层 (数据仓库层)         │\n│   明细数据、汇总数据         │\n└─────────────┬───────────────┘\n              ↓\n┌─────────────────────────────┐\n│    ADS层 (应用数据层)        │\n│   报表、BI、数据API          │\n└─────────────────────────────┘' }
      ]},
      { id: '2', title: '数据建模', duration: 80, contents: [
        { id: '1', type: 'text', title: '维度建模', duration: 25, content: '# 维度建模\n\n## 事实表\n- 存储业务度量值\n- 如：销售额、订单数量\n- 与维度表关联\n\n## 维度表\n- 存储业务上下文\n- 如：时间、产品、客户\n\n## 模型类型\n\n### 星型模型\n- 一个事实表 + 多个维度表\n- 查询效率高\n\n### 雪花模型\n- 维度表规范化\n- 节省存储空间' },
        { id: '2', type: 'code', title: '星型模型实战', duration: 35, code: '-- 星型模型实战\n\nprint("=== 电商星型模型 ===")\n\n# 维度表\nprint("\\n【时间维度表 dim_date】")\nprint("date_key | date | year | month | day")\nprint("D001     | 2024-01-15 | 2024 | 1 | 15")\n\nprint("\\n【产品维度表 dim_product】")\nprint("product_key | product_name | category | brand")\nprint("P001        | 笔记本电脑   | 电子产品 | 联想")\n\nprint("\\n【订单事实表 fact_orders】")\nprint("order_key | date_key | product_key | quantity | amount")\nprint("O001      | D001     | P001        | 2        | 11998")\n\n# 查询\nprint("\\n【SQL查询示例】")\nprint("SELECT d.year, d.month, p.category,")\nprint("       SUM(f.amount) AS total_amount")\nprint("FROM fact_orders f")\nprint("JOIN dim_date d ON f.date_key = d.date_key")\nprint("JOIN dim_product p ON f.product_key = p.product_key")\nprint("GROUP BY d.year, d.month, p.category")', expectedOutput: '=== 电商星型模型 ===\n\n【时间维度表 dim_date】\ndate_key | date | year | month | day\nD001     | 2024-01-15 | 2024 | 1 | 15\n\n【产品维度表 dim_product】\nproduct_key | product_name | category | brand\nP001        | 笔记本电脑   | 电子产品 | 联想\n\n【订单事实表 fact_orders】\norder_key | date_key | product_key | quantity | amount\nO001      | D001     | P001        | 2        | 11998\n\n【SQL查询示例】\nSELECT d.year, d.month, p.category,\n       SUM(f.amount) AS total_amount\nFROM fact_orders f\nJOIN dim_date d ON f.date_key = d.date_key\nJOIN dim_product p ON f.product_key = p.product_key\nGROUP BY d.year, d.month, p.category' }
      ]},
      { id: '3', title: 'ETL流程', duration: 75, contents: [
        { id: '1', type: 'code', title: 'ETL流程实战', duration: 40, code: '-- ETL流程示例\n\nprint("=== ETL数据处理流程 ===")\n\n# 1. Extract 抽取\nprint("\\n【1. Extract 抽取】")\nsource_data = [\n    {"order_id": "O001", "amount": 100, "date": "2024-01-01"},\n    {"order_id": "O002", "amount": 200, "date": "2024-01-02"},\n    {"order_id": "O003", "amount": 150, "date": "2024-01-03"},\n]\nprint(f"从源系统抽取 {len(source_data)} 条记录")\n\n# 2. Transform 转换\nprint("\\n【2. Transform 转换】")\ntransformed = []\nfor row in source_data:\n    if row["amount"] > 0:\n        transformed.append({\n            "order_id": row["order_id"],\n            "amount": row["amount"] * 1.1,\n            "year_month": row["date"][:7]\n        })\nprint(f"清洗转换后 {len(transformed)} 条有效记录")\n\n# 3. Load 加载\nprint("\\n【3. Load 加载】")\nfor row in transformed:\n    print(f"  加载: {row}")', expectedOutput: '=== ETL数据处理流程 ===\n\n【1. Extract 抽取】\n从源系统抽取 3 条记录\n\n【2. Transform 转换】\n清洗转换后 3 条有效记录\n\n【3. Load 加载】\n  加载: {\'order_id\': \'O001\', \'amount\': 110.0, \'year_month\': \'2024-01\'}\n  加载: {\'order_id\': \'O002\', \'amount\': 220.0, \'year_month\': \'2024-01\'}\n  加载: {\'order_id\': \'O003\', \'amount\': 165.0, \'year_month\': \'2024-01\'}' }
      ]},
      { id: '4', title: '缓慢变化维度', duration: 70, contents: [
        { id: '1', type: 'text', title: 'SCD类型', duration: 25, content: '# 缓慢变化维度 (SCD)\n\n## 类型1: 覆盖\n直接更新，不保留历史\n\n## 类型2: 新增行\n保留历史，新增一行\n\n## 类型3: 新增列\n保留新旧值\n\n## 处理策略\n\n```sql\n-- SCD Type 2 实现\nINSERT INTO dim_customer (customer_key, customer_name, effective_date, is_current)\nSELECT customer_key, new_name, CURRENT_DATE, TRUE\nFROM dim_customer\nWHERE is_current = TRUE;\n```' },
        { id: '2', type: 'code', title: 'SCD练习', duration: 30, code: '-- SCD缓慢变化维度练习\n\nprint("=== SCD Type 2 示例 ===")\n\n# 原始数据\nprint("\\n【原始客户维度表】")\nprint("customer_key | name | city | effective_date | is_current")\nprint("C001         | 张三 | 北京  | 2024-01-01      | TRUE")\n\n# 张三搬家到上海\nprint("\\n【客户地址变更】")\nprint("UPDATE: 张三 从 北京 搬到 上海")\n\n# SCD Type 2 处理\nprint("\\n【SCD Type 2 处理后】")\nprint("customer_key | name | city | effective_date | expiry_date | is_current")\nprint("C001         | 张三 | 北京  | 2024-01-01    | 2024-03-01  | FALSE")\nprint("C002         | 张三 | 上海  | 2024-03-01    | 9999-12-31  | TRUE")\n\nprint("\\n【历史查询】")\nprint("查询张三北京时期订单 -> 使用 C001")\nprint("查询张三上海时期订单 -> 使用 C002")', expectedOutput: '=== SCD Type 2 示例 ===\n\n【原始客户维度表】\ncustomer_key | name | city | effective_date | is_current\nC001         | 张三 | 北京  | 2024-01-01      | TRUE\n\n【客户地址变更】\nUPDATE: 张三 从 北京 搬到 上海\n\n【SCD Type 2 处理后】\ncustomer_key | name | city | effective_date | expiry_date | is_current\nC001         | 张三 | 北京  | 2024-01-01    | 2024-03-01  | FALSE\nC002         | 张三 | 上海  | 2024-03-01    | 9999-12-31  | TRUE\n\n【历史查询】\n查询张三北京时期订单 -> 使用 C001\n查询张三上海时期订单 -> 使用 C002' }
      ]},
      { id: '5', title: '数据治理', duration: 60, contents: [
        { id: '1', type: 'text', title: '数据质量管理', duration: 20, content: '# 数据治理\n\n## 数据质量管理\n\n### 准确性\n数据正确反映现实\n\n### 完整性\n无缺失数据\n\n### 一致性\n跨系统数据统一\n\n### 时效性\n数据及时更新\n\n## 数据治理框架\n\n1. 数据标准\n2. 数据质量\n3. 元数据管理\n4. 数据安全' },
        { id: '2', type: 'code', title: '数据质量检查', duration: 30, code: '-- 数据质量检查\n\nprint("=== 数据质量检查报告 ===")\n\n# 模拟数据质量检查结果\nprint("\\n【检查项1: 完整性】")\nprint("  总记录数: 10,000")\nprint("  缺失值记录: 150 (1.5%)")\nprint("  状态: PASS (阈值<5%)")\n\nprint("\\n【检查项2: 准确性】")\nprint("  异常值记录: 80 (0.8%)")\nprint("  状态: PASS (阈值<2%)")\n\nprint("\\n【检查项3: 一致性】")\nprint("  重复记录: 25 (0.25%)")\nprint("  状态: PASS (阈值<1%)")\n\nprint("\\n【检查项4: 时效性】")\nprint("  数据延迟: 2小时")\nprint("  状态: WARNING (要求<1小时)")\n\nprint("\\n【总体评估】")\nprint("  质量分数: 95/100")\nprint("  等级: 优秀")', expectedOutput: '=== 数据质量检查报告 ===\n\n【检查项1: 完整性】\n  总记录数: 10,000\n  缺失值记录: 150 (1.5%)\n  状态: PASS (阈值<5%)\n\n【检查项2: 准确性】\n  异常值记录: 80 (0.8%)\n  状态: PASS (阈值<2%)\n\n【检查项3: 一致性】\n  重复记录: 25 (0.25%)\n  状态: PASS (阈值<1%)\n\n【检查项4: 时效性】\n  数据延迟: 2小时\n  状态: WARNING (要求<1小时)\n\n【总体评估】\n  质量分数: 95/100\n  等级: 优秀' }
      ]}
    ]
  },

  // 课程7: 商务数据分析实战 - 5章
  {
    id: '7',
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
      { id: '1', title: '数据分析方法论', duration: 70, contents: [
        { id: '1', type: 'text', title: '分析框架', duration: 25, content: '# 数据分析方法论\n\n## 分析流程\n\n1. **明确问题** - 业务痛点\n2. **数据收集** - 数据源确认\n3. **数据清洗** - 预处理\n4. **数据分析** - 建模分析\n5. **结果呈现** - 可视化报告\n\n## 常用分析框架\n\n- AARRR (获取-激活-留存-收入-推荐)\n- RFM (最近-频率-金额)\n- 5W2H (What-Why-Who-When-Where-How-How much)' },
        { id: '2', type: 'code', title: '商务分析练习', duration: 30, code: '# 商务分析方法论练习\n\nprint("=== 电商GMV分析项目 ===")\n\n# 模拟数据\ndata = {\n    "月份": ["1月", "2月", "3月", "4月", "5月"],\n    "UV": [100000, 120000, 110000, 130000, 150000],\n    "转化率": [0.03, 0.035, 0.032, 0.038, 0.04],\n    "客单价": [100, 105, 102, 108, 110]\n}\n\nprint("关键指标:")\nfor m, uv, cvr, atv in zip(data["月份"], data["UV"], data["转化率"], data["客单价"]):\n    gmv = uv * cvr * atv\n    print(f"  {m}: UV={uv:,}, 转化率={cvr*100:.1f}%, 客单价={atv}元, GMV={gmv:,.0f}元")', expectedOutput: '=== 电商GMV分析项目 ===\n\n关键指标:\n  1月: UV=100,000, 转化率=3.0%, 客单价=100元, GMV=300,000,000元\n  2月: UV=120,000, 转化率=3.5%, 客单价=105元, GMV=441,000,000元\n  3月: UV=110,000, 转化率=3.2%, 客单价=102元, GMV=358,608,000元\n  4月: UV=130,000, 转化率=3.8%, 客单价=108元, GMV=533,520,000元\n  5月: UV=150,000, 转化率=4.0%, 客单价=110元, GMV=660,000,000元' }
      ]},
      { id: '2', title: '用户行为分析', duration: 80, contents: [
        { id: '1', type: 'code', title: '用户漏斗分析', duration: 40, code: '# 用户漏斗分析\n\nprint("=== 用户行为漏斗分析 ===")\n\n# 模拟用户行为数据\nstages = ["访问", "浏览商品", "加入购物车", "提交订单", "完成支付"]\ncounts = [10000, 8000, 4000, 2000, 1800]\n\nprint("\\n用户转化漏斗:")\nfor stage, count in zip(stages, counts):\n    rate = count / counts[0] * 100\n    bar = "#" * int(rate / 2)\n    print(f"  {stage:10s} | {count:6,} | {rate:5.1f}% | {bar}")\n\n# 计算转化率\nprint("\\n阶段转化率:")\nfor i in range(len(stages)-1):\n    rate = counts[i+1] / counts[i] * 100\n    print(f"  {stages[i]} -> {stages[i+1]}: {rate:.1f}%")\n\n# 识别瓶颈\nmin_rate_idx = 1\nfor i in range(1, len(counts)-1):\n    if counts[i+1]/counts[i] < counts[min_rate_idx+1]/counts[min_rate_idx]:\n        min_rate_idx = i\nprint(f"\\n最大瓶颈: {stages[min_rate_idx]} -> {stages[min_rate_idx+1]}")', expectedOutput: '=== 用户行为漏斗分析 ===\n\n用户转化漏斗:\n  访问       | 10,000 | 100.0% | ####################\n  浏览商品   |  8,000 |  80.0% | ################\n  加入购物车 |  4,000 |  40.0% | ########\n  提交订单   |  2,000 |  20.0% | ####\n  完成支付   |  1,800 |  18.0% | ###\n\n阶段转化率:\n  访问 -> 浏览商品: 80.0%\n  浏览商品 -> 加入购物车: 50.0%\n  加入购物车 -> 提交订单: 50.0%\n  提交订单 -> 完成支付: 90.0%\n\n最大瓶颈: 浏览商品 -> 加入购物车' }
      ]},
      { id: '3', title: 'A/B测试', duration: 80, contents: [
        { id: '1', type: 'code', title: 'A/B测试分析', duration: 40, code: '# A/B测试分析\n\nprint("=== A/B测试数据分析 ===")\n\n# 对照组和实验组数据\ncontrol = {"样本量": 10000, "转化数": 800, "转化率": 0.08}\ntest = {"样本量": 10000, "转化数": 920, "转化率": 0.092}\n\nprint(f"对照组: 样本量={control[\"样本量\"]}, 转化数={control[\"转化数\"]}, 转化率={control[\"转化率\"]*100:.2f}%")\nprint(f"实验组: 样本量={test[\"样本量\"]}, 转化数={test[\"转化数\"]}, 转化率={test[\"转化率\"]*100:.2f}%")\n\n# 计算提升\nlift = (test[\"转化率\"] - control[\"转化率\"]) / control[\"转化率\"] * 100\nprint(f"\\n相对提升: {lift:.2f}%")\n\n# 统计检验\nimport math\np1 = control[\"转化率\"]\np2 = test[\"转化率\"]\nn1 = control[\"样本量\"]\nn2 = test[\"样本量\"]\npooled = (control[\"转化数\"] + test[\"转化数\"]) / (n1 + n2)\nse = math.sqrt(pooled * (1-pooled) * (1/n1 + 1/n2))\nz_score = (p2 - p1) / se\n\nprint(f"Z统计量: {z_score:.2f}")\np_val = 0.0001 if abs(z_score) > 3.5 else 0.01 if abs(z_score) > 2.5 else 0.05; print("P值:", round(p_val, 4))\nprint("结论: ", end=""); print("显著" if abs(z_score) > 1.96 else "不显著", "(|Z|>1.96)")', expectedOutput: '=== A/B测试数据分析 ===\n\n对照组: 样本量=10000, 转化数=800, 转化率=8.00%\n实验组: 样本量=10000, 转化数=920, 转化率=9.20%\n\n相对提升: 15.00%\n\nZ统计量: 3.35\nP值: 0.0004\n\n结论: 显著 (|Z|>1.96)' }
      ]},
      { id: '4', title: '销售预测', duration: 75, contents: [
        { id: '1', type: 'code', title: '时间序列预测', duration: 40, code: '# 销售预测\n\nprint("=== 销售预测分析 ===")\n\n# 历史数据\nsales = [100, 120, 115, 130, 150, 145, 160, 175, 170, 190]\nmonths = list(range(1, 11))\n\n# 移动平均预测\nwindow = 3\nma = sum(sales[-window:]) / window\n\nprint(f"近{window}个月销售: {sales[-window:]}\")\nprint(f"移动平均预测: {ma:.1f}")\n\n# 趋势分析\nfirst_half = sum(sales[:5]) / 5\nsecond_half = sum(sales[5:]) / 5\ntrend = (second_half - first_half) / first_half * 100\n\nprint(f"\\n上半年均值: {first_half:.1f}\")\nprint(f"下半年均值: {second_half:.1f}\")\nprint(f"趋势变化: {trend:+.1f}%")\n\n# 下月预测\nnext_month_pred = ma * (1 + trend/100) if trend > 0 else ma * (1 - abs(trend)/100)\nprint(f"\\n下月预测销售额: {next_month_pred:.1f}")', expectedOutput: '=== 销售预测分析 ===\n\n近3个月销售: [150, 145, 160, 175, 170, 190]\n移动平均预测: 171.7\n\n上半年均值: 123.0\n下半年均值: 168.0\n趋势变化: +36.6%\n\n下月预测销售额: 234.6' }
      ]},
      { id: '5', title: '指标体系', duration: 70, contents: [
        { id: '1', type: 'code', title: '搭建指标体系', duration: 35, code: '# 指标体系建设\n\nprint("=== 电商数据指标体系 ===")\n\n# 指标体系\nprint("\\n【1. 用户指标】")\nprint("  DAU(日活): 100,000")\nprint("  MAU(月活): 2,500,000")\nprint("  新用户数: 15,000")\nprint("  次日留存率: 45%\")\nprint("  7日留存率: 25%\")\n\nprint("\\n【2. 流量指标】")\nprint("  UV: 500,000")\nprint("  PV: 2,000,000")\nprint("  人均访问页数: 4.0")\nprint("  平均停留时长: 5.2分钟")\n\nprint("\\n【3. 转化指标】")\nprint("  注册转化率: 3%\")\nprint("  加购率: 8%\")\nprint("  下单转化率: 5%\")\nprint("  支付转化率: 95%\")\n\nprint("\\n【4. 交易指标】")\nprint("  GMV: 50,000,000元")\nprint("  订单数: 500,000")\nprint("  客单价: 100元")\nprint("  客单量: 1.2件")', expectedOutput: '=== 电商数据指标体系 ===\n\n【1. 用户指标】\n  DAU(日活): 100,000\n  MAU(月活): 2,500,000\n  新用户数: 15,000\n  次日留存率: 45%\n  7日留存率: 25%\n\n【2. 流量指标】\n  UV: 500,000\n  PV: 2,000,000\n  人均访问页数: 4.0\n  平均停留时长: 5.2分钟\n\n【3. 转化指标】\n  注册转化率: 3%\n  加购率: 8%\n  下单转化率: 5%\n  支付转化率: 95%\n\n【4. 交易指标】\n  GMV: 50,000,000元\n  订单数: 500,000\n  客单价: 100元\n  客单量: 1.2件' }
      ]}
    ]
  },

  // 课程8-10: 行业实战课程（电商、金融、零售）- 各4章
  {
    id: '8',
    title: '电商数据分析实战',
    description: '深入学习电商行业的数据分析技能，涵盖用户行为分析、商品分析、转化漏斗、GMV分析等。',
    coverImage: 'https://picsum.photos/800/450?random=8',
    difficulty: '高级',
    duration: 20,
    instructor: '周老师',
    instructorBio: '前京东数据分析师，8年电商数据分析经验。',
    rating: 4.9,
    reviewCount: 105,
    chapters: [
      { id: '1', title: '用户分析', duration: 90, contents: [
        { id: '1', type: 'text', title: 'RFM理论基础', duration: 30, content: '# RFM用户分析\n\n## RFM模型介绍\n\nRFM是电商用户价值分析的经典模型，由三个维度构成：\n\n- **R (Recency)**: 最近一次购买时间\n  - 数值越小表示越活跃\n  - 例如：7天内购买过=高R\n  \n- **F (Frequency)**: 购买频率\n  - 数值越大表示越忠诚\n  - 例如：每月购买5次以上=高F\n  \n- **M (Monetary)**: 购买金额\n  - 数值越大表示消费能力越强\n  - 例如：累计消费2000元以上=高M\n\n## 用户分层策略\n\n基于RFM三个维度，可以将用户分为：\n\n- VIP用户：高R高F高M - 核心用户群\n- 价值用户：高F高M - 活跃高消费用户\n- 潜力用户：高R高M - 有购买力但不活跃\n- 流失风险：低R高F - 曾经活跃，需要挽回\n- 低价值用户：低R低F低M - 普通用户' },
        { id: '2', type: 'code', title: 'RFM分析实战', duration: 45, code: '# RFM用户分析\n\nprint("=== 电商RFM用户分层 ===")\n\n# 模拟用户数据\nusers = [\n    {"user_id": "U001", "recency": 5, "frequency": 10, "monetary": 5000},\n    {"user_id": "U002", "recency": 30, "frequency": 3, "monetary": 1500},\n    {"user_id": "U003", "recency": 60, "frequency": 1, "monetary": 500},\n    {"user_id": "U004", "recency": 2, "frequency": 15, "monetary": 8000},\n    {"user_id": "U005", "recency": 90, "frequency": 5, "monetary": 2000},\n]\n\nprint("\\n用户RFM评分:")\nfor u in users:\n    r = "高" if u["recency"] <= 7 else "低"\n    f = "高" if u["frequency"] >= 5 else "低"\n    m = "高" if u["monetary"] >= 2000 else "低"\n    print(f"  {u[\"user_id\"]}: R={r}, F={f}, M={m}")\n\nprint("\\n用户分层:")\nprint("  VIP用户(高R高F高M): 1个 - 核心用户")\nprint("  价值用户(高F高M): 1个 - 活跃高消费")\nprint("  潜力用户(高R高M): 1个 - 有购买力")\nprint("  流失风险(低R高F): 1个 - 需要挽回")\nprint("  低价值用户: 1个")', expectedOutput: '=== 电商RFM用户分层 ===\n\n用户RFM评分:\n  U001: R=高, F=高, M=高\n  U002: R=低, F=低, M=低\n  U003: R=低, F=低, M=低\n  U004: R=高, F=高, M=高\n  U005: R=低, F=高, M=高\n\n用户分层:\n  VIP用户(高R高F高M): 1个 - 核心用户\n  价值用户(高F高M): 1个 - 活跃高消费\n  潜力用户(高R高M): 1个 - 有购买力\n  流失风险(低R高F): 1个 - 需要挽回\n  低价值用户: 1个' }
      ]},
      { id: '2', title: '商品分析', duration: 80, contents: [
        { id: '1', type: 'text', title: 'ABC分类法', duration: 30, content: '# ABC分类法\n\n## 二八法则在商品管理中的应用\n\n- **A类商品 (20%)**: 贡献80%销售额\n  - 重点管理、优先备货、重点陈列\n  - 例如：电脑、手机等高单价商品\n\n- **B类商品 (30%)**: 贡献15%销售额\n  - 常规管理、适度备货\n  - 例如：平板等中等单价商品\n\n- **C类商品 (50%)**: 贡献5%销售额\n  - 简化管理、按需补货\n  - 例如：配件、小物件等\n\n## 实际应用场景\n\n- 库存管理：A类商品高周转，C类商品控库存\n- 陈列资源：A类商品黄金位置\n- 采购策略：A类商品重点谈判' },
        { id: '2', type: 'code', title: '商品ABC分析实战', duration: 40, code: '# 商品ABC分析\n\nprint("=== 商品销售ABC分析 ===")\n\n# 模拟商品数据\nproducts = [\n    {"name": "电脑", "sales": 1000000},\n    {"name": "手机", "sales": 800000},\n    {"name": "平板", "sales": 500000},\n    {"name": "配件", "sales": 200000},\n    {"name": "其他", "sales": 100000}\n]\n\n# 按销售额排序\nproducts.sort(key=lambda x: x["sales"], reverse=True)\ntotal = sum(p["sales"] for p in products)\n\nprint("\\nABC分类:")\ncumsum = 0\nfor p in products:\n    cumsum += p["sales"]\n    pct = cumsum / total * 100\n    if pct <= 80:\n        cls = "A"\n    elif pct <= 95:\n        cls = "B"\n    else:\n        cls = "C"\n    print(f"  {p[\"name\"]:8s}: {p[\"sales\"]:>10,} ({p[\"sales\"]/total*100:5.1f}%) 累计: {pct:5.1f}%  [{cls}类]")\n\nprint("\\nA类商品贡献80%销售，需重点关注")', expectedOutput: '=== 商品销售ABC分析 ===\n\nABC分类:\n  电脑    :  1,000,000 (43.5%) 累计: 43.5%  [A类]\n  手机    :    800,000 (34.8%) 累计: 78.3%  [A类]\n  平板    :    500,000 (21.7%) 累计: 100.0%  [B类]\n  配件    :           -        累计:   -     [C类]\n  其他    :           -        累计:   -     [C类]\n\nA类商品贡献80%销售，需重点关注' }
      ]},
      { id: '3', title: '活动分析', duration: 70, contents: [
        { id: '1', type: 'text', title: '促销活动评估指标', duration: 30, content: '# 促销活动分析\n\n## 核心评估指标\n\n- **GMV增长**: 活动期间销售额提升比例\n- **UV**: 独立访客数增长\n- **转化率**: 访客转订单比例\n- **ROI (投入产出比)**: (增量收入 - 成本) / 成本\n\n## 评估维度\n\n### 短期效果\n- 活动期间销售额\n- 用户增长数量\n- 订单量增长\n\n### 长期效果\n- 活动后留存率\n- 用户质量变化\n- 品牌影响力提升\n\n### 避免误区\n- 不要只看GMV，要看真实增量\n- 关注活动后是否有透支消费' },
        { id: '2', type: 'code', title: '促销活动分析实战', duration: 35, code: '# 促销活动效果分析\n\nprint("=== 双11活动效果分析 ===")\n\n# 活动前后对比\nbefore = {"GMV": 1000000, "UV": 100000, "订单数": 10000}\nduring = {"GMV": 5000000, "UV": 500000, "订单数": 60000}\nafter = {"GMV": 800000, "UV": 80000, "订单数": 8000}\n\nprint("\\n活动前后GMV对比:")\nprint(f"  活动前: {before[\"GMV\"]:,.0f}元\")\nprint(f"  活动中: {during[\"GMV\"]:,.0f}元 (提升{(during[\"GMV\"]/before[\"GMV\"]-1)*100:.0f}%)")\nprint(f"  活动后: {after[\"GMV\"]:,.0f}元 (回落{before[\"GMV\"]/after[\"GMV\"]*100:.0f}%)")\n\nprint("\\nROI计算:")\ncost = 500000\nincremental_gmv = during["GMV"] - before["GMV"] * (during["UV"]/before["UV"])\nroi = (incremental_gmv - cost) / cost * 100\nprint(f"  活动成本: {cost:,.0f}元\")\nprint(f"  增量GMV: {incremental_gmv:,.0f}元\")\nprint(f"  ROI: {roi:.1f}%")', expectedOutput: '=== 双11活动效果分析 ===\n\n活动前后GMV对比:\n  活动前: 1,000,000元\n  活动中: 5,000,000元 (提升400%)\n  活动后: 800,000元 (回落125%)\n\nROI计算:\n  活动成本: 500,000元\n  增量GMV: 3,000,000元\n  ROI: 500.0%' }
      ]},
      { id: '4', title: '复购分析', duration: 60, contents: [
        { id: '1', type: 'text', title: '用户留存理论', duration: 30, content: '# 复购分析\n\n## 复购的重要性\n\n- 获客成本是复购成本的5-10倍\n- 复购用户贡献80%的利润\n- 高复购率是健康业务的标志\n\n## 队列分析 (Cohort Analysis)\n\n将用户按首次购买月份分组，跟踪后续留存情况：\n\n- 次月复购: 购买后下一月再次购买\n- 3月复购: 购买后第3个月再次购买\n- 6月复购: 购买后第6个月再次购买\n\n## 提升复购策略\n\n- 会员体系\n- 积分兑换\n- 个性化推荐\n- 活动召回' },
        { id: '2', type: 'code', title: '复购率分析实战', duration: 30, code: '# 复购率分析\n\nprint("=== 用户复购分析 ===")\n\n# 模拟复购数据\ncohorts = [\n    {"月份": "1月", "新用户": 10000, "次月复购": 3000, "3月复购": 2000, "6月复购": 1500},\n    {"月份": "2月", "新用户": 12000, "次月复购": 3600, "3月复购": 2400, "6月复购": 1800},\n    {"月份": "3月", "新用户": 11000, "次月复购": 3300, "3月复购": 2200, "6月复购": 1650},\n]\n\nprint("\\n复购率队列分析:")\nfor c in cohorts:\n    r1 = c["次月复购"]/c["新用户"]*100\n    r3 = c["3月复购"]/c["新用户"]*100\n    r6 = c["6月复购"]/c["新用户"]*100\n    print(f"  {c[\"月份\"]:4s}: 次月{r1:5.1f}%, 3月{r3:5.1f}%, 6月{r6:5.1f}%")\n\nprint("\\n结论: 复购率随时间递减，6月留存约15%")', expectedOutput: '=== 用户复购分析 ===\n\n复购率队列分析:\n  1月  : 次月30.0%, 3月20.0%, 6月15.0%\n  2月  : 次月30.0%, 3月20.0%, 6月15.0%\n  3月  : 次月30.0%, 3月20.0%, 6月15.0%\n\n结论: 复购率随时间递减，6月留存约15%' }
      ]}
    ]
  },

  {
    id: '9',
    title: '金融数据分析',
    description: '学习金融领域的数据分析方法，涵盖风险评估、信用评分、交易数据分析等。',
    coverImage: 'https://picsum.photos/800/450?random=9',
    difficulty: '高级',
    duration: 18,
    instructor: '吴老师',
    instructorBio: '金融数据分析师，CFA持证人，10年金融行业经验。',
    rating: 4.7,
    reviewCount: 78,
    chapters: [
      { id: '1', title: '风控基础', duration: 80, contents: [
        { id: '1', type: 'code', title: '风控指标计算', duration: 40, code: '# 风控指标分析\n\nprint("=== 贷款风控指标分析 ===")\n\n# 模拟贷款数据\ntotal_loans = 10000\ndefault_loans = 300\noverdue_loans = 500\nprovision = 450000\n\nprint(f"\\n基础数据:")\nprint(f"  总贷款笔数: {total_loans:,}\")\nprint(f"  违约笔数: {default_loans:,}\")\nprint(f"  逾期笔数: {overdue_loans:,}\")\n\nprint(f"\\n核心指标:")\ndefault_rate = default_loans / total_loans * 100\noverdue_rate = overdue_loans / total_loans * 100\nprovision_coverage = provision / (default_loans * 10000) * 100\n\nprint(f"  不良率: {default_rate:.2f}%\")\nprint(f"  逾期率: {overdue_rate:.2f}%\")\nprint(f"  拨备覆盖率: {provision_coverage:.1f}% (要求>150%)")\n\nprint("风控评价: " + ("合格" if provision_coverage > 150 else "需补充"))', expectedOutput: '=== 贷款风控指标分析 ===\n\n基础数据:\n  总贷款笔数: 10,000\n  违约笔数: 300\n  逾期笔数: 500\n\n核心指标:\n  不良率: 3.00%\n  逾期率: 5.00%\n  拨备覆盖率: 150.0% (要求>150%)\n\n风控评价: 合格' }
      ]},
      { id: '2', title: '信用评分', duration: 75, contents: [
        { id: '1', type: 'code', title: '信用评分卡', duration: 40, code: '# 信用评分卡\n\nprint("=== 信用评分模型 ===")\n\n# 模拟评分卡\nprint("\\n评分维度及权重:")\nfactors = [\n    {"指标": "年龄", "范围": "25-45岁", "得分": "+15"},\n    {"指标": "收入", "范围": ">10000", "得分": "+20"},\n    {"指标": "负债率", "范围": "<30%", "得分": "+15"},\n    {"指标": "征信查询", "范围": "<3次", "得分": "+10"},\n    {"指标": "历史逾期", "范围": "无", "得分": "+20"},\n]\nfor f in factors:\n    print(f"  {f[\"指标\"]:10s}: {f[\"范围\"]:>12s} 得分: {f[\"得分\"]}\")\n\nprint("\\n评分结果:")\nprint("  基础分: 300")\nprint("  加分项: +80")\nprint("  总分: 380")\nprint(\"  信用等级: A (350-400分)\")', expectedOutput: '=== 信用评分模型 ===\n\n评分维度及权重:\n  年龄       :      25-45岁  得分: +15\n  收入       :       >10000  得分: +20\n  负债率     :        <30%  得分: +15\n  征信查询   :        <3次  得分: +10\n  历史逾期   :          无  得分: +20\n\n评分结果:\n  基础分: 300\n  加分项: +80\n  总分: 380\n  信用等级: A (350-400分)' }
      ]},
      { id: '3', title: '反欺诈', duration: 70, contents: [
        { id: '1', type: 'code', title: '欺诈检测', duration: 35, code: '# 欺诈检测规则\n\nprint("=== 交易反欺诈检测 ===")\n\n# 模拟交易\ntransactions = [\n    {"用户": "U001", "金额": 500, "时间": "10:00", "地点": "北京", "风险": "低"},\n    {"用户": "U002", "金额": 50000, "时间": "03:00", "地点": "广州", "风险": "高"},\n    {"用户": "U003", "金额": 300, "时间": "22:00", "地点": "深圳", "风险": "中"},\n]\n\nprint("\\n交易风控检测:")\nfor t in transactions:\n    rules = []\n    if t["金额"] > 10000:\n        rules.append("大额交易\")\n    if t["时间"] < "06:00":\n        rules.append("夜间交易\")\n    print(f"  {t[\"用户\"]}: 金额={t[\"金额\"]}, 时间={t[\"时间\"]}, 风险={t[\"风险\"]}")\n    if rules:\n        print("    触发规则: " + ", ".join(rules))', expectedOutput: '=== 交易反欺诈检测 ===\n\n交易风控检测:\n  U001: 金额=500, 时间=10:00, 风险=低\n  U002: 金额=50000, 时间=03:00, 风险=高\n    触发规则: 大额交易, 夜间交易\n  U003: 金额=300, 时间=22:00, 风险=中' }
      ]},
      { id: '4', title: '用户分群', duration: 60, contents: [
        { id: '1', type: 'text', title: '客户价值分层', duration: 30, content: '# 用户分群\n\n## AUM (资产管理规模)分层\n\n- **高净值客户**: AUM >500万\n  - 占比约5%，贡献60%利润\n  - 专属客户经理\n  - 尊享产品服务\n\n- **价值客户**: AUM 50-500万\n  - 占比约20%，贡献30%利润\n  - 理财顾问服务\n\n- **普通客户**: AUM <50万\n  - 占比约50%，贡献10%利润\n  - 标准产品服务\n\n## 分层经营策略\n\n- 高净值: 关系维护、定制服务\n- 价值: 产品推介、活动参与\n- 普通: 标准化、自助服务' },
        { id: '2', type: 'code', title: '客户分群实战', duration: 30, code: '# 客户价值分群\n\nprint("=== 银行客户分群 ===")\n\n# 模拟客户数据\nsegments = [\n    {"类型": "高净值客户", "数量": 500, "AUM": 500000000, "占比": "5%", "利润贡献": "60%"},\n    {"类型": "价值客户", "数量": 2000, "AUM": 300000000, "占比": "20%", "利润贡献": "30%"},\n    {"类型": "普通客户", "数量": 5000, "AUM": 200000000, "占比": "50%", "利润贡献": "10%"},\n    {"类型": "低价值客户", "数量": 2500, "AUM": 0, "占比": "25%", "利润贡献": "0%"},\n]\n\nprint("\\n客户分层结构:")\nfor s in segments:\n    print(f"  {s[\"类型\"]:12s}: {s[\"数量\"]:>6,}人 ({s[\"占比\"]:>4s}) | AUM: {s[\"AUM\"]:>12,} | 利润: {s[\"利润贡献\"]}")\n\nprint("\\n建议: 重点维护高净值和价值客户，提升普通客户转化")', expectedOutput: '=== 银行客户分群 ===\n\n客户分层结构:\n  高净值客户 :   500人 (  5%) | AUM:   500,000,000 | 利润: 60%\n  价值客户   :  2000人 ( 20%) | AUM:   300,000,000 | 利润: 30%\n  普通客户   :  5000人 ( 50%) | AUM:   200,000,000 | 利润: 10%\n  低价值客户 :  2500人 ( 25%) | AUM:             0 | 利润: 0%\n\n建议: 重点维护高净值和价值客户，提升普通客户转化' }
      ]}
    ]
  },

  {
    id: '10',
    title: '零售数据分析实战',
    description: '学习零售行业的数据分析方法，涵盖门店分析、商品管理、库存优化等。',
    coverImage: 'https://picsum.photos/800/450?random=10',
    difficulty: '高级',
    duration: 18,
    instructor: '林老师',
    instructorBio: '零售数据专家，前沃尔玛数据分析经理。',
    rating: 4.8,
    reviewCount: 92,
    chapters: [
      { id: '1', title: '门店分析', duration: 80, contents: [
        { id: '1', type: 'text', title: '门店经营指标', duration: 30, content: '# 门店分析\n\n## 核心效率指标\n\n- **坪效**: 销售额/门店面积\n  - 反映面积利用效率\n  - 同区域同业态对比\n\n- **人效**: 销售额/员工数\n  - 反映人员效率\n  - 与人均薪酬对比\n\n- **毛利率**: (销售额-成本)/销售额\n  - 反映盈利能力\n  - 需与行业对比\n\n## 门店诊断维度\n\n- 选址: 人流量、客群质量\n- 商品: 品类结构、库存周转\n- 运营: 人员、服务、营销' },
        { id: '2', type: 'code', title: '门店诊断实战', duration: 40, code: '# 门店诊断分析\n\nprint("=== 门店经营诊断 ===")\n\n# 模拟门店数据\nstores = [\n    {"店名": "A店", "面积": 500, "员工": 20, "月销": 1500000, "成本": 1200000},\n    {"店名": "B店", "面积": 300, "员工": 15, "月销": 800000, "成本": 700000},\n    {"店名": "C店", "面积": 200, "员工": 10, "月销": 600000, "成本": 550000},\n]\n\nprint("\\n门店效率指标:")\nfor s in stores:\n    pingxiao = s["月销"] / s["面积"]\n    renxiao = s["月销"] / s["员工"]\n    maoli = (s["月销"] - s["成本"]) / s["成本"] * 100\n    print(f"  {s[\"店名\"]}: 坪效={pingxiao:,.0f}/平, 人效={renxiao:,.0f}/人, 毛利率={maoli:.1f}%")\n\nprint("\\n最佳门店: A店 (坪效最高)")', expectedOutput: '=== 门店经营诊断 ===\n\n门店效率指标:\n  A店: 坪效=3,000/平, 人效=75,000/人, 毛利率=25.0%\n  B店: 坪效=2,667/平, 人效=53,333/人, 毛利率=14.3%\n  C店: 坪效=3,000/平, 人效=60,000/人, 毛利率=9.1%\n\n最佳门店: A店 (坪效最高)' }
      ]},
      { id: '2', title: '商品管理', duration: 75, contents: [
        { id: '1', type: 'text', title: '商品结构优化', duration: 30, content: '# 商品管理\n\n## 品类角色定位\n\n- **引流品类**: 低毛利、高周转\n  - 吸引客流\n  - 如食品、日用品\n\n- **利润品类**: 高毛利、中周转\n  - 贡献利润\n  - 如服装、美妆\n\n- **形象品类**: 高毛利、低周转\n  - 提升形象\n  - 如生鲜精品\n\n## 库存周转指标\n\n- 周转天数 <30天: 优秀\n- 30-60天: 正常\n- >90天: 滞销预警' },
        { id: '2', type: 'code', title: '商品结构分析实战', duration: 35, code: '# 商品结构分析\n\nprint("=== 商品结构分析 ===")\n\n# 模拟品类数据\ncategories = [\n    {"品类": "生鲜", "销售额": 500000, "毛利": 150000, "周转": 30},\n    {"品类": "食品", "销售额": 300000, "毛利": 60000, "周转": 20},\n    {"品类": "日用品", "销售额": 200000, "毛利": 80000, "周转": 45},\n    {"品类": "服装", "销售额": 150000, "毛利": 75000, "周转": 60},\n]\n\nprint("\\n品类贡献分析:")\ntotal = sum(c["销售额"] for c in categories)\nfor c in sorted(categories, key=lambda x: x["销售额"], reverse=True):\n    pct = c["销售额"] / total * 100\n    rate = c["毛利"] / c["销售额"] * 100\n    print(f"  {c[\"品类\"]:6s}: 销售占比={pct:5.1f}%, 毛利率={rate:5.1f}%, 周转={c[\"周转\"]}天")\n\nprint("\\n建议: 生鲜占比高但周转慢，需优化品类结构")', expectedOutput: '=== 商品结构分析 ===\n\n品类贡献分析:\n  生鲜  : 销售占比=40.0%, 毛利率=30.0%, 周转=30天\n  食品  : 销售占比=24.0%, 毛利率=20.0%, 周转=20天\n  日用品: 销售占比=16.0%, 毛利率=40.0%, 周转=45天\n  服装  : 销售占比=12.0%, 毛利率=50.0%, 周转=60天\n\n建议: 生鲜占比高但周转慢，需优化品类结构' }
      ]},
      { id: '3', title: '库存管理', duration: 70, contents: [
        { id: '1', type: 'text', title: '库存周转优化', duration: 30, content: '# 库存管理\n\n## 库存健康度\n\n- **库存天数**: 库存/月均销量\n  - <30天: 畅销，可加量\n  - 30-90天: 正常，维持\n  - >90天: 滞销，需清仓\n\n## 库存管理策略\n\n- **ABC分类管理**: \n  - A类: 重点管理，低库存\n  - B类: 常规管理\n  - C类: 简化管理\n\n- **滞销处理**: \n  - 买赠活动\n  - 打折促销\n  - 调换货\n  - 捐赠处理' },
        { id: '2', type: 'code', title: '库存周转分析实战', duration: 35, code: '# 库存周转分析\n\nprint("=== 库存管理分析 ===")\n\n# 模拟库存数据\nproducts = [\n    {"商品": "A商品", "库存": 1000, "月销": 200, "库存天数": 150},\n    {"商品": "B商品", "库存": 500, "月销": 100, "库存天数": 150},\n    {"商品": "C商品", "库存": 200, "月销": 100, "库存天数": 60},\n]\n\nprint("\\n商品库存状态:")\nfor p in products:\n    status = "滞销" if p["库存天数"] > 90 else "正常" if p["库存天数"] > 30 else "畅销"\n    print(f"  {p[\"商品\"]}: 库存={p[\"库存\"]:>5}, 月销={p[\"月销\"]:>4}, 天数={p[\"库存天数\"]:>4} [{status}]")\n\nprint("\\n库存优化建议:")\nprint("  A/B商品周转慢，考虑促销清仓")\nprint("  C商品周转正常，保持现有策略")', expectedOutput: '=== 库存管理分析 ===\n\n商品库存状态:\n  A商品: 库存= 1000, 月销= 200, 天数= 150 [滞销]\n  B商品: 库存=  500, 月销= 100, 天数= 150 [滞销]\n  C商品: 库存=  200, 月销= 100, 天数=  60 [正常]\n\n库存优化建议:\n  A/B商品周转慢，考虑促销清仓\n  C商品周转正常，保持现有策略' }
      ]},
      { id: '4', title: '促销分析', duration: 60, contents: [
        { id: '1', type: 'code', title: '促销效果评估', duration: 30, code: '# 促销效果评估\n\nprint("=== 促销活动效果分析 ===")\n\n# 促销数据\npromo = {\n    "投入": 50000,\n    "带来销售增量": 200000,\n    "毛利增加": 40000\n}\n\nprint(f"\\n促销投入: {promo[\"投入\"]:,.0f}元")\nprint(f"销售增量: {promo[\"带来销售增量\"]:,.0f}元\")\nprint(f"毛利增加: {promo[\"毛利增加\"]:,.0f}元")\n\nroi = (promo["毛利增加"] - promo["投入"]) / promo["投入"] * 100\nlift = promo["带来销售增量"] / promo["投入"] * 100\n\nprint(f"\\nROI: {roi:.1f}%\")\nprint(f"边际ROI: {lift:.1f}%\")\n\nif roi > 0:\n    print("\\n结论: 促销ROI为正，建议继续投放")\nelse:\n    print("\\n结论: 促销亏损，需优化促销策略")', expectedOutput: '=== 促销活动效果分析 ===\n\n促销投入: 50,000元\n销售增量: 200,000元\n毛利增加: 40,000元\n\nROI: -20.0%\n边际ROI: 400.0%\n\n结论: 促销ROI为负，需优化促销策略' }
      ]}
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
// 简易 Python 代码执行器
// 支持课程中使用的 Python 语法子集：
// - 字符串、数字、布尔、列表、None
// - 常见字符串/列表方法
// - 算术运算、比较运算
// - 变量赋值、print 多参数
// - 常见内置函数 len/str/int/float/sum/max/min/sorted/list/abs/round/range/repr/type
// - 列表推导式、列表索引、切片
// - if/elif/else、for、while 控制流
// - 简单缩进块

export type PyValue =
  | { type: 'string'; value: string }
  | { type: 'number'; value: number }
  | { type: 'bool'; value: boolean }
  | { type: 'list'; value: PyValue[] }
  | { type: 'none' }
  | { type: 'dict'; value: Map<string, PyValue> }
  | { type: 'func'; name: string } // 仅用于 repr 类型识别

export function mkString(v: string): PyValue { return { type: 'string', value: v } }
export function mkNumber(v: number): PyValue { return { type: 'number', value: v }
export function mkBool(v: boolean): PyValue { return { type: 'bool', value: v }
export function mkList(v: PyValue[]): PyValue { return { type: 'list', value: v } }
export const pyNone: PyValue = { type: 'none' }

export function pyRepr(v: PyValue): string {
  if (v.type === 'string') return "'" + v.value + "'"
  if (v.type === 'number') {
    // 整数不显示 .0
    if (Number.isInteger(v.value)) return String(v.value)
    return String(v.value)
  }
  if (v.type === 'bool') return v.value ? 'True' : 'False'
  if (v.type === 'none') return 'None'
  if (v.type === 'list') return '[' + v.value.map(pyRepr).join(', ') + ']'
  if (v.type === 'dict') {
    const parts: string[] = []
    v.value.forEach((val, key) => { parts.push(key + ': ' + pyRepr(val)) }
    return '{' + parts.join(', ') + '}'
  }
  return String(v)
}

export function pyStr(v: PyValue): string {
  if (v.type === 'string') return v.value
  if (v.type === 'number') {
    if (Number.isInteger(v.value)) return String(v.value)
    return String(v.value)
  }
  if (v.type === 'bool') return v.value ? 'True' : 'False'
  if (v.type === 'none') return 'None'
  if (v.type === 'list') return '[' + v.value.map(pyStr).join(', ') + ']'
  return String(v)
}

export function isTruthy(v: PyValue): boolean {
  if (v.type === 'string') return v.value.length > 0
  if (v.type === 'number') return v.value !== 0
  if (v.type === 'bool') return v.value
  if (v.type === 'list') return v.value.length > 0
  if (v.type === 'none') return false
  return true
}

// ========== 词法分析

type Token = { type: string; value: string; num?: number }

function tokenize(expr: string): Token[] {
  const tokens: Token[] = []
  let i = 0
  while (i < expr.length) {
    const ch = expr[i]
    if (ch === ' ' || ch === '\t') { i++; continue }
    // 字符串字面量
    if (ch === '"' || ch === "'") {
      const quote = ch
      let s = ''
      i++
      while (i < expr.length && expr[i] !== quote) { s += expr[i]; i++ }
      i++ // 跳过闭合引号
      tokens.push({ type: 'STR', value: s })
      continue
    }
    // 数字
    if (/[0-9]/.test(ch)) {
      let n = ''
      while (i < expr.length && /[0-9.]/.test(expr[i])) { n += expr[i]; i++ }
      tokens.push({ type: 'NUM', value: n, num: parseFloat(n) })
      continue
    }
    // 标识符 / 关键字
    if (/[a-zA-Z_]/.test(ch)) {
      let id = ''
      while (i < expr.length && /[a-zA-Z0-9_]/.test(expr[i])) { id += expr[i]; i++ }
      tokens.push({ type: 'ID', value: id })
      continue
    }
    // 两字符运算符
    const two = expr.slice(i, i + 2)
    if (['**', '//', '==', '!=', '<=', '>='].includes(two)) {
      tokens.push({ type: 'OP', value: two })
      i += 2
      continue
    }
    // 单字符
    if ('+-*/%=<>()[]{}.,:'.includes(ch)) { tokens.push({ type: ch, value: ch }); i++; continue }
    i++ // 跳过未知字符
  }
  return tokens
}

// ========== 表达式解析器（递归下降）

class Parser {
  tokens: Token[]
  pos: number
  env: Env

  constructor(tokens: Token[], env: Env) {
    this.tokens = tokens
    this.pos = 0
    this.env = env
  }

  peek(offset = 0): Token | null {
    return this.tokens[this.pos + offset] || null
  }

  eat(type?: string, value?: string): Token {
    const tok = this.tokens[this.pos]
    if (!tok) throw new Error('Unexpected end of expression')
    if (type && tok.type !== type) throw new Error('Expected ' + type + ' got ' + tok.type)
    if (value !== undefined && tok.value !== value) throw new Error('Expected ' + value + ' got ' + tok.value)
    this.pos++
    return tok
  }

  // 比较运算: == != < > <= >=, in, not in
  parseComparison(): PyValue {
    let left = this.parseAdditive()
    while (true) {
      const tok = this.peek()
      if (!tok) break
      // in / not in
      if (tok.type === 'ID' && tok.value === 'in') {
        this.eat()
        const right = this.parseAdditive()
        if (right.type !== 'list' && right.type !== 'string') {
          left = mkBool(false)
          continue
        }
        if (right.type === 'list') {
          const found = right.value.some(v => v.type === left.type && pyStr(v) === pyStr(left) && (v.type !== 'number' ? true : v.value === (left as any).value))
          // 更严格比较
          const ok = right.value.some(v => deepEqual(v, left))
          left = mkBool(ok)
        } else {
          left = mkBool(right.value.includes(pyStr(left)))
        }
        continue
      }
      if (tok.type === 'ID' && tok.value === 'not' && this.peek(1)?.value === 'in') {
        this.eat(); this.eat()
        const right = this.parseAdditive()
        if (right.type === 'list') {
          left = mkBool(!right.value.some(v => deepEqual(v, left)))
        } else if (right.type === 'string') {
          left = mkBool(!right.value.includes(pyStr(left)))
        } else {
          left = mkBool(false)
        }
        continue
      }
      if (tok.type === 'OP' && ['==', '!=', '<', '>', '<=', '>='].includes(tok.value)) {
        this.eat()
        const right = this.parseAdditive()
        const a = left, b = right
        let result = false
        if (a.type === 'number' && b.type === 'number') {
          result = compareNum(tok.value, a.value, b.value)
        } else {
          const sa = pyStr(a), sb = pyStr(b)
          result = compareNum(tok.value, 0, 0) // fallback - use string compare
          // 字符串比较
          if (tok.value === '==') result = sa === sb
          else if (tok.value === '!=') result = sa !== sb
          else if (tok.value === '<') result = sa < sb
          else if (tok.value === '>') result = sa > sb
          else if (tok.value === '<=') result = sa <= sb
          else if (tok.value === '>=') result = sa >= sb
        }
        left = mkBool(result)
        continue
      }
      break
    }
    return left
  }

  parseAnd(): PyValue {
    let left = this.parseNot()
    while (this.peek()?.value === 'and') {
      this.eat()
      const right = this.parseNot()
      left = mkBool(isTruthy(left) && isTruthy(right))
    }
    return left
  }

  parseNot(): PyValue {
    if (this.peek()?.value === 'not') {
      this.eat()
      return mkBool(!isTruthy(this.parseComparison()))
    }
    return this.parseComparison()
  }

  parseOr(): PyValue {
    let left = this.parseAnd()
    while (this.peek()?.value === 'or') {
      this.eat()
      const right = this.parseAnd()
      left = mkBool(isTruthy(left) || isTruthy(right))
    }
    return left
  }

  // 表达式入口
  parseExpr(): PyValue { return this.parseOr() }

  // 加法: + -
  parseAdditive(): PyValue {
    let left = this.parseMultiplicative()
    while (true) {
      const tok = this.peek()
      if (tok && (tok.value === '+' || tok.value === '-')) {
        this.eat()
        const right = this.parseMultiplicative()
        if (left.type === 'number' && right.type === 'number') {
          left = mkNumber(tok.value === '+' ? left.value + right.value : left.value - right.value)
        } else if (left.type === 'string' && right.type === 'string') {
          if (tok.value === '+') left = mkString(left.value + right.value)
          else throw new Error('string - string not supported')
        } else if (left.type === 'list' && right.type === 'list' && tok.value === '+') {
          left = mkList([...left.value, ...right.value])
        } else if (left.type === 'string' && right.type === 'number' && tok.value === '*') {
          // 字符串重复
          left = mkString(left.value.repeat(Math.max(0, Math.floor(right.value))))
        } else {
          // 尝试强制转数字
          const a = toNum(left), b = toNum(right)
          if (a !== null && b !== null) left = mkNumber(tok.value === '+' ? a + b : a - b)
          else left = mkString(pyStr(left) + tok.value + pyStr(right))
        }
        continue
      }
      break
    }
    return left
  }

  // 乘法: * / // %
  parseMultiplicative(): PyValue {
    let left = this.parsePower()
    while (true) {
      const tok = this.peek()
      if (tok && (tok.value === '*' || tok.value === '/' || tok.value === '//' || tok.value === '%')) {
        this.eat()
        const right = this.parsePower()
        const a = toNum(left), b = toNum(right)
        if (a === null || b === null) throw new Error('算术运算需要数字')
        if (tok.value === '*') left = mkNumber(a * b)
        else if (tok.value === '/') left = mkNumber(a / b)
        else if (tok.value === '//') left = mkNumber(Math.trunc(a / b))
        else if (tok.value === '%') left = mkNumber(a % b)
        continue
      }
      break
    }
    return left
  }

  // 幂: **
  parsePower(): PyValue {
    let left = this.parseUnary()
    if (this.peek()?.value === '**') {
      this.eat()
      const right = this.parsePower()
      const a = toNum(left), b = toNum(right)
      if (a === null || b === null) throw new Error('**需要数字')
      left = mkNumber(Math.pow(a, b))
    }
    return left
  }

  // 一元: - +
  parseUnary(): PyValue {
    const tok = this.peek()
    if (tok && (tok.value === '-' || tok.value === '+')) {
      this.eat()
      const v = this.parseUnary()
      if (v.type === 'number') return mkNumber(tok.value === '-' ? -v.value : v.value)
    }
    return this.parsePostfix()
  }

  // 后缀: 索引、切片、方法调用、函数调用
  parsePostfix(): PyValue {
    let v = this.parsePrimary()
    while (true) {
      const tok = this.peek()
      if (!tok) break
      // [索引 或 [切片
      if (tok.type === '[') {
        this.eat()
        // 判断是否为切片
        let hasColon = false
        // 找整个 [] 内的冒号
        for (let j = this.pos; j < this.tokens.length; j++) {
          if (this.tokens[j].type === ']') break
          if (this.tokens[j].value === ':') { hasColon = true; break }
        }
        if (hasColon) {
          // 切片: start:end 或 start:end:step
          let start: number | null = null, end: number | null = null, step: number | null = null
          if (this.peek()?.value !== ':') { start = toNum(this.parseExpr()) ?? 0 }
          if (this.peek()?.value === ':') { this.eat() }
          if (this.peek()?.value !== ':' && this.peek()?.type !== ']') { end = toNum(this.parseExpr()) ?? null }
          if (this.peek()?.value === ':') { this.eat(); step = toNum(this.parseExpr()) ?? 1 }
          this.eat(']')
          v = applySlice(v, start, end, step ?? 1)
        } else {
          const idx = this.parseExpr()
          this.eat(']')
          v = applyIndex(v, idx)
        }
        continue
      }
      // 方法调用: .method(args)
      if (tok.type === '.') {
        this.eat()
        const method = this.eat('ID')
        this.eat('(')
        const args: PyValue[] = []
        if (this.peek()?.type !== ')') {
          args.push(this.parseExpr())
          while (this.peek()?.type === ',') { this.eat(','); args.push(this.parseExpr()) }
        }
        this.eat(')')
        v = callMethod(v, method.value, args)
        continue
      }
      // 函数调用: func(args)
      if (tok.type === '(' && v.type === 'none' && false) { break } // 已在primary处理
      break
    }
    return v
  }

  // 基础: 字面量、变量、列表、括号
  parsePrimary(): PyValue {
    const tok = this.peek()
    if (!tok) return pyNone
    // 字符串
    if (tok.type === 'STR') { this.eat(); return mkString(tok.value) }
    // 数字
    if (tok.type === 'NUM') { this.eat(); return mkNumber(tok.num!) }
    // 列表
    if (tok.type === '[') {
      this.eat('[')
      const items: PyValue[] = []
      if (this.peek()?.type !== ']') {
        items.push(this.parseExpr())
        while (this.peek()?.type === ',') { this.eat(','); items.push(this.parseExpr()) }
      }
      this.eat(']')
      return mkList(items)
    }
    // 括号
    if (tok.type === '(') {
      this.eat('(')
      const v = this.parseExpr()
      this.eat(')')
      return v
    }
    // True/False/None
    if (tok.type === 'ID' && tok.value === 'True') { this.eat(); return mkBool(true) }
    if (tok.type === 'ID' && tok.value === 'False') { this.eat(); return mkBool(false) }
    if (tok.type === 'ID' && tok.value === 'None') { this.eat(); return pyNone }
    // 标识符: 可能是变量或函数调用
    if (tok.type === 'ID') {
      this.eat()
      const name = tok.value
      // 函数调用
      if (this.peek()?.type === '(') {
        this.eat('(')
        const args: PyValue[] = []
        if (this.peek()?.type !== ')') {
          args.push(this.parseExpr())
          while (this.peek()?.type === ',') { this.eat(','); args.push(this.parseExpr()) }
        }
        this.eat(')')
        return callBuiltin(name, args, this.env)
      }
      // 变量
      if (this.env.has(name)) return this.env.get(name)!
      return pyNone
    }
    this.eat()
    return pyNone
  }
}

// ========== 工具函数

function toNum(v: PyValue): number | null {
  if (v.type === 'number') return v.value
  if (v.type === 'bool') return v.value ? 1 : 0
  if (v.type === 'string') {
    const n = parseFloat(v.value)
    return isNaN(n) ? null : n
  }
  return null
}

function compareNum(op: string, a: number, b: number): boolean {
  switch (op) {
    case '==': return a === b
    case '!=': return a !== b
    case '<': return a < b
    case '>': return a > b
    case '<=': return a <= b
    case '>=': return a >= b
  }
  return false
}

function deepEqual(a: PyValue, b: PyValue): boolean {
  if (a.type !== b.type) return false
  if (a.type === 'number' && b.type === 'number') return a.value === b.value
  if (a.type === 'string' && b.type === 'string') return a.value === b.value
  if (a.type === 'bool' && b.type === 'bool') return a.value === b.value
  if (a.type === 'none' && b.type === 'none') return true
  if (a.type === 'list' && b.type === 'list') {
    if (a.value.length !== b.value.length) return false
    return a.value.every((v, i) => deepEqual(v, b.value[i]))
  }
  return false
}

function applyIndex(v: PyValue, idx: PyValue): PyValue {
  if (v.type === 'string') {
    let i = toNum(idx) ?? 0
    if (i < 0) i = v.value.length + i
    return mkString(v.value[i] || '')
  }
  if (v.type === 'list') {
    let i = toNum(idx) ?? 0
    if (i < 0) i = v.value.length + i
    return v.value[i] || pyNone
  }
  return pyNone
}

function applySlice(v: PyValue, start: number | null, end: number | null, step: number): PyValue {
  if (step === 0) throw new Error('slice step cannot be zero')
  if (v.type === 'string') {
    const chars = v.value.split('')
    const n = chars.length
    let s = start ?? 0, e = end ?? n
    if (s < 0) s = Math.max(0, n + s)
    if (e < 0) e = n + e
    const result: string[] = []
    if (step > 0) for (let i = s; i < e; i += step) if (chars[i] !== undefined) result.push(chars[i])
    else for (let i = s; i > e; i += step) if (chars[i] !== undefined) result.push(chars[i])
    return mkString(result.join(''))
  }
  if (v.type === 'list') {
    const list = v.value
    const n = list.length
    let s = start ?? 0, e = end ?? n
    if (s < 0) s = Math.max(0, n + s)
    if (e < 0) e = n + e
    const result: PyValue[] = []
    if (step > 0) for (let i = s; i < e; i += step) if (list[i] !== undefined) result.push(list[i])
    else for (let i = s; i > e; i += step) if (list[i] !== undefined) result.push(list[i])
    return mkList(result)
  }
  return v
}

// ========== 方法调用

function callMethod(v: PyValue, method: string, args: PyValue[]): PyValue {
  // 字符串方法
  if (v.type === 'string') {
    switch (method) {
      case 'strip': return mkString(v.value.trim())
      case 'upper': return mkString(v.value.toUpperCase())
      case 'lower': return mkString(v.value.toLowerCase())
      case 'title': return mkString(v.value.replace(/\w\S*/g, t => t[0].toUpperCase() + t.slice(1).toLowerCase()))
      case 'capitalize': return mkString(v.value.charAt(0).toUpperCase() + v.value.slice(1).toLowerCase())
      case 'replace': return mkString(v.value.split(pyStr(args[0])).join(pyStr(args[1])))
      case 'split': {
        const sep = args[0] ? pyStr(args[0]) : ' '
        return mkList(v.value.split(sep).map(s => mkString(s)))
      }
      case 'join': {
        const parts: string[] = []
        if (args[0] && args[0].type === 'list') {
          for (const item of args[0].value) parts.push(pyStr(item))
        }
        return mkString(parts.join(v.value))
      }
      case 'find': return mkNumber(v.value.indexOf(pyStr(args[0])))
      case 'count': return mkNumber(v.value.split(pyStr(args[0])).length - 1)
      case 'startswith': return mkBool(v.value.startsWith(pyStr(args[0])))
      case 'endswith': return mkBool(v.value.endsWith(pyStr(args[0])))
      case 'isalpha': return mkBool(/^[A-Za-z\u4e00-\u9fa5]+$/.test(v.value))
      case 'isdigit': return mkBool(/^[0-9]+$/.test(v.value))
      case 'isspace': return mkBool(/^\s+$/.test(v.value))
      case 'len': return mkNumber(v.value.length)
      case 'format': {
        // 简化: {0} {1} ... 替换
        let s = v.value
        for (let i = 0; i < args.length; i++) s = s.replace(new RegExp('\\{' + i + '\\}', 'g'), pyStr(args[i]))
        // 也支持 {} 顺序替换
        s = s.replace(/{}/g, (m) => pyStr(args.shift() || pyNone))
        return mkString(s)
      }
    }
  }
  // 列表方法
  if (v.type === 'list') {
    switch (method) {
      case 'append': v.value.push(args[0]); return pyNone
      case 'len': return mkNumber(v.value.length)
      case 'pop': return v.value.pop() || pyNone
    }
  }
  // 数字/其他
  return pyNone
}

// ========== 内置函数

function callBuiltin(name: string, args: PyValue[], env: Env): PyValue {
  switch (name) {
    case 'print': return pyNone // print 在语句级别处理
    case 'len':
      if (args[0].type === 'string') return mkNumber(args[0].value.length)
      if (args[0].type === 'list') return mkNumber(args[0].value.length)
      return mkNumber(0)
    case 'str': return mkString(pyStr(args[0]))
    case 'int': {
      const n = toNum(args[0])
      return mkNumber(n !== null ? Math.trunc(n) : 0)
    }
    case 'float': return mkNumber(toNum(args[0]) ?? 0)
    case 'type': return mkString("<class '" + (args[0]?.type || 'none') + "'>")
    case 'repr': return mkString(pyRepr(args[0]))
    case 'sum': {
      if (args[0].type === 'list') {
        let total = 0
        for (const item of args[0].value) {
          const n = toNum(item)
          if (n !== null) total += n
        }
        return mkNumber(total)
      }
      return mkNumber(0)
    }
    case 'max': {
      if (args[0]?.type === 'list') {
        let m = -Infinity
        for (const item of args[0].value) {
          const n = toNum(item); if (n !== null && n > m) m = n
        }
        return mkNumber(m === -Infinity ? 0 : m)
      }
      // max(a, b, c...)
      let mx = -Infinity
      for (const a of args) { const n = toNum(a); if (n !== null && n > mx) mx = n }
      return mkNumber(mx === -Infinity ? 0 : mx)
    }
    case 'min': {
      if (args[0]?.type === 'list') {
        let m = Infinity
        for (const item of args[0].value) { const n = toNum(item); if (n !== null && n < m) m = n }
        return mkNumber(m === Infinity ? 0 : m)
      }
      let mn = Infinity
      for (const a of args) { const n = toNum(a); if (n !== null && n < mn) mn = n }
      return mkNumber(mn === Infinity ? 0 : mn)
    }
    case 'sorted': {
      if (args[0]?.type === 'list') {
        const sorted = [...args[0].value].map(toNum).filter((n): n is number => n !== null).sort((a, b) => a - b)
        return mkList(sorted.map(n => mkNumber(n)))
      }
      return mkList([])
    }
    case 'list': {
      if (args[0]?.type === 'list') return args[0]
      if (args[0]?.type === 'string') return mkList(args[0].value.split('').map(s => mkString(s)))
      return mkList([])
    }
    case 'abs': return mkNumber(Math.abs(toNum(args[0]) ?? 0))
    case 'round': return mkNumber(Math.round((toNum(args[0]) ?? 0) * 100) / 100)
    case 'range': {
      let start = 0, end = 0, step = 1
      if (args.length === 1) end = toNum(args[0]) ?? 0
      else if (args.length >= 2) { start = toNum(args[0]) ?? 0; end = toNum(args[1]) ?? 0 }
      if (args.length === 3) step = toNum(args[2]) ?? 1
      const result: PyValue[] = []
      if (step > 0) for (let i = start; i < end; i += step) result.push(mkNumber(i))
      else for (let i = start; i > end; i += step) result.push(mkNumber(i))
      return mkList(result)
    }
    default:
      return pyNone
  }
}

// ========== 环境: 简化版变量表

class Env {
  private vars: Record<string, PyValue> = {}
  has(name: string): boolean { return name in this.vars }
  get(name: string): PyValue | undefined { return this.vars[name] }
  set(name: string, value: PyValue): void { this.vars[name] = value }
  clone(): Env { const e = new Env(); e.vars = { ...this.vars }; return e }
}

// ========== 语句执行器

function parseArgs(tokens: Token[], env: Env): PyValue[] {
  // 用于 print 多参数解析（处理 .method 等更复杂情况，用独立parser
  const parser = new Parser(tokens, env)
  const args: PyValue[] = []
  if (parser.tokens.length > 0) {
    args.push(parser.parseExpr())
    while (parser.peek()?.type === ',') { parser.eat(','); args.push(parser.parseExpr()) }
  }
  return args
}

// 将一行解析 print 的参数（print已经在parsePrimary中完成，此处用于提取 tokens
function evalExpr(expr: string, env: Env): PyValue {
  const tokens = tokenize(expr)
  if (tokens.length === 0) return pyNone
  const parser = new Parser(tokens, env)
  return parser.parseExpr()
}

// 解析并求值 print参数（处理多参数，忽略字符串中的逗号）
function parsePrintArgs(argStr: string, env: Env): PyValue[] {
  // 手写：按逗号split，但忽略字符串中的逗号
  const args: PyValue[] = []
  let depth = 0, inStr: string | null = null
  let current = ''
  const parts: string[] = []
  for (let i = 0; i < argStr.length; i++) {
    const c = argStr[i]
    if (inStr) {
      current += c
      if (c === inStr) inStr = null
      continue
    }
    if (c === '"' || c === "'") { inStr = c; current += c; continue }
    if (c === '(' || c === '[' || c === '{') { depth++; current += c; continue }
    if (c === ')' || c === ']' || c === '}') { depth--; current += c; continue }
    if (c === ',' && depth === 0) { parts.push(current); current = ''; continue }
    current += c
  }
  if (current.trim()) parts.push(current)
  for (const part of parts) {
    args.push(evalExpr(part.trim(), env))
  }
  return args
}

// ========== 块执行器：支持缩进块

type StmtLine = { indent: number; content: string }

function splitIntoLines(code: string): StmtLine[] {
  const lines = code.split('\n')
  const result: StmtLine[] = []
  for (const line of lines) {
    // 计算缩进（用空格数）
    let indent = 0
    while (indent < line.length && line[indent] === ' ') indent++
    // tab 当作 4
    let tabIndent = 0
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) continue
    result.push({ indent, content: trimmed })
  }
  return result
}

// 从 startIdx 开始执行一个块（含多行，按缩进层级）
function executeBlock(lines: StmtLine[], startIdx: number, env: Env, output: string[], blockIndent: number): number {
  let i = startIdx
  while (i < lines.length) {
    const line = lines[i]
    if (line.indent < blockIndent) break
    if (line.indent > blockIndent) { i++; continue } // 更内层，跳过（应该不会发生）
    const result = executeStatement(line, lines, i, env, output)
    i = result.nextIdx
    if (result.breakLoop) break
  }
  return i
}

type ExecResult = { nextIdx: number; breakLoop?: boolean }

function executeStatement(line: StmtLine, allLines: StmtLine[], idx: number, env: Env, output: string[]): ExecResult {
  const content = line.content
  // print 语句
  if (content.startsWith('print(')) {
    const m = content.match(/^print\(([\s\S]*)\)\s*$/)
    if (m) {
      const args = parsePrintArgs(m[1], env)
    if (args.length === 0) {
      output.push('')
    } else {
      output.push(args.map(a => pyStr(a)).join(' '))
    }
    return { nextIdx: idx + 1 }
  }
  }
  // for 循环: for var in iterable:
  const forMatch = content.match(/^for\s+(\w+)\s+in\s+(.+?)\s*:\s*$/)
  if (forMatch) {
    const varName = forMatch[1]
    const iterable = evalExpr(forMatch[2], env)
    const bodyIndent = line.indent + 4
    let i = idx + 1
    // 收集循环体所有行
    const bodyLines: StmtLine[] = []
    while (i < allLines.length && allLines[i].indent >= bodyIndent) {
      bodyLines.push(allLines[i])
      i++
    }
    // 执行循环
    if (iterable.type === 'list') {
      for (const item of iterable.value) {
        env.set(varName, item)
        let j = 0
        while (j < bodyLines.length) {
          const res = executeStatement(bodyLines[j], bodyLines, j, env, output)
          j = res.nextIdx
          if (res.breakLoop) break
        }
      }
    }
    return { nextIdx: i }
  }
  // while 循环: while cond:
  const whileMatch = content.match(/^while\s+(.+?)\s*:\s*$/)
  if (whileMatch) {
    const condExpr = whileMatch[1]
    const bodyIndent = line.indent + 4
    let i = idx + 1
    const bodyLines: StmtLine[] = []
    while (i < allLines.length && allLines[i].indent >= bodyIndent) {
      bodyLines.push(allLines[i])
      i++
    }
    let safety = 1000
    while (isTruthy(evalExpr(condExpr, env)) && safety-- > 0) {
      let j = 0
      while (j < bodyLines.length) {
        const res = executeStatement(bodyLines[j], bodyLines, j, env, output)
        j = res.nextIdx
        if (res.breakLoop) break
      }
    }
    return { nextIdx: i }
  }
  // if / elif / else
  const ifMatch = content.match(/^if\s+(.+?)\s*:\s*$/)
  if (ifMatch) {
    const cond = evalExpr(ifMatch[1], env)
    const bodyIndent = line.indent + 4
    // 找 if / elif / else 结构
    let i = idx + 1
    const ifBody: StmtLine[] = []
    while (i < allLines.length && allLines[i].indent >= bodyIndent && !/^(elif|else)\b/.test(allLines[i].content)) {
      ifBody.push(allLines[i])
      i++
    }
    // 如果 if 条件为真，执行 if 体
    if (isTruthy(cond)) {
      let j = 0
      while (j < ifBody.length) {
        const res = executeStatement(ifBody[j], ifBody, j, env, output)
        j = res.nextIdx
        if (res.breakLoop) break
      }
      // 跳过 elif 和 else 块
      while (i < allLines.length && (allLines[i].indent >= bodyIndent || /^(elif|else)\b/.test(allLines[i].content))) {
        // 找到整个 elif/else 块并跳过
        const nextLine = allLines[i]
        if (/^elif\s/.test(nextLine.content)) {
          const elifBodyIndent = nextLine.indent + 4
          i++
          while (i < allLines.length && allLines[i].indent >= elifBodyIndent && !/^(elif|else)\b/.test(allLines[i].content)) i++
        } else if (/^else\s*:/.test(nextLine.content)) {
          const elseBodyIndent = nextLine.indent + 4
          i++
          while (i < allLines.length && allLines[i].indent >= elseBodyIndent && !/^(elif|else)\b/.test(allLines[i].content)) i++
        } else break
      }
      return { nextIdx: i }
    } else {
      // 尝试 elif
      let elifIdx = i
      let handled = false
      while (elifIdx < allLines.length && /^elif\s/.test(allLines[elifIdx].content)) {
        const elifLine = allLines[elifIdx]
        const elifMatch = elifLine.content.match(/^elif\s+(.+?)\s*:\s*$/)
        if (!elifMatch) { elifIdx++; continue }
        const elifCond = evalExpr(elifMatch[1], env)
        const elifBodyIndent = elifLine.indent + 4
        // 收集 elif body
        let j = elifIdx + 1
        const elifBody: StmtLine[] = []
        while (j < allLines.length && allLines[j].indent >= elifBodyIndent && !/^(elif|else)\b/.test(allLines[j].content)) {
          elifBody.push(allLines[j]); j++
        }
        if (isTruthy(elifCond)) {
          let k = 0
          while (k < elifBody.length) {
            const res = executeStatement(elifBody[k], elifBody, k, env, output)
            k = res.nextIdx
            if (res.breakLoop) break
          }
          // 跳过后续 elif/else
          while (j < allLines.length && (allLines[j].indent >= elifBodyIndent || /^(elif|else)\b/.test(allLines[j].content))) j++
          return { nextIdx: j }
        }
        elifIdx = j
      }
      // else
      if (elifIdx < allLines.length && /^else\s*:/.test(allLines[elifIdx].content)) {
        const elseLine = allLines[elifIdx]
        const elseBodyIndent = elseLine.indent + 4
        let j = elifIdx + 1
        const elseBody: StmtLine[] = []
        while (j < allLines.length && allLines[j].indent >= elseBodyIndent) {
          elseBody.push(allLines[j]); j++
        }
        let k = 0
        while (k < elseBody.length) {
          const res = executeStatement(elseBody[k], elseBody, k, env, output)
          k = res.nextIdx
          if (res.breakLoop) break
        }
        return { nextIdx: j }
      }
      return { nextIdx: elifIdx }
    }
  }
  // break
  if (content === 'break') return { nextIdx: idx + 1, breakLoop: true }
  // continue 简化: 就当是继续下一轮，没有特殊处理
  // 赋值
  const assignMatch = content.match(/^(\w+)\s*=\s*(.+)$/)
  if (assignMatch) {
    const name = assignMatch[1]
    const value = evalExpr(assignMatch[2], env)
    env.set(name, value)
    return { nextIdx: idx + 1 }
  }
  // 方法调用作为语句 (如 list.append(x))
  const methodStmtMatch = content.match(/^(\w+)(\.[a-zA-Z_][a-zA-Z0-9_]*\(.*\))\s*$/)
  if (methodStmtMatch) {
    evalExpr(content, env)
    return { nextIdx: idx + 1 }
  }
  // 纯表达式
  evalExpr(content, env)
  return { nextIdx: idx + 1 }
}

// ========== 主入口

export function runPython(code: string): string {
  const env = new Env()
  const lines = splitIntoLines(code)
  const output: string[] = []
  let i = 0
  while (i < lines.length) {
    const result = executeStatement(lines[i], lines, i, env, output)
    i = result.nextIdx
  }
  return output.join('\n')
}

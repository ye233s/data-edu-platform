// 简易 Python 代码执行器
// 支持课程中常用的 Python 语法

export type PyValue =
  | { type: 'string'; value: string }
  | { type: 'number'; value: number }
  | { type: 'bool'; value: boolean }
  | { type: 'list'; value: PyValue[] }
  | { type: 'none' }

function mkString(v: string): PyValue { return { type: 'string', value: v } }
function mkNumber(v: number): PyValue { return { type: 'number', value: v } }
function mkBool(v: boolean): PyValue { return { type: 'bool', value: v } }
function mkList(v: PyValue[]): PyValue { return { type: 'list', value: v } }
const pyNone: PyValue = { type: 'none' }

function toStr(v: PyValue): string {
  if (v.type === 'string') return v.value
  if (v.type === 'number') return String(v.value)
  if (v.type === 'bool') return v.value ? 'True' : 'False'
  if (v.type === 'none') return 'None'
  if (v.type === 'list') return '[' + v.value.map(toStr).join(', ') + ']'
  return String(v)
}

function toRepr(v: PyValue): string {
  if (v.type === 'string') return "'" + v.value + "'"
  return toStr(v)
}

function toNum(v: PyValue): number | null {
  if (v.type === 'number') return v.value
  if (v.type === 'bool') return v.value ? 1 : 0
  if (v.type === 'string') {
    const n = parseFloat(v.value)
    return isNaN(n) ? null : n
  }
  return null
}

function isTruthy(v: PyValue): boolean {
  if (v.type === 'string') return v.value.length > 0
  if (v.type === 'number') return v.value !== 0
  if (v.type === 'bool') return v.value
  if (v.type === 'list') return v.value.length > 0
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

// ========== 词法分析 ==========

type Token =
  | { type: 'str'; value: string }
  | { type: 'num'; value: number }
  | { type: 'id'; value: string }
  | { type: 'op'; value: string }
  | { type: 'punct'; value: string }

function tokenize(input: string): Token[] {
  const tokens: Token[] = []
  let i = 0
  while (i < input.length) {
    const ch = input[i]
    if (ch === ' ' || ch === '\t') { i++; continue }
    // 字符串
    if (ch === '"' || ch === "'") {
      const quote = ch
      let s = ''
      i++
      while (i < input.length && input[i] !== quote) { s += input[i]; i++ }
      i++
      tokens.push({ type: 'str', value: s })
      continue
    }
    // 数字
    if (/[0-9]/.test(ch)) {
      let num = ''
      while (i < input.length && /[0-9.]/.test(input[i])) { num += input[i]; i++ }
      tokens.push({ type: 'num', value: parseFloat(num) })
      continue
    }
    // 标识符
    if (/[a-zA-Z_]/.test(ch)) {
      let id = ''
      while (i < input.length && /[a-zA-Z0-9_]/.test(input[i])) { id += input[i]; i++ }
      tokens.push({ type: 'id', value: id })
      continue
    }
    // 两字符运算符
    const two = input.slice(i, i + 2)
    if (['**', '//', '==', '!=', '<=', '>='].includes(two)) {
      tokens.push({ type: 'op', value: two })
      i += 2
      continue
    }
    // 单字符
    if ('+-*/%=<>()[]{}.,:'.includes(ch)) {
      tokens.push({ type: 'punct', value: ch })
      i++
      continue
    }
    i++
  }
  return tokens
}

// ========== 环境 ==========

class Env {
  private vars: Map<string, PyValue> = new Map()
  has(name: string): boolean { return this.vars.has(name) }
  get(name: string): PyValue { return this.vars.get(name) || pyNone }
  set(name: string, value: PyValue): void { this.vars.set(name, value) }
}

// ========== 表达式解析（递归下降）==========

class Parser {
  tokens: Token[]
  pos: number
  env: Env

  constructor(tokens: Token[], env: Env) {
    this.tokens = tokens
    this.pos = 0
    this.env = env
  }

  peek(offset = 0): Token | null { return this.tokens[this.pos + offset] || null }

  eat(): Token {
    const tok = this.tokens[this.pos]
    if (!tok) throw new Error('Unexpected end')
    this.pos++
    return tok
  }

  matchId(value: string): boolean {
    const t = this.peek()
    return t !== null && t.type === 'id' && t.value === value
  }

  matchPunct(value: string): boolean {
    const t = this.peek()
    return t !== null && t.type === 'punct' && t.value === value
  }

  // 表达式入口：or
  parseExpr(): PyValue { return this.parseOr() }

  parseOr(): PyValue {
    let left = this.parseAnd()
    while (this.matchId('or')) {
      this.eat()
      const right = this.parseAnd()
      left = mkBool(isTruthy(left) || isTruthy(right))
    }
    return left
  }

  parseAnd(): PyValue {
    let left = this.parseNot()
    while (this.matchId('and')) {
      this.eat()
      const right = this.parseNot()
      left = mkBool(isTruthy(left) && isTruthy(right))
    }
    return left
  }

  parseNot(): PyValue {
    if (this.matchId('not')) {
      this.eat()
      return mkBool(!isTruthy(this.parseComparison()))
    }
    return this.parseComparison()
  }

  parseComparison(): PyValue {
    let left = this.parseAdditive()
    while (true) {
      const t = this.peek()
      if (t === null) break
      if (t.type === 'id' && t.value === 'in') {
        this.eat()
        const right = this.parseAdditive()
        if (right.type === 'list') {
          left = mkBool(right.value.some(v => deepEqual(v, left)))
        } else if (right.type === 'string') {
          left = mkBool(right.value.includes(toStr(left)))
        } else {
          left = mkBool(false)
        }
        continue
      }
      if (t.type === 'id' && t.value === 'not' && this.peek(1)?.type === 'id' && this.peek(1)?.value === 'in') {
        this.eat(); this.eat()
        const right = this.parseAdditive()
        if (right.type === 'list') {
          left = mkBool(!right.value.some(v => deepEqual(v, left)))
        } else if (right.type === 'string') {
          left = mkBool(!right.value.includes(toStr(left)))
        } else {
          left = mkBool(false)
        }
        continue
      }
      if (t.type === 'op' && ['==', '!=', '<', '>', '<=', '>='].includes(t.value)) {
        this.eat()
        const right = this.parseAdditive()
        let result = false
        if (left.type === 'number' && right.type === 'number') {
          switch (t.value) {
            case '==': result = left.value === right.value; break
            case '!=': result = left.value !== right.value; break
            case '<': result = left.value < right.value; break
            case '>': result = left.value > right.value; break
            case '<=': result = left.value <= right.value; break
            case '>=': result = left.value >= right.value; break
          }
        } else if (left.type === 'string' && right.type === 'string') {
          switch (t.value) {
            case '==': result = left.value === right.value; break
            case '!=': result = left.value !== right.value; break
            case '<': result = left.value < right.value; break
            case '>': result = left.value > right.value; break
            case '<=': result = left.value <= right.value; break
            case '>=': result = left.value >= right.value; break
          }
        } else {
          const sa = toStr(left), sb = toStr(right)
          if (t.value === '==') result = sa === sb
          else if (t.value === '!=') result = sa !== sb
          else if (t.value === '<') result = sa < sb
          else if (t.value === '>') result = sa > sb
          else if (t.value === '<=') result = sa <= sb
          else if (t.value === '>=') result = sa >= sb
        }
        left = mkBool(result)
        continue
      }
      break
    }
    return left
  }

  parseAdditive(): PyValue {
    let left = this.parseMultiplicative()
    while (true) {
      const t = this.peek()
      if (t === null || t.type !== 'punct' || (t.value !== '+' && t.value !== '-')) break
      this.eat()
      const right = this.parseMultiplicative()
      if (left.type === 'number' && right.type === 'number') {
        left = mkNumber(t.value === '+' ? left.value + right.value : left.value - right.value)
      } else if (left.type === 'string' && right.type === 'string') {
        if (t.value === '+') left = mkString(left.value + right.value)
        else throw new Error('字符串不支持减法')
      } else if (left.type === 'list' && right.type === 'list' && t.value === '+') {
        left = mkList([...left.value, ...right.value])
      } else {
        const a = toNum(left), b = toNum(right)
        if (a !== null && b !== null) {
          left = mkNumber(t.value === '+' ? a + b : a - b)
        } else if (t.value === '+') {
          left = mkString(toStr(left) + toStr(right))
        } else {
          left = mkString(toStr(left) + t.value + toStr(right))
        }
      }
    }
    return left
  }

  parseMultiplicative(): PyValue {
    let left = this.parsePower()
    while (true) {
      const t = this.peek()
      if (t === null || t.type !== 'punct' || !['*', '/'].includes(t.value)) break
      this.eat()
      const right = this.parsePower()
      if (left.type === 'number' && right.type === 'number') {
        left = mkNumber(t.value === '*' ? left.value * right.value : left.value / right.value)
      } else if (left.type === 'string' && right.type === 'number' && t.value === '*') {
        left = mkString(left.value.repeat(Math.max(0, Math.floor(right.value))))
      } else {
        const a = toNum(left), b = toNum(right)
        if (a !== null && b !== null) {
          left = mkNumber(t.value === '*' ? a * b : a / b)
        } else {
          left = mkNumber(0)
        }
      }
    }
    return left
  }

  parsePower(): PyValue {
    const left = this.parseUnary()
    const t = this.peek()
    if (t && t.type === 'op' && t.value === '**') {
      this.eat()
      const right = this.parsePower()
      const a = toNum(left), b = toNum(right)
      if (a !== null && b !== null) return mkNumber(Math.pow(a, b))
      return mkNumber(0)
    }
    return left
  }

  parseUnary(): PyValue {
    const t = this.peek()
    if (t && t.type === 'punct' && (t.value === '-' || t.value === '+')) {
      this.eat()
      const v = this.parseUnary()
      if (v.type === 'number') return mkNumber(t.value === '-' ? -v.value : v.value)
      return v
    }
    return this.parsePostfix()
  }

  parsePostfix(): PyValue {
    let v = this.parsePrimary()
    while (true) {
      const t = this.peek()
      if (t === null) break
      // 索引 / 切片
      if (t.type === 'punct' && t.value === '[') {
        this.eat()
        // 判断是否是切片（内部有冒号）
        let isSlice = false
        for (let j = this.pos; j < this.tokens.length; j++) {
          const tok = this.tokens[j]
          if (tok.type === 'punct' && tok.value === ']') break
          if (tok.type === 'punct' && tok.value === ':') { isSlice = true; break }
        }
        if (isSlice) {
          let start: number | null = null, end: number | null = null
          if (this.peek()?.type !== 'punct' || this.peek()?.value !== ':') {
            const sv = toNum(this.parseExpr())
            if (sv !== null) start = sv
          }
          if (this.peek()?.type === 'punct' && this.peek()?.value === ':') this.eat()
          if ((this.peek()?.type ?? '') !== 'punct' || this.peek()?.value !== ']') {
            const ev = toNum(this.parseExpr())
            if (ev !== null) end = ev
          }
          this.eat()
          v = applySlice(v, start, end)
        } else {
          const idx = this.parseExpr()
          this.eat()
          v = applyIndex(v, idx)
        }
        continue
      }
      // 方法调用
      if (t.type === 'punct' && t.value === '.') {
        this.eat()
        const methodTok = this.eat()
        if (methodTok.type !== 'id') throw new Error('Expected method name')
        const methodName = methodTok.value
        this.eat() // eat (
        const args: PyValue[] = []
        if (this.peek()?.type !== 'punct' || this.peek()?.value !== ')') {
          args.push(this.parseExpr())
          while (this.peek()?.type === 'punct' && this.peek()?.value === ',') {
            this.eat(); args.push(this.parseExpr())
          }
        }
        this.eat() // eat )
        v = callMethod(v, methodName, args)
        continue
      }
      break
    }
    return v
  }

  parsePrimary(): PyValue {
    const t = this.peek()
    if (t === null) return pyNone
    // 字符串
    if (t.type === 'str') { this.eat(); return mkString(t.value) }
    // 数字
    if (t.type === 'num') { this.eat(); return mkNumber(t.value) }
    // 列表
    if (t.type === 'punct' && t.value === '[') {
      this.eat()
      const items: PyValue[] = []
      const next = this.peek()
      if (next && next.type === 'punct' && next.value === ']') {
        this.eat(); return mkList(items)
      }
      items.push(this.parseExpr())
      while (this.peek()?.type === 'punct' && this.peek()?.value === ',') {
        this.eat()
        if (this.peek()?.type === 'punct' && this.peek()?.value === ']') break
        items.push(this.parseExpr())
      }
      this.eat()
      return mkList(items)
    }
    // 括号
    if (t.type === 'punct' && t.value === '(') {
      this.eat()
      const v = this.parseExpr()
      this.eat()
      return v
    }
    // 关键字 True/False/None
    if (t.type === 'id') {
      if (t.value === 'True') { this.eat(); return mkBool(true) }
      if (t.value === 'False') { this.eat(); return mkBool(false) }
      if (t.value === 'None') { this.eat(); return pyNone }
      // 函数调用
      this.eat()
      const name = t.value
      if (this.peek()?.type === 'punct' && this.peek()?.value === '(') {
        this.eat()
        const args: PyValue[] = []
        if (this.peek()?.type !== 'punct' || this.peek()?.value !== ')') {
          args.push(this.parseExpr())
          while (this.peek()?.type === 'punct' && this.peek()?.value === ',') {
            this.eat(); args.push(this.parseExpr())
          }
        }
        this.eat()
        return callBuiltin(name, args)
      }
      // 变量
      if (this.env.has(name)) return this.env.get(name)
      return pyNone
    }
    this.eat()
    return pyNone
  }
}

// ========== 索引、切片 ==========

function applyIndex(v: PyValue, idx: PyValue): PyValue {
  const i = toNum(idx) ?? 0
  if (v.type === 'string') {
    const pos = i < 0 ? v.value.length + i : i
    return mkString(v.value[pos] || '')
  }
  if (v.type === 'list') {
    const pos = i < 0 ? v.value.length + i : i
    return v.value[pos] || pyNone
  }
  return pyNone
}

function applySlice(v: PyValue, start: number | null, end: number | null): PyValue {
  if (v.type === 'string') {
    const n = v.value.length
    let s = start ?? 0, e = end ?? n
    if (s < 0) s = Math.max(0, n + s)
    if (e < 0) e = n + e
    return mkString(v.value.slice(s, e))
  }
  if (v.type === 'list') {
    const n = v.value.length
    let s = start ?? 0, e = end ?? n
    if (s < 0) s = Math.max(0, n + s)
    if (e < 0) e = n + e
    return mkList(v.value.slice(s, e))
  }
  return v
}

// ========== 方法调用 ==========

function callMethod(v: PyValue, method: string, args: PyValue[]): PyValue {
  if (v.type === 'string') {
    switch (method) {
      case 'strip': return mkString(v.value.trim())
      case 'upper': return mkString(v.value.toUpperCase())
      case 'lower': return mkString(v.value.toLowerCase())
      case 'title': return mkString(v.value.replace(/\w\S*/g, t => t[0].toUpperCase() + t.slice(1).toLowerCase()))
      case 'capitalize': return mkString(v.value.charAt(0).toUpperCase() + v.value.slice(1).toLowerCase())
      case 'replace': return mkString(v.value.split(toStr(args[0])).join(toStr(args[1])))
      case 'split': {
        const sep = args[0] ? toStr(args[0]) : ' '
        return mkList(v.value.split(sep).map(s => mkString(s)))
      }
      case 'join': {
        if (args[0] && args[0].type === 'list') {
          return mkString(args[0].value.map(toStr).join(v.value))
        }
        return mkString('')
      }
      case 'find': return mkNumber(v.value.indexOf(toStr(args[0])))
      case 'count': return mkNumber(v.value.split(toStr(args[0])).length - 1)
      case 'startswith': return mkBool(v.value.startsWith(toStr(args[0])))
      case 'endswith': return mkBool(v.value.endsWith(toStr(args[0])))
      case 'isdigit': return mkBool(/^[0-9]+$/.test(v.value))
      case 'isalpha': return mkBool(/^[A-Za-z\u4e00-\u9fa5]+$/.test(v.value))
      case 'isspace': return mkBool(/^\s+$/.test(v.value))
    }
  }
  if (v.type === 'list') {
    switch (method) {
      case 'append': v.value.push(args[0]); return pyNone
      case 'pop': return v.value.pop() || pyNone
      case 'len': return mkNumber(v.value.length)
    }
  }
  return pyNone
}

// ========== 内置函数 ==========

function callBuiltin(name: string, args: PyValue[]): PyValue {
  switch (name) {
    case 'len':
      if (args[0].type === 'string') return mkNumber(args[0].value.length)
      if (args[0].type === 'list') return mkNumber(args[0].value.length)
      return mkNumber(0)
    case 'str': return mkString(toStr(args[0]))
    case 'int': {
      const n = toNum(args[0])
      return mkNumber(n !== null ? Math.trunc(n) : 0)
    }
    case 'float': return mkNumber(toNum(args[0]) ?? 0)
    case 'repr': return mkString(toRepr(args[0]))
    case 'type': return mkString("<class '" + (args[0]?.type || 'none') + "'>")
    case 'sum': {
      if (args[0].type === 'list') {
        let total = 0
        for (const item of args[0].value) {
          const n = toNum(item); if (n !== null) total += n
        }
        return mkNumber(total)
      }
      return mkNumber(0)
    }
    case 'max': {
      if (args[0]?.type === 'list') {
        let m = -Infinity
        for (const item of args[0].value) { const n = toNum(item); if (n !== null && n > m) m = n }
        return mkNumber(m === -Infinity ? 0 : m)
      }
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
        const nums = args[0].value.map(toNum).filter((n): n is number => n !== null).sort((a, b) => a - b)
        return mkList(nums.map(n => mkNumber(n)))
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
  }
  return pyNone
}

// ========== 表达式求值快捷入口 ==========

function evalExpr(expr: string, env: Env): PyValue {
  const tokens = tokenize(expr)
  if (tokens.length === 0) return pyNone
  const parser = new Parser(tokens, env)
  return parser.parseExpr()
}

// 解析 print 的多参数（忽略字符串内部逗号）
function parsePrintArgs(argStr: string, env: Env): PyValue[] {
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
  for (const part of parts) args.push(evalExpr(part.trim(), env))
  return args
}

// ========== 语句执行 ==========

type StmtLine = { indent: number; content: string }

function splitLines(code: string): StmtLine[] {
  const lines = code.split('\n')
  const result: StmtLine[] = []
  for (const line of lines) {
    let indent = 0
    while (indent < line.length && line[indent] === ' ') indent++
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) continue
    result.push({ indent, content: trimmed })
  }
  return result
}

// 从 idx 开始执行，跳过缩进更深的行
function executeBlock(lines: StmtLine[], startIdx: number, env: Env, output: string[], blockIndent: number): number {
  let i = startIdx
  while (i < lines.length) {
    const line = lines[i]
    if (line.indent < blockIndent) break
    if (line.indent > blockIndent) { i++; continue }
    const res = executeStatement(line, lines, i, env, output)
    i = res.nextIdx
    if (res.breakLoop) break
  }
  return i
}

type ExecResult = { nextIdx: number; breakLoop?: boolean }

function executeStatement(line: StmtLine, allLines: StmtLine[], idx: number, env: Env, output: string[]): ExecResult {
  const content = line.content
  // print
  if (content.startsWith('print(')) {
    const m = content.match(/^print\(([\s\S]*)\)\s*$/)
    if (m) {
      const inner = m[1].trim()
      if (inner === '') {
        output.push('')
      } else {
        const args = parsePrintArgs(inner, env)
        output.push(args.map(a => toStr(a)).join(' '))
      }
      return { nextIdx: idx + 1 }
    }
  }
  // for var in iterable:
  const forMatch = content.match(/^for\s+(\w+)\s+in\s+(.+?)\s*:\s*$/)
  if (forMatch) {
    const varName = forMatch[1]
    const iterable = evalExpr(forMatch[2], env)
    const bodyIndent = line.indent + 4
    let i = idx + 1
    const bodyLines: StmtLine[] = []
    while (i < allLines.length && allLines[i].indent >= bodyIndent) {
      bodyLines.push(allLines[i]); i++
    }
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
  // while cond:
  const whileMatch = content.match(/^while\s+(.+?)\s*:\s*$/)
  if (whileMatch) {
    const condExpr = whileMatch[1]
    const bodyIndent = line.indent + 4
    let i = idx + 1
    const bodyLines: StmtLine[] = []
    while (i < allLines.length && allLines[i].indent >= bodyIndent) {
      bodyLines.push(allLines[i]); i++
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
    let i = idx + 1
    const ifBody: StmtLine[] = []
    while (i < allLines.length && allLines[i].indent >= bodyIndent && !(allLines[i].indent === line.indent && /^(elif|else)\b/.test(allLines[i].content))) {
      ifBody.push(allLines[i]); i++
    }
    if (isTruthy(cond)) {
      let j = 0
      while (j < ifBody.length) {
        const res = executeStatement(ifBody[j], ifBody, j, env, output)
        j = res.nextIdx
        if (res.breakLoop) break
      }
      // 跳过 elif 和 else 块
      i = skipElifElse(allLines, i, line.indent)
      return { nextIdx: i }
    } else {
      // 尝试 elif
      let handled = false
      let elifIdx = i
      while (elifIdx < allLines.length && allLines[elifIdx].indent === line.indent && /^elif\s/.test(allLines[elifIdx].content)) {
        const elifLine = allLines[elifIdx]
        const em = elifLine.content.match(/^elif\s+(.+?)\s*:\s*$/)
        if (!em) { elifIdx++; continue }
        const elifCond = evalExpr(em[1], env)
        const ebIndent = elifLine.indent + 4
        let j = elifIdx + 1
        const elifBody: StmtLine[] = []
        while (j < allLines.length && allLines[j].indent >= ebIndent && !(allLines[j].indent === line.indent && /^(elif|else)\b/.test(allLines[j].content))) {
          elifBody.push(allLines[j]); j++
        }
        if (isTruthy(elifCond)) {
          let k = 0
          while (k < elifBody.length) {
            const res = executeStatement(elifBody[k], elifBody, k, env, output)
            k = res.nextIdx
            if (res.breakLoop) break
          }
          handled = true
          i = skipElifElse(allLines, j, line.indent)
          break
        }
        elifIdx = j
      }
      if (!handled) {
        // else
        if (elifIdx < allLines.length && allLines[elifIdx].indent === line.indent && /^else\s*:/.test(allLines[elifIdx].content)) {
          const elseIndent = allLines[elifIdx].indent + 4
          let j = elifIdx + 1
          const elseBody: StmtLine[] = []
          while (j < allLines.length && allLines[j].indent >= elseIndent) {
            elseBody.push(allLines[j]); j++
          }
          let k = 0
          while (k < elseBody.length) {
            const res = executeStatement(elseBody[k], elseBody, k, env, output)
            k = res.nextIdx
            if (res.breakLoop) break
          }
          i = j
        } else {
          i = elifIdx
        }
      }
      return { nextIdx: i }
    }
  }
  // break
  if (content === 'break') return { nextIdx: idx + 1, breakLoop: true }
  // 赋值
  const assignMatch = content.match(/^(\w+)\s*=\s*(.+)$/)
  if (assignMatch) {
    env.set(assignMatch[1], evalExpr(assignMatch[2], env))
    return { nextIdx: idx + 1 }
  }
  // 方法调用作为语句
  const methodStmt = content.match(/^(\w+)(\.[a-zA-Z_][a-zA-Z0-9_]*\(.*\))\s*$/)
  if (methodStmt) {
    evalExpr(content, env)
    return { nextIdx: idx + 1 }
  }
  // 纯表达式
  evalExpr(content, env)
  return { nextIdx: idx + 1 }
}

function skipElifElse(lines: StmtLine[], startIdx: number, baseIndent: number): number {
  let i = startIdx
  while (i < lines.length && lines[i].indent >= baseIndent) {
    if (lines[i].indent === baseIndent && /^(elif|else)\b/.test(lines[i].content)) {
      // elif/else 行本身也跳过
      i++
      const bodyIndent = baseIndent + 4
      while (i < lines.length && lines[i].indent >= bodyIndent && !(lines[i].indent === baseIndent && /^(elif|else)\b/.test(lines[i].content))) {
        i++
      }
      // 如果下一行是 elif/else 继续
      continue
    }
    if (lines[i].indent === baseIndent) break
    i++
  }
  return i
}

// ========== 主入口 ==========

export function runPython(code: string): string {
  const env = new Env()
  const lines = splitLines(code)
  const output: string[] = []
  let i = 0
  while (i < lines.length) {
    const res = executeStatement(lines[i], lines, i, env, output)
    i = res.nextIdx
  }
  return output.join('\n')
}

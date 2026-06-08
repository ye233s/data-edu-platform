// 简单的 Markdown 渲染器
export function renderMarkdown(text: string): string {
  if (!text) return ''
  
  return text
    // 标题
    .replace(/^### (.*$)/gim, '<h3 class="text-xl font-semibold mt-6 mb-3">$1</h3>')
    .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold mt-8 mb-4">$1</h2>')
    .replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold mt-10 mb-6">$1</h1>')
    
    // 粗体和斜体
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    
    // 代码块
    .replace(/```([\s\S]*?)```/g, (match, code) => {
      const trimmed = code.trim()
      return `<pre class="bg-gray-100 p-4 rounded-lg my-4 overflow-x-auto font-mono text-sm"><code>${trimmed.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>`
    })
    
    // 行内代码
    .replace(/`([^`]+)`/g, '<code class="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono">$1</code>')
    
    // 列表
    .replace(/^\- (.*$)/gim, '<li class="ml-4 mb-1">$1</li>')
    
    // 链接
    .replace(/\[([^\]]*)\]\(([^)]*)\)/g, '<a href="$2" class="text-blue-600 hover:underline" target="_blank">$1</a>')
    
    // 表格
    .replace(/^\|(.*)\|$/gim, (match, content) => {
      const cells = content.split('|').map(c => c.trim()).filter(c => c)
      return '<tr>' + cells.map(cell => `<td class="border border-gray-300 px-4 py-2">${cell}</td>`).join('') + '</tr>'
    })
    
    // 段落
    .replace(/^\s*$/gim, '</p><p>')
    .replace(/^(?!<[h|p|l|t|pre])(.*)$/gim, '<p class="mb-3">$1</p>')
    .replace(/^<\/p><p>/, '')
    
    // 清理多余的换行
    .replace(/\n\n+/g, '</p><p>')
}

// 简单的文本转HTML，处理换行
export function textToHtml(text: string): string {
  if (!text) return ''
  
  let html = text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
  
  // 处理标题
  html = html.replace(/^### (.*$)/gim, '<h3 class="text-xl font-semibold mt-6 mb-3 text-gray-800">$1</h3>')
  html = html.replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold mt-8 mb-4 text-gray-800">$1</h2>')
  html = html.replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold mt-10 mb-6 text-gray-800">$1</h1>')
  
  // 处理代码块
  html = html.replace(/```([\s\S]*?)```/g, (match, code) => {
    const trimmed = code.trim()
    return `<pre class="bg-gray-800 text-green-400 p-4 rounded-lg my-4 overflow-x-auto font-mono text-sm whitespace-pre-wrap"><code>${trimmed}</code></pre>`
  })
  
  // 处理行内代码
  html = html.replace(/`([^`]+)`/g, '<code class="bg-gray-100 text-purple-700 px-1 py-0.5 rounded text-sm font-mono">$1</code>')
  
  // 处理链接
  html = html.replace(/\[([^\]]*)\]\(([^)]*)\)/g, '<a href="$2" class="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 hover:underline font-medium" download>$1</a>')
  
  // 处理列表
  html = html.replace(/^\- (.*$)/gim, '<li class="ml-6 mb-2 list-disc">$1</li>')
  html = html.replace(/^\* (.*$)/gim, '<li class="ml-6 mb-2 list-disc">$1</li>')
  html = html.replace(/^\d+\. (.*$)/gim, '<li class="ml-6 mb-2 list-decimal">$1</li>')
  
  // 处理换行
  html = html.replace(/\n\n/g, '</p><p class="mb-4">')
  html = html.replace(/\n/g, '<br>')
  
  return html
}

// Минимальный рендерер для коротких теоретических врезок.
// Поддержка: **жирный**, `код`, переносы строк.

function renderInline(text, keyPrefix) {
  const parts = []
  // разбиваем по **bold** и `code`
  const regex = /(\*\*[^*]+\*\*|`[^`]+`)/g
  let last = 0
  let match
  let i = 0
  while ((match = regex.exec(text)) !== null) {
    if (match.index > last) parts.push(text.slice(last, match.index))
    const token = match[0]
    if (token.startsWith('**')) {
      parts.push(
        <strong key={`${keyPrefix}-b-${i}`} className="font-semibold text-foreground">
          {token.slice(2, -2)}
        </strong>
      )
    } else {
      parts.push(
        <code
          key={`${keyPrefix}-c-${i}`}
          className="rounded-md bg-secondary px-1.5 py-0.5 text-[0.85em] font-mono text-primary"
        >
          {token.slice(1, -1)}
        </code>
      )
    }
    last = match.index + token.length
    i++
  }
  if (last < text.length) parts.push(text.slice(last))
  return parts
}

export default function Markdown({ text, className = '' }) {
  const lines = text.split('\n')
  return (
    <div className={`theory leading-relaxed text-muted-foreground ${className}`}>
      {lines.map((line, idx) => (
        <p key={idx} className={line.trim() === '' ? 'h-2' : 'mb-1'}>
          {renderInline(line, idx)}
        </p>
      ))}
    </div>
  )
}

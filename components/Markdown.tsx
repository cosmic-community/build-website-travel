import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface MarkdownProps {
  content: string
  className?: string
}

export default function Markdown({ content, className }: MarkdownProps) {
  if (!content) return null

  return (
    <div className={`prose prose-neutral max-w-none prose-headings:font-serif prose-a:text-clay ${className || ''}`}>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  )
}
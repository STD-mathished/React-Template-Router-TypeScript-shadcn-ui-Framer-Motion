export default function CodeBlock({
  code,
  language,
}: {
  code: string
  language?: string
}) {
  return (
    <div className="relative">
      <pre className="rounded-xl border border-white/10 bg-black/50 p-4 overflow-x-auto text-sm leading-6">
        <code className={`language-${language ?? "text"}`}>{code}</code>
      </pre>
    </div>
  )
}

const KEYWORDS = [
  'Machine Learning',
  'Deep Learning',
  'Artificial Intelligence',
  'Reinforcement Learning',
  'Computer Vision',
  'Federated Learning',
  'Transformers',
  'TensorFlow',
  'PyTorch',
  'MLOps',
  'RAG',
  'NLP',
  'LLMs',
  'LLM',
  'vLLM',
  'AI',
  'ML',
]

const pattern = new RegExp(`\\b(${KEYWORDS.join('|')})\\b`, 'gi')

function HighlightKeywords({ text, className = '' }) {
  if (!text) return null
  const parts = text.split(pattern)

  return (
    <span className={className}>
      {parts.map((part, index) =>
        KEYWORDS.some((keyword) => keyword.toLowerCase() === part.toLowerCase()) ? (
          <strong key={`${part}-${index}`} className="font-semibold text-slate-900">
            {part}
          </strong>
        ) : (
          <span key={`${part}-${index}`}>{part}</span>
        ),
      )}
    </span>
  )
}

export default HighlightKeywords

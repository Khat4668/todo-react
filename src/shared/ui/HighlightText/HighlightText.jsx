import {memo} from 'react';

const HighlightText = ({text, query}) => {
  if (!query || !query.trim()) return text

  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const regex = new RegExp(`(${escaped})`, 'ig')

  return (
    <>
      {text.split(regex).map((part, i) =>
        part.match(regex) ? <mark key={i}>{part}</mark> : part
      )}
    </>
  )
}

export default memo(HighlightText)

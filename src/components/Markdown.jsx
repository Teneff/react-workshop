import React from 'react'
import { markdown } from 'markdown';

const Markdown = ({ children }) => {
  return (
    <div dangerouslySetInnerHTML={{
      __html: markdown.toHTML(children)
    }} />
  )
}

export default Markdown

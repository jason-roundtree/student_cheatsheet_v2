import React from 'react'
import HighlightInlineCode from '../src/components/HighlightInlineCode'

export default function formatDescription(content) {
    const descriptionBlock = []
    content.children.forEach(inlineBlock => {
        // console.log('inlineBlock: ', inlineBlock)
        if (inlineBlock._type === 'code_highlight') {
            descriptionBlock.push(
                <HighlightInlineCode 
                    code={inlineBlock.inline_code_highlight}
                    key={inlineBlock._key}
                />
            )
        } else {
            descriptionBlock.push(inlineBlock.text)
        }
    })
    // console.log('descriptionBlock: ', descriptionBlock)
    return descriptionBlock
}
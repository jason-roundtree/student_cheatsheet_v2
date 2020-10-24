import React from 'react'
import styled from 'styled-components'
import HighlightKbd from '../components/HighlightKbd'

const Unhighlighted = styled.span`
    padding: 5px;
    display: inline-block;
`

export default function formatKbd(content) {
    // console.log('content', content)
    const kbdBlock = []
    if (content.children.length > 1) {
        content.children.forEach(child => {
            // console.log('child: ', child)
            if (child._type === 'kbd_unhighlight') {
                kbdBlock.push(
                    <Unhighlighted key={child._key}>
                        {child.inline_kbd_unhighlight}
                    </Unhighlighted>
                )
            } else {
                kbdBlock.push(
                    <HighlightKbd 
                        key={child._key}
                        kbd={child.text}
                    />
                )
            }
        })
    } else {
        // console.log('content.children[0].text: ', content.children[0].text)
        kbdBlock.push(
            <HighlightKbd 
                key={content.children[0]._key}
                kbd={content.children[0].text}
            />
        )
    }
    return kbdBlock
}

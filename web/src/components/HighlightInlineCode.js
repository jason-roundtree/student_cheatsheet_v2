import React from 'react'
import styled from 'styled-components'

const InlineHighlight = styled.code`
    padding: 2px;
    background-color: rgb(230, 255, 255);
    border-radius: 3px;
`

export default function HighlightInlineCode(props) {
    return (
        <InlineHighlight>
            {props.code}
        </InlineHighlight>
    )
}
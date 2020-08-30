import React from 'react'
import styled from 'styled-components'

const KbdHighlight = styled.kbd`
    font-family: 'Inconsolata', monospace;
    background-color: rgb(34, 34, 34);
    color: white;
    padding: 3px 5px;
    margin: 0 3px;
    border-radius: 3px;
    white-space: nowrap;
    font-size: .9em;
`

export default function HighlightInlineCode(props) {
    return (
        <KbdHighlight>
            {props.kbd}
        </KbdHighlight>
    )
}
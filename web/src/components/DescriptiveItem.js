import React from 'react'
import styled from 'styled-components'
import Highlight, { defaultProps } from 'prism-react-renderer'
import codeTheme from 'prism-react-renderer/themes/oceanicNext'
import formatDescription from '../../utils/formatDescription'

const Pre = styled.pre`
    font-family: 'Inconsolata', monospace;
    font-size: .9em;
    overflow: auto;
    text-align: left;
    padding: 0.5em 0.5em 0.5em 0;
    & .token-line {
        line-height: 1.4em;
        height: 1.3em;
    }
`
const LineNo = styled.span`
    display: inline-block;
    text-align: right;
    width: 1.5em;
    margin: 0 1em 0 0;
    user-select: none;
    opacity: 0.5;
    color: rgb(144, 210, 245);
`

export default function DescriptiveItem({ section }) {
    // console.log('DescriptiveItem props: ', section)
    return (
        <div>
            {section.subsections.map(secData => {
                return (
                    <div 
                        className="description_container"
                        key={secData.name}
                    >
                        <h4>{secData.name}</h4>

                        {secData._rawDescriptionBlock && (
                            <p>{formatDescription(secData._rawDescriptionBlock[0])}</p>
                        )}

                        {secData.code && (
                            <Highlight 
                                {...defaultProps} 
                                code={secData.code.code} 
                                theme={codeTheme}
                                language={secData.code.language}
                            >
                                {({ className, style, tokens, getLineProps, getTokenProps }) => (
                                    <Pre className={className} style={style}>
                                        {tokens.map((line, i) => (
                                            <div {...getLineProps({line, key: i})}>
                                                <LineNo>{i + 1}</LineNo>
                                                {line.map((token, key) => (
                                                    <span {...getTokenProps({token, key})} />
                                                ))}
                                            </div>
                                        ))}
                                    </Pre>
                                )}
                            </Highlight>
                        )}

                        {secData.external_links.length > 0 && (
                            <ul>
                                {secData.external_links.map(link => (
                                    <li key={link._id}>
                                        <a 
                                            href={link.url} 
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {link.description}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                )
            
            })}
        </div>
    )
}
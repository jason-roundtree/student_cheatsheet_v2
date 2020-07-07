import React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import styled from 'styled-components'
import duotoneLight from 'prism-react-renderer/themes/duotoneLight'

// TODO: fix text overflow
const Pre = styled.pre`
    font-family: 'Courier Prime', monospace;
    font-size: .9em;
    overflow: auto;
    text-align: left;
    /* margin: 1em 0; */
    padding: 0.5em;
    & .token-line {
        line-height: 1.4em;
        height: 1.3em;
    }
`
const LineNo = styled.span`
    display: inline-block;
    padding-right: 1em;
    user-select: none;
    opacity: 0.5;
`
// const Line = styled.div`
//     display: table-row;
// `
// const LineContent = styled.span`
//     display: table-cell;
// `

export default function DescriptiveItem({ section }) {
    console.log('DescriptiveItem props: ', section)
    return (
        <div>
            {section.subsections.map(secData => {
                    // console.log('secData: ', secData)
                    return (
                        <div 
                            className="description_container"
                            key={secData.name}
                        >
                            <h4>{secData.name}</h4>

                            {secData.description && (
                                <p>{secData.description}</p>
                            )}

                            {secData.code && (
                                <Highlight 
                                    {...defaultProps} 
                                    code={secData.code.code} 
                                    theme={duotoneLight}
                                    language="jsx"
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
                })
            }
        </div>
    )
}
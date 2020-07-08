import React from 'react'
import styled from 'styled-components'

// const H2 = styled.h2`
//     margin-top: 50px;
//     font-weight: 400;
// `

export default function TableOfContents({ data }) {
    console.log('ToC data: ', data)
    return (
        <div id="toc">
            <h2>Table of Contents</h2>
            <nav>
                {/* TODO: figure out some way to order the different sections and subsections */}
                <ul>
                    {data.map(({ node }) => {
                        console.log('node map', node)
                        return (
                            <li key={node._id}>
                                <a 
                                    href={`#${node.anchor_id}`}
                                    className={node.section_active  
                                        ? '' 
                                        : 'incomplete_section'
                                    }
                                >
                                    {node.name}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </div>
    )
}
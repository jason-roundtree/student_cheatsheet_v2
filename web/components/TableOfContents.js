import React from 'react'

export default function TableOfContents({ data }) {
    console.log('ToC data: ', data)
    return (
        <div>
            <h2>Table of Contents</h2>
            <nav>
                {/* TODO: figure out some way to order the different sections */}
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
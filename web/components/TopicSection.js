import React from 'react'
import ShortcutTable from './ShortcutTable'
import DescriptiveItem from './DescriptiveItem'
// import styled from 'styled-components'

// const LinkList = styled.ul`
//     margin-top: 15px;
// `

export default function TopicSection(props) {
    console.log('TS props: ', props);
    return (
        <section 
            id={props.section.anchor_id}
        >
            <div className='section_header'>
                <h3 
                    className={
                        props.section.section_active 
                            ? ''
                            : 'incomplete_section'
                    }
                >
                    {props.section.name}
                </h3>
                
                {props.section.description && (
                        <p className="section_description">
                            {props.section.description}
                        </p>    
                )}

                <ul className="link_list">
                    {props.section.external_links && (
                        props.section.external_links.map(link => {
                            return (
                                <li key={link._id}>
                                    <a href={link.url}>{link.description}</a>
                                </li>
                            )
                        })
                    )}
                </ul>

            </div>

            {props.section.type === 'shortcut_table' 
                ? (
                    <ShortcutTable 
                        section={props.section}
                    />
                )

                : (
                    <DescriptiveItem 
                        section={props.section}
                    />
                )
            }
        </section>             
    )
}
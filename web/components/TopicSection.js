import React from 'react'
import ShortcutTable from './ShortcutTable'
import DescriptiveItem from './DescriptiveItem'

export default function TopicSection(props) {
    console.log('TopicSection props: ', props)
    return (
        <section 
            id={props.section.anchor_id}
            // key={props.section._id}
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
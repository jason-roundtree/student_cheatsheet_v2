export default {
    title: 'Section',
    name: 'section',
    type: 'document',
    fields: [
        {
            title: 'Name',
            name: 'name',
            type: 'string'
        },
        {
            title: 'Type',
            name: 'type',
            type: 'string'
        },
        {
            title: 'Description',
            name: 'description',
            type: 'text'
        },
        {
            title: 'Subsections',
            name: 'subsections',
            type: 'array',
            of: [{
                type: 'reference',
                to: [
                    { type: 'general_subsection' },
                    { type: 'shortcut_subsection' }
                ]
            }],
            validation: Rule => Rule.unique()
        },
        {
            title: 'Section Active',
            name: 'section_active',
            type: 'boolean'
        },
        {
            title: 'External Links',
            name: 'external_links',
            type: 'array',
            of: [{
                type: 'reference',
                to: [{ type: 'external_link' }]
            }]
        },
    ]
}
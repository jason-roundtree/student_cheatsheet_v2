export default {
    title: 'General Subsection',
    name: 'general_subsection',
    type: 'document',
    fields: [
        {
            title: 'Name',
            name: 'name',
            type: 'string'
        },
        {
            title: 'Description Block',
            name: 'description_block',
            type: 'array',
            of: [
                { 
                    type: 'block',
                    of: [{ type: 'code_highlight' }]
                }
            ],
            rows: 7
        },
        {
            title: 'Description',
            name: 'description',
            type: 'text',
            rows: 7
        },
        {
            title: 'Code',
            name: 'code',
            type: 'code'
        },
        {
            title: 'Syntax',
            name: 'syntax',
            type: 'string'
        },
        {
            title: 'Subsection Active',
            name: 'subsection_active',
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
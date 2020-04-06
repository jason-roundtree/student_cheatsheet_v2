export default {
    title: 'General Subsection',
    name: 'general_subsection',
    type: 'document',
    fields: [
        {
            title: 'Name',
            name: 'name',
            type: 'string',
            validation: Rule => Rule.unique()
        },
        {
            title: 'Description',
            name: 'description',
            type: 'text',
        },
        {
            title: 'Code Samples',
            name: 'code_samples',
            type: 'string'
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
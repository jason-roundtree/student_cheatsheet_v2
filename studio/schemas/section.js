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
            title: 'Anchor ID',
            name: 'anchor_id',
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
            type: 'text',
            rows: 4
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
        {
            title: 'List Order',
            name: 'list_order',
            type: 'number',
            validation: Rule => Rule.integer(),
            validation: Rule => Rule.positive(),
            // validation: Rule => Rule.custom(orderNum => {
            //     return orderNum > 3 ? true : 'Another section is already assigned to this order number.'
            //     // orderNumUnique(orderNum) ? true : 'Another section is already assigned to this order number.'
            // })
        }
    ]
}
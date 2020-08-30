export default {
    title: 'Shortcut Subsection',
    name: 'shortcut_subsection',
    type: 'document',
    fields: [
        {
            title: 'Name',
            name: 'name',
            type: 'string',
            // validation: Rule => Rule.unique()
        },
        {
            title: 'Mac Command',
            name: 'mac_command',
            type: 'array',
            of: [
                { 
                    type: 'block',
                    of: [{ type: 'kbd_unhighlight' }]
                }
            ],
        },
        {
            title: 'Windows Command',
            name: 'windows_command',
            type: 'array',
            of: [
                { 
                    type: 'block',
                    of: [{ type: 'kbd_unhighlight' }]
                }
            ],
        },
        {
            title: 'Url',
            name: 'url',
            type: 'url'
        },
        {
            title: 'Notes & Details',
            name: 'notes',
            type: 'array',
            of: [{ type: 'text' }]
        }
    ]
}
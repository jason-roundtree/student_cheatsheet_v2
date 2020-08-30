import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import section from './section'
import subsection from './subsection'
import external_link from './external_link'
import shortcut from './shortcut'
import code_highlight from './code_highlight'
import kbd_unhighlight from './kbd_unhighlight'

export default createSchema({
  name: 'cheatsheetSchema',
  types: schemaTypes.concat([
    section,
    subsection,
    external_link,
    shortcut,
    code_highlight,
    kbd_unhighlight
  ])
})

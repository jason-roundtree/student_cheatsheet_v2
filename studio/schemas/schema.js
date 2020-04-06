import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import section from './section'
import subsection from './subsection'
import external_link from './external_link'
import shortcut from './shortcut'

export default createSchema({
  name: 'cheatsheetSchema',
  types: schemaTypes.concat([
    section,
    subsection,
    external_link,
    shortcut
  ])
})

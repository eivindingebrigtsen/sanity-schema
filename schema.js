import createSchema from 'part:@sanity/base/schema-creator'
import Page from './Page'
import Blocks from './Blocks'
import Template from './Template'
import Partial from './Partial'
import Config from './Config'
import Resource from './Resource'
import ResourceType from './ResourceType'
import People from './People'

export default createSchema({
  name: 'default',
  types: [
    Page,
    Blocks,
    Template,
    Partial,
    Config,
    Resource,
    ResourceType,
    People
  ]
})

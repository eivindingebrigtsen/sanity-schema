export default {
  name: 'blocks',
  title: 'blocks',
  description: 'Block of content for pages',
  type: 'document',
  preview: {
    select: {
      title: 'name'
    }
  },
  fields: [
    {
      name: 'name',
      title: 'name',
      type: 'string'
    },
    {
      name: 'content',
      title: 'content',
      type: 'text'
    }
  ]
}

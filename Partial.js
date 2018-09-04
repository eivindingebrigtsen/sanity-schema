export default {
  name: 'partial',
  title: 'partial',
  description: 'Partial blocks of content',
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
      name: 'template',
      title: 'template',
      type: 'text'
    }
  ]
}

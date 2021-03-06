export default {
  name: 'template',
  title: 'template',
  description: 'Handlebars templates to parse pages',
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

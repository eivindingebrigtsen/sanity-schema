export default {
  name: 'config',
  title: 'config',
  description: 'Translations, configuration for the site',
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
      name: 'object',
      title: 'object',
      type: 'text'
    },
    {
      name: 'element',
      title: 'element',
      required: true,
      type: 'object'
    }
  ]
}

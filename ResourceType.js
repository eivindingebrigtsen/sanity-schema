export default {
  name: 'resourceType',
  title: 'resourceType',
  description: 'Differentiating between resources',
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
      required: true,
      type: 'string'
    },
    {
      name: 'template',
      title: 'template',
      required: true,
      type: 'reference',
      to: [
        {
          type: 'template'
        }
      ]
    }
  ]
}

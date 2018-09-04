export default {
  name: 'resource',
  title: 'resource',
  description: 'Blog, News, Case studies',
  type: 'document',
  preview: {
    select: {
      title: 'title'
    }
  },
  fields: [
    {
      name: 'title',
      title: 'title',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'slug',
      required: true,
      type: 'slug',
      options: {
        source: 'title'
      }
    },
    {
      name: 'resourceType',
      title: 'Resource type',
      required: true,
      type: 'reference',
      to: [
        {
          type: 'resourceType'
        }
      ]
    },
    {
      name: 'date',
      title: 'Date',
      type: 'datetime'
    },
    {
      name: 'description',
      title: 'description',
      required: true,
      type: 'string'
    },
    {
      name: 'body',
      title: 'body',
      type: 'text'
    },
    {
      name: 'highlight',
      title: 'highlight',
      type: 'boolean'
    },
    {
      name: 'featuredImage',
      title: 'Featured image',
      type: 'image'
    },
    {
      name: 'author',
      title: 'Author',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'people'
            }
          ]
        }
      ]
    }
  ]
}

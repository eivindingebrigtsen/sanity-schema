export default {
  name: 'page',
  title: 'page',
  description: 'Each URL that we need to map',
  type: 'document',
  preview: {
    select: {
      title: 'slug'
    }
  },
  fields: [
    {
      name: 'slug',
      title: 'slug',
      required: true,
      type: 'string'
    },
    {
      name: 'title',
      title: 'title',
      required: true,
      type: 'string'
    },
    {
      name: 'description',
      title: 'description',
      required: true,
      type: 'string'
    },
    {
      name: 'blocks',
      title: 'blocks',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'blocks'
            }
          ]
        }
      ]
    },
    {
      name: 'featuredImage',
      title: 'featuredImage',
      type: 'image'
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
    },
    {
      name: 'isTestingPage',
      title: 'isTestingPage',
      type: 'boolean'
    },
    {
      name: 'pageData',
      title: 'pageData',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'people'
            },
            {
              type: 'resource'
            }
          ]
        }
      ]
    },
    {
      name: 'notInSitemap',
      title: 'Remove from Sitemap',
      type: 'boolean'
    }
  ]
}

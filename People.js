export default {
  name: 'people',
  title: 'people',
  description: 'People who are shown on the site',
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
      name: 'shortName',
      title: 'short name',
      type: 'string'
    },
    {
      name: 'position',
      title: 'position',
      type: 'string'
    },
    {
      name: 'biography',
      title: 'biography',
      type: 'text'
    },
    {
      name: 'email',
      title: 'email',
      type: 'string'
    },
    {
      name: 'linkedIn',
      title: 'LinkedIn',
      type: 'string'
    },
    {
      name: 'onTeamPage',
      title: 'On team page',
      type: 'boolean'
    },
    {
      name: 'blogBiography',
      title: 'blog biography',
      type: 'text'
    },
    {
      name: 'profilePhoto',
      title: 'Profile photo',
      type: 'image'
    }
  ]
}

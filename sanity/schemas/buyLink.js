export default {
    name: 'AffiliateLink',
    title: 'Affiliate Link',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'price',
        title: 'Price',
        type: 'number',
      },
      {
        name: 'Image',
        title: 'Link Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'Linnk',
        title: 'Link',
        type: 'string',
      },
    ],
  }
  
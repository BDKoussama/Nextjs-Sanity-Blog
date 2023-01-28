export default {
    name: 'affiliateItem',
    title: 'Affiliate Product',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'Image',
        title: 'Product Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
      {
        name: 'price',
        title: 'Price',
        type: 'string',
      },
      {
        name: 'link',
        title: 'Affiliate Url',
        type: 'string',
      },
     
    ],
  }
  

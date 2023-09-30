export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'name',
        title: 'Name',
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
        title : 'Content',
        name : 'ProductContent',
        type : 'array',
        of : [
          {
            title: 'Block',
            type: 'block',
            // Styles let you set what your user can mark up blocks with. These
            // correspond with HTML tags, but you can set any title or value
            // you want and decide how you want to deal with it where you want to
            // use your content.
            styles: [
              {title: 'Normal', value: 'normal'},
              {title: 'H1', value: 'h1'},
              {title: 'H2', value: 'h2'},
              {title: 'H3', value: 'h3'},
              {title: 'H4', value: 'h4'},
              {title: 'H5', value: 'h5'},
              {title: 'H6', value: 'h6'},
              {title: 'Quote', value: 'blockquote'},
            ],
            lists: [{title: 'Bullet', value: 'bullet'}],
            // Marks let you mark up inline text in the block editor.
            marks: {
              // Decorators usually describe a single property – e.g. a typographic
              // preference or highlighting by editors.
              decorators: [
                {title: 'Strong', value: 'strong'},
                {title: 'Emphasis', value: 'em'},
              ],
              // Annotations can be any object structure – e.g. a link or a footnote.
              annotations: [
                {
                  title: 'URL',
                  name: 'link',
                  type: 'object',
                  fields: [
                    {
                      title: 'URL',
                      name: 'href',
                      type: 'url',
                    },
                  ],
                },
              ],
            },
          },
          {
            type: 'image',
            options: {hotspot: true},
          },
        ]
      },
      {
        title : 'Pros',
        name : 'pros',
        type : 'array',
        of:[{type : 'string'}]
      },
      {
        title : 'Conns',
        name : 'cons',
        type : 'array',
        of:[{type : 'string'}]
      },
      {
        title : 'Buy Options',
        name : 'buyOption',
        type : 'array',
        of:[{type : 'AffiliateLink'}]
      }
    ],
  }
  

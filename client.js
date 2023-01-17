// client.js
import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: 'rzjs9z1g', // you can find this in sanity.json
  dataset: 'production', // or the name you chose in step 1
  apiVersion : '2022-05-11',
  useCdn: true // `false` if you want to ensure fresh data
})
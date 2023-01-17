// post.js
import Layout from '../../../components/Layout';
import Container from '../../../components/Container';
import PostWidget from '../../../components/PostWidget';
import PostDetail from '../../../components/PostDetail';
import Author from '../../../components/Author';
import {getCurrentPost , getRelatedPosts , getAllPaths} from '../../../lib/queries';
import Seo from '../../../components/Seo';

const Post = ({post , relatedPosts}) => {
  return (
   <Layout>
      <Seo 
        title={post?.title}
        description = {post?.excerpt}
        url = {`https://www.sweetbabytime.com/blog/post/${post?.slug}`}
        image = "https://www.sweetbabytime.com/images/Home.jpg"
      />
     <Container>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
            <div className='col-span-1 lg:col-span-8'>
                {post && (
                  <>
                    <PostDetail post = {post} />
                    <Author author = {post?.author}/>
                  </>
                )}
            </div>
            <div className='cold-span-1 lg:col-span-4'>
                <div className='relative lg:sticky top-8'>
                    {relatedPosts && (<PostWidget posts={relatedPosts} slug = {post?.slug}/> ) }
                </div>
            </div>
        </div>
     </Container>
   </Layout>
  )
}

// this function works with getStaticProps , we use it to tell 
// nextjs upfront which posts exist
export async function getStaticPaths(){
  const paths = await getAllPaths()
  return {
    paths: paths.map((slug) => ({params: {slug}})),
    fallback: false,
  }
}

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params;
  const post = await getCurrentPost(slug)
  const relatedPosts = await getRelatedPosts(post.category , slug)
  return {
    props: {
      post,
      relatedPosts    
    }
  }
}

export default Post
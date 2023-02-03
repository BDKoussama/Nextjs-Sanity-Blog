import Head from 'next/head'
import Layout from '../components/Layout'
import Container from '../components/Container';
import PostCard from '../components/PostCard'
import PostWidget from '../components/PostWidget';
import Categories from '../components/Categories';
import { getRecentPosts, getCategories } from '../lib/queries';
import FeaturedPosts from '../components/FeaturedPosts';
import Link from 'next/link';
import Seo from '../components/Seo'

export default function Home({posts , categories}) {
  return (
    <>
      <Layout>
          <Seo 
                title="Home | Occasion Gift Ideas"
                image = "https://occasiongiftideas.com/images/Home.jpg"
                url = "https://occasiongiftideas.com/"
                description = "Discover unique and thoughtful gift ideas for every occasion on our site. Browse our curated collection and find the perfect present for friends, family, and loved ones."
            />
         <Container>

          {/**import * as gtag from '../lib/gtag' */}
          
           <div className='grid grid-cols-1 lg:grid-cols-12 gap-10'>
              <div className='lg:col-span-8 col-span-1'>
                <div className="grid grid-cols-1 md:grid-cols-1  lg:grid-cols-12 gap-5">
                  {posts.length > 0 && posts.map((post , index) => 
                      <PostCard post = {post} key = {post._id} index = {index}/>
                  )} 
                </div>
                 <div className="text-center my-10">
                        <Link href="/blog">
                            <a className="transition duration-500 ease transform hover:-translate-y-1 inline-block bg-main   text-md font-medium rounded-full text-white px-6 py-2 cursor-pointer">See All Posts</a>
                        </Link>
                  </div>
              </div>  
              <div className="lg:col-span-4 col-span-1">
                  <div className="lg:sticky relative top-8">
                      { posts && <PostWidget posts = {posts}/>}
                      { categories && <Categories categories = {categories} />}
                  </div>
              </div>
           </div>
         </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {

  const posts = await getRecentPosts()
  const categories = await getCategories();

  return {
    props: {
      posts,
      categories
    }
  }
}


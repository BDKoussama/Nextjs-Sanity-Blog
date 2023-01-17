import {config} from '../../lib/config'
import PostList from '../../components/PostList';
import Layout from '../../components/Layout';
import Head from 'next/head';
import Container from '../../components/Container';
import { getCategories, getPaginatedPosts, getPostsCount } from '../../lib/queries';
import PostWidget from '../../components/PostWidget';
import Categories from '../../components/Categories';
import Seo from '../../components/Seo';

export default function Blog(props) {

    const {posts , totalPages , currentPage , categories} = props ; 

    return(
        <>
            <Layout>  
                <Seo 
                    title= "Archives Page | SweetBabyTime"
                    description= "Sweet Baby Time is a website that discusses the best baby gear, gear at different price ranges."
                    url="https://www.sweetbabytime.com/blog"
                    image= "https://www.sweetbabytime.com/images/Archive.jpg"
                />
                <Container>
                    <div className='grid grid-cols-1 lg:grid-cols-12 gap-10' >
                        <div className='lg:col-span-8 col-span-1'>
                            {posts.length > 0 && <PostList 
                                posts={posts} 
                                totalPages={totalPages}
                                currentPage={currentPage}
                            />}
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

    // fetch posts per page page number will be 1 for first page
    const postSummaries = await getPaginatedPosts(1);
    // Get Total Posts Count
    const total = await getPostsCount();
    // Get Total Pages Count
    const totalPages = Math.ceil(total / config.pagination.pageSize)

    const categories = await getCategories();
    return {
        props : {
            posts : postSummaries , 
            totalPages,
            currentPage : "1",
            categories
        }
    }
}
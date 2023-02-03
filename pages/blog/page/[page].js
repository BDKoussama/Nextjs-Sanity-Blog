import { config } from '../../../lib/config';
import PostList from '../../../components/PostList'
import { getCategories, getPaginatedPosts, getPostsCount } from '../../../lib/queries';
import Layout from '../../../components/Layout';
import Container from '../../../components/Container';
import PostWidget from '../../../components/PostWidget';
import Categories from '../../../components/Categories';
import Seo from '../../../components/Seo';

export default function BlogIndexPage(props) {

    const { posts, totalPages, currentPage , categories} = props;

    return(
        <Layout>
            <Seo 
                title= {`Archives | Occasion Gift Ideas - Page ${currentPage}`}
                url = {`https://occasiongiftideas.com/blog/page/${currentPage}`}
                description = "Take a stroll down memory lane with our archive page. Revisit past gift ideas, relive cherished moments, and rediscover inspiration for your next gift giving occasion."
                image= "https://occasiongiftideas.com/images/Archive.jpg"
            />
            <Container>
                <div className='grid grid-cols-1 lg:grid-cols-12 gap-10' >
                    <div className='lg:col-span-8 col-span-1'>
                       {posts &&  <PostList 
                            posts={posts} 
                            totalPages={totalPages}
                            currentPage={currentPage}
                        />}
                    </div>
                    <div className='lg:col-span-4 col-span-1'>
                        <div className="lg:sticky relative top-8">
                            { posts && <PostWidget posts = {posts}/>}
                            { categories && <Categories categories = {categories} />}
                        </div>
                    </div>
                </div>
                
            </Container>
        </Layout>
    )
}



export async function getStaticPaths(){
    // get total posts Number 
    const totalPosts = await getPostsCount();
    // get total pages 
    const totalPages = Math.ceil(totalPosts / config.pagination.pageSize);
    // paths array
    const paths = []
    /**
     * start from page 2, so we don't replicate /blog
     * which is page 1
     */

    for(let page = 2; page <= totalPages; page++) {
        paths.push({params : {page : page.toString()}})
    }

    return {
        paths,
        fallback : false
    }
}

export async function getStaticProps({params}){
    const postSummaries = await getPaginatedPosts(params.page);
    const total = await getPostsCount();
    const totalPages = Math.ceil(total / config.pagination.pageSize)
    const categories = await getCategories();
    return {
        props : {
            posts : postSummaries , 
            totalPages, 
            currentPage : params.page,
            categories
        }
    }
}
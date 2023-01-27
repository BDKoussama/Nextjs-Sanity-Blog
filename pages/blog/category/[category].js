import Container from "../../../components/Container";
import Layout from "../../../components/Layout";
import PostCard from "../../../components/PostCard";
import Seo from "../../../components/Seo";
import { getCategoriesPaths , getPostsByCategory } from "../../../lib/queries";



export default function CategoryPage({posts}) {


    const category = posts.lenght !== 0 && posts[0]?.category;

    return(
        <Layout>
            <Seo 
                title= {`${category} - Gift Ideas`}
                url= {`https://www.sweetbabytime.com/blog/category/${category}`}
                description = "Sweet Baby Time is a website that discusses the best baby gear, gear at different price ranges."
                image = "https://www.sweetbabytime.com/images/Archive.jpg"
            />  
            <Container>
                <div className='grid grid-cols-1 lg:grid-cols-12 gap-10'>
                    {posts.lenght !== 0 && posts.map(post  => ( <PostCard key={post._id} post = {post}/> ))}
                </div>
            </Container>
        </Layout>
    )
}



    export async function getStaticPaths(){
        const paths = await getCategoriesPaths()

        return {
          paths: paths.map((category) => ({params: {category}})),
          fallback: false,
        }
    }


    export async function getStaticProps(context) {
        
        const { category = "" } = context.params ; 
        const posts = await getPostsByCategory(category);

        return {
            props : {posts}
        }
    }


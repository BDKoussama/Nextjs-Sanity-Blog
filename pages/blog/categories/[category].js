import Container from "../../../components/Container";
import Layout from "../../../components/Layout";
import PostCard from "../../../components/PostCard";
import Seo from "../../../components/Seo";
import { getCategoriesPaths , getCurrentCategory, getPostsByCategory } from "../../../lib/queries";



export default function CategoryPage({posts , category}) {

    return(
        <Layout>
            <Seo 
                title= {`${category?.title} - Occasion Gift Ideas`}
                url= {`https://occasiongiftideas.com/blog/categories/${category?.slug}`}
                description = {category?.description}
                image = "https://occasiongiftideas.com/images/Archive.jpg"
            />  
            <Container>

                <h1>{category?.title} Page</h1>
                <p>{category?.description}</p>

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
        const currentCategory = await getCurrentCategory(category)

        return {
            props : {posts , category : currentCategory }
        }
    }


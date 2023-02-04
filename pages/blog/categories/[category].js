import Container from "../../../components/Container";
import Layout from "../../../components/Layout";
import PostCard from "../../../components/PostCard";
import Seo from "../../../components/Seo";
import { getCategoriesPaths , getCurrentCategory, getPostsByCategory } from "../../../lib/queries";
import {urlForImage} from '../../../lib/utils';
import Image from 'next/image';

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

                <div className="text-center">
                    <div className="overflow-hidden rounded-full h-28 w-28 bg-black mx-auto mb-10 relative"> 
                        <Image 
                            layout="fill"
                            objectFit="cover"
                            priority
                            alt = {`picture for gifts category ${category?.title}`}
                            src={urlForImage(category?.image).height(200).width(200).fit('max').auto('format').url()}
                        />
                    </div>
                    <h1 className="text-2xl font-bold mb-10">{category?.title} Gifts</h1>
                    <div className="w-full md:w-6/12 bg-gray-100 p-6 rounded-lg mx-auto">
                        <p>{category?.description}</p>
                    </div>
                </div>

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


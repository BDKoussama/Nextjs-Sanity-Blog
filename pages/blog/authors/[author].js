import Container from "../../../components/Container";
import Layout from "../../../components/Layout";
import Seo from "../../../components/Seo";
import { getAuthorsPaths , getCurrentAuthor} from "../../../lib/queries";
import Image from "next/image";
import {urlForImage} from '../../../lib/utils'

export default function AuthorPage({author}) {

    return(
        <Layout>
            <Seo 
                title= {`${author?.name} - Occasion Gift Ideas`}
                url= {`https://occasiongiftideas.com/blog/categories/${author?.slug}`}
                description = {`${author?.description}`}
                image = "https://occasiongiftideas.com/images/Archive.jpg"
            />  
            <Container>
                <div className="text-center">
                    <div className="overflow-hidden rounded-full h-28 w-28 bg-black mx-auto mb-10 relative"> 
                        <Image 
                            layout="fill"
                            objectFit="cover"
                            priority
                            alt = {`Author picture - ${author?.name}`}
                            src={urlForImage(author?.image).height(200).width(200).fit('max').auto('format').url()}
                        />
                    </div>
                    <h1 className="text-2xl font-bold mb-10">{author?.name}</h1>
                    <div className="w-full md:w-6/12 bg-gray-100 p-6 rounded-lg mx-auto">
                        <p>{author?.description}</p>
                    </div>
                </div>
            </Container>
        </Layout>
    )
}



    export async function getStaticPaths(){

        const paths = await getAuthorsPaths()

        return {
          paths: paths.map((author) => ({params: {author}})),
          fallback: false,
        }
    }


    export async function getStaticProps(context) {
        
        const { author = "" } = context.params;

        const currentAuthor = await getCurrentAuthor(author)

        return {
            props : {author : currentAuthor }
        }
    }


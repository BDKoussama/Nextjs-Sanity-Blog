import Link from "next/link";
import Image from 'next/image'
import { urlForImage } from '../lib/utils'
import PublishDate from '../components/PublishDate';
import { useRouter } from "next/router";

export default function PostCard({post , index}){
    const {title = '', slug = '', publishedAt = '' , mainImage , author , excerpt = ''} = post ;
    const router = useRouter();

    return (
        <div className={`relative col-span-1 md:col-span-1 ${router.asPath.includes('/category') ? 'lg:col-span-4' : 'lg:col-span-6'} mb-2 flex flex-col transition duration-500 ease transform hover:-translate-y-1`}>
                <div className="relative overflow-hidden shadow-md pb-0">
                    <Image
                        priority = {index === 0 ? true : false}
                        loading = {index !== 0 ? 'lazy' : undefined}
                        layout="responsive"
                        width={850}    
                        height={550}
                        objectFit = "contain"
                        className="shadow-lg rounded-t-lg lg:rounded-lg"
                        alt={`Cover Image for ${title}`}
                        src={urlForImage(mainImage).height(550).width(850).fit('max').auto('format').url()}
                    />
                </div>

                <span className="block text-sm font-medium text-main mt-5 mb-2 uppercase"> {post.category} </span>


                <h1 className="transition duration-300 text-left mb-4 cursor-pointer hover:text-teal-500 text-2xl lg:text-xl font-bold">
                    <Link href="/blog/post/[slug]"  as={`/blog/post/${slug}`}>
                        {title}
                    </Link>
                </h1>

                <div className="block lg:flex text-center items-center justify-center mb-4 w-full">
                    <div className="flex items-center justify-left w-full">
                        <div className="w-8 h-8 rounded-full mr-3 relative">
                            <Image
                                layout="fill"
                                alt={`Profile Image for ${author.name}`}
                                height="32px"
                                width="32px"
                                objectFit="cover"
                                className="align-middle rounded-full w-8 h-8"
                                src={urlForImage(author.image).height(32).width(32).fit('max').auto('format').url()}
                            />
                        </div>
                        <p className="text-gray-500 font-medium text-md">{author.name}</p>
                        <span className="mx-3 text-2xl text-gray-500"> • </span>
                        <div className=""> <PublishDate style= "text-gray-500 text-sm" publishedAt = {publishedAt}/></div>
                    </div>
                </div>
                <Link href="/blog/post/[slug]" as={`/blog/post/${slug}`}><span className="cursor-pointer absolute w-full h-full" /></Link>    
        </div>
    )
}


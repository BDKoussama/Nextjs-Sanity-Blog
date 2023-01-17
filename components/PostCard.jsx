import Link from "next/link";
import Image from 'next/image'
import { urlForImage } from '../lib/utils'
import PublishDate from '../components/PublishDate';

export default function PostCard({post , index}){
    const {title = '', slug = '', publishedAt = '' , mainImage , author , excerpt = ''} = post ;
    return (
        <div className="relative col-span-1 md:col-span-1 lg:col-span-6 bg-white shadow-lg rounded-lg p-3 mb-2 flex flex-col transition duration-500 ease transform hover:-translate-y-1 ">
                <div className="relative overflow-hidden shadow-md pb-0 mb-6">
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
                    <span className="block text-sm py-1 px-4 bg-teal-700 absolute top-5 left-5 text-white rounded-full"> {post.category} </span>
                </div>

                <h1 className="transition duration-300 text-center mb-4 cursor-pointer hover:text-teal-500 text-2xl lg:text-2xl font-bold">
                    <Link href="/blog/post/[slug]"  as={`/blog/post/${slug}`}>
                        {title}
                    </Link>
                </h1>

                <div className="block lg:flex text-center items-center justify-center mb-4 w-full">
                    <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8 items-center">
                        <Image
                            layout="responsive"
                            alt={`Profile Image for ${author.name}`}
                            height="32px"
                            width="32px"
                            objectFit="cover"
                            className="align-middle rounded-full w-8 h-8"
                            src={urlForImage(author.image).height(32).width(32).fit('max').auto('format').url()}
                        />
                        <p className="inline align-middle text-gray-700 ml-2 font-medium text-md">{author.name}</p>
                    </div>
                </div>

                <p className="text-center lg:text-md text-gray-700 font-normal mb-4 p-1">
                    {excerpt}
                </p>
                
                <div className="flex items-center justify-between border-t pt-3 grow">
                    <PublishDate publishedAt = {publishedAt}/>
                </div>
                
                <Link href="/blog/post/[slug]" as={`/blog/post/${slug}`}><span className="cursor-pointer absolute w-full h-full" /></Link>

                
        </div>
    )
}
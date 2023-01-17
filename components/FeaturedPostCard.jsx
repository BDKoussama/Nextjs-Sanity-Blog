import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { urlForImage } from '../lib/utils'
import PublishDate from './PublishDate';

const FeaturedPostCard = ({ post , index }) => { 

    const {title = '', slug = '', publishedAt = '' , mainImage , author } = post ;
    
    return(
        <div className="post-card relative h-[280px] w-[87vw] lg:w-[30vw] lg:h-[300px] overflow-hidden">
            <div className="absolute rounded-lg shadow-md block w-full h-full overflow-hidden">
                <Image
                    priority = {index === 0 ? true : false}
                    loading= {index !== 0 ? "lazy" : undefined}
                    layout="fill"
                    objectFit='cover'
                    alt={`Cover Image for ${title}`}
                    src={urlForImage(mainImage).url()}
                />
            </div>
            <div className="absolute rounded-lg bg-center bg-gradient-to-b opacity-50 from-gray-400 via-gray-700 to-black w-full h-full"></div>
            <div className="flex flex-col rounded-lg p-4 items-center justify-center absolute w-full h-full">
                <PublishDate publishedAt={publishedAt} icon = {false} style = "text-white mb-4 text-shadow font-normal text-sm md:text-xs"/>
                <h1 className="text-white mb-4 text-shadow font-semibold text-xl text-center px-2 md:px-0">{title}</h1>
                <div className="flex items-center absolute bottom-5 w-full justify-center">
                    <span className='block w-8 h-8 bg-cover bg-center bg-no-repeats rounded-full' style={{ backgroundImage: `url('${urlForImage(author?.image).url()}')` }}></span>
                    <p className="inline align-middle text-white text-shadow ml-2 font-medium text-sm">{author?.name}</p>
                </div>
            </div>
            <Link href="/blog/post/[slug]" as={`/blog/post/${slug}`}><span className="cursor-pointer absolute w-full h-full" /></Link>
            
        </div>
    )};

export default FeaturedPostCard;

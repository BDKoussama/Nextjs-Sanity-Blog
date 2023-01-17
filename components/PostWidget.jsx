import { useState , useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {urlForImage} from '../lib/utils';
import PublishDate from "./PublishDate";

export default function PostWidget({posts , slug}) {
    const [relatedPosts , setRelatedPosts] = useState([]);
    useEffect(() => {
        if(slug) {
            setRelatedPosts(posts)
        }else {
            setRelatedPosts(posts)
        }
    },[slug])

    return (
        <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
        <span className="text-xl block mb-8 font-semibold border-b pb-4">{slug ? 'Related Posts' : 'Recent Posts'}</span>
        {relatedPosts.length > 0 && relatedPosts.map((post, index) => (
            <div key={index} className="flex items-center w-full mb-4">
                <div className="w-16 flex-none">
                    <Image
                        layout="responsive"
                        alt={`cover image for ${post?.title}`}
                        height='64px'
                        width='64px'
                        objectFit="cover"
                        className="align-middle rounded-full w-16 h-16"
                        src={urlForImage(post?.mainImage).height(64).width(64).fit('max').auto('format').url()}
                    />
                </div>
                <div className="flex-grow ml-4">
                    <PublishDate publishedAt={post.publishedAt} style = "text-gray-500 font-xs" icon={false} />
                    <Link href="/blog/post/[slug]"  as={`/blog/post/${post?.slug}`} key={index}>
                       <span className="text-md font-semibold hover:underline cursor-pointer">{post.title}</span>
                    </Link>
                </div>
            </div>
        ))}
        </div>
    )
}
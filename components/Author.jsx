import { PortableText } from "@portabletext/react";
import Image from "next/image"
import {urlForImage} from '../lib/utils';

export default function Author({author}){
    return (
        <div className="text-center mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-10">
            <div className="absolute left-2/4 -translate-x-2/4 -top-14 h-[100px] w-[100px]">
                <Image
                    alt={`Profile Image for ${author?.name}`}
                    height={100}
                    width={100}
                    layout = "responsive"
                    className="align-middle rounded-full"
                    src={urlForImage(author?.image).height(100).width(100).url()}
                />
            </div>
            <h3 className="text-white mt-4 mb-4 text-xl font-bold text-black capitalize">{author?.name}</h3>
            <div className="text-white text-ls text-black font-medium">
                <PortableText
                        value={author?.bio}
                />
            </div>
      </div>
    )
}
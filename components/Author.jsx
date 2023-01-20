import { PortableText } from "@portabletext/react";
import Image from "next/image"
import {urlForImage} from '../lib/utils';

export default function Author({author}){
    return (
        <div className="text-center mt-20 mb-8 p-12 relative rounded-lg bg-gray-400 bg-opacity-10">
            <div className="mx-auto h-[60px] w-[60px]">
                <Image
                    alt={`Profile Image for ${author?.name}`}
                    height={60}
                    width={60}
                    layout = "responsive"
                    className="align-middle rounded-full"
                    src={urlForImage(author?.image).height(60).width(60).url()}
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
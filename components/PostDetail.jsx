
import Image from "next/image"
import {PortableText} from '@portabletext/react'
import {urlForImage} from '../lib/utils';
import markdownStyles from './markdown-styles.module.css';
import PublishDate from "./PublishDate";
import ProductReview from "./ProductReview";

const ptComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null
      }
      return (
        <Image
            layout="responsive"
            loading="lazy"
            width={2000}
            height={1000}
            className = 'mb-10'
            alt={value.alt || ' '}
            src={urlForImage(value).height(1000).width(2000).fit('max').auto('format').url()}
        />
      )
    },
    product: ({value}) => {
      if(!value) {
        return null
      }
      return (
        <ProductReview product = {value}/>
      )
    }
  }
}

export default function PostDetail({post}) {
    return (
        <article className = "bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8" >
            <div className="pl-6 pr-4 lg:px-0">
              <div className="flex items-center mb-8 w-full">
                <div className="hidden md:flex justify-between lg:mb-0 h-[32px] w-[32px] mt-4 mr-8 items-center">
                    <Image
                        alt={`Profile Image for ${post?.author?.name}`}
                        fill = "responsive"
                        height={32}
                        width={32}
                        className="align-middle rounded-full w-8 h-8"
                        src={urlForImage(post?.author?.image).height(32).width(32).fit('max').auto('format').url()}
                    />
                  <p className="inline align-middle text-gray-700 ml-0 font-medium text-md mr-4">{post?.author?.name}</p>
                </div>
                <div className="mt-4">
                  <PublishDate publishedAt={post?.publishedAt} />
                </div>
              </div>

              <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tighter leading-tight  mb-12 md:text-left">{post?.title}</h1>
              <figure className = "relative overflow-hidden shadow-md mb-6">
                <Image
                  loading="lazy"
                  layout="responsive"
                  width={1280}
                  height={850}
                  className="shadow-lg rounded-t-lg lg:rounded-lg"
                  alt={`Cover Image for ${post?.title}`}
                  src={urlForImage(post?.mainImage).height(850).width(1280).fit('max').auto('format').url()}
                />
              </figure>
              <div className={`mx-auto ${markdownStyles.markdown}`}>
                  <PortableText
                    value={post?.body}
                    components={ptComponents}
                  />
              </div>
            </div>
        </article>
    )
}
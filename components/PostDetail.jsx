
import Image from "next/image"
import {PortableText} from '@portabletext/react'
import {urlForImage} from '../lib/utils';
import markdownStyles from './markdown-styles.module.css';
import PublishDate from "./PublishDate";
import ProductReview from "./ProductReview";
import AffiliateItem from "./AffiliateItem";

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
        <article className = "pb-12 mb-8" >
            <div className="pl-6 pr-4 lg:px-0">
              
              <h1 className="text-3xl md:text-5xl lg:text-5xl w-full lg:w-10/12 font-bold tracking-tighter leading-tight   md:text-left">{post?.title}</h1>
             
              <div className="flex items-center mb-5 w-full">
                <div className="flex justify-between lg:mb-0 mt-4  items-center">
                  <div className="h-[32px] w-[32px] mr-3">
                      <Image
                            alt={`Profile Image for ${post?.author?.name}`}
                            fill = "responsive"
                            height={32}
                            width={32}
                            className="align-middle rounded-full"
                            src={urlForImage(post?.author?.image).height(32).width(32).fit('max').auto('format').url()}
                        />
                  </div>
                  <p className="inline align-middle text-gray-500 ml-0 font-medium text-md  ">{post?.author?.name}</p>
                  <span className="mx-3 text-2xl text-gray-500"> • </span>
                </div>
                
                <div className="mt-4">
                  <PublishDate publishedAt={post?.publishedAt} style = "text-sm color-gray-500" />
                </div>
              </div>

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

              <AffiliateItem />
              
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
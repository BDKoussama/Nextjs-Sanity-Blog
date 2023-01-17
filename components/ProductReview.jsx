import Link from "next/link";
import {PortableText} from '@portabletext/react'
import Image from "next/image";
import {urlForImage} from '../lib/utils';
import Pros from './svg/Pros'
import Cons from './svg/Cons'
import Plus from './svg/Plus'
import Moins from './svg/Moins'

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
      }
    }
  }

export default function ProductReview({product}){

    return(
        <div className="pb-12 mb-8 border-b border-gray-300">
            <h3 className="text-2xl lg:text-3xl font-bold my-2 text-teal-600"> {product?.title} </h3>
            <h4 className="text-lg lg:text-xl font-medium mb-6 block">{product?.name}</h4>
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-2">
                <div className="col-span-1 xl:col-span-6 mb-4">
                    <div className="h-80 w-80 rounded-lg relative overflow-hidden border-2">
                        <Image
                            layout="fill"
                            objectFit="contain"
                            className="absolute shadow-lg rounded-t-lg lg:rounded-lg"
                            alt={`Cover Image for ${product?.title}`}
                            src={urlForImage(product?.Image).fit('max').auto('format').url()}
                        />
                    </div>
                </div>
                <div className="col-span-1 xl:col-span-6 mb-5">
                    <span className="text-base mb-2 block font-medium"> Buy Options </span>
                    <ul>
                        { product?.buyOption.length !== 0 &&  product?.buyOption.map(option => (
                            <li className="flex items-center" key={option._key}> 
                                <div className="block h-8 w-8 relative rounded-full mr-3 border">
                                    <Image
                                        alt={`${option.title} Buy Option Logo`}
                                        height={32}
                                        width={32}
                                        className="align-middle rounded-full"
                                        src={urlForImage(option.Image).height(32).width(32).fit('max').auto('format').url()}
                                    />
                                </div>
                                <p className="font-normal text-base !my-2 mr-2 !leading-normal inline-block">{option.title}</p>
                                <p className="font-bold text-base  !my-2 mr-2 !font-bold "> {option.price}$ </p>
                                <div className="text-center text-base ml-auto">
                                    <Link href={option.Linnk} >
                                        <span className="transition duration-500 ease transform hover:-translate-y-1 inline-block bg-green-600 text-md font-medium rounded-full text-white px-6 py-2 cursor-pointer whitespace-nowrap">Buy Now</span>
                                    </Link>
                                </div>
                            </li>
                        ))}
                        
                    </ul>
                </div>
            </div>
            <div className="w-full">
                <div className="mb-5 text-gray-700">
                    <span className="text-lg font-bold flex items-center mb-3"> <Pros/> Pros </span>
                    <ul className="!my-0">
                        { product?.pros.length !== 0 && product?.pros.map((item , index) => (
                            <li className="flex items-center pl-3 mb-1" key ={`${index}${item}`}> <Plus/> {item}</li>
                        )) }
                    </ul>
                </div>
                <div className="mb-5 text-gray-700">
                    <span className="text-lg font-bold flex items-center mb-3"> <Cons/> Cons</span>
                    <ul className="!my-0">
                        { product?.cons.length !== 0 && product?.cons.map((item , index) => (
                            <li className="flex items-center pl-3 mb-1" key ={`${index}${item}`}><Moins/> {item}</li>
                        )) }
                    </ul>
                </div>
            </div>
            <div className="w-full py-0">
                <PortableText
                    value={product?.ProductContent}
                    components = {ptComponents}
                  />
            </div>
        </div> 
    )
}
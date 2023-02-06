import Link from 'next/link';
import Image from 'next/image';
import { urlForImage } from '../lib/utils';

export default function AffiliateItem({product}){  
    return (
        <div className='mb-20'>
            <h3 className="text-violet-900 text-2xl font-bold mt-10 capitalize">{product?.title}</h3>
            <div className="shadow-lg flex flex-col lg:flex-row h-full justify-between items-start lg:items-start rounded-lg mt-5 bg-violet-50  px-2 py-2 lg:py-5">
                <div className="h-[21rem] md:h-[20rem] w-full md:w-[20rem] bg-gray-300 rounded-lg overflow-hidden relative">
                    <Image 
                        layout='fill'
                        loading='lazy'
                        objectFit='cover'
                        alt = {`Image for ${product?.title}`}
                        src={urlForImage(product?.Image).fit('max').auto('format').url()}

                    />
                </div>
                <div className="ml-0 lg:ml-3 pr-0 lg:pr-2 w-full lg:w-[50%] mt-10 lg:mt-0">
                    <p className="font-normal leading-8 !mt-0 ">
                        {product?.description}
                    </p>
                    <span className='mt-0 block'> {product?.price} </span>
                    <div className="mt-10 lg:mb-5">
                        <Link href = {product?.link}>
                            <a className='py-5 px-10 bg-rose-600 rounded-lg !text-white font-medium w-full block lg:inline-block text-center'> Buy From {product?.linkText} </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
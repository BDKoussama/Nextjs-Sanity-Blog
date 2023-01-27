import Link from 'next/link';

export default function AffiliateItem(){
    return (
        <div className='mb-20'>
            <h3 className="text-violet-900 text-2xl font-bold mt-10 capitalize">11 - Kawaii Baby Pandas T-Shirt</h3>
            <div className="flex flex-col lg:flex-row h-full justify-between items-start lg:items-center rounded-lg mt-5 bg-violet-50  px-2 py-2 lg:py-5">
                <div className="h-[20rem] w-[20rem] bg-gray-300 rounded-lg overflow-hidden ">

                </div>
                <div className="ml-0 lg:ml-5 pr-0 lg:pr-5 w-full lg:w-[50%] mt-10 lg:mt-0">
                    <p className="font-normal leading-8">
                        I don’t usually put two of the same items on my lists, but I couldn’t choose between this cute panda shirt and the one above! So now you have to choose! Or you can order both. The shirt is available in several colors in Men’s, Women’s, and Children’s sizes. 
                    </p>
                    <div className="mt-10 mb-5">
                        <Link href = "/">
                            <a className='py-5 px-10 bg-rose-500 rounded-lg text-white font-medium'> Buy From Amazon.com </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
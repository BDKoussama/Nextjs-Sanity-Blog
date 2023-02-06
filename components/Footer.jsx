
import Link from 'next/link';
import Container from './Container';
import Logo from './svg/Logo';

export default function Footer() {
    return(
        <footer className="bg-violet-50 px-5 py-10 text-center mt-20">
            <Container>
                <div className='mx-auto rounded-full mb-5 flex items-center justify-center ' >
                    <Logo 
                        gradientIdFirst= "paint6_linear_1_21" 
                        gradientIdSecond= "paint7_linear_1_21" 
                        gradientIdLast = "paint8_linear_1_21" 
                    />
                </div>
                <span className='block font-bold text-sm md:text-lg w-full md:w-[38vw] mx-auto mb-5'>
                    Your one-stop destination for unique and thoughtful gift ideas for any occasion.
                </span>
                <ul className='flex-col flex lg:flex-row items-center justify-center  text-xl lg:text-sm font-normal'>
                    <li className='mx-4 my-3 lg:my-0'>
                        <Link href='/'><a className="hover:underline align-middle font-semibold cursor-pointer">Home</a></Link>
                    </li>
                    <li className='mx-4 my-3 lg:my-0'>
                        <Link href='/blog'><a className="hover:underline align-middle font-semibold cursor-pointer">Archive</a></Link>
                    </li>
                    <li className='mx-4 my-3 lg:my-0'>  
                        <Link href='/about'><a className="hover:underline align-middle font-semibold cursor-pointer">About Us</a></Link>
                    </li>
                    <li className='mx-4 my-3 lg:my-0'>
                        <Link href='/terms-conditions'><a className="hover:underline align-middle font-semibold cursor-pointer">Terms & Conditions</a></Link>
                    </li>
                    <li className='mx-4 my-3 lg:my-0'>
                        <Link href='/privacy-policy'><a className="hover:underline align-middle font-semibold cursor-pointer">Privacy Policy</a></Link>
                    </li>
                </ul>
                <div className='border-t mt-8 border-main text-center text-sm text-gray-900 py-4 flex flex-col md:flex-row items-center justify-between'>
                    <p>Copyright© 2022 OccasionGiftIdeas.</p>
                    <p>All rights reserved</p>
                </div>
            </Container>
        </footer>
    )
}

import Link from 'next/link';
import Container from './Container';
import Logo from './svg/Logo';

export default function Footer() {
    return(
        <footer className="bg-[#f3eff6] p-10 text-center mt-20">
            <Container>
                <div className='mx-auto rounded-full mb-5 flex items-center justify-center ' >
                    <Logo />
                </div>
                <p className=' w-full md:w-[38vw] mx-auto mb-5'>
                    Sweet Baby Time is committed to finding and reviewing all the best products for babies like ( best baby cribs, bassinets, baby chairs, and other baby furniture. )  
                </p>
                <ul className='flex-col flex lg:flex-row items-center justify-center  text-xl lg:text-sm font-normal'>
                    <li className='mx-4 my-3 lg:my-0'>
                        <Link href='/blog'><a className="hover:underline align-middle font-semibold cursor-pointer">Blog</a></Link>
                    </li>
                    <li className='mx-4 my-3 lg:my-0'>
                        <Link href='/terms-conditions'><a className="hover:underline align-middle font-semibold cursor-pointer">Terms & Conditions</a></Link>
                    </li>
                    <li className='mx-4 my-3 lg:my-0'>
                        <Link href='/privacy-policy'><a className="hover:underline align-middle font-semibold cursor-pointer">Privacy Policy</a></Link>
                    </li>
                    <li className='mx-4 my-3 lg:my-0'>
                        <Link href='/contact'><a className="hover:underline align-middle font-semibold cursor-pointer">Contact Us</a></Link>
                    </li>
                </ul>
                <div className='border-t mt-8 border-main text-left text-sm text-gray-500 py-4'>
                    <p>Copyright© 2022 OccasionGiftIdeas.</p>
                    <p>All rights reserved</p>
                </div>
            </Container>
        </footer>
    )
}
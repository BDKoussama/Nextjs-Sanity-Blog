import Link from 'next/link'
import { useState } from 'react'
import Container from './Container'
import Logo from './svg/Logo';

export default function Header() {

  const [toggle , setToggle] = useState(false);

  return (
    <Container>
      <div className='border-b w-full flex justify-between items-center border-gray-300 py-8 relative' >
          <div className='block'>
            <h2 className="text-xl font-bold">
                <Link href="/">
                  <a aria-label='logo'>
                    <Logo/>
                  </a>
                </Link>
              </h2>
          </div>

          <ul className='hidden md:flex '>
              <li><Link href='/about'><a className="hover:underline align-middle ml-4 font-semibold cursor-pointer">About</a></Link></li>
              <li><Link href='/blog'><a className="hover:underline align-middle ml-4 font-semibold cursor-pointer">Blog</a></Link></li>
              <li><Link href='/contact'><a className="hover:underline align-middle ml-4 font-semibold cursor-pointer">Contact Us</a></Link></li>
              <li><Link href='/car-seat-laws-by-state'><a className="hover:underline align-middle ml-4 font-semibold cursor-pointer">Car Seat Laws</a></Link></li>
          </ul>

          <div className='md:hidden h-8 w-12 cursor-pointer z-20 mr-4 ' onClick={() => setToggle(!toggle)}>
              <span className='font-bold block'>{toggle ? "Close" : "Menu"}</span>
          </div>

          <div className={`menu ${toggle ? 'display' : ''} md:hidden absolute w-full h-96 bg-white top-[12%] shadow-lg flex items-center justify-center z-10`}>
            <ul className='text-center text-lg'>
                <li className='my-4'><Link href='/about'><a className="hover:underline align-middle ml-4 font-semibold cursor-pointer">About Us</a></Link></li>
                <li className='my-4'><Link href='/blog'><a className="hover:underline align-middle ml-4 font-semibold cursor-pointer">Blog</a></Link></li>
                <li className='my-4'><Link href='/contact'><a className="hover:underline align-middle ml-4 font-semibold cursor-pointer">Contact Us</a></Link></li>
                <li className='my-4'><Link href='/car-seat-laws-by-state'><a className="hover:underline align-middle ml-4 font-semibold cursor-pointer">Car Seat Laws</a></Link></li>
            </ul>
          </div>
          
      </div>
    </Container>
  )
}

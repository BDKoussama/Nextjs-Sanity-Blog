import Link from 'next/link'
import { useState } from 'react'
import Container from './Container'
import Logo from './svg/Logo';

export default function Header() {

  const [toggle , setToggle] = useState(false);

  return (
        <Container>
            <nav className='w-full flex py-8 md:py-10 relative justify-between  md:justify-center items-center '>
                
                <div className='block md:hidden'>
                  <h2 className="text-xl font-bold">
                      <Link href="/"> 
                        <a aria-label='logo'>
                          <Logo 
                              gradientIdFirst= "paint0_linear_1_21" 
                              gradientIdSecond= "paint1_linear_1_21" 
                              gradientIdLast = "paint2_linear_1_21" 
                          />
                        </a>
                      </Link>
                    </h2>
                </div>

                <ul className='hidden md:flex items-center'>
                  <li><Link href='/'><a className="hover:underline hover:text-violet-900 align-middle ml-4 font-medium cursor-pointer text-lg">Home</a></Link></li>
                  <li><Link href='/about'><a className="hover:underline hover:text-violet-900 align-middle ml-4 font-medium cursor-pointer text-lg">About</a></Link></li>
                  <li className='mx-16'>
                      <Link href="/"> 
                          <a aria-label='logo'>
                            <Logo 
                                gradientIdFirst= "paint3_linear_1_21" 
                                gradientIdSecond= "paint4_linear_1_21" 
                                gradientIdLast = "paint5_linear_1_21" 
                                height='60'
                                width='180'
                            />
                          </a>
                      </Link>
                  </li>
                  <li><Link href='/blog'><a className="hover:underline hover:text-violet-900 align-middle ml-4 font-medium cursor-pointer text-lg">Archive</a></Link></li>
                  <li><Link href='/contact'><a className="hover:underline hover:text-violet-900 align-middle ml-4 font-medium cursor-pointer text-lg">Contact</a></Link></li>
                </ul>

                <div className='md:hidden h-8 w-12 cursor-pointer z-20 mr-4 ' onClick={() => setToggle(!toggle)}>
                  <span className='font-bold block'>{toggle ? "Close" : "Menu"}</span>
                </div>

                <div className={`menu ${toggle ? 'display' : ''} md:hidden absolute w-full h-96 bg-white top-[12%] shadow-lg flex items-center justify-center z-10`}>
                  <ul className='text-center text-lg'>
                      <li className='my-4'><Link href='/about'><a className="hover:underline align-middle ml-4 font-semibold cursor-pointer">About Us</a></Link></li>
                      <li className='my-4'><Link href='/blog'><a className="hover:underline align-middle ml-4 font-semibold cursor-pointer">Blog</a></Link></li>
                      <li className='my-4'><Link href='/contact'><a className="hover:underline align-middle ml-4 font-semibold cursor-pointer">Contact Us</a></Link></li>
                  </ul>
                </div>

            </nav>
        </Container>
  )
}


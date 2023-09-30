import Layout from "../components/Layout"
import Container from "../components/Container"
import markdownStyles from '../components/markdown-styles.module.css';
import Seo from '../components/Seo';
import Link from 'next/link';
import Image from 'next/image';

export default function About () {
    return (
        <Layout>
            <Seo 
                title="Home | About Page Title"
                image = "https://example.com/images/gift-box-confetti.webp"
                url = "https://example.com/About"
                description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet nisi maximus"
            />
            <Container>
                <div className={`p-5 mx-auto ${markdownStyles.markdown} !text-center`}>

                <div className="w-full mt-10 relative flex justify-center">
                        <div className="relative  h-[8rem] md:h-[15rem] w-[15rem] rounded-lg mx-4 mt-20">
                            <Image 
                                layout="fill"
                                objectFit="cover"
                                src= "/images/gift-box.webp"
                                alt = "violet box gift image"
                            />
                        </div>
                        <div className="relative h-[8rem] md:h-[15rem] w-[15rem] rounded-lg mx-4 overflow-hidden">
                            <Image 
                                layout="fill"
                                objectFit="cover"
                                src= "/images/gift-box-confetti.webp"
                                alt = "violet box gift image"
                            />
                        </div>
                        <div className="relative h-[8rem] md:h-[15rem] w-[15rem] rounded-lg mx-4 mt-20">
                            <Image 
                                layout="fill"
                                objectFit="cover"
                                src= "/images/gift-box-3.webp"
                                alt = "violet box gift image"
                            />
                        </div>
                    </div>

                    <h1 className="text-2xl lg:text-2xl font-bold text-main !text-center">About Us</h1>

                    <div className="text-center mt-0 w-full md:w-8/12 mx-auto">
                        <h4 className="mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
                    </div>

                    

                    <div className="w-full mt-5 md:mt-20 w-full md:w-8/12 mx-auto">
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet nisi maximus, porttitor dolor quis, lobortis diam. Duis orci massa, accumsan a eros a, porta semper libero. Vestibulum non quam magna.
                        </p>
                        <h2 className="mx-auto">Uncovering the Best Products for You</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet nisi maximus, porttitor dolor quis, lobortis diam. Duis orci massa, accumsan a eros a, porta semper libero. Vestibulum non quam magna.</p>
                        <h2 className="mx-auto">Putting Customers First: Our Affiliate Promise</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet nisi maximus, porttitor dolor quis, lobortis diam. Duis orci massa, accumsan a eros a, porta semper libero. Vestibulum non quam magna.</p>
                        <h2 className="mx-auto">Thank You for Choosing Lorem</h2>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet nisi maximus, porttitor dolor quis, lobortis diam. Duis orci massa, accumsan a eros a, porta semper libero. Vestibulum non quam magna. <Link href="https://example.com/contact"><a>contact us.</a></Link></p>
                    </div>
                </div>
            </Container>
        </Layout>
    )
}
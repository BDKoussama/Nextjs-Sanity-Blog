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
                title= "About | SweetBabyTime"
                description = "SweetBabyTime is a website that discusses the best baby gear, gear at different price ranges."
                image= "https://www.sweetbabytime.com/images/About.jpg"
                url= "https://www.sweetbabytime.com/about"
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

                    <h1 className="text-2xl lg:text-2xl font-bold text-main !text-center">About Occasion Gift Ideas</h1>

                    <div className="text-center mt-0 w-full md:w-8/12 mx-auto">
                        <h4 className="mx-auto">your one-stop destination for unique and thoughtful gift ideas for any occasion.</h4>
                    </div>

                    

                    <div className="w-full mt-5 md:mt-20 w-full md:w-8/12 mx-auto">
                        <p>We understand that shopping for gifts can be overwhelming, which is why we've curated a diverse collection of gift ideas that cater to different tastes, interests, and budgets. From stylish accessories to gadgets and home decor, we've got you covered.</p>
                        <h2 className="mx-auto">Uncovering the Best Products for You</h2>
                        <p>Our team of experienced gift gurus works tirelessly to find the latest and greatest products on the market and bring them to you in one convenient place. We only feature products that we believe in, and we aim to provide you with the most comprehensive and accurate product information available.</p>
                        <h2 className="mx-auto">Putting Customers First: Our Affiliate Promise</h2>
                        <p>We are proud to be an affiliate website and earn a commission on each sale made through our website. However, our commitment to our customers always comes first, and we only feature products that we believe will add value to your life.</p>
                        <h2 className="mx-auto">Your Gift-Giving Journey Starts Here: Thank You for Choosing Gift Ideas</h2>
                        <p>Thank you for choosing Occasion Gift Ideas. We hope you find the perfect gift for your loved ones, and we look forward to serving you in the future. If you have any questions or suggestions, please don't hesitate to <Link href="https://occasiongiftideas.com/contact"><a>contact us.</a></Link></p>
                    </div>
                </div>
            </Container>
        </Layout>
    )
}
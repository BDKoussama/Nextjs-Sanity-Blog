import Layout from "../components/Layout"
import Container from "../components/Container"
import markdownStyles from '../components/markdown-styles.module.css';
import Seo from '../components/Seo';
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
                <div className={`p-5 mx-auto ${markdownStyles.markdown}`}>
                    <h1 className="text-2xl lg:text-2xl font-bold text-main text-center">About OccasionGiftIdeas</h1>

                    <div className="mr-0 md:mr-40 text-center w-full">
                        <p className="my-4">
                            Sweet Baby Time is a website that discusses the best baby gear, gear at different price ranges.
                        </p>

                        <p className="my-4">
                            Founded on the idea of good old-fashioned customer service, Sweet Baby Time is committed to finding and reviewing all the best products for babies like ( best baby cribs, bassinets, baby chairs, and other baby furniture. )
                        </p>

                        <p className="my-4">
                            As a review site, it is easy to assume our main goal is to find the best products. But this couldnt be further from the truth. We provide detailed reviews on everything, but we try our best to narrow down the reviews based on your specific needs as a caring parent.
                        </p>

                        <p className="my-4">
                            Childbirth is one of lifes most intense experiences and can bring out feelings of joy, happiness, and exhaustion- sometimes all in one day! that’s why we started SweetBabyTime in 2022 to help new parents navigate through these amazing yet challenging years.
                        </p>

                        <p className="my-4 text-bold" >
                            Founded by Parent 2022.
                        </p>
                    </div>
                </div>
            </Container>
        </Layout>
    )
}
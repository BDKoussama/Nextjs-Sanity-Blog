import Layout from "../components/Layout"
import Container from "../components/Container"
import markdownStyles from '../components/markdown-styles.module.css';
import Seo from '../components/Seo';

export default function Contact () {
    
    return (
        <Layout>
            <Seo 
                title="Contact Us | SweetBabyTime"
                image = "https://www.sweetbabytime.com/images/Contact.jpg"
                url = "https://www.sweetbabytime.com/contact"
            />
            <Container>
                <div className={`p-10  bg-white shadow-lg rounded-lg mx-auto ${markdownStyles.markdown}`}>
                    <h1 className="text-2xl lg:text-2xl font-bold">Contact us</h1>

                    <div className="mr-0 md:mr-40">
                        
                    </div>
                </div>
            </Container>
        </Layout>
    )
}
import Layout from "../components/Layout"
import Container from "../components/Container"
import markdownStyles from '../components/markdown-styles.module.css';
import Seo from '../components/Seo';

export default function Contact () {
    
    return (
        <Layout>
            <Seo 
                title="Contact Us | Contact Page Title"
                image = "https://example.com/images/gift-box-confetti.webp"
                url = "https://example.com/Contact"
                description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet nisi maximus"
            />
            <Container>
                <div className={`p-10  bg-white shadow-lg rounded-lg mx-auto ${markdownStyles.markdown}`}>
                    <h1 className="text-2xl lg:text-2xl font-bold">Contact us</h1>

                    <div className="mr-0 md:mr-40">
                        You can Add Contact Form Here
                    </div>
                </div>
            </Container>
        </Layout>
    )
}
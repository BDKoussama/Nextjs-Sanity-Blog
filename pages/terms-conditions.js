import Container from '../components/Container';
import Layout from '../components/Layout';
import { getTerms } from '../lib/queries';
import markdownStyles from '../components/markdown-styles.module.css';

import { PortableText } from '@portabletext/react';

import Seo from '../components/Seo';

export default function Terms ({terms}) {
    return (
        <Layout>
            <Seo 
                title="Terms Conditions | SweetBabyTime"
                image = "https://www.sweetbabytime.com/images/Home.jpg"
                url = "https://www.sweetbabytime.com/terms-conditions"
            />
            <Container>
                <div className={`p-10 bg-white shadow-lg rounded-lg rounded mx-auto ${markdownStyles.markdown}`}>
                  {terms.length !== 0 && (
                      <PortableText
                          value={terms[0]?.content}
                      /> 
                    )} 
                </div>
            </Container>
        </Layout>
    )
}


export async function getStaticProps() {

    const terms = await getTerms()
    
    return {
      props: {
        terms
      }
    }
  }
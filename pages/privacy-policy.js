import { PortableText } from '@portabletext/react';
import Head from 'next/head';
import Container from '../components/Container';
import Layout from '../components/Layout';
import markdownStyles from '../components/markdown-styles.module.css';

import {getPolicy} from '../lib/queries';

import Seo from '../components/Seo';

export default function Policy ({policy}) {

    return (
        <Layout>
            <Seo 
                title="Privacy Policy"
                description= "Policy privacy by chatgpt."
                image = "https://example.com/images/Home.jpg"
                url = "https://example.com/privacy-policy"
            />
            <Container>
                <div className={`p-10  bg-white shadow-lg rounded-lg mx-auto ${markdownStyles.markdown}`}>
                    {policy.length !== 0 && (
                        <PortableText
                            value={policy[0]?.content}
                        /> 
                    )}
                </div>
            </Container>
        </Layout>
    )
}


export async function getStaticProps() {

    const policy = await getPolicy()
    
    return {
      props: {
        policy
      }
    }
  }
import Head from 'next/head'

export default function Seo({title, description, image , url}) {

    return (
        <Head>
            {/** Default metas */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta itemProp="name" content={title} />
            <meta itemProp="description" content={description} />
            <meta itemProp="image" content={image} />z
            {/** Social media Metas */}

            <meta name="robots" content="all" />


            {/** Facebook OG */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image}/>
            <meta property="og:url" content={url} />
            <meta property="og:site_name" content="Occasion Gift Ideas" />


            {/* Twitter  */}
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={image} />
            <meta name="twitter:card" content="summary_large_image"/>


        </Head> 
    )
}
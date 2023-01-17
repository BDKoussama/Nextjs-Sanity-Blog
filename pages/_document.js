import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {

  return (
    <Html lang="en"> {/* Add whichever language you want here */}
      <Head>
          <link
                rel="preload"
                href="/fonts/Montserrat-Regular.woff"
                as="font"
                type="font/woff"
                crossOrigin="anonymous"
            />
            <link
                rel="preload"
                href="/fonts/Montserrat-Regular.woff2"
                as="font"
                type="font/woff2"
                crossOrigin="anonymous"
            />

            <link
                rel="prefetch"
                href="/fonts/Montserrat-Medium.woff"
                as="font"
                type="font/woff"
                crossOrigin="anonymous"
            />
            <link
                rel="prefetch"
                href="/fonts/Montserrat-Medium.woff2"
                as="font"
                type="font/woff2"
                crossOrigin="anonymous"
            />

            <link
                rel="preload"
                href="/fonts/Montserrat-Bold.woff"
                as="font"
                type="font/woff"
                crossOrigin="anonymous"
            />
            <link
                rel="preload"
                href="/fonts/Montserrat-Bold.woff2"
                as="font"
                type="font/woff2"
                crossOrigin="anonymous"
            />


          
        
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
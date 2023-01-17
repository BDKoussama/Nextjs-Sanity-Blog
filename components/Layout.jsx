import Meta from './Meta';
import Header from './Header';
import ScrollToTop from './ScrollToTop';
import Footer from './Footer';

export default function Layout({children}) {
    return (
        <>
            <Meta/>
            <Header/>
            <ScrollToTop/>
                <main> {children} </main>
            <Footer />
        </>
    )
}
import {useState , useEffect} from 'react'

export default function ScrollToTop() {

    const [showBtn , setShowBtn] = useState(false)

    useEffect(() => {
        window.onscroll = function(){
            scrollFunction();
        }
    },[])
    
    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            //btnRef.current.style.display = 'block';
            setShowBtn(true);
        } else {
            //btnRef.current.style.display = 'none';
            setShowBtn(false);
        }
    }

    function backToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    return (
        <button
            type="button"
            style={{ display : showBtn ? 'block' : 'none'}}
            aria-label = "scroll to top"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            className="z-50 inline-block p-3 bg-main  text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-hover hover:shadow-lg focus:bg-hover focus:shadow-lg focus:outline-none focus:ring-0 active:bg-hover active:shadow-lg transition duration-150 ease-in-out hidden bottom-5 right-5 fixed"
            id="btn-back-to-top"
            onClick={backToTop}
        >
                <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    className="w-4 h-4"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                >
                <path
                fill="currentColor"
                d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"
                ></path>
            </svg>
        </button>
    )
}
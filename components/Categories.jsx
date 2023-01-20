import Link from "next/link";



export default function Categories({categories}) {
    return (
        <div className="p-8 pb-12 mb-8">
            <span className="text-xl block mb-8 font-semibold border-b pb-4">Categories</span>
            {categories.length > 0  && categories.map((category, index) => (
                <Link key={index} href="/blog/category/[category]"  as={`/blog/category/${category.title}`}>
                    <a className={`cursor-pointer text-white rounded-full inline-block mr-2 mb-2 py-1 px-3 bg-[#8154ac] transition duration-300 capitalize ease transform hover:bg-[#603d81]`}>{category.title}</a>
                </Link>
            ))}
        </div>
    )
}


/**<div className="p-8 pb-12 mb-8">
            <span className="text-xl block mb-8 font-semibold border-b pb-4">Categories</span>
            {categories.length > 0  && categories.map((category, index) => (
                <Link key={index} href="/blog/category/[category]"  as={`/blog/category/${category.title}`}>
                    <a className={`cursor-pointer hover:underline  block ${(index === categories.length - 1) ? 'border-b-0' : 'border-b'} pb-3 mb-3`}>{category.title}</a>
                </Link>
            ))}
        </div> */
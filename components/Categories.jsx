import Link from "next/link";



export default function Categories({categories}) {
    return (
        <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
            <span className="text-xl block mb-8 font-semibold border-b pb-4">Categories</span>
            {categories.length > 0  && categories.map((category, index) => (
                <Link key={index} href="/blog/category/[category]"  as={`/blog/category/${category.title}`}>
                    <a className={`cursor-pointer hover:underline  block ${(index === categories.length - 1) ? 'border-b-0' : 'border-b'} pb-3 mb-3`}>{category.title}</a>
                </Link>
            ))}
        </div>
    )
}
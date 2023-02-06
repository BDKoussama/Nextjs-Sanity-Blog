import Link from "next/link";

export default function Categories({categories}) {
    return (
        <div className="px-2 py-8 pb-12 mb-8">
            <span className="text-xl block mb-8 font-semibold border-b pb-4">Categories</span>
            {categories.length > 0  && categories.map((category, index) => (
                <Link key={index} href="/blog/categories/[category]"  as={`/blog/categories/${category.slug}`}>
                    <span className={`cursor-pointer text-white rounded-full inline-block mr-2 mb-2 py-1 px-3 bg-[#8154ac] transition duration-300 capitalize ease transform hover:bg-[#603d81]`}>{category.title}</span>
                </Link>
            ))}
        </div>
    )
}


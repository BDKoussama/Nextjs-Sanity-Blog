import FeaturedPostCard from './FeaturedPostCard';

export default function FeaturedPosts({posts}){
    
    return (
        <div className='bg-white shadow-lg rounded-lg p-4 lg:p-8  pb-12 mb-8'>
            <h1 className='text-xl block mb-4 font-semibold'>Featured Posts</h1>
            <div className='relative overflow-hidden gallery-wrapper'>
                <div className='gallery'>
                    {posts.length !== 0 && posts.map((post , index) => (
                        <FeaturedPostCard post={post} index = {index} key={post._id} />
                    ))}
                </div>
            </div>
        </div>
    )
} 
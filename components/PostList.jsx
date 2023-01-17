import Pagination from "./Pagination"
import PostCard from "./PostCard";

export default function PostList({posts, totalPages , currentPage}) {

  // Calculate the disabled states of the next and previous links
  const nextDisabled = parseInt(currentPage, 10) === parseInt(totalPages, 10);
  const prevDisabled = parseInt(currentPage, 10) === 1;

    return (
        <>
         <div className="grid grid-cols-1 md:grid-cols-1  lg:grid-cols-12 gap-5">
             { posts.map(post =>  <PostCard post = {post} key = {post._id}/> ) } 
         </div>

          <Pagination
            totalPages = {totalPages}
            currentPage = {currentPage}
            nextDisabled = {nextDisabled}
            prevDisabled = {prevDisabled}
          />
        </>
    )
}
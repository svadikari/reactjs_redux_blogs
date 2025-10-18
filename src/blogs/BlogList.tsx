import type { Blog } from "../Blog";
import NoContent from "../components/NoContent";
import BlogItem from "./BlogItem";

const BlogList = ({ blogs }: { blogs: Blog[] }) => {
  return (
    <>
      <span className="text-2xl font-bold mb-8m text-gray-900 dark:text-white">
        Blogs
      </span>
      {blogs.length > 0 ? (
        blogs.map((blog) => <BlogItem key={blog.id} blog={blog} />)
      ) : (
        <NoContent message="No Blogs Found!" />
      )}
    </>
  );
};

export default BlogList;

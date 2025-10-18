import type { Blog } from "../Blog";
import BlogItem from "./BlogItem";

const BlogList = ({ blogs }: { blogs: Blog[] }) => {
  return (
    <>
      <span className="text-2xl font-bold mb-8">Blogs</span>
      {blogs.map((blog) => (
        <BlogItem key={blog.id} blog={blog} />
      ))}
    </>
  );
};

export default BlogList;

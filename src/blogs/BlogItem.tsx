import { Link } from "react-router";
import type { Blog } from "../Blog";
import moment from "moment";

const BlogItem = ({ blog }: { blog: Blog }) => {
  return (
    <Link
      to={`/blogs/${blog.id?.toString()}`}
      className="blog-card flex flex-col"
    >
      <div className="flex flex-row justify-between items-center mb-2">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {blog.title}
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {moment(blog.createdAt).fromNow()}
        </span>
      </div>
      <div className="mb-4">
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {blog.body?.substring(0, 100)}...
        </p>
      </div>
    </Link>
  );
};

export default BlogItem;

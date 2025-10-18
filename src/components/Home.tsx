import type { Blog } from "../Blog";
import BlogList from "../blogs/BlogList";

const Home = ({ blogs }: { blogs: Blog[] }) => {
  return (
    <div className="container mt-2 mx-auto shadow-md p-4 rounded">
      <BlogList blogs={blogs} />
    </div>
  );
};

export default Home;

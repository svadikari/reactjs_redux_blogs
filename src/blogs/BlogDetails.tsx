import { useEffect, useState, type FormEvent } from "react";
import type { AppDispatch, RootState } from "../store/rootStore";
import { useDispatch, useSelector } from "react-redux";
import { addBlog, fetchBlogById } from "./blogSlice";
import { Link, useNavigate, useParams } from "react-router";

const BlogDetails = () => {
  const { blogId } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [error, setError] = useState("");

  const dispatch: AppDispatch = useDispatch();
  const blog = useSelector((state: RootState) =>
    state.blog.blogs.find((blog) => blog.id?.toString() === blogId)
  );

  useEffect(() => {
    dispatch(fetchBlogById(blogId!));
  }, [dispatch]);

  const onSubmitForm = (e: FormEvent) => {
    e.preventDefault();
    if (title && body) {
      dispatch(addBlog({ id: Number(blogId), title, body, userId: 4 }));
      navigate("/");
    } else {
      setError("Update title/body to take the effect!");
    }
  };

  return (
    <div className="flex flex-col shadow-xl m-4 justify-items-center">
      <span className="m-5 font-bold text-center text-2xl">
        Update Blog Details{" "}
      </span>
      {error && (
        <div
          className="mx-20 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative fade-out-animation"
          role="alert"
        >
          <strong className="font-bold mr-3">Error!</strong>
          <span className="block sm:inline">{error}</span>
        </div>
      )}
      <form
        className="flex flex-col shadow-xl m-6 justify-items-center"
        onSubmit={(e) => onSubmitForm(e)}
      >
        <div className="mb-3">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            placeholder="Title 1"
            required
            defaultValue={blog?.title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="body">Content</label>
          <textarea
            id="body"
            placeholder="Content 1"
            required
            defaultValue={blog?.body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </div>
        <div className="flex flex-row my-2 justify-center justify-items-center">
          <button
            type="submit"
            className={`py-2 rounded-md ${" bg-indigo-600 text-white hover:bg-indigo-700 font-semibold transition"}`}
          >
            <span className="p-4">Update Blog</span>
          </button>
          <Link
            to="/"
            className="ml-2 py-2 text-center rounded-md text-white hover:bg-amber-700 bg-amber-600 font-semibold transition"
          >
            <span className="p-4">Cancel</span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default BlogDetails;

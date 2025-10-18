import { useEffect, useState, type FormEvent } from "react";
import type { AppDispatch, RootState } from "../store/rootStore";
import { useDispatch, useSelector } from "react-redux";
import { deleteBlog, fetchBlogById, updateBlog } from "./blogSlice";
import { Link, useNavigate, useParams } from "react-router";
import type { Blog } from "../Blog";

const BlogDetails = () => {
  const { blogId } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [error, setError] = useState("");
  const [edit, setEdit] = useState(true);

  const dispatch: AppDispatch = useDispatch();
  const blog = useSelector((state: RootState) =>
    state.blog.blogs.find((blog) => blog.id?.toString() === blogId)
  );

  useEffect(() => {
    dispatch(fetchBlogById(blogId!));
  }, [dispatch]);

  const onSubmitForm = (e: FormEvent) => {
    e.preventDefault();
    if (title || body) {
      let updatedBlog = { id: Number(blogId) } as Blog;
      if (title) updatedBlog.title = title;
      if (body) updatedBlog.body = body;
      dispatch(updateBlog(updatedBlog));
      navigate("/");
    } else {
      setError("Update title/body to take the effect!");
    }
  };

  const onDelteBlog = (id: string) => {
    dispatch(deleteBlog(id));
    navigate("/");
  };

  return (
    <div className="flex flex-col shadow-xl m-4 justify-items-center">
      <div className="flex flex-row m-5 font-bold justify-center text-center text-2xl dark:text-white">
        <span className="mr-3">Blog Details </span>
        <span
          className={`inline-flex items-center justify-center rounded-md p-2 shadow-lg border-4 ${
            edit ? "border-indigo-200" : "border-gray-200"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="3"
            stroke="currentColor"
            className="w-3 h-3 text-gray-800 dark:text-white"
            onClick={() => setEdit(!edit)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`${edit ? "text-indigo-500" : "text-indigo-200"}`}
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
            />
          </svg>
        </span>
        <img
          src="/Trash.svg"
          width="30"
          height="30"
          alt="Delete"
          className="ml-4"
          onClick={() => onDelteBlog(blogId!)}
        />
      </div>
      {error && (
        <div
          className="mx-20 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
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
            disabled={edit}
            required
            defaultValue={blog?.title}
            className={edit ? "barder-0" : "border"}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="body">Content</label>
          <textarea
            id="body"
            placeholder="Content 1"
            required
            disabled={edit}
            defaultValue={blog?.body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </div>
        <div className="flex flex-row my-2 justify-center justify-items-center">
          {!edit && (
            <button
              type="submit"
              className={`py-2 rounded-md text-white font-semibold transition ${
                !edit ? "bg-indigo-600 hover:bg-indigo-700" : "bg-gray-200"
              }`}
            >
              <span className="p-4">Update Blog</span>
            </button>
          )}
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

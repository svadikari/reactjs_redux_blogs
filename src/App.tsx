import Header from "./components/Header";
import { Route, Routes } from "react-router";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NewBlog from "./blogs/NewBlog";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "./store/rootStore";
import { fetchAllBlogs } from "./blogs/blogSlice";
import BlogDetails from "./blogs/BlogDetails";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const blogs = useSelector((state: RootState) => state.blog.blogs);
  const dispatch: AppDispatch = useDispatch();

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    dispatch(fetchAllBlogs());
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [dispatch]);

  return (
    <div className="flex flex-col md:mx-20 min-h-screen">
      <Header toggleTheme={toggleTheme} />
      <Routes>
        <Route path="/new-blog" element={<NewBlog />} />
        <Route path="/blogs/:blogId" element={<BlogDetails />} />
        <Route path="*" element={<Home blogs={blogs} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

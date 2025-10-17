import type { Blog } from './Blog'
import Header from './blogs/Header'
import { Route, Routes } from 'react-router'
import Footer from './blogs/Footer'
import Home from './blogs/Home'
import NewBlog from './blogs/NewBlog'

function App() {
  const blogs: Blog[] = [
    { id: 1, title: 'Title 1', content: 'Title 1 Content', userId: 2, createdAt: new Date() },
    { id: 2, title: 'Title 2', content: 'Title 2 Content', userId: 2, createdAt: new Date() },
    { id: 3, title: 'Title 3', content: 'Title 3 Content', userId: 3, createdAt: new Date() },
  ]

  const addBlog = (blog: Blog) => {
    blogs.push({ ...blog, id: blogs.length + 1 })
  }
  return (
    <div className="flex flex-col">
      <Header />
      <Routes>
        <Route path="/new-blog" element={<NewBlog addBlog={addBlog} />} />
        <Route path="*" element={<Home blogs={blogs} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App

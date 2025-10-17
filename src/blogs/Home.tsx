import type { Blog } from '../Blog'
import BlogList from './BlogList'

const Home = ({ blogs }: { blogs: Blog[] }) => {

  return (
    <div className='container mt-2'>
      <BlogList blogs={blogs} />
    </div>
  )
}

export default Home
import type { Blog } from "../Blog"
import BlogDetail from "./BlogDetail"

const BlogList = ({ blogs }: { blogs: Blog[] }) => {
    return (
        <>
            <h1>Blogs</h1>
            {
                blogs.map(blog => (
                    <BlogDetail key={blog.id} blog={blog} />
                ))
            }
        </>
    )
}

export default BlogList

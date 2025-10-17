import type { Blog } from "../Blog"

const BlogDetail = ({ blog }: { blog: Blog }) => {
    return (
        <div className="card">
            <div className="card-header">
                <h5>{blog.userId} - `{blog.createdAt.getMonth()}, {blog.createdAt.getDate()} {blog.createdAt.getFullYear()}`</h5>
            </div>
            <div className="card-body">
                <h5 className="card-title">{blog.title}</h5>
                <p className="card-text">{blog.content}</p>
            </div>
        </div>
    )
}

export default BlogDetail

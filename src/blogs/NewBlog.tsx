import { useState, type FormEvent } from "react"
import { Link, useNavigate } from "react-router"
import type { Blog } from "../Blog";

const NewBlog = ({ addBlog }: { addBlog: Blog | any }) => {
    const navigate = useNavigate()
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('')

    const onSubmitForm = (e: FormEvent) => {
        e.preventDefault();
        if (title && content) {
            const blog = { title, content, createdAt: new Date().toLocaleString(), userId: 2 };
            addBlog(blog);
        }
        navigate("/");
    }

    return (
        <div>
            <form onSubmit={(e) => onSubmitForm(e)}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" placeholder="Title 1" required onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="content" className="form-label">Content</label>
                    <textarea className="form-control" id="content" required onChange={(e) => setContent(e.target.value)} ></textarea>
                </div>
                <div className="col-auto">
                    <button type="submit" className="btn btn-primary mb-3">Add Blog</button>
                    <Link to="/" className="btn btn-secondary mb-3 ml-3">Cancel</Link>
                </div>
            </form >
        </div >
    )
}

export default NewBlog

import { Link } from "react-router"

const Header = () => {
    return (
        <nav className="">
            <Link to="/" className="text-white font-bold hover:text-blue-500">Blogs!</Link>
            <ul className="flex gap-3">
                <li className="">
                    <Link to="/" className="text-white hover:text-blue-500">Home</Link>
                </li>
                <li className="">
                    <Link to="/new-blog" className="text-white hover:text-blue-500">Add Blog</Link>
                </li>
            </ul>
        </nav >
    )
}

export default Header

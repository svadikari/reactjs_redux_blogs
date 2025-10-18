import { Link } from "react-router";

const Header = ({ toggleTheme }: { toggleTheme: () => void }) => {
  return (
    <nav>
      <Link to="/" className="text-white font-bold hover:text-blue-500">
        Blogs
      </Link>
      <ul className="flex gap-3">
        <li>
          <Link to="/" className="text-white hover:text-blue-500">
            Home
          </Link>
        </li>
        <li>
          <Link to="/new-blog" className="text-white hover:text-blue-500">
            Add Blog
          </Link>
        </li>
        <li>
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              value=""
              className="sr-only peer "
              onClick={toggleTheme}
            />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
          </label>
        </li>
      </ul>
    </nav>
  );
};

export default Header;

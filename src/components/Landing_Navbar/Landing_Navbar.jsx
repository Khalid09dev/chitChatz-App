import { Link } from "react-router-dom";

const Landing_Navbar = () => {
    return (
        <div>
            <nav className="flex justify-around items-center pt-5">
                <Link to="/"><h2 className="text-[#FB8E0B] text-3xl font-semibold">ChitChatz</h2></Link>
                <ul className="flex gap-10 text-[#1B1C20] font-medium dm-sans">
                    <li><a>Demos</a></li>
                    <li><a>About</a></li>
                    <li><a>Blog</a></li>
                    <li><a>Pages</a></li>
                    <li><a>Contact</a></li>
                </ul>
                <div className="flex items-center gap-7 dm-sans">
                    <Link to="/login"><button>Login</button></Link>
                    <Link to="/signup"><button className="bg-[#FB8E0B] text-white py-2 px-3.5 rounded-md">Get Started Free</button></Link>
                </div>
            </nav>
        </div>
    );
};

export default Landing_Navbar;
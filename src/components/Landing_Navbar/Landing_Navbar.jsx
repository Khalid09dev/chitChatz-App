
const Landing_Navbar = () => {
    return (
        <div>
            <nav className="flex justify-around items-center pt-5">
                <h2 className="text-[#FB8E0B] text-3xl font-semibold">ChitChatz</h2>
                <ul className="flex gap-10 text-[#1B1C20] font-medium dm-sans">
                    <li><a>Demos</a></li>
                    <li><a>About</a></li>
                    <li><a>Blog</a></li>
                    <li><a>Pages</a></li>
                    <li><a>Contact</a></li>
                </ul>
                <div className="flex gap-7 dm-sans">
                    <button>Login</button>
                    <button className="bg-[#FB8E0B] text-white py-2 px-3.5 rounded-md">Get Started Free</button>
                </div>
            </nav>
        </div>
    );
};

export default Landing_Navbar;
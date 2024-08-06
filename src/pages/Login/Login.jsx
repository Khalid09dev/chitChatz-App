import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";


const Login = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-blue-900">
            <div className="w-2/6 border border-[#5882c17d] py-10 px-20 bg-[#5882c147] backdrop-blur-2xl rounded-lg">
                <h2 className="text-[#FB8E0B] text-3xl font-semibold text-center pb-8">ChitChatz</h2>
                <span className="text-white text-2xl">Login</span>
                <form className="pt-4">
                    <label className="text-white">Email</label> <br />
                    <input className="w-full py-2 pl-3 rounded-md mb-4" type="text" placeholder="username@gmail.com"/> <br />
                    <label className="text-white">Password</label> <br />
                    <input className="w-full py-2 pl-3 rounded-md mb-1" type="password" name="" id="" placeholder="Password"/> <br />
                    <span className="text-white">Forget Password?</span> <br />
                    <input className="text-white bg-[#003465] w-full text-base py-2 rounded-lg mt-7" type="submit" value="Sign in" />
                </form>
                    <p className="text-white text-center py-5">or continue with</p>
                    <div className="flex justify-center gap-4">
                        <FcGoogle className="p-1 w-16 bg-white text-[35px] rounded-md"/>
                        <FaGithub className="p-1 w-16 bg-white text-[35px] rounded-md"/>
                        <FaFacebook className="p-1 w-16 bg-white text-blue-500 text-[35px] rounded-md"/>
                    </div>
                    <p className="text-white pt-5 text-center">Dont have an account yet?<span className="pl-1">Register for free</span></p>
            </div>
        </div>
    );
};

export default Login;
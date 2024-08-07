import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from 'sweetalert2';

const Login = () => {
    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();

    //handle signin
    const handleSignIn = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const userCredentials = {email, password};

        signIn(userCredentials.email, userCredentials.password)
        .then((result) => {
            console.log(result.user);
            if(result.user) {
                navigate('/app');
                Swal.fire({
                    icon: "success",
                    title: "Successfully Logged In",
                    showConfirmButton: false,
                    timer: 2000
                });
            }
        })
        .catch((error) => {
            console.log(error.message);
        })

    }

    //handle password visibility toggle
    const [visible, setVisible] = useState(false);
    const handlePassToggle2 = () => {
        setVisible(!visible);
        // console.log('password visibility toggle', visible);
    }
    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-blue-900">
            <div className="w-2/6 border border-[#5882c17d] py-10 px-20 bg-[#5882c147] backdrop-blur-2xl rounded-lg">
                <h2 className="text-[#FB8E0B] text-3xl font-semibold text-center pb-8">ChitChatz</h2>
                <span className="text-white text-2xl">Login</span>
                <form className="pt-4" onSubmit={handleSignIn}>
                    <label className="text-white">Email</label> <br />
                    <input className="w-full py-2 pl-3 rounded-md mb-4" type="email" name="email" placeholder="username@gmail.com"/> <br />
                    <label className="text-white">Password</label> <br />
                    <div className="relative">
                        <input className="w-full py-2 pl-3 rounded-md mb-1" type={visible ? 'text' : 'password'} name="password" id="" placeholder="Password"/><div className="absolute bottom-3.5 right-4 cursor-pointer text-xl" onClick={handlePassToggle2}>{visible ? <FaRegEye/> : <FaRegEyeSlash/>}</div>
                    </div><br />
                    <input className="text-white bg-[#003465] w-full text-base py-2 rounded-lg cursor-pointer" type="submit" value="Sign in" />
                </form>
                    <p className="text-white text-center py-5">or continue with</p>
                    <div className="flex justify-center gap-4">
                        <FcGoogle className="p-1 w-16 bg-white text-[35px] rounded-md"/>
                        <FaGithub className="p-1 w-16 bg-white text-[35px] rounded-md"/>
                        <FaFacebook className="p-1 w-16 bg-white text-blue-500 text-[35px] rounded-md"/>
                    </div>
                    <p className="text-white pt-5 text-center">Dont have an account yet?<Link to="/signup" className="pl-1">Register for free</Link></p>
            </div>
        </div>
    );
};

export default Login;
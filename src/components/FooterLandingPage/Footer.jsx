import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-[#F8F8FA] pt-16">
            <h2 className="text-[#1B1C20] text-[35px] font-bold leading-[40px] text-center">Ready to grow your business? <br /> Start with Apex, become faster <br /> every second</h2>
            <div className="flex justify-center pt-7">
                <button className="bg-[#FB8E0B] text-white py-2 px-3.5 rounded-md">Start Chatting Now</button>
            </div>
            <div className="flex justify-around pt-24 pb-8">
                <h2 className="text-[#FB8E0B] text-3xl font-semibold">ChitChatz</h2>
                <ul className="flex gap-10 text-[#1B1C20] dm-sans text-[17px] font-medium">
                    <li><a href="#">About</a></li>
                    <li><a href="#">Features</a></li>
                    <li><a href="#">Works</a></li>
                    <li><a href="#">Support</a></li>
                </ul>
                <div className="flex gap-4 text-xl text-[#FD6003]">
                    <FaTwitter />
                    <FaFacebookF />
                    <FaInstagram />
                    <FaGithub />
                </div>
            </div>
            <hr className="mx-32"/>
            <div className="flex justify-around gap-80 py-7 text-[#797B89] dm-sans">
                <p>© Copyright 2024, All Rights Reserved</p>
                <p>Privacy Policy <span>Terms & Conditions</span></p>
            </div>
        </div>
    );
};

export default Footer;
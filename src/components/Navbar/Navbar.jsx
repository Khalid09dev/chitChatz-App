import profile1 from '../../assets/Profile-1.svg';
import { SlHome } from "react-icons/sl";
import { AiOutlineMessage } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { RiLogoutBoxRLine } from "react-icons/ri";


const Navbar = () => {
    return (
        <div className='my-auto'>
            <nav className='bg-[#6E00FF] grid gap-56 w-24 rounded-3xl'>
                <div className='grid gap-7 items-center mx-auto'>
                    <img className='w-[60px] rounded-full mt-6' src={profile1} alt="profile" />
                    <SlHome className='text-[35px] text-white mx-auto'/>
                    <AiOutlineMessage className='text-[35px] text-white mx-auto'/>
                    <IoMdNotificationsOutline className='text-[35px] text-white mx-auto'/>
                    <IoSettingsOutline className='text-[35px] text-white mx-auto'/>
                </div>
                <div className='mx-auto h-10 pb-20'>
                    <RiLogoutBoxRLine className='text-[35px] text-white'/>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;

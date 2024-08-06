import videoChat from '../../../public/woman-in-video-call.jfif';
import { MdFlipCameraAndroid } from "react-icons/md";
import { IoVideocam } from "react-icons/io5";
import { MdCallEnd } from "react-icons/md";
import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";


const LiveVideoChat = () => {
    return (
        <div className='flex justify-center gap-24 py-20 bg-[#F8F8FA]'>
            <div className='relative'>
                <img className='w-[500px]' src={videoChat} alt="#" />
                <div className='flex items-center gap-6 py-3.5 w-full justify-center absolute bottom-0 bg-[#12141D]'>
                    <MdFlipCameraAndroid className='text-white text-2xl'/>
                    <IoVideocam className='text-white text-2xl'/>
                    <MdCallEnd className='text-white bg-red-500 px-3 text-[50px] rounded-xl'/>
                    <div className='flex'>
                        <BiSolidLike className='text-white text-2xl'/>
                        <BiSolidDislike className='text-white text-2xl'/>
                    </div>
                </div>
            </div>
            <div>
                <h2 className='text-[40px] font-bold text-[#1B1C20] leading-[46px]'>Meet with anyone, <br /> with live video chat</h2>
                <p className='text-[#383A47] dm-sans pt-7'>Meet with anyone, with live video chat. Connect effortlessly <br /> with anyone through real-time video chat, bringing <br /> face-to-face interactions to your screen, anytime, anywhere. <br /> Experience seamless communication with high-quality video <br /> and audio, making your virtual meetings feel personal and <br /> engaging.</p>
            </div>
        </div>
    );
};

export default LiveVideoChat;
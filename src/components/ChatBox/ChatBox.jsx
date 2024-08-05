import groupProfile from '../../assets/Profile-1.svg';
import { IoCallOutline } from "react-icons/io5";
import { CiVideoOn } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdAttachFile } from "react-icons/md";
import { GoSmiley } from "react-icons/go";
import { CiCamera } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa";


const ChatBox = () => {
    return (
        <div className='ml-7 mt-14 p-5 rounded-xl bg-white'>
            <div className='flex items-center gap-56'>
                <div className='flex gap-4'>
                    <img className='w-[50px]' src={groupProfile} alt="user-profile" />
                    <div>
                        <h3 className='text-[#303030] text-2xl font-semibold'>Anil</h3>
                        <span>Online </span>
                        <span>- Last seen, 2.02pm</span>
                    </div>
                </div>
                <div className='flex gap-5'>
                    <IoCallOutline className='text-[#9747FF] text-3xl'/>
                    <CiVideoOn className='text-[#9747FF] text-3xl'/>
                    <BsThreeDotsVertical className='text-[#9747FF] text-3xl'/>
                </div>
            </div>
            <hr className='mt-2'/>

            <div className='flex justify-between'>
                <div>
                    <div className='mt-6'>
                        <span className='text-[#303030] bg-[#E7E7E7] py-2 px-4 rounded-3xl text-[17px]'>Hey There!</span>
                    </div>
                    <div className='mt-6'>
                        <span className='text-[#303030] bg-[#E7E7E7] py-2 px-4 rounded-3xl text-[17px]'>How are you?</span>
                    </div>
                </div>

                <div className='mt-20'>
                    <div className='mt-6'>
                        <span className='text-[#FFF] bg-[#6E00FF] py-2 px-4 rounded-3xl text-[17px]'>Hello!</span>
                    </div>
                    <div className='mt-6'>
                        <span className='text-[#FFF] bg-[#6E00FF] py-2 px-4 rounded-3xl text-[17px]'>I am fine and how are you?</span>
                    </div>
                </div>
            </div>
            <div className='flex justify-between'>
                <div>
                    <div className='mt-10'>
                        <span className='text-[#303030] bg-[#E7E7E7] py-2 px-4 rounded-3xl text-[17px]'>I am doing well, Can we meet tomorrow?</span>
                    </div>
                </div>

                <div className='mt-16'>
                    <div className='mt-6'>
                        <span className='text-[#FFF] bg-[#6E00FF] py-2 px-4 rounded-3xl text-[17px]'>Yes Sure!</span>
                    </div>
                </div>
            </div>

            <div className='flex items-center gap-4 justify-between mt-20'>
                <div className='relative w-11/12'>
                    <input className='bg-[#EFF6FCDE] py-3 pl-14 rounded-xl outline-none w-full' type="text" placeholder='Type your message here...'/>
                    <MdAttachFile className='absolute text-2xl bottom-3 left-3'/>
                    <div className='flex items-center gap-3 absolute right-0 bottom-3.5 pr-5'>
                        <GoSmiley className='text-2xl'/>
                        <CiCamera className='text-2xl'/>
                    </div>
                </div>
                <div className='bg-[#6E00FF] p-2.5 rounded-xl'>
                    <FaMicrophone className='text-white text-3xl'/>
                </div>
            </div>
        </div>
    );
};

export default ChatBox;
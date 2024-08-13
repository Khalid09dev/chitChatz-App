import groupProfile from '../../assets/Profile-1.svg';
import { IoCallOutline } from "react-icons/io5";
import { CiVideoOn } from "react-icons/ci";
import { BsSend, BsThreeDotsVertical } from "react-icons/bs";
import { MdAttachFile } from "react-icons/md";
import { GoSmiley } from "react-icons/go";
import { CiCamera } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa";
import Messagess from '../Messages/Messagess';
import useConversation from '../../zustand/useConversation.js';
import { useEffect, useState } from 'react';
import useSendMessage from '../../hooks/useSendMessage.js';

const ChatBox = () => {
    const {selectedConversation, setSelectedConversation} = useConversation();
    const {sendMessage} = useSendMessage();
    const [message, setMessage] = useState('');

    useEffect(() => {
        //Cleanup on component unmount
        return () => {setSelectedConversation(null)};
    }, [setSelectedConversation]);

    //Handle form submission event
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!message) return;
        await sendMessage(message);
        setMessage('');
    };
    return (
        <div>
            {
            !selectedConversation ? "" : <>
            <div className='ml-7 mt-14 p-5 rounded-xl bg-white'>
            <div className='flex items-center gap-56'>
                <div className='flex gap-4'>
                    <img className='w-[50px]' src={groupProfile} alt="user-profile" />
                    <div>
                        <h3 className='text-[#303030] text-2xl font-semibold'>{selectedConversation.name}</h3>
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

            <Messagess></Messagess>

            {/* message input here */}
            <div className='flex items-center gap-4 justify-between mt-20'>
                <form className='relative w-11/12' onSubmit={handleSubmit}>
                    <input className='bg-[#EFF6FCDE] py-3 pl-14 rounded-xl outline-none w-full' type="text" placeholder='Type your message here...' value={message} onChange={(e) => setMessage(e.target.value)}/>
                    <MdAttachFile className='absolute text-2xl bottom-3 left-3'/>
                    <div className='flex items-center gap-3 absolute right-0 bottom-3.5 pr-5'>
                        <button type='submit'><BsSend className='text-xl'></BsSend></button>
                        <GoSmiley className='text-2xl'/>
                        <CiCamera className='text-2xl'/>
                    </div>
                </form>
                <div className='bg-[#6E00FF] p-2.5 rounded-xl'>
                    <FaMicrophone className='text-white text-3xl'/>
                </div>
            </div>
        </div>
            </>
        }
        </div>
    );
};

export default ChatBox;
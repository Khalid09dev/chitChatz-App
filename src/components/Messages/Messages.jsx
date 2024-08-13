import { IoSearchOutline } from "react-icons/io5";
import Groups from "../Groups/Groups";
import Peoples from "../Peoples/Peoples";
import ChatBox from "../ChatBox/ChatBox";
import { useState } from "react";
import useConversation from '../../zustand/useConversation.js';
import useGetConversations from "../../hooks/useGetConversations.js";

const Messages = () => {
    const {setSelectedConversation} = useConversation();
    const {conversations} = useGetConversations();

    //function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(search)
        if(!search) return;
        if(search.length < 3) {
            return console.log("Search query should be at least 3 characters long");
        }

        const conversation = conversations.find((e) => e.name.toLowerCase().includes(search.toLowerCase()));

        if(conversation) {
            setSelectedConversation(conversation);
            setSearch('');
        }
        else {
            console.log("No conversation found matching the search query");
            setSearch('');
        }
    }

    const [search, setSearch] = useState('');
    return (
        <div className="flex">
            <div>
                <form className="flex relative pt-16 ml-7" onSubmit={handleSubmit}>
                    <input className="pl-12 py-3.5 w-full rounded-xl placeholder:text-[#7C7C7C] placeholder:text-xl outline-none shadow-md shadow-[#79c5ef61]" onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search" value={search}/>
                    <IoSearchOutline className="absolute left-4 text-2xl mt-3"/>
                </form>

                <Groups></Groups>
                <Peoples></Peoples>
            </div>
            <div>
                <ChatBox></ChatBox>
            </div>
        </div>
    );
};

export default Messages;
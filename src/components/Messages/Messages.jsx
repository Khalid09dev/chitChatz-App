import { useRef } from "react";
import { IoSearchOutline } from "react-icons/io5";
import Groups from "../Groups/Groups";
import Peoples from "../Peoples/Peoples";

const Messages = () => {
    const inputRef = useRef(null);
    
    //function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputRef.current.value);
    }
    return (
        <div>
            <form className="flex relative pt-16 ml-7" onSubmit={handleSubmit}>
                <input className="pl-12 py-3.5 w-full rounded-xl placeholder:text-[#7C7C7C] placeholder:text-xl outline-none shadow-md shadow-[#79c5ef61]" ref={inputRef} type="text" placeholder="Search"/>
                <IoSearchOutline className="absolute left-4 text-2xl mt-3"/>
            </form>

            <Groups></Groups>
            <Peoples></Peoples>
        </div>
    );
};

export default Messages;
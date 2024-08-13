import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages";
import Messagee from "./Messagee";
import useListenMessages from '../../hooks/useListenMessges.js';

const Messagess = () => {
    const {messages} = useGetMessages();
    // console.log(messages);
    const lastMessageRef = useRef(null);

    //Initialize message listener
    useListenMessages();

     // Scroll to the bottom of the messages list when new messages arrive
    useEffect(() => {
        // Cleanup timeout on component unmount
        setTimeout(() => {
            lastMessageRef.current?.scrollIntoView({behavior: "smooth"});
        }, 100);
    }, [])
    return (
        <div className="overflow-auto relative">
            {
                messages.length > 0 && messages.map((message) => (
                    <div key={message._id} ref={lastMessageRef}>
                        <Messagee message={message}></Messagee>
                    </div>
                ))
            }
        </div>
    );
};

export default Messagess;
import { useEffect } from "react";
import useConversation from "../zustand/useConversation";

const useGetMessages = () => {
    const {messages, setMessages, selectedConversation} = useConversation();

    useEffect(() => {
        //Function to fetch messages
        const getMessages = async () => {
            try {
                const res = await fetch(`/api/messages/${selectedConversation._id}`);
                const data = await res.json();

                if(data.error) {
                    throw new Error(data.error);
                }
                
                // Update conversation state with fetched messages
                setMessages(data);
            } catch (error) {
                console.log('Error fetching messages:', error);
            }
        };

        // Check if selectedConversation has an _id
        if(selectedConversation?._id) {
            getMessages();
        }
    }, [selectedConversation?._id, setMessages]);
    
    return { messages };
};

export default useGetMessages;
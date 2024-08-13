import { useEffect, useState } from "react";

const useGetConversations = () => {
    const [conversations, setConversations] = useState([]);

    useEffect(() => {
        //Function to fetch conversations
        const getCoversations = async () => {
            try {
                const res = await fetch('/api/users');
                const data = await res.json();

                if(data.error) {
                    throw new Error(data.error);
                }

                //Update state with fetched conversations
                setConversations(data);
            } catch (error) {
                //Log error for debugging purposes
                console.log(error);
            }
        }

        //Call the function to fetch conversations on component mount
        getCoversations();

    }, []);
    
    //Return the current state of conversations
    return { conversations };
};

export default useGetConversations;

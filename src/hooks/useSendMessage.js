import useConversation from "../zustand/useConversation";

const useSendMessage = () => {
    const {messages, setMessages, selectedConversation} = useConversation();

    //Send Message Function
    const sendMessage = async (message) => {
        try {
            const res = await fetch(`/api/messages/send/${selectedConversation._id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({message}),
            });

            const data = await res.json();
            if(data.error) {
                throw new Error(data.error);
            }

            // Update messages state with the new message
            setMessages([...messages, data]);
        } catch (error) {
            console.log('Error sending message:', error);
        }
    }
    return {sendMessage};
};

export default useSendMessage;
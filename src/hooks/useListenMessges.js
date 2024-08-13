import { useEffect } from 'react';
import { useSocketContext } from '../context/SocketContext';
import useConversation from '../zustand/useConversation.js';
import messageSound from '../assets/sound/notification.mp3';

const useListenMessages = () => {
    const { socket } = useSocketContext();
    const { messages, setMessages } = useConversation();

    useEffect(() => {
        // Listen for new messages from the socket
        socket?.on('newMessage', (newMessage) => {
            newMessage.shouldShake = true; // Mark message to trigger shake animation
            new Audio(messageSound).play(); // Play notification sound
            setMessages([...messages, newMessage]); // Update conversation state
        });

        // Clean up the event listener on unmount or socket change
        return () => socket?.off('newMessage');
    }, [socket, messages, setMessages]); // Dependencies for effect

};

export default useListenMessages;

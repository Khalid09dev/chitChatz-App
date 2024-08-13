import PropTypes from 'prop-types';
import useConversation from "../../zustand/useConversation";
import {useAuthContext} from '../../context/AuthContext';
import {extractTime} from '../../utils/extractTime.js';

const Messagee = ({message}) => {
    const {authUser} = useAuthContext();
    const {selectedConversation} = useConversation();

     // Format the timestamp
    const formattedTime = extractTime(message.createdAt);
    // Check if the message is from the current user
    const fromMe = message.senderId === authUser?._id;

    // Set class and profile picture based on sender
    const chatClassName = fromMe ? 'chat-end' : 'chat-start'; 
    const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
    const bubbleBgColor = fromMe ? 'bg-blue-500' : 'bg-gray-500';
    const shakeClass = message.shouldShake ? 'shake' : '';

    return (
        <div className={`chat ${chatClassName}`}>
            <div className="chat-image avatar">
                <div className="w-10 rounded-full"> 
                    <img src={profilePic} alt="#" />
                </div>
            </div>
            <div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass}`}>{message.message}</div>
            <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">{formattedTime}</div>
        </div>
    );
};

// Define PropTypes for the component
Messagee.propTypes = {
    message: PropTypes.shape({
        senderId: PropTypes.string.isRequired,
        createdAt: PropTypes.string.isRequired,
        message: PropTypes.string.isRequired,
        shouldShake: PropTypes.bool
    }).isRequired
};

export default Messagee;
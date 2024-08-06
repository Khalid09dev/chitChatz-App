import directSelling from '/public/svgviewer-output.svg';

const SellingConversation = () => {
    return (
        <div className='flex items-center py-12 justify-center'>
            <div>
                <h2 className="text-[#1B1C20] text-[35px] font-bold leading-[40px]">Start selling directly <br /> inside conversations</h2>
                <p className='text-[#383A47] dm-sans text-base py-6'>Start selling directly inside conversations. Transform <br /> your chats into a seamless sales experience, allowing <br /> you to showcase and sell products within the conversation. <br /> Engage with customers in real-time, answer questions instantly, <br /> and close deals faster without ever leaving the chat.</p>
                <button className="bg-[#FB8E0B] text-white py-2 px-3.5 rounded-md">Start Chatting Now</button>
            </div>
            <div>
                <img src={directSelling} alt="#" />
            </div>
        </div>
    );
};

export default SellingConversation;
import { IoVideocam } from "react-icons/io5";
import { MdTimer } from "react-icons/md";
import { MdSignalWifi4BarLock } from "react-icons/md";


const FeaturesLandingPage = () => {
    return (
        <div className="pt-20 pb-20">
            <h3 className="text-[#1B1C20] text-[36px] text-center font-bold">Features for a better experience</h3>
            <div className="flex gap-20 justify-center pt-12">
                <div className="flex gap-4">
                    <IoVideocam className="text-[#FD6003] bg-[#FEC4A8] text-[40px] p-2.5 rounded-full"/>
                    <div>
                        <h3 className="text-[18px] font-bold text-[#1B1C20]">Video Messaging</h3>
                        <p className="text-[#383A47] dm-sans pt-1">This software is very easy for you to <br /> manage. You can use it as you wish.</p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <MdTimer className="text-[#4DA44E] bg-[#A0D1A0] text-[40px] p-2.5 rounded-full"/>
                    <div>
                        <h3 className="text-[18px] font-bold text-[#1B1C20]">Save your time</h3>
                        <p className="text-[#383A47] dm-sans pt-1">This software is very easy for you to <br /> manage. You can use it as you wish.</p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <MdSignalWifi4BarLock className="text-[#FB8E0B] bg-[#FDE3B5] text-[40px] p-2.5 rounded-full"/>
                    <div>
                        <h3 className="text-[18px] font-bold text-[#1B1C20]">Keep safe & private</h3>
                        <p className="text-[#383A47] dm-sans pt-1">This software is very easy for you to <br /> manage. You can use it as you wish.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturesLandingPage;
import { FaArrowRight } from "react-icons/fa6";
import bannerImg from '/public/banner-user.png'
import happyCus1 from '/public/happy_cus1.jfif';
import happyCus2 from '/public/happy_cus2.jfif';
import happyCus3 from '/public/happy_cus3.jfif';
import { FaStar } from "react-icons/fa";
import bannerImgProfile from '../../../public/banner-img-ronald.jfif';
import bannerImgProfile2 from '../../../public/banner-img-jenny.jfif';

const Landing_Banner = () => {
    return (
        <div className="flex justify-center pt-20">
            <div className="pt-14">
                <h2 className="text-[50px] text-[#1B1C20] font-bold leading-[53px]">Start Chatting with <br />anyone, anytime and <br /> anywhere with ChitChatz</h2>
                <p className="text-[#383A47] text-[18px] dm-sans pt-6 pb-4">Great software that allows you to chat from any <br /> place at any time without any interruption.</p>
                <div className="flex relative">
                    <button className="text-white bg-[#FB8E0B] py-2.5 pl-4 pr-12 rounded-md dm-sans">Start Chatting Now</button>
                    <FaArrowRight className="absolute text-white top-3.5 left-[167px]"/>
                </div>
                <div className="flex pt-24">
                    <div className="flex items-center gap-5">
                        <div className="flex">
                            <img className="w-[50px] h-[50px] rounded-full -ml-2.5 z-10" src={happyCus1} alt="happy_customer_profile" />
                            <img className="w-[50px] h-[50px] rounded-full -ml-2.5 z-10 border border-white" src={happyCus2} alt="happy_customer_profile" />
                            <img className="w-[50px] h-[50px] rounded-full -ml-2.5 z-10 border border-white" src={happyCus3} alt="happy_customer_profile" />
                        </div>
                        <div>
                            <span className="text-[#1B1C20] text-[25px] font-bold dm-sans">2291</span>
                            <p className="text-base text-[#383A47] dm-sans leading-3">Happy Customers</p>
                        </div>
                    </div>
                    <hr className="w-[1px] h-12 bg-black mx-5"/>
                    <div>
                        <span className="text-[#1B1C20] text-[25px] font-bold dm-sans">4.8/5</span>
                        <div className="flex">
                            <FaStar className="text-[#FFC947]"/>
                            <FaStar className="text-[#FFC947]"/>
                            <FaStar className="text-[#FFC947]"/>
                            <FaStar className="text-[#FFC947]"/>
                            <FaStar className="text-[#5B7486]"/>
                            <span className="text-[#383A47] pl-2">Rating</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative">
                <img src={bannerImg} alt="banner-image" />
                <div className="flex">
                    <div className="flex gap-4 bg-[#FFFFFFE6] px-4 py-2 rounded-lg absolute bottom-20">
                        <img className="w-[50px] h-[50px] rounded-full" src={bannerImgProfile} alt="banner-image-profile" />
                        <div>
                            <h5 className="text-[#1B1C20] text-[15px] dm-sans font-bold">Ronald Richards</h5>
                            <p className="text-[#383A47] text-[14px]">One of the best chatting app I <br /> have ever used</p>
                        </div>
                    </div>
                    <div className="flex gap-4 bg-[#FFFFFFE6] px-4 py-2 rounded-lg absolute bottom-52 left-80">
                        <img className="w-[50px] h-[50px] rounded-full" src={bannerImgProfile2} alt="banner-image-profile" />
                        <div>
                            <h5 className="text-[#1B1C20] text-[15px] dm-sans font-bold">Jenny Wilson</h5>
                            <p className="text-[#383A47] text-[14px]">I commented on Figma, I want to <br /> add some fancy icons. Do you <br /> have any icon set?</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Landing_Banner;
import reviewWadeWarren from '/public/review_wade_warren.jfif';
import estherHoward from '/public/review_esther_howard.jfif';

const Review = () => {
    return (
        <div className="bg-[#FB8E0B] py-16">
            <h2 className="text-center text-white dm-sans text-[35px] font-semibold leading-[40px]">Our blessed users <br /> said about us 😍</h2>
            <div className="flex justify-center gap-20 pt-12">
                <div>
                    <div className="bg-[#FFF] p-6 rounded-xl">
                        <h4 className="text-[#FD6003] text-center pb-3 text-xl font-semibold dm-sans">Increadible Experience</h4>
                        <p className="text-[#383A47] dm-sans text-[18px]">We had an incredible experience working with Mixland and <br /> were impressed they made such a big difference in only <br /> three weeks. Our team is so grateful for the wonderful <br /> improvements they made and their ability to get familiar <br /> with the concept so quickly.</p>
                    </div>
                    <div className='flex justify-center gap-2 pt-5'>
                        <img className='w-[50px] h-[50px] rounded-full' src={reviewWadeWarren} alt="#" />
                        <span className='text-white dm-sans text-[18px] font-medium'>Wade Warren</span>
                    </div>
                </div>
                <div>
                    <div className="bg-[#FFF] p-6 rounded-xl">
                        <h4 className="text-[#FD6003] text-center pb-3 text-xl font-semibold dm-sans">Dependable, Responsive, Professional</h4>
                        <p className="text-[#383A47] dm-sans text-[18px]">Fermin Apps has collaborated with Mixland team for several <br /> projects such as Photo Sharing Apps and Custom Social <br /> Networking Apps. The experience has been pleasant, <br /> professional and exceeding our expectations. The team is <br /> always thinking beyond.</p>
                    </div>
                    <div className='flex justify-center gap-2 pt-5'>
                        <img className='w-[50px] h-[50px] rounded-full' src={estherHoward} alt="#" />
                        <span className='text-white dm-sans text-[18px] font-medium'>Esther Howard</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;
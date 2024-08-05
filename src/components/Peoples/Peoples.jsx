import groupProfile from '../../assets/Profile-1.svg';
import { IoCheckmarkDoneSharp } from "react-icons/io5";


const Peoples = () => {
    return (
        <div className='ml-7 mt-6 px-4 pb-3 rounded-xl bg-white shadow-md shadow-[#79c5ef61]'>
            <h2 className='text-[#303030] text-xl font-bold pt-2'>People</h2>
            <div>
                <div className='flex justify-between gap-10 py-2'>
                    <div className='flex gap-5'>
                        <img className='w-[50px]' src={groupProfile} alt="groups-profile" />
                        <div>
                            <h3 className='text-[#303030] text-base font-semibold'>Anil</h3>
                            <span className='text-[#303030]'>April fools day</span>
                        </div>
                    </div>
                    <div className='grid'>
                        <span className='text-[#7C7C7C]'>Today, 9.52pm</span>
                        <span className='text-right text-xl ml-20 pr-2 text-[#9747FF] rounded-full'><IoCheckmarkDoneSharp /></span>
                    </div>
                </div>
                <hr className='border-t-[2px]'/>
            </div>

            <div>
                <div className='flex justify-between gap-10 py-2'>
                    <div className='flex gap-5'>
                        <img className='w-[50px]' src={groupProfile} alt="groups-profile" />
                        <div>
                            <h3 className='text-[#303030] text-base font-semibold'>Chuuthiya</h3>
                            <span className='text-[#303030]'>Baag</span>
                        </div>
                    </div>
                    <div className='grid'>
                        <span className='text-[#7C7C7C]'>Today, 9.52pm</span>
                        <span className='text-right bg-[#F24E1E] ml-20 pr-2 text-white rounded-full'>2</span>
                    </div>
                </div>
                <hr className='border-t-[2px]'/>
            </div>

            <div>
                <div className='flex justify-between gap-10 py-2'>
                    <div className='flex gap-5'>
                        <img className='w-[50px]' src={groupProfile} alt="groups-profile" />
                        <div>
                            <h3 className='text-[#303030] text-base font-semibold'>Mary mam</h3>
                            <span className='text-[#303030]'>You have to report it...</span>
                        </div>
                    </div>
                    <div className='grid'> 
                        <span className='text-[#7C7C7C]'>Today, 9.52pm</span>
                        <span className='text-right bg-[#F24E1E] ml-20 pr-2 text-white rounded-full'>1</span>
                    </div>
                </div>
                <hr className='border-t-[2px]'/>
            </div>
            
            <div>
                <div className='flex justify-between gap-10 py-2'>
                    <div className='flex gap-5'>
                        <img className='w-[50px]' src={groupProfile} alt="groups-profile" />
                        <div>
                            <h3 className='text-[#303030] text-base font-semibold'>Bill Gates</h3>
                            <span className='text-[#303030]'>You have to report it...</span>
                        </div>
                    </div>
                    <div className='grid'>
                        <span className='text-[#7C7C7C]'>Today, 9.52pm</span>
                        <span className='text-right text-xl ml-20 pr-2 text-[#9747FF] rounded-full'><IoCheckmarkDoneSharp /></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Peoples;
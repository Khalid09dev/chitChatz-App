import groupProfile from '../../assets/Profile-1.svg';

const Groups = () => {
    return (
        <div className='ml-7 mt-6 px-4 pb-3 rounded-xl bg-white shadow-md shadow-[#79c5ef61]'>
            <h2 className='text-[#303030] text-xl font-bold pt-2'>Groups</h2>
            <div>
                <div className='flex justify-between gap-10 py-2'>
                    <div className='flex gap-5'>
                        <img className='w-[50px]' src={groupProfile} alt="groups-profile" />
                        <div>
                            <h3 className='text-[#303030] text-base font-semibold'>Friends Forever</h3>
                            <span className='text-[#303030]'>hahahaha!</span>
                        </div>
                    </div>
                    <div className='grid'>
                        <span className='text-[#7C7C7C]'>Today, 9.52pm</span>
                        <span className='text-right bg-[#F24E1E] ml-20 pr-2 text-white rounded-full'>4</span>
                    </div>
                </div>
                <hr />
            </div>

            <div>
                <div className='flex justify-between gap-10 py-2'>
                    <div className='flex gap-5'>
                        <img className='w-[50px]' src={groupProfile} alt="groups-profile" />
                        <div>
                            <h3 className='text-[#303030] text-base font-semibold'>Mera Gang</h3>
                            <span className='text-[#303030]'>Kyuuuuuu???</span>
                        </div>
                    </div>
                    <span className='text-[#7C7C7C]'>Today, 9.52pm</span>
                </div>
                <hr />
            </div>

            <div>
                <div className='flex justify-between gap-10 py-2'>
                    <div className='flex gap-5'>
                        <img className='w-[50px]' src={groupProfile} alt="groups-profile" />
                        <div>
                            <h3 className='text-[#303030] text-base font-semibold'>Hiking</h3>
                            <span className='text-[#303030]'>Its not going to happen</span>
                        </div>
                    </div>
                    <span className='text-[#7C7C7C]'>Today, 9.52pm</span>
                </div>
            </div>
        </div>
    );
};

export default Groups;
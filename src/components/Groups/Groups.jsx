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
                            <h3>Friends Forever</h3>
                            <span>hahahaha!</span>
                        </div>
                    </div>
                    <span>Today, 9.52pm</span>
                </div>
                <hr />
            </div>

            <div>
                <div className='flex justify-between gap-10 py-2'>
                    <div className='flex gap-5'>
                        <img className='w-[50px]' src={groupProfile} alt="groups-profile" />
                        <div>
                            <h3>Mera Gang</h3>
                            <span>Kyuuuuuu???</span>
                        </div>
                    </div>
                    <span>Today, 9.52pm</span>
                </div>
                <hr />
            </div>

            <div>
                <div className='flex justify-between gap-10 py-2'>
                    <div className='flex gap-5'>
                        <img className='w-[50px]' src={groupProfile} alt="groups-profile" />
                        <div>
                            <h3>Hiking</h3>
                            <span>Its not going to happen</span>
                        </div>
                    </div>
                    <span>Today, 9.52pm</span>
                </div>
            </div>
        </div>
    );
};

export default Groups;
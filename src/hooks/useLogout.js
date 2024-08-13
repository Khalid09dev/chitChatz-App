import {useAuthContext} from '../context/AuthContext';

const useLogout = () => {
    const {setAuthUser} = useAuthContext();

    //Logout Function
    const logout = async () => {
        console.log('Logging out...');
        try {
            const res = await fetch('/api/auth/logout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await res.json();
            if(data.error) {
                throw new Error(data.error);
            }
    
            // Clear local storage and update auth state
            localStorage.removeItem('chat-user');
            setAuthUser(null);
            
        } catch (error) {
            console.log(error);
        }
    }
    return {logout};
};

export default useLogout;
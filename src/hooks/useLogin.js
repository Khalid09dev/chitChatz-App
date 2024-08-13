import { useAuthContext } from "../context/AuthContext";

const useLogin = () => {
    const {setAuthUser} = useAuthContext();
    
    //Login Function
    const login = async (email, password) => {
        console.log('Logging in...');
        try {
            const res = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json();
            console.log(data);
            if(data.error) {
                throw new Error(data.error);
            }

            // Store user data and update auth state
            localStorage.setItem('chat-user', JSON.stringify(data));
            setAuthUser(data);
        } catch (error) {
            console.log(error);
        }
    }
    
    return {login};
};

export default useLogin;
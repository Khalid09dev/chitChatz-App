import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import app from '../firebase/firebase.auth';

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const googleProvider = new GoogleAuthProvider();

    // Creating new user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    //signin with google
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    }

    //user logout
    const logOut = () => {
        return signOut(auth)
        .then((result) => {
            console.log(result);
        })
        .then((error) => {
            console.log(error);
        })
    }

    //observer current user
    useEffect(() => {
        const onSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            console.log('current user', currentUser);
        })
        return () => {
            onSubscribe();
        }
    }, [])

    const authInfo = {
        createUser,
        googleSignIn,
        user,
        logOut,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AuthProvider;
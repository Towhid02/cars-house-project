import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth,  onAuthStateChanged,  signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth"
import app from './Firebase/firebase.config';

 export const AuthContext = createContext(null)

 const googleProvider = new GoogleAuthProvider()

 const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const  signInWithGoogle =() =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect (()=>{
        const unSubscribe = onAuthStateChanged(auth, createUser => {
            setUser(createUser)
            setLoading(false)
        })
        return () => {
            unSubscribe()
        }
    },[])

    const authInfo = {
        user, createUser, logOut, signIn, loading, signInWithGoogle, setUser, signOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
AuthProvider.propTypes = {
    children: PropTypes.node,
}
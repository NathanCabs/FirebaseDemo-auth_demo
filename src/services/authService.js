import {
    browserSessionPersistence,
    createUserWithEmailAndPassword,
    setPersistence,
    signInWithEmailAndPassword, updateProfile
} from "firebase/auth";
import {auth} from "../firebase/config";
export const login = async (username, password) => {
    try{
        await setPersistence(auth, browserSessionPersistence);
        await signInWithEmailAndPassword(auth, username, password);
    }catch(err){
        throw err
    }
};

export const logout = async () => {
    try{
        auth.signOut();
    }catch(err){
        throw err
    }
};

export const create_user = async (username, password, displayName) => {
    try{
        await createUserWithEmailAndPassword(auth, username, password);
        await updateProfile(auth.currentUser, { displayName: displayName })
    }catch(err){
        throw err
    }
};
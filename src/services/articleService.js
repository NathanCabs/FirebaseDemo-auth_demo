import {addDoc, collection, deleteDoc, doc, getDoc, onSnapshot, updateDoc} from "firebase/firestore";
import {db} from "../firebase/config";

const collectionName = 'articles'

export const addArticle = async (article) => {
    const ref = collection(db, collectionName)
    try {
        await addDoc(ref,article)
    }catch (err) {
        throw err
    }
};

export const updateArticle = async (id, article) => {
    const ref = doc(db, collectionName, id);
    try {
        await updateDoc(ref, article)
    }catch (err) {
        throw err
    }
};

export const deleteArticle = async (id, article) => {
    const ref = doc(db, collectionName, id);
    try {
        await deleteDoc(ref)
    }catch (err) {
        throw err
    }
};

export const getArticle = async (id) => {
    const ref = doc(db, collectionName, id);
    try {
        return await getDoc(ref)
    }catch (err) {
        throw err
    }
};

export const getArticles = (callback) => {
    const ref = collection(db, collectionName);

    return onSnapshot(ref, (snapshot)=>{
        let results = []
        snapshot.docs.forEach(doc => {
            results.push({id: doc.id, ...doc.data()});
        });
        callback(results);
    })
};
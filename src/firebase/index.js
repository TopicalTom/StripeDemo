import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAn15tBo889ELBprq1mH86Fen2tY5RSt1E",
    authDomain: "stripedemo-c3c59.firebaseapp.com",
    projectId: "stripedemo-c3c59",
    storageBucket: "stripedemo-c3c59.appspot.com",
    messagingSenderId: "291465276998",
    appId: "1:291465276998:web:b512576db1d5ea61f4e447"
}

firebase.initializeApp(config);

const firestore = firebase.firestore();
const auth = firebase.auth();

const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) { return };

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = newDate();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message)
        }
    }

    return userRef;
}

export {
    firestore,
    auth,
    createUserProfileDocument
}
import { getApps, initializeApp, FirebaseOptions } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig: FirebaseOptions = {
    apiKey: "AIzaSyCgisQVxeiY1xWKCd_vMNwFvAJ2rexinio",
    authDomain: "classic-games-web.firebaseapp.com",
    projectId: "classic-games-web",
    storageBucket: "classic-games-web.appspot.com",
    messagingSenderId: "1081145698211",
    appId: "1:1081145698211:web:aed1d0ef95e4a36550dc16"
};

const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
export const auth = getAuth(app);
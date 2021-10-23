// Import the functions you need from the SDKs you need
import {
    initializeApp,

} from "firebase/app";
import {
    getAnalytics
} from "firebase/analytics";
import {
    getDatabase,
    ref,
    onValue
} from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB_O7IYdGWNmsx8JDb510PPDxEf57DATTg",
    authDomain: "image-e-commerce.firebaseapp.com",
    databaseURL: "https://image-e-commerce-default-rtdb.firebaseio.com/",
    projectId: "image-e-commerce",
    storageBucket: "image-e-commerce.appspot.com",
    messagingSenderId: "218890877241",
    appId: "1:218890877241:web:b766e9036a6e4f9b1a10e8",
    measurementId: "G-BETPYVPXVE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getDatabase(app);
const prd = ref(db, 'products');
export default prd;
// const analytics = getAnalytics(app);
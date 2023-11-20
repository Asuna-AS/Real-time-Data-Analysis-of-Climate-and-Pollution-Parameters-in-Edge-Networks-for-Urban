import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyDo51f8iV709wMAF33M1fXWJPsxu8q-5ic",
    authDomain: "health-care-app-9df12.firebaseapp.com",
    projectId: "health-care-app-9df12",
    storageBucket: "health-care-app-9df12.appspot.com",
    messagingSenderId: "599902470660",
    appId: "1:599902470660:web:0d10e830e42d3a42edeb51",
    measurementId: "G-SWV6HMKZSM"
  };

// Initialize Firebase
const initializeAuthentication = () => {
    return initializeApp(firebaseConfig)
}
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export default initializeAuthentication;
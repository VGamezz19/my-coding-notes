// import * as firebase from "/firebase";

// // Initialize Firebase


// //import {firebaseAuth} from './firebase'
// export const firebaseAuth = firebase.auth()
// //import firebase from './firebase'
// export default firebase
// //or
// //import firebase, {firebaseAuth} from './firebase'
import * as firebase from "firebase";

const config = {
    apiKey: "AIzaSyAdkE66a5LilxjlyLOkS_C6tBYQ9pHhor4",
    authDomain: "platzimusic-a1a8c.firebaseapp.com",
    databaseURL: "https://platzimusic-a1a8c.firebaseio.com",
    projectId: "platzimusic-a1a8c",
    storageBucket: "platzimusic-a1a8c.appspot.com",
    messagingSenderId: "711372680696"
};
firebase.initializeApp(config);

export const firebaseAuth = firebase.auth();
export const firebaseDatabase = firebase.database();

export default firebase
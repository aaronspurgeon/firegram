import * as firebase from "firebase";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyAmSDcrBFjrD-1_QjuXL5EE72qLxdzQHAI",
  authDomain: "firegram-26e8c.firebaseapp.com",
  databaseURL: "https://firegram-26e8c.firebaseio.com",
  projectId: "firegram-26e8c",
  storageBucket: "firegram-26e8c.appspot.com",
  messagingSenderId: "763643766961",
  appId: "1:763643766961:web:9caa1f183df202de9c1a90",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectStorage, timestamp };

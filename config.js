import * as firebase from "firebase";
require("@firebase/firestore");

  const firebaseConfig = {
    apiKey: "AIzaSyCMj_WBqdqRxdYKPTMewIUKLgkuynTfghs",
    authDomain: "project73-7e7b6.firebaseapp.com",
    projectId: "project73-7e7b6",
    storageBucket: "project73-7e7b6.appspot.com",
    messagingSenderId: "136330662212",
    appId: "1:136330662212:web:62debca6daf859687cc711"
  };
 
  firebase.initializeApp(firebaseConfig);

export default firebase.firestore();

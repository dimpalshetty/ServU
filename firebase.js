import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBHdWiVj_PtBStUNsHmet3mcnGgean3LWQ",
    authDomain: "servu-df1cd.firebaseapp.com",
    projectId: "servu-df1cd",
    storageBucket: "servu-df1cd.appspot.com",
    messagingSenderId: "25172275861",
    appId: "1:25172275861:web:2dc3ef61b6c2eafa50a19c",
    measurementId: "G-BQG87NNNNV"
  };

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

  export default firebase;
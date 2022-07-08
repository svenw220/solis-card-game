import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyDrwkgZ4fRFVLVaxtDGautx_CrAruDtXeQ',
  authDomain: 'solis-b559e.firebaseapp.com',
  projectId: 'solis-b559e',
  storageBucket: 'solis-b559e.appspot.com',
  messagingSenderId: '1093945778201',
  appId: '1:1093945778201:web:5aa2b97af69a3f3e8c4a88',
  measurementId: 'G-R6GXHZRC01',
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getDatabase(firebaseApp);

const playersRef = ref(db);

onValue(playersRef, (snapshot) => {
  snapshot.forEach((snap) => {
    const player = snap.val();
    console.log(player);
  });
});

// export default firebaseConfig;

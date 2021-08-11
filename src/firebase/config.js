import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDeK0SzeZ_9-_9Yw2RoaVynAQUBn6kLKQ4',
  authDomain: 'tracker-4558f.firebaseapp.com',
  databaseURL: 'https:/tracker-4558f.firebaseio.com',
  projectId: 'tracker-4558f',
  storageBucket: 'tracker-4558f.appspot.com',
  messagingSenderId: '943951743284',
  appId: '1:943951743284:android:70d0978a19532934dabd61',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };

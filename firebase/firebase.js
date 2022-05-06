import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

import firebaseConfig from './config.js'

class Firebase {
    constructor() {
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
          }

        this.db = app.firestore();
    }
}

// const firebase = new Firebase();
export default Firebase;
import firebase from 'react-native-firebase';

const Firebase = {
    auth:firebase.auth(),
    firestore:firebase.firestore()
}

export default Firebase;
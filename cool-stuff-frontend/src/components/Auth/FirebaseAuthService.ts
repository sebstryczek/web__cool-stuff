import firebase from 'firebase/app';
import 'firebase/auth';
import AuthService from './AuthService';

class FirebaseAuthService implements AuthService {
  private auth: firebase.auth.Auth

  constructor(firebaseConfig: Object) {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    this.auth = firebase.auth();
  }

  isAuthenticated() {
    return false
  }

  signIn = async (email: string, password: string) => {
    console.log('Sign in');

    //TODO remove after debug
    if (this.auth.currentUser) {
      console.log(1, this.auth.currentUser.uid);
    }
    await this.auth.signOut();
    if (this.auth.currentUser) {
      console.log(2, this.auth.currentUser.uid);
    }

    await this.auth.signInWithEmailAndPassword(email, password);
    if (this.auth.currentUser) {
      console.log(3, this.auth.currentUser.uid);
    }
    return false
  }

  signOut() {
    return false
  }

  signUp() {
    return false
  }
}

export default FirebaseAuthService;

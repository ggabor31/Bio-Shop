import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/compat/auth'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: AngularFireAuth) { }
  isUserLoggedIn() {
    
    return this.auth.user;
  }
  login(email: string, password: string) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }
  signup(email: string, password: string) {
    return this.auth.createUserWithEmailAndPassword(email, password);
    console.log("Regisztráció sikeres");
  }
  logout() {
    return this.auth.signOut();
  }
}







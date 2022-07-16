import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  isLogedIn = false;
  inSubmission = false;
  showAlert = false;
  alertMsg = 'Please wait ! your are connecting to your account !';
  alertColor = 'blue';

  credantials = {
    email: '',
    password: '',
  };

  constructor(private auth: AngularFireAuth) {}

  ngOnInit(): void {}

  async login() {
    this.showAlert = true;
    this.inSubmission = true;
    try {
      await this.auth.signInWithEmailAndPassword(
        this.credantials.email,
        this.credantials.password
      );
    } catch (error) {
      console.error(error);
      this.inSubmission = false;
      this.alertMsg = 'Impossible to connect, try again !';
      this.alertColor = 'red';
      return;
    }

    this.alertMsg = 'You are connected';
    this.alertColor = 'green';
  }
}

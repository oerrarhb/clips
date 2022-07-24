import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ModalService } from '../services/modal.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  isAuthenticated = false;

  constructor(
    public modal: ModalService,
    public auth: AuthService,
    private afAuth: AngularFireAuth,
    private router: Router
  ) {
    auth.isAuthenticated$.subscribe((status) => {
      this.isAuthenticated = status;
      console.log(this.isAuthenticated);
    });
  }

  ngOnInit(): void {}

  openModal($event: Event) {
    $event.preventDefault();
    this.modal.toggleModal('auth');
  }
}

import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { NgIf } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { LoginDialogComponent } from '../login-dialog/login-dialog.component';

import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule , RouterLink, NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})


export class HomeComponent {

  constructor(
    private authService: AuthService,
    public dialog: MatDialog
  ) { }

  userRole: string = ''

  ngOnInit() {
    this.authService.getUserRole().subscribe(role => this.userRole = role);
  }

  logIn() {
    const dialog = this.dialog.open(LoginDialogComponent)

    dialog.afterClosed().subscribe(result => {
      if (result) {
        if (this.authService.login(result.username, result.password)) {
          alert('Login successful!');  
          this.authService.setUserRole('admin')
        } else {
          alert('Login failed!');
        }
      }
    })
  }

  logOut() {
    this.authService.setUserRole('user')
  }
}
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-login-dialog',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login-dialog.component.html',
  styleUrl: './login-dialog.component.css'
})


export class LoginDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<LoginDialogComponent>
  ) {}

  loginForm = new FormGroup({
    username: new FormControl,
    pass: new FormControl
  })

  notLogIn() {
    this.dialogRef.close()
  }

  logIn() {
    this.dialogRef.close({ username: this.loginForm.value.username, password: this.loginForm.value.pass });
  }
}
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgIf } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';

import { LoginDialogComponent } from '../login-dialog/login-dialog.component';

import { AuthService } from '../../services/auth.service';
import { ConsultService } from '../../services/consult.service';

import { Item } from '../../interfaces/item';

import axios from 'axios';


@Component({
  selector: 'app-add-item',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule],
  templateUrl: './add-item.component.html',
  styleUrl: './add-item.component.css',
  providers: [ConsultService]
})


export class AddItemComponent {

  constructor(
    private authService: AuthService,
    private consultService: ConsultService,
    private dialog: MatDialog,
    private router: Router
  ) {}

  userRole: string = ''

  item: Item | undefined
   
  formItem = new FormGroup({
    Nombre: new FormControl,
    Descripcion: new FormControl,
    Cantidad: new FormControl,
    Precio: new FormControl
  })

  ngOnInit() {
    this.authService.getUserRole().subscribe(role => this.userRole = role);

    if (this.userRole != 'admin') {
      this.router.navigate([''])
    }
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

  createItem(){
    this.item = {
      Nombre: this.formItem.value.Nombre,
      Descripcion: this.formItem.value.Descripcion,
      Cantidad: Math.floor(this.formItem.value.Cantidad),
      Precio: this.formItem.value.Precio
    }
  
    this.consultService.createItem(this.item).subscribe(items => {
      console.log(items)
      this.item=items
    });
  }

  goBack(): void {
    this.router.navigate(['']);
  }
}
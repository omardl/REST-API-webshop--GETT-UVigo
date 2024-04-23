import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule, Location, NgIf } from '@angular/common';
import { MatDialog, } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon'

import { LoginDialogComponent } from '../login-dialog/login-dialog.component';

import { Item } from '../../interfaces/item';

import { AuthService } from '../../services/auth.service';
import { ConsultService } from '../../services/consult.service';
import { DeleteItemDialogComponent } from '../delete-item-dialog/delete-item-dialog.component';
import { UpdateItemDialogComponent } from '../update-item-dialog/update-item-dialog.component';


@Component({
  selector: 'app-item-details',
  standalone: true,
  imports: [CommonModule, MatIcon, NgIf],
  templateUrl: './item-details.component.html',
  styleUrl: './item-details.component.css',
  providers: [ConsultService]
})


export class ItemDetailsComponent {

  constructor(
    private authService: AuthService,
    private consultService: ConsultService,
    public dialog: MatDialog,
    private location: Location,
    private route: ActivatedRoute,
    private router: Router
    
  ) {}

  userRole: string = ''
  item_id!: any
  item!: Item

  ngOnInit() {
    this.authService.getUserRole().subscribe(role => this.userRole = role);

    this.route.paramMap.subscribe(params => {
      const itemId = params.get('id'); 
      console.log('ID:', itemId)
      if (itemId) {
        this.consultService.getItemByID(itemId).subscribe(item => {
          this.item_id = (item as any)['_id']
          this.item = item
        })
      }
    });
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

  updateItem(item: any) {
    const dialog = this.dialog.open(UpdateItemDialogComponent, { data: item })

    dialog.afterClosed().subscribe(result => {
      if (result.confirmation == 'true') {
        this.consultService.updateItem(result.modifiedItem).subscribe(item => {
          this.item = item
          this.router.navigate(['/search-item']);
        })
      }
    })
  }

  deleteItem() {
    const dialog = this.dialog.open(DeleteItemDialogComponent, { data: this.item.Nombre })
    
    dialog.afterClosed().subscribe(result => {
      if (result.confirmation == 'true') {
        this.consultService.deleteItem(this.item_id).subscribe(item => {
          this.item = item
        })
        this.router.navigate(['/search-item']);
      }
    })
  }

  goBack(): void {
    this.router.navigate(['/search-item']);
  }
}
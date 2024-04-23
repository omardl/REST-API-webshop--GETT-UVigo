import { Component } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';

import { ConsultService } from '../../services/consult.service';
import { AuthService } from '../../services/auth.service';

import { LoginDialogComponent } from '../login-dialog/login-dialog.component';

import { Item } from '../../interfaces/item';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-item',
  standalone: true,
  imports: [NgIf, NgFor, ReactiveFormsModule],
  templateUrl: './search-item.component.html',
  styleUrl: './search-item.component.css',
  providers: [ConsultService]
})
export class SearchItemComponent {

  constructor (
    private authService: AuthService,
    private consultService: ConsultService,
    public dialog: MatDialog,
    private router: Router
  ) {}


  searchForm = new FormGroup({
    searchByName: new FormControl
  })

  items!: any[];
  filteredItemsByName!: any[]
  searchString!: string

  userRole: string = ''

  ngOnInit() {
    this.authService.getUserRole().subscribe(role => this.userRole = role);

    this.getItems()
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

  getItems(){
    this.consultService.getItems().subscribe((items: Item[]) => {
      this.items = items
      this.filteredItemsByName = this.items
      console.log("list: ", this.filteredItemsByName)
    });

    this.searchForm.value.searchByName = ''
  }

  filterItems() {
    const searchTerm = this.searchForm.value.searchByName

    if (searchTerm != '') {
      this.filteredItemsByName = this.items.filter(item => {
        console.log('search: [', searchTerm, ']')
        return item.Nombre.includes(searchTerm)
      })
    } else {
      this.filteredItemsByName = this.items
    }
  }

  goToDetails(itemId: string) {
    this.router.navigate(['/item-details', itemId])
  }

  goBack(): void {
    this.router.navigate([''])
  }
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { ItemDetailsComponent } from './components/item-details/item-details.component';
import { SearchItemComponent } from './components/search-item/search-item.component';

import { AuthService } from './services/auth.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AddItemComponent, HomeComponent, ItemDetailsComponent, SearchItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {

  title = 'API_UI';

  constructor(
    private authService: AuthService
  ) {}

  userRole: string = ''

  ngOnInit() {
    this.authService.setUserRole('user')
  }
}

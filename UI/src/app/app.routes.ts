import { Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { ItemDetailsComponent } from './components/item-details/item-details.component';
import { SearchItemComponent } from './components/search-item/search-item.component';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'add-item', component: AddItemComponent },
    { path: 'item-details/:id', component: ItemDetailsComponent},
    { path: 'search-item', component: SearchItemComponent },
];
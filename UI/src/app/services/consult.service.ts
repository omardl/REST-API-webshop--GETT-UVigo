import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Item } from '../interfaces/item';


@Injectable({
  providedIn: 'root'
})


export class ConsultService {

  constructor(
    private http: HttpClient
  ) { }

  createItem(item: Item) {
    return this.http.post<Item>('http://localhost:3000/create', item);
  }

  getItems(){
    return this.http.get<Item[]>('http://localhost:3000/read/All');
  }

  getItemByID(id: string) {
    return this.http.post<Item>('http://localhost:3000/read/One',{_id: id});
  }

  updateItem(item: Item) {
    return this.http.post<Item>('http://localhost:3000/update/All', item)
  }

  deleteItem(id: string) {
    return this.http.post<Item>('http://localhost:3000/delete/One',{_id: id});
  }
  
}
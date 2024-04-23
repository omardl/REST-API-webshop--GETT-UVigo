import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { Item } from '../../interfaces/item';


@Component({
  selector: 'app-update-item-dialog',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './update-item-dialog.component.html',
  styleUrl: './update-item-dialog.component.css'
})


export class UpdateItemDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<UpdateItemDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public item: Item
  ) {}

  itemUpdated: any | undefined

  updateForm = new FormGroup({
    Nombre: new FormControl(this.item.Nombre),
    Descripcion: new FormControl(this.item.Descripcion),
    Cantidad: new FormControl(this.item.Cantidad),
    Precio: new FormControl(this.item.Precio)
  })
    
  update() {
    if (this.updateForm.value.Nombre && this.updateForm.value.Descripcion && this.updateForm.value.Cantidad && this.updateForm.value.Precio) {
      this.itemUpdated = {   
        _id: (this.item as any)['_id'],   
        Nombre: this.updateForm.value.Nombre,
        Descripcion: this.updateForm.value.Descripcion,
        Cantidad: Math.floor(this.updateForm.value.Cantidad),
        Precio: this.updateForm.value.Precio
      }
    }
    this.dialogRef.close({confirmation: 'true', modifiedItem: this.itemUpdated})  
  }

  notUpdate() {
    this.dialogRef.close({confirmation: 'false'});
  }
}
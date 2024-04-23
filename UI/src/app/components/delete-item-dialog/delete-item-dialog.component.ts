import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-delete-item-dialog',
  standalone: true,
  imports: [],
  templateUrl: './delete-item-dialog.component.html',
  styleUrl: './delete-item-dialog.component.css'
})


export class DeleteItemDialogComponent {
  
  constructor(
    public dialogRef: MatDialogRef<DeleteItemDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public name: string
  ) {}

  delete() {
    this.dialogRef.close({confirmation: 'true'})
  }

  notDelete() {
    this.dialogRef.close({confirmation: 'false'});
  }
}

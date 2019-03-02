import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatCardModule,
  MatToolbarModule,
  MatIconModule,
  MatTableModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class MaterialModule { }

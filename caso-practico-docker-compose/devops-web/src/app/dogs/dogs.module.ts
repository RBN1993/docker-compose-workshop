import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogsComponent } from './dogs.component';
import { HttpClientModule } from '@angular/common/http';
import { DogsRepository } from './dogs.repository';
import { ReactiveFormsModule } from '@angular/forms';
import { DogsStore } from './dogs.store';



@NgModule({
  declarations: [DogsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [DogsStore, DogsRepository],
  exports: [DogsComponent]
})
export class DogsModule { }

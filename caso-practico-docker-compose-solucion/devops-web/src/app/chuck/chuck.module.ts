import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ChuckComponent } from './chuck/chuck.component';



@NgModule({
  declarations: [ChuckComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [ChuckComponent]
})
export class ChuckModule { }

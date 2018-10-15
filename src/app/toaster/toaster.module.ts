import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToasterComponent } from './app-toaster/app-toaster.component';
import { ToasterService } from './toaster.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ToasterComponent],
  exports:[ToasterComponent],
  providers:[ToasterService],
})
export class ToasterModule { }

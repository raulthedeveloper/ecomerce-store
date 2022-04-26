import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostModalComponent } from './post-modal/post-modal.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PostModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports:[
    PostModalComponent
  ]
})
export class ModalsModule { }

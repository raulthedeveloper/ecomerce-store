import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
})
export class CustomButtonComponent implements OnInit {

  constructor() { }
  @Input() label:string | undefined
  @Input() style:string | undefined
  @Input() isIncrement:boolean | undefined
  @Input()isDisabled:boolean | undefined


  ngOnInit(): void {
  }

  // Increment doesnt get ever get disabled
  checkIfIncrement():boolean | undefined{
    if (this.isIncrement){
      return false
    }
    else {
      return this.isDisabled
    }
  }


}

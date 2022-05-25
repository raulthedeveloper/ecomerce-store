import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { PostService } from 'src/app/services/post/post.service';
import { GetService } from 'src/app/services/get/get.service';
import { Address, CustomerInfo } from 'src/app/DataInterfaces';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.scss']
})
export class CustomerLoginComponent implements OnInit {

  signUp:boolean = false;

  customerForm:FormGroup | any;
  customerAddressForm:FormGroup | any;

  custId:number | any;

  constructor(private postService: PostService,private getService: GetService) { }

  ngOnInit(): void {

    this.customerForm = new FormGroup({
      firstName : new FormControl(),
      lastName : new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      confirmPassword: new FormControl(),
      city: new FormControl(),
      state: new FormControl(),
      zip: new FormControl(),
      streetAddress : new FormControl()
    })

    
  }

  onSignUp():void{
    this.signUp = true;
  }

  onSignIn():void{
    this.signUp = false;
  }

  submitCustomerInfo():void{
    // submits personal info
    // let customerInfo = {
    //   first_name:this.customerForm.get('firstName').value,
    //   last_name:this.customerForm.get('lastName').value,
    //   password:this.customerForm.get('password').value,
    //   email:this.customerForm.get('email').value
    // }

    let customerInfo = {
      first_name:"John",
      last_name:"Doe",
      password:"password123",
      email:"John@email.com"
    }

    console.log(customerInfo)
     this.postService.addCustomerInfo(customerInfo).subscribe(() => alert("Customer Info submitted"));
  }

  

  formValidate():void{
    //Validates form
  }

  async submitAddress(custId:number):Promise<void>{
    // gets id from customer personal database 
    // Submits form with userId
  //  let address = {
  //    custId: custId,
  //    streetAddress: this.customerForm.get('address').value,
  //    state: this.customerForm.get('state').value,
  //    zipCode: this.customerForm.get('zip').value
  //  }

   let address = {
    custId: custId,
    streetAddress: "219 Center Road",
    state: "PA",
    zipCode: "18301"
  }

   console.log(address)

    this.postService.addCustomerAddress(address).subscribe(() => alert("address submitted"));
  }


   onSubmit():void{
    // get form values and submit to controller
    // Gets Id from database of customer and submit the second form
    

    this.submitCustomerInfo();
    console.log(this.customerForm.get('firstName').value,this.customerForm.get('lastName').value,this.customerForm.get('email').value)

    
    this.getService.getCustomerId(this.customerForm.get('firstName').value,this.customerForm.get('lastName').value,this.customerForm.get('email').value)
    .subscribe((e) => {
      this.submitAddress(e as unknown as number);
    })



   

    
    // Get customer ID from database and add to form submition



     this.submitAddress(this.customerAddressForm.value)
  }

}

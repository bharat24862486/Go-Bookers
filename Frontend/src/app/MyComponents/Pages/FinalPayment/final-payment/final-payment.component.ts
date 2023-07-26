import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-final-payment',
  templateUrl: './final-payment.component.html',
  styleUrls: ['./final-payment.component.css']
})
export class FinalPaymentComponent {

  constructor(private auth:AuthService, private router:Router){}

  submitForm(){
    alert("Payment Successfull")
    this.router.navigate(['/'])
  }
}

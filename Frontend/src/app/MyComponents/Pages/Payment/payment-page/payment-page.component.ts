import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css']
})
export class PaymentPageComponent implements OnInit {
  constructor(private getParam:ActivatedRoute, private auth:AuthService, private fetcher:ApiService){}

  planType:string=''
  paybleAmt:number = 0

  ngOnInit(): void {
    this.getParam.paramMap.subscribe((params)=>{
      this.planType = params.get("name") || ''
    })

    this.getPrice()
  }

  getPrice(){
    if(this.planType == "platinum"){
      this.paybleAmt = 250
    } else if(this.planType == "gold"){
      this.paybleAmt = 500
    } else{
      this.paybleAmt = 0
    }
  }


  submitForm(){
    this.auth.user$.subscribe((user)=>{
      let obj={
        Email: user?.email,
        UserName: user?.given_name,
        AccountType: this.planType
      }
      this.fetcher.getUserRegistered(obj).subscribe((res)=>{
        console.log(res)
      })
    })
  }



}

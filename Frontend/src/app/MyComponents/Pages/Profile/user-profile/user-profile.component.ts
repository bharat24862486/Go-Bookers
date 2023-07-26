import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  silver="silver"
  platinum="platinum"
  gold="gold"

  constructor(private auth:AuthService, private fetcher:ApiService, private router:Router){}
  isLogin:boolean = false
  userInfo:any = {}
  isRegistered:boolean = false
  ngOnInit(): void {
    if(this.auth.isAuthenticated$){
      this.isLogin = true
      this.auth.user$.subscribe((user) => {
        let obj={
          Email : user?.email
        }
        this.fetcher.getIsUserRegistered(obj).subscribe((res)=>{
          if(typeof res != "string"){
            console.log(res)
            this.userInfo = res
            console.log(this.userInfo, "line 32")
            this.isRegistered = true
          }
        })
      });
      
    }
  }

  getPlan(type:string){
    console.log(type)
    this.auth.user$.subscribe((user)=>{
      let obj={
        Email: user?.email,
        UserName: user?.given_name,
        AccountType: type
      }
      this.router.navigate(['planPayment',type])

    })
    
  }

}

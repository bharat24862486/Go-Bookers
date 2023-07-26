import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  constructor(public auth: AuthService, public fetcher:ApiService, private router: Router) {}
  ngOnInit(): void {
    this.getUserProfile()
    this.changer()
    // this.getValues()
  }
  getUserProfile() {
    this.auth.user$.subscribe((user) => {
      console.log(user); // User profile data
    });
  }
  value:any

  changer(){
    this.value = this.fetcher.searchState
  }

  onClickChange(){
    console.log("hello")
    this.fetcher.searchState = !this.fetcher.searchState
    this.value = this.fetcher.searchState
  }

  profile(){
    this.router.navigate(['/userprofile'])
  }

  getHome(){
    this.router.navigate(['/'])
  }

  getValue:any

  // getValues(){
  //   console.log(this.fetcher.getLocation)
  // }

  getChange(){
    // this.fetcher.getLocation = this.getValue
    // this.getValues()
    console.log(this.fetcher.getLocation,"get values")

  }


  




}

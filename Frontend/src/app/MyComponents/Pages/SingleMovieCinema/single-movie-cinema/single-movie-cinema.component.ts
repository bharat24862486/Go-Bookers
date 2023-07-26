import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-single-movie-cinema',
  templateUrl: './single-movie-cinema.component.html',
  styleUrls: ['./single-movie-cinema.component.css']
})
export class SingleMovieCinemaComponent implements OnInit {
  datas:any=[]
  movieName:string=''
  getLocationValue=''
  prevValue=''
  constructor(private fetcher:ApiService, private getParam : ActivatedRoute, private router:Router){}

  ngOnInit(): void {
    
    
    this.getParam.paramMap.subscribe((params)=>{
      this.movieName = params.get("name")||''
      this.fetcher.fetchSingleMovieCinema(params.get("name") || '', '').subscribe((res)=>{
        console.log(res)
        this.datas = res
      })
    })

    setInterval(() => {
      this.getLocationValue= this.fetcher.getLocation
      if(this.getLocationValue != this.prevValue){
        console.log("Value has changed this time")
        this.prevValue = this.getLocationValue
        this.fetcher.fetchSingleMovieCinema(this.movieName || '', this.getLocationValue).subscribe((res)=>{
          console.log(res)
          this.datas = res
        })
      }
      this.prints()
    }, 1000);
  }
  


  prints(){
    console.log(this.getLocationValue, "this is value")
  }


  setSeats(time:any){
    this.router.navigate(['/setSeats',time])

  }

  

}

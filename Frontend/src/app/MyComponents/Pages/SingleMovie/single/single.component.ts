import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {
  ID: string = '';
  obj:any={}

  constructor(private route: ActivatedRoute, private apiservices: ApiService, private routes:Router) {}
  
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.ID = params.get('id') || '';
    });

    this.apiservices.fetchSingleMovieData(this.ID).subscribe((res)=>{
      console.log(res)
      this.obj=res
    })

  }

  getClick(data:any){
    console.log(data)
    this.routes.navigate(['/singleMovieCinema',data])
  }

  
}

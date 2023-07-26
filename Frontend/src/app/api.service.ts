import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})


export class ApiService {
  constructor(private http: HttpClient) {}

  fetchMovieData(): Observable<any> {
    return this.http.get<any>('https://go-booker.onrender.com/movies');
  }

  fetchSingleMovieData(ID:string): Observable<any> {
    return this.http.get<any>(`https://go-booker.onrender.com/single_movie/${ID}`)
  }

  fetchSingleMovieCinema(name:string, queryParam1:any): Observable<any> {
    const params = new HttpParams()
      .set('param1', queryParam1)
      

    // Set the HTTP headers if needed
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // Add any other headers if required
    });
    return this.http.get<any>(`https://go-booker.onrender.com/single_movie_cinema/${name}`,{params})
  }

  getIsUserRegistered(obj:any) : Observable<any> {
    return this.http.post<any>(`https://go-booker.onrender.com/get_user_by_Email`,obj)
  }

  getUserRegistered(obj:any) : Observable<any> {
    return this.http.post<any>(`https://go-booker.onrender.com/add_user`,obj)
  }

  getLocation = ""

  searchState:boolean = false;

  

  
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private REST_API_SERVER = "https://jsonplaceholder.typicode.com";

  constructor(private http: HttpClient) { }

  public sendGetRequest(url: string){
    return this.http.get(this.REST_API_SERVER+url);
  }

  public getPhotos(){
    return this.http.get(`${this.REST_API_SERVER}/photos`);
  }

  public getUsers(){
    return this.http.get(`${this.REST_API_SERVER}/users`);
  }

  public getPostByUserID(id){
    return this.http.get(`${this.REST_API_SERVER}/users/${id}/posts`);
  }

  // public sendGetRequest(){

  //   return this.http.get<Product[]>(this.REST_API_SERVER, {  params: new HttpParams({fromString: "_page=1&_limit=20"}), observe: "response"})
  //     .pipe(retry(3), catchError(this.handleError), tap(res => {
  //     console.log(res.headers.get('Link'));
  //     this.parseLinkHeader(res.headers.get('Link'));

  //   }));
  // }

  // public sendGetRequestToUrl(url: string){
  //   return this.http.get<Product[]>(url, { observe: "response"}).pipe(retry(3), catchError(this.handleError), tap(res => {
  //     console.log(res.headers.get('Link'));
  //     // this.parseLinkHeader(res.headers.get('Link'));

  //   }));
}

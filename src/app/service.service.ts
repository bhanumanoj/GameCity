import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  

  constructor(private http: HttpClient) { }
 
  getAll(){
  return this.http.get('http://localhost:3000/games')
   }
  }




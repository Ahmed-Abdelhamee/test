import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Database } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { person } from '../interfaces/person.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient, private database:Database) { }

  url =this.database.app.options.databaseURL?.toString()!

  getData():Observable<person[]>{
    return this.http.get<person[]>(`${this.url}/Interview.json`)
  }

  createStudent(data:any){
    return this.http.post(`${this.url}/Interview.json`,data)
  }

  editStudent(data:any, key:string){
    return this.http.put(`${this.url}/Interview/${key}.json`,data)
  }

  deleteStudent(){
    return this.http.delete(`${this.url}/Interview.json`)
  }
}

import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http:HttpClient){

  }

  url="http://localhost:3000/user";
  addUser(user:User){
    return this.http.post(this.url,user);
  }
  getALLUsers(){
    return this.http.get(this.url);
  }
  getUserById(id:any):Observable<any>{
    return this.http.get<any>(`${this.url}/${id}`);
  }
  login(email: string, password: string): Observable<any> {
    return this.http.get(this.url+"?email="+email+"&password="+password);
  }
  findUsersByEmail(email:string):Observable<any>{
    return this.http.get(this.url+"?email="+email);
  }
  deleteUser(id:string):Observable<any>{
    return this.http.delete(this.url+"/"+id);
  }
  updateById(id: any, updatedProduct: any): Observable<any> {
    return this.http.put(this.url+"/"+id, updatedProduct);
  }
  updateUser(id:string,updatedUser:any):Observable<any>{
    return this.http.put(this.url+"/"+id,updatedUser);
  }
  updateUserAccount(user:any){
    this.updateUser(user.id,user)
      .subscribe(
        res=>{
        }
      )
  }
}

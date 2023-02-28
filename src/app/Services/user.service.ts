import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../Shared/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly StudentsApiUrl = "https://localhost:7119/api/User/";

  constructor(private http:HttpClient) { }

  GetAllUsers(){
    return this.http.get<User[]>(this.StudentsApiUrl + 'GetAllTask')
  }
}

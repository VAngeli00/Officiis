import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable()


export class AuthService {
  
  private _cadastroUrl = "http://localhost:3000/api/cadastro"
  private _loginUrl = "http://localhost:3000/api/login"
  constructor(private http: HttpClient, private router: Router) { }

  registerUser(user: any){
    return this.http.post<any>(this._cadastroUrl, user)
  }

  loginUser(user: any){
    return this.http.post<any>(this._loginUrl, user)
  }

  loggedIn(){
    return !!localStorage.getItem('token')
  }

  getToken(){
  return localStorage.getItem('token')
  }

  logoutUser(){
    localStorage.removeItem('token')
    this.router.navigate(['/home'])
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfiguracoesService {

  private _configuracoesUrl = "http://localhost:3000/api/configuracoes";
  constructor(private http: HttpClient) { }

  getConfiguracoes(){
    return this.http.get<any>(this._configuracoesUrl);
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ConfiguracoesService } from '../configuracoes.service';

@Component({
  selector: 'app-configuracoes',
  templateUrl: './configuracoes.page.html',
  styleUrls: ['./configuracoes.page.scss'],
})
export class ConfiguracoesPage implements OnInit {

  configuracoes = []
  constructor(private router: Router, public _authService: AuthService, private _configuracoesService: ConfiguracoesService) { 

  }

  navegarMenuPrincipal(){
    this.router.navigateByUrl('/menu-inicial')
  }
  navegarFavoritos(){
    this.router.navigateByUrl('/favoritos')
  }
  navegarMeuPerfil(){
    this.router.navigateByUrl('/meu-perfil')
  }
  navegarSair(){
    this.router.navigateByUrl('/home')
  }

  ngOnInit() {
    this._configuracoesService.getConfiguracoes()
      .subscribe(
        res => this.configuracoes = res,
        err => console.log(err)
      )
  }

}

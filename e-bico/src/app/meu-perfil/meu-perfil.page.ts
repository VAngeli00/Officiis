import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ConfiguracoesService } from '../configuracoes.service';

@Component({
  selector: 'app-meu-perfil',
  templateUrl: './meu-perfil.page.html',
  styleUrls: ['./meu-perfil.page.scss'],
})
export class MeuPerfilPage implements OnInit {

  configuracoes = []
  constructor(private router: Router, public _authService: AuthService, private _configuracoesService: ConfiguracoesService) { }

  navegarMenuPrincipal(){
    this.router.navigateByUrl('/menu-inicial')
  }
  navegarFavoritos(){
    this.router.navigateByUrl('/favoritos')
  }
  navegarConfiguracoes(){
    this.router.navigateByUrl('/configuracoes')
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

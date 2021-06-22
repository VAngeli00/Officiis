import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
})
export class FavoritosPage implements OnInit {

  constructor(private router: Router, public _authService: AuthService) { }

  navegarMeuPerfil(){
    this.router.navigateByUrl('/meu-perfil')
  }
  navegarMenuPrincipal(){
    this.router.navigateByUrl('/menu-inicial')
  }
  navegarConfiguracoes(){
    this.router.navigateByUrl('/configuracoes')
  }
  navegarSair(){
    this.router.navigateByUrl('/home')
  }


  ngOnInit() {
  }

}

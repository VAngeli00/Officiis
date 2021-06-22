import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { AuthService } from '../auth.service';
import { StarsPage } from '../stars/stars.page';

@Component({
  selector: 'app-perfil-servico',
  templateUrl: './perfil-servico.page.html',
  styleUrls: ['./perfil-servico.page.scss'],
})
export class PerfilServicoPage implements OnInit {

    data:any;


//Animação do click no favorito
clicado: boolean = true;
toggleClicado(): void {
  this.data.isFavorito = !this.data.isFavorito;
}

  constructor(private router: Router, private route: ActivatedRoute, private routerDetalhes: Router, private platform: Platform, public _authService: AuthService) { 
    this.route.queryParams.subscribe(params => {
      if (params && params.special){
        this.data = params.special
      }
    })
}

//Sistema de notas
stars = [1, 2, 3, 4, 5];
rating = 1;
hoverState = 0;

  onStarEnter(starId: number){
    this.hoverState = starId;
  }

  onStarLeave(){
    this.hoverState = 0;
  }

  onStarClicked(starId: number){
    this.rating = starId;
  }

  navegarMeuPerfil(){
    this.router.navigateByUrl('/meu-perfil')
  }
  navegarFavoritos(){
    this.router.navigateByUrl('/favoritos')
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
    if (this.route.snapshot.data['special']){
      this.data = this.route.snapshot.data['special'];
    }
  }

  

}

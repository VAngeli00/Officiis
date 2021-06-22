import { Component, OnInit } from '@angular/core';
import { AlertController, MenuController, PopoverController } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';
import { PopoverPage } from '../popover/popover.page';
import { Platform } from '@ionic/angular';
import { DataService } from '../services/data.service';
import { PerfilServicoPage } from '../perfil-servico/perfil-servico.page';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-menu-inicial',
  templateUrl: './menu-inicial.page.html',
  styleUrls: ['./menu-inicial.page.scss'],
})
export class MenuInicialPage implements OnInit {
  

  arr:any[]=[];
  arr1:any[]=[];

  constructor(private menu: MenuController, private router: Router, private menuOrdenar: PopoverController, private platform: Platform, private routerDetalhes: Router, private dataService: DataService, public _authService: AuthService) {
    this.platform.ready().then(()=>{
      this.arr = [
        {id: 0, name:"Cabelereiro Zé", description:"Salão de cabelereiro com cortes masculinos e femininos", img:"https://images.unsplash.com/photo-1533245270348-821d4d5c7514?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80", isFavorito: false,
        servicos:[
          {name: 'Corte de cabelo feminino', preco:'35,00', img: 'https://images.pexels.com/photos/3993442/pexels-photo-3993442.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', description:'Corte feminino lavado com xampú e cuidado pelos profissionais especializados em corte feminino'},
          {name: 'Corte de cabelo masculino', preco:'21,00', img: 'https://images.pexels.com/photos/2076930/pexels-photo-2076930.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', description:'Corte masculino. fazemos o corte navalhado, disfarçado ou social.'},
          {name: 'Barba', preco:'15,00', img: 'https://images.pexels.com/photos/1319461/pexels-photo-1319461.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', description:'Total raspagem da barba ou modelagem da forma que preferir'},
          {name: 'Escova progressiva', preco:'100,00', img: 'https://images.pexels.com/photos/3993442/pexels-photo-3993442.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', description:'Escova progressiva com produto limpo, não utilizamos produtos à base de amônia.'}
        ]},
        {id: 1, name:"Manicure & Pedicure - Sandra's", description:"Atendemos no salão e em casa.", img:"https://images.pexels.com/photos/361754/pexels-photo-361754.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", isFavorito: false,
        servicos:[
          {name: 'Manicure', preco:'30,00', img: 'https://images.pexels.com/photos/332046/pexels-photo-332046.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', description:'Melhores cuidados profissionais que sua mão possa ter.'},
          {name: 'Pedicure', preco:'30,00', img: 'https://images.pexels.com/photos/310278/pexels-photo-310278.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', description:'Tratamento profissional para suas unhas dos pés.'},
          {name: 'Unha Postiça', preco:'35,00', img: 'https://images.pexels.com/photos/4031544/pexels-photo-4031544.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', description:'Unhas postiças de ótima qualidade'}
        ]},
        {id: 2, name:"Nestor, o Pintor", description:"Pinturas de paredes para sua casa.", img:"https://images.pexels.com/photos/1669754/pexels-photo-1669754.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", isFavorito: false,
        servicos:[
          {name: 'Pintura de paredes', preco:'A combinar', img: 'https://images.pexels.com/photos/3978855/pexels-photo-3978855.png?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', description:''},
          {name: 'Pintura de portas c/ verniz ou tinta', preco:'70,00', img: 'https://images.pexels.com/photos/3667041/pexels-photo-3667041.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', description:''},
          {name: 'Lixar e pintar parede', preco:'A combinar', img: 'https://images.pexels.com/photos/3615709/pexels-photo-3615709.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', description:''},
          {name: 'Outros serviços de pintura', preco:'A combinar', img: 'https://images.pexels.com/photos/5799045/pexels-photo-5799045.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', description:'Combinar o serviço de pintura ou lixamento comigo'}
        ]},
        {id: 3, name:"André Mecânico", description:"Faço conserto de seu automóvel.", img:"https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", isFavorito: false,
        servicos:[
          {name: 'Troca de Pneu - Carro', preco:'45,00', img: 'https://images.pexels.com/photos/3806249/pexels-photo-3806249.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', description:''},
          {name: 'Troca de Pneu - Moto', preco:'45,00', img: 'https://images.pexels.com/photos/4857714/pexels-photo-4857714.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', description:''},
          {name: 'Manutenção no motor', preco:'73,00', img: 'https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', description:''},
          {name: 'Pintura de Carro', preco:'103,00/A combinar', img: 'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', description:'Podemos combinar o preço dependendo do tamanho da pintura'},
          {name: 'Manutenção Geral', preco:'A combinar', img: 'https://images.pexels.com/photos/4857722/pexels-photo-4857722.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', description:''}
        ]},
        {id: 4, name:"Presentes Andréa", description:"Cestas, presentes e afins.", img:"https://images.pexels.com/photos/274050/pexels-photo-274050.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", isFavorito: false,
        servicos:[
          {name: 'Cestas de dia dos namorados', preco:'130,00', img: 'https://images.pexels.com/photos/2058498/pexels-photo-2058498.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', description:'Presenteie seu amor!'},
          {name: 'Cestas de pelúcias', preco:'140,00', img: 'https://images.pexels.com/photos/6275118/pexels-photo-6275118.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', description:'Uma cesta para presentear em qualquer data.'},
          {name: 'Cestas de vinho', preco:'155,00', img: 'https://images.pexels.com/photos/2912108/pexels-photo-2912108.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', description:'Cesta refinada para os amantes de vinho'}
        ]},
        {id: 5, name:"Flex Assistência Tecnica", description:"Conserto de SmartPhone, computadores e notebooks.", img:"https://images.pexels.com/photos/969462/pexels-photo-969462.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        servicos:[
          {name: 'Troca de tela', preco:'110,00', img: 'https://images.pexels.com/photos/3756879/pexels-photo-3756879.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', description:''},
          {name: 'Troca de Touchscreen', preco:'130,00', img: 'https://images.pexels.com/photos/3756879/pexels-photo-3756879.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', description:''}
        ]}
      ]
      this.arr1 = this.arr;
    })
  }

//Animação do click no favorito
clicado: boolean = true;
toggleClicado(id: number): void {
  this.arr[id].isFavorito = !this.arr[id].isFavorito;
}

  //Funções para abrir páginas dinamicamente
  openDetailsWithQueryParams(){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: 'sei lá'
      }
    }
    this.router.navigate(['perfil-servico'], navigationExtras);
  }

  openDetailsWithService(id: number){
    this.dataService.setData(id, this.arr[id]);
    this.router.navigateByUrl('/perfil-servico/' + id)
  }

  openDetailsWithState(){
    
  }



  //filtro na pesquisa
  filterArray(ev:any){
    this.arr = this.arr1;
    const val = ev.target.value;
    if(val && val.trim() != ""){
      this.arr = this.arr1.filter((item)=> {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1 || item.description.toLowerCase().indexOf(val.toLowerCase()) > -1)
      })
    }
  }


  navegarMeuPerfil(){
    this.router.navigateByUrl('/meu-perfil')
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

  async abrirMenuOrdenar(ev: any){
    const popover = await this.menuOrdenar.create({
      component: PopoverPage,
      event: ev
    })
    return await popover.present()
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PopoverPage } from '../popover/popover.page';
import { AlertController, PopoverController } from '@ionic/angular';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  registerUserData:any = {}

  get name(){
    return this.formularioCadastro.get('nome');
  }
  get email(){
    return this.formularioCadastro.get('email');
  }
  get rg(){
    return this.formularioCadastro.get('rg');
  }
  get cpf(){
    return this.formularioCadastro.get('cpf');
  }
  get password(){
    return this.formularioCadastro.get('password');
  }
  get confirmpassword(){
    return this.formularioCadastro.get('confirmpassword');
  }
  get endereco(){
    return this.formularioCadastro.get('endereco');
  } 
  get datanasc(){
    return this.formularioCadastro.get('datanasc');
  }
  get isPrestador(){
    return this.formularioCadastro.get('isPrestador');
  }

  public mensagensErro = {
    name: [
      {type: 'required', message: 'Nome não pode estar em branco'},
      {type: 'maxlength', message: 'Nome não pode passar de 100 caracteres'},
    ],
    email: [
      {type: 'required', message: 'E-mail não pode estar em branco'},
      {type: 'pattern', message: 'Formato de E-mail inválido'},
    ],
    rg: [
      {type: 'required', message: 'RG não pode estar em branco'},
      {type: 'minlength', message: 'Formato de RG inválido'},
    ],
    cpf: [
      {type: 'required', message: 'CPF não pode estar em branco'},
      {type: 'pattern', message: 'Formato de CPF inválido'}
    ],
    password: [
      {type: 'required', message: 'Senha não pode estar vazia'},
      {type: 'minlength', message: 'Senha precisa ter pelo menos 6 caracteres'},
      {type: 'maxlength', message: 'Senha não pode passar dos 60 caracteres'}
    ],
    confirmpassword: [
      {type: 'required', message: 'Confirmar senha não pode estar vazio'}
    ],
    endereco: [
      {type: 'required', message: 'Endereço não pode estar vazio'},
      {type: 'minlenght', message: 'Endereço inválido'}
    ]
  }

  formularioCadastro = this.formBuilder.group({
    nome : ['', [Validators.required, Validators.maxLength(100)]],
    email : ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9._%-]+@[a-zA-Z0-9-]+.[a-zA-Z]{2,4}$")]],
    rg : ['', [Validators.required, Validators.minLength(5)]],
    cpf : ['', [Validators.required, Validators.pattern("^[0-9.,]{8,14}$")]],
    password : ['', [Validators.required, Validators.minLength(6), Validators.maxLength(60)]],
    confirmpassword : ['', Validators.required],
    endereco : ['', [Validators.required, Validators.minLength(5)]],
    datanasc : ['', Validators.required],
    isPrestador : ['']
  });

  constructor(private _auth: AuthService, private formBuilder: FormBuilder, private router: Router, private erroCadastro: PopoverController, public alertController: AlertController) { }


  public submit(){
    console.log(this.formularioCadastro.value)
    //localStorage.setItem('nome', this.formularioCadastro.value.nome)
  }

  ngOnInit() {
  }

  async presentAlert(){
    const alert = await this.alertController.create({
      header: 'Erro',
      message: 'Há campos preenchidos de maneira incorreta.',
      buttons: ['OK']
    });

    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }

  async abrirPopoverErroCadastro(ev: any){
    const popover = await this.erroCadastro.create({
      component: PopoverPage,
      event: ev
    })
    return await popover.present()
  }

  registerUser(){
    if(this.formularioCadastro.get('nome').valid && this.formularioCadastro.get('email').valid
    && this.formularioCadastro.get('rg').valid && this.formularioCadastro.get('cpf').valid
    && this.formularioCadastro.get('password').valid && this.formularioCadastro.get('confirmpassword').valid
    && this.formularioCadastro.get('endereco').valid && this.formularioCadastro.get('datanasc').valid
    && this.formularioCadastro.get('password').value === this.formularioCadastro.get('confirmpassword').value){
    this._auth.registerUser(this.registerUserData)
      .subscribe(
        res => {
          console.log(res)
          localStorage.setItem('token', res.token)
          console.log(this.registerUserData)
          this.router.navigateByUrl('/menu-inicial')
        },
        err => console.log(err)
      )
    } else {
      this.presentAlert();
    }
  }

}

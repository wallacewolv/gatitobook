import { Router } from '@angular/router';
import { UsuarioExisteService } from './services/usuario-existe.service';
import { NovoUsuarioService } from './services/novo-usuario.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NovoUsuario } from './models/novo-usuario';
import { minusculoValidator } from './validators/minusculo.validator';
import { usuarioSenhaIguaisValidator } from './validators/usuario-senha-iguais.validator';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css']
})
export class NovoUsuarioComponent implements OnInit {

  novoUsuarioForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private novoUsuarioService: NovoUsuarioService,
    private usuarioExisteService: UsuarioExisteService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.incicializarNovoUsuarioForm();
  }

  incicializarNovoUsuarioForm() {
    this.novoUsuarioForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      fullName: ['', [Validators.required, Validators.minLength(4)]],
      userName: [
        '',
        [minusculoValidator],
        [this.usuarioExisteService.usuarioExiste()]],
      password: [''],
    }, {
      validators: [usuarioSenhaIguaisValidator],
    })
  }

  cadastrar() {
    if (this.novoUsuarioForm.valid) {
      const novoUsuario = this.novoUsuarioForm.getRawValue() as NovoUsuario;
      this.novoUsuarioService.cadastraNovousuario(novoUsuario).subscribe(
        () => {
          this.router.navigate(['']);
        },
        (error) => {
          console.log(error);
        }
      )
    }

  }
}

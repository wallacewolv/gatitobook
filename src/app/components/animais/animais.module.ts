import { ReactiveFormsModule } from '@angular/forms';
import { CartaoModule } from './../shared/cartao/cartao.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimaisRoutingModule } from './animais-routing.module';
import { ListaAnimaisComponent } from './lista-animais/lista-animais.component';
import { AnimalComponent } from './animal/animal.component';
import { GradeFotosAnimaisComponent } from './grade-fotos-animais/grade-fotos-animais.component';
import { DetalheAnimalComponent } from './detalhe-animal/detalhe-animal.component';
import { ComentariosComponent } from './detalhe-animal/comentarios/comentarios.component';
import { MensagemModule } from '../shared/mensagem/mensagem.module';


@NgModule({
  declarations: [
    ListaAnimaisComponent,
    AnimalComponent,
    GradeFotosAnimaisComponent,
    DetalheAnimalComponent,
    ComentariosComponent
  ],
  imports: [
    CommonModule,
    AnimaisRoutingModule,
    CartaoModule,
    MensagemModule,
    ReactiveFormsModule
  ]
})
export class AnimaisModule { }

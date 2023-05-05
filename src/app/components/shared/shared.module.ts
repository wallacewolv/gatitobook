import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { CabecalhoModule } from './cabecalho/cabecalho.module';
import { CartaoModule } from './cartao/cartao.module';
import { MensagemModule } from './mensagem/mensagem.module';
import { RodapeModule } from './rodape/rodape.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,

    CabecalhoModule,
    CartaoModule,
    MensagemModule,
    RodapeModule,
  ],
  exports: [
    ReactiveFormsModule,

    CabecalhoModule,
    CartaoModule,
    MensagemModule,
    RodapeModule,
  ],
})
export class SharedModule {}

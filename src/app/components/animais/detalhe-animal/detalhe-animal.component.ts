import { AnimaisService } from './../services/animais.service';
import { Animal } from './../models/animais';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhe-animal',
  templateUrl: './detalhe-animal.component.html',
  styleUrls: ['./detalhe-animal.component.css']
})
export class DetalheAnimalComponent implements OnInit {

  animalId!: number;
  animal$!: Observable<Animal>;

  constructor(
    private animaisService: AnimaisService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.animalId = this.activatedRoute.snapshot.params?.['animalId'];
    this.animal$ = this.animaisService.buscarPorId(this.animalId);
  }

}

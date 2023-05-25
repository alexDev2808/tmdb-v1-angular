import { Component, Input, Output, EventEmitter, OnInit, AfterViewInit OnChanges, SimpleChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit {

  // con input podemos recibir datos del padre
  @Input() img: string = 'url de la img';

  // enviar datos al padre
  @Output() loaded = new EventEmitter<string>();

  defaultImg = 'https://www.idsplus.net/wp-content/uploads/default-placeholder.png'

  constructor() {
    // antes del render, no correr cosas asincronas, corre una vez
    console.log('constructor');

  }
  ngOnChanges(changes: SimpleChanges): void {
    // antes y durante el render, acutualizando cambios en inputs
    console.log("ngOnChanges");

  }
  ngOnInit(): void {
    // antes del render, cosas asincronas, corre una vez
    console.log("ngOnInit");

  }

  ngAfterViewInit(): void {
    // despues del render, manejar a los hijos
    console.log("AfterViewInit");

  }

  ngOnDestroy(): void {
    // eliminar componente
    console.log("ngOnDestroy");

  }
  imgError() {
    this.img = this.defaultImg;
  }
  imgLoaded() {
    console.log("Imagen cargada, desde el hijo");
    this.loaded.emit(this.img);
  }
}

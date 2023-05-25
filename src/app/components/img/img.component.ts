import { Component, Input, Output, EventEmitter, OnInit, AfterViewInit, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit {

  img: string = 'url de la img';
  // con input podemos recibir datos del padre
  @Input()
  set changeImg(newImg: string) {
    this.img = newImg;
  }

  // enviar datos al padre
  @Output() loaded = new EventEmitter<string>();

  defaultImg = 'https://www.idsplus.net/wp-content/uploads/default-placeholder.png'
  counter = 0;
  counterFn: number | undefined;

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
    this.counterFn = window.setInterval(() => {
      this.counter += 1;
      console.log("Corriendo counter");

    },1000)

  }

  ngAfterViewInit(): void {
    // despues del render, manejar a los hijos
    console.log("AfterViewInit");

  }

  ngOnDestroy(): void {
    // eliminar componente
    console.log("ngOnDestroy");
    window.clearInterval(this.counterFn);

  }
  imgError() {
    this.img = this.defaultImg;
  }
  imgLoaded() {
    console.log("Imagen cargada, desde el hijo");
    this.loaded.emit(this.img);
  }
}

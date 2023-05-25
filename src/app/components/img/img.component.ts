import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent {

  // con input podemos recibir datos del padre
  @Input() img: string = 'url de la img';

  // enviar datos al padre
  @Output() loaded = new EventEmitter<string>();

  defaultImg = 'https://www.idsplus.net/wp-content/uploads/default-placeholder.png'


  imgError() {
    this.img = this.defaultImg;
  }
  imgLoaded() {
    console.log("Imagen cargada, desde el hijo");
    this.loaded.emit(this.img);
  }
}

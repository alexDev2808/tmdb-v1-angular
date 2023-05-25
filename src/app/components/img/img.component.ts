import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent {

  // con input podemos recibir datos del padre
  @Input() img: string = 'url de la img';

  defaultImg = 'https://www.idsplus.net/wp-content/uploads/default-placeholder.png'

}

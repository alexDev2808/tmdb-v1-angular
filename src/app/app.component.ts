import { Component } from '@angular/core';
import { Movie } from './models/movie.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParent = '';
  showImg = true;


  onLoaded(urlImg: string) {
    console.log("Url: ", urlImg);

  }

  toggleImg() {
    this.showImg = !this.showImg;
  }
}

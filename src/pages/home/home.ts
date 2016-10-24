import { Component } from '@angular/core';
import { Camera } from 'ionic-native';
import { ChooseGallery } from '../../components/choose-gallery/duty';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public base64Image: string;
  images: any = [];
  image: any = {};
  constructor() {
  }

  takePicture(){
    Camera.getPicture({
      destinationType: Camera.DestinationType.DATA_URL,
      targetWidth: 1000,
      targetHeight: 1000
    }).then((imageData) => {
      // imageData is a base64 encoded string
      this.base64Image = "data:image/jpeg;base64," + imageData;
      console.log(this.base64Image);
      this.image = {
        url: this.base64Image
      };
      console.log(this.image);
      this.images.push(this.image);
    }, (err) => {
      console.log(err);
    });
  }

}

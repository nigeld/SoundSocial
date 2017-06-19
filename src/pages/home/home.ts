import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Authentication } from '../../services/authentication';
import { Uploader } from '../../services/uploader';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	files : any;

  constructor(public navCtrl: NavController,
  				private auth : Authentication,
  				private uploader : Uploader) {

  }

  fileChange(ev){
  	console.log(ev.target.files);
  	this.files = ev.target.files;
  }

  submit(){
  	if(this.files.length <= 0) return 0;
  	this.uploader.uploadMultiple(this.files);
  }

}

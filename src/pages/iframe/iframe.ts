import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

/*
 Generated class for the Iframe page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
    selector: 'page-iframe',
    templateUrl: 'iframe.html'
})
export class IframePage {

    constructor(public navCtrl: NavController) {
    }

    ionViewDidLoad() {
        console.log('Hello Iframe Page');
    }

}

import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {UtilService} from "../../providers/util.service";

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

    heigth: number;
    width: number;

    constructor(public navCtrl: NavController, private utilService: UtilService) {
        let device = this.utilService.device;
        this.heigth = device.height;
        this.width = device.width;
    }

    ionViewDidLoad() {
        console.log('Hello Iframe Page');
    }

}

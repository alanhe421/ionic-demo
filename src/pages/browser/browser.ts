import {Component} from "@angular/core";
import {IonicPage, NavController, NavParams} from "ionic-angular";
import {InAppBrowser} from "@ionic-native/in-app-browser";

/**
 * Generated class for the BrowserPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
    selector: 'page-browser',
    templateUrl: 'browser.html',
})
export class BrowserPage {

    constructor(public navCtrl: NavController, public navParams: NavParams, private iab: InAppBrowser) {
    }

    ionViewDidLoad() {
        this.iab.create('http://1991421.cn');
        console.log('ionViewDidLoad BrowserPage');
    }

}

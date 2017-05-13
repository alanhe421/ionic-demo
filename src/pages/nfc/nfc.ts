import {Component} from "@angular/core";
import {IonicPage} from "ionic-angular";
import {NFC, Ndef} from "@ionic-native/nfc";
/**
 * Generated class for the NfcPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
    selector: 'page-nfc',
    templateUrl: 'nfc.html',
})
export class NfcPage {

    constructor(private nfc: NFC, private ndef: Ndef) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad NfcPage');
        let message = this.ndef.textRecord('Hello world');
        this.nfc.share([message]).then(() => {

        }).catch(() => {

        });
    }

    //读数据
    readData() {

    }

    //写数据
    writeData() {

    }

    //发送数据
    sendData() {

    }

    //接收数据
    receiveData() {

    }
}

import {Component} from "@angular/core";
import {IonicPage, NavController, NavParams} from "ionic-angular";
import {BarcodeScanner} from "@ionic-native/barcode-scanner";

/**
 * Generated class for the ScannerPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
    selector: 'page-scanner',
    templateUrl: 'scanner.html',
})
export class ScannerPage {

    constructor(public navCtrl: NavController, public navParams: NavParams, private barcodeScanner: BarcodeScanner) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ScannerPage');
    }

    /**
     *
     */
    scan() {
        this.barcodeScanner.scan({
            preferFrontCamera: false, // iOS and Android
            showFlipCameraButton: false, // iOS and Android
            showTorchButton: true, // iOS and Android
            torchOn: true, // Android, launch with the torch switched on (if available)
            prompt: "Place a barcode inside the scan area", // Android
            resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
            formats: "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
            orientation: "portrait", // Android only (portrait|landscape), default unset so it rotates with the device
            disableAnimations: true, // iOS
            disableSuccessBeep: false // iOS
        }).then((barcodeData) => {

        }, (err) => {
            // An error occurred
        });
    }
}

import {Component} from "@angular/core";
import {NavController, NavParams} from "ionic-angular";
import {File} from "@ionic-native/file";

/**
 * Generated class for the File page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
    selector: 'page-file',
    templateUrl: 'file.html',
})
export class FilePage {

    fileName = 'test.txt';

    inputTxt: string;

    constructor(public navCtrl: NavController, public navParams: NavParams, private file: File) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad File');

    }

    //读取文本文件
    readFile() {
        this.file.readAsText(this.file.dataDirectory, 'mydir').then((text) =>
            console.log(text)).catch(err => console.log(err.toString()));

    }

    /**
     * 向文件中写文本
     */
    writeToFile() {
        this.file.writeExistingFile(this.file.dataDirectory, this.fileName, this.inputTxt);
    }

}

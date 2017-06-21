import {Component} from "@angular/core";
import {File} from "@ionic-native/file";
import {IonicPage} from "ionic-angular";

/**
 * Generated class for the File page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
    selector: 'page-file',
    templateUrl: 'file.html',
})
export class FilePage {

    fileName = 'test.txt';

    inputTxt: string;

    fileDir: string;
    fileCnt: string;

    constructor(private file: File) {
        this.fileDir = this.file.applicationDirectory;
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad File');
        console.log(this.fileDir);
        this.file.createFile(this.fileDir, this.fileName, true);
    }

    //读取文本文件
    readFile() {
        this.file.readAsText(this.file.dataDirectory, this.fileName).then((text) => {
            console.log(text);
            this.fileCnt = text;
        }).catch(err => console.log(err));
    }

    /**
     * 向文件中写文本
     */
    writeToFile() {
        this.file.writeExistingFile(this.file.dataDirectory, this.fileName, this.inputTxt);
    }

}

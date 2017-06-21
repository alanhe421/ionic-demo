import {NgModule} from "@angular/core";
import {IonicPageModule} from "ionic-angular";
import {FilePage} from "./file";

@NgModule({
    declarations: [
        FilePage,
    ],
    imports: [
        IonicPageModule.forChild(FilePage),
    ],
    exports: [
        FilePage
    ]
})
export class FilePageModule {
}

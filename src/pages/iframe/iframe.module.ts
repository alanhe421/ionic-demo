import {NgModule} from "@angular/core";
import {IonicPageModule} from "ionic-angular";
import {IframePage} from "./iframe";

@NgModule({
    declarations: [
        IframePage,
    ],
    imports: [
        IonicPageModule.forChild(IframePage),
    ],
    exports: [
        IframePage
    ]
})
export class IframePageModule {
}

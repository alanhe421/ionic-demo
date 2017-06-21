import {NgModule} from "@angular/core";
import {IonicPageModule} from "ionic-angular";
import {D3Page} from "./d3";

@NgModule({
    declarations: [
        D3Page,
    ],
    imports: [
        IonicPageModule.forChild(D3Page),
    ],
    exports: [
        D3Page
    ]
})
export class D3PageModule {
}

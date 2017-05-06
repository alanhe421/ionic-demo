import {Component, ViewChild} from "@angular/core";
import {Nav} from "ionic-angular";
import {EchartsPage} from "../echarts/echarts";
import {D3Page} from "../d3/d3";

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    pages: Array<{title: string, component: any}>;
    @ViewChild(Nav) nav: Nav;

    constructor() {
        this.pages = [
            {title: 'echarts', component: EchartsPage},
            {title: 'd3', component: D3Page}
        ];
    }

    openPage(page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    }
}

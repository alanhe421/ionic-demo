import {Component} from "@angular/core";
import {EchartsPage} from "../echarts/echarts";
import {D3Page} from "../d3/d3";
import {IframePage} from "../iframe/iframe";
import {MorePage} from "../more/more";

@Component({
    templateUrl: 'tabs.html'
})
export class TabsPage {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    tab1Root = D3Page;
    tab2Root = IframePage;
    tab3Root = EchartsPage;
    tab4Root = MorePage;

    constructor() {

    }
}

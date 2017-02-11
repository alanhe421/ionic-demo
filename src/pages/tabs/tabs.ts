import {Component} from '@angular/core';

import {AboutPage} from '../about/about';
import {ContactPage} from '../contact/contact';
import {EchartsPage} from "../echarts/echarts";
import {D3Page} from "../d3/d3";
import {IframePage} from "../iframe/iframe";

@Component({
    templateUrl: 'tabs.html'
})
export class TabsPage {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    tab1Root: any = D3Page;
    tab2Root: any = IframePage;
    tab3Root: any = ContactPage;
    tab4Root: any = EchartsPage;

    constructor() {

    }
}

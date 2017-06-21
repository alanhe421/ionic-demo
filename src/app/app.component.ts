import {Component, ViewChild} from "@angular/core";
import {Nav, Platform} from "ionic-angular";
import {UtilService} from "../providers/util.service";
import {StatusBar} from "@ionic-native/status-bar";
import {SplashScreen} from "@ionic-native/splash-screen";
import {EchartsPage} from "../pages/echarts/echarts";
import {D3Page} from "../pages/d3/d3";
import {IframePage} from "../pages/iframe/iframe";
import {ContactPage} from "../pages/contact/contact";
import {FilePage} from "../pages/file/file";
import {NfcPage} from "../pages/nfc/nfc";
import {BrowserPage} from "../pages/browser/browser";

@Component({
    templateUrl: `app.component.html`
})
export class MyApp {
    rootPage = ContactPage;
    pages: Array<{ title: string, name: string }>;
    @ViewChild(Nav) nav: Nav;

    constructor(platform: Platform, private statusBar: StatusBar, private splashScreen: SplashScreen, private utilService: UtilService) {
        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
        this.utilService.device.width = platform.width();
        this.utilService.device.height = platform.height();
        this.pages = [
            {title: 'barcode-scanner', name: 'ScannerPage'},
            {title: 'echarts', name: 'EchartsPage'},
            {title: 'd3', name: 'D3Page'},
            {title: 'iframe', name: 'IframePage'},
            {title: 'file', name: 'FilePage'},
            {title: 'nfc', name: 'NfcPage'},
            {title: 'browser', name: 'BrowserPage'},
            {title: 'test', name: 'ContactPage'},
        ];
    }

    openPage(page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.push(page.name);
    }

}

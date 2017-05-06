import {Component, ViewChild} from "@angular/core";
import {Platform, Nav} from "ionic-angular";
import {UtilService} from "../providers/util.service";
import {StatusBar} from "@ionic-native/status-bar";
import {SplashScreen} from "@ionic-native/splash-screen";
import {EchartsPage} from "../pages/echarts/echarts";
import {D3Page} from "../pages/d3/d3";
@Component({
    templateUrl: `app.component.html`
})
export class MyApp {
    rootPage = EchartsPage;
    pages: Array<{title: string, component: any}>;
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

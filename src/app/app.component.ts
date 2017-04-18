import {Component} from "@angular/core";
import {Platform} from "ionic-angular";
import {TabsPage} from "../pages/tabs/tabs";
import {UtilService} from "../providers/util.service";
import {StatusBar} from "@ionic-native/status-bar";
import {SplashScreen} from "@ionic-native/splash-screen";
@Component({
    template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {
    rootPage = TabsPage;

    constructor(platform: Platform, private statusBar: StatusBar, private splashScreen: SplashScreen, private utilService: UtilService) {
        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
        this.utilService.device.width = platform.width();
        this.utilService.device.height = platform.height();
    }
}

import {NgModule} from "@angular/core";
import {IonicApp, IonicModule} from "ionic-angular";
import {MyApp} from "./app.component";
import {AboutPage} from "../pages/about/about";
import {ContactPage} from "../pages/contact/contact";
import {HomePage} from "../pages/home/home";
import {TabsPage} from "../pages/tabs/tabs";
import {EchartsPage} from "../pages/echarts/echarts";
import {D3Page} from "../pages/d3/d3";
import {IframePage} from "../pages/iframe/iframe";
import {UtilService} from "../providers/util.service";
import {MorePage} from "../pages/more/more";
import {HttpModule} from "@angular/http";
import {BrowserModule} from "@angular/platform-browser";
import {StatusBar} from "@ionic-native/status-bar";
import {SplashScreen} from "@ionic-native/splash-screen";
import {File} from "@ionic-native/file";
import {FilePage} from "../pages/file/file";
import {NFC, Ndef} from "@ionic-native/nfc";
import {NfcPageModule} from "../pages/nfc/nfc.module";
@NgModule({
    declarations: [
        MyApp,
        AboutPage,
        ContactPage,
        HomePage,
        TabsPage,
        EchartsPage,
        D3Page,
        IframePage,
        FilePage,
        MorePage,
    ],
    imports: [
        BrowserModule,
        HttpModule,
        IonicModule.forRoot(MyApp),
        NfcPageModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        AboutPage,
        ContactPage,
        HomePage,
        TabsPage,
        EchartsPage,
        D3Page,
        IframePage,
        MorePage,
        FilePage
    ],
    providers: [SplashScreen, StatusBar, File, NFC, Ndef, UtilService]
})
export class AppModule {
}

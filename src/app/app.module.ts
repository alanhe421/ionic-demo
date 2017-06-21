import {NgModule} from "@angular/core";
import {IonicApp, IonicModule} from "ionic-angular";
import {MyApp} from "./app.component";
import {UtilService} from "../providers/util.service";
import {HttpModule} from "@angular/http";
import {BrowserModule} from "@angular/platform-browser";
import {StatusBar} from "@ionic-native/status-bar";
import {SplashScreen} from "@ionic-native/splash-screen";
import {File} from "@ionic-native/file";
import {Ndef, NFC} from "@ionic-native/nfc";
import {InAppBrowser} from "@ionic-native/in-app-browser";
import {ContactPageModule} from "../pages/contact/contact.module";
@NgModule({
    declarations: [
        MyApp
    ],
    imports: [
        BrowserModule,
        HttpModule,
        ContactPageModule,
        IonicModule.forRoot(MyApp),
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp
    ],
    providers: [SplashScreen, StatusBar, File, NFC, Ndef, InAppBrowser, UtilService]
})
export class AppModule {
}

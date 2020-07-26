import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SharedModule } from "./shared/shared.module";
import { CoreModule } from "./core/core.module";
import { HomeModule } from "./home/home.module";

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { HttpClientModule } from "@angular/common/http";

const firebaseConfig = {
  apiKey: "AIzaSyCYPUG0XN1rA89dbTE9snXWUn5xFpwUiRA",
  authDomain: "fir-auth-45b4a.firebaseapp.com",
  databaseURL: "https://fir-auth-45b4a.firebaseio.com",
  projectId: "fir-auth-45b4a",
  storageBucket: "fir-auth-45b4a.appspot.com",
  messagingSenderId: "248041844902",
  appId: "1:248041844902:web:9e80fe6ac60e26b112c467",
  measurementId: "G-6CDYH8CDZJ",
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    HomeModule,
  ],
  providers: [],

  entryComponents: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

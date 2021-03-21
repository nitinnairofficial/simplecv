import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { DragulaModule, DragulaService } from 'ng2-dragula';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { HttpClientModule } from '@angular/common/http';

const firebaseConfig = {
  apiKey: 'AIzaSyC3sTTIoSPQJaExJVnufcZtjGkMkU44sxE',
  authDomain: 'quickresume-8cd4a.firebaseapp.com',
  databaseURL: 'https://quickresume-8cd4a-default-rtdb.firebaseio.com',
  projectId: 'quickresume-8cd4a',
  storageBucket: 'quickresume-8cd4a.appspot.com',
  messagingSenderId: '125926849092',
  appId: '1:125926849092:web:4903c22cf2f99953dcda11',
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
    DragulaModule.forRoot(),
  ],
  providers: [DragulaService],

  entryComponents: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

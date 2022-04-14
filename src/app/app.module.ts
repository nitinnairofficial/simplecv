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
  apiKey: 'AIzaSyAb3MILrQsXRcK6L4wfkprbkunyHR-GgWA',
  authDomain: 'simplecv-users.firebaseapp.com',
  projectId: 'simplecv-users',
  storageBucket: 'simplecv-users.appspot.com',
  messagingSenderId: '445111787922',
  appId: '1:445111787922:web:f81798a87bf87ea877614b',
  databaseURL: 'https://simplecv-users-default-rtdb.firebaseio.com',
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

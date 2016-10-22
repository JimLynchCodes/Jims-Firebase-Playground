import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {FirebaseListComponent} from './firebase-list/firebase-list.component';
import { AngularFireModule } from 'angularfire2';
import * as firebase from 'firebase';

// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyAkIvpWg-85GLQ7ei4V4_DPAFp7IFfWG_0',
  authDomain: 'fir-rooms.firebaseapp.com',
  databaseURL: 'https://fir-rooms.firebaseio.com',
  storageBucket: 'fir-rooms.appspot.com'
};

console.log('firebase is a thing! ' + firebase);

firebase.initializeApp(firebaseConfig)
    // firebase.initializeApp(firebaseConfig)

@NgModule({
  declarations: [
    AppComponent,
    FirebaseListComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import * as firebase from 'firebase/app' ;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'pizza'
    },
    {
      title: 'Popular Recipes',
      url: '/list',
      icon: 'globe'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menu: MenuController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    firebase.initializeApp({
      apiKey: "AIzaSyC2RbRJEuQcU0vST6wpmyW4k7QZUq4aIS4",
      authDomain: "chefshare-e29ca.firebaseapp.com",
      databaseURL: "https://chefshare-e29ca.firebaseio.com",
      projectId: "chefshare-e29ca",
      storageBucket: "chefshare-e29ca.appspot.com",
      messagingSenderId: "289075916816"
    })
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }


  logout() {
    firebase.auth().signOut();
    this.menu.close();
  }
}

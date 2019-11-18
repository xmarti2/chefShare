import { Component } from '@angular/core';
import { SpoonacularService } from '../services/spoonacular.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';


@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage {

  browseService: any;

  constructor( private spoonacularService: SpoonacularService, private iab: InAppBrowser ) {}

  ngOnInit() {
    // this.newsService.fetchNews().subscribe();
  }

  ionViewWillEnter() {
    this.spoonacularService.fetchRecipes().subscribe();
  }

  openNative(x: string){
    console.log('opening...');
    this.iab.create(x, `_system`);
  }

  doRefresh(refresher) {
          this.ionViewWillEnter();

          refresher.target.complete();
      }
    }

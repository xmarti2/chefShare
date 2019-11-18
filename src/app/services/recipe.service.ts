import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  public recipes = [];
  public selectedRecipe: any;
  ref = firebase.database().ref('recipes/');

  constructor() {
    this.ref.on('value', resp => {
      this.recipes = [];
      this.recipes = snapshotToArray(resp);
      console.log(this.recipes);
    });
  }

  addRecipe(recipe) {
    recipe['user'] = firebase.auth().currentUser.email;
    return firebase.database().ref('recipes/').push(recipe);
  }
}

export const snapshotToArray = snapshot => {
  let returnArr = [];

  snapshot.forEach(childSnapshot => {
      let item = childSnapshot.val();
      item.key = childSnapshot.key;
      returnArr.push(item);
  });
  return returnArr;
};

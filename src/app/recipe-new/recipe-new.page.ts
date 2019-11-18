import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-new',
  templateUrl: './recipe-new.page.html',
  styleUrls: ['./recipe-new.page.scss'],
})
export class RecipeNewPage implements OnInit {
  newRecipe = { type: '', description: '', recipe: '' };

  constructor( private recipeService: RecipeService,
               private router: Router ) { }

  ngOnInit() {
  }

  addRecipe() {
    console.log(this.newRecipe);
    this.recipeService.addRecipe(this.newRecipe)
      .then(data => {
        console.log(data);
        this.router.navigateByUrl('/home');
      })
      .catch(error => {
        console.log(error);
      });
  }

  inputCheck() {
    return (this.newRecipe.description == ' ');
  }

}

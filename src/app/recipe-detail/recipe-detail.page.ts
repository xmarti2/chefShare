import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
  recipe = this.recipeService.selectedRecipe;

  constructor( private recipeService: RecipeService ) { }

  ngOnInit() {
    console.log(this.recipe);
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  // items = this.expenseService.expenses;

  constructor( private userService: UserService,
               private recipeService: RecipeService,
               private router: Router ) {
  }

  ngOnInit() {
  }

  onSelect(recipe) {
    console.log(recipe);
    this.recipeService.selectedRecipe = recipe;
    this.router.navigateByUrl('/recipe-detail');
  }

  newRecipe() {
    this.router.navigateByUrl('/recipe-new');
  }

}

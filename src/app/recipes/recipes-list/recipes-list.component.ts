import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'],
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'description',
      'https://cdn.pixabay.com/photo/2015/04/29/19/33/cookbook-746005_1280.jpg'
    ),
    new Recipe(
      'A test recipe',
      'description',
      'https://cdn.pixabay.com/photo/2015/04/29/19/33/cookbook-746005_1280.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}

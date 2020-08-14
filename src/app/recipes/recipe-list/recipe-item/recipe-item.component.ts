import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../../recipe.model';


@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe; // this input is coming from recipe-list.component.html
  @Input() index: number;

  ngOnInit(): void {
  }

}



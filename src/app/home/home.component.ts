import { Component, OnInit } from '@angular/core';
import { LessonsService } from '../shared/services/lessons.service';
import { RecipiesService } from '../shared/services/recipies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'List of Recipies';


  // CHALLENGE
  // STEP 01: Create a LessonsService
  // hint: ng g shared/services/lessons -d
  // STEP 02: Add the lessons service to app.module
  // STEP 03: Inject lessons service into component
  // STEP 04: Move lessons to service and consume in component


  selectedRecipie = null;

  recipies = null;

  constructor(private recipiesService: RecipiesService) { }

  ngOnInit(): void {
    this.resetSelectedRecipie();
    this.loadRecipies();

  }

  loadRecipies(){
    this.recipiesService.all()
    .subscribe(recipies => this.recipies = recipies);
    this.cancel();
  }

  resetSelectedRecipie() {
    const emptyRecipie = {
      id: null,
      dishName: '',
      ingredients: '',
      timeNeeded: '',
      description: '',
      rating: 0,
      pictureUrl: ''
    };

    this.selectedRecipie = emptyRecipie;
  }

  selectRecipie(recipie) {
    this.selectedRecipie = recipie;
  }

  saveRecipie(recipie) {
    if(recipie.id) {
      this.recipiesService.update(recipie).subscribe(result => this.loadRecipies());
    } else {
      this.recipiesService.create(recipie)
      .subscribe(result => this.loadRecipies());

    }
  }

  deleteRecipie(recipieId) {
    this.recipiesService.delete(recipieId)
    .subscribe(result => this.loadRecipies());
  }

  cancel() {
    this.resetSelectedRecipie();
  }
}



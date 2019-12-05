import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
  public score = 0;
  public scoreTotal = this.getScoreTotal();

  getScoreTotal() {
    let questions = JSON.parse(localStorage.getItem('questions'));

    if (questions === null) {
      return 0;
    } else {
      return questions.length;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}

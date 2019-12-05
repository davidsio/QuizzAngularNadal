import { Component, OnInit } from '@angular/core';
import questions from '../_files/questions.json';

@Component({
  selector: 'app-quiz-questions',
  templateUrl: './quiz-questions.component.html',
  styleUrls: ['./quiz-questions.component.css']
})
export class QuizQuestionsComponent implements OnInit {
  public numQuestion = 0;
  public question = this.getNextQuestion();
  public questionsList: {pays: string, capitale: string, continent: string}[] = questions.questions;
  public randomCapitals;


  getQuestion() {
    let question = JSON.parse(localStorage.getItem('questions'));
    if (question === null) {
      return null;
    } else {
      this.numQuestion = 1;
      return question[0];
    }
  }

  getNextQuestion() {
    let randomCapital = [];
    let theCapital;
    for (let i = 0; i < 3; i++) {
      let random = this.randomInt(0, questions.questions.length);

      theCapital = questions.questions[random];
      randomCapital.push(
        {
          capitale: theCapital.capitale,
        }
      );
    }

    localStorage.setItem('randomCapitals', JSON.stringify(randomCapital));

    this.randomCapitals = JSON.parse(localStorage.getItem('randomCapitals'))
    if (this.numQuestion == 0) {
      return this.getQuestion();
    }
    let question = JSON.parse(localStorage.getItem('questions'));
    if (question === null) {
      return null;
    } else {
      this.question = question[this.numQuestion];
      this.numQuestion += 1;
    }
  }

  getRandomCapital() {

  }
  constructor() { }

  ngOnInit() {
  }
  randomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  accueil() {
    location.href = "/quiz";
  }

}


import { Component, OnInit } from '@angular/core';
import questions from '../_files/questions.json';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  public questionsList: {pays: string, capitale: string, continent: string}[] = questions.questions;

  constructor() { }

  ngOnInit() {
  }

  public newGame() {
    let quizQuestions = [];
    let theQuestion;
    for (let i = 0; i < 10; i++) {
      let random = this.randomInt(0, this.questionsList.length);
      theQuestion = questions.questions[random];
      quizQuestions.push(
        {
          pays: theQuestion.pays,
          capitale: theQuestion.capitale,
          continent: theQuestion.continent,
          num: i
        }
      );
    }

    localStorage.setItem('questions', JSON.stringify(quizQuestions));
    location.href = '/question';
  }

  randomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  public checkStorage() {

    if (localStorage.getItem('questions') === null) {
      return false;
    } else {
      const questions = localStorage.getItem('questions');

      return questions;
    }
  }

}

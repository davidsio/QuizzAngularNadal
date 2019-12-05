import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizComponent } from './quiz/quiz.component';
import { QuizQuestionsComponent } from './quiz-questions/quiz-questions.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'quiz' },
  { path: 'quiz', component: QuizComponent },
  { path: 'question', component: QuizQuestionsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

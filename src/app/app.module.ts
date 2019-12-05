import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularMaterialModule } from './angular-material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizComponent } from './quiz/quiz.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentNameComponent } from './component-name/component-name.component';
import { QuizQuestionsComponent } from './quiz-questions/quiz-questions.component';
import {QuestionServiceService} from './question-service.service';
import { HttpClientModule } from '@angular/common/http';
import { ScoreComponent } from './score/score.component';
import { TimerComponent } from './timer/timer.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    ComponentNameComponent,
    QuizQuestionsComponent,
    ScoreComponent,
    TimerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [ QuestionServiceService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

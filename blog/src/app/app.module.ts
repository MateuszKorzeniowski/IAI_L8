import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { MapComponent } from './components/map/map.component';
import { QuizIndexComponent } from './components/quiz-index/quiz-index.component';
import { QuizGameComponent } from './components/quiz-game/quiz-game.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'map',
    component: MapComponent,
  },
  {
    path: 'quiz-index',
    component: QuizIndexComponent,
  },
  {
    path: 'quiz-game',
    component: QuizGameComponent,
  },
  {
    path: 'nav-bar',
    component: NavBarComponent,
  }];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    MapComponent,
    QuizIndexComponent,
    QuizGameComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]


})
export class AppModule {
}





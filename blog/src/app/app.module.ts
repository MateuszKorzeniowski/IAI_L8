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
import { BlogItemComponent } from './components/blog-item/blog-item.component';
import { BlogItemTextComponent } from './components/blog-item-text/blog-item-text.component';
import { BlogItemImageComponent } from './components/blog-item-image/blog-item-image.component';
import { BlogItemDetailComponent } from './components/blog-item-detail/blog-item-detail.component';
import { BlogComponent } from './components/blog/blog.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { BlogHomeComponent } from './blog-home/blog-home.component';
import { TextFormatDirective } from './directives/text-format.directive';

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
    path: 'blog',
    component: BlogHomeComponent,
  },
  {
    path: 'blog/detail/:id',
    component: BlogItemDetailComponent,
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
    NavBarComponent,
    BlogItemComponent,
    BlogItemTextComponent,
    BlogItemImageComponent,
    BlogItemDetailComponent,
    BlogComponent,
    FilterPipe,
    SearchBarComponent,
    BlogHomeComponent,
    TextFormatDirective
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]


})
export class AppModule {
}





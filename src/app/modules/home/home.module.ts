import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { JokesComponent } from './pages/jokes/jokes.component';
import { PuzzleComponent } from './pages/puzzle/puzzle.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HomeComponent, JokesComponent, PuzzleComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}

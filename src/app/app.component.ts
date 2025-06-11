import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { BaseCardComponent } from './components/cards/base-card/base-card/base-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    IonicModule,
    BaseCardComponent
],
  templateUrl: './app.component.html',
})
export class AppComponent {}
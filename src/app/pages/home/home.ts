import { Component } from '@angular/core';
import { CardBase } from '../../shared/components/card-base/card-base';

@Component({
  selector: 'app-home',
  imports: [CardBase],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}

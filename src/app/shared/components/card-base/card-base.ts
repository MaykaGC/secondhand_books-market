import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-base',
  imports: [],
  templateUrl: './card-base.html',
  styleUrl: './card-base.scss',
})
export class CardBase {


    @Input() imgUrl: string = '';
}

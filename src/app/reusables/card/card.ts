import { CommonModule } from '@angular/common';
import { Component, input, Input, SimpleChange, SimpleChanges } from '@angular/core';
import { House } from '../../model/house';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  imports: [CommonModule, RouterLink],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {
  @Input() property?: House;
  @Input() variant: 'elevated' | 'outline' = 'elevated';
  @Input() clickable = false; // makes the whole card keyboard-focusable

  @Input() name = 'arjun';

  get hostClasses(): string {
    const base = 'rounded-2xl overflow-hidden transition-transform';
    const elev = this.variant === 'elevated' ? 'shadow-lg' : 'border';
    const clickable = this.clickable
      ? 'cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2'
      : '';
    return `${base} ${elev} ${clickable}`;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['name']) {
      console.log('Old:', changes['name'].previousValue);
      console.log('New:', changes['name'].currentValue);
      console.log('First change?', changes['name'].firstChange);
    }
  }
}

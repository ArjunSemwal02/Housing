import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { House } from '../../model/house';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {
  @Input() property?: House;
  @Input() variant: 'elevated' | 'outline' = 'elevated';
  @Input() clickable = false; // makes the whole card keyboard-focusable

  get hostClasses(): string {
    const base = 'rounded-2xl overflow-hidden transition-transform';
    const elev = this.variant === 'elevated' ? 'shadow-lg' : 'border';
    const clickable = this.clickable
      ? 'cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2'
      : '';
    return `${base} ${elev} ${clickable}`;
  }
}

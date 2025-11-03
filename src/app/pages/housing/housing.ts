import { Component } from '@angular/core';
import { Card } from '../../reusables/card/card';
import { House } from '../../model/house';

@Component({
  selector: 'app-housing',
  imports: [Card],
  templateUrl: './housing.html',
  styleUrl: './housing.scss',
})
export class Housing {
  properties: House[] = [
    {
      title: 'Modern Apartment in Mumbai',
      price: '₹1.2 Cr',
      location: 'Bandra West, Mumbai',
      image: 'https://source.unsplash.com/400x300/?apartment',
    },
    {
      title: 'Luxury Villa in Goa',
      price: '₹3.8 Cr',
      location: 'Anjuna Beach, Goa',
      image: 'https://source.unsplash.com/400x300/?villa',
    },
    {
      title: 'Cozy Studio in Delhi',
      price: '₹45 Lakh',
      location: 'Hauz Khas, Delhi',
      image: 'https://source.unsplash.com/400x300/?studio',
    },
    {
      title: 'Family Home in Pune',
      price: '₹85 Lakh',
      location: 'Kothrud, Pune',
      image: 'https://source.unsplash.com/400x300/?house',
    },
  ];
}

import { Component, ViewChild } from '@angular/core';
import { Card } from '../../reusables/card/card';
import { House } from '../../model/house';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-housing',
  imports: [Card, CommonModule, MatPaginator],
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
    {
      title: 'Beachfront Apartment in Chennai',
      price: '₹1.5 Cr',
      location: 'Besant Nagar, Chennai',
      image: 'https://source.unsplash.com/400x300/?beach-house',
    },
    {
      title: 'Penthouse in Bangalore',
      price: '₹2.6 Cr',
      location: 'Indiranagar, Bangalore',
      image: 'https://source.unsplash.com/400x300/?penthouse',
    },
    {
      title: 'Luxury Bungalow in Jaipur',
      price: '₹1.8 Cr',
      location: 'C-Scheme, Jaipur',
      image: 'https://source.unsplash.com/400x300/?bungalow',
    },
    {
      title: 'Farmhouse near Hyderabad',
      price: '₹2.1 Cr',
      location: 'Shamshabad, Hyderabad',
      image: 'https://source.unsplash.com/400x300/?farmhouse',
    },
    {
      title: 'Compact Flat in Ahmedabad',
      price: '₹60 Lakh',
      location: 'Satellite, Ahmedabad',
      image: 'https://source.unsplash.com/400x300/?flat',
    },
    {
      title: 'Mountain View Cottage in Manali',
      price: '₹1.3 Cr',
      location: 'Old Manali, Himachal Pradesh',
      image: 'https://source.unsplash.com/400x300/?cottage',
    },
    {
      title: 'Riverfront Villa in Kochi',
      price: '₹2.9 Cr',
      location: 'Marine Drive, Kochi',
      image: 'https://source.unsplash.com/400x300/?river-villa',
    },
    {
      title: 'Luxury Condo in Kolkata',
      price: '₹1.7 Cr',
      location: 'Salt Lake, Kolkata',
      image: 'https://source.unsplash.com/400x300/?condo',
    },
  ];

  pagedProperties: House[] = this.properties;
  pageSize = 6;
  currentPage = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.loadPage();
  }

  loadPage() {
    const startIndex = this.currentPage * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.pagedProperties = this.properties.slice(startIndex, endIndex);
  }

  onPageChange(event: PageEvent) {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadPage();
  }
}

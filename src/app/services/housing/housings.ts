import { Injectable } from '@angular/core';
import { House } from '../../model/house';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Housings {
  properties: House[] = [
    {
      id: 1,
      title: 'Modern Apartment in Mumbai',
      price: '₹1.2 Cr',
      location: 'Bandra West, Mumbai',
      image: 'https://source.unsplash.com/400x300/?apartment',
    },
    {
      id: 2,
      title: 'Luxury Villa in Goa',
      price: '₹3.8 Cr',
      location: 'Anjuna Beach, Goa',
      image: 'https://source.unsplash.com/400x300/?villa',
    },
    {
      id: 3,
      title: 'Cozy Studio in Delhi',
      price: '₹45 Lakh',
      location: 'Hauz Khas, Delhi',
      image: 'https://source.unsplash.com/400x300/?studio',
    },
    {
      id: 4,
      title: 'Family Home in Pune',
      price: '₹85 Lakh',
      location: 'Kothrud, Pune',
      image: 'https://source.unsplash.com/400x300/?house',
    },
    {
      id: 5,
      title: 'Beachfront Apartment in Chennai',
      price: '₹1.5 Cr',
      location: 'Besant Nagar, Chennai',
      image: 'https://source.unsplash.com/400x300/?beach-house',
    },
    {
      id: 6,
      title: 'Penthouse in Bangalore',
      price: '₹2.6 Cr',
      location: 'Indiranagar, Bangalore',
      image: 'https://source.unsplash.com/400x300/?penthouse',
    },
    {
      id: 7,
      title: 'Luxury Bungalow in Jaipur',
      price: '₹1.8 Cr',
      location: 'C-Scheme, Jaipur',
      image: 'https://source.unsplash.com/400x300/?bungalow',
    },
    {
      id: 8,
      title: 'Farmhouse near Hyderabad',
      price: '₹2.1 Cr',
      location: 'Shamshabad, Hyderabad',
      image: 'https://source.unsplash.com/400x300/?farmhouse',
    },
    {
      id: 9,
      title: 'Compact Flat in Ahmedabad',
      price: '₹60 Lakh',
      location: 'Satellite, Ahmedabad',
      image: 'https://source.unsplash.com/400x300/?flat',
    },
    {
      id: 10,
      title: 'Mountain View Cottage in Manali',
      price: '₹1.3 Cr',
      location: 'Old Manali, Himachal Pradesh',
      image: 'https://source.unsplash.com/400x300/?cottage',
    },
    {
      id: 11,
      title: 'Riverfront Villa in Kochi',
      price: '₹2.9 Cr',
      location: 'Marine Drive, Kochi',
      image: 'https://source.unsplash.com/400x300/?river-villa',
    },
    {
      id: 12,
      title: 'Luxury Condo in Kolkata',
      price: '₹1.7 Cr',
      location: 'Salt Lake, Kolkata',
      image: 'https://source.unsplash.com/400x300/?condo',
    },
    {
      id: 13,
      title: 'Lakeview Apartment in Udaipur',
      price: '₹1.1 Cr',
      location: 'Pichola, Udaipur',
      image: 'https://source.unsplash.com/400x300/?lake-house',
    },
    {
      id: 14,
      title: 'Modern Duplex in Surat',
      price: '₹95 Lakh',
      location: 'Vesu, Surat',
      image: 'https://source.unsplash.com/400x300/?duplex',
    },
    {
      id: 15,
      title: 'Greenfield Villa in Chandigarh',
      price: '₹2.3 Cr',
      location: 'Sector 9, Chandigarh',
      image: 'https://source.unsplash.com/400x300/?green-villa',
    },
    {
      id: 16,
      title: 'Luxury Mansion in Gurugram',
      price: '₹4.2 Cr',
      location: 'DLF Phase 2, Gurugram',
      image: 'https://source.unsplash.com/400x300/?mansion',
    },
    {
      id: 17,
      title: 'Eco Home in Dehradun',
      price: '₹1.4 Cr',
      location: 'Rajpur Road, Dehradun',
      image: 'https://source.unsplash.com/400x300/?eco-house',
    },
    {
      id: 18,
      title: 'City View Apartment in Nagpur',
      price: '₹78 Lakh',
      location: 'Dharampeth, Nagpur',
      image: 'https://source.unsplash.com/400x300/?city-apartment',
    },
    {
      id: 19,
      title: 'Seaside Cottage in Vizag',
      price: '₹1.9 Cr',
      location: 'RK Beach, Visakhapatnam',
      image: 'https://source.unsplash.com/400x300/?seaside-house',
    },
    {
      id: 20,
      title: 'Luxury Penthouse in Lucknow',
      price: '₹2.7 Cr',
      location: 'Gomti Nagar, Lucknow',
      image: 'https://source.unsplash.com/400x300/?penthouse,city',
    },
  ];

  private housingSubject = new BehaviorSubject<House[]>(this.properties);
  housings$ = this.housingSubject.asObservable();

  updateHousingData(value: House[]) {
    this.housingSubject.next(value);
  }
}

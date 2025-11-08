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
      image: '/propertiesImgs/abby-rurenko-uOYak90r4L0-unsplash.jpg',
    },
    {
      id: 2,
      title: 'Luxury Villa in Goa',
      price: '₹3.8 Cr',
      location: 'Anjuna Beach, Goa',
      image: '/propertiesImgs/amir-hosseini-3cl6impBd_8-unsplash.jpg',
    },
    {
      id: 3,
      title: 'Cozy Studio in Delhi',
      price: '₹45 Lakh',
      location: 'Hauz Khas, Delhi',
      image: '/propertiesImgs/bailey-anselme-Bkp3gLygyeA-unsplash.jpg',
    },
    {
      id: 4,
      title: 'Family Home in Pune',
      price: '₹85 Lakh',
      location: 'Kothrud, Pune',
      image: '/propertiesImgs/brian-babb-XbwHrt87mQ0-unsplash.jpg',
    },
    {
      id: 5,
      title: 'Beachfront Apartment in Chennai',
      price: '₹1.5 Cr',
      location: 'Besant Nagar, Chennai',
      image: '/propertiesImgs/frames-for-your-heart-2d4lAQAlbDA-unsplash.jpg',
    },
    {
      id: 6,
      title: 'Penthouse in Bangalore',
      price: '₹2.6 Cr',
      location: 'Indiranagar, Bangalore',
      image: '/propertiesImgs/frames-for-your-heart-mR1CIDduGLc-unsplash.jpg',
    },
    {
      id: 7,
      title: 'Luxury Bungalow in Jaipur',
      price: '₹1.8 Cr',
      location: 'C-Scheme, Jaipur',
      image: '/propertiesImgs/jamie-whiffen-yXBeuNhmbNY-unsplash.jpg',
    },
    {
      id: 8,
      title: 'Farmhouse near Hyderabad',
      price: '₹2.1 Cr',
      location: 'Shamshabad, Hyderabad',
      image: '/propertiesImgs/johnson-U6Q6zVDgmSs-unsplash.jpg',
    },
    {
      id: 9,
      title: 'Compact Flat in Ahmedabad',
      price: '₹60 Lakh',
      location: 'Satellite, Ahmedabad',
      image: '/propertiesImgs/luke-stackpoole-eWqOgJ-lfiI-unsplash.jpg',
    },
    {
      id: 10,
      title: 'Mountain View Cottage in Manali',
      price: '₹1.3 Cr',
      location: 'Old Manali, Himachal Pradesh',
      image: '/propertiesImgs/paul-menz-jh_KHWamObU-unsplash.jpg',
    },
    {
      id: 11,
      title: 'Riverfront Villa in Kochi',
      price: '₹2.9 Cr',
      location: 'Marine Drive, Kochi',
      image: 'public/propertiesImgs/phil-hearing-IYfp2Ixe9nM-unsplash.jpg',
    },
    {
      id: 12,
      title: 'Luxury Condo in Kolkata',
      price: '₹1.7 Cr',
      location: 'Salt Lake, Kolkata',
      image: '/propertiesImgs/pixasquare-4ojhpgKpS68-unsplash.jpg',
    },
    {
      id: 13,
      title: 'Lakeview Apartment in Udaipur',
      price: '₹1.1 Cr',
      location: 'Pichola, Udaipur',
      image: '/propertiesImgs/redd-francisco-sejLyCD2UQE-unsplash.jpg',
    },
    {
      id: 14,
      title: 'Modern Duplex in Surat',
      price: '₹95 Lakh',
      location: 'Vesu, Surat',
      image: '/propertiesImgs/ronnie-george-9gGvNWBeOq4-unsplash.jpg',
    },
    {
      id: 15,
      title: 'Greenfield Villa in Chandigarh',
      price: '₹2.3 Cr',
      location: 'Sector 9, Chandigarh',
      image: '/propertiesImgs/scott-webb-1ddol8rgUH8-unsplash.jpg',
    },
    {
      id: 16,
      title: 'Luxury Mansion in Gurugram',
      price: '₹4.2 Cr',
      location: 'DLF Phase 2, Gurugram',
      image: '/propertiesImgs/sieuwert-otterloo-aren8nutd1Q-unsplash.jpg',
    },
    {
      id: 17,
      title: 'Eco Home in Dehradun',
      price: '₹1.4 Cr',
      location: 'Rajpur Road, Dehradun',
      image: '/propertiesImgs/todd-kent-178j8tJrNlc-unsplash.jpg',
    },
    {
      id: 18,
      title: 'City View Apartment in Nagpur',
      price: '₹78 Lakh',
      location: 'Dharampeth, Nagpur',
      image: '/propertiesImgs/victor-EvczjigoKzk-unsplash.jpg',
    },
    {
      id: 19,
      title: 'Seaside Cottage in Vizag',
      price: '₹1.9 Cr',
      location: 'RK Beach, Visakhapatnam',
      image: '/propertiesImgs/vu-anh-TiVPTYCG_3E-unsplash.jpg',
    },
    {
      id: 20,
      title: 'Luxury Penthouse in Lucknow',
      price: '₹2.7 Cr',
      location: 'Gomti Nagar, Lucknow',
      image: '/propertiesImgs/webaliser-_TPTXZd9mOo-unsplash.jpg',
    },
  ];

  private housingSubject = new BehaviorSubject<House[]>(this.properties);
  housings$ = this.housingSubject.asObservable();

  updateHousingData(value: House[]) {
    this.housingSubject.next(value);
  }
}

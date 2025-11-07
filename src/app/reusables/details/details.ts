import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { House } from '../../model/house';
import { Housings } from '../../services/housing/housings';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.html',
  styleUrl: './details.scss',
})
export class Details implements OnInit {
  constructor(private route: ActivatedRoute, private houseService: Housings) {}

  propertyId!: number;

  property!: House;

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.propertyId = Number(params.get('id')) ?? 0;
    });

    this.houseService.housings$.subscribe((value: House[]) => {
      this.property = value.find((data) => data.id === this.propertyId)!;
    });
  }
}

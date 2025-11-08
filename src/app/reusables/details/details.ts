import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { House } from '../../model/house';
import { Housings } from '../../services/housing/housings';
import { RegisteredService } from '../../services/registered/registered';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.html',
  styleUrl: './details.scss',
})
export class Details implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private houseService: Housings,
    private registeredPropsService: RegisteredService
  ) {}

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

  onRegisterProperty() {
    let registerProp = new House();
    this.houseService.housings$.subscribe((value: House[]) => {
      registerProp = value.find((data) => data.id === this.propertyId)!;
    });

    this.registeredPropsService.updateRegisteredProps(registerProp);
    this.router.navigate(['/registered']);
  }
}

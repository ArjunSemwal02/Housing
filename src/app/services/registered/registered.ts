import { Injectable } from '@angular/core';
import { House } from '../../model/house';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegisteredService {
  allRegisteredProps: House[] = [];
  newRegisteredProp!: House;

  newRegisteredPropSubject = new BehaviorSubject<House>(this.newRegisteredProp);
  registeredProps$ = this.newRegisteredPropSubject.asObservable();

  allRegisteredPropSubject = new BehaviorSubject<House[]>(this.allRegisteredProps);
  allRegisteredProps$ = this.allRegisteredPropSubject.asObservable();

  updateRegisteredProps(value: House) {
    this.newRegisteredPropSubject.next(value);
    // this.allRegisteredProps.push(this.newRegisteredPropSubject.value);
    console.log(this.newRegisteredPropSubject.value);
    this.allRegisteredProps.push(this.newRegisteredPropSubject.value);
  }

  getAllProps() {
    return this.allRegisteredProps$;
  }
}

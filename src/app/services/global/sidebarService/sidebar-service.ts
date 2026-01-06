import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  sidebarSubject = new BehaviorSubject<boolean>(true);
  sidebarOpen$ = this.sidebarSubject.asObservable();

  private ignoreElements: HTMLElement[] = [];

  updateSidebarState(value: boolean) {
    this.sidebarSubject.next(value);
  }

  registerIgnoreElement(element: HTMLElement) {
    if (!this.ignoreElements.includes(element)) {
      this.ignoreElements.push(element);
    }
  }

  unregisterIgnoreElement(element: HTMLElement) {
    this.ignoreElements = this.ignoreElements.filter((el) => el !== element);
  }

  getIgnoreElements() {
    return this.ignoreElements;
  }

  setIgnoreElements(elements: HTMLElement[]) {
    this.ignoreElements = elements;
  }
}

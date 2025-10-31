import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Housing } from './housing';

describe('Housing', () => {
  let component: Housing;
  let fixture: ComponentFixture<Housing>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Housing]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Housing);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

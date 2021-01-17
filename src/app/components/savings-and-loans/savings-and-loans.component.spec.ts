import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingsAndLoansComponent } from './savings-and-loans.component';

describe('SavingsAndLoansComponent', () => {
  let component: SavingsAndLoansComponent;
  let fixture: ComponentFixture<SavingsAndLoansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavingsAndLoansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingsAndLoansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

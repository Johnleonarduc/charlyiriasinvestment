import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForexInvestmentComponent } from './forex-investment.component';

describe('ForexInvestmentComponent', () => {
  let component: ForexInvestmentComponent;
  let fixture: ComponentFixture<ForexInvestmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForexInvestmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForexInvestmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

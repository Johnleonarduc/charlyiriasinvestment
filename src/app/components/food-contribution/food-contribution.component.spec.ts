import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodContributionComponent } from './food-contribution.component';

describe('FoodContributionComponent', () => {
  let component: FoodContributionComponent;
  let fixture: ComponentFixture<FoodContributionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodContributionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodContributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

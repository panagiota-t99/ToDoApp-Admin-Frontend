import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserStatisticsExpandedComponent } from './user-statistics-expanded.component';

describe('UserStatisticsExpandedComponent', () => {
  let component: UserStatisticsExpandedComponent;
  let fixture: ComponentFixture<UserStatisticsExpandedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserStatisticsExpandedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserStatisticsExpandedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

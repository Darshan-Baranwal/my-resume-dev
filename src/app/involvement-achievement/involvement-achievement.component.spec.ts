import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvolvementAchievementComponent } from './involvement-achievement.component';

describe('InvolvementAchievementComponent', () => {
  let component: InvolvementAchievementComponent;
  let fixture: ComponentFixture<InvolvementAchievementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvolvementAchievementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvolvementAchievementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

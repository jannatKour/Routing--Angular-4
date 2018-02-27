import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItTeamComponent } from './it-team.component';

describe('ItTeamComponent', () => {
  let component: ItTeamComponent;
  let fixture: ComponentFixture<ItTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

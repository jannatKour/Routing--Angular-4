import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BdTeamComponent } from './bd-team.component';

describe('BdTeamComponent', () => {
  let component: BdTeamComponent;
  let fixture: ComponentFixture<BdTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BdTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BdTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

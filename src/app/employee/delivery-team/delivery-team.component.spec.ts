import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryTeamComponent } from './delivery-team.component';

describe('DeliveryTeamComponent', () => {
  let component: DeliveryTeamComponent;
  let fixture: ComponentFixture<DeliveryTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

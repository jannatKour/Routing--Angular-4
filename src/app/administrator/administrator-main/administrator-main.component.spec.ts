import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministratorMainComponent } from './administrator-main.component';

describe('AdministratorMainComponent', () => {
  let component: AdministratorMainComponent;
  let fixture: ComponentFixture<AdministratorMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministratorMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministratorMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

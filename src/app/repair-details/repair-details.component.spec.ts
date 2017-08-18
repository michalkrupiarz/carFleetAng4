import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepairDetailsComponent } from './repair-details.component';

describe('RepairDetailsComponent', () => {
  let component: RepairDetailsComponent;
  let fixture: ComponentFixture<RepairDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepairDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepairDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

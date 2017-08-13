import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLendsComponent } from './add-lends.component';

describe('AddLendsComponent', () => {
  let component: AddLendsComponent;
  let fixture: ComponentFixture<AddLendsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLendsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

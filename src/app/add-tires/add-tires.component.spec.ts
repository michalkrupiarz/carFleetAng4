import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTiresComponent } from './add-tires.component';

describe('AddTiresComponent', () => {
  let component: AddTiresComponent;
  let fixture: ComponentFixture<AddTiresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTiresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTiresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

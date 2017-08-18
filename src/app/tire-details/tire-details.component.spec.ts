import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TireDetailsComponent } from './tire-details.component';

describe('TireDetailsComponent', () => {
  let component: TireDetailsComponent;
  let fixture: ComponentFixture<TireDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TireDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TireDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TireListComponent } from './tire-list.component';

describe('TireListComponent', () => {
  let component: TireListComponent;
  let fixture: ComponentFixture<TireListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TireListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TireListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

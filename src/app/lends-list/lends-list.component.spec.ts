import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LendsListComponent } from './lends-list.component';

describe('LendsListComponent', () => {
  let component: LendsListComponent;
  let fixture: ComponentFixture<LendsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LendsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LendsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

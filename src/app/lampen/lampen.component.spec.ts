import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LampenComponent } from './lampen.component';

describe('LampenComponent', () => {
  let component: LampenComponent;
  let fixture: ComponentFixture<LampenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LampenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LampenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

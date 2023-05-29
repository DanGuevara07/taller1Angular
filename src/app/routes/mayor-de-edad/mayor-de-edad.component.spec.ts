import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MayorDeEdadComponent } from './mayor-de-edad.component';

describe('MayorDeEdadComponent', () => {
  let component: MayorDeEdadComponent;
  let fixture: ComponentFixture<MayorDeEdadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MayorDeEdadComponent]
    });
    fixture = TestBed.createComponent(MayorDeEdadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

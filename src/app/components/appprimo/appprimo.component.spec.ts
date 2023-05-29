import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppprimoComponent } from './appprimo.component';

describe('AppprimoComponent', () => {
  let component: AppprimoComponent;
  let fixture: ComponentFixture<AppprimoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppprimoComponent]
    });
    fixture = TestBed.createComponent(AppprimoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

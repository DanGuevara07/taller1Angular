import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Main1Component } from './main1.component';

describe('Main1Component', () => {
  let component: Main1Component;
  let fixture: ComponentFixture<Main1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Main1Component]
    });
    fixture = TestBed.createComponent(Main1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

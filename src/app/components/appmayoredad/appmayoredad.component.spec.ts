import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppmayoredadComponent } from './appmayoredad.component';

describe('AppmayoredadComponent', () => {
  let component: AppmayoredadComponent;
  let fixture: ComponentFixture<AppmayoredadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppmayoredadComponent]
    });
    fixture = TestBed.createComponent(AppmayoredadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

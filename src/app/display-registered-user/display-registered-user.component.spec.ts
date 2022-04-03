import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayRegisteredUserComponent } from './display-registered-user.component';

describe('DisplayRegisteredUserComponent', () => {
  let component: DisplayRegisteredUserComponent;
  let fixture: ComponentFixture<DisplayRegisteredUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayRegisteredUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayRegisteredUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

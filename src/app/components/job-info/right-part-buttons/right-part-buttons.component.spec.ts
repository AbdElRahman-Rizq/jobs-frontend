import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightPartButtonsComponent } from './right-part-buttons.component';

describe('RightPartButtonsComponent', () => {
  let component: RightPartButtonsComponent;
  let fixture: ComponentFixture<RightPartButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RightPartButtonsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RightPartButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

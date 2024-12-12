import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionIDComponent } from './position-id.component';

describe('PositionIDComponent', () => {
  let component: PositionIDComponent;
  let fixture: ComponentFixture<PositionIDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PositionIDComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PositionIDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreJobsComponent } from './more-jobs.component';

describe('MoreJobsComponent', () => {
  let component: MoreJobsComponent;
  let fixture: ComponentFixture<MoreJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoreJobsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoreJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CommonModule } from '@angular/common';
import { JobPosting } from '../../../models/Job-posting';
import { JobsService } from './../../../services/jobs.service';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-more-jobs',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './more-jobs.component.html',
  styleUrl: './more-jobs.component.scss',
})
export class MoreJobsComponent {
  _jobs: JobPosting[] = []

  constructor(private jobsService: JobsService) {

    jobsService.getJobs().subscribe({
      next: (data: JobPosting[]) => {

        this._jobs = this.getRandomObjects(data, 3)
      }
    })
  }


  getRandomObjects(arr: any[], num: number) {
    const shuffled = arr.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  }
}

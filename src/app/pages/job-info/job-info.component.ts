import { JobsService } from './../../services/jobs.service';
import { JobPosting } from './../../models/Job-posting';
import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../components/job-info/header/header.component";
import { LeftPartComponent } from "../../components/job-info/left-part/left-part.component";
import { JobDetailsComponent } from "../../components/job-info/job-details/job-details.component";
import { PositionIDComponent } from "../../components/job-info/position-id/position-id.component";
import { InterestedComponent } from "../../components/job-info/interested/interested.component";
import { RightPartButtonsComponent } from "../../components/job-info/right-part-buttons/right-part-buttons.component";
import { MoreJobsComponent } from "../../components/job-info/more-jobs/more-jobs.component";
import { NavbarComponent } from '../../components/shared/navbar/navbar.component';
import { FooterComponent } from '../../components/shared/footer/footer.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-job-info',
  standalone: true,
  imports: [HeaderComponent, LeftPartComponent, JobDetailsComponent, PositionIDComponent, InterestedComponent, RightPartButtonsComponent, MoreJobsComponent, NavbarComponent, FooterComponent],
  templateUrl: './job-info.component.html',
  styleUrl: './job-info.component.scss'
})
export class JobInfoComponent implements OnInit {

  loading = false;
  job: JobPosting | undefined;

  constructor(private router: Router, private route: ActivatedRoute, private meta: Meta, private titleService: Title, private jobsService: JobsService) {


    const navigationState = this.router.getCurrentNavigation()?.extras.state as JobPosting | undefined

    if (navigationState) {

      this.job = navigationState;
      this.loading = true

    }
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {

      const navigationState = this.router.getCurrentNavigation()?.extras.state as JobPosting | undefined

      if (navigationState) {

        this.job = navigationState;
        this.loading = true
        window.location.reload();

      }

    });

    this.titleService.setTitle(this.job?.jobTitle! + ' - Fair Solutions');

    this.meta.addTags([
      { name: 'description', content: this.job?.jobSummary! },
      { name: 'author', content: 'Fair Solutions' },
      { name: 'keywords', content: this.job?.jobTitle! },
      { name: 'robots', content: 'index, follow' }
    ]);

  }

  findImage(title: string): string {
    return this.jobsService.findImage(title);
  }

}

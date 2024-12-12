import { Routes } from '@angular/router';
import { JobsListComponent } from './pages/jobs-list/jobs-list.component';
import { JobInfoComponent } from './pages/job-info/job-info.component';

export const routes: Routes = [
  {
    path: '',
    component: JobsListComponent,
  },
  {
    path: ':jobId',
    component: JobInfoComponent,
  },
];

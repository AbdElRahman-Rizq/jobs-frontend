import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-job-details',
  standalone: true,
  imports: [],
  templateUrl: './job-details.component.html',
  styleUrl: './job-details.component.scss'
})
export class JobDetailsComponent {

  @Input() location: string = ''
  @Input() jobType: string = ''
  @Input() profession: string = ''
  @Input() salaryFrom: string = ''
  @Input() salaryTo: string = ''
}

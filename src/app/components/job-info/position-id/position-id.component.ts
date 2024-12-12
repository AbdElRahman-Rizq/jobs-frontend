import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-position-id',
  standalone: true,
  imports: [],
  templateUrl: './position-id.component.html',
  styleUrl: './position-id.component.scss'
})
export class PositionIDComponent {
  @Input() jobId: string = ''
}

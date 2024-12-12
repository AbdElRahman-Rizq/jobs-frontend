import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-interested',
  standalone: true,
  imports: [],
  templateUrl: './interested.component.html',
  styleUrl: './interested.component.scss'
})
export class InterestedComponent {

  @Input() tel: string = ''
  @Input() email: string = ''

}

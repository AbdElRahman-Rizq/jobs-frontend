import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-right-part-buttons',
  standalone: true,
  imports: [],
  templateUrl: './right-part-buttons.component.html',
  styleUrl: './right-part-buttons.component.scss'
})
export class RightPartButtonsComponent {

  @Input() apply: string = ''

}

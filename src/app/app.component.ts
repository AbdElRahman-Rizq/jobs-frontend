import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'jobs-frontend';

  constructor(private titleService: Title) {}

  ngOnInit(): void {
    initFlowbite();
    this.titleService.setTitle('fair solutions - ');
  }
}

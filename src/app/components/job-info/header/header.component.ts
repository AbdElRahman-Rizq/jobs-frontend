import { CommonModule } from '@angular/common';
import { Component, Input, input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  features: any[] = [];
  ngOnInit(): void {
    this.features = [
      {
        id: 0,
        icon: 'https://jobs.dahmen-personal.de/Dahmen_Stellenanzeige/images/icon-1.svg',
        smallText: 'Ort',
        text: this.location,
      },
      {
        id: 1,
        icon: 'https://jobs.dahmen-personal.de/Dahmen_Stellenanzeige/images/icon-2.svg',
        smallText: 'Anstellungsart',
        text: this.jobType,
      },
      {
        id: 2,
        icon: 'https://jobs.dahmen-personal.de/Dahmen_Stellenanzeige/images/icon-3.svg',
        smallText: 'Vertragsart',
        text: 'Unbefristet',
      },
      {
        id: 3,
        icon: 'https://jobs.dahmen-personal.de/Dahmen_Stellenanzeige/images/icon-4.svg',
        smallText: 'Gehalt',
        text: `${this.salaryFrom} - ${this.salaryTo} €`,
      },
      {
        id: 4,
        icon: 'https://jobs.dahmen-personal.de/Image/LayoutVorlageBenefit/99edcba0-5476-4708-8e82-4dc9d2b691c5?240821020143750',
        smallText: 'Benefit',
        // text: `${this.jobBenefits}`,
        text: 'Firmenevents',
      },
      {
        id: 5,
        icon: 'https://jobs.dahmen-personal.de/Image/LayoutVorlageBenefit/d6ac875e-bfff-4a44-82e8-f9d61bac1c5e?240821020057156',
        smallText: 'Benefit',
        text: 'Familienfreundlich',
      },

      {
        id: 6,
        icon: 'https://jobs.dahmen-personal.de/Image/LayoutVorlageBenefit/e1d36b1e-d3e9-45bd-b6f9-b71231c7e02c?240821020037336',
        smallText: 'Benefit',
        text: 'Krisensicherer Arbeitsplatz',
      },
    ];
  }
  @Input() title: string = '';
  @Input() location: string = '';
  @Input() salaryFrom: string = '';
  @Input() salaryTo: string = '';
  @Input() jobType: string = '';
  @Input() image: string = '';
  @Input() jobBenefits: string = '';
}

// "jobBenefits": "<span style=\"font-size:12pt\"><span style=\"line-height:normal\"><span style=\"font-family:Arial,sans-serif\"><b><span style=\"font-size:18.0pt\"><span >Unsere Leistungen:</span></span></b></span></span></span> <div style=\"margin:0cm 0cm 8pt\"> </div> <ul> <li style=\"margin:0cm 0cm 8pt\"><span style=\"font-size:12pt\"><span style=\"line-height:normal\"><span style=\"tab-stops:list 36.0pt\"><span style=\"font-family:Arial,sans-serif\"><span >Pers\u00f6nliche Betreuung</span></span></span></span></span></li> <li style=\"margin:0cm 0cm 8pt\"><span style=\"font-size:12pt\"><span style=\"line-height:normal\"><span style=\"tab-stops:list 36.0pt\"><span style=\"font-family:Arial,sans-serif\"><span >H\u00f6chste Anspr\u00fcche in der Arbeitssicherheit</span></span></span></span></span></li> <li style=\"margin:0cm 0cm 8pt\"><span style=\"font-size:12pt\"><span style=\"line-height:normal\"><span style=\"tab-stops:list 36.0pt\"><span style=\"font-family:Arial,sans-serif\"><span >F\u00f6rderung durch Schulungen und Weiterbildungen</span></span></span></span></span></li> <li style=\"margin:0cm 0cm 8pt\"><span style=\"font-size:12pt\"><span style=\"line-height:normal\"><span style=\"tab-stops:list 36.0pt\"><span style=\"font-family:Arial,sans-serif\"><span >Unbefristeter Arbeitsvertrag</span></span></span></span></span></li> <li style=\"margin:0cm 0cm 8pt\"><span style=\"font-size:12pt\"><span style=\"line-height:normal\"><span style=\"tab-stops:list 36.0pt\"><span style=\"font-family:Arial,sans-serif\"><span >\u00dcbertarifliche Verg\u00fctung</span></span></span></span></span></li> <li style=\"margin:0cm 0cm 8pt\"><span style=\"font-size:12pt\"><span style=\"line-height:normal\"><span style=\"tab-stops:list 36.0pt\"><span style=\"font-family:Arial,sans-serif\"><span >Verm\u00f6genswirksame Leistungen ab dem ersten Tag</span></span></span></span></span></li> </ul>",

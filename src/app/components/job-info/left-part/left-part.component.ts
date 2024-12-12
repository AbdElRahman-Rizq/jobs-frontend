import { Component, ElementRef, Input, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-left-part',
  standalone: true,
  imports: [],
  templateUrl: './left-part.component.html',
  styleUrl: './left-part.component.scss'
})
export class LeftPartComponent {
  @ViewChildren('listDiv') allDivs!: QueryList<ElementRef>;
  
  @Input() responsibility: string = ''
  @Input() apply: string = ''
  @Input() requirements: string = ''
  @Input() jobSummary: string = ''
  @Input() benefits: string = ''

  offers = [
    "Attraktives Gehaltspaket und moderne Arbeitsumgebung.",
    "Regelmäßige Team-Events zur Stärkung des Zusammenhalts.",
    "Unterstützung bei deiner fachlichen und persönlichen Weiterentwicklung.",
    "Flache Hierarchien und kurze Entscheidungswege für eine effiziente Zusammenarbeit.",
    "Vielfältige und spannende Aufgaben, die deine kreativen Ideen fördern.",
    "Ein sicherer Arbeitsplatz in einem offenen und kollegialen Umfeld."
  ]

  tasks = [
    "Du bist das Gesicht und die Stimme für Kunden, Interessenten und Makler, sowohl am Telefon als auch per E-Mail",
    "Mit deiner beeindruckenden Sales-Erfahrung trägst du maßgeblich zum Umsatzwachstum bei",
    "Du meisterst eingehende Kundenanliegen souverän und mit Leichtigkeit",
    "Die Bearbeitung fachspezifischer Aufträge und Kundenanfragen liegt ebenfalls in deinem Aufgabenbereich",
    "Auch in herausfordernden Situationen behältst du die Kontrolle und findest positive Lösungen für Kundenanliegen",
    "Du gewährleistest die Einhaltung der vereinbarten Serviceziele, Unternehmensgrundsätze und Servicekriterien"
  ]

  profilePoints = [
    "Abgeschlossene Ausbildung zum Kaufmann für Versicherungen und Finanzen oder vergleichbare Qualifikation",
    "Fundierte Erfahrung im Telefonvertrieb, idealerweise im Versicherungsbereich",
    "Souveränes Auftreten und professionelle Kundenbetreuung am Telefon",
    "Vertrautheit mit betrieblichen Abläufen in der Versicherungsbranche",
    "Hands-On-Mentalität, Zuverlässigkeit und Selbstständigkeit",
    "Offenes, freundliches Auftreten und serviceorientiertes Denken und Handeln"
  ]
  
  ngAfterViewInit() {
    this.allDivs.forEach((div: ElementRef, index: number) => {
      const ulElement = div.nativeElement.querySelector('ul');
      const liElements = div.nativeElement.querySelectorAll('li');
      const titleElement = div.nativeElement.querySelector('b');
  
      if (ulElement) {
        ulElement.classList.add('list-disc', 'pl-[20px]', 'm-0');
      }
  
      if (liElements) {
        liElements.forEach((li:HTMLElement) => {
          li.classList.add('mb-[12px]');

          if(index > 0) {
            li.classList.add('marker:text-dark-red');
          }
        });
      }
  
      if(titleElement) {
        if(index > 0) {
          titleElement.classList.add('text-dark-red', 'border-dark-red');
        }

        titleElement.classList.add('inline-block', 'border-b-4', 'border-dotted', 'uppercase', 'font-semibold', 'text-[1.32rem]', 'mb-5');
      }
    });
  }
}

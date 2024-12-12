import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  footerLinks = [
    {
      label: 'Startseite',
      url: 'https://www.fairsolutions-aachen.de/',
    },
    {
      label: 'Jobbörse',
      url: '',
    },
    {
      label: 'Branchen',
      url: 'https://www.fairsolutions-aachen.de/branchen/',
    },
    {
      label: 'Referenzen',
      url: 'https://www.fairsolutions-aachen.de/referenzen/',
    },
  ];

  companyLinks = [
    {
      label: 'Service',
      url: 'https://www.fairsolutions-aachen.de/service/',
    },
    {
      label: 'Kontakt',
      url: 'https://www.fairsolutions-aachen.de/kontakt/',
    },
    {
      label: 'Über uns',
      url: 'https://www.fairsolutions-aachen.de/ueber-uns/',
    },
    {
      label: 'Unternehmen',
      url: 'https://www.fairsolutions-aachen.de/unternehmen/',
    },
  ];

  legalLinks = [
    {
      label: 'Datenschutzerklärung',
      url: 'https://www.fairsolutions-aachen.de/datenschutzerklaerung/',
    },
    {
      label: 'Impressum',
      url: 'https://www.fairsolutions-aachen.de/impressum/',
    },
    {
      label: 'FAQ',
      url: 'https://www.fairsolutions-aachen.de/faq/',
    },
  ];

  contacts = [
    {
      label: 'fair solutions GmbH\nHeider-Hof-Weg 23c\n52080 Aachen',
      url: '#',
    },
    {
      label: 'Tel. 0241 41259600',
      url: 'tel:0241%20412596%2000',
    },
    {
      label: 'Fax: 0241 41259642',
      url: '',
    },
    {
      label: 'E-Mail: info@fairsolutions-aachen.de',
      url: 'mailto:info@fairsolutions-aachen.de',
    },
  ];

  socialMedia = [
    {
      icon: 'fa-facebook',
      url: 'https://www.facebook.com/fairsolutionsGmbH',
    },
    {
      icon: 'fa-instagram',
      url: 'https://www.instagram.com/fairsolutionsGmbH',
    },
    {
      icon: 'fa-linkedin',
      url: '',
    },
  ];
}

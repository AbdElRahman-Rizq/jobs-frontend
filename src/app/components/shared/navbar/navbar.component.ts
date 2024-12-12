import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  links = [
    {
      url: 'https://www.fairsolutions-aachen.de/service/',
      label: 'Service',
      dropdown: false,
      dropdownOptions: [],
    },
    {
      url: 'https://www.fairsolutions-aachen.de/branchen/',
      label: 'Branchen',
      dropdown: false,
      dropdownOptions: [],
    },
    {
      url: 'https://www.fairsolutions-aachen.de/jobboerse/',
      label: 'Jobbörse',
      dropdown: false,
      dropdownOptions: [],
    },
    {
      url: '',
      label: 'Jobbörse 2',
      dropdown: false,
      dropdownOptions: [],
    },
    {
      url: 'https://www.fairsolutions-aachen.de/ueber-uns/',
      label: 'Über Uns',
      dropdown: true,
      dropdownOptions: [{
        icon: '/assets/life-ring.svg',
        label: 'FAQ',
        url: 'https://www.fairsolutions-aachen.de/faq/'
      }],
    },
    {
      url: 'https://www.fairsolutions-aachen.de/unternehmen/',
      label: 'Unternehmen',
      dropdown: false,
      dropdownOptions: [],
    },
    {
      url: 'https://www.fairsolutions-aachen.de/referenzen/',
      label: 'Referenzen',
      dropdown: false,
      dropdownOptions: [],
    },
    {
      url: 'https://www.fairsolutions-aachen.de/kontakt/',
      label: 'Kontakt',
      dropdown: false,
      dropdownOptions: [],
    },
  ];

  showDropdown = () => {
    let dropdown = document.getElementById('dropdownNavbar');
    if (dropdown) {
      dropdown.classList.replace('hidden', 'block');
    }
  };

  hideDropdown = () => {
    let dropdown = document.getElementById('dropdownNavbar');
    if (dropdown) {
      dropdown.classList.replace('block', 'hidden');
    }
  };
}

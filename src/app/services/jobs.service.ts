import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JobPosting } from '../models/Job-posting';

@Injectable({
  providedIn: 'root',
})
export class JobsService {
  // private handwerk: string =
  //   'https://www.fairsolutions-aachen.de/wp-content/uploads/2023/09/metal-craft-2021-08-26-18-11-52-utc.jpg';
  // private produktion: string =
  //   'https://www.fairsolutions-aachen.de/wp-content/uploads/2023/09/engineer-testing-a-robotic-production-simulator-in-2022-03-04-01-46-16-utc.jpg';
  // private machinenbau: string =
  //   'https://www.fairsolutions-aachen.de/wp-content/uploads/2023/09/mechanical-engineer-working-on-machines-2021-08-26-17-32-15-utc.jpg';
  // private lager: string =
  //   'https://www.fairsolutions-aachen.de/wp-content/uploads/2023/09/Lager-Versand.png';
  // private elektrotechnik: string =
  //   'https://www.fairsolutions-aachen.de/wp-content/uploads/2023/09/professional-technician-engineer-working-to-contro-2022-12-16-02-26-29-utc.jpg';
  private it: string = '/images/Facharbeiter.png';

  private kaufmännisch: string =
    'https://ik.imagekit.io/naidimg/uploads/kaufmaÌ_nnisch_qLArtQBQx.png';

  private technische: string =
    'https://www.fairsolutions-aachen.de/wp-content/uploads/2023/09/customer-service-woman-and-speaking-in-call-cente-2023-08-26-08-08-41-utc.jpg';

  private helfer: string =
    '/images/20241120_fairsolutions_Header_allgemein_v3.png';

  private facharbeiter: string = '/images/Facharbeiter.png';

  private meister: string = '/images/Meister.png';

  private techniker: string = '/images/Techniker.png';

  private ingenieur: string = '/images/ingenieur.png';

  private defaultImage: string =
    'https://ik.imagekit.io/naidimg/uploads/20241120_fairsolutions_Header_allgemein_v3.png?updatedAt=1732890090805';

  constructor(private http: HttpClient) {}

  getJobs(): Observable<JobPosting[]> {
    // this for work live
    return this.http.get<JobPosting[]>(`/api/get-jobs`);
    // this api for work local
    // return this.http.get<JobPosting[]>(`http://45.9.191.214:5000/api/get-jobs`);
  }

  private containsSubstring(text: string, substring: string): boolean {
    return text.toLowerCase().includes(substring.toLowerCase());
  }
  // hello world
  // Function to create WordPress post
  findImage(title: string): string {
    let image = this.defaultImage;

    if (this.containsSubstring(title, 'handwerk')) {
      // image = this.handwerk;
    } else if (this.containsSubstring(title, 'prodcuktion')) {
      // image = this.produktion;
    } else if (this.containsSubstring(title, 'machinenbau')) {
      // image = this.machinenbau;
    } else if (this.containsSubstring(title, 'lager')) {
      // image = this.lager;
    } else if (this.containsSubstring(title, 'elektrotechnik')) {
      // image = this.elektrotechnik;
    } else if (this.containsSubstring(title, 'it')) {
      image = this.it;
    } else if (this.containsSubstring(title, 'kaufmännisch')) {
      image = this.kaufmännisch;
    } else if (this.containsSubstring(title, 'technische')) {
      image = this.technische;
    } else if (this.containsSubstring(title, 'helfer')) {
      image = this.helfer;
    } else if (this.containsSubstring(title, 'facharbeiter')) {
      image = this.facharbeiter;
    } else if (this.containsSubstring(title, 'meister')) {
      image = this.meister;
    } else if (this.containsSubstring(title, 'techniker')) {
      image = this.techniker;
    } else if (this.containsSubstring(title, 'ingenieur')) {
      image = this.ingenieur;
    }
    // hello

    return image;
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JobPosting } from '../models/Job-posting';

@Injectable({
  providedIn: 'root',
})
export class JobsService {
  private handwerk: string =
    'https://www.fairsolutions-aachen.de/wp-content/uploads/2023/09/metal-craft-2021-08-26-18-11-52-utc.jpg';
  private produktion: string =
    'https://www.fairsolutions-aachen.de/wp-content/uploads/2023/09/engineer-testing-a-robotic-production-simulator-in-2022-03-04-01-46-16-utc.jpg';
  private machinenbau: string =
    'https://www.fairsolutions-aachen.de/wp-content/uploads/2023/09/mechanical-engineer-working-on-machines-2021-08-26-17-32-15-utc.jpg';
  private lager: string =
    'https://www.fairsolutions-aachen.de/wp-content/uploads/2023/09/Lager-Versand.png';
  private elektrotechnik: string =
    'https://www.fairsolutions-aachen.de/wp-content/uploads/2023/09/professional-technician-engineer-working-to-contro-2022-12-16-02-26-29-utc.jpg';
  private it: string =
    'https://www.fairsolutions-aachen.de/wp-content/uploads/2023/09/programmers-cooperating-at-information-technology-2021-08-28-19-22-29-utc.jpg';
  private kaufmännisch: string =
    'https://ik.imagekit.io/naidimg/uploads/kaufma%CC%88nnisch.png?updatedAt=1732885923676";';
  private technische: string =
    'https://www.fairsolutions-aachen.de/wp-content/uploads/2023/09/customer-service-woman-and-speaking-in-call-cente-2023-08-26-08-08-41-utc.jpg';
  private helfer: string =
    'https://ik.imagekit.io/naidimg/uploads/Helfer.png?updatedAt=1732886439137';
  private facharbeiter: string =
    'https://ik.imagekit.io/naidimg/uploads/Facharbeiter.png?updatedAt=1732886538291';
  private meister: string =
    'https://ik.imagekit.io/naidimg/uploads/Meister.png?updatedAt=1732886620684';
  private techniker: string =
    'https://ik.imagekit.io/naidimg/uploads/Techniker.png?updatedAt=1732886707080';
  private ingenieur: string =
    'https://ik.imagekit.io/naidimg/uploads/ingenieur.png?updatedAt=1732886773052';
  private defaultImage: string =
    'https://ik.imagekit.io/naidimg/uploads/20241120_fairsolutions_Header_allgemein_v3.png?updatedAt=1732890090805';

  constructor(private http: HttpClient) {}

  getJobs(): Observable<JobPosting[]> {
    return this.http.get<JobPosting[]>('/api/get-jobs');
  }

  private containsSubstring(text: string, substring: string): boolean {
    return text.toLowerCase().includes(substring.toLowerCase());
  }

  // Function to create WordPress post
  findImage(title: string): string {
    let image = this.defaultImage;

    if (this.containsSubstring(title, 'handwerk')) {
      image = this.handwerk;
    } else if (this.containsSubstring(title, 'prodcuktion')) {
      image = this.produktion;
    } else if (this.containsSubstring(title, 'machinenbau')) {
      image = this.machinenbau;
    } else if (this.containsSubstring(title, 'lager')) {
      image = this.lager;
    } else if (this.containsSubstring(title, 'elektrotechnik')) {
      image = this.elektrotechnik;
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

    return image;
  }
}

import { JobsService } from './../../services/jobs.service';
import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../components/shared/navbar/navbar.component';
import { FooterComponent } from '../../components/shared/footer/footer.component';
import { JobPosting } from '../../models/Job-posting';
import { RouterModule } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { initFlowbite } from 'flowbite';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-jobs-list',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, RouterModule, CommonModule, FormsModule],
  templateUrl: './jobs-list.component.html',
  styleUrl: './jobs-list.component.scss',
})
export class JobsListComponent implements OnInit {
  loading = true
  jobs: JobPosting[] = [];
  selectedJobs: JobPosting[] = [];
  categories: string[] = [];
  selectedCategory: string = 'All'


  constructor(private jobsService: JobsService, private meta: Meta, private titleService: Title) { }
  ngOnInit(): void {
    initFlowbite();
    this.loading = false
    this.jobsService.getJobs().subscribe({
      next: (data: JobPosting[]) => {
        this.jobs = data
        this.selectedJobs = data

      },
      error: (error) => {
        this.loading = false
      },
      complete: () => {
        this.loading = true

        this.jobs.forEach((job) => {
          this.addJobPostingSchema(job)
          // this.categories.find((category) => category === job.jobCategory) ? null : this.categories.push(job.jobCategory)

        })

        setTimeout(() => {
          initFlowbite();

        }, 900);

      }
    })


    this.titleService.setTitle('Jobs - Fair Solutions');

    this.meta.addTags([
      { name: 'description', content: 'Jobs - Fair Solutions' },
      { name: 'author', content: 'Fair Solutions' },
      { name: 'keywords', content: 'IT, Software, Developer, jobs' },
      { name: 'robots', content: 'index, follow' }
    ]);
  }

  searchJobs(searchTerm: string) {
    this.selectedJobs = this.jobs.filter((job) => job.jobTitle.toLowerCase().includes(searchTerm.toLowerCase()))
  }

  // findJobByCategory(category: string) {

  //   if (category === 'All') {
  //     this.selectedJobs = this.jobs
  //     this.selectedCategory = 'All'
  //   }
  //   else {
  //     this.selectedJobs = this.jobs.filter((job) => job.jobCategory === category)
  //     this.selectedCategory = category
  //   }

  // }


  addJobPostingSchema(job: JobPosting): void {
    const schema = this.convertToGoogleJobPostingSchema(job);
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
  }


  convertToGoogleJobPostingSchema(job: JobPosting) {
    return {
      "@context": "https://schema.org/",
      "@type": "JobPosting",
      "title": job.jobTitle,
      "description": job.jobFulltext,
      "identifier": {
        "@type": "PropertyValue",
        "name": job.contactCompany,
        "value": job.jobId
      },
      "datePosted": job.jobPublishingDateFrom,
      "validThrough": job.jobPublishingDateUntil,
      "employmentType": job.jobEmploymentType,
      "hiringOrganization": {
        "@type": "Organization",
        "name": job.contactCompany,
        "sameAs": job.contactWebsite,
        "logo": job.jobHeaderImage
      },
      "jobLocation": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": job.jobStreet,
          "addressLocality": job.jobRegion,
          "postalCode": job.jobWorkplaceZipcode,
          "addressCountry": job.countryCompany
        }
      },
      "baseSalary": {
        "@type": "MonetaryAmount",
        "currency": job.salaryCurrency,
        "value": {
          "@type": "QuantitativeValue",
          "minValue": parseFloat(job.salaryMin),
          "maxValue": parseFloat(job.salaryMax),
          "unitText": "YEAR"  // Adjust according to salary type (e.g., HOUR, MONTH)
        }
      },
      "workHours": job.workHours,
      "responsibilities": job.jobResponsibilities,
      "skills": job.jobRequirements,
      "educationRequirements": job.jobEducationRequirements,
      "experienceRequirements": job.jobExperienceRequirements,
      "industry": job.jobIndustry,
      "jobBenefits": job.jobBenefits,
      "contactInfo": {
        "email": job.contactEmail,
        "phone": job.contactPhone,
        "name": `${job.contactFirstname} ${job.contactLastname}`
      },
      "jobLocationDetails": {
        "latitude": job.jobLatitude,
        "longitude": job.jobLongitude
      }
    };
  };

}

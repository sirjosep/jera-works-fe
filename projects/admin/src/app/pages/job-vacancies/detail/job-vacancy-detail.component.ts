import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppliedVacancyResDto } from '@dto/applied-vacancy/applied-vacancy.res.dto';
import { JobVacancyResDto } from '@dto/job-vacancy/job-vacancy.res.dto';
import { JobVacancyService } from '@services/job-vacancy.service';
import { Table } from 'primeng/table';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'detail',
  templateUrl: './job-vacancy-detail.component.html',
})
export class JobVacancyDetailComponent implements OnInit {
  jobVacancy!: JobVacancyResDto;
  loading = false;
  appliedVacancies: AppliedVacancyResDto[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private jobVacancyService: JobVacancyService
  ) {}

  ngOnInit(): void {
    firstValueFrom(this.activatedRoute.paramMap).then((res) => {
      const id = res.get('id');
      if (id) {
        firstValueFrom(this.jobVacancyService.getJobDetails(id)).then((res) =>
          console.log(res)
        );
      }
    });

    // this.activatedRoute.params.subscribe(result => {
    //     console.log(result['id'])
    // })
    // this.jobVacancy = {
    //     id : 'ac0bb0c8-cb58-4399-b155-436a837d7859',
    //     vacancyCode : 'VA001',
    //     vacancyTitle : 'Fullstack Developer',
    //     picHrName : 'Rendy',
    //     picUserName : 'Riandy',
    //     startDate : '2021-01-07',
    //     endDate : '2021-01-07',
    //     expLevelName : 'Junior',
    //     availableStatusName : 'Open',
    //     companyName : 'Adidas',
    //     degreeName : 'S1 - Bachelor',
    //     genderName : 'Male',
    //     ageVacancyName : 'Below 20',
    //     jobTypeName : 'Fulltime',
    //     salary : 'Rp.4.000.000',
    //     cityName : 'Jakarta',
    //     address : 'Jalan Casablanca Raya, Kav. 88 12870 Jakarta Selatan Daerah Khusus Ibukota Jakarta',
    //     description : 'Adidas adalah perusahaan yang bergerak di bidang alat olahraga'
    // }
    // this.appliedVacancies.push({
    //     candidateName : "Rendy Prima",
    //     candidateEmail : "rdarma2000@gmail.com",
    //     progressName : "Application",
    //     statusName : "Open"
    // })
  }

  clear(table: Table) {
    table.clear();
  }

  getStatusSeverity(status: string) {
    switch (status) {
      case 'Open':
        return 'success';
      case 'Close':
        return 'danger';
      default:
        return 'danger';
    }
  }
}

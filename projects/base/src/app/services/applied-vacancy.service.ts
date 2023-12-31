import { Observable } from 'rxjs';
import { BaseService } from './base.service';
import { InsertResDto } from '@dto/insert.res.dto';
import { AppliedVacancyInsertReqDto } from '@dto/applied-vacancy/applied-vacancy-insert.req.dto';
import { Injectable } from '@angular/core';
import { ADMIN_API, CANDIDATE_API } from '@constant/api.constant';
import { AppliedVacancyUpdateReqDto } from '@dto/applied-vacancy/applied-vacancy-update.req.dto';
import { UpdateResDto } from '@dto/update.res.dto';
import {
  AppliedVacancyAdminResDto,
  AppliedVacancyResDto,
} from '@dto/applied-vacancy/applied-vacancy.res.dto';
import { AppliedProgressResDto } from '@dto/data-master/applied-progress.res.dto';
import { AppliedVacancyProgressResDto } from '@dto/applied-vacancy/applied-vacancy-progress.res.dto';
import { AppliedVacancyCandidateDetailsResDto } from '@dto/applied-vacancy/applied-vacancy-candidate-details.res.dto';
import { AppliedVacancyByProgressAdminResDto } from '@dto/applied-vacancy/applied-vacancy-by-progress-admin.res.dto';
import { AppliedStatusResDto } from '@dto/applied-vacancy/applied-status.res.dto';
import { updateAppliedVacancyStatusReqDto } from '@dto/applied-vacancy/applied-vacancy-update-status.req.dto';

@Injectable({
  providedIn: 'root',
})
export class AppliedVacancyService {
  constructor(private base: BaseService) {}

  insertApplied(data: AppliedVacancyInsertReqDto): Observable<InsertResDto> {
    return this.base.post<InsertResDto>(
      `${CANDIDATE_API}/applied/apply`,
      data,
      true
    );
  }

  changeAppliedProgress(
    data: AppliedVacancyUpdateReqDto
  ): Observable<UpdateResDto> {
    return this.base.put<UpdateResDto>(`${ADMIN_API}/applied`, data, true);
  }

  changeAppliedStatus(
    data: updateAppliedVacancyStatusReqDto
  ): Observable<UpdateResDto> {
    return this.base.put(`${ADMIN_API}/applied/change-status`, data);
  }

  getAppliedVacancyWithLimit(
    startIndex: number,
    endIndex: number
  ): Observable<AppliedVacancyResDto[]> {
    return this.base.get<AppliedVacancyResDto[]>(
      `${CANDIDATE_API}/applied/my-applied/page/?startIndex=${startIndex}&endIndex=${endIndex}`,
      true
    );
  }

  getAppliedVacancy(): Observable<AppliedVacancyResDto[]> {
    return this.base.get<AppliedVacancyResDto[]>(
      `${CANDIDATE_API}/applied/my-applied`,
      true
    );
  }

  getProgress(appliedId: string): Observable<AppliedVacancyProgressResDto> {
    return this.base.get<AppliedVacancyProgressResDto>(
      `${CANDIDATE_API}/applied/my-applied/code/?appliedId=${appliedId}`,
      true
    );
  }

  getAppliedStatus(): Observable<AppliedStatusResDto[]> {
    return this.base.get(`${ADMIN_API}/applied-status`);
  }

  getAppliedCandidatesByJobId(
    id: string
  ): Observable<AppliedVacancyAdminResDto[]> {
    return this.base.get(`${ADMIN_API}/applied/job?jobId=${id}`);
  }

  getAppliedCandidateDetails(
    id: string
  ): Observable<AppliedVacancyCandidateDetailsResDto> {
    return this.base.get(`${ADMIN_API}/applied?appliedId=${id}`);
  }

  getAppliedVacancyByProgress(
    progressId: string,
    jobVacancyId: string
  ): Observable<AppliedVacancyAdminResDto[]> {
    return this.base.get(
      `${ADMIN_API}/applied/progress/?progressId=${progressId}&jobVacancyId=${jobVacancyId}`
    );
  }

  getProgressCount(
    jobVacancyId: string
  ): Observable<AppliedVacancyByProgressAdminResDto[]> {
    return this.base.get(
      `${ADMIN_API}/applied/counts/?jobVacancyId=${jobVacancyId}`
    );
  }
}

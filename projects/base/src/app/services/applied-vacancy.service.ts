import { Observable } from "rxjs";
import { BaseService } from "./base.service";
import { InsertResDto } from "@dto/InsertResDto";
import { AppliedVacancyInsertReqDto } from "@dto/applied-vacancy/applied-vacancy-insert.req.dto";
import { Injectable } from "@angular/core";
import { ADMIN_API, CANDIDATE_API } from "@constant/api.constant";
import { AppliedVacancyUpdateReqDto } from "@dto/applied-vacancy/applied-vacancy-update.req.dto";
import { UpdateResDto } from "@dto/UpdateResDto";

@Injectable({
    providedIn: 'root'
})
export class AppliedVacancyService {

    constructor(private base: BaseService) { }

    insertApplied(data: AppliedVacancyInsertReqDto): Observable<InsertResDto> {
        return this.base.post<InsertResDto>(`${CANDIDATE_API}/applied/apply`, data, true);
    }

    changeAppliedProgress(data: AppliedVacancyUpdateReqDto): Observable<UpdateResDto> {
        return this.base.put<UpdateResDto>(`${ADMIN_API}/applied`, data, true)
    }

}
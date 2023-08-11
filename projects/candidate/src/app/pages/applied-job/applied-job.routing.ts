import { RouterModule, Routes } from '@angular/router';
import { AppliedJobListComponent } from './applied-list/applied-job-list.component';
import { AppliedJobDetailsComponent } from './applied-details/applied-job-details.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { ButtonComponent } from '@components/button/button.component';

const routes: Routes = [
  {
    path: '',
    component: AppliedJobListComponent,
  },
  {
    path: ':id',
    component: AppliedJobDetailsComponent,
  },
];

@NgModule({
  declarations: [AppliedJobListComponent, AppliedJobDetailsComponent],
  imports: [RouterModule.forChild(routes), SharedModule, ButtonComponent],
  exports: [RouterModule],
})
export class AppliedJobRouting {}

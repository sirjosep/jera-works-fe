import { RouterModule, Routes } from '@angular/router';
import { JobDetailsComponent } from './job-details.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { ButtonComponent } from '@components/button/button.component';

const routes: Routes = [
  {
    path: ':id',
    component: JobDetailsComponent,
  },
];

@NgModule({
  declarations: [JobDetailsComponent],
  imports: [RouterModule.forChild(routes), SharedModule, ButtonComponent],
  exports: [RouterModule],
})
export class JobDetailsRouting {}

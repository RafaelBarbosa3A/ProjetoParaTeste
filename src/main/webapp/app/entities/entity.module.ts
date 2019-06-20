import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'region',
        loadChildren: './region/region.module#ProjetoParaTesteRegionModule'
      },
      {
        path: 'country',
        loadChildren: './country/country.module#ProjetoParaTesteCountryModule'
      },
      {
        path: 'location',
        loadChildren: './location/location.module#ProjetoParaTesteLocationModule'
      },
      {
        path: 'department',
        loadChildren: './department/department.module#ProjetoParaTesteDepartmentModule'
      },
      {
        path: 'task',
        loadChildren: './task/task.module#ProjetoParaTesteTaskModule'
      },
      {
        path: 'employee',
        loadChildren: './employee/employee.module#ProjetoParaTesteEmployeeModule'
      },
      {
        path: 'job',
        loadChildren: './job/job.module#ProjetoParaTesteJobModule'
      },
      {
        path: 'job-history',
        loadChildren: './job-history/job-history.module#ProjetoParaTesteJobHistoryModule'
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ],
  declarations: [],
  entryComponents: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProjetoParaTesteEntityModule {}

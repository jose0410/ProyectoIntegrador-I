import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ProyectoIntegradorRegionMySuffixModule } from './region/region-my-suffix.module';
import { ProyectoIntegradorCountryMySuffixModule } from './country/country-my-suffix.module';
import { ProyectoIntegradorLocationMySuffixModule } from './location/location-my-suffix.module';
import { ProyectoIntegradorDepartmentMySuffixModule } from './department/department-my-suffix.module';
import { ProyectoIntegradorTaskMySuffixModule } from './task/task-my-suffix.module';
import { ProyectoIntegradorEmployeeMySuffixModule } from './employee/employee-my-suffix.module';
import { ProyectoIntegradorJobMySuffixModule } from './job/job-my-suffix.module';
import { ProyectoIntegradorJobHistoryMySuffixModule } from './job-history/job-history-my-suffix.module';
import { ProyectoIntegradorCoursePiModule } from './course/course-pi.module';
import { ProyectoIntegradorSessionPiModule } from './session/session-pi.module';
import { ProyectoIntegradorProfessorPiModule } from './professor/professor-pi.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        ProyectoIntegradorRegionMySuffixModule,
        ProyectoIntegradorCountryMySuffixModule,
        ProyectoIntegradorLocationMySuffixModule,
        ProyectoIntegradorDepartmentMySuffixModule,
        ProyectoIntegradorTaskMySuffixModule,
        ProyectoIntegradorEmployeeMySuffixModule,
        ProyectoIntegradorJobMySuffixModule,
        ProyectoIntegradorJobHistoryMySuffixModule,
        ProyectoIntegradorCoursePiModule,
        ProyectoIntegradorSessionPiModule,
        ProyectoIntegradorProfessorPiModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProyectoIntegradorEntityModule {}

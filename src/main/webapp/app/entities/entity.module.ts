import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ProyectoIntegradorCoursePiModule } from './course/course-pi.module';
import { ProyectoIntegradorSessionPiModule } from './session/session-pi.module';
import { ProyectoIntegradorProfessorPiModule } from './professor/professor-pi.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
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

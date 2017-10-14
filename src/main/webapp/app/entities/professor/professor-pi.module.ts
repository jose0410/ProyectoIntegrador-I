import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProyectoIntegradorSharedModule } from '../../shared';
import {
    ProfessorPiService,
    ProfessorPiPopupService,
    ProfessorPiComponent,
    ProfessorPiDetailComponent,
    ProfessorPiDialogComponent,
    ProfessorPiPopupComponent,
    ProfessorPiDeletePopupComponent,
    ProfessorPiDeleteDialogComponent,
    professorRoute,
    professorPopupRoute,
} from './';

const ENTITY_STATES = [
    ...professorRoute,
    ...professorPopupRoute,
];

@NgModule({
    imports: [
        ProyectoIntegradorSharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        ProfessorPiComponent,
        ProfessorPiDetailComponent,
        ProfessorPiDialogComponent,
        ProfessorPiDeleteDialogComponent,
        ProfessorPiPopupComponent,
        ProfessorPiDeletePopupComponent,
    ],
    entryComponents: [
        ProfessorPiComponent,
        ProfessorPiDialogComponent,
        ProfessorPiPopupComponent,
        ProfessorPiDeleteDialogComponent,
        ProfessorPiDeletePopupComponent,
    ],
    providers: [
        ProfessorPiService,
        ProfessorPiPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProyectoIntegradorProfessorPiModule {}

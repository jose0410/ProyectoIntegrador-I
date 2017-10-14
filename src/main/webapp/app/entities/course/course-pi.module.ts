import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProyectoIntegradorSharedModule } from '../../shared';
import {
    CoursePiService,
    CoursePiPopupService,
    CoursePiComponent,
    CoursePiDetailComponent,
    CoursePiDialogComponent,
    CoursePiPopupComponent,
    CoursePiDeletePopupComponent,
    CoursePiDeleteDialogComponent,
    courseRoute,
    coursePopupRoute,
} from './';

const ENTITY_STATES = [
    ...courseRoute,
    ...coursePopupRoute,
];

@NgModule({
    imports: [
        ProyectoIntegradorSharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        CoursePiComponent,
        CoursePiDetailComponent,
        CoursePiDialogComponent,
        CoursePiDeleteDialogComponent,
        CoursePiPopupComponent,
        CoursePiDeletePopupComponent,
    ],
    entryComponents: [
        CoursePiComponent,
        CoursePiDialogComponent,
        CoursePiPopupComponent,
        CoursePiDeleteDialogComponent,
        CoursePiDeletePopupComponent,
    ],
    providers: [
        CoursePiService,
        CoursePiPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProyectoIntegradorCoursePiModule {}

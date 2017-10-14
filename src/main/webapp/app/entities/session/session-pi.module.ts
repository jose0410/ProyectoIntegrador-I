import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProyectoIntegradorSharedModule } from '../../shared';
import {
    SessionPiService,
    SessionPiPopupService,
    SessionPiComponent,
    SessionPiDetailComponent,
    SessionPiDialogComponent,
    SessionPiPopupComponent,
    SessionPiDeletePopupComponent,
    SessionPiDeleteDialogComponent,
    sessionRoute,
    sessionPopupRoute,
} from './';

const ENTITY_STATES = [
    ...sessionRoute,
    ...sessionPopupRoute,
];

@NgModule({
    imports: [
        ProyectoIntegradorSharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        SessionPiComponent,
        SessionPiDetailComponent,
        SessionPiDialogComponent,
        SessionPiDeleteDialogComponent,
        SessionPiPopupComponent,
        SessionPiDeletePopupComponent,
    ],
    entryComponents: [
        SessionPiComponent,
        SessionPiDialogComponent,
        SessionPiPopupComponent,
        SessionPiDeleteDialogComponent,
        SessionPiDeletePopupComponent,
    ],
    providers: [
        SessionPiService,
        SessionPiPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProyectoIntegradorSessionPiModule {}

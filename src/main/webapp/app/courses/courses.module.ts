import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProyectoIntegradorSharedModule } from '../shared';

import { COURSES_ROUTE, CoursesComponent } from './';



@NgModule({
    imports: [
        ProyectoIntegradorSharedModule,
        RouterModule.forRoot([COURSES_ROUTE], { useHash: true })
    ],
    declarations: [
        CoursesComponent,
    ],
    entryComponents: [
    ],
    providers: [
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProyectoIntegradorCoursesModule {}

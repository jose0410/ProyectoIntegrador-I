import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProyectoIntegradorSharedModule } from '../shared';
import { FORUM_ROUTE, ForumComponent } from './';

@NgModule({
    imports: [
        ProyectoIntegradorSharedModule,
        RouterModule.forRoot([FORUM_ROUTE], { useHash: true })
    ],
    declarations: [
        ForumComponent,
    ],
    entryComponents: [
    ],
    providers: [
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProyectoIntegradorForumModule {}

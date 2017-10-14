import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProyectoIntegradorSharedModule } from '../shared';
import { PROFILE_ROUTE, ProfileComponent } from './';

@NgModule({
    imports: [
        ProyectoIntegradorSharedModule,
        RouterModule.forRoot([PROFILE_ROUTE], { useHash: true })
    ],
    declarations: [
        ProfileComponent,
    ],
    entryComponents: [
    ],
    providers: [
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProyectoIntegradorProfileModule {}

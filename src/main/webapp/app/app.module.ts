import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ng2-webstorage';

import { ProyectoIntegradorSharedModule, UserRouteAccessService } from './shared';
import { ProyectoIntegradorHomeModule } from './home/home.module';
import { ProyectoIntegradorAdminModule } from './admin/admin.module';
import { ProyectoIntegradorAccountModule } from './account/account.module';
import { ProyectoIntegradorEntityModule } from './entities/entity.module';

import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    LayoutRoutingModule,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ActiveMenuDirective,
    ErrorComponent
} from './layouts';
import { PiNavbarComponent } from './layouts/pi-navbar/pi-navbar.component';
import { PiMainComponent } from './layouts/pi-main/pi-main.component';

@NgModule({
    imports: [
        BrowserModule,
        LayoutRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        ProyectoIntegradorSharedModule,
        ProyectoIntegradorHomeModule,
        ProyectoIntegradorAdminModule,
        ProyectoIntegradorAccountModule,
        ProyectoIntegradorEntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        ActiveMenuDirective,
        FooterComponent,
        PiNavbarComponent,
        PiMainComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ PiMainComponent ]
})
export class ProyectoIntegradorAppModule {}

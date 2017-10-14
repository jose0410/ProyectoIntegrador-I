import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { JhiPaginationUtil } from 'ng-jhipster';

import { SessionPiComponent } from './session-pi.component';
import { SessionPiDetailComponent } from './session-pi-detail.component';
import { SessionPiPopupComponent } from './session-pi-dialog.component';
import { SessionPiDeletePopupComponent } from './session-pi-delete-dialog.component';

export const sessionRoute: Routes = [
    {
        path: 'session-pi',
        component: SessionPiComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'proyectoIntegradorApp.session.home.title'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'session-pi/:id',
        component: SessionPiDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'proyectoIntegradorApp.session.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const sessionPopupRoute: Routes = [
    {
        path: 'session-pi-new',
        component: SessionPiPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'proyectoIntegradorApp.session.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'session-pi/:id/edit',
        component: SessionPiPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'proyectoIntegradorApp.session.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'session-pi/:id/delete',
        component: SessionPiDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'proyectoIntegradorApp.session.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];

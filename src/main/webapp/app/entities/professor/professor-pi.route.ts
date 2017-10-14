import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { JhiPaginationUtil } from 'ng-jhipster';

import { ProfessorPiComponent } from './professor-pi.component';
import { ProfessorPiDetailComponent } from './professor-pi-detail.component';
import { ProfessorPiPopupComponent } from './professor-pi-dialog.component';
import { ProfessorPiDeletePopupComponent } from './professor-pi-delete-dialog.component';

export const professorRoute: Routes = [
    {
        path: 'professor-pi',
        component: ProfessorPiComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'proyectoIntegradorApp.professor.home.title'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'professor-pi/:id',
        component: ProfessorPiDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'proyectoIntegradorApp.professor.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const professorPopupRoute: Routes = [
    {
        path: 'professor-pi-new',
        component: ProfessorPiPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'proyectoIntegradorApp.professor.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'professor-pi/:id/edit',
        component: ProfessorPiPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'proyectoIntegradorApp.professor.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'professor-pi/:id/delete',
        component: ProfessorPiDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'proyectoIntegradorApp.professor.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];

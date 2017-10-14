import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { JhiPaginationUtil } from 'ng-jhipster';

import { CoursePiComponent } from './course-pi.component';
import { CoursePiDetailComponent } from './course-pi-detail.component';
import { CoursePiPopupComponent } from './course-pi-dialog.component';
import { CoursePiDeletePopupComponent } from './course-pi-delete-dialog.component';

export const courseRoute: Routes = [
    {
        path: 'course-pi',
        component: CoursePiComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'proyectoIntegradorApp.course.home.title'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'course-pi/:id',
        component: CoursePiDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'proyectoIntegradorApp.course.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const coursePopupRoute: Routes = [
    {
        path: 'course-pi-new',
        component: CoursePiPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'proyectoIntegradorApp.course.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'course-pi/:id/edit',
        component: CoursePiPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'proyectoIntegradorApp.course.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'course-pi/:id/delete',
        component: CoursePiDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'proyectoIntegradorApp.course.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];

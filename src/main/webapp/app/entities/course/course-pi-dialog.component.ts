import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { CoursePi } from './course-pi.model';
import { CoursePiPopupService } from './course-pi-popup.service';
import { CoursePiService } from './course-pi.service';
import { ProfessorPi, ProfessorPiService } from '../professor';
import { ResponseWrapper } from '../../shared';

@Component({
    selector: 'jhi-course-pi-dialog',
    templateUrl: './course-pi-dialog.component.html'
})
export class CoursePiDialogComponent implements OnInit {

    course: CoursePi;
    isSaving: boolean;

    professors: ProfessorPi[];

    constructor(
        public activeModal: NgbActiveModal,
        private alertService: JhiAlertService,
        private courseService: CoursePiService,
        private professorService: ProfessorPiService,
        private eventManager: JhiEventManager
    ) {
    }

    ngOnInit() {
        this.isSaving = false;
        this.professorService.query()
            .subscribe((res: ResponseWrapper) => { this.professors = res.json; }, (res: ResponseWrapper) => this.onError(res.json));
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    save() {
        this.isSaving = true;
        if (this.course.id !== undefined) {
            this.subscribeToSaveResponse(
                this.courseService.update(this.course));
        } else {
            this.subscribeToSaveResponse(
                this.courseService.create(this.course));
        }
    }

    private subscribeToSaveResponse(result: Observable<CoursePi>) {
        result.subscribe((res: CoursePi) =>
            this.onSaveSuccess(res), (res: Response) => this.onSaveError());
    }

    private onSaveSuccess(result: CoursePi) {
        this.eventManager.broadcast({ name: 'courseListModification', content: 'OK'});
        this.isSaving = false;
        this.activeModal.dismiss(result);
    }

    private onSaveError() {
        this.isSaving = false;
    }

    private onError(error: any) {
        this.alertService.error(error.message, null, null);
    }

    trackProfessorById(index: number, item: ProfessorPi) {
        return item.id;
    }
}

@Component({
    selector: 'jhi-course-pi-popup',
    template: ''
})
export class CoursePiPopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private coursePopupService: CoursePiPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if ( params['id'] ) {
                this.coursePopupService
                    .open(CoursePiDialogComponent as Component, params['id']);
            } else {
                this.coursePopupService
                    .open(CoursePiDialogComponent as Component);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}

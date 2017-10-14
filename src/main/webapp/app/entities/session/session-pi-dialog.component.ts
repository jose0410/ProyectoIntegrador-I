import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { SessionPi } from './session-pi.model';
import { SessionPiPopupService } from './session-pi-popup.service';
import { SessionPiService } from './session-pi.service';
import { CoursePi, CoursePiService } from '../course';
import { ResponseWrapper } from '../../shared';

@Component({
    selector: 'jhi-session-pi-dialog',
    templateUrl: './session-pi-dialog.component.html'
})
export class SessionPiDialogComponent implements OnInit {

    session: SessionPi;
    isSaving: boolean;

    courses: CoursePi[];

    constructor(
        public activeModal: NgbActiveModal,
        private alertService: JhiAlertService,
        private sessionService: SessionPiService,
        private courseService: CoursePiService,
        private eventManager: JhiEventManager
    ) {
    }

    ngOnInit() {
        this.isSaving = false;
        this.courseService.query()
            .subscribe((res: ResponseWrapper) => { this.courses = res.json; }, (res: ResponseWrapper) => this.onError(res.json));
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    save() {
        this.isSaving = true;
        if (this.session.id !== undefined) {
            this.subscribeToSaveResponse(
                this.sessionService.update(this.session));
        } else {
            this.subscribeToSaveResponse(
                this.sessionService.create(this.session));
        }
    }

    private subscribeToSaveResponse(result: Observable<SessionPi>) {
        result.subscribe((res: SessionPi) =>
            this.onSaveSuccess(res), (res: Response) => this.onSaveError());
    }

    private onSaveSuccess(result: SessionPi) {
        this.eventManager.broadcast({ name: 'sessionListModification', content: 'OK'});
        this.isSaving = false;
        this.activeModal.dismiss(result);
    }

    private onSaveError() {
        this.isSaving = false;
    }

    private onError(error: any) {
        this.alertService.error(error.message, null, null);
    }

    trackCourseById(index: number, item: CoursePi) {
        return item.id;
    }
}

@Component({
    selector: 'jhi-session-pi-popup',
    template: ''
})
export class SessionPiPopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private sessionPopupService: SessionPiPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if ( params['id'] ) {
                this.sessionPopupService
                    .open(SessionPiDialogComponent as Component, params['id']);
            } else {
                this.sessionPopupService
                    .open(SessionPiDialogComponent as Component);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}

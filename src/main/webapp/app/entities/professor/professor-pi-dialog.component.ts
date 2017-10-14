import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { ProfessorPi } from './professor-pi.model';
import { ProfessorPiPopupService } from './professor-pi-popup.service';
import { ProfessorPiService } from './professor-pi.service';

@Component({
    selector: 'jhi-professor-pi-dialog',
    templateUrl: './professor-pi-dialog.component.html'
})
export class ProfessorPiDialogComponent implements OnInit {

    professor: ProfessorPi;
    isSaving: boolean;

    constructor(
        public activeModal: NgbActiveModal,
        private alertService: JhiAlertService,
        private professorService: ProfessorPiService,
        private eventManager: JhiEventManager
    ) {
    }

    ngOnInit() {
        this.isSaving = false;
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    save() {
        this.isSaving = true;
        if (this.professor.id !== undefined) {
            this.subscribeToSaveResponse(
                this.professorService.update(this.professor));
        } else {
            this.subscribeToSaveResponse(
                this.professorService.create(this.professor));
        }
    }

    private subscribeToSaveResponse(result: Observable<ProfessorPi>) {
        result.subscribe((res: ProfessorPi) =>
            this.onSaveSuccess(res), (res: Response) => this.onSaveError());
    }

    private onSaveSuccess(result: ProfessorPi) {
        this.eventManager.broadcast({ name: 'professorListModification', content: 'OK'});
        this.isSaving = false;
        this.activeModal.dismiss(result);
    }

    private onSaveError() {
        this.isSaving = false;
    }

    private onError(error: any) {
        this.alertService.error(error.message, null, null);
    }
}

@Component({
    selector: 'jhi-professor-pi-popup',
    template: ''
})
export class ProfessorPiPopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private professorPopupService: ProfessorPiPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if ( params['id'] ) {
                this.professorPopupService
                    .open(ProfessorPiDialogComponent as Component, params['id']);
            } else {
                this.professorPopupService
                    .open(ProfessorPiDialogComponent as Component);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}

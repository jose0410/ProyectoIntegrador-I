import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { ProfessorPi } from './professor-pi.model';
import { ProfessorPiPopupService } from './professor-pi-popup.service';
import { ProfessorPiService } from './professor-pi.service';

@Component({
    selector: 'jhi-professor-pi-delete-dialog',
    templateUrl: './professor-pi-delete-dialog.component.html'
})
export class ProfessorPiDeleteDialogComponent {

    professor: ProfessorPi;

    constructor(
        private professorService: ProfessorPiService,
        public activeModal: NgbActiveModal,
        private eventManager: JhiEventManager
    ) {
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.professorService.delete(id).subscribe((response) => {
            this.eventManager.broadcast({
                name: 'professorListModification',
                content: 'Deleted an professor'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-professor-pi-delete-popup',
    template: ''
})
export class ProfessorPiDeletePopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private professorPopupService: ProfessorPiPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            this.professorPopupService
                .open(ProfessorPiDeleteDialogComponent as Component, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}

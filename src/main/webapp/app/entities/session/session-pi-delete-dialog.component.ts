import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { SessionPi } from './session-pi.model';
import { SessionPiPopupService } from './session-pi-popup.service';
import { SessionPiService } from './session-pi.service';

@Component({
    selector: 'jhi-session-pi-delete-dialog',
    templateUrl: './session-pi-delete-dialog.component.html'
})
export class SessionPiDeleteDialogComponent {

    session: SessionPi;

    constructor(
        private sessionService: SessionPiService,
        public activeModal: NgbActiveModal,
        private eventManager: JhiEventManager
    ) {
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.sessionService.delete(id).subscribe((response) => {
            this.eventManager.broadcast({
                name: 'sessionListModification',
                content: 'Deleted an session'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-session-pi-delete-popup',
    template: ''
})
export class SessionPiDeletePopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private sessionPopupService: SessionPiPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            this.sessionPopupService
                .open(SessionPiDeleteDialogComponent as Component, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}

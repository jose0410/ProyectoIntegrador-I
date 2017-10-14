import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { JhiEventManager } from 'ng-jhipster';

import { SessionPi } from './session-pi.model';
import { SessionPiService } from './session-pi.service';

@Component({
    selector: 'jhi-session-pi-detail',
    templateUrl: './session-pi-detail.component.html'
})
export class SessionPiDetailComponent implements OnInit, OnDestroy {

    session: SessionPi;
    private subscription: Subscription;
    private eventSubscriber: Subscription;

    constructor(
        private eventManager: JhiEventManager,
        private sessionService: SessionPiService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe((params) => {
            this.load(params['id']);
        });
        this.registerChangeInSessions();
    }

    load(id) {
        this.sessionService.find(id).subscribe((session) => {
            this.session = session;
        });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.eventManager.destroy(this.eventSubscriber);
    }

    registerChangeInSessions() {
        this.eventSubscriber = this.eventManager.subscribe(
            'sessionListModification',
            (response) => this.load(this.session.id)
        );
    }
}

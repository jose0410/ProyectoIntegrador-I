import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { JhiEventManager, JhiParseLinks, JhiPaginationUtil, JhiLanguageService, JhiAlertService } from 'ng-jhipster';

import { SessionPi } from './session-pi.model';
import { SessionPiService } from './session-pi.service';
import { ITEMS_PER_PAGE, Principal, ResponseWrapper } from '../../shared';
import { PaginationConfig } from '../../blocks/config/uib-pagination.config';

@Component({
    selector: 'jhi-session-pi',
    templateUrl: './session-pi.component.html'
})
export class SessionPiComponent implements OnInit, OnDestroy {
sessions: SessionPi[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        private sessionService: SessionPiService,
        private alertService: JhiAlertService,
        private eventManager: JhiEventManager,
        private principal: Principal
    ) {
    }

    loadAll() {
        this.sessionService.query().subscribe(
            (res: ResponseWrapper) => {
                this.sessions = res.json;
            },
            (res: ResponseWrapper) => this.onError(res.json)
        );
    }
    ngOnInit() {
        this.loadAll();
        this.principal.identity().then((account) => {
            this.currentAccount = account;
        });
        this.registerChangeInSessions();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: SessionPi) {
        return item.id;
    }
    registerChangeInSessions() {
        this.eventSubscriber = this.eventManager.subscribe('sessionListModification', (response) => this.loadAll());
    }

    private onError(error) {
        this.alertService.error(error.message, null, null);
    }
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { JhiEventManager, JhiParseLinks, JhiPaginationUtil, JhiLanguageService, JhiAlertService } from 'ng-jhipster';

import { ProfessorPi } from './professor-pi.model';
import { ProfessorPiService } from './professor-pi.service';
import { ITEMS_PER_PAGE, Principal, ResponseWrapper } from '../../shared';
import { PaginationConfig } from '../../blocks/config/uib-pagination.config';

@Component({
    selector: 'jhi-professor-pi',
    templateUrl: './professor-pi.component.html'
})
export class ProfessorPiComponent implements OnInit, OnDestroy {
professors: ProfessorPi[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        private professorService: ProfessorPiService,
        private alertService: JhiAlertService,
        private eventManager: JhiEventManager,
        private principal: Principal
    ) {
    }

    loadAll() {
        this.professorService.query().subscribe(
            (res: ResponseWrapper) => {
                this.professors = res.json;
            },
            (res: ResponseWrapper) => this.onError(res.json)
        );
    }
    ngOnInit() {
        this.loadAll();
        this.principal.identity().then((account) => {
            this.currentAccount = account;
        });
        this.registerChangeInProfessors();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: ProfessorPi) {
        return item.id;
    }
    registerChangeInProfessors() {
        this.eventSubscriber = this.eventManager.subscribe('professorListModification', (response) => this.loadAll());
    }

    private onError(error) {
        this.alertService.error(error.message, null, null);
    }
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { JhiEventManager } from 'ng-jhipster';

import { ProfessorPi } from './professor-pi.model';
import { ProfessorPiService } from './professor-pi.service';

@Component({
    selector: 'jhi-professor-pi-detail',
    templateUrl: './professor-pi-detail.component.html'
})
export class ProfessorPiDetailComponent implements OnInit, OnDestroy {

    professor: ProfessorPi;
    private subscription: Subscription;
    private eventSubscriber: Subscription;

    constructor(
        private eventManager: JhiEventManager,
        private professorService: ProfessorPiService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe((params) => {
            this.load(params['id']);
        });
        this.registerChangeInProfessors();
    }

    load(id) {
        this.professorService.find(id).subscribe((professor) => {
            this.professor = professor;
        });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.eventManager.destroy(this.eventSubscriber);
    }

    registerChangeInProfessors() {
        this.eventSubscriber = this.eventManager.subscribe(
            'professorListModification',
            (response) => this.load(this.professor.id)
        );
    }
}

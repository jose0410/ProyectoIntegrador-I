import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { JhiEventManager } from 'ng-jhipster';

import { CoursePi } from './course-pi.model';
import { CoursePiService } from './course-pi.service';

@Component({
    selector: 'jhi-course-pi-detail',
    templateUrl: './course-pi-detail.component.html'
})
export class CoursePiDetailComponent implements OnInit, OnDestroy {

    course: CoursePi;
    private subscription: Subscription;
    private eventSubscriber: Subscription;

    constructor(
        private eventManager: JhiEventManager,
        private courseService: CoursePiService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe((params) => {
            this.load(params['id']);
        });
        this.registerChangeInCourses();
    }

    load(id) {
        this.courseService.find(id).subscribe((course) => {
            this.course = course;
        });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.eventManager.destroy(this.eventSubscriber);
    }

    registerChangeInCourses() {
        this.eventSubscriber = this.eventManager.subscribe(
            'courseListModification',
            (response) => this.load(this.course.id)
        );
    }
}

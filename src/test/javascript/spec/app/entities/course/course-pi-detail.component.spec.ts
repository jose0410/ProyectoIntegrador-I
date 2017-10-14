/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { JhiDateUtils, JhiDataUtils, JhiEventManager } from 'ng-jhipster';
import { ProyectoIntegradorTestModule } from '../../../test.module';
import { MockActivatedRoute } from '../../../helpers/mock-route.service';
import { CoursePiDetailComponent } from '../../../../../../main/webapp/app/entities/course/course-pi-detail.component';
import { CoursePiService } from '../../../../../../main/webapp/app/entities/course/course-pi.service';
import { CoursePi } from '../../../../../../main/webapp/app/entities/course/course-pi.model';

describe('Component Tests', () => {

    describe('CoursePi Management Detail Component', () => {
        let comp: CoursePiDetailComponent;
        let fixture: ComponentFixture<CoursePiDetailComponent>;
        let service: CoursePiService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [ProyectoIntegradorTestModule],
                declarations: [CoursePiDetailComponent],
                providers: [
                    JhiDateUtils,
                    JhiDataUtils,
                    DatePipe,
                    {
                        provide: ActivatedRoute,
                        useValue: new MockActivatedRoute({id: 123})
                    },
                    CoursePiService,
                    JhiEventManager
                ]
            }).overrideTemplate(CoursePiDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(CoursePiDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(CoursePiService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
            // GIVEN

            spyOn(service, 'find').and.returnValue(Observable.of(new CoursePi(10)));

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.find).toHaveBeenCalledWith(123);
            expect(comp.course).toEqual(jasmine.objectContaining({id: 10}));
            });
        });
    });

});

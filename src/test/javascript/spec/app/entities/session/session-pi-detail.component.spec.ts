/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { JhiDateUtils, JhiDataUtils, JhiEventManager } from 'ng-jhipster';
import { ProyectoIntegradorTestModule } from '../../../test.module';
import { MockActivatedRoute } from '../../../helpers/mock-route.service';
import { SessionPiDetailComponent } from '../../../../../../main/webapp/app/entities/session/session-pi-detail.component';
import { SessionPiService } from '../../../../../../main/webapp/app/entities/session/session-pi.service';
import { SessionPi } from '../../../../../../main/webapp/app/entities/session/session-pi.model';

describe('Component Tests', () => {

    describe('SessionPi Management Detail Component', () => {
        let comp: SessionPiDetailComponent;
        let fixture: ComponentFixture<SessionPiDetailComponent>;
        let service: SessionPiService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [ProyectoIntegradorTestModule],
                declarations: [SessionPiDetailComponent],
                providers: [
                    JhiDateUtils,
                    JhiDataUtils,
                    DatePipe,
                    {
                        provide: ActivatedRoute,
                        useValue: new MockActivatedRoute({id: 123})
                    },
                    SessionPiService,
                    JhiEventManager
                ]
            }).overrideTemplate(SessionPiDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(SessionPiDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(SessionPiService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
            // GIVEN

            spyOn(service, 'find').and.returnValue(Observable.of(new SessionPi(10)));

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.find).toHaveBeenCalledWith(123);
            expect(comp.session).toEqual(jasmine.objectContaining({id: 10}));
            });
        });
    });

});

/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { JhiDateUtils, JhiDataUtils, JhiEventManager } from 'ng-jhipster';
import { ProyectoIntegradorTestModule } from '../../../test.module';
import { MockActivatedRoute } from '../../../helpers/mock-route.service';
import { ProfessorPiDetailComponent } from '../../../../../../main/webapp/app/entities/professor/professor-pi-detail.component';
import { ProfessorPiService } from '../../../../../../main/webapp/app/entities/professor/professor-pi.service';
import { ProfessorPi } from '../../../../../../main/webapp/app/entities/professor/professor-pi.model';

describe('Component Tests', () => {

    describe('ProfessorPi Management Detail Component', () => {
        let comp: ProfessorPiDetailComponent;
        let fixture: ComponentFixture<ProfessorPiDetailComponent>;
        let service: ProfessorPiService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [ProyectoIntegradorTestModule],
                declarations: [ProfessorPiDetailComponent],
                providers: [
                    JhiDateUtils,
                    JhiDataUtils,
                    DatePipe,
                    {
                        provide: ActivatedRoute,
                        useValue: new MockActivatedRoute({id: 123})
                    },
                    ProfessorPiService,
                    JhiEventManager
                ]
            }).overrideTemplate(ProfessorPiDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(ProfessorPiDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(ProfessorPiService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
            // GIVEN

            spyOn(service, 'find').and.returnValue(Observable.of(new ProfessorPi(10)));

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.find).toHaveBeenCalledWith(123);
            expect(comp.professor).toEqual(jasmine.objectContaining({id: 10}));
            });
        });
    });

});

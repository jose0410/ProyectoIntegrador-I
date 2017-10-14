import { BaseEntity } from './../../shared';

export class ProfessorPi implements BaseEntity {
    constructor(
        public id?: number,
        public name?: string,
        public lastname?: string,
        public courses?: BaseEntity[],
    ) {
    }
}

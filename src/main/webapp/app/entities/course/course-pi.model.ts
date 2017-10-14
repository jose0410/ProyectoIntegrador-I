import { BaseEntity } from './../../shared';

export class CoursePi implements BaseEntity {
    constructor(
        public id?: number,
        public name?: string,
        public subject?: string,
        public description?: string,
        public sessions?: BaseEntity[],
        public professorId?: number,
    ) {
    }
}

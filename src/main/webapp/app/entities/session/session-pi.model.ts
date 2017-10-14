import { BaseEntity } from './../../shared';

export class SessionPi implements BaseEntity {
    constructor(
        public id?: number,
        public name?: string,
        public description?: string,
        public semester?: number,
        public date?: any,
        public courseId?: number,
    ) {
    }
}

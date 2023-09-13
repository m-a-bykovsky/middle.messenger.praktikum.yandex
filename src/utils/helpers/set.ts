import { merge } from './merge';
import { Indexed } from './typings';

function set(object: Indexed | unknown, path: string, value: unknown): Indexed | unknown {
    if (typeof object !== 'object') return object;
    if (typeof path !== 'string') {
        throw new Error('path must be string');
    }

    const objectToAdd: Indexed | unknown = path.split('.').reduceRight((valueAcc, key) => ({ [key]: valueAcc }), value);
    return merge(object as Indexed, objectToAdd as Indexed);
}

export default set;

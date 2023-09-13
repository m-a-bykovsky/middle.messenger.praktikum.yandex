/* eslint-disable */
import { Indexed } from './typings';

export function merge(lhs: Indexed, rhs: Indexed): Indexed {
    function recursiveAssign(lhs: Indexed, rhs: Indexed): void {
        for (const key in rhs) {
            if (lhs[key] === undefined) lhs[key] = rhs[key];
            else if (typeof rhs[key] === 'object') {
                recursiveAssign(lhs[key] as Indexed, rhs[key] as Indexed);
                continue;
            }
            Object.assign(lhs, rhs);
        }
    }

    recursiveAssign(lhs, rhs);
    return lhs;
}

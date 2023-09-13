function instanceOfObject(val: unknown): boolean {
    return val instanceof Object
        && (val.constructor === Object || val.constructor === Array);
}

export function isEqual(a: Record<string, any>, b: Record<string, any>): boolean {
    if (Object.keys(a).length !== Object.keys(b).length) return false;

    return Object.entries(a).every((entrie) => {
        const [key, aVal] = entrie;
        const bVal = b[key];

        if (instanceOfObject(aVal) && instanceOfObject(bVal)) {
            if (isEqual(aVal, bVal)) return true;
            return false;
        }
        if (aVal !== bVal) return false;
        return true;
    });
}

export function replaceNulls(obj, replacer="") {
    if (Array.isArray(obj)) {
        return obj.map(replaceNulls);
    }

    if (obj !== null && typeof obj === 'object') {
        return Object.fromEntries(
            Object.entries(obj).map(([key, value]) => [
                key, 
                value === null ? replacer : replaceNulls(value)
            ])
        );
    }

    return obj;
}
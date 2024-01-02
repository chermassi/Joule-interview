"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMax = exports.get = void 0;
const get = (object, path) => {
    const keys = path.split(".");
    const firstKey = keys.shift();
    try {
        const newObject = object[firstKey];
        if (keys.length === 0)
            return newObject;
        return (0, exports.get)(newObject, keys.join("."));
    }
    catch {
        throw new Error(`Object ${object} cannot access key: ${firstKey}`);
    }
};
exports.get = get;
const getMax = (objects, path) => {
    if (objects.length === 0)
        return null;
    const values = objects.map((object) => (0, exports.get)(object, path));
    return Math.max(...values);
};
exports.getMax = getMax;
//# sourceMappingURL=objects.js.map
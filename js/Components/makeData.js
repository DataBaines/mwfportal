"use strict";
//import namor from 'namor'
Object.defineProperty(exports, "__esModule", { value: true });
const range = len => {
    const arr = [];
    for (let i = 0; i < len; i++) {
        arr.push(i);
    }
    return arr;
};
const newPerson = () => {
    const statusChance = Math.random();
    return {
        firstName: "Ralph",
        lastName: "Baines",
        age: Math.floor(Math.random() * 30),
        visits: Math.floor(Math.random() * 100),
        progress: Math.floor(Math.random() * 100),
        status: statusChance > 0.66
            ? 'relationship'
            : statusChance > 0.33
                ? 'complicated'
                : 'single',
    };
};
function makeData(...lens) {
    const makeDataLevel = (depth = 0) => {
        const len = lens[depth];
        return range(len).map(d => {
            return Object.assign(Object.assign({}, newPerson()), { subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined });
        });
    };
    return makeDataLevel();
}
exports.default = makeData;
//# sourceMappingURL=makeData.js.map
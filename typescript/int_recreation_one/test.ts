import solution = require('./solution');
import {assert} from "chai";

function testing(m:number, n:number, expected:number[][]) {
    assert.deepEqual(solution.G964.listSquared(m, n), expected);
}

function testDivisors(m:number, expected: number[]) {
    assert.deepEqual(solution.G964.listDivisors(m), expected);
}

describe("Find divisors", function() {
    it("listDivisors", function() {
        testDivisors(1, [1]);
        testDivisors(2, [1, 2]);
        testDivisors(8, [1, 8, 2, 4]);
        testDivisors(36, [1, 36, 2, 18, 3, 12, 4, 9, 6]);
    });
});

describe("Fixed Tests", function() {
        it("listSquared", function() {
        testing(1, 250, [[1, 1], [42, 2500], [246, 84100]]);
        testing(42, 250, [[42, 2500], [246, 84100]]);
        testing(250, 500, [[287, 84100]]);
        testing(300, 600, []);
    });
});

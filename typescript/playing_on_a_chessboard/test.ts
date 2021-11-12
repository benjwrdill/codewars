import solution = require('./solution');
import {assert} from "chai";

function testing(n: number, expected: number[]) {
  assert.deepEqual(solution.G964.game(n), expected)
}

describe("Fixed Tests game", function() {
    it("Basic tests", function() {        
        testing(0, [0]);
        testing(1, [1, 2]);
        testing(8, [32]);
    });
});

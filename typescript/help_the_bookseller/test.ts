import solution = require('./solution');
import {assert} from "chai";

function testing(listOfArt:string[], listOfCat:string[], expected:string) {
    assert.equal(solution.G964.stockList(listOfArt, listOfCat), expected);
}

describe("Fixed Tests", function() {
    it("Basic tests stockList", function() {
        var b, c, res;
        b = ["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"];
        c = ["A", "B", "C", "D"];
        res = "(A : 0) - (B : 1290) - (C : 515) - (D : 600)";
        testing(b, c, res);
        testing(b, [], '');
        testing([], c, '');
    });
});

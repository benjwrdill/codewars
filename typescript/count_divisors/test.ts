import { assert } from "chai";
import { divisors } from "./solution";

describe("basic tests", function() {
  it("Testing for 1", () => assert.strictEqual(divisors(1), 1));
  it("Testing for 10", () => assert.strictEqual(divisors(10), 4));
  it("Testing for 11", () => assert.strictEqual(divisors(11), 2));
  it("Testing for 54", () => assert.strictEqual(divisors(54), 8));
  it("Testing for 64", () => assert.strictEqual(divisors(64), 7));
});

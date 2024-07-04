import assert from "assert";

// * Simple example
let a = 4;
let b = 6;

// asssert with try catch
try {
  assert(a == b);
} catch {
  console.log(`${a} != ${b}`);
}
// assert without try catch
assert(a == b);

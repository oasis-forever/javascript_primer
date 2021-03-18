import {
  getJavaScriptVersion
} from "../lib/conditional_statements";

// If statement
test("If statement", () => {
  const ver_1 = getJavaScriptVersion("ES5");
  const ver_2 = getJavaScriptVersion("ES6");
  const ver_3 = getJavaScriptVersion("ES7");
  const ver_4 = getJavaScriptVersion("Foo");
  expect(ver_1).toBe("ECMAScript 5");
  expect(ver_2).toBe("ECMAScript 2015");
  expect(ver_3).toBe("ECMAScript 2016");
  expect(ver_4).toBe("Input a version of a specific JavaScript version.");
});

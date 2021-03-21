import {
  removeDuplicateSpace
} from "../lib/string";

test("Remove duplicate space", () => {
  const str = "a     b    c      d";
  const newStr = removeDuplicateSpace(str);
  expect(newStr).toBe("a b c d");
});
});

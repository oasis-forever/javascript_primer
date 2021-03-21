import {
  removeDuplicateSpace,
  getURLHostName,
  getURLQueryString
} from "../lib/string";

test("Remove duplicate space", () => {
  const str = "a     b    c      d";
  const newStr = removeDuplicateSpace(str);
  expect(newStr).toBe("a b c d");
});

test("Get strings from a text", () => {
  const text = "You said good-bye and I said hello.";
  const str_1 = text.slice(4);
  const str_2 = text.substring(4);
  expect(str_1).toBe("said good-bye and I said hello.");
  expect(str_2).toBe("said good-bye and I said hello.");
  const str_3 = text.slice(2, 8);
  const str_4 = text.substring(2, 8);
  expect(str_3).toBe("u said");
  expect(str_4).toBe("u said");
  const str_5 = text.slice(-1);
  const str_6 = text.substring(-1); // same as text.substring(0);
  expect(str_5).toBe(".");
  expect(str_6).toBe("You said good-bye and I said hello.");
  const str_7 = text.slice(9, 3);
  const str_8 = text.substring(9, 3); // same as text.substring(3, 9);
  expect(str_7).toBe("");
  expect(str_8).toBe(" said ");
});

test("Get a host name from a URL", () => {
  const url  = "https://example.com?param=1";
  const host = getURLHostName(url);
  expect(host).toBe("https://example.com");
});

test("Get a query string from a URL", () => {
  const url = "https://example.com?param=1";
  const querystr = getURLQueryString(url);
  expect(querystr).toBe("param=1");
});

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
  const str1 = text.slice(4);
  const str2 = text.substring(4);
  expect(str1).toBe("said good-bye and I said hello.");
  expect(str2).toBe("said good-bye and I said hello.");
  const str3 = text.slice(2, 8);
  const str4 = text.substring(2, 8);
  expect(str3).toBe("u said");
  expect(str4).toBe("u said");
  const str5 = text.slice(-1);
  const str6 = text.substring(-1); // same as text.substring(0);
  expect(str5).toBe(".");
  expect(str6).toBe("You said good-bye and I said hello.");
  const str7 = text.slice(9, 3);
  const str8 = text.substring(9, 3); // same as text.substring(3, 9);
  expect(str7).toBe("");
  expect(str8).toBe(" said ");
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

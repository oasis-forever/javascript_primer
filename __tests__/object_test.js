import {
  getUserName1,
  getUserName2,
  getLanguages1,
  getLanguages2
} from "../lib/object";

// Access properties
test("Get username 1", () => {
  const user = {
    name: "Oasist"
  }
  const username = getUserName1(user);
  expect(username).toBe("Oasist");
});

test("Get username 2", () => {
  const user = {
    name: "Oasist"
  }
  const username = getUserName2(user);
  expect(username).toBe("Oasist");
});

// Destructuring assignment
test("Get language 1", () => {
  const langs = {
    en: "English",
    ja: "Japanese"
  }
  const langs_arr = getLanguages1(langs);
  const english   = langs_arr[0];
  const japanese  = langs_arr[1];
  expect(english).toBe("English");
  expect(japanese).toBe("Japanese");
});

test("Get language 2", () => {
  const langs = {
    en: "English",
    ja: "Japanese"
  }
  const langs_arr = getLanguages2(langs);
  const english   = langs_arr[0];
  const japanese  = langs_arr[1];
  expect(english).toBe("English");
  expect(japanese).toBe("Japanese");
});

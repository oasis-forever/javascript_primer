import {
  getUserName1,
  getUserName2,
  getLanguages1,
  getLanguages2,
  addProperty1,
  addProperty2
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
  const langsArr = getLanguages1(langs);
  const english   = langsArr[0];
  const japanese  = langsArr[1];
  expect(english).toBe("English");
  expect(japanese).toBe("Japanese");
});

test("Get language 2", () => {
  const langs = {
    en: "English",
    ja: "Japanese"
  }
  const langsArr = getLanguages2(langs);
  const english   = langsArr[0];
  const japanese  = langsArr[1];
  expect(english).toBe("English");
  expect(japanese).toBe("Japanese");
});

// Add property
test("Add property 1", () => {
  const key  = "name";
  const val  = "Oasist";
  const user = addProperty1(key, val);
  expect(user).toStrictEqual({ name: "Oasist" })
});

test("Add property 2", () => {
  const key  = "name";
  const val  = "Oasist";
  const user = addProperty2(key, val);
  expect(user).toStrictEqual({ name: "Oasist" })
});

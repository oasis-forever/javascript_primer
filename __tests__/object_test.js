import {
  getUserName1,
  getUserName2,
  getLanguages1,
  getLanguages2,
  addProperty1,
  addProperty2,
  getProgrammingLanguages
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
  // Property presence
  expect("en" in langs).toBe(true);
  expect(langs.hasOwnProperty("en")).toBe(true);
  expect("ja" in langs).toBe(true);
  expect(langs.hasOwnProperty("ja")).toBe(true);
  // Delete property
  delete langs.en;
  expect(langs).toStrictEqual({ ja: "Japanese" });
  // Property presence
  expect("en" in langs).toBe(false);
  expect(langs.hasOwnProperty("en")).toBe(false);
  expect("ja" in langs).toBe(true);
  expect(langs.hasOwnProperty("ja")).toBe(true);
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
  // Property presence
  expect("en" in langs).toBe(true);
  expect(langs.hasOwnProperty("en")).toBe(true);
  expect("ja" in langs).toBe(true);
  expect(langs.hasOwnProperty("ja")).toBe(true);
  // Delete property
  delete langs.ja;
  expect(langs).toStrictEqual({ en: "English" });
  // Property presence
  expect("en" in langs).toBe(true);
  expect(langs.hasOwnProperty("en")).toBe(true);
  expect("ja" in langs).toBe(false);
  expect(langs.hasOwnProperty("ja")).toBe(false);
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

// Optional chaining operator
test("Get nested property", () => {
  const pLangs = getProgrammingLanguages();
  const staticLang  = pLangs?.["staticLang"]
  const dynamicLang = pLangs?.["dynamicLang"]
  const nonExistent = pLangs?.markup?.foo
  expect(staticLang).toStrictEqual(["C", "C++", "Java"])
  expect(dynamicLang).toStrictEqual(["Python", "Python", "PHP", "JavaScript"])
  expect(nonExistent).toBe(undefined)
});

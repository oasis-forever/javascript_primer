import {
  getVectorElement,
  getMatrixElement,
  getLangIndex,
  getSingerIndex,
  getSingerElement,
} from "../lib/array";

// Access elememts
test("Get vector elements", () => {
  const denseVector  = ["a", "b", "c", "d"]
  const sparseVector = ["a", "b", , "d"]
  const denseA  = getVectorElement(denseVector, 0);
  const denseB  = getVectorElement(denseVector, 1);
  const denseC  = getVectorElement(denseVector, 2);
  const denseD  = getVectorElement(denseVector, 3);
  const sparseA = getVectorElement(sparseVector, 0);
  const sparseB = getVectorElement(sparseVector, 1);
  const sparseC = getVectorElement(sparseVector, 2);
  const sparseD = getVectorElement(sparseVector, 3);
  expect(denseA).toBe("a");
  expect(denseB).toBe("b");
  expect(denseC).toBe("c");
  expect(denseD).toBe("d");
  expect(sparseA).toBe("a");
  expect(sparseB).toBe("b");
  expect(sparseC).toBe(undefined);
  expect(sparseD).toBe("d");
});

test("Get mactix elements", () => {
  const matrix = [
    ["a", "b"],
    ["c", "d"]
  ];
  const a  = getMatrixElement(matrix, 0, 0);
  const b  = getMatrixElement(matrix, 0, 1);
  const c  = getMatrixElement(matrix, 1, 0);
  const d  = getMatrixElement(matrix, 1, 1);
  const dd = getMatrixElement(matrix, matrix.length-1, matrix.length-1);
  const e  = getMatrixElement(matrix, 1, 2);
  expect(a).toBe("a");
  expect(b).toBe("b");
  expect(c).toBe("c");
  expect(d).toBe("d");
  expect(dd).toBe("d");
  expect(e).toBe(undefined);
  expect(() => {
    getMatrixElement(arr, 2, 2);
  }).toThrow();
});

test("Check if the object is an array", () => {
  const arr = [];
  const obj = {};
  expect(Array.isArray(arr)).toBe(true);
  expect(Array.isArray(obj)).toBe(false);
});

// Destructuring assignment
test("Check if the object is an array", () => {
  const vector = ["a", "b", "c", "d"];
  const [a, b, c, d] = vector
  expect(a).toBe("a")
  expect(b).toBe("b");
  expect(c).toBe("c");
  expect(d).toBe("d");
})

// Index/element reference
test("Get an index of an array element", () => {
  const langs   = ["Java", "Python", "Ruby", "JavaScript"];
  const javaIdx = getLangIndex(langs, "Java");
  const pyIdx   = getLangIndex(langs, "Python");
  const rbIdx   = getLangIndex(langs, "Ruby");
  const jsIdx   = getLangIndex(langs, "JavaScript");
  const tsIdx   = getLangIndex(langs, "TypeScript");
  expect(javaIdx).toBe(0);
  expect(pyIdx).toBe(1);
  expect(rbIdx).toBe(2);
  expect(jsIdx).toBe(3);
  expect(tsIdx).toBe(-1);
  const indexArr1 = langs.slice(1, 3);
  const indexArr2 = langs.slice(2);
  const indexArr3 = langs.slice(-1);
  const indexArr4 = langs.slice(1, 1);
  const indexArr5 = langs.slice(2, 1);
  expect(indexArr1).toStrictEqual(["Python", "Ruby"]);
  expect(indexArr2).toStrictEqual(["Ruby", "JavaScript"]);
  expect(indexArr3).toStrictEqual(["JavaScript"]);
  expect(indexArr4).toStrictEqual([]);
  expect(indexArr5).toStrictEqual([]);
  const result_1 = langs.includes("Java");
  const result_2 = langs.includes("Python");
  const result_3 = langs.includes("Ruby");
  const result_4 = langs.includes("JavaScript");
  const result_5 = langs.includes("TypeScript");
  expect(result_1).toBe(true);
  expect(result_2).toBe(true);
  expect(result_3).toBe(true);
  expect(result_4).toBe(true);
  expect(result_5).toBe(false);
});

test("Get an index object elements", () => {
  const singers = [
    { name: "Noel Gallagher" },
    { name: "Liam Gallagher" },
    { name: "Michal Jackson" },
    { name: "Freddie Mercury" }
  ]
  const noelIdx = getSingerIndex(singers);
  expect(noelIdx).toBe(0);
});

test("Get an element of object elements", () => {
  const singers = [
    { name: "Noel Gallagher" },
    { name: "Liam Gallagher" },
    { name: "Michal Jackson" },
    { name: "Freddie Mercury" }
  ]
  const noelIdx = getSingerElement(singers);
  expect(noelIdx).toStrictEqual({ name: "Noel Gallagher" });
});

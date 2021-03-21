import {
  getVectorElement,
  getMatrixElement
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
  expect(Array.isArray(arr)).toBe(true)
  expect(Array.isArray(obj)).toBe(false)
});

// Destructuring assignment
test("Check if the object is an array", () => {
  const vector = ["a", "b", "c", "d"]
  const [a, b, c, d] = vector
  expect(a).toBe("a");
  expect(b).toBe("b");
  expect(c).toBe("c");
  expect(d).toBe("d");
});

import {
  defaultArgFunc,
  falsyAcceptiveFunc,
  falsyRejectingFunc
} from "../lib/functions_and_statements";

// Fuxntions dealing with a default argument
test("Fuction with default argument", () =>{
  const text_1 = defaultArgFunc("string");
  const text_2 = defaultArgFunc("string", "Custom ");
  expect(text_1).toBe("Default string")
  expect(text_2).toBe("Custom string")
});

test("Fuction acceptive to a falsy value", () =>{
  // Non falsy
  const text_1 = falsyAcceptiveFunc("string");
  const text_2 = falsyAcceptiveFunc("string", "Custom ");
  expect(text_1).toBe("Default string")
  expect(text_2).toBe("Custom string")
  // Falsy
  const text_3 = falsyAcceptiveFunc("string", false);
  const text_4 = falsyAcceptiveFunc("string", undefined);
  const text_5 = falsyAcceptiveFunc("string", null);
  const text_6 = falsyAcceptiveFunc("string", 0);
  const text_7 = falsyAcceptiveFunc("string", 0n);
  const text_8 = falsyAcceptiveFunc("string", NaN);
  const text_9 = falsyAcceptiveFunc("string", "");
  expect(text_3).toBe("Default string")
  expect(text_4).toBe("Default string")
  expect(text_5).toBe("Default string")
  expect(text_6).toBe("Default string")
  expect(text_7).toBe("Default string")
  expect(text_8).toBe("Default string")
  expect(text_9).toBe("Default string")
});

test("Fuction rejecting a falsy value", () =>{
  // Non falsy
  const text_1 = falsyRejectingFunc("string");
  const text_2 = falsyRejectingFunc("string", "Custom ");
  expect(text_1).toBe("Default string")
  expect(text_2).toBe("Custom string")
  // Falsy
  const text_3 = falsyRejectingFunc("string", false);
  const text_4 = falsyRejectingFunc("string", undefined);
  const text_5 = falsyRejectingFunc("string", null);
  const text_6 = falsyRejectingFunc("string", 0);
  const text_7 = falsyRejectingFunc("string", 0n);
  const text_8 = falsyRejectingFunc("string", NaN);
  const text_9 = falsyRejectingFunc("string", "");
  expect(text_3).toBe("falsestring")
  expect(text_4).toBe("Default string")
  expect(text_5).toBe("Default string")
  expect(text_6).toBe("0string")
  expect(text_7).toBe("0string")
  expect(text_8).toBe("NaNstring")
  expect(text_9).toBe("string")
});

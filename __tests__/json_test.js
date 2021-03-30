"use strict;"

import {
  parseJSON,
  stringifyObject
} from "../lib/json";


test("parseJSON", () => {
  const json_1 = '{ "id": 1, "name": "Oasist" }';
  const json_2 = '["Foo", "Bar", "Piyo", "Hoge"]';
  const obj_1  = parseJSON(json_1);
  const obj_2  = parseJSON(json_2);
  expect(obj_1).toStrictEqual({ id: 1, name: "Oasist" })
  expect(obj_2).toStrictEqual(["Foo", "Bar", "Piyo", "Hoge"])
  // Exception
  const text  = "FooBarPiyoHoge";
  const error = parseJSON(text);
  expect(error).toStrictEqual("Unexpected token F in JSON at position 0")
})

test("stringifyObject", () => {
  const obj  = { id: 1, name: "Oasist", age: null };
  const json = stringifyObject(obj);
  expect(json).toStrictEqual('{"id":1,"name":"Oasist"}')
})

"use strict;"

import {
  newMap,
  setMap,
  getKeys,
  getValues,
  getEntries,
  ShoppingCart,
  setWeakMap
} from "../lib/map_and_set";

test("newMap", () => {
  const entry = [
    ["key_1", "value_1"],
    ["key_2", "value_2"]
  ];
  const map = newMap(entry);
  expect(map.get("key_1")).toBe("value_1");
  expect(map.get("key_2")).toBe("value_2");
});

test("setMap", () => {
  const map = setMap();
  expect(map.has(undefined)).toBe(true);
  expect(map.get(undefined)).toBe(undefined);
  map.set("Foo", "Bar");
  expect(map.has("Foo")).toBe(true)
  expect(map.get("Foo")).toBe("Bar");
  map.set("Hoge", "Piyo");
  expect(map.has("Hoge")).toBe(true);
  expect(map.get("Hoge")).toBe("Piyo");
  map.set("Hoge", "FooBarPiyo");
  expect(map.get("Hoge")).toBe("FooBarPiyo");
  map.delete(undefined);
  expect(map.has(undefined)).toBe(false);
  map.delete("Foo");
  expect(map.has("Foo")).toBe(false);
  map.delete("Hoge");
  expect(map.has("Hoge")).toBe(false);
});

test("getKeys", () => {
  const entry = [
    ["key_1", "value_1"],
    ["key_2", "value_2"]
  ];
  const map = newMap(entry);
  const keys = getKeys(map);
  expect(keys).toStrictEqual(["key_1", "key_2"]);
});

test("getValues", () => {
  const entry = [
    ["key_1", "value_1"],
    ["key_2", "value_2"]
  ];
  const map  = newMap(entry);
  const vals = getValues(map);
  expect(vals).toStrictEqual(["value_1", "value_2"]);
});

test("getEntries", () => {
  const entry = [
    ["key_1", "value_1"],
    ["key_2", "value_2"]
  ];
  const map = newMap(entry);
  const entries = getEntries(map);
  expect(entries).toStrictEqual(["key_1: value_1", "key_2: value_2"]);
});

test("shoppingCart", () => {
  const shoppingCart = new ShoppingCart();
  const items = [
    { name: "Apple", price: 200},
    { name: "Orange", price: 150}
  ];
  shoppingCart.addToCart(items[0]);
  shoppingCart.addToCart(items[0]);
  shoppingCart.addToCart(items[1]);
  const sum = shoppingCart.getTotalPrice();
  expect(sum).toBe(550);
  const itemsInCart = shoppingCart.getItemsInCart()
  expect(itemsInCart).toBe("Apple: 2, Orange: 1");
});

test("setWeakMap", () => {
  let obj = {};
  const map = setWeakMap(obj, "value");
  expect(map.get(obj)).toBe("value");
  obj = null;
  expect(map.get(obj)).toBe(undefined);
});

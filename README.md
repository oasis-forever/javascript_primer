## 1. Environment

* WSL(Ubuntu 20.04.1 LTS (GNU/Linux 4.19.128-microsoft-standard x86_64))
* node v14.16.0
* npm 7.6.3

## 2. Reference

* [JavaScript Primer](https://jsprimer.net/)
* [JavaScriptでも単体テストを導入しよう！ってかテストって何？](https://sbfl.net/blog/2019/01/20/javascript-unittest/)
* [JEST > Using Matchers](https://jestjs.io/docs/using-matchers)

## 3. JEST install for Unit Test

### 3-1. Build a Node.js project

```bash
$ npm init
```

You will be asked some questions, but just keep tapping "Enter" key.

### 3-2. Install required packages

```bash
$ npm install --save-dev jest babel-jest babel-core@^7.0.0-bridge.0 @babel/core @babel/preset-env
```

### 3-3. Install a plugin with babel to convert JEST to CommonJS

```bash
$ npm install --save-dev @babel/plugin-transform-modules-commonjs
```

### 3-4. Run a unittest

To execuate all unittests, run `npx jest`.

```bash
$ npx jest
 PASS  __tests__/hello.test.js (24.047 s)
  ✓ Hello (3 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        48.781 s
Ran all test suites.
```

---

To execuate a unittest, run `npx jest ./__test__/{filename}_test.js`.

```bash
$ npx jest ./__tests__/variables_and_statements.test.js
PASS  __tests__/variables_and_statements.test.js (14.711 s)
 ✓ State constants (2 ms)
 ✓ Override a defined constant (14 ms)
 ✓ Override a defined let (1 ms)
 ✓ Override a defined variable

Test Suites: 1 passed, 1 total
Tests:       4 passed, 4 total
Snapshots:   0 total
Time:        30.508 s
Ran all test suites matching /__tests__\/variables_and_statements.test.js/i.
```

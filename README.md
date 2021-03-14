## 1. Environment

* WSL(Ubuntu 20.04.1 LTS (GNU/Linux 4.19.128-microsoft-standard x86_64))
* node v14.16.0
* npm 7.6.3

## 2. Reference

* [JavaScript Primer](https://jsprimer.net/)
* [JavaScriptでも単体テストを導入しよう！ってかテストって何？](https://sbfl.net/blog/2019/01/20/javascript-unittest/)

## 3. JEST install for Unit Test

1. Build a Node.js project

```bash
$ npm init
```

You will be asked some questions, but just keep tapping "Enter" key.

2. Install required packages

```bash
$ npm install --save-dev jest babel-jest babel-core@^7.0.0-bridge.0 @babel/core @babel/preset-env
```

3. Install a plugin with babel to convert JEST to CommonJS

```bash
$ npm install --save-dev @babel/plugin-transform-modules-commonjs
```

4. Try a unittest

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

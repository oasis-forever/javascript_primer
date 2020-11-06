import { hello } from '../lib/hello';

test('Hello', () => {
  expect(hello('Oasist')).toBe("Hello, Oasist");
});

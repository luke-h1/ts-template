import { hello } from '../src/index';

describe('hello', () => {
  test('it returns hello world', () => {
    const text = hello();
    expect(text).toEqual('hello world!');
  });
});

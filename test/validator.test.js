import Validator from "../src/validator.js";

test('True name', () => {
  const isValid = new Validator().validateUsername('jk-_jn123nq');
  expect(isValid).toBe(true);
});

test.each([
  ['1jkjnnq'],
  ['jkjnnq2'],
  ['jkj1112nnq'],
  ['-jkjnnq'],
  ['jkjnnq-'],
  ['jkjnnq_'],
  ['_jkjnnq'],
])
('testing false results %n name', (name) => {
  const isValid = new Validator().validateUsername(name);
  expect(isValid).toBe(false);
});
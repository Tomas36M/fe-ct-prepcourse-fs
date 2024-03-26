const invocarCallback = require('../ejercicios/01.js');

test('Debe invocar/ejecutar el callback', function () {
  const cb = jest.fn();
  invocarCallback(cb);
  expect(cb).toHaveBeenCalled();
});

var encrypted = require('./index.js');

console.log(encrypt.encrypt(encrypt.encrypt('Slobodan Djordjevic')));

var assert = require('assert');
describe('ROT13', function() {
  it('Should match Slobodan Djordjevic after decrypted', function() {
    assert.equal('Slobodan Djordjevic', encrypted.encrypt(encrypted.encrypt('Slobodan Djordjevic')));
  });
});

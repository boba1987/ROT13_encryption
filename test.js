var encrypted = require('./index.js');
var assert = require('assert');

describe('ROT13', function() {
  var phrase = "You only need one Boba to rule them all";
  var encryptedPhrase;

  it('Should NOT match "'+ phrase +'" after encrypted', function() {
    encryptedPhrase = encrypted.encrypt(phrase);
    assert.notEqual(encryptedPhrase, phrase);
  });

  it('Should MATCH "'+ phrase +'" after decrypted', function() {
    assert.equal(encrypted.encrypt(encryptedPhrase), phrase);
  });
});

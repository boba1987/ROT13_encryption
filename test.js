var encrypted = require('./index.js');
var pharse = 'You only need one Boba to rule them all';
var encryptedPhrase;

var assert = require('assert');
describe('ROT13', function() {
  it('Should not match ' + pharse + ' after encrypted', function() {
    encryptedPhrase = encrypted.encrypt(pharse);
  });
  
  it('Should match ' + pharse + ' after encrypted', function() {
    encrypted.encrypt(encryptedPhrase);
  });
});

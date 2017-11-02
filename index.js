/**
Javascript ROT13 implementation
- Works in both directions - encrypt -> decrypt
**/

exports.encrypt = function(string) {
  var encrypted = "";
  for (var i=0; i<string.length; i++){
      if (string[i].charCodeAt(0) <= 127 && string[i].charCodeAt(0) >= 32) {
          encrypted += String.fromCharCode(159 - string[i].charCodeAt(0));
      } else {
          encrypted += string[i];
      }
  }

  return encrypted;
}

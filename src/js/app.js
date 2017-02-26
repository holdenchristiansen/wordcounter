(function() {
  'use strict';

  var input = document.querySelector('#in');
  var output = document.querySelector('#out');
  var words;
  var wordCounted;
  var wordLen;

  var wordCount = function(str) {
    // Split str at any non-alphabetic character
    words = str.split(/[^a-zA-Z]+/);

    words.forEach(function(word) {
      wordLen = word.length;

      if (word && wordLen > 1) {
        wordCounted = word[0] + (wordLen - 2) + word[wordLen - 1];
        str = str.replace(word, wordCounted);
      }
    });

    return str;
  };

  var setOutput = function() {
    output.innerHTML = wordCount(input.value);
  };

  input.focus();
  input.onkeydown = function() {
    setTimeout(setOutput, 200);
  };
}());

var words = ["ground", "control", "to", "major", "tom"];

var howLong = function(words) {
  return words.length;
};

var biggify = function(words) {
  return words.toUpperCase();
};

var reverse = function(words) {
  return words.split('').reverse().join('');
};

function updater(array, callback) {
  var outputArr = [];

  for (var item of array) {
    outputArr.push(callback(item));
  }

  return outputArr;
};

console.log(updater(words, howLong));
console.log(updater(words, biggify));
console.log(updater(words, reverse));

// EXPECTED OUTPUT

// [6, 7, 2, 5, 3]

// [ "GROUND", "CONTROL", "TO", "MAJOR", "TOM" ]

// [ 'dnuorg', 'lortnoc', 'ot', 'rojam', 'mot' ]
function mostCommonWords () {}

mostCommonWords.prototype.search = function (words, options) {

  var frequencyWords = {};

  for(var i=0,max=words.length; i<max; i++) {

    var word = (!!options && options.caseSensitive) ? words[i] : words[i].toLowerCase();

    if(!frequencyWords[word]) {
      frequencyWords[word] = 1;
    } else {
      frequencyWords[word]++;
    }

  }

  return frequencyWords;

};

mostCommonWords.prototype.sortWords = function (frequencyWords) {

  var mostCommon = [];

  var frequencies = Object.keys(frequencyWords).map(function ( key ) {
    return frequencyWords[key];
  });
  var maxFrequency = Math.max.apply( null, frequencies );

  for( var prop in frequencyWords ) {
    if( frequencyWords[ prop ] === maxFrequency ) mostCommon.push(prop);
  }

  return mostCommon.sort(function(a, b){
    if(a < b) return -1;
    if(a > b) return 1;
    return 0;
  });

}

module.exports = mostCommonWords;

function mostCommonWords () {}

mostCommonWords.prototype.search = function (words) {

  var frequencyWords = {};

  for(var i=0,max=words.length; i<max; i++) {

    var word = words[i].toLowerCase();

    if(!frequencyWords[word]) {
      frequencyWords[word] = 1;
    } else {
      frequencyWords[word]++;
    }

  }

  return frequencyWords;

};

mostCommonWords.prototype.sortWords = function (frequencyWords) {

  var frequencies = Object.keys(frequencyWords).map(function ( key ) {
    return frequencyWords[key];
  });
  var maxFrequency = Math.max.apply( null, frequencies );

  for( var prop in frequencyWords ) {
    if( frequencyWords[ prop ] === maxFrequency ) return prop;
  }

}

module.exports = mostCommonWords;

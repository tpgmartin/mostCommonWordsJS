var assert = require('assert'),
    MostCommonWords = require('./index');

    mostCommonWords = new MostCommonWords();

// TODO:
//     1. Return complete row correctly up to n = k
//     2. Stack rows on top of each other up to max n
describe('mostCommonWords', function() {

    it('should return word for input array of single word', function () {
        var input = [ 'word' ];

        var output = mostCommonWords.search(input)

        assert.equal(output, 'word');
    });

});

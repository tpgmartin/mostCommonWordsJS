var assert = require('assert'),
    MostCommonWords = require('./index');

    mostCommonWords = new MostCommonWords();

// TODO:
//     1. Handle case of multiple most frequently occuring words
describe('mostCommonWords', function() {

    it('should return word for input array of single word', function () {
        var input = [ 'word' ];

        var output = mostCommonWords.search(input)

        assert.equal(Object.keys(output)[0], 'word');
    });

    it('should return object containing each word and frequecy in array', function () {
        var input = [ 'Her', 'father', 'farmed', '80', 'acres', 'and', 'her', 'mother', 'worked', 'hard' ];

        var output = mostCommonWords.search(input)

        assert.deepEqual(output, { '80': 1, her: 2, father: 1, farmed: 1, acres: 1, and: 1, mother: 1, worked: 1, hard: 1 });
    });

    it('should return most frequently occuring word in array', function () {
        var input = [ 'Her', 'father', 'farmed', '80', 'acres', 'and', 'her', 'mother', 'worked', 'hard' ];

        var freqWords = mostCommonWords.search(input);
        var output = mostCommonWords.sortWords(freqWords)

        assert.equal(output, 'her');
    });

});

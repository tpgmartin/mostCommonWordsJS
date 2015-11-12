var assert = require('assert'),
    MostCommonWords = require('./index');

    mostCommonWords = new MostCommonWords();

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

    it('should handle case sensitivity in options object', function () {
        var input = [ 'Blah', 'Blah', 'Blah', 'blah', 'blah' ];

        var freqWords = mostCommonWords.search(input, { 'caseSensitive': true });
        var output = mostCommonWords.sortWords(freqWords);

        assert.equal(output, 'Blah');
    });

    it('should return most frequently occuring words in array if all equally frequent', function () {
        var input = [ 'a', 'b', 'c' ];

        var freqWords = mostCommonWords.search(input);
        var output = mostCommonWords.sortWords(freqWords)

        assert.deepEqual(output, [ 'a', 'b', 'c' ]);
    });

    it('should return most frequently occuring words in array in alphabetical order', function () {
        var input = [ 'b', 'a', 'c' ];

        var freqWords = mostCommonWords.search(input);
        var output = mostCommonWords.sortWords(freqWords)

        assert.deepEqual(output, [ 'a', 'b', 'c' ]);
    });

    it('should return most frequently occuring words in array in alphabetical order, if taking case into account', function () {
        var input = [ 'a', 'A', 'c' ];

        var freqWords = mostCommonWords.search(input, { 'caseSensitive': true });
        var output = mostCommonWords.sortWords(freqWords)

        assert.deepEqual(output, [ 'A', 'a', 'c' ]);
    });

});

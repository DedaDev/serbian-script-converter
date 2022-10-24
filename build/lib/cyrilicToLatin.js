"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cyrilicToLatin = void 0;
const alphabet_1 = require("../utils/alphabet");
const shared_1 = require("../utils/shared");
function cyrilicToLatin(sentence) {
    const sentenceWords = (0, shared_1.convertSentencesToWords)(sentence);
    const latinWords = sentenceWords.map(w => convertCyrilicToLatinWord(w));
    return latinWords.join(" ");
}
exports.cyrilicToLatin = cyrilicToLatin;
function convertCyrilicToLatinWord(word) {
    const latinArray = cyrilicToLatinArray(word);
    return latinArray.join("");
}
function cyrilicToLatinArray(word) {
    const wordArray = word.split("");
    const latinArray = wordArray.map((wordElement) => {
        const index = alphabet_1.cyrilic.indexOf(wordElement);
        return alphabet_1.latin[index] || wordElement;
    });
    return latinArray;
}

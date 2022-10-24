"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.latinToCyrilic = void 0;
const alphabet_1 = require("../utils/alphabet");
const shared_1 = require("../utils/shared");
function latinToCyrilic(sentence) {
    const sentenceWords = (0, shared_1.convertSentencesToWords)(sentence);
    const cyrilicWords = sentenceWords.map(w => convertLatinToCyrilicWord(w));
    return cyrilicWords.join(" ");
}
exports.latinToCyrilic = latinToCyrilic;
function convertLatinToCyrilicWord(word) {
    const regexPattern = generateRegexPattern(word);
    const regexWithCapture = new RegExp(regexPattern, "gui");
    return word.replace(regexWithCapture, convertLatinToCyrilicLetter);
}
function doesItContainComplexLetter(word) {
    const formatedWord = word.replace(/[^a-zA-Z0-9 ]/g, "");
    return !alphabet_1.ignoredDoubleLettersWords.some((ignoredWord) => formatedWord.toLowerCase().startsWith(ignoredWord));
}
function generateRegexPattern(word) {
    const { twoLetters, oneLetter } = getComplexAndNonComplexLetters();
    const shouldAddTwoLetters = doesItContainComplexLetter(word);
    const twoLettersRegexString = shouldAddTwoLetters ? twoLetters.join("|") + "|" : "";
    return `(${twoLettersRegexString}[${oneLetter.join("")}])`;
}
function getComplexAndNonComplexLetters() {
    const twoLetters = alphabet_1.latin.filter((latinLetter) => latinLetter.length === 2);
    const oneLetter = alphabet_1.latin.filter((latinLetter) => latinLetter.length === 1);
    return { twoLetters, oneLetter };
}
function convertLatinToCyrilicLetter(letter) {
    if (!letter)
        return "";
    const indexInLatinArray = alphabet_1.latin.indexOf(letter);
    const cyrilicEquivalent = alphabet_1.cyrilic[indexInLatinArray];
    if (!cyrilicEquivalent)
        return letter;
    return cyrilicEquivalent;
}

import { cyrilic, latin, ignoredDoubleLettersWords } from "../utils/alphabet";
import { convertSentencesToWords } from "../utils/shared";


export function latinToCyrilic(sentence: string) {
    const sentenceWords = convertSentencesToWords(sentence);   
    const cyrilicWords = sentenceWords.map(w => convertLatinToCyrilicWord(w));
    return cyrilicWords.join(" ");
}

function convertLatinToCyrilicWord(word: string) {
    const regexPattern = generateRegexPattern(word);
    const regexWithCapture = new RegExp(regexPattern, "gui");
    return word.replace(regexWithCapture, convertLatinToCyrilicLetter);
}

function doesItContainComplexLetter(word: string) {
    const formatedWord = word.replace(/[^a-zA-Z0-9 ]/g, "");
    return !ignoredDoubleLettersWords.some((ignoredWord) => formatedWord.toLowerCase().startsWith(ignoredWord));
}

function generateRegexPattern(word: string) {
    const { twoLetters, oneLetter } = getComplexAndNonComplexLetters();
    const shouldAddTwoLetters = doesItContainComplexLetter(word);
    const twoLettersRegexString = shouldAddTwoLetters ? twoLetters.join("|") + "|" : "";
    return `(${twoLettersRegexString}[${oneLetter.join("")}])`;
}

function getComplexAndNonComplexLetters() {
    const twoLetters = latin.filter((latinLetter) => latinLetter.length === 2);
    const oneLetter = latin.filter((latinLetter) => latinLetter.length === 1);
    return { twoLetters, oneLetter };
}

function convertLatinToCyrilicLetter(letter: string) {
    if (!letter) return "";
    const indexInLatinArray = latin.indexOf(letter);
    const cyrilicEquivalent = cyrilic[indexInLatinArray];
    if (!cyrilicEquivalent) return letter;
    return cyrilicEquivalent;
}

import { cyrilic, latin } from "../utils/alphabet";
import { convertSentencesToWords } from "../utils/shared";

export function cyrilicToLatin(sentence: string) {
    const sentenceWords = convertSentencesToWords(sentence);   
    const latinWords = sentenceWords.map(w => convertCyrilicToLatinWord(w));
    return latinWords.join(" ");
}

function convertCyrilicToLatinWord(word: string) {
    const latinArray = cyrilicToLatinArray(word);
    return latinArray.join("");
}

function cyrilicToLatinArray(word: string): string[] {
    const wordArray = word.split("");
    const latinArray = wordArray.map((wordElement) => {
        const index = cyrilic.indexOf(wordElement);
        return latin[index] || wordElement;
    });
    return latinArray;
}

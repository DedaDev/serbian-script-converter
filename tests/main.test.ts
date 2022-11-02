import {describe, expect, test} from "@jest/globals";
import { cyrilicToLatin } from "../src/app";
import { latinToCyrilic } from "../src/app";

describe("words", () => {
    test("expect to convert complext latin words to cyrilic", () => {
        const latinEquivalent = latinToCyrilic("Anjon");
        expect(latinEquivalent).toBe("Анјон");
    });


    test("expect to convert latin to cyrilic", () => {
        const latinEquivalent = latinToCyrilic("moNitor");
        expect(latinEquivalent).toBe("моНитор");
    });

    test("expect to convert latin to cyrilic with complex letter", () => {
        const latinEquivalent = latinToCyrilic("Džak");
        expect(latinEquivalent).toBe("Џак");
    });

    test("expect to convert cyrilic to latin", () => {
        const cyrilicEquivalent = cyrilicToLatin("Даска");
        expect(cyrilicEquivalent).toBe("Daska");
    });
});


describe("full sentences", () => {
    test("expect to convert a latin to cyrilic sentence", () => {
        const cyrilicSentenceEquivalent = latinToCyrilic("u moje naselje isto kao u favele sa TV novele, anjoN");
        expect(cyrilicSentenceEquivalent).toBe("у моје насеље исто као у фавеле са ТВ новеле, анјоН");
    });
  

    test("expect to convert a latin to cyrilic sentence", () => {
        const latinSentenceEquivalent = cyrilicToLatin("да се трси ђЕдОвИнА ја сам за");
        expect(latinSentenceEquivalent).toBe("da se trsi đEdOvInA ja sam za");
    });

    test("expect to converert sentence with special character next to it", () => {
        const cyrilicSentenceEquivalent = latinToCyrilic("na vr' brda vrba mrda, !anjon,");
        expect(cyrilicSentenceEquivalent).toBe("на вр' брда врба мрда, !анјон,");
    });
});


describe("types passed", () => {
    test("does it convert if mixed script is passed to latin", () => {
        const cyrilicEquivalent = latinToCyrilic("то to то је то хајде да се ВоЛиМо");
        expect(cyrilicEquivalent).toBe("то то то је то хајде да се ВоЛиМо");
    });

    test("does it convert if mixed script is passed to cyrilic", () => {
        const cyrilicEquivalent = cyrilicToLatin("svetlo ми бије u oči");
        expect(cyrilicEquivalent).toBe("svetlo mi bije u oči");
    });
});

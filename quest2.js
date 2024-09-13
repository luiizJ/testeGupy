function countCharacterA(text) {
    const pattern = /a/gi;
    const occurrences = text.match(pattern);
    return occurrences ? occurrences.length : 0;
}

const sampleText = "Alguma String com várias letras A.";
const aCount = countCharacterA(sampleText);

if (aCount > 0) {
    console.log(`A letra 'a' aparece ${aCount} vez(es) na string.`);
} else {
    console.log("A letra 'a' não aparece na string.");
}

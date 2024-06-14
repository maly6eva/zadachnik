/**
 * Дано слово.
 * 1. Получите его последнюю букву.
 * 2. Если слово заканчивается на мягкий знак, то получите предпоследнюю букву.
 */
function getLastLetter(word) {
    const lastLetter = word[word.length - 1];

    if (lastLetter === 'ь') {
        return getLastLetter(word.slice(0, word.length - 1));
    }

    return lastLetter;
}

console.log(getLastLetter('фывфыDььььь'));

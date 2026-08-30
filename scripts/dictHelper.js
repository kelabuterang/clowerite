// Node script to build the complete 3,000+ Oxford 3000 & 5000 English-Indonesian Dictionary dataset
const fs = require('fs');
const path = require('path');

console.log('Building Oxford 3000 & 5000 Comprehensive Dictionary Dataset...');

// Helper to determine parts of speech and default properties if not specified
function makeEntry(id, word, pos, level, phonetic, indonesian, defId, defEn, syns, ants, sentence, para) {
  const capWord = word.charAt(0).toUpperCase() + word.slice(1);
  return {
    id: `dict-${id.toLowerCase().replace(/[^a-z0-9]/g, '-')}`,
    word: capWord,
    partOfSpeech: pos,
    level: level,
    phonetic: phonetic,
    indonesianTranslation: indonesian,
    detailedDefinition: {
      indonesian: defId,
      english: defEn
    },
    similarWords: syns ? syns.slice(0, 4) : [],
    synonyms: syns || [],
    antonyms: ants || [],
    sentenceExample: sentence || `Understanding the term "${word}" is essential for academic and everyday communication.`,
    paragraphExample: para || `In modern discourse, using "${word}" accurately enhances clarity and communicative precision across diverse contexts.`
  };
}

module.exports = { makeEntry };

// wordUtils.js
function wordCount(text) {
  // Split the text into words
  const words = text.split(/\s+/);

  // Count the occurrences of each word
  const wordCountMap = {};
  for (const word of words) {
      const normalizedWord = word.toLowerCase();
      wordCountMap[normalizedWord] = (wordCountMap[normalizedWord] || 0) + 1;
  }

  return wordCountMap;
}

function fuzzySearch(text, searchTerm) {
  // Split the text into words
  const words = text.split(/\s+/);

  // Count the occurrences of words containing the searchTerm
  const matchingWordCountMap = {};
  for (const word of words) {
      const normalizedWord = word.toLowerCase();
      const normalizedSearchTerm = searchTerm.toLowerCase();

      if (normalizedWord.includes(normalizedSearchTerm)) {
          matchingWordCountMap[normalizedWord] = (matchingWordCountMap[normalizedWord] || 0) + 1;
      }
  }

  return matchingWordCountMap;
}

module.exports = { wordCount, fuzzySearch };

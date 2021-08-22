function longestSubstring(arr) {
  const charArray = arr.join('').split('');

  let i = 0
  
  let longestLetter = {
    letter: '',
    length: 0
  }
  let currentLetter = {
    letter: '',
    length: 0
  }
  while (i < charArray.length) {
    letter = charArray[i]
    if (currentLetter.letter != letter) {
      currentLetter = {
        letter,
        length: 0
      };
    }
    currentLetter.length += 1;
    if (currentLetter.length > longestLetter.length) {
      longestLetter = { ...currentLetter }
    }
    i += 1;
  }
  return longestLetter
}

console.log(longestSubstring(['abcd','aabb','bbbcc']));
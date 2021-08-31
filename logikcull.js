//using while statement

function longestSubstr(arr) {
  const charArr = arr.join('').split('');

  let i = 0   
  
  let longestLetter = {
    letter: '',
    length: 0
  }
  let currentLetter = {
    letter: '',
    length: 0
  }

  while (i < charArr.length) {
    letter = charArr[i]
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



// using 'if' statement


function longestSubstring(arr) {
  const charArr = arr.join('').split('');
  
  let longestLetter = {
    letter: '',
    length: 0
  }
  let currentLetter = {
    letter: '',
    length: 0
  }
  
  for (i = 0; i < charArr.length; i++) {
    if (charArr[i] != currentLetter.letter) {
      let letter = charArr[i]
      currentLetter = {
        letter,
        length: 0
      };
    }
    currentLetter.length += 1;
    
    if (currentLetter.length > longestLetter.length) {
      longestLetter = { ...currentLetter }
    }
  }
 return longestLetter;
}


console.log(longestSubstr(['abcd','aabb','bbbcc']));
function isPalindrome(word) {
  // Write your algorithm here
  const palindromeCheck = word.split('').reverse().join('')
  if (word === palindromeCheck){
    return true
  } else {
    return false
  }
}

/* 
  Add your pseudocode here
  if word === word backwards
    return true
  anything  else
    return false
*/

/*
  Add written explanation of your solution here
  isPlaindrome takes in a word and checks if it is spelled the
  same backwards as it is forwards
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log(isPalindrome('mom'))
  console.log(isPalindrome('wow'))
  console.log(isPalindrome('Andy'))
}

module.exports = isPalindrome;

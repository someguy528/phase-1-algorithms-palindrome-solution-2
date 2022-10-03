function isPalindrome(word) {
  // Write your algorithm here
  for (let i=0; i<word.length/2;i++){
    if (word[i] !== word[word.length-1-i]) {
      return false
    }
  } return true
}

/* 
  Add your pseudocode here
  itterate over word
  detect if first index is identical to last, if not return false
  continue itterating and reach the middle to return true if test pass
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

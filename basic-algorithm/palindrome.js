//create palindrome
function palindrome(str) {
  var newStr = str.toLowerCase();
  console.log(newStr);
  var newStrReverse = newStr.split("").reverse().join("");
  if (newStr === newStrReverse) {
    return true;
  } else {
    return false;
  }
}

console.log(palindrome("26022022"));

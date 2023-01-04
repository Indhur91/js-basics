

// function that returns shortest words
var arr = ["aaaa", "aa", "aa", "aaaaa", "a", "aaaaaaaa"];

console.log(arr.reduce(function(a, b) {
    return a.length <= b.length ? a : b;
  })
)


// returns shortest words if array is passed
const words = ['ball', 'plant', 'bat', 'twelve', 'apples', 'banana'];

function getShortestWord(w) {
  let shortestWord = w[0];
  for(let i = 1;i < w.length; i++) {
    // it's just short circuit condition
    shortestWord.length > w[i].length && (shortestWord = w[i]);
  }
  return shortestWord;
}

console.log(getShortestWord(words));

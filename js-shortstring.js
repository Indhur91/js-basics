

// function that returns shortest words
var arr = ["aaaa", "aa", "aa", "aaaaa", "a", "aaaaaaaa"];

console.log(arr.reduce(function(a, b) {
    return a.length <= b.length ? a : b;
  })
)



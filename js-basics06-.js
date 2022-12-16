// function to return longest string

function longest_string(str_ara) {
    var max = str_ara[0].length;
    str_ara.map(v => max = Math.max(max, v.length)); //arr.map(function(element, index, array){  }, this);
    result = str_ara.filter(v => v.length == max);
    return result;
}

console.log(longest_string(['a', 'aa', 'aaa']));

// function to find length of shortest word in a sentence
function findshortest(s){
 let words = s.split("")
 let shortest = words[0].length
 for(let i =0; i < words.length; i++){
    if(shortest > words[i].length)shortest = words[i].length
 }
 return shortest;
}
 console.log(findshortest("the apple tree is a big"));
console.log("numbers", [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8].sort (function(a,b){return a - b}).reverse().filter (function(numbers){return numbers < 19}).map(function(x){return x* 1.5 - 1}).reduce(function(x,z){return x + z;}));




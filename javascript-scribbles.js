  /*
  var myNumbers = [ 2, 3, 5 ];
  var doubled   = myNumbers.map( x => x * 2)

  console.log( doubled );

  var myPals = ["Bryan","Landy", "Cam", "Ian", "Corey", "Taylor", "Megan"];

  var longNames =  myPals.filter(x => x.length > 4);

  var people = [
  {name: "Landy",friend: true},
  {name: "Corey",friend: true},
  {name: "Ted",friend: false},
  {name: "Sperry",friend: true},
  {name: "Bill",friend: false}
];

var friends = [];
people.forEach(person=>{
  if(person.friend === true){
    friends.push(person.name)
  }
})

var myName = [{first:"Michael",last:"Stillwell"}]

function makeName(firstName, lastName){
  return firstName + " " + lastName;
}

//code here

var firstLast = makeName( myName.first, myName.last );

console.log( makeName( myName[1], myName.last) )

var colorResponse = "black";

var responseCreator = function(param) {
  // CODE HERE
  if ( param == "red" ) {
    return "Green is okay.";
  } else if ( param == "red" ) {
    return "I heart red.";
  } else { 
    return "What is your favorite color?";
  }
  return param;
}

console.log( responseCreator(colorResponse) );

var age = 15;
var canDrive;


// CODE HERE
if ( age > 16 ) { 
  canDrive = true
} else { 
  canDrive = false
}; 

console.log( canDrive );

var myNam   = "Michael";
var faveNum = 23;
var me = "My name is " + myNam + " and my favorite number is " + faveNum + ".";

console.log( me );

var notHakeem = (myNam) => {
  if ( myName != "Hakkem" ) {
    return true;
  } 
}

console.log( notHakeem );

function sum(par) {
  return par + par;
}

console.log( sum(4) );

function greeter(name, num) {
  return "Hi! I am " + name + " and I am " + num + " years old!";
}

console.log( greeter( "yan", 2000 ) );

var trueFaveNum = (num) => {
  if ( num == faveNum ) {
    trueFaveNum = true;
  } else {
    trueFaveNum = false;
  }
  return trueFaveNum;
}

console.log( trueFaveNum(23) );

var responseCreator = function(param) {
  // CODE HERE
  if ( param == "green" ) {
    return "Green is okay";
  } else if ( param == "red" ) {
    return "I heart red";
  } else { 
    return "What is your favorite color?";
  }
  return param;
}

console.log( responseCreator("blue") );

console.log( Math.trunc(3.4) );


function truncateString(str, num) {
  // Clear out that junk in your trunk
  if ( num < 3 ) {
    return str.slice(0, num) + "...";
  } else if ( str.length > num ) {
    return str.slice(0, num - 3) + "...";
  } else if ( str.length <= num ) {
    return str;
  }
}

console.log( truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2) );

text_truncate = function(str, length, ending) {
    if (length == null) {
      length = 100;
    }
    if (ending == null) {
      ending = '...';
    }
    if (str.length > length) {
      return str.substring(0, length - ending.length) + ending;
    } else {
      return str;
    }
  };
console.log(text_truncate('We are doing JS string exercises.'))
console.log(text_truncate('We are doing JS string exercises.',19))
console.log(text_truncate('We are doing JS string exercises.',15,'!!'))


function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  if ( str.substr() === target ) {
    return true;
  } else {
    return false;
  }

  return str;
}

confirmEnding("Bastian", "n");



var count = 0;

function cc(card) {
  // Only change code below this line
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count += 1;
      break;
    case 7:
    case 8:
    case 9:
      count = count;
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count -= 1;
      break;
  }
  
  return count;
  // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
cc(2); cc(3); cc(10); cc('K'); cc('A');

console.log( count );


// Setup
function phoneticLookup(val) {
  var result = "";

  // Only change code below this line
  
  var lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  };
  result = lookup;
  // Only change code above this line
  return result;
}

// Change this value to test
console.log( phoneticLookup("charlie") );


// Setup
var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

// Only change code below this line
var gloveBoxContents = "";
console.log( gloveBoxContents = myStorage.car["glove box"] ); // Change this line

// Setup
var collection = {
  2548: {
    album: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: [ 
      "Let It Rock", 
      "You Give Love a Bad Name" 
    ]
  },
  2468: {
    album: "1999",
    artist: "Prince",
    tracks: [ 
      "1999", 
      "Little Red Corvette" 
    ]
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [ ]
  },
  5439: {
    album: "ABBA Gold"
  }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
if ( (value !== "") && (prop !== "tracks") ) {      
  collection[id][prop] = value;
  //Object.assign(collection[id], {[prop]: value} );
}

if ( !collection[id].hasOwnProperty("tracks") ) {
  collection[id].tracks = [];
}

if ( (prop === "tracks") && (value !== "") ) {
  collection[id].tracks.push(value);
}

if ( value === "" ) {
  delete collection[id][prop];
}

return collection;
}

// Alter values below to test your code
updateRecords(5439, "tracks", "ABBA");



console.log( collection[5439] );

/*
var ar = {
  "Y": "T",
  "U": "A"
}
ar["O"] = "P";
console.log(ar);
*/

/*
//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(firNam, prop){
// Only change code below this line
  return contacts[0][firNam];
// Only change code above this line
}

// Change these values to test your function
console.log( lookUpProfile("Akira", "likes") );

var stuff = [
  {
    "first" : "Fir",
    "second": "Sec"
  },
  {
    "first" : "r",
    "second": "c"
  }
]

function stuffStuff(fis, pop) {
  return stuff[0][fis];
}

console.log( stuffStuff("second", "second") );

var oldObject = { key1: 1, key2: 2, key3: 3 };
var newKey = "key4";
var newValue = 4;

Object.assign(oldObject, {newKey: newValue});

console.log( oldObject );

function factorialize(nu) {
  if ( nu <= 0 ) {
    return 1;
  } else {
    return ( nu * factorialize(nu - 1) );
  }
}

console.log( factorialize(5) );



function chunkArrayInGroups(arr, size) {
  // Break it up.
  var numOfSplits = Math.floor(arr.length / Math.floor(size));
  var newArray    = [];
  var splitArray  = [];
  var newOldArray = [];
  
  while ( numOfSplits !== 0 ) {
    numOfSplits--;
    
    splitArray = arr.slice(0, size);
    newArray.push(splitArray);
  } );
  
  //for ( var x = 0; x < numOfSplits; x++ ) {
  //  splitArray = arr.slice(0, size);
  //  newArray.push(splitArray);
  //}
  
  //if ( numOfSplits > 0 ) {
  //  splitArray = arr.slice(0, size);
  //}
  
  //newArray.push(splitArray);
  
  //return newArray;
}

chunkArrayInGroups(["a", "b", "c", "d", "e"], 2);
*/

/* Checks if the second string's letters are in the first string, 
   Example: "hello", "hey" returns false, "floor", "for" returns true!
function mutation(arr) {
  var nm   = [];
  var arr1 = arr[0].toLowerCase();

  if ( arr1.length > 2 ) {
    return "Too many words to compare, sorry.";
  }

  for ( var x = 0; x < arr[1].length; x++ ) {
    if ( arr1.indexOf(arr[1][x].toLowerCase()) != -1 ) {
      nm.push(1);
      //console.log( num );
    } else {
      nm.push(0);
      //console.log( num );
    }
  }

  if ( nm.indexOf(0) != -1 ) {
    //return false;
    console.log( "False" );
  } else {
    //return true;
    console.log( "True" );
  }
  
}


console.log( mutation(["hello", "hey"]) );

*/

/*  Break an array up in to smaller array's the size of the second argument
    Example: [1,2,3,4],2 returns [1,2],[3,4]  */
/*
function chunkArrayInGroups(arr, size) {
  return arr;
}

//console.log( chunkArrayInGroups(["a", "b", "c", "d"], 2) );

function myName() {
  return "ti";
}

let newMyName = myName();
*/


//function destroyer(arr) {
  //let val;
  // function test(arr) {
  //   let val = arr.filter(function(arg) {
  //     for ( let x = 0; x < arguments.length; x++ ) {
  //       if ( arguments[x] < arg ) {
  //         return true;
  //       }
  //     }
  //   });
  //   console.log( val );
  // }

  // console.log( test([1,2,3],5,3) );
  //console.log( val );
//}

// function destroyerNew(arr) {

//   let num = [];

//   for ( let x = 0; x < arguments.length; x++ ) {
//     nu
//   }

//   return arr.filter( function() {
//     return arr.indexOf() == arguments[1];
//   });
// }

//console.log( destroyer([1, 2, 3, 1, 2, 3], 2, 3, 4) );

// const testObj = {
//   name: "S",
//   age: 4,
//   role: ""
// }
// const isOldEnough = (obj) => obj.age >= 21 ? "Old enough" : "Not quite";

// console.log( isOldEnough(testObj) );

// const addRole = (user, str) => user.role = str;

// console.log( addRole(testObj, "Nane") );

// var user0 = {
//   name: 'James',
//   email: null,
//   flag: true
// }

// const updateUserInfo = (arr, prop, val, newE, newN) => {
//   for ( let x = 0; x < arr.length; x++ ) {
//     if ( arr[x][prop] === val ) {
//       arr[x].email = newE;
//       arr[x].name = newN;
//     }
//   }
//   return arr;
// } 

// console.log( updateUserInfo( [ user0 ], 'name', 'James', 'email@domain.com', 'Bob' ) );

// const schoolStatus = (status) => status === "good" ? "Wow, great job kiddo!" : "No more video games!";

// console.log( schoolStatus("dd") );

// const add = (num1, num2) => num1 + num2;

// const multiply = (num1, num2) => num1 * num2;

// const maff = (num1, num2, cb) => cb(num1, num2);

// console.log( maff(3, 4, add) );

// Bad practice, break in to if/else statements instead.
// const messageBasedOnAge = age => age < 18 ? "Not quite old enough" : age == 18 ? "Congrats on being an adult!" : "Wow, you're really getting up there, huh?";

// console.log( messageBasedOnAge(90) );

// const welcomeMessage = (first, last) => `Welcome to DevMountain ${first} ${last}`;

// const fullName = (firstName, lastName, cb) => cb(firstName, lastName);

// console.log( fullName("M","S", welcomeMessage) );

// const countBits = (n) => {
//   const bi = parseInt(n, 10).toString(2).split("");
//   let n1 = 0;
  
//   for ( let x = 0; x < bi.length; x++ ) {
//     if ( bi[x] == 1 ) {
//       n1 += 1;
//     }
//   }
  
//   return `this is bi: ${bi} and this is n1: ${n1}`;
// }

// function countBits(n) {
//   for(c=0;n;n>>=1)c+=n&1
//   return c;
// }

// const countBits = n => {
//   for ( x = 0; n; n >>= 1) {
//     x += n & 1;
//   }
//   return x;
// }

// console.log( countBits(3) );

// let n = 5
// console.log( n >>= 2 );

//  Works, but doesn't work for the question given :/
//  let funnyNums = (n,p) => {
//   let e = n.toString().split("").map(Number);

//   for ( let x = 0; x < e.length; x++ ) {
//     e[x] = e[x] ** (p + x);
//   }

//   const add = (num1, num2) => num1 + num2;

//   if ( e.reduce(add) == n ** p ) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log( funnyNums(89, 1) );

// const square = x => Math.pow(x, 2);
// console.log( square(2) );

// const digPow = (n,p) => {
//   let e = n.toString().split("").map(Number);

//   for ( let x = 0; x < e.length; x++ ) {
//     e[x] = Math.pow(e[x], (p + x));
//     // Either work, ** doesn't work with ES6 though
//     // e[x] = e[x] ** (p + x);
//   }

//   let i = e.reduce((num1, num2) => num1 + num2);

//   if ( i % n === 0 ) { return i / n } else { return -1 };
//   Or
//   return i % n ? -1 : i / n;

// };


// Quicker way of writing the the function above:
// function digPow(n, p) {
//   var x = String(n).split("").reduce((s, d, i) => s + Math.pow(d, p + i), 0)
//   return x % n ? -1 : x / n
// }

// console.log( digPow(46288, 3) );

// const humanYearsCatYearsDogYears = (humanYears) => {
//   humanYears >= 1 ? cY = 15 : cY = 0;
//   humanYears >= 1 ? dY = 15 : dY = 0;
//   humanYears >= 2 ? cY += 9 : cY = cY;
//   humanYears >= 2 ? dY += 9 : dY = dY;
//   humanYears == 3 ? cY += 4 : cY = cY;
//   humanYears == 3 ? dY += 5 : dY = dY;
//   // humanYears > 3 ? cY += 4 * humanYears : cY = cY;
//   // humanYears > 3 ? dY += 5 * humanYears : dY = dY;
//   // return dY;
//   // return cY;
//   return [humanYears,cY,dY]
// }

// console.log( humanYearsCatYearsDogYears(3) );

// const lowest = arr => {
//   let n = arr[0];
  // Regular for loop:
  // for ( let x = 0; x < arr.length; x++ ) {
    // Ternary way:
    // n < arr[x] ? n = arr[x] : n = n;
    // Normal if/else:
    // if ( n < arr[x] ) {
    //   n = arr[x];
    // } 
    // 
  // }
  // forEach with Ternary in an arrow function:
//   arr.forEach(x => x < n ? n = x : n = n);
//   arr.splice(arr.indexOf(n), 1);
//   // Return the new array:
//   return arr;
// }

// const maker = () => {
//   let a = [];
//   for ( let x = 1; x < 216; x++ ) { a.push(x) };
//   return a;
// }

// console.log( maker() );

// var getRandomArbitrary = function() {
//   return Math.floor(Math.random() * 30);
// };

// var numbers = [0,3,4,5,6,7,9,14,17,24,25,26,29,30];

// const finder = arr => {
//   let n = getRandomArbitrary();
  // for ( let x = 0; x < arr.length; x++ ) {
  //   if ( arr[x] === n ) {
  //     return "true" + n;
  //   } else {
  //     return "False" + n;
  //   }
  // }
  // if ( arr.includes(n) ) {
  //   return "true" + n; 
  // } else {
  //   return "false" + n;
  // }
  // arr.forEach(x => {
  //   if ( arr[x] = arr ) { 
  //     return "true" + n;
  //   } else {
  //     return "false" + n;
  //   }
  // });
// }

// console.log( finder(numbers) );


// Doesn't work for some reason?
// const looper = array => array.forEach(x => {
//   alert(array[x]);
// });
// looper(numbers);

// const ArR = [ 1, 2, 3, 4, 5];

// const addTen = array => {
//   let n = [];
//   for ( let x = 0; x < array.length; x++ ) {
//     n.push(Number(array[x])+10);
//   }
//   array.forEach(x => {
//     n.push(Number(x)+10);
//   });
//   return n;
// }

// console.log( addTen(ArR) );

// Removing all of the duplicate numbers -- won't work on strings or objects.
// const uniq = (a, cb) => {
//   let n = a.filter( (i, p) => {
//     return a.indexOf(i) == p;
//   });
//   cb(n);
// }

// class Employee {
//   constructor(first_name, last_name, email, age) {
//     this.first_name = first_name;
//     this.last_name  = last_name;
//     this.email      = email;
//     this.age        = age;
//   }
//   makeWidget() {
//     return `${this.first_name} ${this.last_name} Widget`;
//   }
// }

// let t = new Employee("Fir","Las","fasf",43);

// console.log( t.makeWidget() );

// const o = {
//   a: "shoo",
//   b: "shww",
//   c: "shw"
// }

// const secrets = obj => {
//   let s = "";
//   for ( let key in obj ) {
//     if ( obj[key].substring(0, 2) === "sh") {
//       s += " " + obj[key];
//     }
//   }
//   return s;
// }
// console.log( secrets(o) );

// const o = {
//   a: "Find my tresure",
//   b: "Lost my ww"
// }

// function hiddenTreasure(obj) {
//   for ( let key in obj ) {
//     if ( RegExp('\\b'+ "treasure" +'\\b').test(obj[key]) ) {
//       console.log("Meo");
//     } else {
//       console.log("no");
//     }
//   }
// }

// hiddenTreasure(o);

// // Do not edit the code below.
// const monstersInYourPocket = [{"monster":"Bulbabunny","CP":156},{"monster":"Bulbabunny","CP":135},
// {"monster":"Bulbabunny","CP":250},{"monster":"Ponylopse","CP":277},{"monster":"Ponylopse","CP":184},
// {"monster":"Pikadoughnet","CP":207},{"monster":"Bulbabunny","CP":139},{"monster":"Pikadoughnet","CP":47},
// {"monster":"Pikadoughnet","CP":175},{"monster":"WaterHorsia","CP":26},{"monster":"Ponylopse","CP":19},
// {"monster":"Pikadoughnet","CP":218},{"monster":"Charaflier","CP":101},{"monster":"WaterHorsia","CP":96},
// {"monster":"Pikadoughnet","CP":253},{"monster":"Sandmush","CP":146},{"monster":"Bulbabunny","CP":247},
// {"monster":"Charaflier","CP":55},{"monster":"Bulbabunny","CP":72},{"monster":"Pikadoughnet","CP":300},
// {"monster":"Sandmush","CP":262},{"monster":"Sandmush","CP":25},{"monster":"Charaflier","CP":215},
// {"monster":"Ponylopse","CP":125},{"monster":"Bulbabunny","CP":178}];
// // Do not edit the code above.
// // function strongest(arr) {
// //   let arr2 = [];
// //   for ( let x = 0; x < arr.length; x++ ) {
// //     for ( let key in arr[x] ) {
// //       if ( arr[x].CP > 200 ) {
// //         arr2.push(arr[x]);
// //       }
// //     }
// //   }
// //   return arr2;
// // }

// // const myStrongest = monstersInYourPocket.filter(x => x.CP > 200 ? true : false);

// // console.log( myStrongest );

// // Do not edit code below.
// const orders = [{"price":15,"tax":0.09},{"price":42,"tax":0.07},{"price":56,"tax":0.11},
// {"price":80,"tax":0.11},{"price":69,"tax":0.06},{"price":68,"tax":0.14},
// {"price":72,"tax":0.14},{"price":51,"tax":0.09},{"price":89,"tax":0.15},
// {"price":48,"tax":0.13}];
// // Do not edit code above.

// /*
//   Use a high order method to get sum of all the order totals
// */
// function totalTotal(arr) {
//   let t = 0;
//   for ( let x = 0; x < arr.length; x++ ) {
//     // for ( let key in arr[x] ) {
//     t = arr[x].price * (arr[x].tax + 1);
//     // }
//   }
//   return t;
// }

// let ordersTotal = orders.map(x => x.price * (x.tax + 1));

// console.log( totalTotal(orders) );

// // Do not edit the code below.
// const purchases = [{"owner":"Barry","price":103},{"owner":"Bob","price":75},
// {"owner":"Bob","price":73},{"owner":"Barry","price":57},{"owner":"Barry","price":128},
// {"owner":"Bob","price":119},{"owner":"Barry","price":133},{"owner":"Barry","price":27},
// {"owner":"Barry","price":138},{"owner":"Bob","price":68},{"owner":"Bob","price":50},
// {"owner":"Barry","price":9},{"owner":"Bob","price":123},{"owner":"Bob","price":135},
// {"owner":"Barry","price":30},{"owner":"Barry","price":129},{"owner":"Barry","price":38},
// {"owner":"Bob","price":133},{"owner":"Barry","price":109},{"owner":"Bob","price":115}];
// // Do not edit the code above.

/*
  Use a high order method to create to get the sum of bobsTotal.
*/
// function reduction(arr) {
//   for ( let x = 0; x < arr.length; x++ ) {
//     if ( arr[x].Bob ) {
//       return "Hi";
//     }
//   }
// }

// let bobsTotal = purchases.filter(x => x.owner === "Bob");
// let t = 0;
// for ( let x = 0; x < bobsTotal.length; x++ ) {
//   t += bobsTotal[x].price; 
// }

// console.log(t);

// const arrar = [ 1, 1, 2, 3, 4, 5, 5 ];

// const removedDups = a => {
//   let newArr = [];
//   for ( let x = 0; x < a.length; x++ ) {
//     if ( newArr.indexOf(a[x]) == -1 ) {
//       newArr.push(a[x]);
//     }
//   }
//   // let newArr = Array.from(new Set(a));
//   return newArr;
// }

// console.log( removedDups(arrar) );

// var materials = [
//     'Hydrogen',
//     'Helium',
//     'Lithium',
//     'Beryllium'
//   ];
    
//   materials.map(function(material) { 
//     return material.length; 
//   }); // [8, 6, 7, 9]
  
//   materials.map((material) => {
//     return material.length;
//   }); // [8, 6, 7, 9]
  
//   materials.map(material => material.length); // [8, 6, 7, 9]


//   var myNumbers = [ 2, 5, 6 ];
//   var doubled   = myNumbers.forEach( function (num, i, arr) {
//     return arr[i] *= 2;
//   })

//   console.log( doubled );

//   var colorResponse = "red";
  
//   var responseCreator = function(param) {
//     // CODE HERE
//     if ( param = "green" ) {
//       return "Green is okay.";
//     } else if ( param = "red" ) {
//       return "I heart red.";
//     } else { 
//       return "What is your favorite color?";
//     }
//     return param;
//   }

//   console.log( responseCreator(colorResponse) );

// var nameSentence = "My name is ";
// var nameMethods = {
// herb: function(){nameSentence+="Herbert."},
// jordan: function(){nameSentence+="Jordan."},
// clive: function(){nameSentence+="Clive."},
// brittany: function(){nameSentence+="Brittany."},
// };
// var name = nameMethods.clive();

// console.log(nameMethods.clive());

// function noTwosAllowed(num) {
//     if ( num != 2 ) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(noTwosAllowed(2));

// function hasGlasses(x) {
//     if ( x === true ) {
//         return true;
//     } else if ( x === false ) {
//         return false;
//     } else {
//         return "Not a boolean";
//     }
// };

// console.log(hasGlasses(4));

// function test(string) {
//     if ( string == "hi" ) {
//         console.log("Yes");
//     } else {
//         console.log("No");
//     }
// }
// test(4);

// function adding(num1, limit) {

// }

// console.log(adding(0, 5));


// function hasGlasses(boo1, boo2) {
//     if ( (boo1 === true) && (boo2 === true) ) {
//         return "Nice glasses.";
//     } else if ( (boo1 === false) && (boo2 === true) ) {
//         return "Congrats on being one of the few people who look good with glasses!";
//     } else if ( (boo1 === false) && (boo2 === false) ) {
//         return "Maybe you should look into getting some glasses...";
//     }
// }

// console.log(hasGlasses(false, true));

// function loveTheH(str) {
//     for ( i = 0; i < 2; i++ ) {
//         str + "H";
//     };
//     return str;
// };

// console.log(loveTheH("hi there"));

// var array = [1, 2, 4, 5];

// function changeArray(arr, change) {
//     for ( i = 0; i < arr.length; i++) {
//         arr[i] = change;
//     };
//     return arr;
// };

// console.log(array);
// console.log(changeArray(array, 5));

// var total = 0;
// var array1 = { 1: 1, 4: 1, 3:1, 4:1, 5:2, 4:1, 5:2 };

// function totalOfNumber(are) {
//     for ( i in are ) {
//         total += are[i];
//     };
//     return total;
// };

// console.log( totalOfNumber(array1) );


// var infoAboutJamesBond = {
//     firstName:"James",
//     lastName:"Bond",
//     hobby: "Murder"
// };

// function IwasNeverHere(arr1) {
//     for ( i in arr1 ) {
//         arr1[i] = "redacted";
//     };
//     return arr1;
// };

// console.log( IwasNeverHere(infoAboutJamesBond) );

// var user11553 = {username:"JStudent01"};
// var instagram = "JMann22";
// var twitter = "JohnM22";

// function updateSocialMedia(obj, str1, str2) {
//     obj.instagramID = str1;
//     obj.twitterID   = str2;
//     return obj;
// };
// console.log( updateSocialMedia(user11553, instagram, twitter) );

// var nums = [ 1, 3, 4, 5, 6, 12, 36 ];
// function averageArray(ara, evenOrOdd) {
//     var tot = 0;
//     for ( i = 0; i < ara.length; i++ ) {
//         tot += ara[i];
//     };
//     console.log( tot );

//     if ( evenOrOdd == "even" ) {
//         console.log("This is even.");
//     } else if ( evenOrOdd == "odd" ) {
//         console.log("This is odd.");
//     };
// };

// averageArray(nums, "even");

// var num2 = [ 2, 4, 5, 3, 5, 7 ];

// function averageArray2(arr2, eOo) {
//     var testNums = 0;
//     var eve      = 0;
//     var od       = 0;
//     for ( i = 0; i < arr2.length; i++ ) {
//         var ev = arr2[i] % 2;
//         if ( ev = 0 ) {
//             eve += arr2[i];
//         } else if ( ev > 0 ) {
//             od  += arr2[i];
//         };
//     };
//     return ev;
// };

// averageArray(num2, 0);

// console.log(4%2);

// class Puppy{
//     constructor(happiness, energy, behavior)  {
//         this.happiness = happiness;
//         this.energy    = energy;
//         this.behavior  = behavior;
//     }

//     getsTreats(param) {
//         this.happiness += 20;
//         return this.happiness;
//     }

//     takesNap() {
//         return this.energy   -= 45;
//         return this.behavior += 15;
//     }
// }

// var getsTreats = Puppy.getsTreats();

// console.log(new Puppy(100, 40, 50));
// console.log(Puppy.takesNap); 

// // Do not edit the code below.
// var numsArr = [ [1, 2, 3, 4], [5, 6], [7, 8, 9, 10, 11]];
// // Do not edit the code above.

// /*
//   Above is an array of arrays. Use two for loops.
//     1. Write a function called 'looper'. 
//     2. 'looper' should loop over the arrays.
//     3.  If the number is odd, replace it with 'odd'.
//         If the number is even, replace it with 'even'.
//     4. Return the modified numsArr.
// */

// //Code Here

// const looper = () => {
//   for ( let x = 0; x < numsArr.length; x++ ) {
//     for ( let i = 0; i < numsArr[x].length; i++ ) {
//       if ( numsArr[x][i] % 2 > 0 ) {
//         numsArr[x][i] = "odd";
//       } else if ( numsArr[x][i] % 2 === 0 ) {
//         numsArr[x][i] = "even";
//       }
//     }
//   }
//   return numsArr;
// }

// console.log(looper());
// A way to remove a numbers, not sure how effecitive, needs more testing
// const a1 = [1, 2, 2, 3, 4, 5, 3, 3, 3, 4, 3, 2, 1];
// const a2 = [1, 3];

// const array_diif = (a, b) => a.filter(x => x = b ? a.splice(a.indexOf(b)) : x = x);

// console.log( array_diif(a1, a2) );

// Adds two numbers together and converts them to binary
// const addBinary = (a, b) => ((a + b) >>> 0).toString(2);

// console.log( addBinary(1, 2) );

// Takes two strings of only letters and sorts them then returns it as a string containing only unique letters
// const longest = (s1, s2) => {
//   let a = new Array;
//   // a.push(s1.split(""), s2.split(""));
//   // a.filter(x => a.indexOf = x ? true : false);
//   return typeof a;
// }

// const s = "String";
// console.log(typeof s.split(""));

// console.log( longest("aretheyhere", "yestheyarehere") );

// class Machine {
//   constructor() {
//     this.widgets_made_count  = 0;
//     this.wear_and_tear_count = 0;
//     this.needs_reboot        = false;
//   }

//   makeWidgets(num) {
//     this.widgets_made_count += num;
//     this.wear_and_tear_count += (1 * Math.floor(num / 50));
//   }

//   fixMachine() { this.needs_reboot = true };

//   reboot() {
//     // fixMachine();
//     this.wear_and_tear_count -= 10;
//     this.needs_reboot         = false;
//     return Function;
//   }
// }

// const m = new Machine();
// m.makeWidgets(50);
// m.fixMachine();
// m.reboot();
// let rebootComplete = m.reboot();
// rebootComplete();
// console.log( m );

// const ss = () => console.log( "HO" );
// const a = ss();
// console.log( typeof a );

//Code Here

// class ProgressiveManager {
//   constructor(first_name, last_name, email, age, reports = [], title = "Not a manager",bonus = 0 ) {
//     this.first_name = first_name;
//     this.last_name  = last_name;
//     this.email      = email;
//     this.age        = age;
//     this.reports    = reports;
//     this.title      = title;
//     this.bonus      = bonus;
//     this.emp        = 0;
//   }

//   hire() {
//     this.emp += 4;
      // switch (this.emp) {
      //   case this.emp >= 1 && this.emp <= 3:
      //     this.title = "Barely a Manager";
      //     break;
      //   case this.emp >= 4 && this.emp <= 10:
      //     this.title = "Mostly a Manager";
      //     break;
      //   case this.emp >= 11 && this.emp <= 50:
      //     this.title = "Manager";
      //     break;
      //   case this.emp >= 51 && this.emp <= 100:
      //     this.title = "Manager Plus";
      //     break;
      //   case this.emp >= 101:
      //     this.title = "Bestest Manager";
      //     break;
      //   default:
      //     this.title - "Not a manager";
      // }
//       if ( this.emp >= 1 && this.emp <= 3 ) {
//         this.title = "Barely a Manager";
//       } else if (this.emp >= 4 && this.emp <= 10) {
//         this.title = "Mostly a Manager";
//       } else if (this.emp >= 11 && this.emp <= 50) {
//         this.title = "Manager";
//       } else if (this.emp >= 51 && this.emp <= 100) {
//         this.title = "Manager Plus";
//       } else if (this.emp >= 101) {
//         this.title = "Bestest Manager";
//       } else {
//         this.title = "Not a manager";
//       }
//       return this.title;
//   }

//   fire() {
//     this.emp += 1;
//     this.bonus += 100;
//   }
// }

// const e = new ProgressiveManager("N","S","SSS",4,[1,2,2]);
// e.hire();
// console.log( e )

// Function that can understand math, ex. "1 + 1" => 2, "18 + 4*6" => 42
// const mathematicalString = s => {
//   return s;
// }

// mathematicalString("1 + 1");

// console.log( parseInt("55") );

// // This function squares every digit in a given number.
// const squareDigits = n => parseInt(n.toString().split("").map( x => x ** 2 ).join(""));
// const squareDigits = n => parseInt(n.toString().split("").map( x => Math.pow(x, 2) ).join(""));

// console.log( typeof squareDigits(454) );

// This function takes in two numbers and finds the sum of every number in between the two, if they are the same it returns the number.
// const getSum = (a, b) => {
//   if (a == b) { a };
//   return a > b ? ((a-b)+1) * (a+b) / 2 : ((b-a)+1) * (a+b) / 2;
// }

// const GetSum = (a, b) => {
//   let n = Math.min(a, b), 
//       x = Math.max(a, b);
//   return (max - min + 1) * (min - max) / 2;
// }

// console.log( getSum(7,7) );

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Unsolved //
// This function takes in an array of directions, NORTH, EAST, SOUTH, WEST, and returns the array after removing the opposites -- N-S, E-W
// const dirReduc = a => {
  // let na = [];
  // for ( let x = 0; x < a.length; x++ ) {
  //   if ( a[x] === "NORTH" ) {
  //     na.push(1);
  //   } else if ( a[x] === "SOUTH" ) {
  //     na.push(2);
  //   } else if ( a[x] === "EAST" ) {
  //     na.push(3);
  //   } else if ( a[x] === "WEST" ) {
  //     na.push(4);
  //   }
  // }
  // na.map((x,y) => {
  //   if ( x === 1 && y === 2 ) {
  //     a.splice(a[x], 1);
  //     a.splice(a[y], 1);
  //   }
  // });
  // return na;
//   for ( let x = 0; x < a.length; x++ ) {
//     console.log(a[x] + a[x+1]);
//   }
// }

// console.log( dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]) ); // Should be ["WEST"].

// Given an array of Objects -- hashes -- return a string of names seperated by commas with the last pair containing an &
// const list = h => {
//   let s = "";
  // for ( let x = 0; x < h.length; x++ ) {
  //   for ( let key in h[x] ) {
  //     if ( h.length > 2 ) {
  //       if ( h[x+1] !== undefined ) {
  //         s += h[x][key] + ",";
  //       } else if ( h[x+1] === undefined ) {
  //         s += "& " + h[x][key];
  //       } 
  //     } else {
  //       s += "& " + h[x][key]
  //     }
  //   }
  // }
  // let a =[];
  // for ( let x = 0; x < h.length; x++ ) {
  //   for ( let key in h[x] ) {
  //     a.push(h[x][key]);
  //   }
  // }
  // a.pop();
  // a.join();
  // a.push(h[h.length-1].name);
  // return a.join(", ")//.push(h[h.length-1].name);
  // for ( let x = 0; x < h.length; x++ ) {
  //   if ( h.length > 2 ) {
  //     if ( x + 1 == (h.length-1) ) {
  //       s += h[x].name + " ";
  //     } else if ( x == (h.length-1) ) { 
  //       s += "& " + h[x].name;
  //     } else {
  //       s += h[x].name + ", ";
  //     }
  //   } else {
  //     s += h[x].name;
  //   }
  // }
  // s = h.forEach(x => {
  //   x.name = x.name + ",";
  // });
  // return s;
  // Other Solution
  // function list(names){
  //   return names.reduce(function(prev, current, index, array){
  //     if (index === 0){
  //       return current.name;
  //     }
  //     else if (index === array.length - 1){
  //       return prev + ' & ' + current.name;
  //     } 
  //     else {
  //       return prev + ', ' + current.name;
  //     }
  //   }, '');
  //  }
// }

// console.log(list([ {name: 'Lisa'} ]));

// This function will take in an array of numbers and return an array containing the lowest and highest digit.
// const minMax = a => {
//   let na = [];
//   na.push(Math.min(...a), Math.max(...a));
//   return na;
// }

// const minMax = a => [Math.min(...a), Math.max(...a)];

// console.log(minMax([1,2,3,4,5,6]));

// Returns the number of distinct case-insensitive duplicates in a string. Ie "Idivisibilities" => 2 (i repeats 7x, s repeats 2x)
// const duplicateCount = s => { 
//   let n = s.toLowerCase().split("").filter((v, i, a) => a.indexOf(v) !== i);
//   return n.filter((v, i, a) => n.indexOf(v) == i).length;
// }

// function duplicateCount(text){
//   return text.toLowerCase().split('').filter(function(val, i, arr){
//     return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
//   }).length;
// }

// function duplicateCount(text){
//   return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
// }

// console.log(duplicateCount("Indivisibilities"));

// const towerBuilder = n => {
//   let a = [];
//   a.;
//   return a;
// }

// console.log(towerBuilder());

// let a = "";
// a.repeat()

// Currying Functions:
// function max(/* variable arguments */) {  
//   var args = [].slice.call(arguments);
//   return Math.max.apply(Math, args);
// }

// function  range(start, end, step) {  
//   var stop = Math.max(start, end),
//       start = Math.min(start, end),
//       set = [];

//   // step is optional
//   step = typeof step !== 'undefined' ? step : 1;

//   for (var i=start; i <=stop; i+=step) {
//       set.push(i);
//   }  
//   return set;
// }

// function curry(fn, n) {  
//   var arity = n || fn.length;
//   return function curried() {
//       var args = [].slice.call(arguments), 
//           context = this;

//       return args.length >= arity ?
//           fn.apply(context, args) :
//           function () {
//               var rest = [].slice.call(arguments);
//               return curried.apply(context, args.concat(rest));
//           };
//   };
// }

// console.log( curry(range, 2)(1)(10) );
// console.log( curry(range, 2)(1)(10,2) );
// console.log( curry(range, 2)(1)(10)(2) );

// let e = [
//   {
//     name: 'Jimmy Joe',
//     title: 'Hack0r',
//     age: 12,
//   },
//   {
//     name: 'Jeremy Schrader',
//     age: 24,
//     hairColor: 'brown'
//   },
//   {
//     name: 'Carly Armstrong',
//     title: 'CEO',
//   }
// ];

// const func = (x,z) => {
//   let a = [];
//   x.forEach(() => {
//     if ( e.includes(z) ) {
//       a.push(y);
//     }
//   });
//   return a;
// }

// console.log( func(e, name) );

// let names = ['James', 'Jessica', 'Melody', 'Tyler', 'Blake', 'Jennifer', 'Mark', 'Maddy'];

// function filter(v) {
//   let a = names;
//   return a.filter(x => x == v  );
// }

// console.log( filter('James') );


// import React, { Component } from 'react';

// export default class EvenAndOdd extends Component {

//   constructor() {
//     super();

//     this.state = {
//       evenArray: [],
//       oddArray: [],
//       userInput: ''
//     }
//   }

//   handleChange(val) {
//     this.setState({ userInput: val });
//   }

//   assignEvenAndOdds(userInput) {
//     var arr = userInput.split(',');
//     var evens = [];
//     var odds = [];

//     for ( var i = 0; i < arr.length; i++ ) {
//       if ( arr[i] % 2 === 0 ) {
//         evens.push( parseInt(arr[i], 10) );
//       } else {
//         odds.push( parseInt(arr[i], 10) );
//       }
//     }
    
//     this.setState({ evenArray: evens, oddArray: odds });
//   }

//   render() {
//     return (
//       <div className="puzzleBox evenAndOddPB">
//         <h4> Evens and Odds </h4>
//         <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
//         <button className="confirmationButton" onClick={ () => { this.assignEvenAndOdds(this.state.userInput) }}> Split </button>
//         <span className="resultsBox"> Evens: { JSON.stringify(this.state.evenArray) } </span>
//         <span className="resultsBox"> Odds: { JSON.stringify(this.state.oddArray) } </span>
//       </div>
//     )
//   }
// }

// Count down 3 times to a given number
// const countdown = n => {
//   // let a = [];
//   // a.push(n + 2, n + 1, n);
//   // return a.join('!');
//   return `${n+2}!${n+1}!${n}`;
// };

// Square every number in a given number
// const squareEveryNum = n => Number(n.toString().split('').map(x => x * x).join(''));

// const c = a => a.filter((x, y) => a.indexOf(y) === x);
// const c = arr => Array.from(new Set(arr)).sort().pop();
// c(arr);

// const accum = s => s.split('').map((x,y) => x.charAt(0).toUpperCase() + x.repeat(y).toLowerCase()).join('-');

// console.log(accum("abcd"));    // "A-Bb-Ccc-Dddd"
// console.log(accum("RqaEzty")); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// console.log(accum("cwAt"));    // "C-Ww-Aaa-Tttt"
// console.log(accum("ZpglnRxqenU"));
// console.log(accum("NyffsGeyylB"));

// let n = 1083.681, i = 0.05, t = 0.18;

// let inc = n * i;
// let dec = (n * i) * t;

// n = (n + inc) - dec;

// const calculateYears = (p, n, t, d) => {
//   let y = 0;
//   while ( p < d ) {
//     p = (p + (p * n) - (p * n * t));
//     y++;
//   }
//   return y;
// }

// function calculateYears(principal, interest, tax, desired) {
//   return Math.ceil(
//     Math.log(desired / principal) / 
//     Math.log(1 + interest * (1 - tax))
//   );
// }

// function calculateYears(P,I,T,D) { return Math.ceil( Math.log(D/P) / Math.log1p(I*(1-T)) ); }

// calculateYears(1000, 0.05, 0.18, 1100);
// calculateYears(1000,0.01625,0.18,1200);

// const Xbonacci = (arr, count) => {
//   let a = [];
  
//   while (a.length < count) {
//     if ( !a.length ) a.push(0);
//     else a.map((x, y) => a.push(a[y] + a[y-1]))
//   }
//   return a;
// };

// Xbonacci([0,1],10)
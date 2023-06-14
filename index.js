// "    function counter(){
//     var counter = 0;

//     function IncreaseCounter() {
//         return counter += 1;
//     };

//     return IncreaseCounter;
// }

// var counter = counter();
// alert(counter());
// alert(counter());
// alert(counter());
// alert(counter());"

function counter() {
  var counter = 0;

  function IncreaseCounter() {
    return (counter += 1);
  }

  return IncreaseCounter;
}

var counter = counter();

// this line commenting dont disturb every time

// alert(counter());
// alert(counter());
// alert(counter());
// alert(counter());

// this line commenting dont disturb every time

// because every time count increing by one so number is 1,2,3,4 shown in alert dailog

// "let count = 0;
// (function () {
//   if (count === 0) {
//     let count = 1;
//     console.log(count); // What is logged?
//   }
//   console.log(count); // What is logged?
// })();"

let count = 0;
(function () {
  if (count === 0) {
    let count = 1;
    console.log(count); // What is logged?
  }
  console.log(count); // What is logged?
})();

// output is 1 and 0 bacause because let is a block lavel variable

// "for (var i = 0; i < 3; i++) {
//     setTimeout(function log() {
//       console.log(i); // What is logged?
//     }, 1000);
//   }"

for (var i = 0; i < 3; i++) {
  setTimeout(function log() {
    console.log(i); // What is logged?
  }, 1000);
}
// output  3 is three times due to setTimeout

// Write a code to calculate area of a rectangle
//  using inner function. In this case outer function
//   should accept parameter length and inner function should
//    accept parameter breadth.

// Take a variable in outer function and create an inner function
// to increase the counter every time it is called

// "Print Output

// var a = 12;
// (function () {
//   alert(a);
// })();"

var a = 12;
(function () {
  // this line commenting  due to dont disturb every time
  //   alert(a);
})();
// in alert box show 12 because a is a global variable

// "var a = 10;
// var x = (function () {
//   var a = 12;
//   return function () {
//     alert(a);
//   };
// })();
// x();"

var a = 10;
var x = (function () {
  var a = 12;
  return function () {
    // this line commenting due to  dont disturb every time
    // alert(a);
  };
})();
x();

// here alert is 12 because var have reinitialization and redeclaration

// "var globalVar = ""xyz"";

// (function outerFunc(outerArg) {
//     var outerVar = 'a';

//     (function innerFunc(innerArg) {
//     var innerVar = 'b';

//     console.log(
//         ""outerArg = "" + outerArg + ""\n"" +
//         ""innerArg = "" + innerArg + ""\n"" +
//         ""outerVar = "" + outerVar + ""\n"" +
//         ""innerVar = "" + innerVar + ""\n"" +
//         ""globalVar = "" + globalVar);

//     })(456);
// })(123);"

var globalVar = "xyz";

(function outerFunc(outerArg) {
  var outerVar = "a";

  (function innerFunc(innerArg) {
    var innerVar = "b";

    console.log(
      "outerArg = " +
        outerArg +
        "\n" +
        "innerArg = " +
        innerArg +
        "\n" +
        "outerVar = " +
        outerVar +
        "\n" +
        "innerVar = " +
        innerVar +
        "\n" +
        "globalVar = " +
        globalVar
    );
  })(456);
})(123);

// here out is outerArg = 123
// innerArg = 456
// outerVar = a
// innerVar = b
// globalVar = xyz

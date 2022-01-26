// להדפיס כוכביות בסדר עולה לפי בקשת המשתמש כלומר אם המשתמש רוצה להדפיס 3 כוכביות נדפיס כוכבית ואז 2 ואז 3
// Exercise 1
// let x = prompt("enter first number");
// let chr;
// for (i = 1; i <= x; i++) {
//   for (j = 1; j < i; j++) {
//     chr = chr + "*";
//   }
//   console.log(chr);
//   chr = "";
// }

//להדפיס את לוח הכפל של מספר שאנחנו מקבלים מהמשתמש כלומר אם המשתמש ביקש את המספר 10 אז נדפיס 1*10=10, 2*10=20, 10*3=30 וכן הלאה.
// Exercise 2
// let number = parseInt(prompt("Enter an integer: "));
// for (let i = 1; i <= 10; i++) {
//   let result = i * number;
// console.log(`${number} * ${i} = ${result}`);
// }

// להדפיס את לוח הכפל של מספר שאנחנו מקבלים עד לאיזה מספר שהוא נותן כולמר אם קיבלנו 1 ו-2
// נדפס 1*1=1, 1*2=2.
// Exercise 3
// let First_number = parseInt(prompt("enter First number: "));
// let Second_number = parseInt(prompt("enter Second number: "));
// for (let i = 1; i <= Second_number; i++) {
//   let result = i * First_number;
//   console.log(`${First_number} * ${i} = ${result}`);
// }

// לחשב חזקה, נקבל מהמשתמש 2 מספרים. הראשון יהיה המספר עצמו והמספר השני החזקה.
// אנחנו נחזיר את התוצאה. למשל אם המשתמש הכניס כמספר ראשון 2 וכמספר שני 3 אז נעשה 2 בחזקת 3 כלומר
// Exercise 4
// let x = prompt("enter First number");
// let y = prompt("enter Second number");
// let res = 1;
// for (let i = 0; i < y; i++) {
//   res = res * x;
// }
// console.log(res);

//לחשב מחלק משותף מקסימלי בין 2 מספרים שהמשתמש מכניס
// Exercise 5
// let a = prompt("enter First number");
// let b = prompt("enter Second number");
// var gcd;
// while (a != b) {
//   if (a > b) {
//     a = a - b;
//   } else {
//     b = b - a;
//   }
// }
// gcd = a;
// console.log(gcd);

// Exercise 6
// let n = prompt("enter number");
// let num1 = 0;
// var num2 = 1;
// var count = 2;
// var res;
// console.log(num1, num2);
// while (count < n) {
//   res = num1 + num2;
//   console.log(res);
//   num1 = num2;
//   num2 = res;
//   count++;
// }

// Exercise 1 b
// let x = prompt("enter num of *");
// let chr = "*";
// for (i = 1; i <= x; i++) {
//   console.log(chr);
//   chr += "*";
// }

// function Exercise1_a(x) {
//   alert("in exercise1 a");
//   let chr = "*";
//   for (i = 1; i <= x; i++) {
//     console.log(chr);
//     chr += "*";
//   }
// }

// function Exercise1_b(x) {
//   alert("in exercise1 b");
//   let chr;
//   for (i = 1; i <= x; i++) {
//     for (j = 1; j < i; j++) {
//       chr = chr + "*";
//     }
//     console.log(chr);
//     chr = "";
//   }
// }

// let x = prompt("enter num of *");
// if (x <= 3) {
//   Exercise1_a(x);
// } else {
//   Exercise1_b(x);
// }

// Exercise 6 from eli
// const str = prompt("enter a string");
// const arr = str.split(" ");
// for (let i = 0; i < arr.length; i++) {
//   arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
// }
// console.log(arr);

// Exercise 7 from eli
// let x = prompt("enter a word");
// let y = prompt("enter num ");
// let chr = "";
// for (let i = 1; i <= y; i++) {
//   chr += x;
// }
// console.log(chr);

// Exercise 10 from eli
// const str = prompt("enter a string");
// let arr = [];
// for (let i = 0; i < str.length; i++) {
//   if (str[i] != ",") {
//     arr.push(str[i]);
//   }
// }
// console.log(arr);

// כתבו פונקציה שמקבלת סטרינג מהמשתמש ומחזירה את ההיפוך שלו.
// לדוגמה אם הפונקציה קיבלה 1000 היא תחזיר 0001
// Exercise 1
// function reverse_a_number(number) {
//   let arr = number.split("");
//   let arr_res = [];
//   let str = "";

//   for (let i = arr.length - 1; i >= 0; i--) {
//     arr_res.push(arr[i]);
//   }
//   for (let i = 0; i < arr_res.length; i++) {
//     str += arr_res[i];
//   }
//   return str;
// }
// console.log(reverse_a_number("1234"));

// כתבו פונקציה שבדוקת אם מילה היא פלינדרום כלומר האם אפשר לקרוא אותה מהתחלה ומהסוף והיא תהיה אותו דבר.
// למשל mom או dad.
// Exercise 2
// function palindrome(str) {
//   let arr = str.split("");
//   let mid = (arr.length - 1) / 2;
//   if (mid % 2 > 0) {
//     mid = 0;
//   }

//   for (let i = 0, j = str.length - 1; j != mid; i++, j--) {
//     if (arr[i] != arr[j]) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(palindrome("mom"));

// למצוא את המחלק המשתוף הגבוהה ביותר בין 2 מספרים (כמובן שללא שארית).
// למשל המחלק המשותף הגבוהה ביותר בין המספרים 10 ו15 הוא 5.
// Exercise 3
// function gcd(a, b) {
//   let gcd;
//   while (a != b) {
//     if (a > b) {
//       a = a - b;
//     } else {
//       b = b - a;
//     }
//   }
//   gcd = a;
//   return gcd;
// }
// console.log(gcd(15, 10));

// כתבו פונקציה שממינת סטרינג לפי הabc.
// למשל אם נקבל את המילה cba נקבל את המילה abc.
// // Exercise 4
// function alphabet_order(str) {
//   return str.split("").sort().join("");
// }
// console.log(alphabet_order("webmaster"));

////////////////////////////// אבן נייר ומספריים ////////////////////////////////////////

// function random_sing() {
//   let random = Math.floor(Math.random() * 3) + 1;
//   if (random == 1) {
//     return "stone";
//   } else if (random == 2) {
//     return "leaf";
//   } else {
//     return "scissors";
//   }
// }

// function comper_sings(sing1, sing2) {
//   console.log("sing1: " + sing1 + ", sing2: " + sing2);
//   if (sing1 == sing2) {
//     return "doual";
//   } else if (sing1 == "stone" && sing2 == "leaf") {
//     return "sing2";
//   } else if (sing1 == "stone" && sing2 == "scissors") {
//     return "sing1";
//   } else if (sing1 == "leaf" && sing2 == "stone") {
//     return "sing1";
//   } else if (sing1 == "leaf" && sing2 == "scissors") {
//     return "sing2";
//   } else if (sing1 == "scissors" && sing2 == "stone") {
//     return "sing2";
//   } else if (sing1 == "scissors" && sing2 == "leaf") {
//     return "sing1";
//   }
// }

// function main() {
//   let answer = prompt("play or leave?");
//   while (answer == "play") {
//     let sing = prompt("stone, leaf or scissors");
//     let pc_sing = random_sing();
//     let res = comper_sings(sing, pc_sing);
//     if (res == "sing1") {
//       alert("player wins");
//     } else if (res == "sing2") {
//       alert("pc wins");
//     } else {
//       alert("doual");
//     }
//     answer = prompt("play or leave?");
//   }
//   return;
// }
// main();

////////////////////////////// quiz game ////////////////////////////////////////

// const quiz = {
//   1: {
//     question: "What is the first name of Iron Man?",
//     answer: "Tony",
//   },
//   2: {
//     question: "Who is called the god of lightning in Avengers?",
//     answer: "Thor",
//   },
//   3: {
//     question: "Who carries a shield of American flag theme in Avengers?",
//     answer: "Captain America",
//   },
//   4: {
//     question: "Which avenger is green in color?",
//     answer: "Hulk",
//   },
//   5: {
//     question: "Which avenger can change it's size?",
//     answer: "AntMan",
//   },
//   6: {
//     question: "Which Avenger is red in color and has mind stone?",
//     answer: "Vision",
//   },
// };

// function check(str1, str2) {
//   str1 = str1.toLowerCase();
//   str2 = str2.toLowerCase();

//   if (str1 == str2) return true;
//   else return false;
// }

// function main() {
//   let wanna_play = prompt("play or leave");
//   let answer;
//   let life = 3;

//   while (wanna_play != "play") {
//     if (wanna_play == "leave") {
//       alert("good bay");
//       return;
//     }
//     alert("need to enter play or leave");
//     wanna_play = prompt("play or leave");
//   }

//   while (wanna_play == "play") {
//     for (let i in quiz) {
//       answer = prompt(quiz[i].question);
//       if (!check(answer, quiz[i].answer)) {
//         life--;
//         alert("false answer the currect answer is: " + quiz[i].answer);
//       } else alert("good answer");
//       if (life == 0) {
//         alert("you lose");
//         break;
//       }
//     }
//     if (life > 0) {
//       alert("win");
//       life = 3;
//     }
//     wanna_play = prompt("play or leave?");
//     while (wanna_play != "play") {
//       if (wanna_play == "leave") {
//         alert("good bay");
//         return;
//       }
//       alert("need to enter play or leave");
//       wanna_play = prompt("play or leave");
//     }
//   }
// }
// main();

////////////////////////////// my_details ////////////////////////////////////////

let my_details = {
  FirstName: "Dvir",
  LestName: "Yotvat",
  Age: 27,
  Hobby: "coding",
};

function get_my_details() {
  let str = `My name is: ${my_details.FirstName} ${my_details.LestName} <br/> My age is: ${my_details.Age} <br/> My hobby is: ${my_details.Hobby}`;
  document.getElementById("answer_question_1_a").innerHTML = str;
}
function get_my_details2() {
  let select = document.getElementById("get_details");
  let value = select.options[select.selectedIndex].value;
  let str = "The value is: ";
  if (value == "FirstName") {
    str += `First Name: ${my_details.FirstName}`;
  } else if (value == "LestName") {
    str += `Lest Name: ${my_details.LestName}`;
  } else if (value == "Age") {
    str += `Age: ${my_details.Age}`;
  } else {
    str += `Hobby: ${my_details.Hobby}`;
  }
  document.getElementById("answer_question_1_b").innerHTML = str;
}

////////////////////////////// calculator ////////////////////////////////////////

function calculator_1() {
  let first = document.getElementById("firstNumber").value;
  let second = document.getElementById("secondNumber").value;
  first = parseFloat(first);
  second = parseFloat(second);
  let res = first + second;
  let str = `Result = ${res}`;
  document.getElementById("answer_calculator").innerHTML = str;
}
function calculator_2() {
  let first = document.getElementById("firstNumber").value;
  let second = document.getElementById("secondNumber").value;
  let str = `Result = ${first - second}`;
  document.getElementById("answer_calculator").innerHTML = str;
}
function calculator_3() {
  let first = document.getElementById("firstNumber").value;
  let second = document.getElementById("secondNumber").value;
  let str = `Result = ${first * second}`;
  document.getElementById("answer_calculator").innerHTML = str;
}

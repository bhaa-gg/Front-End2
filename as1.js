// // 1
// var num  = Number(window.prompt('Ent Your Numper :'))
// console.log("The Numper Is = " + num);
// ----------------------------
// // 2
// var num  = Number(window.prompt('Ent Your Numper :'))
// if (num % 3 == 0  && num % 4 == 0 ) console.log("Output Yes");
// else console.log("Output No");
// ----------------------------
// // 3
// var num1  = Number(window.prompt('Ent Your Num1 :'))
// var num2  = Number(window.prompt('Ent Your Num2 :'))
// if (num1 > num2) console.log("The Max Numper is :"+num1);
// else console.log("The Max Numper is :"+num2);
// ----------------------------
// //  4
// var num  = Number(window.prompt('Ent Your Num1 :'))
// if (num >=0 ) console.log("Output positive");
// else console.log("Output negative ");
// ----------------------------
// // 5
// var num1 = Number(window.prompt('Ent Your Num1 :'))
// var num2 = Number(window.prompt('Ent Your Num2 :'))
// var num3 = Number(window.prompt('Ent Your Num3 :'))
// var max;
// var min;

// if (num1 > num2 && num1 > num3) {
//     max = num1
//     if (num2 > num3) min = num3
//     else min = num2
//     console.log("max = " + max + "\n" + "min = " + min);
// }

// else if (num2 > num1 && num2 > num3) {
//     max = num2
//     if (num1 > num3) min = num3
//     else min = num1
//     console.log("max = " + max + "\n" + "min = " + min);
// }

// else {
//     max = num3
//     if (num1 > num2) min = num2
//     else min = num1
//     console.log("max = " + max + "\n" + "min = " + min);
// }
//-------------------------
// // 6
// var num = Number(window.prompt('Ent Your Num :'))
// if (num % 2 == 0) console.log("This Numper Even");
// else console.log("This Numper Odd");
//-------------------------
// // 7
// var char = window.prompt('Ent Your Char :');
// if(char == 'a' ||char == 'e'||char == 'o'||char == 'i'||char == 'u')console.log("Char Is Vowel");
// else console.log("Char Is Consonant");
//-------------------------
// // 8
// var num = Number(window.prompt('Ent Your Num :'))
// for (var i = 1; i <=num; i++) {
//     console.log(`{ ${i} }`);
// }
//-------------------------
// // 9
// var num = Number(window.prompt('Ent Your Num :'))
// for (var i =1 ; i <=12; i++) {
// console.log(`{ ${num} }`);
// num+=5;
// }
//-------------------------
// // 9
// var num = Number(window.prompt('Ent Your Num :'))
// for (var i =2 ; i <=num; i+=2) {
//     console.log(i);
// }
//-------------------------
// // 10
// var num = Number(window.prompt('Ent Your Num :'));
// var pow = Number(window.prompt('Ent Your pow :'));
// var res =1;
// for (var i = 0; i < pow; i++) {
//     res *= num;
// }
// console.log(`The ${num} ^ ${pow} = ${res}`);
//-------------------------
// // 11
// var a =0;
// for (var i = 0; i < 5; i++) {
//     var num = Number(window.prompt('Ent Your Num :'));
//     a+=num;
// }
// console.log( a);
// console.log( a/5); eror
// //-------------------------
// // 12
// var num = Number(window.prompt('Ent Your Month Numper :'));
// if (num == 1 || num == 3 || num == 5 || num == 7 || num == 8 || num == 10 || num == 12) {

//     console.log("Days in Month: 31 ");
// }

// else if (num == 4 || num == 6 || num == 9 || num == 11) {

//     console.log("Days in Month: 30 ");
// }
// else
// {
//     console.log("Days in Month: 28 ");
// }
//-------------------------------
// // 13
// var num = Number(window.prompt('Ent Your  Percentage  :'));
// if (num >= 90) {
//     console.log("Grad A");
// }

// else if (num >= 80) {
//     console.log("Grad B"); 
// }

// else if (num >= 70) {
//     console.log("Grad C");
// }

// else if (num >= 60) {
//     console.log("Gr >= 40) {
//     console.log("Grad E");
// }

// else  {
//     console.log("Grad F");
// }
//-------------------------------
// // 14
// var num = Number(window.prompt('Ent Your Month Numper :'));
// switch (num) {
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//         console.log( "Days in Month: 31 ");
//         break;

//     case 4:
//     case 6:
//     case 9:
//     case 11:
//         console.log( "Days in Month: 30 ");
//         break;
//         default:
//         console.log( "Days in Month: 28 ");
//         break;
// }
// ----------------------------------------------------------------
// //  15
// var num1 = Number(window.prompt('Ent Your  Numper 1:'));
// var num2 = Number(window.prompt('Ent Your  Numper 2:'));
// switch (num1 > num2) {
//     case true:
//         console.log(`Maximum is num1  : ${num1}`);
//         break;
//     case false:
//         console.log(`Maximum is num2 : ${num2} `);
//         break;
// }
// ----------------------------------------------------------------
// // 16
// var num = Number(window.prompt('Ent Your  Numper :'));
// switch (num % 2 == 0) {
//     case true:
//         console.log("Your Numper is Even");
//         break;

//         default:
//         console.log("Your Numper is  Odd");
//         break;
// }
//----------------------------------------------------------------
// // 17
// var num = Number(window.prompt('Ent Your  Numper :'));
// switch (true) {
//     case num > 0:
//         console.log("Your Numper is positive ");
//         break;

//     case num < 0:
//         console.log("Your Numper is negative ");
//         break;

//     case num==0:
//         console.log("Your Numper is zero ");
//         break;
// }
//----------------------------------------------------------------
// // 18 
// var num1 = Number(window.prompt('Ent Your  Numper1 :'));
// var num2 = Number(window.prompt('Ent Your  Numper2 :'));
// var op = window.prompt('Ent Your  operator :');
// switch (op) {
    //     case "+":
//         console.log(`${num1}  ${op}  ${num2} = ${num1 + num2}`);
//         break;

//     case "-":
//         console.log(`${num1}  ${op}  ${num2} = ${num1 - num2}`);
//         break;

//     case "*":
//         console.log(`${num1}  ${op}  ${num2} = ${num1 * num2}`);
//         break;

//     default:
//         console.log(`${num1} /  ${num2} = ${num1 / num2}`);
//         break;
// }
// ----------------------------------------------------------------
// var ch = window.prompt('Ent Your  char :');
// switch (ch) {
//     case "a":
//     case "e":
//     case "o":
//     case "u":
//     case "i":
//         console.log("Char Is Vowel");
//         break;
        
//         default:
//         console.log("Char Is consonant");
//         break;
// } und
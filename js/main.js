// ? Substring Method

// const name = "Soft Club";
// console.log(name.substring(0, 4));


// ? Substr() Method

// let text = "I'm  learning JavaScript";
// let result = text.substr(0, 14);
// console.log(result);

// let text1 = "I'm  learning JavaScript";
// let result1 = text.substr(14, 10);
// console.log(result1);

// ? Replace() Method

// let text = "I'm learning C++";
// let result = text.replace("C++", "JavaScript");

// console.log(result);


// ? toUpperCase() Method

// let text = "Helo Wolrd! Have a Good Day!";
// let result = text.toUpperCase();

// console.log(result);



// ? Concat() Method

// let text1 = "Mustafa";
// let text2 = "is learning";
// let text3 = "JavaScript";
// let text4 = "in SoftClub!";

// let result = text1.concat(' ', text2, ' ', text3, ' ', text4);

// console.log(result);

// ? Split() Method

// * converting a strint to an array 

// * 1
// let p = "Hello, What's up my dear friend?"
// console.log(p.split());

//  * 2
// let p1 = "Hello, What's up my dear friend?"
// console.log(p1.split(" "));

//  * 3
// let p2 = "Hello, What's up my dear friend?"
// console.log(p.split(" ", 3));

// ? charAt() Method

// // 1
// let name = "Mustafa";
// let result = name.charAt(0);

// console.log(result);

// // 2
// let name1 = "Mustafa";
// let result1 = name1.charAt(3);

// console.log(result1);

// // 3
// let name2 = "Mustafa";
// let result2 = name2.charAt(name2.length-1);

// console.log(result2);


//? Trim() Method

// let name1 = "Javascript";
// console.log(name1);
// console.log(name1.length);

  
// let name2 = "        Javascript        ";
// console.log(name2);
// console.log(name2.length);

// // * Remove spaces with trim() method

// let name3 = "        Javascript        ";
// console.log(name3.trim());
// console.log(name3.length);


// ? toString() Method

// let a = 100;
// console.log(typeof a);

// let str = a.toString();
// console.log(typeof str);


// ? includes() Method
// 1
// let text = "Programming Languages: C++, C#, C, Java, JavaScript, Python etc.";
// let inc = text.includes("JavaScript");

// console.log(inc);
// // 1
// let text1 = "Programming Languages: C++, C#, C, Java, JavaScript, Python etc.";
// let inc1 = text.includes("GO");

// console.log(inc1);



// ? at() Method

// // 1
// let str  ="JavaScript";

// console.log(str.at(0));

// // 2
// let str2  ="JavaScript";

// console.log(str2.at(4));

// // 3
// let str3  ="JavaScript";

// console.log(str3.at(-1));




// ? Math.floor(), Math.ceil(), Math.round

// // * floor
// console.log("Floor :");
// let a = 11.7;
// let result = Math.floor(a);

// console.log(result);

// // * ceil
// console.log("Ceil :");
// let a1 = 101.1;
// let result1 = Math.ceil(a1);

// console.log(result1);

// // * round
// console.log("Round :");
// let a2 = 16.5;
// let result2 = Math.round(a2);

// console.log(result2);



// // ? Math.max() Method

// let number = Math.max(15, -89, 57, 136, 0, 300, 21, 378, 85);

// console.log(number);


// ? Math.pow() Method

// let number = Math.pow(5, 3); //  5 * 5 * 5;

// console.log(number);


// // ? Math.sqrt() Method

// let number = Math.sqrt(25); // 25 => 5

// console.log(number);



// // ? Math.abs() Method

// let number = Math.abs(-11); // -11 => 11

// console.log(number);



// // ? Math.random() Method

// let number = Math.random() *10;

// console.log(number);

// let number1 = Math.random() *10;

// console.log(number1);


// ? isNaN() Method

let num = "Number";
console.log(typeof num);
console.log(isNaN(num));

let num1 = 15;
console.log(typeof num1);
console.log(isNaN(num1));
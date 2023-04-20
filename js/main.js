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
let text = "Programming Languages: C++, C#, C, Java, JavaScript, Python etc.";
let inc = text.includes("JavaScript");

console.log(inc);
// 1
let text1 = "Programming Languages: C++, C#, C, Java, JavaScript, Python etc.";
let inc1 = text.includes("GO");

console.log(inc1);
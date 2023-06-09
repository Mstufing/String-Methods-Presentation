# String-Methods-Presentation

## **TABLE OF CONTENTS**

1. What is a Method in JS ?
2. String
3. Number   

## What is a Method in JavaScript?

##### A method is a block of code which only runs when it is called. You can pass data, known as parameters, into a method. Methods are used to perform certain actions, and they are also known as functions. Methods are functions stored as object properties.

## String in JavaScript

##### How to create a string in js?

In JavaScript, there are three ways to write a string — they can be written inside **single quotes ( ' ' )**, **double quotes ( " " )**, or **backticks** ( ` ` ). The type of quote used must match on both sides, however it is possible that all three styles can be used throughout the same script.
For example, strings example **const** name = 'Peter'; **const** name1 = "Jack"; **const** result = `The names are ${name} and ${name1}`; Single quotes and double quotes are practically the same and you can use either of them.

## String Methods in JavaScript
* String length             
* String slice()
* String substring()
* String substr()
* String replace()
* String replaceAll()
* String toUpperCase()
* String toLowerCase()
* String concat()
* String split()
* String charAt()
* String trim()


#### JavaScript String Length
The **length** property returns the length of a string:

_**Example**_
**let** text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
**let** length = text.length;
The length of the string is: 26

#### JavaScript String slice() Method
The JavaScript string slice() method is used to fetch the part of the string and returns the new string. It required to specify the index number as the start and end parameters to fetch the part of the string. The index starts from 0.
This method allows us to pass a negative number as an index. In such case, the method starts fetching from the end of the string. It doesn't make any change in the original string.
##### Syntax
The slice() method is represented by the following syntax:
**string.slice(start,end);** 
**start** - It represents the position of the string from where the fetching starts.
**end** - It is optional. It represents the position up to which the string fetches. In other words, the end parameter is not included.

#### JavaScript String substring() Method
The JavaScript string substring() method fetch the string on the basis of provided index and returns the new sub string. It works similar to the slice() method with a difference that it doesn't accepts negative indexes. This method doesn't make any change in the original string.
##### Syntax
The substring() method is represented by the following syntax:
**string.substring(start,end);** 
**start** - It represents the position of the string from where the fetching starts.
**end** - It is optional. It represents the position up to which the string fetches.

![The San Juan Mountains are beautiful!](/img/substring.png)

#### JavaScript String substr() Method
The JavaScript string substr() method fetch the part of the given string and return the new string. The number of characters to be fetched depends upon the length provided with the method. This method doesn't make any change in the original string.
##### Syntax
The substr() method is represented by the following syntax:
**string.substr(start,length);**
**start** - It represents the position of the string from where the fetching starts.
**length** - It is optional. It represents the number of characters to fetch.

![The San Juan Mountains are beautiful!](/img/substr.png)

#### JavaScript String replace() Method
The JavaScript string replace() method is used to replace a part of a given string with a new substring. This method searches for specified regular expression in a given string and then replace it if the match occurs.
We can use global search modifier with replace() method to replace all the match elements otherwise the method replace only first match. JavaScript also provides ignore flag to make the method case-insensitive.
##### Syntax
The replace() method is represented by the following syntax:
**string.replace(originalstr, newstr);**

**originalstr** - It represents the string to be searched and replaced.
**newstr** - It represents the new string that replaced with the searched string.
It returns the new string with the specified replacement.

![The San Juan Mountains are beautiful!](/img/replace.png)

#### JavaScript String replaceAll() Method
The JavaScript string replaceAll() method returns a string replacing all the sequence of characters matching regex and replacement string.
##### Syntax
The replaceAll() method is represented by the following syntax:
**replaceAll(pattern, replacement)**

**pattern** - either a substring or a regex that is to be replaced
**replacement** - the pattern is replaced with this replacement (can be either a string or a function)

![The San Juan Mountains are beautiful!](/img/replaceAll.png)

#### JavaScript String toLowerCase() Method
The JavaScript string toLowerCase() method is used to convert the string into lowercase letter. This method doesn't make any change in the original string.
##### Syntax
The toLowerCase() method is represented by the following syntax:
**string.toLowerCase()**

![The San Juan Mountains are beautiful!](/img/lowercase.png)

#### JavaScript String toUpperCase() Method
The JavaScript string toUpperCase() method is used to convert the string into uppercase letter. This method doesn't make any change in the original string.
##### Syntax
The toUpperCase() method is represented by the following syntax:
**string.toUpperCase()**

![The San Juan Mountains are beautiful!](/img/uppercase.png)

#### JavaScript String concat() Method
The JavaScript string concat() method combines two or more strings and returns a new string. This method doesn't make any change in the original string.
##### Syntax
The concat() method is represented by the following syntax:
**string.concat(str1,str2,...,strn);**

**str1,str2,...,strn** - It represent the strings to be combined.

![The San Juan Mountains are beautiful!](/img/concat.png)

#### JavaScript String split() Method

As the name implies, the **split()** method in JavaScript splits the string into the array of substrings, puts these substrings into an array, and returns the new array. It does not change the original string.

When the string is empty, rather than returning an empty array, the **split()** method returns the array with an empty string. The empty array is returned when both string and separator are empty strings.
##### Syntax
The split() method is represented by the following syntax:
**string.split(separator, limit);**

The function arguments are discussed as follows.

**separator** : It is an optional parameter. It can be a regular expression or a simple string. It specifies the point where the split should take place.
If it has multiple characters, then the sequence of the entire character must be found to split.

**limit** : It is also an optional parameter. It is a non-negative integer that specifies the number of limits. It defines the higher limit on the number of splits to be found in the given string. If it is given, it splits the string at each occurrence of the specified separator. It stops when the limit entries have been placed in the array.

![The San Juan Mountains are beautiful!](/img/split.png)


#### JavaScript String charAt() Method
The JavaScript string charAt() method is used to find out a char value present at the specified index in a string.
The index number starts from **0** and goes to **lenght-1**, where n is the length of the string. The index value can't be a negative, greater than or equal to the length of the string.
##### Syntax
The charAt() method is represented by the following syntax:
**String.charAt(index);**

**index** - It represent the position of a character.
**charAt()** method returns a char value.

![The San Juan Mountains are beautiful!](/img/charAt.png)


#### JavaScript String trim() Method
The trim() is a built-in string function in JavaScript, which is used to trim a string. This function removes the whitespace from both the ends, i.e., start and end of the string. As the trim() is a string method, so it is invoked by an instance of the String class. We have to create an instance of String class with which the trim() method will be used.

*Note* - The trim() method does not change the original string; it just removes the leading and trailing whitespace character.
##### Syntax
The syntax of trim() method is as follows:
**str.trim();**
Here, str is a String class of object that will contain the string to be trimmed.
The trim() method does not have any arguments or parameters inside it.


![The San Juan Mountains are beautiful!](/img/trim.png)


#### JavaScript String toString() Method
* The **toString()** method returns a string as a string.
* The **toString()** method does not change the original string.
* The **toString()** method can be used to convert a string object into a string.

##### Syntax
The toString() method is represented by the following syntax:
**object.toString()**

![The San Juan Mountains are beautiful!](/img/toString.png)



#### JavaScript String includes() Method
The **includes()** method returns **true** if a string contains a specified string.
Otherwise it returns **false**.
The **includes()** method is case sensitive.

##### Syntax
The includes() method is represented by the following syntax:
**string.includes(searchvalue, start);**

**searchvalue** : Required.The string to search for.
**start** : Optional. The position to start from. Default value is 0.

![The San Juan Mountains are beautiful!](/img/includes.png)


#### JavaScript String at() Method
The **at()** method takes an integer value and returns a new String.
This method allows for positive and negative integers. Negative integers count 
back from the last string character

##### Syntax
The includes() method is represented by the following syntax:
**string. at(index);**

**index** :Optional. The index (position) of the  element to be returned. Default is 0. -1 returns the last element.


![The San Juan Mountains are beautiful!](/img/at.png)




## JavaScript Number methods
### JavaScript Number methods _**Math.round(),ceil(),floor()**_

The _**Math.floor()**_ function rounds down a number to the next smallest integer.
The _**Math.ceil()**_ method rounds a decimal number up to the next largest integer and returns it.
The _**Math.round()**_  function returns the number rounded to the nearest integer.

![The San Juan Mountains are beautiful!](/img/fcr.png)



### JavaScript Number methods _**Math.max() and Math.min()**_

The JavaScript _**Math.max()**_ method compares the given numbers and returns the maximum value.
##### Syntax
The _**max()**_ method is represented by the following syntax:
**Math.max(_*num1,num2,....,numN*_);**  
_**num1,num2,....,numN**_  - Numbers to be compared...

![The San Juan Mountains are beautiful!](/img/max.png)


The JavaScript _**Math.min()**_ method compares the given numbers and returns the minimum value.
##### Syntax
The _**min()**_ method is represented by the following syntax:
**Math.min(_*num1,num2,....,numN*_);**  
_**num1,num2,....,numN**_  - Numbers to be compared...

![The San Juan Mountains are beautiful!](/img/min.png)



### JavaScript Number methods _**Math.pow() and Math.sqrt()**_

The JavaScript _**Math.pow()**_ method returns the base to the exponent power such as base exponent. In other words, the base value (x) is multiplied with itself exponent times (y).
##### Syntax
The _**pow()**_ method is represented by the following syntax:
**_*Math.pow(base,exponent)*_;**  

_**base**_  The base number.
_**exponent**_ - The number used to raise the base.


![The San Juan Mountains are beautiful!](/img/pow.png)


The JavaScript _**Math.sqrt()**_ method returns the square root of a number. If the provided number is negative, it returns NaN.
##### Syntax
The _**sqrt()**_ method is represented by the following syntax:
**_*Math.sqrt(num)*_;**  

_**num**_ : - The number.

![The San Juan Mountains are beautiful!](/img/sqrt.png)



### JavaScript Number methods _**Math.abs() and Math.random()**_

The JavaScript _**Math.abs()**_ method returns an absolute value of a given number. The **abs()** is a static method of Math.
##### Syntax
The _**abs()**_ method is represented by the following syntax:
**_*Math.abs(num)*_;**  

_**num**_ : - The number.

![The San Juan Mountains are beautiful!](/img/abs.png)



The JavaScript _**Math.random()**_ method returns the random number between 0 (inclusive) and 1 (exclusive).
##### Syntax
The _**random()**_ method is represented by the following syntax:
**_*Math.random()*_;**  


![The San Juan Mountains are beautiful!](/img/random.png)


### JavaScript Number methods _**isNaN()**_

The isNaN() function checks if a value is **NaN (Not-a-Number)** or not.
##### Syntax
JavaScript provides us with the global function _**isNaN()**_. It returns true if its argument is NaN of the operation.
**_*isNaN(valueOfOperation)*_;**  

![The San Juan Mountains are beautiful!](/img/isNan.png)





# Thanks!!!

# Be happy and Smile!!!

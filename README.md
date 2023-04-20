# String-Methods-Presentation

## **TABLE OF CONTENTS**

1. What is a Method in JS ?
2. String
3. Number   

## What is a Method in JavaScript?

##### A method is a block of code which only runs when it is called. You can pass data, known as parameters, into a method. Methods are used to perform certain actions, and they are also known as functions. Methods are functions stored as object properties.

## String in JavaScript

##### How to create a string in js?

In JavaScript, there are three ways to write a string — they can be written inside **single quotes ( ' ' )**, **double quotes ( " " )**, or **backticks ( ` ` )**. The type of quote used must match on both sides, however it is possible that all three styles can be used throughout the same script.
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

![The San Juan Mountains are beautiful!](/img/substr method.png)

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
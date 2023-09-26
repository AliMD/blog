---
title: Intro To ECMAScript Data Type
description: Talk about fundamentals of the Data-type in ECMAScript.
socialImage: /img/blog/intro-to-ecmascript-data-type/cover.jpg
type:
  - Intro-ES
keywords:
  - ECMAScript
---

Data is everywhere, your age, the number of people on earth, and the decision you made to sit down and read this article. All of these can be **`Data`** because they help us understand the world. this is no different in programming, In programming language data is the information that we collect and store in the computer's memory. In this article, we will talk about the data types in JavaScript.

Data and data types are the building blocks of any programming language because they help us organize information and determine how our programs will run. When you look at your twitter profile, what do you see? Your name, the number of followers, you have, the date of your last post, and whether you liked the comment your friend just made.

In JavaScript, there are seven fundamental data types: **`Number`**, **`String`**, **`Boolean`**, **`Null`**, **`Undefined`**, **`Symbol`**, and **`Object`**.

## Number

Defining a number in JavaScript is pretty simple. The Number data type includes any positive or negative integer, as well as decimals. Entering a number into the console will return it right back to you.

```js
120;

// 120
```

{% link "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number" %}Read more{% endlink %}

## Arithmetic Operations

You can also perform calculations with numbers, basically typing out an expression the way you would type it in a calculator.

```js
3 + 2.1;

// 5.1
```

{% link "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators" %}Read more{% endlink %}

## Comparing Numbers

just like in mathematics, you can compare two numbers to see if one’s greater than, less than, or equal to the other.

```js
5 > 10;

// false

5 < 10;

// true

5 == 10;

// false
```

JavaScript `operators` allow us to perform tests, do the math, join strings together, and other such things, Comparisons between numbers will either evaluate to `true` or `false`. Here are some more examples, so you can try it out!

| Operator | Meaning                  |
| -------- | ------------------------ |
| <        | Less than                |
| >        | Greater than             |
| <=       | Less than or Equal to    |
| >=       | Greater than or Equal to |
| ==       | Equal to                 |
| !=       | Not Equal to             |

> The values true and false have significant importance in JavaScript. These values are called Booleans and are another data type in JavaScript. Later in this article, you’ll learn more about why Booleans are so important in programming.

## Comment

You can use comments to help explain your code and make things clearer. In JavaScript, comments are marked with a double forward-slash `//`. Anything written on the same line after the // will not be executed or displayed. To have the comment span multiple lines, mark the start of your comment with a forward-slash and star, and then enclose your comment inside a star and forward-slash `/ *…* /`.

```js
// This is a single-line comment

/*
this is
a multi-line
comment
*/
```

Comments are often used to clarify and document non-obvious code.

## String

Strings in programming like text in the real world, are used to represent text and are wrapped in either single or double quotes.

```js
"Hello World";
'Hello World';

// "Hello World"

console.log('Hello World');

// "Hello World"

console.log(Hello World);

// Uncaught SyntaxError: missing ) after argument list
```

> It is correct to either use double `"` or single `'` quotes with strings, but it is important to be consistent. If you start a string with a single quote, you must end it with a single quote, and vice versa.

{% link "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String" %}Read more{% endlink %}

## String Concatenation

Did you know you can even add strings together? In JavaScript, this is called `concatenating`. Concatenating two strings together is actually pretty simple!

```js
'Hello,' + ' New York City';

// "Hello, New York City"
```

## Variables

At the beginning of this article, you declared the value of a string, but you didn't have a way to access or reuse the string later.

```js
'Hello'; // Here's a String "Hello"
'Hello' + ' World'; // Here's a new String (also with the value "Hello") concatenated with " World"

// "Hello World"
```

Storing the value of a string in a variable is like packing it away for later use.

```js
let greeting = 'Hello';
```

Now, if you want to use "Hello" in a variety of sentences, you don't need to duplicate "Hello" strings. You can just reuse the greeting variable.

```js
greeting + ' World!';

// Hello World!

greeting + ' Mike!';

// Hello Mike!
```

You can also change the start of the greeting by reassigning a new string value to the variable greeting.

```js
greeting = 'Salam';
greeting + ' World!';

// Salam World!
```

## Naming conventions

When you create a variable, you write the name of the variable using camelCase (the first word is lowercase, and all following words are uppercase). Also, try to use a let:

```js
let totalAfterTax = 53.03; // uses camelCase if the variable name is multiple words
let tip = 8; // uses lowercase if the variable name is one word
```

Not using camelCase for your variable names is not going to necessarily break anything in JavaScript. But there are recommended **style guides** used in all programming languages that help keep code consistent, clean, and easy to read. This is especially important when working on larger projects that will be accessed by multiple developers.

You can read more about Google's [JavaScript StyleGuide](https://google.github.io/styleguide/jsguide.html).

## String Index

Did you know that you can access individual characters in a string? To access an individual character, you can use the character's location in the string, called its index. Just put the index of the character inside square brackets (starting with [0] as the first character) immediately after the string. For example:

```js
'James'[0];

// "J"
```

or more commonly, you will see it like this, using a variable:

```js
let name = 'James';
name[0];

// "J"
```

## Escaping Strings

There are some cases where you might want to create a string that contains more than just numbers and letters. For example, what if you want to use quotes in a string?

```js
"The man whispered, "please speak to me.""

// Uncaught SyntaxError: Unexpected identifier
```

If you try to use quotes within a string, you will receive a `SyntaxError` like the one above.

Because you need to use quotes to denote the beginning and end of strings, the JavaScript engine misinterprets the meaning of your string by thinking `"The man whispered, "` is the string. Then, it sees the remaining `please speak to me.""` and returns a `SyntaxError`.

If you want to use quotes inside a string, and have JavaScript not misunderstand your intentions, you’ll need a different way to write quotes. Thankfully, JavaScript has a way to do this using the backslash character ( `\` ).

In JavaScript, you use the backslash to escape other characters.

Escaping a character tells JavaScript to ignore the character's special meaning and just use the literal value of the character. This is helpful for characters that have special meanings like in our previous example with quotes "…".

Because quotes are used to signify the beginning and end of a string, you can use the backslash character to escape the quotes in order to access the literal quote character.

```js
"The man whispered, \"please speak to me.\""

// The man whispered, "please speak to me."
```

This guarantees that the JavaScript engine doesn’t misinterpret the string and result in an error.

Special characters
Quotes aren’t the only special characters that need to be escaped, there’s actually quite a few. However, to keep it simple, here’s a list of some common special characters in JavaScript.

| Code | Character        |
| ---- | ---------------- |
| \\   | \ (backslash)    |
| "    | " (double quote) |
| '    | ' (single quote) |
| '\n  | newline          |
| \n   | newline          |
| \t   | tab              |

The last two characters listed in the table, newline `\n` and tab `\t`, are unique because they add additional **whitespace** to your Strings. A newline character will add a line break and a tab character will advance your line to the next [tab stop](https://en.wikipedia.org/wiki/Tab_stop).

```js
'Up up\n\tdown down';

// Up up
//   down down
```

## Comparing Strings

Another way to work with strings is by comparing them. You've seen the comparison operators == and != when you compared numbers for equality. You can also use them with strings! For example, let’s compare the string `"Yes"` to `"yes"`.

```js
'Yes' == 'yes';

// false
```

When you run this in the console, it returns false. Why is that? "Yes" and "yes" are the same string, right? Well not quite.

{% link "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape" %}Read more{% endlink %}

### A. Case-sensitive

When you compare strings, case matters. While both strings use the same letters (and those letters appear in the same order), the first letter in the first string is a capital Y while the first letter in the second string is a lowercase y.

```js
'Y' == 'y';

// false
```

### B. Internal Working

In Javascript, strings are compared character-by-character in alphabetical order. Each character has a specific numeric value, coming from [ASCII](https://en.wikipedia.org/wiki/ASCII) value of Printable characters. For example, the character 'A' has a value of 65, and 'a' has a value of 97. You can notice that a lowercase letter has a higher ASCII value than the uppercase character. If you want to know the ASCII value of a particular character, you can try running the code below:

```js
// 1. Pick a string. Your string can have any number of characters.
var my_string = 'a';

// 2. Calculate the ASCII value of the first character, i.e. the character at the position 0.
var ASCII_value = my_string.charCodeAt(0);

// 3. Let us print.
console.log(ASCII_value);

// 97
```

In the example above, if you wish to print ASCII values of all the characters in your string, you would have to use Loops which we will study in a later article. Just for reference, here is how you can use a loop to print the ASCII value of all characters in a string.

```js
var my_string = 'JavaScript';

// Iterate using a Loop
for (var i = 0; i < my_string.length; i++) {
  console.log(my_string.charCodeAt(i));
}
```

The ASCII values of [A-Z] fall in the range [65-90], whereas, the ASCII values of [a-z] fall in the range [97-122]. Therefore, when we compare strings, the comparison happens character-by-character for the ASCII values.

## Booleans

A boolean variable can take either of two values - true or false. For example,

```js
var studentName = 'John';
var haveEnrolledInCourse = true;
var haveCompletedTheCourse = false;
```

A boolean variable is mainly essential in evaluating the outcome of conditionals (comparisons). The result of a comparison is always a boolean variable. We'll study conditionals in my upcoming article, but let's look at our previous example to understand the role of boolean in conditional:

```js
if (haveEnrolledInCourse) {
  console.log('Welcome ' + studentName + ' to Udacity!'); // Will run only if haveEnrolledInCourse is true
}
```

Let's look at an example that will explain the role of a boolean variable in comparison.

```js
var a = 10;
var b = 20;
// a comparison - we will study this in detail in the upcoming article
if (a > b)
  // The outcome of a>b will be a boolean
  console.log('Variable `a` has higher value'); // if a>b is true
else console.log('Variable `b` has higher value'); // if a>b is false
```

In general cases (regular equality check), a true corresponds to the number 1, whereas a false represents the number 0. For example:

```js
if (1) {
  console.log('This statement will always execute because conditional is set to 1 i.e., true');
}

if (0) {
  console.log('This statement will NEVER execute because conditional is set to 0 i.e., false');
}
```

{% link "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean" %}Read more{% endlink %}

## Null & Undefined

null refers to the `value of nothing`;

```js
let x = null;
x;

// null
```

while undefined refers to the `absence of value`.

```js
y;

// 'undefined'

let y;
y;

// 'undefined'
```

{% link "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null" %}Read more{% endlink %}
{% link "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined" %}Read more{% endlink %}

## NaN

NaN stands for `Not-A-Number` and it's often returned indicating an error with number operations. For instance, if you wrote some code that performed a math calculation, and the calculation failed to produce a valid number, NaN might be returned.

```js
// Calculating the square root of a negative number will return NaN
Math.sqrt(-10);

// NaN
```

```js
// Trying to divide a string by 5 will return NaN
'hello' / 5;

// NaN
```

{% link "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN" %}Read more{% endlink %}

## Equality

So far, you’ve seen how you can use == and != to compare numbers and strings for equality. However, if you use == and != in situations where the values that you're comparing have different data-types, it can lead to some interesting results. For example,

```js
'1' == 1;

// true

0 == false;

// true. The == operator is unable to differentiate 0 from false.

' ' == false;

// true. Both the operands on either side of the == operator are first converted to zero, before comparison.
```

All of the above three evaluate to be true. The reason for such interesting outcomes is Type Conversion. In the case of regular comparison, the operands on either side of the == operator are first converted to numbers, before comparison. Therefore, a ' ', false, and 0 are all considered equal. Similarly, a '1' and 1 are also considered equal. If we don't want to convert the operands, before comparison, we have to use a strict comparison ===, which is explained below.

> JavaScript is known as a loosely typed language.

This means that when you’re writing JavaScript code, you do not need to specify data types. Instead, when your code is interpreted by the JavaScript engine it will automatically be converted into the "appropriate" data type. This is called implicit type coercion and you’ve already seen examples like this before when you tried to concatenate strings with numbers.

```js
'julia' + 1;

// "julia1"
```

In this example, JavaScript takes the string "julia" and adds the number 1 to it resulting in the string "julia1". In other programming languages, this code probably would have returned an error, but in JavaScript, the number 1 is converted into the string "1" and then concatenated to the string "julia".

It’s behavior like this that makes JavaScript unique from other programming languages, but it can lead to some quirky behavior when doing operations and comparisons on mixed data types.

{% link "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness" %}Read more{% endlink %}

## Consolation

In this article, we learned about the different data types in JavaScript. we also learned about how to use variables to store data and how to use operators to compare data.

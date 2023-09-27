---
title: Intro To ECMAScript Conditions
description: Talk about fundamentals of the conditions in ECMAScript.
socialImage: /img/blog/intro-to-ecmascript-condition/cover.jpg
overrideTemplateEngine: njk
type:
  - Intro-ES
keywords:
  - ECMAScript
---

Welcome back.

In the last article, you got a basic understanding for how data is represented and stored in the variables. But what good is that data if you can't put it to use?
When you're writing code, the main goal is to solve a problem. The steps your code takes to solve a problem is known as an algorithm.

Let explain it, Imagine you are a computer 🤖

Do you remember the last time you had to decide to buy something? How did you solve that problem? In addition to figuring out whether you really need the item or not, your decision to buy the item ultimately depends on whether you have enough money to buy it. So you ask yourself, do I have enough money to buy this item? If you answered yes, then you buy the product. But if you answered no, then you did not buy the product. The process you went through in your mind to solve that problem, and the steps you took to do so, is really what lies at the heart of writing code.

Up next, you'll see a flowchart.

## Flow Chart

{% image "/img/blog/intro-to-ecmascript-condition/flow-chart.jpg", "flow chart" %}

A flowchart is just a diagram for how to solve a problem.

```diagram
+-------------------+            +-------------------+
|  money >= price?  |  -- No --> |  money >= price?  |
+-------------------+            +-------------------+
         |
        Yes
         |
         v
+-------------------+
|  buy the product  |
+-------------------+
```

## Flow Chart to Code

```js
var productPrice = 15.0; // price of our product
var money = 20.0; // how much money we have

if (money >= price) {
  console.log('buy the product');
} else {
  console.log("don't buy the product");
}

// buy the product
```

```js
var productPrice = 15.0; // price of our product
var money = 10.0; // how much money we have

if (money >= price) {
  console.log('buy the product');
} else {
  console.log("don't buy the product");
}

// don't buy the product
```

## If Else Statements

`If...else` statements allow you to execute certain pieces of code based on a condition, or set of conditions, being met.

```js
if (/ *this expression is true* /) {
  // run this code
} else {
  // run this code
}
```

This is extremely helpful because it allows you to choose which piece of code you want to run based on the result of an expression. For example,

```js
var a = 1;
var b = 2;

if (a > b) {
  console.log('a is greater than b');
} else {
  console.log('a is less than or equal to b');
}

// a is less than or equal to b
```

A couple of important things to notice about if...else statements.

The value inside the if statement is always converted to true or false. Depending on the value, the code inside the if statement is run or the code inside the else statement is run, but not both. The code inside the if and else statements are surrounded by curly braces {...} to separate the conditions and indicate which code should be run.

> When coding, sometimes you may only want to use an if statement. However, if you try to use only an else statement, then you will receive the error `SyntaxError: Unexpected token else.` You’ll see this error because else statements need an if statement in order to work. You can’t have an else statement without first having an if statement.

## Else If Statements

In some situations, two conditionals aren’t enough. Consider the following situation.

You're trying to decide what to wear tomorrow. If it is going to snow, then you’ll want to wear a coat. If it's not going to snow and it's going to rain, then you’ll want to wear a jacket. And if it's not going to snow or rain, then you’ll just wear what you have on.

In EcmaScript, you can represent this secondary check by using an extra if statement called an else if statement.

```js
var weather = 'sunny';

if (weather === 'snow') {
  console.log('Bring a coat.');
} else if (weather === 'rain') {
  console.log('Bring a rain jacket.');
} else {
  console.log('Wear what you have on.');
}

// Wear what you have on.
```

By adding the extra else if statement, you're adding an extra conditional statement.

If it’s not going to snow, then the code will jump to the else if statement to see if it’s going to rain. If it’s not going to rain, then the code will jump to the else statement.

The else statement essentially acts as the "default" condition in case all the other if statements are false.

### 🎓 Practice: Even or Odd

We want to write an if...else statement that:

- prints "even" if the number is an even number
- prints "odd" if the number is an odd number

> Hint: Use the % (modulo) operator to determine if a number is even or odd. The modulo operater takes two numbers and returns the remainder when the first number is divided by the second one:

<details>
  <summary>Solution</summary>

```js
const number = 7;

if (number % 2 === 0) {
  console.log('even');
} else {
  console.log('odd');
}

// odd
```

</details>

## More complex conditions

So far so good!

In many cases, we encounter multiple conditions and situations that require more complex conditions to be used.

Let's lookout this example:

Julia want to go out in weekend if she is not busy and the weather is nice. Otherwise, she will stay at home, that's a more complex condition, let's code this!

## Logical Operators

Here’s the flowchart for Julia’s weekend decision-making process.

```diagram
+-------------------+            +------------+
| is ali 'not busy' |  -- No --> | do nothing |
+-------------------+            +------------+
         |                             Ʌ
                                       |
        Yes                            |
                                       |
         |                             |
         v                             |
+-------------------+                  |
| is weather 'nice' | ------ No --------
+-------------------+
         |

        Yes

         |
         v
 +----------------+
 | go to the park |
 +----------------+
```

Now let's code this!

```js
var ali = 'not busy';
var weather = 'nice';

if (ali === 'not busy' && weather === 'nice') {
  console.log('go to the park');
}

// "go to the park"
```

Notice the && in the code above.

The `&&` symbol is the logical `AND` operator, and it is used to combine two logical expressions into one larger logical expression. If both smaller expressions are true, then the entire expression evaluates to true. If either one of the smaller expressions is false, then the whole logical expression is false.

Another way to think about it is when the && operator is placed between the two statements, the code literally reads, "if Ali is not busy AND the weather is nice, then go to the park".

## Logical expressions

Logical expressions are similar to mathematical expressions, except logical expressions evaluate to either true or false.

```js
11 != 12;

// true
```

You’ve already seen logical expressions when you write comparisons. A comparison is just a simple logical expression.

Similar to mathematical expressions that use `+`, `-`, `*`, `/` and `%`, there are logical operators `&&`, `||` and `!` that you can use to create more complex logical expressions.

## Logical operators

Logical operators can be used in conjunction with boolean values (true and false) to create complex logical expressions.

By combining two boolean values together with a logical operator, you create a logical expression that returns another boolean value. Here’s a table describing the different logical operators:

| Operator | Meaning     | Example            | How it works                                                               |
| -------- | ----------- | ------------------ | -------------------------------------------------------------------------- |
| &&       | Logical AND | value1 && value2   | Returns true if both value1 and value2 evaluate to true.                   |
| \|\|     | Logical OR  | value1 \|\| value2 | Returns true if either value1 or value2 (or even both!) evaluates to true. |
| !        | Logical NOT | !value1            | Returns the opposite of value1. If value1 is true, then !value1 is false.  |

By using logical operators, you can create more complex conditionals like Julia’s weekend example.

> Logical expressions are evaluated from left to right. Similar to mathematical expressions, logical expressions can also use parentheses to signify parts of the expression that should be evaluated first.

## Logical AND and OR

`&& (AND)`

| A     | B     | A && B |
| ----- | ----- | ------ |
| true  | true  | true   |
| true  | false | false  |
| false | true  | false  |
| false | false | false  |

`|| (OR)`

| A     | B     | A \|\| B |
| ----- | ----- | -------- |
| true  | true  | true     |
| true  | false | true     |
| false | true  | true     |
| false | false | false    |

**Truth tables** are used to represent the result of all the possible combinations of inputs in a logical expression. `A` represents the boolean value on the left-side of the expression and `B` represents the boolean value on the right-side of the expression.

Truth tables can be helpful for visualizing the different outcomes from a logical expression. However, do you notice anything peculiar about the truth tables for logical AND and OR?

## Short-circuiting

`&& (AND)`

| A     | B        | A && B |
| ----- | -------- | ------ |
| false | noMatter | false  |
| false | noMatter | false  |

`|| (OR)`

| A    | B        | A \|\| B |
| ---- | -------- | -------- |
| true | noMatter | true     |
| true | noMatter | true     |

In both tables, there are specific scenarios where regardless of the value of B, the value of A is enough to satisfy the condition.

For example, if you look at A AND B, if A is false, then regardless of the value B, the total expression will always evaluate to false because both A and B must be true in order for the entire expression to be true.

This behavior is called short-circuiting because it describes the event when later arguments in a logical expression are not considered because the first argument already satisfies the condition.

## Advanced Conditionals

Truthy and Falsy
Every value in EcmaScript has an inherent boolean value. When that value is evaluated in the context of a boolean expression, the value will be transformed into that inherent boolean value.

The paragraph above is pretty dense with information. You should probably re-read it again! ☝️

Falsy values
A value is falsy if it converts to false when evaluated in a boolean context. For example, an empty String "" is falsy because, "" evaluates to false. You already know if...else statements, so let's use them to test the truthy-ness of "".

```js
if ('') {
  console.log('the value is truthy');
} else {
  console.log('the value is falsy');
}

// "the value is falsy"
```

Here’s the list of all of the falsy values:

- the `Boolean` value false
- the `null` type
- the `undefined` type
- the number `0`
- the empty string `""`
- the odd value `NaN`

That's right, there are only six falsy values in all of EcmaScript!

## Truthy values

A value is truthy if it converts to true when evaluated in a boolean context. For example, the number 1 is truthy because, 1 evaluates to true. Let's use an if...else statement again to test this out:

```js
if (1) {
  console.log('the value is truthy');
} else {
  console.log('the value is falsy');
}

// "the value is truthy"
```

Here are some other examples of truthy values:

- true
- 42
- 'pizza'
- '0'
- 'null'
- 'undefined'
- {}
- []

Essentially, if it's not in the list of falsy values, then it's truthy!

## Ternary Operator

Sometimes, you might find yourself with the following type of conditional.

```js
var isGoing = true;
var color;

if (isGoing) {
  color = 'green';
} else {
  color = 'red';
}

console.log(color);

// 'green'
```

In this example, the variable color is being assigned to either "green" or "red" based on the value of isGoing. This code works, but it’s a rather lengthy way for assigning a value to a variable. Thankfully, in JavaScript there’s another way.

> Using if(isGoing) is the same as using if(isGoing === true). Alternatively, using if(!isGoing) is the same as using if(isGoing === false).

The ternary operator provides you with a shortcut alternative for writing lengthy if...else statements.

conditional `?` (if condition is true) `:` (if condition is false)
To use the ternary operator, first provide a conditional statement on the left-side of the ?. Then, between the ? and : write the code that would run if the condition is true and on the right-hand side of the : write the code that would run if the condition is false. For example, you can rewrite the example code above as:

```js
var isGoing = true;
var color = isGoing ? 'green' : 'red';
console.log(color);

// "green"
```

## Switch Statement

This code not only replaces the conditional, but it also handles the variable assignment for color.

If you breakdown the code, the condition isGoing is placed on the left side of the ?. Then, the first expression, after the ?, is what will be run if the condition is true and the second expression after the, :, is what will be run if the condition is false.

If you find yourself repeating else if statements in your code, where each condition is based on the same value, then it might be time to use a switch statement.

```js
if (option === 1) {
  console.log('You selected option 1.');
} else if (option === 2) {
  console.log('You selected option 2.');
} else if (option === 3) {
  console.log('You selected option 3.');
} else if (option === 4) {
  console.log('You selected option 4.');
} else if (option === 5) {
  console.log('You selected option 5.');
} else if (option === 6) {
  console.log('You selected option 6.');
}
```

A switch statement is an another way to chain multiple else if statements that are based on the same value without using conditional statements. Instead, you just switch which piece of code is executed based on a value.

```js
switch (option) {
  case 1:
    console.log('You selected option 1.');
  case 2:
    console.log('You selected option 2.');
  case 3:
    console.log('You selected option 3.');
  case 4:
    console.log('You selected option 4.');
  case 5:
    console.log('You selected option 5.');
  case 6:
    console.log('You selected option 6.');
}
```

Here, each else if statement (option === [value]) has been replaced with a case clause (case [value]:) and those clauses have been wrapped inside the switch statement.

When the switch statement first evaluates, it looks for the first case clause whose expression evaluates to the same value as the result of the expression passed to the switch statement. Then, it transfers control to that case clause, executing the associated statements.

So, if you set option equal to 3...

```js
var option = 3;

switch (option) {
  ...
}

// You selected option 3.
// You selected option 4.
// You selected option 5.
// You selected option 6.
```

...then the switch statement prints out options 3, 4, 5, and 6.

But that’s not exactly like the original if...else code at the top? So what’s missing?

Break statement
The break statement can be used to terminate a switch statement and transfer control to the code following the terminated statement. By adding a break to each case clause, you fix the issue of the switch statement falling-through to other case clauses.

```js
var option = 3;

switch (option) {
  case 1:
    console.log('You selected option 1.');
    break;
  case 2:
    console.log('You selected option 2.');
    break;
  case 3:
    console.log('You selected option 3.');
    break;
  case 4:
    console.log('You selected option 4.');
    break;
  case 5:
    console.log('You selected option 5.');
    break;
  case 6:
    console.log('You selected option 6.');
    break; // technically, not needed
}

// You selected option 3.
```

## Falling-through

In some situations, you might want to leverage the "falling-through" behavior of switch statements to your advantage.

For example, when your code follows a hierarchical-type structure.

```js
var tier = 'nsfw deck';
var output = 'You’ll receive ';

switch (tier) {
  case 'deck of legends':
    output += 'a custom card, ';
  case "collector's deck":
    output += 'a signed version of the Exploding Kittens deck, ';
  case 'nsfw deck':
    output += 'one copy of the NSFW (Not Safe for Work) Exploding Kittens card game and ';
  default:
    output += 'one copy of the Exploding Kittens card game.';
}

console.log(output);

// You’ll receive one copy of the NSFW (Not Safe for Work) Exploding Kittens card game and one copy of the Exploding Kittens card game.
```

In this example, based on the successful Exploding Kittens Kickstarter campaign (a hilarious card game created by Elan Lee), each successive tier builds on the next by adding more to the output. Without any break statements in the code, after the switch statement jumps to the "nsfw deck", it continues to fall-through until reaching the end of the switch statement.

Also, notice the default case.

```js
var tier = "none";
var output = "You’ll receive ";

switch (tier) {
  ...
  default:
    output += "one copy of the Exploding Kittens card game.";
}

console.log(output);

// You’ll receive one copy of the Exploding Kittens card game.
```

You can add a default case to a switch statement and it will be executed when none of the values match the value of the switch expression.

## Conclusion

In this article, you learned about the different types of conditions you can use in EcmaScript. You learned about if...else statements, else if statements, logical operators, truthy and falsy values, the ternary operator, and switch statements.

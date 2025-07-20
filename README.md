# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshots](#screenshots)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshots

![Mobile View](./assets/images/Mobile_view.png)

*Figure1: Mobile View*

![Desktop View](./assets/images/Desktop_view.png)

*Figure2: Desktop View*

![Desktop Error](./assets/images/Desktop_error.png)

*Figure3: Desktop Error*



### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Live Site](https://charley95.github.io/intro-component-signUp/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- JavaScript ES6


### What I learned

I learnt the use of regular expression to validate email input. Below is the code snippet for the regular expression:

```js
// Function to validate the email format using a regular expression
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}
```


### Continued development
I want to build more projects and find better ways to make my code shorter and more concise while still maintaining it's full functionality and code quality.

### Useful resources
- [W3Schools](https://www.w3schools.com/)
- [StackOverflow](https://stackoverflow.com/questions)
- [CSS Tricks](https://css-tricks.com/)
- [YouTube](https://www.youtube.com/watch?v=8CnOx625dpo)
- [Google](https://www.google.com)
- [W3C Validator](https://validator.w3.org/)



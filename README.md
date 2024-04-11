# Frontend Mentor - Product preview card component solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview
*This is me taking up the product-card-component challenge from [Frontend Mentor](https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa). An inside look on how I tackled the challenge, you will see screenshots of the finished product, and the process I took for the challenge.*
### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover and focus states for interactive elements

### Screenshot

![Desktop View](/output/output-desktop.png)
![Desktop View - Active button](/output/output-desktop-active.png)
![Desktop View - Success modal](/output/output-desktop-sucess-active.png)
![550px](/output/output-max-width-550px.png)
![Mobile View](/output/output-mobile.png)
![Mobile View - Active button](/output/output-mobile-active.png)
![Mobile View - Success modal](/output/output-mobile-sucess-active.png)

**Error handling**
![Desktop View - Error](/output/desktop-error.png)
![Mobile View - Error](/output/mobile-error.png)

### Links

- Live Site URL: [Live-site](dd-newsletter-sign-up.netlify.app)

## My process
**I always start with looking into the design first so I can plan ahead and come up with a solution on how to tackle the project.**

1. I built the structure of the project using HTML, adding all the necessary assets such as the stylesheet, scripts, fonts, or icons needed for the project. 
 - As usual the main component is inside a div container so I can center it properly.
 - The main component is divided into 2 containers, left is for the texts, input field, and the button. Right is for the image. The main component has a display flex and will have a flex direction of column-reverse once the screen reaches a smaller size.
 - For the success alert, I put it in a `<div>` container and inside it is another container holding the texts, and image/icon then a button for the dismiss message.
2. After I created the markup I proceed on making the design.
 - I used utility classes for elements or components that needs to have a display of flex, flex-direction of column, margin-bottom, or font-weight of 700.
 - I made the button reusable since there is two instances of the button throughout the design, I believe this helps for scalability.
 3. After I'm done with the design, I proceed on working on the function of the component.
 - I put an event listener on the input field to check if the input of the user is in a correct email format or if the field is left empty, if so then an error messsage will show.
 - I also put an event listener to the submit button, this will check if the input field is left empty if not then an error message shows up, and if it is not left empty and the email is in the correct format then the success message shows up.
 - In the success message the button functions as the button to clsoe the modal.
 - You can also close the modal by pressing the 'escape' key on your keyboard.
### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Desktop-first workflow
- [Sass](https://sass-lang.com/) - Sass preprocessor
- [Google fonts](https://fonts.google.com/) - For font-styles


### What I learned

What I learned here is how to manipulate the DOM and I learned how to use utility classes and which components can be reused.

### Continued development

- When to use or not to use flexbox
- Sass
- Javascript
- DOM manipulation

### Useful resources

- [Udemy](https://www.udemy.com/) - This helped me get started with web development and design and gave me a strong foundation.
- [mdndocs](https://developer.mozilla.org/en-US/) - This helped me a lot when I'm having troubles with my html, css, or even javascript. I find this really useful especially when learning new techniques.
- [chatGPT](https://openai.com/product/chatgpt) - ChatGPT is really helpful when I'm encountering errors that I have never encounterd before or if I forgot something and I need a quick recall.

## Author
- Frontend Mentor - [@daviidii](https://www.frontendmentor.io/profile/daviidii)
- GitHub - [@daviidii](https://github.com/daviidii)

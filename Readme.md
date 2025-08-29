Q1: What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
A1: getElementById selects one element by its unique ID and returns just that element. getElementsByClassName selects all elements with a certain class and gives back a live list. querySelector selects the first element that matches a CSS-style selector, while querySelectorAll selects all matching elements and returns a static list which does not update automatically.

Q2: How do you create and insert a new element into the DOM?
A2: To create a new element, we can use document.createElement(). Then we can set its content or attributes, and finally insert it into the DOM with methods like appendChild or append or prepend.

Q3: What is Event Bubbling and how does it work?
A3: Event bubbling is when an event like a click, starts from the exact element clicked on and then “bubbles up” through its parents. So if we click on a button inside a div, the button’s handler will run first, then the div’s, then higher up elements, all the way to the document. 

Q4: What is Event Delegation in JavaScript? Why is it useful?
A4: Event delegation is putting one listener on the parent and let the event bubble up instead of putting event listener on every single child element. Inside the parent’s listener, we can check which child actually triggered it. This is super useful because it’s faster, we don’t have to manage tons of listeners, and it even works for new elements added later.

Q5: What is the difference between preventDefault() and stopPropagation() methods?
A5: preventDefault() stops browser’s default action. stopPropagation() stops the event from bubbling up to parent elements.


1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans:-
 getElementById vs getElementsByClassName
 * getElementById can give you unique one element,
but getElementsByClassName can give you multiple elements.
      *getElementById Return Type is a single DOM element, getElementsByClassName Return Type is an HTMLCollection.

      querySelector vs querySelectorAll
    *querySelector Selects the first element that matches a given CSS selector, but  querySelectorAll Selects all elements that match a given CSS selector.
    *   querySelector Return Type is a single DOM element but  querySelectorAll Return Type is a NodeList.

2. How do you create and insert a new element into the DOM?

Ans:-
const newDiv = document.createElement("div");

newDiv.textContent = "Hey ! I am TOHA";

document.body.appendChild(newDiv);

3. What is Event Bubbling and how does it work?
Ans:-
Event bubbling means when an event happens on an element, it first runs the handler on that element, then moves upwards through its parent elements one by one until it reaches the root (document).
4.What is Event Delegation in JavaScript? Why is it useful?
Ans:-


Event delegation means adding a single event listener to a parent element to handle events on its child elements using event bubbling.

Useful because Saves memory.
Handles dynamically added elements automatically.
5.What is the difference between preventDefault() and stopPropagation() methods?
Ans:-

* preventDefault() → Stops the default browser action (e.g., stop a link from opening, stop form from submitting).

* stopPropagation() → Stops the event from bubbling up to parent elements.



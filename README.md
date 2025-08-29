1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans:-

    getElementById:- getElementById finds element by it's ID. for example, if we give a element ID "my-class" then we can access the element by using the function document.getElementById("myId");

    getElementsByClassName:- finds all element with the same class name and returns a list like an array of elements. 
    if we have 5 classes with the same class name, it will access all the 5 elements.

    querySelector:- it finds the first element that matches a CSS selector. whether the selector is a class or tag or even a id, it will return the first element. for example, if we use 5 classes with the same class name class="my-class", it will only access the first class of the class same name.

    querySelectorAll:- it will find all elements that matches a CSS selector and return like an Array. 



2. How do you create and insert a new element into the DOM?
Ans:-

    To create and insert a new element into the DOM, we usually need to follow three steps.
    i. first of all creating the element:- document.createElement("tag")
    ii. then, add content or attributes element.textContent = "..."
    iii. and finally, insert into the page, parent.appendChild(element)


3. What is Event Bubbling and how does it work?
Ans:-

    Event bubbling means when we click or trigger an event on a child element, the event does not stop there. it bubbles up through the parent elements one by one, until it reached the document.


4. What is Event Delegation in JavaScript? Why is it useful?
Ans:-

    event delegation is a technique in JavaScript where instead of adding many child elements, we can add one event listener to a parent element. and that parent element will listens and bubble up from its children.
    it's useful because we can add just one listener instead of many. Also it works even if new child elements are added later. also it helps to write cleaner code(less repetition, easier to maintain).


5. What is the difference between preventDefault() and stopPropagation() methods?
ans:-

    preventDefault():- this is used when a browser wants to do something and we wants that it d'ont do that.
    for example, normally clicking a link will direct to google. but with this function, the default action is stopped.
    stopPropagation():- This is about events traveling up (bubbling). Normally, clicking the button first fires the button’s event, then “bubbles up” and also fires the parent’s event. but with stopPropagation(), the parent won’t get the event.

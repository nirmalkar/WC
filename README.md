# WC [source](https://developer.mozilla.org/en-US/docs/Web/Web_Components)

**Web Components** allows you to create reusable custom elements with their functionality encapsulated away from the rest of your code and further you can use those elements in your web application.

Web Components aims to solve such problems — it consists of three main technologies, which can be used together to create versatile custom elements with encapsulated functionality that can be reused wherever you like without fear of code collisions.

-   **Custom elements**: A set of JavaScript APIs that allow you to define custom elements and their behavior, which can then be used as desired in your user interface.
-   **Shadow DOM**: A set of JavaScript APIs for attaching an encapsulated "shadow" DOM tree to an element — rendered separately from the main document DOM — and controlling associated functionality. In this way, you can keep an element's features private, so they can be scripted and styled without the fear of collision with other parts of the document.
-   **HTML templates**: The [<template>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template) and [<slot>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) elements enable you to write markup templates that are not displayed in the rendered page. These can then be reused multiple times as the basis of a custom element's structure.

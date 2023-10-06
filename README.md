# onGod.js

onGod.js is a light-weight (and lightheared)JavaScript library that enables the capture of Generation, Operation or Deletion of DOM elements. Simply put, it triggers an 'ongod' event whenever a child node is created, edited or removed. It uses the Mutation Observer which can be seen in the event. This thing was created < 9 hours, use at your own risk.

## Usage

- The library uses a debounced event reload to optimize performance when many elements are involved.
- You can use a custom action defined within the `ongod` attribute of an element to specify what should happen when the GOD event is triggered.

```javascript
// Example of defining a custom action within an HTML element
<div ongod="console.log('Custom action triggered!')">Some Element</div>
```

## Getting Started

1. Include the `onGod.js` script in your HTML file.

```html
<script src="onGod.js"></script>
```

2. Define custom actions using the `ongod` attribute on your HTML elements.

```html
<div ongod="function(event){console.log('The Element or it's children were changed.')}">Some Element</div>
```

3. The library will automatically handle DOM changes within this element.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

## Author

- Nikhil Ranjan

# Document 

### `hasClass(elements: HTMLElement[] | HTMLElement, classNames: string[] | string)`

Determines whether one or more elements have a given CSS class.

source: [hasClass](../src/ts/document.ts#hasClass)

```typescript
// Example 1: Single element, single class
const el1 = document.createElement('div');
el1.classList.add('foo');

const result1 = hasClass(el1, 'foo');

console.log(result1); // Output: true

// Example 2: Single element, multiple classes
const el2 = document.createElement('div');
el2.classList.add('foo', 'bar', 'baz');

const result2 = hasClass(el2, ['foo', 'bar']);

console.log(result2); // Output: [true, true]

// Example 3: Multiple elements, single class
const el3a = document.createElement('div');
el3a.classList.add('foo');

const el3b = document.createElement('div');

const result3 = hasClass([el3a, el3b], 'foo');

console.log(result3); // Output: [true, false]

// Example 4: Multiple elements, multiple classes
const el4a = document.createElement('div');
el4a.classList.add('foo', 'bar');

const el4b = document.createElement('div');
el4b.classList.add('baz');

const result4 = hasClass([el4a, el4b], ['foo', 'baz']);

console.log(result4); // Output: [[true, false], [false, true]]

```
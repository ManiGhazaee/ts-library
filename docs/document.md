# Document

### `hasClass(elements: HTMLElement[] | HTMLElement, classNames: string[] | string)`

Determines whether one or more elements have a given CSS class.

**Example:**

```typescript
// Example 1: Single element, single class
const el1 = document.createElement("div");
el1.classList.add("foo");

const result1 = hasClass(el1, "foo");

console.log(result1); // Output: true

// Example 2: Single element, multiple classes
const el2 = document.createElement("div");
el2.classList.add("foo", "bar", "baz");

const result2 = hasClass(el2, ["foo", "bar"]);

console.log(result2); // Output: [true, true]

// Example 3: Multiple elements, single class
const el3a = document.createElement("div");
el3a.classList.add("foo");

const el3b = document.createElement("div");

const result3 = hasClass([el3a, el3b], "foo");

console.log(result3); // Output: [true, false]

// Example 4: Multiple elements, multiple classes
const el4a = document.createElement("div");
el4a.classList.add("foo", "bar");

const el4b = document.createElement("div");
el4b.classList.add("baz");

const result4 = hasClass([el4a, el4b], ["foo", "baz"]);

console.log(result4); // Output: [[true, false], [false, true]]
```

**source:**
 [hasClass](https://github.com/ManiGhazaee/ts-library/blob/main/src/ts/document.ts#L110)

#

### `getSiblings(elements: Element | Element[]): (Element | Element[] | null)[] | null`

function to get all siblings of given element or elements.

**Example:**

```typescript
// Example 1: Get siblings of a single element
const elem1 = $(".my-element")!; // $(querySelector: string): HTMLElement | null
getSiblings(elem1);

// Example 2: Get siblings of multiple elements
const elems2 = $$(".my-element"); // $$(querySelectorAll: string): HTMLElement[]
getSiblings(elems2);

// Example 3: Get siblings of an element with no siblings
const elem3 = $(".my-element-with-no-siblings")!;
getSiblings(elem3);

// Example 4: Get siblings of multiple elements with some having no siblings
const elems4 = $$(".my-elements-with-no-sibilings");
getSiblings(elems4);
```

**source:**
 [getSiblings](https://github.com/ManiGhazaee/ts-library/blob/main/src/ts/document.ts#L381)

#

### `getElementsByIds(): object`

This function returns an object containing all elements with an id attribute in the HTML document, where the keys are converted to camelCase format.

***Dependencies***

This function requires the kebabToCamel function to be available in the codebase.

***Return Value***

An object with key-value pairs, where the keys are the camelCase versions of the id attributes of the elements, and the values are the corresponding elements.

**Example:**
```typescript
// Example usage:
const elementsByIds = getElementsByIds();
console.log(elementsByIds);

// Output:
// {
//   myElement: HTMLElement,     // If an element has id="my-element"
//   anotherElement: HTMLElement // If an element has id="another-element"
//   ...
// }
```

**source:**
[getElementsByIds](https://github.com/ManiGhazaee/ts-library/blob/main/src/ts/document.ts#L5)

#

### `kebabToCamel(str: string): string`

This function takes a string in kebab-case format (e.g., "my-example-string") and converts it to camelCase format (e.g., "myExampleString").

***Parameters***

str (string): The kebab-case string to be converted to camelCase.

***Return Value***

A new string with the converted camelCase format.

**Example:**

```typescript
kebabToCamel(kebabCaseString);// Output: "myExampleString"
```

**source:**
[kebabToCamel](https://github.com/ManiGhazaee/ts-library/blob/main/src/ts/document.ts#L19)

#

### `createAndAppendElement(tagName: string, attributes: { [key: string]: string }, parentElem: Element): void `

This function takes a tagName, a set of attributes in the form of a key-value pair, and a parentElem element. It creates a new HTML element with the given tagName, sets the specified attributes to the element, and then appends it to the provided parentElem.

***Parameters***

tagName (string): The tag name of the element to be created (e.g., "div", "span", "p", etc.).

attributes ({ [key: string]: string }): An object containing attribute names as keys and their corresponding values as strings. These attributes will be set on the new element.

parentElem (Element): The parent element to which the newly created element will be appended.

***Return Value***

This function does not return any value (void).

**Example:**

```typescript
// Example usage:
const parentElement = document.getElementById("parent-element")!;
const attributes = {
    class: "custom-class",
    id: "custom-id",
    dataValue: "12345"
};
createAndAppendElement("div", attributes, parentElement);
```

In this example, the function will create a new div element with the specified attributes and append it as a child to the parentElement.

Note: Make sure to pass a valid parent element to the function, and ensure that the parentElement is already present in the DOM before calling this function.

**source:**
[createAndAppendElement](https://github.com/ManiGhazaee/ts-library/blob/main/src/ts/document.ts#L34)

#

### `rmClasses(elements: Array<Element> | Element, classesToRemove: string | string[]): void`

This function takes elements and classesToRemove as parameters. The elements parameter can be an array of elements or a single element. The classesToRemove parameter can be a string representing a single class name or an array of strings representing multiple class names.

***Parameters***

elements (Array < Element > | Element): An array of elements or a single element from which the specified classes will be removed.

classesToRemove (string | string[]): A string representing a single class name or an array of strings representing multiple class names to be removed.

***Return Value***

This function does not return any value (void).
Example


```typescript
// Example 1: Remove class "example" from all elements with class "container"
const containers = document.querySelectorAll('.container');
rmClasses(containers, 'example');

// Example 2: Remove classes "class1" and "class2" from a single element
const elem = document.querySelector('#my-element');
rmClasses(elem, ['class1', 'class2']);
```

Note: Ensure that the elements and classes exist in the DOM before calling this function.

**source:**
[rmClasses](https://github.com/ManiGhazaee/ts-library/blob/main/src/ts/document.ts#L55)

#

### `addClasses(elements: Array<Element> | Element, classesToAdd: string | string[])`

This function takes elements and classesToAdd as parameters. The elements parameter can be an array of elements or a single element. The classesToAdd parameter can be a string representing a single class name or an array of strings representing multiple class names.

***Parameters***

elements (Array< Element > | Element): An array of elements or a single element to which the specified classes will be added.

classesToAdd (string | string[]): A string representing a single class name or an array of strings representing multiple class names to be added.

***Return Value***

This function does not return any value (void).

**Example:**

```typescript
Copy code
// Example 1: Add class "example" to all elements with class "container"
const containers = document.querySelectorAll('.container');
addClasses(containers, 'example');

// Example 2: Add classes "class1" and "class2" to a single element
const elem = document.querySelector('#my-element');
addClasses(elem, ['class1', 'class2']);
```
Note: Ensure that the elements and classes exist in the DOM before calling this function.

**source:**
[addClasses](https://github.com/ManiGhazaee/ts-library/blob/main/src/ts/document.ts#L81)

#

### `switchClass(elements: Array<HTMLElement> | HTMLElement, classToRemove: string, classToAdd: string)`

This function takes elements, classToRemove, and classToAdd as parameters.
The elements parameter can be an array of HTMLElements or a single HTMLElement.
The classToRemove parameter is a string representing the class to be removed, and classToAdd is a string representing the class to be added.

***Parameters***

elements (Array< HTMLElement > | HTMLElement): An array of HTMLElements or a single HTMLElement from which the specified class will be removed and the new class will be added.

classToRemove (string): The class name to be removed from each HTMLElement.

classToAdd (string): The class name to be added to each HTMLElement.

***Return Value***

This function does not return any value (void).

**Example:**

```typescript
// Example 1: Remove class "old-class" and add class "new-class" to all elements with class "container"
const containers = document.querySelectorAll('.container');
switchClass(containers, 'old-class', 'new-class');

// Example 2: Remove class "highlight" and add class "active" to a single element
const elem = document.querySelector('#my-element');
switchClass(elem, 'highlight', 'active');
```

Note: Ensure that the elements and classes exist in the DOM before calling this function.

**source:**
[switchClass](https://github.com/ManiGhazaee/ts-library/blob/main/src/ts/document.ts#L96)

#

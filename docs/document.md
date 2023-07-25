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

#

### `getElementsByIds(): object`

This function returns an object containing all elements with an id attribute in the HTML document, where the keys are converted to camelCase format. Returns an object with key-value pairs, where the keys are the camelCase versions of the id attributes of the elements, and the values are the corresponding elements.

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

#

### `createAndAppendElement(tagName: string, attributes: { [key: string]: string }, parentElem: Element): void `

This function takes a tagName, a set of attributes in the form of a key-value pair, and a parentElem element. It creates a new HTML element with the given tagName, sets the specified attributes to the element, and then appends it to the provided parentElem.

**Example:**

```typescript
// Example usage:
const parentElement = document.getElementById("parent-element")!;
const attributes = {
        class: "custom-class",
        id: "custom-id",
        dataValue: "12345",
};
createAndAppendElement("div", attributes, parentElement);
```

In this example, the function will create a new div element with the specified attributes and append it as a child to the parentElement.

> **Note**
> Make sure to pass a valid parent element to the function, and ensure that the parentElement is already present in the DOM before calling this function.

#

### `rmClass(elements: Array<Element> | Element, classesToRemove: string | string[]): void`

This function takes elements and classesToRemove as parameters. The elements parameter can be an array of elements or a single element. The classesToRemove parameter can be a string representing a single class name or an array of strings representing multiple class names.

**Example:**

```typescript
// Example 1: Remove class "example" from all elements with class "container"
const containers = document.querySelectorAll(".container");
rmClass(containers, "example");

// Example 2: Remove classes "class1" and "class2" from a single element
const elem = document.querySelector("#my-element");
rmClass(elem, ["class1", "class2"]);
```

> **Note**
> Ensure that the elements and classes exist in the DOM before calling this function.

#

### `addClass(elements: Array<Element> | Element, classesToAdd: string | string[])`

This function takes elements and classesToAdd as parameters. The elements parameter can be an array of elements or a single element. The classesToAdd parameter can be a string representing a single class name or an array of strings representing multiple class names.

**Example:**

```typescript
// Example 1: Add class "example" to all elements with class "container"
const containers = document.querySelectorAll(".container");
addClass(containers, "example");

// Example 2: Add classes "class1" and "class2" to a single element
const elem = document.querySelector("#my-element");
addClass(elem, ["class1", "class2"]);
```

> **Note**
> Ensure that the elements and classes exist in the DOM before calling this function.

#

### `switchClass(elements: Array<HTMLElement> | HTMLElement, classToRemove: string, classToAdd: string)`

This function takes elements, classToRemove, and classToAdd as parameters.
The elements parameter can be an array of HTMLElements or a single HTMLElement.
The classToRemove parameter is a string representing the class to be removed, and classToAdd is a string representing the class to be added.

**Example:**

```typescript
// Example 1: Remove class "old-class" and add class "new-class" to all elements with class "container"
const containers = document.querySelectorAll(".container");
switchClass(containers, "old-class", "new-class");

// Example 2: Remove class "highlight" and add class "active" to a single element
const elem = document.querySelector("#my-element");
switchClass(elem, "highlight", "active");
```

> **Note**
> Ensure that the elements and classes exist in the DOM before calling this function.

#

### `rmAllElemsBy$$(querySelectorAll: string): void`

Removes all elements from the DOM that match the given CSS selector.

**Example:**

```typescript
// Remove all elements with class "example"
rmAllElemsBy$$(".example");
```

#

### `byId(id: string): HTMLElement | null`

A short version of getElementById that returns the DOM element with the specified id.

**Example:**

```typescript
const elem = byId("my-element");
```

#

### `byClassName(className: string): HTMLCollectionOf<HTMLElement>`

A function to get all elements with the specified class name.

**Example:**

```typescript
const elements = byClassName("my-class");
```

#

### `$(querySelector: string): HTMLElement | null`

A function that uses querySelector to select a single element based on the given CSS selector.

**Example:**

```typescript
const elem = $("div.my-element");
```

#

### `$$(querySelectorAll: string): HTMLElement[]`

A function that uses querySelectorAll to select multiple elements based on the given CSS selector, and returns them as an array.

**Example:**

```typescript
const elems = $$(".my-elements");
```

#

### `lsGetAll(lsItems: { [key: string]: string }): void`

Retrieves all items from local storage and updates the values in the provided object.

**Example:**

```typescript
const lsItems = { key1: "", key2: "", key3: "" };
lsGetAll(lsItems);
// After the function call, lsItems will be updated with the corresponding values from local storage (if available).
```

#

### `lsSetAll(lsItems: { [key: string]: string }): void`

Sets all key-value pairs in the provided object to the localStorage.

**Example:**

```typescript
const lsItems = { key1: "value1", key2: "value2", key3: "value3" };
lsSetAll(lsItems);
// All key-value pairs in lsItems will be saved to localStorage.
```

#

### `lsSet(lsKey: string, lsVal: string): void`

Sets a key-value pair to the localStorage.

**Example:**

```typescript
lsSet("myKey", "myValue");
// The key "myKey" with the value "myValue" will be saved to localStorage.
```

#

### `lsGet(lsKey: string): string | null`

Gets the value associated with the provided key from localStorage.

**Example:**

```typescript
const value = lsGet("myKey");
console.log(value); // Outputs the value associated with "myKey" or null if it doesn't exist.
```

#

### `isLastChild(el: HTMLElement): boolean`

Checks if an element is the last child of its parent.

**Example:**

```typescript
const elem = document.querySelector(".my-element");
const isLast = isLastChild(elem);
console.log(isLast); // Outputs true if the element is the last child, false otherwise.
```

#

### `isFirstChild(el: HTMLElement): boolean`

Checks if an element is the first child of its parent.

**Example:**

```typescript
const elem = document.querySelector(".my-element");
const isFirst = isFirstChild(elem);
console.log(isFirst); // Outputs true if the element is the first child, false otherwise.
```

#

### `cssToElements(cssRulesString: string, elementsArray: HTMLElement | HTMLElement[]): void`

This function allows you to apply CSS rules to one or multiple HTMLElements without removing or duplicating the existing CSS rules. It takes a cssRulesString parameter containing valid CSS rules that you want to apply. The rules should be separated by a semicolon and a space ("; "). Ensure there are no unnecessary semicolons in the string.

The function also takes an elementsArray parameter, which specifies the target element(s) to apply the CSS rules. You can pass a single HTMLElement or an array of HTMLElements. If you provide an array of elements, the function will apply the CSS rules to each element in the array.

The process of applying CSS rules involves merging the provided CSS rules with the existing CSS rules of each element. It ensures that duplicate rules are removed to prevent unnecessary redundancy in the cssText of each element.

**Example:**

```typescript
// Apply CSS rules to a single element
const element = document.getElementById("myElement");
cssToElements("color: red; font-size: 16px;", element);

// Apply CSS rules to an array of elements
const elements = document.querySelectorAll(".myClass");
cssToElements("background-color: yellow; border: 1px solid black;", elements);
Explanation:
```

> **Note**
> Make sure to use this function carefully, as it directly manipulates the cssText property of the elements. It may override existing styles if not used properly.

#

### `cssToElementsReplace(cssRulesString: string, elementsArray: HTMLElement | HTMLElement[]): void`

This function allows you to replace the existing CSS rules of one or multiple HTMLElements with the provided CSS rule string. It takes a cssRulesString parameter containing valid CSS rules that you want to set for the elements. The rules should be separated by a semicolon and a space ("; ").

The function also takes an elementsArray parameter, which specifies the target element(s) whose CSS rules will be replaced. You can pass a single HTMLElement or an array of HTMLElements. If you provide an array of elements, the function will replace the CSS rules for each element in the array.

**Parameters:**

`cssRulesString (string)` : A string containing valid CSS rules that will replace the existing CSS rules for the elements.

`elementsArray (HTMLElement | HTMLElement[]) `: The target element(s) whose CSS rules will be replaced. It can be a single HTMLElement or an array of HTMLElements.

**Example:**

```typescript
const elements = document.querySelectorAll(".myClass");
cssToElementsReplace("background-color: yellow; border: 1px solid black;", elements);
```

> **Note**
> When using this function, keep in mind that it directly sets the cssText property of the elements, which means it will override any existing styles.

#

### `cssToElementsAdd(cssRulesString: string, elementsArray: HTMLElement | HTMLElement[])`

This function allows you to add CSS rules to the existing styles of one or multiple HTMLElements. It takes a cssRulesString parameter containing valid CSS rules that you want to add to the elements. The rules should be separated by a semicolon and a space ("; ").

The function also takes an elementsArray parameter, which specifies the target element(s) to which the CSS rules will be added. You can pass a single HTMLElement or an array of HTMLElements. If you provide an array of elements, the function will add the CSS rules to each element in the array.

**Parameters:**

`cssRulesString (string)`: A string containing valid CSS rules that will be added to the existing CSS rules for the elements.

`elementsArray (HTMLElement | HTMLElement[])`: The target element(s) to which the CSS rules will be added. It can be a single HTMLElement or an array of HTMLElements.

**Example:**

```typescript
const elements = document.querySelectorAll(".myClass");
cssToElementsAdd("color: red; font-size: 16px;", elements);
```

#

### `displayBlock(elements: HTMLElement[] | HTMLElement): void`

This function sets the display property of one or multiple HTMLElements to "block", making them visible. It takes an elements parameter, which can be either a single HTMLElement or an array of HTMLElements. The function will set the display property of each element to "block" to make them visible in the document flow.

**Parameters:**

`elements (HTMLElement[] | HTMLElement)`: The target element(s) whose display property will be set to "block". It can be a single HTMLElement or an array of HTMLElements.

**Example:**

```typescript
const myElements = document.querySelectorAll(".my-element");
displayBlock(myElements);
```

#

### `displayNone(elements: HTMLElement | HTMLElement[]): void`

This function sets the display property of one or multiple HTMLElements to "none", effectively hiding them from the document flow. It takes an elements parameter, which can be either a single HTMLElement or an array of HTMLElements. The function will set the display property of each element to "none" to hide them from the rendered page.

**Parameters:**

`elements (HTMLElement | HTMLElement[])`: The target element(s) whose display property will be set to "none". It can be a single HTMLElement or an array of HTMLElements.

**Example:**

```typescript
const myElements = document.querySelectorAll(".my-element");
displayNone(myElements);
```

> **Note**
> Setting an element's display property to "none" removes it from the visible layout, but it will still exist in the DOM and can be shown again by changing its display property to another valid value.

#

### `setDisplay(elements: HTMLElement | HTMLElement[], displayString: string): void`

This function sets the display property of one or multiple HTMLElements to the specified value. It takes two parameters: elements and displayString. The elements parameter can be either a single HTMLElement or an array of HTMLElements. The function will set the display property of each element in the array to the provided displayString, making them visible or hidden based on the value.

**Parameters:**

`elements (HTMLElement | HTMLElement[])`: The target element(s) whose display property will be set.

`displayString (string)`: The value to which the display property of the elements will be set.

**Example:**

```typescript
const myElements = document.querySelectorAll(".my-element");
setDisplay(myElements, "block");
```

#

### `opacity_1(elements: HTMLElement | HTMLElement[])`

This function sets the opacity of one or multiple elements to 1, making them fully opaque. It takes a elements parameter, which can be either a single HTMLElement or an array of HTMLElements. The function will set the opacity of each element in the array to 1, making them fully visible.

**Parameters:**

`elements (HTMLElement | HTMLElement[])`: The target element(s) whose opacity will be set to 1.

**Example:**

```typescript
const myElement = document.getElementById("my-element");
opacity_1(myElement);
```

#

### `opacity_0(elements: HTMLElement | HTMLElement[])`

This function sets the opacity of one or multiple elements to 0, making them fully transparent and invisible. It takes a elements parameter, which can be either a single HTMLElement or an array of HTMLElements. The function will set the opacity of each element in the array to 0, effectively hiding them from view.

**Parameters:**

`elements (HTMLElement | HTMLElement[])`: The target element(s) whose opacity will be set to 0.

**Example:**

```typescript
const myElement = document.getElementById("my-element");
opacity_0(myElement);
```

#

### `isBlock(element: HTMLElement): boolean`

This function checks if the display property of a given HTMLElement is set to "block". It takes a single element parameter representing the target element. The function returns true if the element's display is "block", indicating that it is visible in the document flow, or false if the display is set to any other value.

**Parameters:**

`element (HTMLElement)`: The target element to check.

**Example:**

```typescript
const myElement = document.getElementById("my-element");
if (isBlock(myElement)) {
        // Element's display is set to "block"
} else {
        // Element's display is not "block"
}
```

#

### `isNone(element: HTMLElement): boolean`

This function checks if the display property of a given HTMLElement is set to "none", indicating that the element is hidden from the document flow. It takes a single element parameter representing the target element. The function returns true if the element's display is "none", indicating that it is hidden, or false if the display is set to any other value.

**Parameters:**

`element (HTMLElement)`: The target element to check.

**Example:**

```typescript
const myElement = document.getElementById("my-element");
if (isNone(myElement)) {
        // Element's display is set to "none"
} else {
        // Element's display is not "none"
}
```

#

### `isHTMLElement(element: unknown): element is HTMLElement`

This function takes an `element` parameter of type `unknown` and returns a boolean value indicating whether the element is an instance of `HTMLElement`.

**Example:**

```typescript
const element = document.getElementById("myElement");

if (isHTMLElement(element)) {
        console.log("Element is an HTML element");
} else {
        console.log("Element is not an HTML element");
}
```

#

### `getNextElementBy(element: HTMLElement, by: "tag" | "id" | "class", target: string): HTMLElement | undefined`

This function takes an `element` parameter of type `HTMLElement`, a `by` parameter of type `"tag" | "id" | "class"`, and a `target` parameter of type `string`. It returns the next sibling element of the provided `element` that matches the specified criteria.

**Parameters:**

- `element` (HTMLElement): The element from which to start searching for the next sibling element.
- `by` ("tag" | "id" | "class"): The criteria to use for matching the next sibling element. Possible values are "tag", "id", or "class".
- `target` (string): The value to match against the criteria specified by the `by` parameter.

**Returns:**

- `HTMLElement | undefined`: The next sibling element that matches the specified criteria, or `undefined` if no matching element is found.

**Example:**

```typescript
const element = document.getElementById("myElement");

const nextElement = getNextElementBy(element, "class", "myClass");
if (nextElement) {
        console.log("Next element:", nextElement);
} else {
        console.log("No matching element found");
}
```

#

### `isTagName(elements: HTMLElement | HTMLElement[], tagName: string): boolean | boolean[]`

This function is an overloaded function that can accept either a single `HTMLElement` or an array of `HTMLElements` as the `elements` parameter. It returns a boolean value or an array of boolean values based on the type of the `elements` parameter.

**Parameters:**

- `elements` (HTMLElement | HTMLElement[]): The element(s) to check the `tagName` against.
- `tagName` (string): The value to compare against the `tagName` of the `elements`.

**Returns:**

- `boolean | boolean[]`: If the `elements` parameter is an `HTMLElement`, it returns a boolean value indicating whether the `tagName` matches the specified `tagName`. If the `elements` parameter is an array of `HTMLElements`, it returns an array of boolean values indicating whether the `tagName` of each element matches the specified `tagName`.

**Example:**

```typescript
const element = document.getElementById("myElement");
const elements = [element, document.getElementById("anotherElement")];

const isSingleMatch = isTagName(element, "div");
console.log("Is single match:", isSingleMatch); // Output: true

const isMultipleMatch = isTagName(elements, "div");
console.log("Is multiple match:", isMultipleMatch); // Output: [true, false]
```

#

[source](https://github.com/ManiGhazaee/ts-library/blob/main/src/ts/document.ts)

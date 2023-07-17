# HTML

### `html(htmlString: string): DocumentFragment | ChildNode`

Converts an HTML string into a document fragment.

**source:**
 [html](../src/ts/html.ts#html)

**Example:**
```typescript
const htmlString = "<p>Hello, world!</p>";
const fragment = html(htmlString);
document.body.appendChild(fragment);
```

#

### `htmlWithTemplate(string: string): DocumentFragment`

Converts an HTML string into a document fragment using the `<template>` element.

**source:** [htmlWithTemplate](../src/ts/html.ts#htmlWithTemplate)

**Example:**
```typescript
const htmlString = "<p>Hello, world!</p>";
const fragment = htmlWithTemplate(htmlString);
document.body.appendChild(fragment);
```
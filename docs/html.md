# HTML

### `html(htmlString: string): DocumentFragment | ChildNode`

Converts an HTML string into a document fragment.

**Example:**

```typescript
const htmlString = "<p>Hello, world!</p>";
const fragment = html(htmlString);
document.body.appendChild(fragment);
```

#

### `htmlWithTemplate(string: string): DocumentFragment`

Converts an HTML string into a document fragment using the `<template>` element.

**Example:**

```typescript
const htmlString = "<p>Hello, world!</p>";
const fragment = htmlWithTemplate(htmlString);
document.body.appendChild(fragment);
```

#

[source](https://github.com/ManiGhazaee/ts-library/blob/main/src/ts/html.ts)

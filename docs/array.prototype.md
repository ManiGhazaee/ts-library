# Array.prototype

### `Array.prototype.mat()`

Returns the element of the array at the specified index, counting from the end if index is negative.

Somehow this is faster that `Array.prototype.at()`.

**Example:**

```typescript
const arr = [1, 2, 3];
arr.mat(0); // 1
arr.mat(-1); // 3
arr.mat(3); // undefined
arr.mat(-4); // undefined
```

**Source(s):**
[mat](../src/ts/array.prototype.ts)

#

### `Array.prototype.last`

Gets the last element of the array.

**Example:**

```typescript
const arr = [1, 2, 3];
console.log(arr.last); // Output: 3
```

**Source(s):**
[last](../src/ts/array.prototype.ts)

#

### `Array.prototype.toPopped()`

Returns an array that is a copy of the original array with the last element removed. If array is empty it returns `undefined`.

**Example:**

```typescript
const arr = [1, 2, 3];
const popped = arr.toPopped();
console.log(arr); // [1, 2, 3]
console.log(popped); // [1, 2]
```

**Source(s):**
[toPopped](../src/ts/array.prototype.ts)

#

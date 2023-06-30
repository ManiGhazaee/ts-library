# Array.prototype

### `Array.prototype.mat()`

Returns the element of the array at the specified index, counting from the end if index is negative.

Somehow this is faster that `Array.prototype.at()`.

source: [mat](../src/ts/array.prototype.ts)

```typescript
const arr = [1, 2, 3];
arr.mat(0); // 1
arr.mat(-1); // 3
arr.mat(3); // undefined
arr.mat(-4); // undefined
```

### `Array.prototype.last`

Gets the last element of the array.

source: [last](../src/ts/array.prototype.ts)

```typescript
const arr = [1, 2, 3];
console.log(arr.last); // Output: 3
```

# Array.prototype

### `Array<any>.mat(index: number): any`

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

### `Array<any>.last: any`

Gets the last element of the array.

**Example:**

```typescript
const arr = [1, 2, 3];
console.log(arr.last); // Output: 3
```

**Source(s):**
[last](../src/ts/array.prototype.ts)

#

### `Array<any>.toPopped(): any[] | undefined`

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

### `Array<any>.toPushed(...items: any[]): any[]`

Adds one or more elements to the end of an array and returns a new array.

**Example:**

```typescript
const arr = [1, 2, 3];
const newArr = arr.toPushed(4, 5, 6);
console.log(newArr); // [1, 2, 3, 4, 5, 6]
console.log(arr); // [1, 2, 3]

const emptyArr: string[] = [];
const anotherArr = emptyArr.toPushed("a", "b", "c");
console.log(anotherArr); // ['a', 'b', 'c']
console.log(emptyArr); // []
```

**Source(s):**
[toPushed](../src/ts/array.prototype.ts)

#

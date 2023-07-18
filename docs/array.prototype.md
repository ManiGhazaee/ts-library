# Array.prototype

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

### `Array<any>.toShifted(): any[]`

Returns a new array with the first element removed.

**Example:**

```typescript
const arr = [1, 2, 3];
const shifted = arr.toShifted();
console.log(shifted); // [2, 3]
console.log(arr); // [1, 2, 3]
```

**Source(s):**
[toShifted](../src/ts/array.prototype.ts)

#

### `Array<any>.toUnshifted(...items: any[]): any[]`

Returns a new array with the specified elements added to the beginning.

**Example:**

```typescript
const arr = [2, 3];
const unshifted = arr.toUnshifted(1);
console.log(unshifted); // [1, 2, 3]
console.log(arr); // [2, 3]
```

**Source(s):**
[toUnshifted](../src/ts/array.prototype.ts)

#

### `Array<any>.toSorted(compareFn?: ((a: any, b: any) => number) | undefined): any[]`

Creates a sorted copy of the array, using the provided compare function.

**Example:**

```typescript
const arr = [2, 1, 4, 3];
const sorted = arr.toSorted((a, b) => a - b);
console.log(sorted); // [1, 2, 3, 4]
console.log(arr); // [2, 1, 4, 3]
```

**Source(s):**
[toSorted](../src/ts/array.prototype.ts)

#

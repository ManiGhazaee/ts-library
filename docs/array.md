# Array

### `arrayDiff<T>(arr1: T[], arr2: T[])`

returns a array containing all values that array1 has and array2 doesnt and array2 has and array1 doesnt.

**Example:**

```typescript
let arr1 = [1, 2, 3, 0];
let arr2 = [1, 4, 3, 5, 2];
arrayDiff(arr1, arr2); // returns [0, 4, 5]
```

**Source(s):**
[arrayDiff](../src/ts/array.ts#arrayDiff)

#

### `rmDuplicate<T>(array: T[])`

removes duplicated values from an array.

**Example:**

```typescript
let array = [1, 2, 2, 3];
rmDuplicate(array); // returns [1, 2, 3]
```

**Source(s):**
[rmDuplicate](../src/ts/array.ts#rmDuplicate)

#

### `deepCopy<T>(source: T): T`

Creates a deep copy of the given object or array using JSON serialization and deserialization.

**Example:**

```typescript
let array = [1, 2, 2, 3];
deepCopy(array); // returns [1, 2, 2, 3]
```

**Source(s):**
[deepCopy](../src/ts/array.ts#deepCopy)

#

### `getRandomItem<T>(arr: T[]): T`

Function to get a random item from an array.

**Example:**

```typescript
let array = [1, 2, 2, 3];
getRandomItem(array);
```

**Source(s):**
[getRandomItem](../src/ts/array.ts#getRandomItem)

#

### `shuffleArray<T>(arr: T[]): T[]`

Shuffles the given array and returns it.

**Example:**

```typescript
let arr = [1, 2, 3, 4, 5, 6, 7];
let shuffled = shuffleArray(arr);
console.log(shuffled); // [5, 2, 4, 3, 1, 7, 6]
```

**Source(s):**
[shuffleArray](../src/ts/array.ts#shuffleArray)

#

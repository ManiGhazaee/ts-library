# Array

## `arrayDiff<T>(arr1: T[], arr2: T[])`

returns a array containing all values that array1 has and array2 doesnt and array2 has and array1 doesnt.

source: [arrayDiff](../src/ts/array.ts#arrayDiff)

```typescript
let arr1 = [1, 2, 3, 0];
let arr2 = [1, 4, 3, 5, 2];
arrayDiff(arr1, arr2); // returns [0, 4, 5]
```

## `rmDuplicate<T>(array: T[])`

removes duplicated values from an array.

source: [rmDuplicate](../src/ts/array.ts#rmDuplicate)

```typescript
let array = [1, 2, 2, 3];
rmDuplicate(array); // returns [1, 2, 3]
```

## `deepCopy<T>(source: T): T`

removes duplicated values from an array.

source: [deepCopy](../src/ts/array.ts#deepCopy)

```typescript
let array = [1, 2, 2, 3];
deepCopy(array); // returns [1, 2, 2, 3]
```

## `getRandomItem<T>(arr: T[]): T`

Function to get a random item from an array.

source: [getRandomItem](../src/ts/array.ts#getRandomItem)

```typescript
let array = [1, 2, 2, 3];
getRandomItem(array); 
```
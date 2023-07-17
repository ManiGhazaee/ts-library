# Number

### `randomrandom(n: number): number`

generates a random number between 0 and (n - 1).

**Example:**

```typescript
random(10); // Output will be a random number between 0 and 9
```

**Source(s):**
[random](https://github.com/ManiGhazaee/ts-library/blob/main/src/ts/number.ts#L4)

#

### `clamp(min: number, numbers: number | number[], max: number): number | number[]`

Clamp a number or numbers around a min and max value.

**Example:**

```typescript
clamp(0, 5, 10); // 5
clamp(0, 15, 10); // 10
clamp(0, -5, 10); // 0
// or:
clamp(0, [5, 15, -5], 10); // [5, 10, 0]
```

**Source(s):**
[clamp](https://github.com/ManiGhazaee/ts-library/blob/main/src/ts/number.ts#L11)

#

### `getDigits(number: number): number[]`

Returns an array of digits in a given integer number.

> **Note**
> Function will not work as expected if you pass a floating-point number.

**Example:**

```typescript
getDigits(123); // [1, 2, 3]
getDigits(-456); // [4, 5, 6]
getDigits(0); // [0]
```

**Source(s):**
[getDigits](https://github.com/ManiGhazaee/ts-library/blob/main/src/ts/number.ts#L33)

#

### `getDigitsFloat(number: number): number[]`

Returns an array of digits in a given floating-point number.

**Example:**

```typescript
getDigitsFloat(3.14159); // [3, 1, 4, 1, 5, 9]
getDigitsFloat(-0.123); // [0, 1, 2, 3]
getDigitsFloat(42); // [4, 2]
```

**Source(s):**
[getDigitsFloat](https://github.com/ManiGhazaee/ts-library/blob/main/src/ts/number.ts#L52)

#

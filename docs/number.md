# Number

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
[clamp](../src/ts/array.ts#clamp)

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
[getDigits](../src/ts/array.ts#getDigits)

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
[getDigitsFloat](../src/ts/array.ts#getDigitsFloat)

#

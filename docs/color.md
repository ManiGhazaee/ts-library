# Color

### `constructor Color(color: ColorParameter): Color`

Make a color and convert it to hex, rgb, rgba in type of array or string.

**Type(s):**

```typescript
type ColorParameter = string | number[] | { red: number; green: number; blue: number; alpha: number };
```

**Example(s):**

Make a color:

```typescript
const c1 = [243, 43, 1, 255];
const c2 = [243, 43, 1];
const c3 = "rgb(243, 43, 1, 255)";
const c4 = "rgb(243, 43, 1)";
const c5 = "#f32b0101";

const C1 = new Color(c1);
const C2 = new Color(c2);
const C3 = new Color(c3);
const C4 = new Color(c4);
const C5 = new Color(c5);

console.log(C1.red); // 243
console.log(C3.green); // 43
console.log(C5.blue); // 1
```

**Source(s):**
[Color](https://github.com/ManiGhazaee/ts-library/blob/main/src/ts/color.ts)

# Color methods

### `(method) Color.rgbArray(): number[]`

Returns an array containing the red, green, and blue values of the color.

**Example(s):**

```typescript
const c3 = "rgb(243, 43, 1, 255)";
const C3 = new Color(c3);

console.log(C3.rgbArray()); // [243, 43, 1]
```

**Source(s):**
[rgbArray](https://github.com/ManiGhazaee/ts-library/blob/main/src/ts/color.ts)

#

### `(method) Color.rgbaArray(): number[]`

Returns an array containing the red, green, blue, alpha values of the color.

**Example(s):**

```typescript
const c3 = "rgb(243, 43, 1, 255)";
const C3 = new Color(c3);

console.log(C3.rgbaArray()); // [243, 43, 1, 255]
```

**Source(s):**
[rgbaArray](https://github.com/ManiGhazaee/ts-library/blob/main/src/ts/color.ts)

#

### `(method) Color.rgbString(): string`

Returns a string representation of the color in RGB format.

**Example(s):**

```typescript
const c1 = [243, 43, 1, 255];
const C1 = new Color(c1);

console.log(C1.rgbString()); // "rgb(243, 43, 1)"
```

**Source(s):**
[rgbString](https://github.com/ManiGhazaee/ts-library/blob/main/src/ts/color.ts)

#

### `(method) Color.rgbaString(): string`

Returns a string representation of the color in RGBA format.

**Example(s):**

```typescript
const c1 = [243, 43, 1, 255];
const C1 = new Color(c1);

console.log(C1.rgbaString()); // "rgba(243, 43, 1, 1)"
```

**Source(s):**
[rgbaString](https://github.com/ManiGhazaee/ts-library/blob/main/src/ts/color.ts)

#

### `(method) Color.hex(): string`

Returns a hexadecimal representation of the color.

**Example(s):**

```typescript
const c1 = [243, 43, 1, 255];
const C1 = new Color(c1);

console.log(C1.hex()); // "#f32b01"
```

**Source(s):**
[hex](https://github.com/ManiGhazaee/ts-library/blob/main/src/ts/color.ts)

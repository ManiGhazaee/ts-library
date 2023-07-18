# Color

### `constructor Color(color: ColorParameter): Color`

Make a color and convert it to hex, rgb, rgba in type of array or string.

**Type:**

```typescript
type ColorParameter = string | number[] | { red: number; green: number; blue: number; alpha: number };
```

**Example:**

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
console.log(C2.alpha); // 255
```

# Color methods

### `(method) Color.rgbArray(): number[]`

Returns an array containing the red, green, and blue values of the color.

**Example:**

```typescript
const c3 = "rgb(243, 43, 1, 255)";
const C3 = new Color(c3);

console.log(C3.rgbArray()); // [243, 43, 1]
```

#

### `(method) Color.rgbaArray(): number[]`

Returns an array containing the red, green, blue, alpha values of the color.

**Example:**

```typescript
const c3 = "rgb(243, 43, 1, 255)";
const C3 = new Color(c3);

console.log(C3.rgbaArray()); // [243, 43, 1, 255]
```

#

### `(method) Color.rgbString(): string`

Returns a string representation of the color in RGB format.

**Example:**

```typescript
const c1 = [243, 43, 1, 255];
const C1 = new Color(c1);

console.log(C1.rgbString()); // "rgb(243, 43, 1)"
```

#

### `(method) Color.rgbaString(): string`

Returns a string representation of the color in RGBA format.

**Example:**

```typescript
const c1 = [243, 43, 1, 255];
const C1 = new Color(c1);

console.log(C1.rgbaString()); // "rgba(243, 43, 1, 1)"
```

#

### `(method) Color.hex(): string`

Returns a hexadecimal representation of the color.

**Example:**

```typescript
const c1 = [243, 43, 1, 255];
const C1 = new Color(c1);

console.log(C1.hex()); // "#f32b01"
```

#

[source](https://github.com/ManiGhazaee/ts-library/blob/main/src/ts/color.ts)

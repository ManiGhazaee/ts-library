# Dark Mode 

**Example:**

```html
  <html>
    <head>
      <style>
        :root {
          --bg-color: white;
        }
        body {
           background-color: var(--bg-color);
        }
      </style>
    </head>
    <body>
      <button id="dark-mode-button">DarkMode</button>
      <script type="module">
        import { DarkMode } from "node_modules/darkmode.mjs"

        const darkModeCss = `:root { --bg-color: black; }`;
        const lightModeCss = `:root { --bg-color: white; }`;

        const dm = new DarkMode(darkModeCss, lightModeCss);
      </script>
    </body>
  </html>
```

**Source(s):**
[DarkMode](https://github.com/ManiGhazaee/ts-library/blob/main/src/ts/darkmode.ts)
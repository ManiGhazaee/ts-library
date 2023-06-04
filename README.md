To view the JSDoc generated documentation for this library, click [here](./docs/out/index.html).

dark mode example

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
      <style id="dark-mode"></style>
    </head>
    <body>
      <button id="dark-mode-button">DarkMode</button>
      <script type="module">
        import { DarkMode } from "node_modules/darkmode.mjs"

        const styleElement = document.getElementById('dark-mode');
        const button = document.getElementById('dark-mode-button');
        const darkModeCss = `:root { --bg-color: black; }`;
        const lightModeCss = `:root { --bg-color: white; }`;

        const dm = new DarkMode(styleElement, button, darkModeCss, lightModeCss);
      </script>
    </body>
  </html>
```

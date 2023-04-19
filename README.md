# WebflowReactExample

## Deploying

Add the following as custom code to your Webflow site, under the "before `</body>`" section. **Don't forget to replace the file hash with its real value.**

```html
<script
  module
  crossorigin
  src="https://cdn.jsdelivr.net/gh/tedigc/WebflowReactExample/dist/assets/index-[hash].js"
></script>
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/gh/tedigc/WebflowReactExample/dist/assets/index-[hash].css"
/>
```

## Links

- [How to host JS onn GitHub via a CDN](https://stackoverflow.com/questions/17341122/link-and-execute-external-javascript-file-hosted-on-github)

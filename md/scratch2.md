
(<channel id="[^"]+"><display-name>([^<]+)<\/display-name><icon src="([^"]+)"[^\n]+\n)

-->
**$2**\n<img src="$3">\n<!--$1-->

```regex
(\/[\w\-]+ ?>|[\w\-]+ ?\/>)[\r\n\t ]*
(<[\w\-]+(?: [^>]+>|>))
(<[\w\-]+(?: [^>]+>|>))
```

```regex "2:"
(\/[\w\-]+ ?>|[\w\-]+ ?\/>)[\r\n\t ]*(<[\w\-]+(?: [^>]+>|>))
```

```regex "3:"
(\/[\w\-]+ ?>|[\w\-]+ ?\/>)[\r\n\t ]*(<[\w\-]+(?: [^>]+>|>))(<[\w\-]+(?: [^>]+>|>))
```

```regex "4:"
(\/[\w\-]+ ?>|[\w\-]+ ?\/>)[\r\n\t ]*(<[\w\-]+(?: [^>]+>|>))(<[\w\-]+(?: [^>]+>|>))(<[\w\-]+(?: [^>]+>|>))
```

```regex "5:"
(\/[\w\-]+ ?>|[\w\-]+ ?\/>)[\r\n\t ]*(<[\w\-]+(?: [^>]+>|>))(<[\w\-]+(?: [^>]+>|>))(<[\w\-]+(?: [^>]+>|>))(<[\w\-]+(?: [^>]+>|>))
```

```regex "6:"
(\/[\w\-]+ ?>|[\w\-]+ ?\/>)[\r\n\t ]*(<[\w\-]+(?: [^>]+>|>))(<[\w\-]+(?: [^>]+>|>))(<[\w\-]+(?: [^>]+>|>))(<[\w\-]+(?: [^>]+>|>))(<[\w\-]+(?: [^>]+>|>))

```

```regex "7:"
(\/[\w\-]+ ?>|[\w\-]+ ?\/>)[\r\n\t ]*
(<[\w\-]+(?: [^>]+>|>))
(<[\w\-]+(?: [^>]+>|>))
(<[\w\-]+(?: [^>]+>|>))
(<[\w\-]+(?: [^>]+>|>))
(<[\w\-]+(?: [^>]+>|>))
(<[\w\-]+(?: [^>]+>|>))

(\/[\w\-]+ ?>|[\w\-]+ ?\/>)[\r\n\t ]*(<[\w\-]+(?: [^>]+>|>))(<[\w\-]+(?: [^>]+>|>))(<[\w\-]+(?: [^>]+>|>))(<[\w\-]+(?: [^>]+>|>))(<[\w\-]+(?: [^>]+>|>))(<[\w\-]+(?: [^>]+>|>))


```

```regex "7:"
(\/[\w\-]+ ?>|[\w\-]+ ?\/>)[\r\n\t ]*
(<[\w\-]+(?: [^>]+>|>))
(<[\w\-]+(?: [^>]+>|>))
(<[\w\-]+(?: [^>]+>|>))
(<[\w\-]+(?: [^>]+>|>))
(<[\w\-]+(?: [^>]+>|>))
(<[\w\-]+(?: [^>]+>|>))

(\/[\w\-]+ ?>|[\w\-]+ ?\/>)[\r\n\t ]*(<[\w\-]+(?: [^>]+>|>))(<[\w\-]+(?: [^>]+>|>))(<[\w\-]+(?: [^>]+>|>))(<[\w\-]+(?: [^>]+>|>))(<[\w\-]+(?: [^>]+>|>))(<[\w\-]+(?: [^>]+>|>))(<[\w\-]+(?: [^>]+>|>))

```

```regex "8:"
(\/[\w\-]+ ?>|[\w\-]+ ?\/>)[\r\n\t ]*
(<[\w\-]+(?: [^>]+>|>))
(<[\w\-]+(?: [^>]+>|>))
(<[\w\-]+(?: [^>]+>|>))
(<[\w\-]+(?: [^>]+>|>))
(<[\w\-]+(?: [^>]+>|>))
(<[\w\-]+(?: [^>]+>|>))
(<[\w\-]+(?: [^>]+>|>))
```

```js
(\/[\w\-]+ ?>|[\w\-]+ ?\/>)[\r\n\t ]*
(<[\w\-]+(?: [^>]+>|>))
(<[\w\-]+(?: [^>]+>|>))
(<[\w\-]+(?: [^>]+>|>))
(<[\w\-]+(?: [^>]+>|>))
```

```js
(<[\w\-]+(?: [^>]+>|>))
(<[\w\-]+(?: [^>]+>|>))
(<[\w\-]+(?: [^>]+>|>))
(<[\w\-]+(?: [^>]+>|>))
(<[\w\-]+(?: [^>]+>|>))
(<[\w\-]+(?: [^>]+>|>))
(<[\w\-]+(?: [^>]+>|>))
```

```js
(<[\w\-]+(?: [^>]+>|>))
(<[\w\-]+(?: [^>]+>|>))
(<[\w\-]+(?: [^>]+>|>))
(<[\w\-]+(?: [^>]+>|>))
(<[\w\-]+(?: [^>]+>|>))
(<[\w\-]+(?: [^>]+>|>))
(<[\w\-]+(?: [^>]+>|>))
```


https://docs.github.com/assets/cb-11407/images/help/writing/headings-rendered.png
https://docs.github.com/assets/cb-11496/images/help/writing/display-markdown-as-source-global-nav-update.png
https://docs.github.com/assets/cb-11643/images/help/writing/supported-color-models-rendered.png
https://docs.github.com/assets/cb-13462/mw-1440/images/help/writing/quoted-text-rendered.webp
https://docs.github.com/assets/cb-1962/mw-1440/images/help/writing/supported-color-models-rgb-rendered.webp
https://docs.github.com/assets/cb-24556/mw-1440/images/help/writing/inline-code-rendered.webp
https://docs.github.com/assets/cb-24696/mw-1440/images/help/writing/alerts-rendered.webp
https://docs.github.com/assets/cb-27017/mw-1440/images/help/writing/footnote-rendered.webp
https://docs.github.com/assets/cb-34231/images/help/writing/code-block-rendered.png
https://docs.github.com/assets/cb-34231/mw-1440/images/help/writing/code-block-rendered.webp
https://docs.github.com/assets/cb-39744/images/help/writing/image-rendered.png
https://docs.github.com/assets/cb-39744/mw-1440/images/help/writing/image-rendered.webp
https://docs.github.com/assets/cb-5440/mw-1440/images/help/writing/escaped-character-rendered.webp
https://docs.github.com/assets/cb-55933/mw-1440/images/help/repository/readme-links.webp
https://docs.github.com/assets/cb-64626/mw-1440/images/help/writing/task-list-rendered-simple.webp
https://docs.github.com/assets/cb-69181/images/help/repository/headings-toc.png
https://docs.github.com/assets/cb-7202/images/help/writing/nested-list-alignment.png
____
https://docs.github.com/assets/images/search/copilot-action.png
https://docs.github.com/manifest.json
https://docs.github.com/_next/static/chunks/2911edaa-48f4fcf2afb436e9.js
https://docs.github.com/_next/static/chunks/framework-f0f34dd321686665.js
https://docs.github.com/_next/static/chunks/main-dcdddf677a9438c3.js
https://docs.github.com/_next/static/chunks/pages/_app-7a750579a07b0f1d.js
https://docs.github.com/_next/static/chunks/webpack-d4685572b9ea97d7.js
https://docs.github.com/_next/static/css/06dd08b1a76982c3.css
https://docs.github.com/_next/static/css/7506202450af2cee.css
https://docs.github.com/_next/static/css/9c68dcc86c19bfec.css

<script src="https://docs.github.com/_next/static/chunks/pages/%5BversionId%5D/%5BproductId%5D/%5B...restPage%5D-1a0bd2cc25ba5bef.js"></script>
<script src=https://docs.github.com/_next/static/k8fC7r5C8Y8dcnlSmtDUO/_buildManifest.js"></script>
<script src="https://docs.github.com/_next/static/k8fC7r5C8Y8dcnlSmtDUO/_ssgManifest.js"></script>


<script src="/_next/static/chunks/pages/%5BversionId%5D/%5BproductId%5D/%5B...restPage%5D-1a0bd2cc25ba5bef.js"></script>
<script src="/_next/static/k8fC7r5C8Y8dcnlSmtDUO/_buildManifest.js"></script>
<script src="/_next/static/k8fC7r5C8Y8dcnlSmtDUO/_ssgManifest.js"></script>
_____


https://docs.github.com/assets/cb-1558/images/help/writing/supported-color-models-hex-rendered.png

https://docs.github.com/assets/cb-1962/images/help/writing/supported-color-models-rgb-rendered.png

https://docs.github.com/assets/cb-2066/images/help/writing/supported-color-models-hsl-rendered.png
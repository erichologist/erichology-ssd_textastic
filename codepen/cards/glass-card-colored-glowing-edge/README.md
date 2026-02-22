!!!meta1


# Colored, Glowing Edge Card

A Pen created on CodePen.

Original URL: [https://codepen.io/erichologist/pen/MYyZXOx](https://codepen.io/erichologist/pen/MYyZXOx).

This is _somewhat different_ to the usual colored, glowing cards you may have seen before!

Building off my [previous Codepen (Gradient Pulse)](https://codepen.io/simeydotme/pen/QwjEgmq), I wanted to create a card with glowing edges, and a subtle coloured border.

I'm using **a mesh gradient background**, which is masked with radial gradients to create the edge colors. Then it's _masked again with a conic-gradient that follows the direction of the pointer_. The glow increases in opacity as the pointer gets closer to the edge.

This effect feels a lot better in my opinion, than a simple radial-gradient mask that follows the pointer, as the glow is stuck to the edge more naturally.


```lang-css
.yellow1, .y1 {
  color:var(--c-y1);
  text-shadow:var(--sh-y1);}
}
```

Install necessary packages.

```lang-html
<br>
```

```lang-css
span::before.keyword {
	color: #00FBD0;
}
span:first-child.comment,
span.token.prolog,
td.token.cdata {
	color: #999;
}
/*	color: #999;*/
.token.punctuation {
	color: #DDFF05;
}
.token.namespace {
	opacity: .7;
	color: #92577E;
}
.token.selector {
	color: #ff02be;
}
.token.entity,
.token.inserted {
	/*	color: yellowgreen;*/
	color: #B5E108;
}
.token.url {
	color: #00ccff;
}
.lang-json .token.string,
.language-json .token.string,
.lang-JSON .token.string,
.language-JSON .token.string {
	color: #00D1C9;
}
.lang-css .token.string
.language-css .token.string {
	color: #EBD567;
}
.token.variable {
	color: #B5E108;
}
.token.regex {
	color: #B5E108;
}

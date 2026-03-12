# CSS Functions Guide
![](CSS%20Functions%20Guide/calc-functions.png)  

Like [any other programming language](http://my-codeworks.com/blog/2015/css3-proven-to-be-turing-complete), CSS has functions. They can be inserted where you’d place a value, or in some cases, accompanying another value declaration. Some CSS functions even let you nest other functions within them!

Wait, what are functions?

In programming, functions are a named portion of code that performs a specific task. An example of this could be a function written in JavaScript called `sayWoof():`

```js
function sayWoof() {
  console.log("Woof!");
}
```

We can use this function later in our code, after we have defined our desired behavior. For this example, any time you type `sayWoof()` in your website or web app’s JavaScript it will print “Woof!” into the browser’s console.

Functions can also use arguments, which are slots for things like numbers or bits of text that you can feed into the function’s logic to have it modify them. It works like this in JavaScript:

```js
function countDogs(amount) {
  console.log("There are " + amount + " dogs!");
}
```

Here, we have a function called `countDogs()` that has an argument called `amount`. When a number is provided for amount, it will take that number and add it to a pre-specified sentence. This lets us create sentences that tell us how many dogs we’ve counted.

```js
countDogs(3); // There are 3 dogs!
countDogs(276); // There are 276 dogs!
countDogs("many"); // There are many dogs!
```

Some programming languages come with baked-in functions to help prevent you from having to reinvent the wheel for every new project. Typically, these functions are built to help make working with the main strengths and features of the language easier.

Take libraries, for example. Libraries are collections of opinionated code made to help make development faster and easier, effectively just curated function collections — think [FitVids.js](http://fitvidsjs.com) for creating flexible video elements.

![](CSS%20Functions%20Guide/LV2OI0TM.png) 

Unlike other programming languages, we cannot create our own functions in CSS, per se. That kind of logic is reserved for [CSS selectors](https://code.tutsplus.com/tutorials/the-30-css-selectors-you-must-memorize--net-16048), which allow you to create [powerful conditional styling rules](https://alistapart.com/article/quantity-queries-for-css). 

As opposed to other programming languages — where the output of a function typically invisibly affects other logic down the line — the output of CSS functions are visual in nature. This output is used to control both layout and presentation of content. For example:

```css
.has-orange-glow {
  filter: drop-shadow(0.25rem 0 0.75rem #ef9035);
}
```

The [CSS filter function `drop-shadow()`](https://paper.dropbox.com/doc/The-functions-of-CSS--AaYBhHD90yG9woSppCLf~j7XAg-ml1WvA6P7hSbkzeOM1Yhm%23:h2=drop-shadow()) uses the arguments we provide it to create an orange outer glow effect on whatever it is applied to.

In the following demo, I have a JavaScript function named `toggleOrangeGlow` that toggles the application of the class `.has-orange-glow` on the CSS-Tricks logo. Combining this with a [CSS transition](https://developer.mozilla.org/en-US/docs/Web/CSS/transition), we’re able to create a cool glowing effect:

You may be familiar with some CSS functions, but the language has a surprisingly expansive list!

```css
.el {
  background: url(/images/image.jpg);
}
```

Using `url()`  

`url()` allows you to link to other resources to load them. This can include images, fonts, and even other stylesheets. For performance reasons, it’s good practice to limit the things you load via `url()`, as each declaration is an additional HTTP request.

```css
/* <div data-example="foo"> */
div {
  content: attr(data-example);
}
```

## Using `attr()`  

The CSS `[attr()](https://css-tricks.com/almanac/functions/a/attr/)` function allows us to reach into HTML, snag an attribute’s content, and feed it to the CSS [content property](https://developer.mozilla.org/en-US/docs/Web/CSS/content). You’ll commonly see `attr()` used in [print stylesheets](https://uxdesign.cc/i-totally-forgot-about-print-style-sheets-f1e6604cfd6), where it is used to show the URL of a link after its text. Another great application of this function is using it to [show the alt description of an image](https://bitsofco.de/styling-broken-images/) if it fails to load.

```css
.el {
  width: calc(100vw - 80px);
}
```

Using `calc()`  

If there’s one function you should spend some time experimenting with, it’s `calc()`. [We have a complete guide just on `calc()`](https://css-tricks.com/a-complete-guide-to-calc-in-css/).

This function takes two arguments and calculates a result from the operator (`+`, `-`, `*`, `/`) you supply it, provided those arguments are numbers with or without an accompanying [unit](https://css-tricks.com/the-lengths-of-css/).

Unlike CSS preprocessors such as [Sass](https://sass-lang.com/), `calc()` can mix units, meaning you can do things like subtract `6rem` from `100%`. `calc()` is also updated on the fly, so if that `100%` represents a width, it’ll still work if that width changes. `calc()` can also [accept CSS Custom Properties as arguments](https://css-tricks.com/making-custom-properties-css-variables-dynamic/), allowing you an [incredible degree of flexibility](https://css-tricks.com/creating-color-themes-with-custom-properties-hsl-and-a-little-calc/). 

```
p:lang(en) {
  quotes: "\201C" "\201D" "\2018" "\2019" "\201C" "\201D" "\2018" "\2019";
}
```

Using `lang()`  

[Including a `lang` attribute](https://webdesign.tutsplus.com/tutorials/use-the-lang-attribute-for-better-accessibility--cms-31961) in your HTML is a really important thing to do. When present in your HTML, you’re able to use the `lang()` function to target the presence of the attribute’s value and conditionally apply styling based on it. 

One common use for this selector is to [set language-specific quotes](https://developer.mozilla.org/en-US/docs/Web/CSS/:lang%23Example), which is great for things like internationalization. 

Clever designers and developers might also use it as a hook for styling translated versions of their sites, where cultural and/or language considerations mean there’s [different perceptions about things like negative space](https://randomwire.com/why-japanese-web-design-is-so-different/).

```
h3:not(:first-child) {
  margin-top: 0;
}
```

Using `:not()`  

The `[:not](https://css-tricks.com/almanac/pseudo-selectors/n/not/)` pseudo-class selector will select anything that *isn’t* what you specify. For example, you could target anything that isn’t an image with `body:not(img)`. While this example is dangerously powerful, scoping `:not()` to more focused selectors such as [BEM’s block class](https://css-tricks.com/bem-101/) can give you a great deal of versatility.

There is only one function specific to [CSS custom properties](https://css-tricks.com/a-complete-guide-to-custom-properties/), but it makes the whole thing tick! 

The `var()` function is used to reference a custom property declared earlier in the document. 

```css
html {
  --color: orange;
}

p {
  color: var(--color);
}
```

It is incredibly powerful when combined with `calc()`.

```css
html {
  --scale: 1.2;
  --size: 0.8rem;
}

.size-2 {
  font-size: calc(var(--size) * var(--scale));
}
.size-2 {
  font-size: calc(var(--size) * var(--scale) * var(--scale));
}
```

More on using `var()`  

Another example of this is declaring a custom property called `--ratio: 1.618`; in the root of the document, then invoking it later in our CSS to control line-height, like `line-height: var(--ratio);`. 

Here, `var()` is a set of instructions that tells the browser, “Go find the argument called `--ratio` declared earlier in the document, take its value, and apply it here.” 

Remember! `calc()` lets us dynamically adjust things on the fly, including the argument you supply via `var()`. 

This allows us to create things like [modular scale systems](https://alistapart.com/article/more-meaningful-typography) directly in CSS with just a few lines of code. If you change the value of `--ratio`, the whole modular scale system will update to match.

In the following CodePen demo, I’ve done exactly just that. Change the value of `--scale` in the Pen’s CSS to a different number to see what I mean:

It’s also worth mentioning that JavaScript’s [`setProperty`](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/setProperty) method can update custom properties in real time. This allows us to quickly and efficiently make dynamic changes to things that previously might have required a lot of complicated code to achieve. 

Another common place you see CSS functions is when working with color.

```css
.el {
  color: rgb(255, 0, 0);
  color: rgba(255, 0, 0, 0.5);
  color: rgb(255 0 0 / 0.5);
}
```

Using `rgb()` and `rgba()`  

These functions allow you to use numbers to describe the red (`r`), green (`g`), blue (`b`), and alpha (`a`) levels of a color. For example, a red color with a [hex value](https://en.m.wikipedia.org/wiki/Web_colors%23Hex_triplet) of `#fb1010` could also be described as `rgba(251, 16, 16, 1)`. The red value, `251`, is far higher than the green and blue values (`16` and `16`), as the color is mostly comprised of red information. 

The alpha value of 1 means that it is fully opaque, and won’t show anything behind what the color is applied to. If we change the alpha value to be 0.5, the color will be 50% transparent. If you use an `rgb()` function instead of `rgba()`, you don’t have to supply an alpha value. This used to mean you couldn’t supply an alpha value, but that function will take one now whether you use the old comma-syntax or the new slash-syntax.

```css
.el {
  background: hsl(100, 100%, 50%);
  background: hsla(100, 100%, 50%, 0.5);
  background: hsl(100 100% 50% / 0.5);
}
```

Using `hsl()` and `hsla()`  

Similar to `rgb()` and `rgba()`, `hsl()` and `hsla()` are functions that allow you to describe color. Instead of using red, green, and blue, they use hue (`h`), saturation (`s`), and lightness (`l`). 

I prefer using `hsla()` over `rgba()` because its model of describing color [works really well with systematized color systems](https://css-tricks.com/hsl-hsla-is-great-for-programmatic-color-control/). Each of the color level values for these functions can be CSS Custom Properties, allowing you to [create powerful, dynamic code](https://css-tricks.com/do-css-custom-properties-beat-sass-loops/).

In the upcoming [CSS Color Module Level 4](https://www.w3.org/TR/css-color-4/) spec, we can ignore the `a` portion of `rgba()` and `hsla()`, as well as the commas. Now, spaces are used to separate the `rgb` and `hsl` arguments, with an optional `/` to indicate an alpha level.

We all have newer, more modern, color functions like `[lab()](https://css-tricks.com/almanac/functions/l/lab/)`, `[lch()](https://css-tricks.com/almanac/functions/l/lch/)`, `[oklab()](https://css-tricks.com/almanac/functions/o/oklab/)`, `[oklch()](https://css-tricks.com/almanac/functions/o/oklch/)`, and `[hwb()](https://css-tricks.com/why-is-nobody-using-the-hwb-color-function/)` that use this new format.

These selectors use specialized argument notation that specifies [patterns of what to select](http://www.topdesignagencies.com/nth-test/). This allows you to do things like select every other element, every fifth element, every third element after the seventh element, etc.

Pseudo class selectors are incredibly versatile, yet often overlooked and under-appreciated. Many times, [a thoughtful application](http://quantityqueries.com/) of a few of these selectors can do the work of one or more node packages. 

```
.el:nth-last-child(2) {
  opacity: 0.75;
}
.el:last-child {
  opacity: 0.5;
}
```

The `[:nth-last-child()](https://css-tricks.com/almanac/pseudo-selectors/n/nth-last-child/)` pseudo class selector targets elements in a group of one or more elements that are on the same level in the DOM. It starts counting from the last element in the group and works backwards through the list of available DOM nodes.

Demo

```css
h2:nth-of-type(odd) {
  text-indent: 3rem;
}
```

`[:nth-of-type()](https://css-tricks.com/almanac/pseudo-selectors/n/nth-of-type/)` matches a specified collection of elements of a given type. For example, a declaration of `img:nth-of-type(5)` would target the fifth image on a page.

Demo

```css
section:nth-last-of-type(3) {
  background-color: darkorchid;
}
```

The `[:nth-of-last-type](https://css-tricks.com/almanac/pseudo-selectors/n/nth-last-of-type/)` pseudo class selector can target an element in a group of elements of a similar type. Much like `:nth-last-child()`, it starts counting from the last element in the group. Unlike `:nth-last-child`, it will skip elements that don’t apply as it works backwards.

Demo

Animation is an important part of adding that certain *je ne sais quoi* to your website or web app. Just remember to put your users’ needs first and [honor their](https://css-tricks.com/introduction-reduced-motion-media-query/) [animation preferences](https://css-tricks.com/introduction-reduced-motion-media-query/).

Creating animations also requires controlling the state of things over time, so functions are a natural fit for making that happen.

```css
.clip-me {
  clip-path: path('M0.5,1 C0.5,1,0,0.7,0,0.3 A0.25,0.25,1,1,1,0.5,0.3 A0.25,0.25,1,1,1,1,0.3 C1,0.7,0.5,1,0.5,1 Z');
}
.move-me {
  offset-path: path("M56.06,227 ...");
}
```

This function is paired with [the `offset-path` property](https://css-tricks.com/almanac/properties/o/offset-path/) (or [eventually](https://css-tricks.com/an-initial-implementation-of-clip-path-path/), the `clip-path` property). It allows you to “draw” a SVG path that other elements can be animated to follow.

Demo

Both [Michelle Barker](https://css-irl.info/fun-with-css-motion-path/) and [Dan Wilson](https://danielcwilson.com/blog/2020/01/motion-path-quirks/) have published excellent articles that go into more detail about this approach to animation.

```css
.el {
  animation: 2s infinite alternate steps(10);
}
```

This relatively new function allows you to set the easing timing across an animation, which allows for a greater degree of control over what part of the animation occurs when. Dan Wilson has [another excellent writeup](https://danielcwilson.com/blog/2019/02/step-and-jump/) of how it fits into the existing animation easing landscape. 

One common thing we do with animation is [stretch and squash stuff](https://en.m.wikipedia.org/wiki/Squash_and_stretch). The following functions allow you to do exactly that. There is a catch, however: These CSS functions are a special subset, in that they can only work with [the `transform` property](https://css-tricks.com/almanac/properties/t/transform/).

```
.double {
  transform: scale(2);
}
```

Scaling functions let you increase or decrease the size of something along one or more axes. If you use `scale3d()` you can even do this in three dimensions!

```css
.center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

Translate functions let you reposition an element along one or more axes. Much like scale functions, you can also extend this manipulation into three dimensions.

```css
.cube {
  transform: perspective(50em) rotateY(50deg)
}
```

[This function](https://css-tricks.com/almanac/properties/p/perspective/) lets you adjust the appearance of an object to make it look like it is projecting up and out from its background.

```css
.avatar {
  transform: rotate(25deg);
}
```

Rotate functions let you swivel an element along one or more axes, much like grasping a ball and turning it around in your hand.

```css
.header {
  transform: skew(25deg, 15deg);
}
```

Skew functions are a little different from scaling and rotation functions in that they apply a distortion effect relative to a single point. The amount of distortion is proportionate to the angle and distance declared, meaning that the further the effect continues in a direction the more pronounced it will be.

[Jorge Moreno](https://twitter.com/alterebro) also did us all a favor and made a great tool called [CSS Transform Functions Visualizer](https://css-transform.moro.es/). It allows you to adjust sizing and scaling in real time to better understand how all these functions work together:

As responsible web professionals, we should be mindful of our users and the fact that they may not be using new or powerful hardware to view our content. Large and complicated animations may slow down the experience, or even cause the browser to crash in extreme scenarios.

To prevent this, we can use techniques like [`will-change`](https://css-tricks.com/almanac/properties/w/will-change/) to [prepare the browser for what’s in store](https://dev.opera.com/articles/css-will-change-property/), and [the `update` media feature](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/update-frequency) to remove animation on devices that do not support a fast refresh rate. 

CSS filter functions are another special subset of CSS functions, in that they can only work with [the `filter` property](https://css-tricks.com/almanac/properties/f/filter/). Filters are special effects applied to an element, [mimicking functionality of graphics editing programs](https://www.cssfilters.co/) such as Photoshop.

You can do some really wild things with CSS filter functions, stuff like [recreating the effects you can apply to your posts on Instagram](https://una.im/CSSgram/)! 

```
.avatar:hover {
  filter: brightness(150%);
}
```

This function adjusts how, um, bright something appears. Setting it to a low level will make it appear as if it has had a shadow cast over it. Setting it to a high level will blow it out, like an over-exposed photo.

Demo

```
.ghost {
  filter: blur(50%);
}
```

If you’re familiar with Photoshop’s [Gaussian Blur](https://en.m.wikipedia.org/wiki/Gaussian_blur) filter, you know how `blur()` works. The more of this you apply, the more indistinct the thing you apply it to will look.

Demo

```
.wow {
  filter: contrast(200%);
}
```

`contrast()` will adjust the degree of difference between the lightest and darkest parts of what is applied to.

Demo

```
.no-color {
  filter: grayscale(100%);
}
```

`grayscale()` removes the color information from what it is applied to. Remember that this isn’t an all-or-nothing affair! You can apply a partial grayscale effect to make something look weathered or washed out.

An interesting application of `grayscale()` could be [lightly applying it to images when dark mode is enabled](https://medium.com/dev-channel/re-colorization-for-dark-mode-19e2e17b584b), to slightly diminish the overall vibrancy of color in a situation where the user may want less eye strain.

Demo

While `invert()` can be used to make something look like a photo negative, my favorite technique is to use it in a [inverted colors media query](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/inverted-colors) to invert inverted images and video:

```
@media (inverted-colors: inverted) {
  img,
  video {
    filter: invert(100%);
  }
}
```

This ensures that image and video content looks the way it should, regardless of a user’s expressed browsing mode preferences.

```
.filter-visibility {
  filter: opacity(0);
}
```

This function controls how much of the background is visible through the element (and child elements) the function is applied to.

Demo

An element that has 0% opacity will be completely transparent, although it will still be present in the DOM. If you need to remove an object completely, use other techniques such as [the hidden attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/hidden).

```
.full-color {
  filter: saturate(100%);
}
```

Applying this filter can enhance, or decrease the intensity of the color of what it is applied to. Enhancing an image’s saturation is a common technique photographers use to fix underexposed photos.

Demo

```
.is-old-timey {
  filter: sepia(1);
}
```

There are fancier ways to describe this, but realistically it’s a function that makes something look like it’s an old-timey photograph.

Demo

```
.fit-shape-shadow {
  filter: drop-shadow(3rem 0 0.5rem #e486da);
}
```

A drop shadow is a visual effect applied to an object that makes it appear like it is hovering off of the page. There’s a bit of a trick here, in that CSS also allows you to apply drop shadow effects to [text](https://developer.mozilla.org/en-US/docs/Web/CSS/text-shadow) and [elements](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow). It’s also distinct from the box-shadow property is that [it applies drop shadows to the shape of an element](https://css-tricks.com/breaking-css-box-shadow-vs-drop-shadow/) rather than the actual box of an element.

Skilled designers and developers can take advantage of this to create complicated visual effects.

Demo

```
.change-color {
  filter: hue-rotate(180deg);
}
```

When a class with a declaration containing hue-rotate() is applied to an element, each pixel used to draw that element will have it’s hue valued shifted by the amount you specify. `hue-rotate()`‘s effect is applied to each and every pixel it is applied to, so all colors will update relative to their hue value’s starting point. 

This can create a really psychedelic effect when applied to things that contain a lot of color information, such as photos.

Demo

The idea with these functions is that we can compare multiple values and apply (or, *represent*, as [the spec](https://drafts.csswg.org/css-values-4/#calc-notation) says) of the values when they’re evaluated.

```
.page-wrap {
  width: clamp(320px, 80%, 1200px);
}
body {
  font-size: clamp(12px, 1rem + 2vw, 18px);
}
```

When providing minimum, maximum, and preferred values as arguments, the CSS `[clamp()](https://css-tricks.com/almanac/functions/c/clamp/)` function will honor the preferred value so long as it does not exceed the minimum and maximum boundaries. 

`clamp()` will allow us to author things like components whose size will scale along with the size of the viewport, but won’t shrink or grow past a specific size. This will be especially useful for creating [CSS locks](https://blog.typekit.com/2016/08/17/flexible-typography-with-css-locks/), where you can ensure a responsive type size will not get so small that it can’t be read.

```
.minimum-of-these {
  width: max(500px, 50%);
}
.maximum-of-these {
  width: min(320px, 90%);
}
```

These functions allow you to select either the maximum or minimum value from a range of values you provide. Much like `clamp()`, these functions allow us to make things responsive up until a certain point. 

* [More about `min()`](https://css-tricks.com/almanac/functions/m/min/)
* [More about `max()`](https://css-tricks.com/almanac/functions/m/max/)

The spec files these functions under a “Logical Combinations” heading, but it might be easier to think of them as functions for matching selectors.

[`:is()`](https://css-tricks.com/almanac/selectors/i/is/) has had a bit of an identity crisis. Previously referred to as both [`matches()`](https://github.com/w3c/csswg-drafts/issues/3258) and vendor prefixed as `:-webkit-any`/`:-moz-any`, it now enjoys a standardized, agreed-upon name. It is a pseudo class selector that accepts a range of selectors as its argument. 

This allows an author to group and target a wide range of selectors in an efficient way. `[:where()](https://css-tricks.com/almanac/pseudo-selectors/w/where/)` is much like `:is()`, only it has a [specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity) of zero, while the specificity of `:is()` is set to the highest specificity in the provided selector list. 

```
:is(section, article, aside, nav) :is(h1, h2, h3, h4, h5, h6) {
  color: #BADA55;
}

/* ... which is equivalent to: */
section h1, section h2, section h3, section h4, section h5, section h6, 
article h1, article h2, article h3, article h4, article h5, article h6, 
aside h1, aside h2, aside h3, aside h4, aside h5, aside h6, 
nav h1, nav h2, nav h3, nav h4, nav h5, nav h6 {
  color: #BADA55;
}
```

`:is()` and `:where()` allow us a good deal of flexibility about how we select things to style, especially for situations where you may not have as much control over the web site or web app’s stylesheet (e.g. third-party integrations, ads, etc.).

> [#CSS](https://twitter.com/hashtag/CSS?src=hash&amp;ref_src=twsrc%5Etfw):is() selector 🎉the successor to :any() and :matches()

> sneak peak into our talk, here’s a neat gif I made with XD showing what the :is() selector syntax can do. be excited for Chrome Dev Summit y’all![https://t.co/0r2CcUx9Hv](https://t.co/0r2CcUx9Hv) [pic.twitter.com/wSuGOsDLvZ](https://t.co/wSuGOsDLvZ)

— Adam Argyle (@argyleink) [November 7, 2019](https://twitter.com/argyleink/status/1192562385489260544?ref_src=twsrc%5Etfw) 

`[:has()](https://css-tricks.com/almanac/pseudo-selectors/h/has/)` is a relational pseudo-class that will target an element that contains another element, provided there is at least one match in the HTML source. An example of this is be `a:has(> img)`, which tells the browser to target any link that contains an image. 

![](CSS%20Functions%20Guide/l75sROCU.png) 

Interestingly, `:has()` is currently being proposed as CSS you can only write in JavaScript. If I were to wager a guess as to why this is, it is to scope the selector for performance reasons. With this approach `:has()` is triggered only after the browser has been told to process conditional logic, and therefore query the state of things.

Gradients are created when you transition one color to one or more other colors. They are workhorses of modern user interfaces — skilled designers and developers use them to lend an air of polish and sophistication to their work.

Gradient functions allow you to specify a whole range of properties, including:

* Color values,
* The position on the gradient area where that color comes in,
* What angle the gradient is positioned at.
And yes, you guessed it: the colors we use in a gradient can be described using CSS color functions!

Linear gradients apply the color transformation in a straight line, from one point to another — this line can be set at an angle as well. In cases where there’s more area than gradient, using `repeating-linear-gradient()` will, er, repeat the gradient you described until all the available area has been filled.

Demo

Radial gradients are a lot like linear gradients, only instead of a straight line, color transformations radiate outward from a center point. They’re oftentimes used to create a semitransparent screen to help separate a modal from the background it is placed over.

* More on `[radial-gradient()](https://css-tricks.com/almanac/functions/r/radial-gradient/)`
* More on `[repeating-radial-gradient()](https://css-tricks.com/almanac/functions/r/repeating-radial-gradient/)`
Demo

[CSS Grid](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grids) is a relatively new feature of the language. It allows us to efficiently create adaptive, robust layouts for multiple screen sizes. 

It’s worth acknowledging our roots. Before Grid, layout in CSS was largely a series of codified hacks to work with a language originally designed to format academic documents. Grid’s introduction is further acknowledgement that the language’s intent has changed.

Modern CSS is an efficient, fault-tolerant language for controlling presentation and layout across a wide range of device form factors. Equipped with Grid and [other properties like flexbox](https://css-tricks.com/quick-whats-the-difference-between-flexbox-and-grid/), we’re able to create layouts that would have been impossible to create in earlier iterations of CSS. 

Grid introduces the following CSS functions to help you use it.

The `[fit-content()](https://css-tricks.com/almanac/functions/f/fit-content/)` function “clamps” the size of grid rows or columns, letting you specify a maximum size a grid track can expand to. `fit-content()` accepts a range of values, but most notable among them are [`min-content` and `max-content`](https://developer.mozilla.org/en-US/docs/Web/CSS/width%23Values). These values allow you to tie your layout to the content it contains. Impressive stuff!

Demo

You can loop through patterns of grid column and rows using `repeat()`. This is great for two scenarios: 

1. When you **do** know how many rows or columns you need, but typing them out would be laborious. A good example of this would be constructing the grid for a calendar.
2. When you **don’t** know how many rows or columns you need. Here, you can specify a template that the browser will honor as it [propagates content into your layout](https://hiddedevries.nl/en/blog/2019-02-23-content-based-grid-tracks-and-embracing-flexibility).

⠀   Demo

Like `filter()` and `transform()`, shape CSS functions only work with one property: [`clip-path`](https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path). This property is used to mask portions of something, allowing you to create [all sorts of cool effects](https://css-tricks.com/tag/clip-path/).

The `[circle()](https://css-tricks.com/almanac/functions/c/circle/)` function creates a circular shape for your mask, allowing you to specify its radius and position.

Demo

Like `circle()`, `[ellipse()](https://css-tricks.com/almanac/functions/e/ellipse/)` will draw a rounded shape, only instead of a perfect circle, `ellipse()` lets you construct an oblong mask.

Demo

The `[inset()](https://css-tricks.com/almanac/functions/i/inset/)` function will mask out a rectangle inside of the element you apply it to.

Demo

These are the un-categorizable CSS functions, things that don’t fit neatly elsewhere.

When you create an ordered list in HTML, the browser will automatically generate numbers for you and place them before your list item content. These pieces of browser-generated list content are called counters.

By using a combination of the `[::marker](https://developer.mozilla.org/en-US/docs/Web/CSS/::marker)` pseudo-element selector, the `[content](https://css-tricks.com/almanac/properties/c/content/)` property, and the [`counter()`](https://css-tricks.com/almanac/functions/c/counter/) function, we can control the content and presentation of the counters on an ordered list. For browsers that don’t support `[counter()](https://css-tricks.com/almanac/functions/c/counter/)` or `[counters()](https://css-tricks.com/almanac/functions/c/counters/)` yet, you still get a decent experience due to the browser automatically falling back to its generated content:

For situations where you have nested ordered lists, the `counters()` function allows a child ordered list to access its parent. This allows us to control their content and presentation. If you want to learn more about the power of `::marker`, `counter(), and counters()`, check out our complete [Guide to Styling Counters in CSS](https://css-tricks.com/styling-counters-in-css/).

Ever pointed a camera at its own video feed? That’s sort of what `element()` does. It allows you to specify the ID of another element to create an “image” of what that element looks like. You can then apply other CSS to that image, including stuff like CSS filters!

It might take a bit to wrap your head around the concept — and it has [some support concerns](https://caniuse.com/%23feat=css-element-function) — but `element()` is a potentially very powerful in the right hands. 

[Preethi Sam](https://twitter.com/rpsthecoder)‘s [“Using the Little-Known CSS element() Function to Create a Minimap Navigator”](https://css-tricks.com/using-the-little-known-css-element-function-to-create-a-minimap-navigator/) demonstrates how to use it to create a code minimap and is an excellent read. 

Here, she’s created a minimap for reading through a longform article:

```
.responsive-background {
  background-image: 
    image-set("image.png" 1x,
              "image-2x.png" 2x,
              "image-print.png" 600dpi
    );
}
```

This function allows you to specify a list of images for the browser to select for a background image, based on what it knows about the capabilities of its display and its connection speed. It is analogous to what you would do with [the `srcset` property](https://css-tricks.com/responsive-images-css/).

```
::slotted(.marker) {
  background: lightyellow;
}
```

This is a pseudo-element selector used to target elements that have been placed into a slot inside a HTML template. `::slotted()` is intended to be used when working with [Web Components](https://css-tricks.com/an-introduction-to-web-components/), which are custom, developer-defined HTML elements.

Like any other living programming language, CSS includes features and functionality that are actively being worked on.

These functions can sometimes be previewed using browsers that have access to the bleeding edge. [Firefox Nightly](https://www.mozilla.org/en-US/firefox/channel/desktop/) and [Chrome Canary](https://www.google.com/chrome/canary/) are two such browsers. Other features and functionality are so new that they only exist in [what is being actively discussed by the W3C](https://github.com/w3c/csswg-drafts/issues).

This function enables Alternate Annotation Forms, characters reserved for marking up things like notation and annotation. These characters typically will be outlined with a circle, square, or diamond shape.

Not many typefaces contain Alternate Annotation Forms, so it’s good to check to see if the typeface you’re using includes them before trying to get `annotation()` to work. [Tools such as Wakamai Fondue](https://wakamaifondue.com/) can help with that.

![](CSS%20Functions%20Guide/REvvaZxK.png)Examples of annotation glyphs from [Jonathan Harrell](https://twitter.com/HarrellofDurham)’s post, [“Better Typography with Font Variants”](https://jonathan-harrell.com/better-typography-with-font-variants/) 

This function will allow you to blend one background image into one or more other background images. Its proposed syntax is similar to gradient functions, where you can specify the stops where images start and end.

This function allows you to flip the orientation of a language’s reading order. For English, that means a left-to-right (`ltr`) reading order gets turned into right-to-left (`rtl`). [Only Firefox currently has support for `dir()`](https://caniuse.com/%23feat=css-dir-pseudo), but you can achieve the same effect in Chromium-based browsers by using an attribute selector such as `[dir="rtl"]`.

Demo

```
body {
  padding: 
    env(safe-area-inset-top) 
    env(safe-area-inset-right) 
    env(safe-area-inset-bottom) 
    env(safe-area-inset-left);
}
```

`[env()](https://css-tricks.com/almanac/functions/e/env/)`, short for environment, allows you to [create conditional logic](https://bitsofco.de/css-environment-variables/) that is triggered if the device’s [User Agent](https://en.m.wikipedia.org/wiki/User_agent) matches up. It was popularized by [the iPhone X as a method to work with its notch](https://css-tricks.com/the-notch-and-css/). 

That being said, device sniffing is a fallacious affair — you shouldn’t consider `env()` a way to cheat it. Instead, use it as intended: to make sure your design works for devices that impose unique hardware constraints on the viewport.

```
.help::before {
  content: image("try.webp", "try.svg", "try.gif");
}
```

This function will let you insert either a static image (referenced with `url()`, or draw one dynamically via gradients and `element()`. 

These functions will allow us to perform more [advanced mathematical operations](https://www.zdnet.com/article/css-to-get-support-for-trigonometry-functions/): 

* Sine: `sin()`
* Cosine: `cos()`
* Tangent: `tan()`
* Arccosine: `acos()`
* Arcsine: `asin()`
* Arctangent: `atan()`
* Arctangent: `atan2()`
* Square root: `sqrt()`
* The square root of the sum of squares of its arguments: `hypot()`
* Power: `pow()`
I’m especially excited to see what people who are more clever than I am will do with these functions, especially for things like animation!

To be honest, I’m a little hazy on the specifics of the jargon and mechanics that power the Shadow DOM. Here’s [how the MDN describes `host()`](https://developer.mozilla.org/en-US/docs/Web/CSS/:host()):

> The `:host()` [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) [pseudo-class](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes) function selects the shadow host of the [shadow DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM) containing the CSS it is used inside (so you can select a custom element from inside its shadow DOM) — but only if the selector given as the function’s parameter matches the shadow host.

And here’s [what they have to say about `:host-context()`](https://developer.mozilla.org/en-US/docs/Web/CSS/:host-context()):

> The `:host-context()` CSS pseudo-class function selects the shadow host of the shadow DOM containing the CSS it is used inside (so you can select a custom element from inside its shadow DOM) — but only if the selector given as the function’s parameter matches the shadow host’s ancestor(s) in the place it sits inside the DOM hierarchy.

These pseudo-classes will allow you to select one or a specified series columns in a CSS grid to apply styling to them. A good mental model for how these functions will work is how CSS pseudo class selectors operate. Unlike pseudo class selectors, `:nth-col()` and `:nth-last-col()` should be able to target [implicit grid columns](https://drafts.csswg.org/css-grid/%23implicit-grids).

The `[symbols()](https://css-tricks.com/almanac/functions/s/symbols/)` function allows you to specify a list of different kinds of characters to use for list bullets. Much like `annotation()`, you’ll want to make sure the typeface you use contains a glyph you want to use as a symbol before trying to get `symbols()` to work.

Sometimes things just don’t work out the way you think they will. While deprecated CSS functions may still render in the browser for legacy support reasons, it isn’t recommended you use them going forward.

[The web is typography](https://ia.net/topics/the-web-is-all-about-typography-period), so it makes sense to give your type the care and attention it deserves. While CSS provides some functions specifically designed to unlock the potential of your website or webapp’s chosen typefaces, it is advised to **not** use the following functions to access these advanced features. 

Instead, [use lower-level syntax via font-feature-settings](https://developer.mozilla.org/en-US/docs/Web/CSS/font-feature-settings). You can figure out if the font you’re using supports these features by using a  [tool such as Wakamai Fondue](https://wakamaifondue.com/).

Many typefaces made by professional foundries include alternate treatments for certain letters, or combinations of letters. One example use case is providing different variations of commonly-used letters for typefaces designed to look like handwriting, to help make it appear more natural-looking.

![](CSS%20Functions%20Guide/cvNTsEkr.png)Stylistic Alternates example by [Tunghsiao Liu](https://twitter.com/tunghsiao)’s [“OpenType Features in CSS”](https://sparanoid.com/lab/opentype-features/) 

Utilizing these functions activates these special alternate characters, provided they are present in the font’s [glyph set](https://en.m.wikipedia.org/wiki/World_glyph_set). 

Unfortunately, it is not a standardized offering. Different typefaces will have different ranges of support, based on what the typographer chose to include. It would be wise to check to see if the font you’re using supports these special features before writing any code.

When you are [importing a font](https://css-tricks.com/snippets/css/using-font-face/) via the `url()` function, the `format()` function is an optional hint that lets you manually specify the font’s file format. If this hint is provided, the browser won’t download the font if it does not recognize the specified file format.

```
@font-face {
  font-family: 'MyWebFont';
  src: url('mywebfont.woff2') format('woff2'), /* Cutting edge browsers */
       url('mywebfont.woff') format('woff'), /* Most modern Browsers */
       url('mywebfont.ttf') format('truetype'); /* Older Safari, Android, iOS */
}
```

`local()` allows you to specify a font installed locally, meaning it is present on the device. Local fonts either ship with the device, or can be manually installed. 

Betting on someone installing a font so things look the way you want them to is very risky! Because of this, it is recommended you don’t specify a local font that needs to be manually installed. Your site won’t look the way it is intended to, even moreso if you don’t [specify a fallback font](https://css-tricks.com/css-basics-fallback-font-stacks-robust-web-typography/).

```
@font-face {
  font-family: 'FeltTipPen';
  src: local('Felt Tip Pen Web'), /* Full font name */
       local('FeltTipPen-Regular'); /* Postscript name */
}
```

Special [dingbat characters](https://en.m.wikipedia.org/wiki/Dingbat) can be enabled using this function. Be careful, as not all dingbat characters are properly coded in a way that will work well if a user does something like change the font, or use a [specialized browsing mode](https://css-tricks.com/reader-mode-the-button-to-beat/).

Swashes are alternate visual treatments for letters that give them an extra-fancy flourish. They’re commonly found in italic and cursive-style typefaces.

![](CSS%20Functions%20Guide/FC2d_nLh.png)Swash example by [Tunghsiao Liu](https://twitter.com/tunghsiao)’s [“OpenType Features in CSS”](https://sparanoid.com/lab/opentype-features/) 

CSS is maligned as frequently as it is misunderstood. The guiding thought to understanding why all these functions are made available to us is knowing that CSS isn’t prescriptive — not every website has to look like a Microsoft Word document.

The technologies that power the web are designed in such a way that someone with enough interest can build whatever they want. It’s a powerful, revolutionary concept, a large part of why the web became so ubiquitous.

[CSS Functions Guide](https://css-tricks.com/complete-guide-to-css-functions/)
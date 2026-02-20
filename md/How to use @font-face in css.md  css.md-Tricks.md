<link rel="stylesheet" type="text/css" media="all" href="assets/mdcodetable.css" />
# How to use @font-face in CSS | CSS-Tricks
### [How to use @font-face in CSS | CSS-Tricks](https://css-tricks.com/snippets/css/using-font-face-in-css/)
<p align="right"><i><b>Robin Rendle, (2023-09-11)</i></b></p>

_____
The `@font-face` rule allows custom fonts to be loaded on a webpage. Once added to a stylesheet, the rule instructs the browser to download the font from where it is hosted, then display it as specified in the CSS.

Without the rule, our designs are limited to the fonts that are already loaded on a user’s computer, which vary depending on the system being used. Here’s a nice [breakdown of existing system fonts](http://www.cssfontstack.com/).

## Table of contents

-   [Practical level of browser support](https://css-tricks.com/snippets/css/using-font-face-in-css/#h-practical-level-of-browser-support)
-   [Deepest possible browser support](https://css-tricks.com/snippets/css/using-font-face-in-css/#h-deepest-possible-browser-support)
-   [Slightly deeper browser upport](https://css-tricks.com/snippets/css/using-font-face-in-css/#h-slightly-deeper-browser-support)
-   [Alternative techniques](https://css-tricks.com/snippets/css/using-font-face-in-css/#h-alternative-techniques)
-   [Understanding font file types](https://css-tricks.com/snippets/css/using-font-face-in-css/#h-understanding-font-file-types)
-   [A note on performance](https://css-tricks.com/snippets/css/using-font-face-in-css/#h-a-note-on-performance)
-   [Font services](https://css-tricks.com/snippets/css/using-font-face-in-css/#h-font-services)
-   [What about icon fonts?](https://css-tricks.com/snippets/css/using-font-face-in-css/#h-what-about-icon-fonts)
-   [More @font-face resources](https://css-tricks.com/snippets/css/using-font-face-in-css/#more-fontface-resources)

---

## General browser support

#### Desktop

| Chrome | Firefox | IE | Edge | Safari |
| --- | --- | --- | --- | --- |
| 4 | 3.5 | 9 | 12 | 3.2 |

#### Mobile / Tablet

| Android Chrome | Android Firefox | Android | iOS Safari |
| --- | --- | --- | --- |
| 116 | 116 | 4 | 4.2-4.3 |

### Practical level of browser support

Things are [shifting heavily toward WOFF](http://caniuse.com/#feat=woff) and [WOFF 2](http://caniuse.com/#feat=woff2), so we can probably get away with:

```css
@font-face {
  font-family: 'MyWebFont';
  src:  url('myfont.woff2') format('woff2'),
        url('myfont.woff') format('woff');
}
```

You could probably even get away with *just* WOFF2 these days.

```css
@font-face {
  font-family: 'MyWebFont';
  src: url('myfont.woff2') format('woff2');
}
```

#### Desktop

| Chrome | Firefox | IE | Edge | Safari |
| --- | --- | --- | --- | --- |
| 36 | 39 | No | 14 | 12 |

#### Mobile / Tablet

| Android Chrome | Android Firefox | Android | iOS Safari |
| --- | --- | --- | --- |
| 116 | 116 | 116 | 10.0-10.2 |

The only practical thing also using WOFF buys you is Internet Explorer 11 support.

### Deepest possible browser support

This is the method with the deepest support possible right now. The `@font-face` rule should be added to the stylesheet before any styles.

```css
@font-face {
  font-family: 'MyWebFont';
  src: url('webfont.eot'); /* IE9 Compat Modes */
  src: url('webfont.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('webfont.woff2') format('woff2'), /* Super Modern Browsers */
       url('webfont.woff') format('woff'), /* Pretty Modern Browsers */
       url('webfont.ttf')  format('truetype'), /* Safari, Android, iOS */
       url('webfont.svg#svgFontName') format('svg'); /* Legacy iOS */
}
```

Then use it to style elements like this:

```css
body {
  font-family: 'MyWebFont', Fallback, sans-serif;
}
```

### Slightly deeper browser upport

If you need a sort of a happy medium between full support and practical support, adding a `.ttf` will cover a few more bases:

```css
@font-face {
  font-family: 'MyWebFont';
  src: url('myfont.woff2') format('woff2'),
       url('myfont.woff') format('woff'),
       url('myfont.ttf') format('truetype');
}
```

| Chrome | Safari | Firefox | Opera | IE | Android | iOS |
| --- | --- | --- | --- | --- | --- | --- |
| 3.5+ | 3+ | 3.5+ | 10.1+ | 9+ | 2.2+ | 4.3+ |

### Alternative techniques

#### `@import`

While `@font-face` is excellent for fonts that are hosted on our own servers, there may be situations where a hosted font solution is better. [Google Fonts](http://www.google.com/fonts) offers this as a way to use their fonts. The following is an example of using `@import` to load the Open Sans font from [Google Fonts](http://www.google.com/fonts):

```css
@import url(//fonts.googleapis.com/css?family=Open+Sans);
```

Then we can use it to style elements:

```css
body {
  font-family: 'Open Sans', sans-serif;
}
```

If you [open the URL for the font](http://fonts.googleapis.com/css?family=Open+Sans), you can actually see all the `@font-face` work being done behind the scenes.

A benefit of using a hosted service is that it is likely to include all the font file variations, which ensures deep cross-browser compatibility without having to host all those files ourselves.

#### `<link>` a stylesheet

Similarly, you could link to the same asset as you would any other CSS file, in the of the HTML document rather than in the CSS. Using the same example from Google Fonts, this is what we would use:

```css
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet">
```

Then, we can style our elements like the other methods:

```css
body {
  font-family: 'Open Sans', sans-serif;
}
```

Again, this is importing the `@font-face` rules but, instead of injecting them to our stylesheet, they are added to our HTML instead.

It’s about the same thing… both techniques download the assets needed.

### Understanding font file types

The original snippet at the top of this post references a lot of files with strange extensions. Let’s go over each one and get a better understanding of what they mean.

#### WOFF / WOFF2

**Stands for:** Web Open Font Format.

Created for use on the web, and [developed by Mozilla](https://developer.mozilla.org/en-US/docs/Web/Guide/WOFF) in conjunction with other organizations, WOFF fonts often load faster than other formats because they use a compressed version of the structure used by OpenType (OTF) and TrueType (TTF) fonts. This format can also include metadata and license info within the font file. This format seems to be the winner and where all browsers are headed.

[WOFF2](http://dev.w3.org/webfonts/WOFF2/spec/) is the next generation of WOFF and boasts better compression than the original.

#### SVG / SVGZ

**Stands for:** Scalable Vector Graphics (Font)

SVG is a vector re-creation of the font, which makes it much lighter in file size, and also makes it ideal for mobile use. This format is the only one allowed by version 4.1 and below of Safari for iOS. SVG fonts are not currently supported by Firefox, IE or IE Mobile. [Firefox has postponed implementation](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/SVG_fonts) indefinitely to focus on WOFF.

SVGZ is the zipped version of SVG.

#### EOT

**Stands for:** Embedded Open Type.

This format was created by Microsoft (the original innovators of `@font-face`) and is a proprietary file standard supported only by IE. In fact, it’s the only format that IE8 and below will recognize when using `@font-face`.

#### OTF / TTF

**Stands for:** OpenType Font and TrueType Font.

The WOFF format was initially created as a reaction to OTF and TTF, in part, because these formats could easily (and illegally) be copied, However, OpenType has capabilities that many designers might be interested in ([ligatures and such](http://www.magnetstudio.com/words/2010/opentype-guide)).

### A note on performance

Web fonts are great for design but it’s important to also understand their impact on web performance. Custom fonts often cause sites to take a performance hit because the font must be downloaded before it’s displayed.

A common symptom *used to be* a brief moment where fonts first load as the fallback, then blink to the downloaded font. [Paul Irish has an older post on this](http://www.paulirish.com/2009/fighting-the-font-face-fout/) (dubbed “FOUT”: Flash Of Unstyled Text).

*These days*, browsers are generally hiding the text before the custom font loads by default. Better or worse? You decide. You can exert some control over this through various techniques. A little out-of-scope for this article, but here’s a trifecta of articles by Zach Leatherman to get you started down the rabbit hole:

-   [Better @font-face with Font Load Events](https://dev.opera.com/articles/better-font-face/)
-   [How we use web fonts responsibly, or, avoiding a @font-face-palm](http://www.filamentgroup.com/lab/font-loading.html)
-   [Flash of Faux Text—still more on Font Loading](http://www.zachleat.com/web/foft/)

Here are some more considerations when implementing custom fonts:

#### Watch the file size

Fonts can be surprisingly heavy, so lean towards options that offer lighter versions. For example, favor a font set that is 50KB versus one that weighs 400KB.

#### Limit the character set, if possible

Do you really need the bold and black weights for one font? Limiting your font sets to load only what is used is a good idea and there are some [good tips on that here](http://thenewcode.com/878/Slash-Page-Load-Times-With-CSS-Font-Subsetting).

#### Consider system fonts for small screens

Many devices are stuck on crappy connections. One trick might be to target larger screens when loading the custom font using `@media`.

In this example, screens smaller than 1000px will be served a system font instead and screens that wide and above will be served the custom font.

```css
@media (min-width: 1000px) { 
  body {
    font-family: 'FontName', Fallback, sans-serif; 
  }
}
```

### Font services

There are a number of services that will host fonts and provide access to commercially-licensed fonts as well. The benefits of using a service often boil down to having a large selection of legal fonts delivered efficiently (e.g. serving them on a speedy CDN).

Here are a few hosted font services:

-   [Cloud Typography](http://www.typography.com/)
-   [Typekit](https://typekit.com/)
-   [Fontdeck](http://fontdeck.com/)
-   [Webtype](http://www.webtype.com/)
-   [Fontspring](http://www.fontspring.com/)
-   [Typotheque](https://www.typotheque.com/)
-   [Fonts.com](http://www.fonts.com/)
-   [Google Fonts](http://www.google.com/fonts)
-   [Font Squirrel](http://www.fontsquirrel.com/)

### What about icon fonts?

It’s true, `@font-face` can load a font file full of icons that can be used for an icon system. However, I think you’re far better off using SVG as an icon system. [Here’s a comparison](https://css-tricks.com/icon-fonts-vs-svg/) of the two methods.

### Next steps with @font-face

**Article** on Jan 29, 2018

### [A New Responsive Font Format for the Web](https://css-tricks.com/a-new-responsive-font-format-for-the-web/)

**Snippet** on Jan 26, 2015

### [Basics of Google Font API](https://css-tricks.com/snippets/css/basics-of-google-font-api/)

**Article** on Dec 17, 2015

### [Custom Fonts in Emails](https://css-tricks.com/custom-fonts-in-emails/)

**Article** on Jun 21, 2017

### [Google Font API & Interview](https://css-tricks.com/google-font-api-interview/)

**Article** on Apr 17, 2018

### [Hey hey \`font-display\`](https://css-tricks.com/hey-hey-font-display/)

**Article** on Dec 17, 2015

### [The @font-face dilemma](https://css-tricks.com/the-font-face-dilemma/)

**Article** on May 13, 2015

### [The At-Rules of CSS](https://css-tricks.com/the-at-rules-of-css/)

**Article** on Apr 22, 2021

### [The Making (and Potential Benefits) of a CSS Font](https://css-tricks.com/the-making-and-potential-benefits-of-a-css-font/)

**Article** on Dec 17, 2015

### [The New Bulletproof @Font-Face Syntax](https://css-tricks.com/the-new-bulletproof-font-face-syntax/)

**Article** on Sep 10, 2019

### [Typography for Developers](https://css-tricks.com/typography-for-developers/)

**Article** on Oct 27, 2020

### [Understanding Web Fonts and Getting the Most Out of Them](https://css-tricks.com/understanding-web-fonts-getting/)

**Article** on Jan 29, 2018

### [What’s the deal with declaring font properties on @font-face?](https://css-tricks.com/whats-deal-declaring-font-properties-font-face/)

### More on @font-face performance

**Article** on Jun 19, 2018

### [Don’t just copy the @font-face out of Google Fonts URLs](https://css-tricks.com/dont-just-copy-the-font-face-out-of-google-fonts-urls/)

**Article** on Apr 1, 2015

### [FOUT, FOIT, FOFT](https://css-tricks.com/fout-foit-foft/)

**Article** on Sep 18, 2021

### [Getting the Most Out of Variable Fonts on Google Fonts](https://css-tricks.com/getting-the-most-out-of-variable-fonts-on-google-fonts/)

**Article** on Dec 6, 2020

### [How to Load Fonts in a Way That Fights FOUT and Makes Lighthouse Happy](https://css-tricks.com/how-to-load-fonts-in-a-way-that-fights-fout-and-makes-lighthouse-happy/)

**Article** on Aug 3, 2017

### [If you really dislike FOUT, \`font-display: optional\` might be your jam](https://css-tricks.com/really-dislike-fout-font-display-optional-might-jam/)

**Article** on Jul 27, 2021

### [Learnings From a WebPageTest Session on CSS-Tricks](https://css-tricks.com/learnings-from-a-webpagetest-session-on-css-tricks/)

**Article** on Dec 17, 2015

### [Loading Web Fonts with the Web Font Loader](https://css-tricks.com/loading-web-fonts-with-the-web-font-loader/)

**Article** on Dec 17, 2015

### [Public Service Announcement: Watch Your @font-face font-weight](https://css-tricks.com/watch-your-font-weight/)

**Article** on Mar 5, 2018

### [Three Techniques for Performant Custom Font Usage](https://css-tricks.com/three-techniques-performant-custom-font-usage/)

**Video** on Feb 20, 2017

### [#152: Font Loading with Zach Leatherman](https://css-tricks.com/video-screencasts/152-font-loading-zach-leatherman/)

▶ Running Time: 56:36

on Oct 7, 2015

### [#035: Preventing Typekit FOUT](https://css-tricks.com/lodge/v10/035-preventing-typekit-fout/)

### Related CSS properties

**Almanac** on Mar 25, 2020

### [font-display](https://css-tricks.com/almanac/properties/f/font-display/)

[](https://css-tricks.com/almanac/properties/f/font-display/)

**Article** on Dec 31, 2020

### [A font-display setting for slow connections](https://css-tricks.com/a-font-display-setting-for-slow-connections/)

**Article** on Jan 29, 2018

### [A New Responsive Font Format for the Web](https://css-tricks.com/a-new-responsive-font-format-for-the-web/)

**Almanac** on Sep 22, 2022

### [font](https://css-tricks.com/almanac/properties/f/font/)

[](https://css-tricks.com/almanac/properties/f/font/)

**Almanac** on Jul 20, 2020

### [font-feature-settings](https://css-tricks.com/almanac/properties/f/font-feature-settings/)

[](https://css-tricks.com/almanac/properties/f/font-feature-settings/)

**Almanac** on May 15, 2015

### [font-family](https://css-tricks.com/almanac/properties/f/font-family/)

[](https://css-tricks.com/almanac/properties/f/font-family/)

**Almanac** on May 20, 2015

### [font-size](https://css-tricks.com/almanac/properties/f/font-size/)

[](https://css-tricks.com/almanac/properties/f/font-size/)

**Almanac** on Feb 23, 2017

### [font-style](https://css-tricks.com/almanac/properties/f/font-style/)

[](https://css-tricks.com/almanac/properties/f/font-style/)

**Snippet** on Apr 21, 2012

### [Font Stacks](https://css-tricks.com/snippets/css/font-stacks/)

### More `@font-face` resources

-   [CSS Fonts Module Level 4](https://w3c.github.io/csswg-drafts/css-fonts-4/#font-face-rule) (W3C)
-   [How to Use the URL Thingy in the `@font-face` Rule](https://www.digitalocean.com/community/questions/how-to-use-the-url-thingy-in-the-font-face-rule?utm_medium=content_acq&utm_source=css-tricks&utm_campaign=&utm_content=awareness_bestsellers) (DigitalOcean)
___
[How to use @font-face in CSS | CSS-Tricks](https://css-tricks.com/snippets/css/using-font-face-in-css/)
2023-09-11
[[ReadItLater]] [[Article]]
Reading Time: 8 minute(s)
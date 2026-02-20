---
title: D$3mo
author: ELH
categories:
  - Demos
tags:
  - demo
keywords:		demo
css:			../assets/mdmdmdmd.css
xhtml header:	<link rel="stylesheet" type="text/css" media="all" href="../assets/mdmdmdmd.css"/>
		<link rel="stylesheet" type="text/css" media="all" href="../assets/prism84.css"/>
		<script type="text/javascript" src="../assets/prism.js"></script>
		<style></style>
favicon: ../assets/icons/favicon.svg
image: ../assets/icons/favicon.svg
link-citations: TRUE
tableOfContents: TRUE
lastUpdated: TRUE
---

# Markdownn
# Hacks


[Introducing JotBird — instantly publish Markdown as a shareable web page. ✨](https://www.jotbird.com)



Workarounds for things not officially supported by Markdown.

## Overview

The majority of people using Markdown will find that the [basic](/basic-syntax/) and [extended syntax](/extended-syntax/) elements cover their needs. But chances are that if you use Markdown long enough, you’ll inevitably discover that it doesn’t support something you need. This page provides tips and tricks for working around Markdown’s limitations.


**Tip:** These hacks aren't guaranteed to work in your Markdown application. If you need to use these hacks frequently, you should consider writing using something other than Markdown.

## Underline

Underlined text is not something you typically see in web writing, probably because underlined text is nearly synonymous with links. However, if you’re writing a paper or a report, you may need the ability to underline words and phrases. A couple of applications like [Bear](/tools/bear/) and [Simplenote](/tools/simplenote/) provide support for underlining text, but Markdown doesn’t natively support underlining. If your Markdown processor supports [HTML](/basic-syntax/#html), you can use the `` HTML tag to underline text in your document.


```lang-md
Some of these words will be underlined.
```

The rendered output looks like this:

Some of these words will be underlined.

## Indent (Tab)

Tabs and whitespace have a special meaning in Markdown. You can use trailing whitespace to create [line breaks](/basic-syntax/#line-breaks), and you can use tabs to create [code blocks](/basic-syntax/#code-blocks). But what if you need to indent a paragraph the old-fashioned way, using the tab key? Markdown doesn’t provide an easy way of doing that.

Your best bet might be to use a Markdown editor that supports indentation. This is common in applications that are more oriented towards desktop publishing. For example, [iA Writer](/tools/ia-writer/) allows you to customize indentation settings for the editor in the application preferences. It also provides template customization options so that you can make the rendered document look the way you expect it to, indentation and all.

Another option, if your Markdown processor supports [HTML](/basic-syntax/#html), is to use the HTML entity for non-breaking space (`&nbsp;`). This should probably be your option of last resort as it can get awkward. Basically, every `&nbsp;` in your Markdown source will be replaced with a space in the rendered output. So if you stick four instances of `&nbsp;` before a paragraph, the paragraph will look like it’s indented four spaces.


```lang-md
&nbsp;&nbsp;&nbsp;&nbsp;This is the first sentence of my indented paragraph.
```

The rendered output looks like this:

&nbsp;&nbsp;&nbsp;&nbsp;This is the first sentence of my indented paragraph.

## Center

Having the ability to center text is a necessity when writing a paper or a report. Unfortunately, Markdown doesn’t have any concept of text alignment (one possible exception is when using [tables](/extended-syntax/#alignment)). The good news is that there’s an HTML tag you can use: &#96;&#96;. If your Markdown processor supports [HTML](/basic-syntax/#html), you can place these tags around whatever text you want to center align.

```lang-md
This text is centered.
```

The rendered output looks like this:

This text is centered.

The &#96;&#96; HTML tag is technically supported but officially [deprecated](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/center), which means it works for now but you’re not supposed to be using it. Unfortunately, there’s not another pure HTML alternative. You could try using one of the CSS alternatives. Not all Markdown applications provide CSS support, but if the one you’re using does, here’s an alternative to the &#96;&#96; tag:

```lang-md
Center this text
```

If this is supported by your Markdown application, the output looks like this:

Center this text

## Color

Markdown doesn’t allow you to change the color of text, but if your Markdown processor supports [HTML](/basic-syntax/#html), you can use the &#96;&#96; HTML tag. The `color` attribute allows you to specify the font color using a color’s name or the hexadecimal `#RRGGBB` code.

```lang-md
This text is red!
```


The rendered output looks like this:

This text is red!

The &#96;&#96; HTML tag is technically supported but officially [deprecated](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/font), which means it works for now but you’re not supposed to be using it. Unfortunately, there’s not another pure HTML alternative. You could try using one of the CSS alternatives. Not all Markdown applications provide CSS support, but if the one you’re using does, here’s an alternative to the &#96;&#96; tag:

```lang-md
Make this text blue.
```


If this is supported by your Markdown application, the output looks like this:

Make this text blue.

Some people need the ability to write sentences in their Markdown files that *will not* appear in the rendered output. These comments are essentially hidden text. The text is viewable by the author of the document, but it’s not printed on the webpage or PDF. Markdown doesn’t natively support comments, but several enterprising individuals have devised a solution.

To add a comment, place text inside brackets followed by a colon, a space, and a pound sign (e.g., `[comment]: #`). You should put blank lines before and after a comment.

```lang-md
Here's a paragraph that will be visible.
[This is a comment that will be hidden.]: #
And here's another paragraph that's visible.
```

The rendered output looks like this:

Here’s a paragraph that will be visible.

And here’s another paragraph that’s visible.


**Tip:** This tip comes from [Stack Overflow](https://stackoverflow.com/questions/4823468/comments-in-markdown). It's been peer-reviewed and used by thousands of people!

## Admonitions

Admonitions are frequently used in documentation to call attention to warnings, notes, and tips. Markdown doesn’t provide special syntax for admonitions, and most Markdown applications don’t provide support for admonitions (one exception is [MkDocs](/tools/mkdocs/)).

However, if you need to add admonitions, you might be able to use [blockquotes](/basic-syntax/#blockquotes-1) with [emoji](/extended-syntax/#emoji) and [emphasis](/basic-syntax/#emphasis) to create something that looks similar to the admonitions you see on other websites.

```lang-md
> :warning: **Warning:** Do not push the big red button.
> :memo: **Note:** Sunrises are beautiful.
> :bulb: **Tip:** Remember to appreciate the little things in life.
```

The rendered output looks like this:

> ⚠️ **Warning:** Do not push the big red button.

> 📝 **Note:** Sunrises are beautiful.

> 💡 **Tip:** Remember to appreciate the little things in life.

## Image Size

The Markdown syntax for [images](/basic-syntax/#images-1) doesn’t allow you to specify the width and height of images. If you need to resize an image and your Markdown processor supports [HTML](/basic-syntax/#html), you can use the `img` HTML tag with the `width` and `height` attributes to set the dimensions of an image in pixels.







The rendered output will contain the image resized to the dimensions you specified.

## Image Captions

Markdown doesn’t natively support image captions, but there are two possible workarounds. If your Markdown application supports [HTML](/basic-syntax/#html), you can use the `figure` and `figcaption` HTML tags to add a caption for your image.

```lang-md
A single track trail outside of Albuquerque, New Mexico.
```

The rendered output looks like this:

A single track trail outside of Albuquerque, New Mexico.


**Tip:** If your Markdown application supports CSS, you can use CSS to style the appearance of the caption.

If your Markdown application doesn’t support HTML, you could try placing the caption directly below the image and using [emphasis](/basic-syntax/#emphasis).

```lang-md
![Albuquerque, New Mexico](/assets/images/albuquerque.jpg)
*A single track trail outside of Albuquerque, New Mexico.*
```

The rendered output looks like this:


*A single track trail outside of Albuquerque, New Mexico.*

## Link Targets

Some people like creating links that open in new tabs or windows. The Markdown syntax for [links](/basic-syntax/#links) doesn’t allow you to specify the `target` attribute, but if your Markdown processor supports [HTML](/basic-syntax/#html), you can use HTML to create these links.

```lang-md
Learn Markdown!
```


The rendered output looks like this:

[Learn Markdown!](https://www.markdownguide.org)

## Symbols

Markdown doesn’t provide special syntax for symbols. However, in most cases, you can copy and paste whatever symbol you want to use into your Markdown document. For example, if you need to display Pi (π), just find the symbol on a webpage and copy and paste it into your document. The symbol should appear as expected in the rendered output.

Alternatively, if your Markdown application supports [HTML](/basic-syntax/#html), you can use the HTML entity for whatever symbol you want to use. For example, if you want to display the copyright sign (©), you can copy and paste the HTML entity for copyright (`&copy;`) into your Markdown document.

Here’s a partial list of HTML entities for symbols:


*   Copyright (©) — `&copy;`
*   Registered trademark (®) — `&reg;`
*   Trademark (™) — `&trade;`
*   Euro (€) — `&euro;`
*   Left arrow (←) — `&larr;`
*   Up arrow (↑) — `&uarr;`
*   Right arrow (→) — `&rarr;`
*   Down arrow (↓) — `&darr;`
*   Degree (°) — `&#176;`
*   Pi (π) — `&#960;`


For a complete list of available HTML entities, refer to Wikipedia’s page on [HTML entities](https://en.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references).

## Table Formatting

Markdown [tables](/extended-syntax/#tables) are notoriously finicky. You can’t use many Markdown syntax elements to format the text in table cells. But there are workarounds for at least two common table issues: Line breaks and lists.

### Line Breaks Within Table Cells

You can separate paragraphs within a table cell by using one or more &#96;&#96; HTML tags.


```lang-md
| Syntax      | Description |
| ----------- | ----------- |
| Header      | Title |
| Paragraph   | First paragraph.  Second paragraph. |
```


The rendered output looks like this:

| Syntax | Description |
| --- | --- |
| Header | Title |
| Paragraph | First paragraph. Second paragraph. |

### Lists Within Table Cells

You can add a list within a table cell by using HTML tags.

```lang-md
| Syntax      | Description |
| ----------- | ----------- |
| Header      | Title |
| List        | Here's a list! Item one.Item two. |
```


The rendered output looks like this:


| Syntax | Description |
| --- | --- |
| Header | Title |
| List | Here's a list!Item one.Item two. |


## Table of Contents

Some Markdown applications like [Markdeep](/tools/markdeep/) can automatically generate a table of contents (also referred to as a *toc*) from your [headings](/basic-syntax/#headings), but this isn’t a feature provided by all Markdown applications. However, if your Markdown application supports [heading IDs](/extended-syntax/#heading-ids), you can create a table of contents for your Markdown file using a [list](/basic-syntax/#lists-1) and some [links](/basic-syntax/#links).

```lang-md
#### Table of Contents
- [Underline](#underline)
- [Indent](#indent)
- [Center](#center)
- [Color](#color)
```

The rendered output looks like this:

#### Table of Contents

*   [Underline](#underline)
*   [Indent](#indent)
*   [Center](#center)
*   [Color](#color)

## Videos

If your Markdown application supports [HTML](/basic-syntax/#html), you should be able to embed a video in your Markdown file by copying and pasting the HTML code provided by a video website like YouTube or Vimeo. If your Markdown application doesn’t support HTML, you can’t embed a video, but you can come close by adding an [image](/basic-syntax/#images-1) and a link to the video. You could do this with practically any video on any video service.

Since YouTube makes this easy, we’ll use them as an example. Take this video, for instance: `https://www.youtube.com/watch?v=8q2IjQOzVpE`. The last part of the URL (`8q2IjQOzVpE`) is the ID of the video. We can take that ID and put it in the following template:

```lang-md
[![Image alt text](https://img.youtube.com/vi/YOUTUBE-ID/0.jpg)](https://www.youtube.com/watch?v=YOUTUBE-ID)
```

YouTube automatically generates an image for every video (`https://img.youtube.com/vi/YOUTUBE-ID/0.jpg`), so we can use that and [link the image](/basic-syntax/#linking-images) to the video on YouTube. After we replace the image alt text and add the ID of the video, our example looks like this:

```lang-md
[![Less Than Jake — Scott Farcas Takes It On The Chin](https://img.youtube.com/vi/PYCxct2e0zI/0.jpg)](https://www.youtube.com/watch?v=PYCxct2e0zI)
```

The rendered output looks like this:


[![Less Than Jake — Scott Farcas Takes It On The Chin](https://img.youtube.com/vi/PYCxct2e0zI/0.jpg)](https://www.youtube.com/watch?v=PYCxct2e0zI)


##### Take your Markdown skills to the next level.

Learn Markdown in 60 pages. Designed for both novices and experts, *The Markdown Guide* book is a comprehensive reference that has everything you need to get started and master Markdown syntax.

[Get the Book](/book/)

###### Want to learn more Markdown?

Don't stop now! 🚀 Star the [GitHub repository](https://github.com/mattcone/markdown-guide) and then enter your email address below to receive new Markdown tutorials via email. No spam!

undefinedundefined

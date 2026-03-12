---
title: No2 MultiDraftsdown
author: Sam Rankin
Explanation: This is an example of Metadata.
xhtml header: <script src='//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
	<script src='https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/codemirror.min.js'></script>
	<script src='https://cdnjs.cloudflare.com/ajax/libs/colorify.js/1.0.3/scripts/colorify.min.js'></script>
	<script src='https://cdnjs.cloudflare.com/ajax/libs/docsify-copy-code/3.0.2/docsify-copy-code.min.js'></script>
	<script src='https://cdnjs.cloudflare.com/ajax/libs/formatter.js/0.0.0/formatter.min.js'></script>
	<script src='https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/highlight.min.js'></script>
	<script src='https://cdnjs.cloudflare.com/ajax/libs/markdown-it/13.0.2/markdown-it.min.js'></script>
	<script src='https://cdnjs.cloudflare.com/ajax/libs/markdown.js/0.5.0/markdown.min.js'></script>
	<script src='https://cdnjs.cloudflare.com/ajax/libs/minimap/1.0.0/minimap.min.js'></script>
	<script src='https://cdnjs.cloudflare.com/ajax/libs/prettify/r298/prettify.min.js'></script>
	<script src='https://cdnjs.cloudflare.com/ajax/libs/primer-markdown/4.1.0-alpha.df004242/index.js'></script>
	<script src='https://cdnjs.cloudflare.com/ajax/libs/svg.connectable.js/2.0.1/svg.connectable.min.js'></script>
	<script src='https://cdnjs.cloudflare.com/ajax/libs/SyntaxHighlighter/3.0.83/scripts/shCore.min.js'></script>
	<script src='https://esm.sh/@babel/plugin-syntax-jsx@7.27.1'></script>
	<link rel="stylesheet" type="text/css" media="all" href="../assets/mdmd.css" />
	<link rel="stylesheet" type="text/css" media="all" href="../assets/prism.css" />
	<script type="text/javascript" src="../assets/prism.js"></script>
---
{{TOC}}


# Text

Supports **bold**, _italic_, ***bold italic***,
~~eric~~~ ===erica=== 
[links](https://rawgit.com/fletcher/MultiMarkdown-6-Syntax-Guide/master/index.html) and other Markdown syntax.
__un__ _iii_ ___iii___
> friend
>> friend
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6



4~10 x 2~10  =  2^3

C~6~H~12~O~6~



## Lists
### Unordered List

* one
* two
	* a
	* b
* three


### Ordered Lists

1. one
2. two
	1. a
	2. b
3. three

### Task Lists

 - [ ] Write the press release
 - {-} Update the website @
 - [x] Contact the media
 - [ ] Custom Todoist Tasks [[td:{todoist task id}]] #Project /Section p1 @label1 @label2 @label3
 - [ ] Task with progress bar [======    ] 60%


## Quotes

> Blockquote
> with two lines.
And one more line.
	>> And a second level blockquote.
	

# Code
## Inline Code

`inline code example`

## Code Block

```language-javascript
    /**
     * Demonstrate Syntax Highlighting if you link to highlight.js 
     * @link http://softwaremaniacs.org/soft/highlight/en/
     */
    
     const n = 100;
     let s = "string value"; // Inline Comment
     let v = true;
    
     if (n < 1000) {
    	console.log("hello"); // Another Comment
    }
```


```language-css
pre.wp, code.wp {
    /* background-color:#0000;*/
    font-family:DankMono-Bold, DankMono-Italic;
    border-radius:15px;
    font-size:inherit;
    white-space:pre-line !important;
    padding-left:1em;
    /* text-indent:2em;*/
    margin-top: 10px;
    background-color: #000;
    background-color: #093459;
    margin-bottom:0px;
    padding-bottom: 10px;
    padding-top: 10px;
    padding-right:1em;
}
```

1. Oner
2. Twoer
3. threerer


- one
- two
- tbee

 - one
 - two
 - tbee
 - one
 - two
 - tbee

 








# MultiMarkdown
## Critic Markup

This is {--is --}an example of Critic Markup Deletions.

This {++is ++}an example of Critic Markup Additions.

This {~~isn't~>is~~} an example of Critic Markup Substitutions.

This is an {==example==} of Critic Markup Highlights.

This is an example {>>of Critic Markup Comments<<}.


## Footnotes

|              |              |
| :----------: | :----------- |
| `Here is a footnote. [^footnote]` | Here is a footnote. [^footnote]   |
| `Here is a footnote.[^footnoter]` | Here is a footnote.[^footnoter]  |


Here is a footnote. [^footnote]

[^footnote]: Here is the text of the footnote itself.
[^footnoter]:Here is the text of the footnoter itself.


## Citations

|                  |                 |
| :--------------- | :-------------- |
| `Cite a source.[Hughes, p. 42][#source]`| Cite a source.[Hughes, p. 42][#source] |
| `Cite a source.[Hugheser, p. 42][#Hughes]` | Cite a source.[Hugheser, p. 42][#Hughes] |
| `[#source]: John Doe. *A Totally Fake Book*. Vanity Press, 2006.` |      [#source]: John Doe. *A Totally Fake Book*. Vanity Press, 2006. |

[#source]:John Doe. *A Totally Fake Book*. Vanity Press, 2006.
[#Hughes]: Humbert Hughes. *A Fake Hughes*. Egg Press, 2006.


Cite a source.[Source, p. 42][#source]
Cite a source, again.[Hughes, p. 42][#Hughes]


## Glossary

Here is a glossary definition [?glossary]
### gloss
##### Noun (1)

used a computer to give her astrological predictions the gloss [?gloss 1.2a] of real science

the surface has such a high gloss [?gloss 1.1a], you can see your face reflected in it
##### Verb (1)
I don't want to gloss [?gloss 1.1b] over her misbehavior, but keep in mind that she's been under a lot of stress lately

this biographer tends to gloss [?gloss 1.1b] over his subject's many character flaws

If you’re the type of word nerd who finds poring over book glossaries [?glossary] to be the bee’s knees, we know you’ll get a buzz from this gloss of the verb gloss. To gloss something, such as a word or phrase, is to explain or define it. The noun gloss, it follows, refers to (among other things) a brief explanation of a word or expression. And a glossary of course is a collection of textual glosses, or of specialized terms, with their meanings. Both forms of gloss, as well as the word glossary, trace back to the Greek noun glôssa, meaning “tongue,” “language,” or “obscure word requiring explanation.” Another descendent of glôssa, the English noun glossa, refers not to a bee’s knees but to a bee’s tongue, or to the tongue of another insect.

[?glossary]: Here is the text with the actual definition - an alphabetical list of words related to a specific subject, text or dialects with explanations; a brief dictionary.


### gloss ^1 ^of ^4
***noun ^1***

[?gloss 1.1a]: a surface luster or brightness : SHINE
[?gloss 1.2a]: a deceptively attractive appearance
selfishness that had a gloss of humanitarianism about it
b: bright often superficial attractiveness
show-biz gloss
3: a viscous usually tinted cosmetic preparation used for adding shine and usually color to the lips : LIP GLOSS

### gloss ^2 ^of ^4
***verb ^1***
*glossed; glossing; glosses*
*transitive verb*

[?gloss 1.1a]: to mask the true nature of &colon; give a deceptively attractive appearance to —used with over

> the misery was general, where not glossed [?gloss1.1a] over by liberal application of alcohol
>> —Marston Bates

[?gloss 1.1b]: to deal with (a subject or problem) too lightly or not at all —used with over

> glosses [?gloss ^1.1b] over scholarly controversies rather than confronting them head-on
>> —John Israel

[?gloss 2.2]: to give a gloss to


### gloss ^3 ^of ^4
***noun ^2***

[?gloss 3.1a]: a brief explanation (as in the margin or between the lines of a text) of a difficult or obscure word or expression
[?gloss 3.1b]: a false and often willfully misleading interpretation (as of a text)
[?gloss 3.2a]: GLOSSARY
[?gloss 3.2b]: an interlinear translation
[?gloss 3.2c]: a continuous commentary accompanying a text
[?gloss 3.3]: COMMENTARY, INTERPRETATION


### gloss ^4 ^of ^4
*glossed; glossing; glosses*
*verb ^2*
*transitive verb*

[gloss 4.1a]: to provide a gloss for &colon; EXPLAIN, DEFINE
[gloss 4.1b]: INTERPRET
[gloss 4.2]: to dispose of by false or perverse interpretation

> trying to gloss [?gloss 4.2] away the irrationalities of the universe
    >> —Irwin Edman


## Abbreviations

[>abbr]: this is an abbreviation.

## Definitions

&amp;

Here is a definition list:

Apple
	:  Pomaceous fruit of plants of the genus Malus in the family Rosaceae.
	:  Also the makers of really great products.
	


gloss ^3 ^of ^4 (***noun^2***)
	:  a brief explanation (as in the margin or between the lines of a text) of a difficult or obscure word or expression
	:  a false and often willfully misleading interpretation (as of a text)
	:  GLOSSARY
	:  an interlinear translation
	:  a continuous commentary accompanying a text
	:  COMMENTARY, INTERPRETATION


## Images

|  **image with attributes**&colon;   |                        |
| :---------------------------------- | -----------------------|
| `![](../assets/erichology.png height=150px)`  | ![](../assets/erichology.png height=150px)  |
| `![](chatbumping.svg height=150px)` | ![](chatbumping.svg height=150px) |
| `![chat]`                           | ![chat]                |
|                                     |                        |


| **image with attributes**&colon;            |          |
| :------------------------------------------ | -------- |
| `[et50]:../assets/erichology.png "title" height=50px` | ![et50]  |
| `[e50]:../assets/erichology.png height=50px`          | ![e50]   |
| `[eq50]:../assets/erichology.png height="50px"`       | ![eq50]  |


|                                                |          |
| :--------------------------------------------- | :------: |
| `[etq50]:../assets/erichology.png "title" height="50px"` | ![etq50] |
| `[e56]:../assets/erichology.png height=50px width=60px`  | ![e56] |
| `[et56]:../assets/erichology.png "title" height=50px width=60px` | ![et56] |


| **image with attributes**&colon; |  |  |
| :---- | :---- | :----: |
| `[et50]:../assets/erichology.png "title" height=50px` | `![et50]` | ![et50] |
| `[e50]:../assets/erichology.png height=50px` | `![e50]` | ![e50] |
| `[eq50]:../assets/erichology.png height="50px"` | `![eq50]` | ![eq50] |


|                                               |       |       |
| :-------------------------------------------- | :-------- | :---------------: |
| `[etq50]:../assets/erichology.png "title" height="50px"` | `![etq50]` | ![etq50] |
| `[e56]:../assets/erichology.png height=50px width=60px` | `![e56]` | ![e56] |
| `[et56]:../assets/erichology.png "title" height=50px width=60px` | `![et56]` | ![et56] |
[e1]:../assets/erichology.png
[et50]:../assets/erichology.png "title" height=50px width=50px
[e50]:../assets/erichology.png height=50px
[eq50]:../assets/erichology.png height="50px"
[etq50]:../assets/erichology.png "title" height="50px"
[e56]:../assets/erichology.png height=50px width=60px
[et56]:../assets/erichology.png "title" height=50px width=60px
[chat]:chat.svg height=150px
[chatbumping]:chat.svg


*image*&colon; `![image](../assets/erichology.png)` [image](../assets/erichology.png)

*image with title*&colon; `![image](../assets/erichology.png "title")` ![image](../assets/erichology.png "title")


![chat]

## Tables

| foo | bar   |
| :--- | -----: |
| foo                 | bar   |
| `foo bar`           |       |
| [***caption***][id] |       |
[caption][id]


| **long header** | *longer header* | ***longest header*** |
| ----------: | :-----------: | :------------- |
| foo         | bar           | bat            |
| foo         | bar           | bat            |
[**caption**][id]


## Math

A formula, \\({e}^{i\pi }+1=0\\), inside a paragraph.

A formula, ${e}^{i\pi }+1=0$, inside a paragraph.

## Horizontal rules:

****
___
---

And with this metadata variable, we conclude our tour.

Thanks for viewing this sample by [%author].

Hope you'll enjoy using this syntax :)


**THE END**


```language-js
function canFormat(clipping) {
    return clipping.text != null
}

function format(clipping) {
    var text = clipping.text
    text = text.trim()
    text = text.replace(/(\r\n|\r|\n){2,}/g, '$1\n')
    text = text.replace(/[\t ]+$|^[\t ]+/gm, '')
    text = text.replace(/(\n)\n+/g, '$1')

    return text
}
        fontStyle: italic;
```
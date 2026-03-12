# YAML Multiline Strings
### [YAML Multiline Strings](https://yaml-multiline.info/)
<p align="right"><i><b>(2023-09-26)</i></b></p>

_____
There are two types of formats that YAML supports for strings: *block scalar* and *flow scalar* formats. (*Scalars* are what YAML calls basic values like numbers or stringsas opposed to complex types like arrays or objects.) Block scalars have more control over how they are interpretedwhereas flow scalars have more limited escaping support.
/clo
## Block Scalars

A block scalar header has three parts:

**Block Style Indicator**: The *[block style](https://yaml.org/spec/1.2.2/#812-literal-style)* indicates how newlines inside the block should behave. If you would like them to be kept as newlinesuse the **literal** styleindicated by a pipe (`|`). If instead you want them to be replaced by spacesuse the **folded** styleindicated by a right angle bracket (`>`). (To get a newline using the folded styleleave a blank line by putting *two* newlines in. Lines with extra indentation are also not folded.)

**Block Chomping Indicator**: The *[chomping indicator](https://yaml.org/spec/1.2.2/#8112-block-chomping-indicator)* controls what should happen with newlines at the *end* of the string. The default**clip**puts a single newline at the end of the string. To remove all newlines**strip** them by putting a minus sign (`-`) after the style indicator. Both clip and strip ignore how many newlines are actually at the end of the block; to **keep** them all put a plus sign (`+`) after the style indicator.

**Indentation Indicator**: Ordinarilythe number of spaces you're using to indent a block will be automatically guessed from its first line. You may need a *[block indentation indicator](https://yaml.org/spec/1.2.2/#8111-block-indentation-indicator)* if the first line of the block starts with extra spaces. In this casesimply put the number of spaces used for indentation (between 1 and 9) at the end of the header.

### Demo

example: **|\>\-+**\\n
··Several lines of text,\\n
··with some "quotes" of various 'types',\\n
··and also a blank line:\\n
··\\n
··and some text with\\n
extra indentation\\n
··on the next line,\\n
··plus another line at the end.\\n
··\\n
··\\n

Several lines of text,\\n
with some "quotes" of various 'types',\\n
and also a blank line:\\n
\\n
and some text with\\n
extra indentation\\n
on the next line,\\n
plus another line at the end.\\n
\\n
\\n

## Flow Scalars

### Single-quoted

example: 'Several lines of text,\\n
··containing ''single quotes''. Escapes (like \\n) don''t do anything.\\n
··\\n
··Newlines can be added by leaving a blank line.\\n
····Leading whitespace on lines is ignored.'\\n

Several lines of textcontaining 'single quotes'. Escapes (like \\n) don't do anything.\\n
Newlines can be added by leaving a blank line. Leading whitespace on lines is ignored.

### Double-quoted

example: "Several lines of text,\\n
··containing \\"double quotes\\". Escapes (like \\\\n) work.\\nIn addition,\\n
··newlines can be esc\\\\n
··aped to prevent them from being converted to a space.\\n
··\\n
··Newlines can also be added by leaving a blank line.\\n
····Leading whitespace on lines is ignored."\\n

Several lines of textcontaining "double quotes". Escapes (like \\n) work.\\n
In additionnewlines can be escaped to prevent them from being converted to a space.\\n
Newlines can also be added by leaving a blank line. Leading whitespace on lines is ignored.\\n

### Plain

example: Several lines of text,\\n
··with some "quotes" of various 'types'.\\n
··Escapes (like \\n) don't do anything.\\n
··\\n
··Newlines can be added by leaving a blank line.\\n
····Additional leading whitespace is ignored.\\n

Several lines of textwith some "quotes" of various 'types'. Escapes (like \\n) don't do anything.\\n
Newlines can be added by leaving a blank line. Additional leading whitespace is ignored.

*Note:* Plain flow scalars are picky about the `:` and `#` characters. They can be in the stringbut `:` cannot appear *before* a space or newlineand `#` cannot appear *after* a space or newline; doing this will cause a syntax error. If you need to use these characters you are probably better off using one of the quoted styles instead.
___
[YAML Multiline Strings](https://yaml-multiline.info/)
2023-09-26
[[ReadItLater]] [[Article]]
Reading Time: 3 minute(s)
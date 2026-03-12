# YAML Tutorial: Everything You Need to Get Started in Minutes
### [YAML Tutorial: Everything You Need to Get Started in Minutes](https://www.cloudbees.com/blog/yaml-tutorial-everything-you-need-get-started)
<p align="right"><i><b>(2023-07-30)</i></b></p>

_____
YAML Ain't Markup Language ([YAML](http://yaml.org/)) is a data serialization language that is consistently listed as one of the most popular programming languages. It's often used as a format for configuration filesbut its object serialization abilities make it a viable replacement for languages like JSON. This YAML tutorial will demonstrate the language syntax with a guide and some simple coding examples in [Python](https://rollout.io/blog/python-feature-flag-guide/). YAML has broad language support and maps easily into native data structures. It's also easy for humans to readwhich is why it's a good choice for configuration. The YAML acronym was shorthand for Yet Another Markup Language. But the maintainers renamed it to YAML Ain't Markup Language to place more emphasis on its data-oriented features.

## YAML Tutorial Quick Start: A Simple File

Let's take a look at a YAML file for a brief overview.

\---
doe: "a deera female deer"
ray: "a drop of golden sun"
pi: 3.14159
xmas: true
french-hens: 3
calling-birds:
  - huey
  - dewey
  - louie
  - fred
xmas-fifth-day:
  calling-birds: four
  french-hens: 3
  golden-rings: 5
  partridges:
    count: 1
    location: "a pear tree"
  turtle-doves: two

The file starts with three dashes. These dashes indicate the start of a new YAML document. YAML supports multiple documentsand compliant parsers will recognize each set of dashes as the beginning of a new one. Nextwe see the construct that makes up most of a typical YAML document: a key-value pair. The “doe” is a key that points to a string value: “a deera female deer”. YAML supports more than just string values. The file starts with six key-value pairs. They have four different data types. “doe” and “ray” are strings. The “pi” is a floating-point number. The “xmas” is a boolean. The “french-hens” is an integer. You can enclose strings in single(‘) or double-quotes(“) or no quotes at all. YAML recognizes unquoted numerals as integers or floating point. The seventh item is an array. The “calling-birds” has four elementseach denoted by an opening dash. I indented the elements in “calling-birds” with two spaces. Indentation is how YAML denotes nesting. The number of spaces can vary from file to filebut tabs are not allowed. We'll look at how indentation works below. Finallywe see “xmas-fifth-day”which has five more elements inside iteach of them indented. We can view “xmas-fifth-day” as a dictionary that contains two stringtwo integersand another dictionary. YAML supports nesting of key-valuesand mixing types. Before we take a deeper divelet's look at how this document looks in JSON. I'll throw it in this handy [JSON to YAML converter](https://www.json2yaml.com/).

{
 "doe": "a deera female deer",
 "ray": "a drop of golden sun",
 "pi": 3.14159,
 "xmas": true,
 "french-hens": 3,
 "calling-birds": \[
    "huey",
    "dewey",
    "louie",
    "fred"
 \],
 "xmas-fifth-day": {
 "calling-birds": "four",
 "french-hens": 3,
 "golden-rings": 5,
 "partridges": {
   "count": 1,
   "location": "a pear tree"
 },
 "turtle-doves": "two"
 }
}

JSON and YAML have similar capabilitiesand you can convert most documents between the formats.

## Outline Indentation and Whitespace

Whitespace is part of YAML's formatting. Unless otherwise indicatednewlines indicate the end of a field. You structure a YAML document with indentation. The indentation level can be one or more spaces. The specification forbids tabs because tools treat them differently. Consider this document. The items inside are indented with two spaces.

foo: bar
pleh: help
stuff:
foo: bar
bar: foo

Let's take a look at how a simple python script views this document. We'll save it as a file named **foo.yaml**. The PyYAML package will map a YAML file stream into a dictionary. We'll iterate through the outermost set of keys and values and print the key and the string representation of each value. You can find a processor for your favorite platform here.

Import yaml

from yaml import load
try:
from yaml import CLoader as Loader
except ImportError:
from yaml import Loader

if \_\_name\_\_ == '\_\_main\_\_':

stream = open("foo.yaml"'r')
dictionary = yaml.load(stream)
for keyvalue in dictionary.items():
print (key + " : " + str(value))

The output is:

foo : bar
pleh : help
stuff : {'foo': 'bar''bar': 'foo'}

When we tell python to print a dictionary as a stringit uses the inline syntax we'll see below. We can see from the output that our document is a python dictionary with two strings and another dictionary nested inside it. YAML's simple nesting gives us the power to build sophisticated objects. But that's only the beginning.

## Comments

Comments begin with a pound sign. They can appear after a document value or take up an entire line.

\_\_\_
# This is a full line comment
foo: bar # this is a commenttoo

Comments are for humans. YAML processors will discard them.

## YAML Data Types

Values in YAML's key-value pairs are scalar. They act like the scalar types in languages like PerlJavascriptand Python. It's usually good enough to enclose strings in quotesleave numbers unquotedand let the parser figure it out. But that's only the tip of the iceberg. YAML is capable of a great deal more.

### Key-Value Pairs and Dictionaries

The key-value is YAML's basic building block. Every item in a YAML document is a member of at least one dictionary. The key is always a string. The value is a scalar so that it can be any datatype. Soas we've already seenthe value can be a stringa numberor another dictionary.

### Numeric types

YAML recognizes numeric types. We saw floating point and integers above. YAML supports several other numeric types. An integer can be decimalhexadecimalor octal.

\---
foo: 12345
bar: 0x12d4
plop: 023332

Let's run our python script on this document.

foo : 12345
bar : 4820
plop : 9946

As you expect**Ox** indicates a value is hexand a leading zero denotes an octal value. YAML supports both fixed and exponential floating point numbers.

\---
foo: 1230.15
bar:  12.3015e+05

When we evaluate these entries we see:

foo : 1230.15
bar : 1230150.0

Finallywe can represent not-a-number (NAN) or infinity.

\---
foo: .inf
bar: -.Inf
plop: .NAN

The value of **foo** is infinity. Bar is negative infinityand **plop** is NAN.

### Strings

YAML strings are Unicode. In most situationsyou don't have to specify them in quotes.

\---
foo: this is a normal string

Our test program processes this as:

foo: this is a normal string

But if we want escape sequences handledwe need to use double quotes.

\---
foo: "this is not a normal string\\n"
bar: this is not a normal string\\n

YAML processes the first value as ending with a carriage return and linefeed. Since the second value is not quotedYAML treats the \\n as two characters.

foo: this is not a normal string
bar: this is not a normal string\\n

YAML will not escape strings with single quotesbut the single quotes do avoid having string contents interpreted as document formatting. String values can span more than one line. With the fold (greater than) characteryou can specify a string in a block.

bar: >
 this is not a normal string it
 spans more than
 one line
 see?

But it's interpreted without the newlines.

bar : this is not a normal string it spans more than one line see?

The block (pipe) character has a similar functionbut YAML interprets the field exactly as is.

bar: |
 this is not a normal string it
 spans more than
 one line
 see?

Sowe see the newlines where they are in the document.

bar : this is not a normal string it
spans more than
one line
see?

### Nulls

You enter nulls with a tilde(~) or the unquoted null string literal.

\---
foo: ~
bar: null

Our program prints:

foo : None
bar : None

Python's representation for null is None.

### Booleans

YAML indicates boolean values with the keywords TrueOn and Yes for true. False is indicated with FalseOffor No.

\---
foo: True
bar: False
light: On
TV: Off

### Arrays

You can specify arrays or lists on a single line.

\---
items: \[ 12345 \]
names: \[ "one""two""three""four" \]

Oryou can put them on multiple lines.

\---
items:
 - 1
 - 2
 - 3
 - 4
 - 5
names:
 - "one"
 - "two"
 - "three"
 - "four"

The multiple line format is useful for lists that contain complex objects instead of scalars.

\_\_\_
items:
 - things:
     thing1: huey
     things2: dewey
     thing3: louie
 - other things:
     key: value

An array can contain any valid YAML value. The values in a list do not have to be the same type.

### Dictionaries

We covered dictionaries abovebut there's more to them. Like arraysyou can put dictionaries inline. We saw this format above. It's how python prints dictionaries.

\---
foo: { thing1: hueything2: louiething3: dewey }

We've seen them span lines before.

\---
foo: bar
bar: foo

Andof coursethey can be nested and hold any value.

\---
foo:
 bar:
   - bar
   - rab
   - plop

## Advanced Options

### Chomp Modifiers

Multiline values may end with whitespaceand depending on how you want the document to be processed you might not want to preserve it. YAML has the **strip** chomp and **preserve** chomp operators. To save the last characteradd a plus to the fold or block operators.

bar: >+
 this is not a normal string it
 spans more than
 one line
 see?

Soif the value ends with whitespacelike a newlineYAML will preserve it. To strip the characteruse the strip operator.

bar: |-
 this is not a normal string it
 spans more than
 one line
 see?

### Multiple documents

A document starts with three dashes and ends with three periods. Some YAML processors require the document start operator. The end operator is usually optional. For exampleJava's Jackson will not process a YAML document without the startbut Python's PyYAML will. You'll usually use the end document operator when a file contains multiple documents. Let's modify our python code.

import yaml

from yaml import load
try:
from yaml import CLoader as Loader
except ImportError:
from yaml import Loader

if \_\_name\_\_ == '\_\_main\_\_':
stream = open("foo.yaml"'r')
dictionary = yaml.load\_all(streamLoader)

for doc in dictionary:
print("New document:")
for keyvalue in doc.items():
print(key + " : " + str(value))
if type(value) is list:
print(str(len(value)))

PyYAML's **load\_all** will process all of the documents in a stream. Nowlet's process a compound document with it.

\---
bar: foo
foo: bar
...
---
one: two
three: four

The script finds two YAML documents.

New document:
bar : foo
foo : bar
New document:
one : two
three : four

## Conclusion

YAML is a powerful language that can be used for configuration filesmessages between applicationsand saving application state. We covered its most commonly used featuresincluding how to use the built-in datatypes and structure complex documents. Some [platforms](http://yaml.org/) support YAML's advanced featuresincluding custom data types.

CloudBees provides numerous [blog](https://www.cloudbees.com/blog) posts that discuss the benefits of using YAML to manage application and configuration data. If you're interested in learning more about YAML and its applicationswe invite you to explore the many blog posts CloudBees has created on YAML-related technologies. Below are some of the blog posts discussing some of the essential YAML-related technologies:

-   [Creating items with CasC for the operations center](https://docs.cloudbees.com/docs/cloudbees-jenkins-platform/latest/casc-oc/items)

-   [Creating a CasC bundle for the operations center](https://docs.cloudbees.com/docs/cloudbees-jenkins-platform/latest/casc-oc/create-bundle)

-   [CloudBees Core Configuration as Code (Preview)](https://www.cloudbees.com/blog/cloudbees-core-configuration-code-preview)

-   [Kubernetes using external pod description yaml](https://docs.cloudbees.com/docs/cloudbees-ci-kb/latest/cloudbees-ci-on-modern-cloud-platforms/kubernetes-using-external-pod-description-yaml)
These blog posts detail how YAML can help manage complex application and configuration dataproviding a deeper understanding of the language and its benefits.
___
[ ](https://www.cloudbees.com/blog/yaml-tutorial-everything-you-need-get-started)
____
2023-07-30
[[ReadItLater]] [[Article]]
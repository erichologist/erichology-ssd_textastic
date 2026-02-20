---
title: YAML frontmatter | YAML headers
author: ELH
categories:
  - YAML
	- MD
tags:
  - YAML 
	- frontmatter
	- yaml-frontmatter
	- yaml-headers
	- headers
keywords:		yaml, frontmatter, yaml-frontmatter yaml-headers
xhtml header:
		<link rel="stylesheet" type="text/css" media="all" href="../assets/mdmd.css"/>
		<link rel="stylesheet" type="text/css" media="all" href="../assets/prism84.css"/>
		<script type="text/javascript" src="../assets/prism.js"></script>
		<link rel="stylesheet" type="text/css" media="all" href="../assets/mdmtl.css"/>
link-citations: TRUE
favicon: "../assets/icons/favicon.svg"
tableOfContents: TRUE
lastUpdated: TRUE
---

# YAML Frontmatter 
## YAML Headers





Markdown documents use a block of YAML-formatted key-value pairs, known as YAML frontmatter or a YAML header, at the very beginning of the file to store metadata. This allows processors like Jekyll, Pandoc, or static site generators to access structured information about the document (e.g., title, author, date, tags) without rendering it as content. [^21][^22][^23][^24][^25]

### Structure and Placement


- The YAML frontmatter block must be the very first thing in the Markdown file.
- It is enclosed by two sets of triple-dashed lines (`---`).
- There should be no blank line before the opening `---`. 
[^26][^27][^28][^29]


```lang-yml
---
title: My Document Title
author: Jane Doe
date: 2025-01-22
tags:
  - guide
  - markdown
  - yaml
---
```

### The rest of your markdown content starts here.
#### Key Syntax Rules

• Key-Value Pairs: Data is represented as key-value pairs, separated by a colon and a space (e.g., key: value).

• Whitespace: Use spaces for indentation, not tabs, to denote nested relationships.

• Quotes: While strings often don't require quotes, using double quotes (`" "`) around values is a good practice to avoid errors with special characters (like colons or asterisks).

• Lists: Lists can be formatted using a comma-separated line or by indenting each item with a bullet point (`-`). 
[^27][^30][^31][^32][^33]

### Common Metadata Fields

The specific keys you can use often depend on the application processing your Markdown file (e.g., Jekyll, Quarto, Obsidian). Common ones include: 

<details> <summary><dt>title</dt></summary>
<dd>The document's title.</dd></details>

<details> <summary><dt>author</dt></summary>
<dd>The name of the document's creator.</dd></details>

<details> <summary><dt>__date__</dt></summary>
<dd>The publication or creation date.</dd></details>

<details> <summary><dt>__tags__ or __categories__</dt></summary>
<dd>A list of keywords for organization and filtering.</dd></details>

<details> <summary><dt>__description__</dt></summary>
<dd>A short summary of the content, often used for HTML meta tags.</dd></details>

<details> <summary><dt>__output__</dt></summary>
<dd>Specifies the rendering format (e.g., `html_document`, `pdf_document`). [^24][^25][^30][^38][^39]</dd></details>


For more specific documentation, consult the guides for the tool you are using, such as the GitHub Docs, Jekyll documentation, or Pandoc manual. [^20][^21][^22][^23][^24]


[^21]:https://doc.fluidtopics.com/r/Markdown-Connector-Reference-Guide/Prepare-Markdown-content/Metadata-in-topics
[^22]:https://docs.github.com/en/contributing/writing-for-github-docs/using-yaml-frontmatter
[^23]:https://forum.literatureandlatte.com/t/metadata-for-markdown-yaml/41767
[^24]:https://docs.hedgedoc.org/references/yaml-metadata/
[^25]:https://peterbabic.dev/blog/yaml-metadata-in-markdown/
[^26]:https://www.youtube.com/watch?v=YlcK9Ef31KE
[^27]:https://www.youtube.com/watch?v=an8iBB_8ShE
[^28]:https://stackoverflow.com/questions/44215896/markdown-metadata-format
[^29]:https://support.typora.io/YAML/
[^30]:https://www.youtube.com/watch?v=Ted0xbQp6iY
[^31]:https://quire.getty.edu/docs-v1/fundamentals/
[^32]:https://rdmkit.elixir-europe.org/page_metadata
[^33]:https://cran.r-project.org/web/packages/ymlthis/vignettes/yaml-overview.html
[^34]:https://www.markdownguide.org/tools/jekyll/
[^35]:https://help.obsidian.md/obsidian
[^36]:https://medium.com/codex/whats-new-in-quarto-1-7-c428bedcb7cb
[^37]:https://vbcloudboy.medium.com/how-microsoft-copilot-your-everyday-ai-companion-help-you-pass-github-foundation-exam-ca8dd84d699b
[^38]:https://bookdown.org/yihui/rmarkdown-cookbook/rmarkdown-anatomy.html
[^39]:https://www.asyncapi.com/docs/concepts/asyncapi-document/structure
[^20]:https://www.markdownguide.org/getting-started/
[^21]:https://bookdown.org/yihui/rmarkdown/markdown-syntax.html
[^22]:https://docs.dataminer.services/develop/CICD/GitHub/GitHub_Starter_Workflows.html
[^23]:https://bookdown.org/yihui/rmarkdown/markdown-document.html
[^24]:http://templarian.com/page/2/


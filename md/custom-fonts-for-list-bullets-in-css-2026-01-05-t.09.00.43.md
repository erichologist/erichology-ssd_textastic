---
title: Set Custom Font To Unordered List | CSS ul li
author: ELH
categories:
  - css ul li
tags:
  - css 
	- ul-li
	- ul
  - unordered-lists
keywords:		css, ul, li, unordered-lists
xhtml header:	<link rel="stylesheet" type="text/css" media="all" href="../assets/prism84.css"/>
				<link rel="stylesheet" type="text/css" media="all" href="../assets/mdmdmdmd.css"/>
				<script type="text/javascript" src="../assets/prism.js"></script>
favicon: ../assets/icons/favicon.svg
image: ../assets/icons/favicon.svg
link-citations: TRUE
tableOfContents: TRUE
lastUpdated: TRUE
---

# Set Custom Font To Unordered List 
# Custom Fonts for List Bullets | CSS ul li

>>>>**Assistant:**
>>>>
>>>>Here’s the full HTML and CSS code for a custom unordered list with styled bullets using a web font like Orbitron or Courier New. You can copy and paste this into your project or use it as a starting point:



###  HTML


```lang-html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Custom Bullet List</title>
  <link href="https://fonts.googleapis.com/css2?family=Orbitron&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: Georgia, serif;
      padding: 2em;
      background: #f9f9f9;
    }
    h1 {
      font-family: 'Orbitron', sans-serif;
      text-align: center;
      color: #333;
    }
    ul.custom-bullets {
      list-style: none;
      padding-left: 1.5em;
    }
    ul.custom-bullets li::before {
      content: '◉'; /* You can change this to any symbol */
      font-family: 'Orbitron', sans-serif;
      color: crimson;
      font-size: 1.2em;
      display: inline-block;
      width: 1em;
      margin-left: -1em;
    }
  </style>
</head>
<body>
  <h1>Unordered List with Custom Bullets</h1>
  <ul class="custom-bullets">
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
  </ul>
</body>
</html>
```

---

>>>>Would you like this as a downloadable `.html` file or want to tweak the design further (e.g., different bullet shapes, hover effects, or animations)?

>>>>***User:***
>>>>yes

>>>>**Assistant:**
>>>>Awesome — click the card above to download your custom bullet list demo as an `.html` file. It includes:
>>>>
>>>>-  Orbitron web font for bullet styling  
>>>>-  CSS using `::before` for full control  
>>>>-  Clean layout with serif body text and crimson bullets  
>>>>
>>>>If you’d like alternate bullet shapes, hover effects, or a version using `::marker`, I can whip that up too. Just say the word!

>>>>***User:***
>>>>yes to all.

>>>>**Assistant:**
>>>>Here’s your enhanced version of the custom bullet list demo — now with:
>>>>
>>>>-  `::marker` and `::before` examples  
>>>>-  Alternate bullet shapes (circle, square, emoji, Unicode)  
>>>>-  Hover effects (color shift, scale)  
>>>>-  Smooth animations  
>>>>
>>>>Click the card above to download the full `.html` file and explore the variations.



>>>>**Want to go further?**
>>>>
>>>>I can help you:
>>>>- Add dark mode support with `@media (prefers-color-scheme)`
>>>>- Animate bullets with CSS keyframes
>>>>- Use icon fonts like Font Awesome for bullets
>>>>- Convert this into a reusable component or Markdown snippet
>>>>
>>>>Just say the word and I’ll tailor it to your style.

>>>>***User:***
>>>>animate bullets

>>>>**Assistant:**
>>>>Here’s how to animate custom bullets in an unordered list using CSS. You can animate color, scale, rotation, or even swap symbols. Below is a complete example with animated bullets using `::before`:



###  Animated Bullet List (CSS + HTML)

```lang-html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Animated Bullets</title>
  <link href="https://fonts.googleapis.com/css2?family=Orbitron&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: Georgia, serif;
      background: #f4f4f4;
      padding: 2em;
    }
    h1 {
      font-family: 'Orbitron', sans-serif;
      text-align: center;
      color: #222;
    }
    ul.animated-bullets {
      list-style: none;
      padding-left: 1.5em;
    }
    ul.animated-bullets li {
      position: relative;
      margin: 0.5em 0;
      padding-left: 1em;
      transition: color 0.3s ease;
    }
    ul.animated-bullets li::before {
      content: '◉';
      font-family: 'Orbitron', sans-serif;
      color: crimson;
      font-size: 1.2em;
      position: absolute;
      left: 0;
      top: 0;
      animation: pulse 1.5s infinite ease-in-out;
    }
    ul.animated-bullets li:hover::before {
      color: teal;
      transform: scale(1.3);
    }
    @keyframes pulse {
      0%, 100% {
        transform: scale(1);
        opacity: 1;
      }
      50% {
        transform: scale(1.3);
        opacity: 0.6;
      }
    }
  </style>
</head>
<body>
  <h1>Animated Bullet List</h1>
  <ul class="animated-bullets">
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
  </ul>
</body>
</html>
```

This version uses:
- `@keyframes pulse` to animate the bullet
- `::before` to insert a custom bullet symbol
- `Orbitron` font for a futuristic look
- Hover effect to scale and recolor the bullet

>>>>Would you like this as a downloadable file or want to try a different animation style (e.g., bounce, rotate, fade)?

>>>>***User:***
>>>>yes

>>>>**Assistant:**
>>>>Here you go — click the card above to download your animated bullet list demo as an `.html` file. It includes:
>>>>
>>>>-  A pulsing animation on each bullet using `@keyframes`
>>>>-  Custom bullet symbol (`◉`) styled with the Orbitron font
>>>>-  Hover effect that scales and recolors the bullet
>>>>-  Clean, modern layout with serif body text
>>>>
>>>>If you’d like to try other animation styles like bounce, rotate, or even staggered delays for each bullet, I’d be happy to help you build that too!

>>>>***User:***
>>>>Convert this into a reusable component or Markdown snippet

>>>>**Assistant:**
>>>>Here’s how you can reuse the animated bullet list as either a **Markdown snippet** or a **modular HTML/CSS component**:

---

###  Reusable HTML/CSS Component

You can drop this into any HTML project. Just include the CSS in your stylesheet or `<style>` block, and use the `.animated-bullets` class wherever needed.

```lang-html
<!-- Include in your <head> -->
<link href="https://fonts.googleapis.com/css2?family=Orbitron&display=swap" rel="stylesheet">
<style>
.animated-bullets {
  list-style: none;
  padding-left: 1.5em;
}

.animated-bullets li {
  position: relative;
  margin: 0.5em 0;
  padding-left: 1em;
  transition: color 0.3s ease;
}
.animated-bullets li::before {
  content: '◉';
  font-family: 'Orbitron', sans-serif;
  color: crimson;
  font-size: 1.2em;
  position: absolute;
  left: 0;
  top: 0;
  animation: pulse 1.5s infinite ease-in-out;
}
.animated-bullets li:hover::before {
  color: teal;
  transform: scale(1.3);
}
@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.3);
    opacity: 0.6;
  }
}
</style>
<!-- Use anywhere in your HTML -->
<ul class="animated-bullets">
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ul>
```

---

###  Markdown Snippet (for documentation or GitHub)

Markdown doesn’t support custom CSS directly, but you can document the component like this:

<details>
<summary>Animated Bullet List Component</summary>

```lang-html
<!-- HTML -->
<ul class="animated-bullets">
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ul>
```

```lang-css
/* CSS */
.animated-bullets {
  list-style: none;
  padding-left: 1.5em;
}
.animated-bullets li {
  position: relative;
  margin: 0.5em 0;
  padding-left: 1em;
  transition: color 0.3s ease;
}
.animated-bullets li::before {
  content: '◉';
  font-family: 'Orbitron', sans-serif;
  color: crimson;
  font-size: 1.2em;
  position: absolute;
  left: 0;
  top: 0;
  animation: pulse 1.5s infinite ease-in-out;
}
.animated-bullets li:hover::before {
  color: teal;
  transform: scale(1.3);
}
@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.3);
    opacity: 0.6;
  }
}
```

</details>

---

>>>>Would you like me to package this into a downloadable `.html` or `.md` file for your toolkit?

>>>>***User:***
>>>>I want a downloadable .md file

>>>>**Assistant:**
>>>>Here you go — click the card above to download your **Markdown (.md)** file containing the reusable animated bullet list component.
>>>>
>>>>It includes:
>>>>-  HTML and CSS code blocks
>>>>-  Ready-to-copy snippet for documentation or GitHub
>>>>-  Clearly labeled sections for easy reuse
>>>>
>>>>If you’d like a matching `.html` file, a dark mode version, or a version using `::marker`, I can prep those too!

>>>>***User:***
>>>>please prep an html file and a ::marker version

>>>>**Assistant:**
>>>>Here you go — click the card above to download your `.html` file featuring the **animated bullet list using `::marker`**.
    
<br>    

>###  What’s Inside:
>- Uses `::marker` for native bullet styling
>- CSS animation with `@keyframes` to pulse the bullet
>- Custom font (`Orbitron`) applied to bullets only
>- Hover effect that scales and recolors the bullet
>
    
    



>>>>Want to combine `::marker` and `::before` for fallback support, or animate bullets with different effects like bounce, rotate, or staggered delays? I can help you build that too — just say the word!

>>>>#### User:
>>>>yes, combine them


>>>>**Assistant:**
>>>>Here’s your combined version — a reusable HTML component that uses both `::marker` and `::before` for **maximum compatibility and animation control**.


###  Features:
- Uses `::marker` for modern browsers
- Falls back to `::before` for older browsers
- Animated pulsing bullets
- Custom font (`Orbitron`)
- Hover effects


>>>>Click the card above to download the `.html` file.
>>>>
>>>>Would you like me to wrap this into a Markdown snippet too, or add dark mode and icon font support next?


>>>>***User:***
>>>>yes to all


>>>>**Assistant:**
>>>>You’ve got it! Here's what I’ve prepared for you:

---

###  Combined HTML Component (Downloadable)

Click the card above to download a fully featured `.html` file that includes:

- `::marker` for modern bullet styling  
- `::before` as a fallback for older browsers  
- Animated pulsing bullets using `@keyframes`  
- Hover effects (scale + color shift)  
- Orbitron web font  
- Dark mode support via `@media (prefers-color-scheme)`  
- Clean, modular structure for easy reuse  



###  Markdown Snippet (for Docs or GitHub)
##  Animated Bullet List Component (HTML + CSS)

This component uses both `::marker` and `::before` for compatibility and animation. It includes dark mode support and custom font styling.


```lang-html
<!-- Include in <head> -->
<link href="https://fonts.googleapis.com/css2?family=Orbitron&display=swap" rel="stylesheet">
```


```lang-html
<style>
  .animated-bullets {
    list-style: none;
    padding-left: 1.5em;
  }
  .animated-bullets li {
    position: relative;
    margin: 0.5em 0;
    padding-left: 1em;
    transition: color 0.3s ease;
  }
  .animated-bullets li::marker {
    content: '◉';
    font-family: 'Orbitron', sans-serif;
    color: crimson;
    animation: pulse 1.5s infinite ease-in-out;
  }
  .animated-bullets li::before {
    content: '◉';
    font-family: 'Orbitron', sans-serif;
    color: crimson;
    font-size: 1.2em;
    position: absolute;
    left: 0;
    top: 0;
    animation: pulse 1.5s infinite ease-in-out;
  }
  .animated-bullets li:hover::before,
  .animated-bullets li:hover::marker {
    color: teal;
    transform: scale(1.3);
  }
  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(1.3);
      opacity: 0.6;
    }
  }
  @media (prefers-color-scheme: dark) {
    body {
      background: #111;
      color: #eee;
    }
  }
</style>
<!-- Use in <body> -->
<ul class="animated-bullets">
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ul>
```


____

Would you like this Markdown snippet as a downloadable `.md` file too? Or want to modularize it further into a CSS class or Web Component?

>>>>**Assistant:**
I started the page, Animated Bullet List Demo. You can edit it now, or come back to it later.













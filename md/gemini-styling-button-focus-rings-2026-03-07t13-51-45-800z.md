---
title: Styling Button Focus Rings | Gemini Conversation
author: ELH
categories:
  - Gemini
tags:
  - Gemini
  - Button Focus Rings
  - tag
keywords:    button focus rings, gemini, tag
css:      ../assets/mdprag.css
xhtml header:
    <link rel="stylesheet" type="text/css" media="all" href="../assets/mdprag.css"/>
    <link rel="stylesheet" type="text/css" media="all" href="../assets/mdmtg.css"/>
    <link rel="stylesheet" type="text/css" media="all" href="../assets/prism84.css"/>
    <script type="text/javascript" src="../assets/prism.js"></script>
    <style></style>
exported: 2026-03-07T13:51:45.800Z
favicon: ../assets/icons/favicon.svg
image: ../assets/icons/favicon.svg
url: https://gemini.google.com/app/9f4dc62eff78bcb8
link-citations: TRUE
tableOfContents: TRUE
lastUpdated: TRUE
---

# Styling Button Focus Rings
# Gemini Conversation


User
:CSS button sometimes shows thin black box around it

Assistant
:That thin black box is likely the browser's default focus ring.Browsers add this outline to help users who navigate via keyboard (using the Tab key) see which element is currently selected. However, it can sometimes trigger unexpectedly on mouse clicks or look out of place with your specific design.

Here is how you can manage it while keeping your site accessible:

1. The Quick Fix (The "No Outline" Approach)
If you want to remove it entirely, you can target the `:focus pseudo-class`.

[Note]
: Use this with caution. Removing the outline without a replacement makes your site difficult to use for people who don't use a mouse.



```lang-css
button:focus {
    outline: none;
}
```

2. The Modern Standard: `focus-visible`
The `:focus-visible` selector is the best of both worlds. It only shows the outline when the browser thinks the user needs it (like when using a keyboard), but hides it during mouse clicks.

```lang-css
/* Removes outline for mouse users, keeps it for keyboard users */
button:focus:not(:focus-visible) {
    outline: none;
}
```

3. Customizing the StyleInstead of just removing the "ugly" black box, you can style it to match your brand. This ensures accessibility remains high while the UI stays pretty.

```lang-css
button:focus {
    outline: 2px solid #3498db; /* A custom color */
    outline-offset: 2px;       /* Adds space between button and ring */
}
```

Why is it happening on click?Some browsers (especially older versions of Chrome or Edge) treat a mouse "click" as a "focus" event and trigger the outline. Using :focus-visible as shown in step 2 is the most reliable way to stop this behavior for mouse users specifically.Comparison TablePropertyBehaviorAccessibilityoutline: noneNever shows a ringPoor (Keyboard users get lost):focusShows on click and tabGood but sometimes "ugly":focus-visibleOnly shows when navigating via keyboardBest (Clean and accessible)Would you like me to help you write a custom focus style that matches the specific colors of your website?

__User__
:The box is a separate square around a circular button

__Assistant__
:That "square-around-a-circle" look happens because the outline property in CSS follows the element's "geometric box" rather than its border-radius by default. While border follows the curves, outline often stays as a rigid rectangle.Here are the two best ways to fix this so the focus ring hugs your circular button perfectly.1. The Modern Fix: outline + border-radiusIn modern browsers (Chrome 94+, Safari 16.4+, and Firefox), the outline property should automatically follow the border-radius of the element. If it isn't, ensure you aren't using a very old browser or a specific reset that breaks this.

```lang-css
button {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    /* Makes the button a circle */
    border: none;
    background: #3498db;
}
button:focus-visible {
    outline: 3px solid #2980b9;
    outline-offset: 4px;
    /* Creates a gap between circle and ring */
}
```

2. The Universal Fix: box-shadowIf you need to support older browsers or find the outline is still being stubborn, box-shadow is the gold-standard workaround. Unlike outline, a box-shadow always respects the border-radius.

```lang-css
button:focus {
    outline: none; /* Hide the square black box */
    /* Syntax: x-offset y-offset blur spread color */
    box-shadow: 0 0 0 4px rgba(52, 152, 219, 0.5);
}
```

Why box-shadow is often better for circles:Matches Curves: It perfectly mirrors the 50% radius of your circle.Layering: You can stack multiple shadows to create a "halo" effect.Consistency: It looks identical across every browser (Chrome, Safari, Firefox).A Pro Tip on AccessibilityIf you use the box-shadow method, make sure the color has high contrast against your background. Since you're replacing a system-level accessibility feature, you want to make sure keyboard users can still see where they are!Would you like me to generate a complete HTML/CSS snippet you can copy-paste to see both methods in action?

# Animated box-shadow without crippling performance

A Pen created on CodePen.

Original URL: [https://codepen.io/erichologist/pen/OPRLWpx](https://codepen.io/erichologist/pen/OPRLWpx).

How do you animate the box-shadow property in CSS without causing re-paints on every frame, and heavily impacting the performance of your page? Short answer: you don't. Animating a change of box-shadow will hurt performance.

There's an easy way of mimicking the same effect, however, with minimal re-paints, that should let your animations run at a solid 60 FPS: animate the opacity of a pseudo-element.
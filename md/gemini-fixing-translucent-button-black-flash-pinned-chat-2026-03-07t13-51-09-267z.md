# Gemini Export
Conversation: Fixing Translucent Button Black Flash Pinned chat
URL: https://gemini.google.com/app/415618b1ea3ec4e4
Exported: 2026-03-07T13:51:09.267Z

## User

Css translucent button flashes black when clicked

## Assistant

That "black flash" is a common annoyance, usually caused by the browser's default active state or focus ring styles clashing with your custom transparency. Since your button is translucent, the browser might be layering a default dark highlight color behind it the moment it's pressed.Here are the most likely culprits and how to fix them:1. The Mobile Tap Highlight (Most Common)On mobile browsers (especially Chrome and Safari), there is a default overlay that appears when you tap a link or button. To disable it, add this to your CSS:CSSbutton, .your-button-class {
  -webkit-tap-highlight-color: transparent;
}
2. Resetting the Active StateSometimes the background-color is being explicitly changed by a "user agent stylesheet" (the browser's default CSS) during the :active phase. You can override this by ensuring your active state maintains the desired transparency.CSS.your-button-class:active {
  /* Match your original background or adjust slightly */
  background-color: rgba(255, 255, 255, 0.2);
  outline: none;
}
3. The Outline GhostIf the flash looks more like a thick border or a shadow, it’s likely the outline. While you should keep outlines for accessibility (keyboard users), you can style them to be less jarring or use focus-visible.CSS.your-button-class:focus {
  outline: none; /* Only do this if you provide another clear focus style! */
  box-shadow: none;
}
4. GPU Rendering & TransitionsIf you have a transition property on your button (e.g., transition: all 0.3s;), the browser might be struggling to calculate the transparency frames, leading to a momentary black render.Try these two tweaks:Be Specific: Instead of all, only transition the properties you need (e.g., transition: background-color 0.3s;).Force Hardware Acceleration: Add transform: translateZ(0); to the button to keep the rendering on the GPU.Summary ChecklistPotential CauseFixMobile Overlay-webkit-tap-highlight-color: transparent;Default Active StateDefine .button:active { background: ... }Focus OutlineAdjust outline or box-shadowTransition GlitchChange transition: all to specific propertiesWould you like me to take a look at your specific CSS code to pinpoint exactly which line is causing the flicker?

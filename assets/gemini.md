---
title: Gemini  Chats
author: ELH
categories:
- Chats
tags:
	- Gemini
	- Chats
	- tag
keywords:		Chats, Gemini, tag
tableOfContents: TRUE
css:			./mdprag.css
xhtml header:
		<link rel="stylesheet" type="text/css" media="all" href="./mdprag.css"/>
		<link rel="stylesheet" type="text/css" media="all" href="./mdmtp.css"/>
		<link rel="stylesheet" type="text/css" media="all" href="./mdmtp.css"/>
		<script type="text/javascript" src="./prism.js"></script>
		<style></style>
---


# Gemini
## Chats




_______



```lang-css
body {
  margin: 0;
  padding: 0;
}
.container {
  width: 100%;/* Fills the screen on mobile */
  max-width: 75ch;/*Prevents lines from getting too long on desktop */
  margin-inline: auto;/* Centers the content*/
  padding-inline: 1.5rem;/* Essential "breathing room" on mobile*/
  box-sizing: border-box;/* Ensures padding doesn't break the width*/
}
```


_______
<meta name="viewport" content="width=device-width, initial-scale=1.0">


_______


```lang-css
@keyframes gradientBG {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%; /* Return to start to loop seamlessly */
  }
}
```
_______

```lang-css
body {
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  background-repeat: no-repeat;
  background-attachment: fixed; /* Keeps it locked during scroll */
  animation: gradientBG 15s ease infinite;
}
```

_______


```lang-css
.bg-wrapper {
  position: fixed;
  top: -10%; 
  left: -10%;
  width: 120%; /* Larger than screen to hide edges */
  height: 120%;
  background: linear-gradient(...);
  background-size: 400% 400%;
  z-index: -1;
  transform: translate3d(0, 0, 0); /* Forces GPU acceleration */
}
```






```lang-html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Premium Animated Hero</title>
    <style>
        /* 1. GLOBAL SETTINGS & VARIABLES */
:root {
    --bg-dark: #191919;
    --bg-accent: #353130;
    --bg-bridge: #2a2a2a;
    --text-main: #ffffff;
}
body {
    margin: 0;
    padding: 0;
    background-color: #111; /* Fallback */
    font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
}
/* 2. THE HERO CARD */
.hero-card {
    width: 100%;
    max-width: 75ch; /* Desktop limit */
    margin: 1.5rem;
    padding: 4rem 2rem;
    border-radius: 24px;
    overflow: hidden;
    position: relative;
    box-sizing: border-box;
    text-align: center;
    /* Layered Animated Background */
    background-image: 
        linear-gradient(120deg, rgba(255,255,255,0) 30%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0) 70%),
        linear-gradient(90deg, var(--bg-dark), var(--bg-accent), var(--bg-bridge), var(--bg-dark));
    background-size: 200% 100%, 400% 100%;
    background-attachment: fixed;
    
    animation: 
        shimmer 8s infinite linear, 
        colorFlow 15s ease-in-out infinite;

    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
}
/* 3. ANIMATION KEYFRAMES */
@keyframes shimmer {
    0% { background-position: -200% 0, 0 0; }
    100% { background-position: 200% 0, 0 0; }
}
@keyframes colorFlow {
    0% { background-position: 0 0, 0% 50%; }
    50% { background-position: 0 0, 101% 50%; } /* 101% hides seams */
    100% { background-position: 0 0, 0% 50%; }
}

@keyframes fadeInUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}
/* 4. CONTENT STYLES */
.fade-in-text {
    opacity: 0;
    animation: fadeInUp 0.8s ease-out forwards;
    color: var(--text-main);
}
h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    animation-delay: 0.2s;
}
p {
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 2rem;
    opacity: 0.8;
    animation-delay: 0.5s;
}
.cta-button {
    display: inline-block;
    padding: 0.8rem 2.5rem;
    background: rgba(255, 255, 255, 0.1);
    color: white;
    text-decoration: none;
    border-radius: 50px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    font-weight: 600;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    opacity: 0;
    animation: fadeInUp 0.8s ease-out forwards;
    animation-delay: 0.8s;
}
.cta-button:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.3);
    border-color: rgba(255, 255, 255, 0.5);
}
.cta-button:active {
    transform: scale(0.95);
}
/* 5. RESPONSIVE ADJUSTMENTS */
@media (max-width: 520px) {
    h1 { font-size: 1.8rem; }
    .hero-card { padding: 3rem 1.5rem; }
}
    </style>
</head>
<body>
    <section class="hero-card">
        <h1 class="fade-in-text">Experience the Flow</h1>
        <p class="fade-in-text">
            This card uses a 75ch max-width for perfect readability on desktop, 
            while staying fully responsive on mobile devices.
        </p>
        <a href="#" class="cta-button">Get Started</a>
    </section>
</body>
</html>
```
_______

```lang-css
:root {
	--whtf:rgba(255, 255, 255, 1);
	--wht90:rgba(255, 255, 255, 0.90);
	--wht80:rgba(255, 255, 255, 0.80);
	--wht70:rgba(255, 255, 255, 0.70);
	--wht67:rgba(255, 255, 255, 0.67);
	--wht57:rgba(255, 255, 255, 0.57);

	--wht60:rgba(255, 255, 255, 0.60);
	--wht50:rgba(255, 255, 255, 0.50);
	--wht40:rgba(255, 255, 255, 0.40);
	--wht32:rgba(255, 255, 255, 0.32);
	--wht30:rgba(255, 255, 255, 0.30);
	--wht25:rgba(255, 255, 255, 0.25);
	--wht23:rgba(255, 255, 255, 0.23);
	--wht20:rgba(255, 255, 255, 0.20);
	--wht17:rgba(255, 255, 255, 0.17);
	--wht16:rgba(255, 255, 255, 0.16);
	--wht152:rgba(255, 255, 255, 0.152);
	--wht15:rgba(255, 255, 255, 0.15);
	--wht10:rgba(255, 255, 255, 0.10);
	--wht08:rgba(255, 255, 255, 0.08);
	--wht05:rgba(255, 255, 255, 0.05);
	--wht025:rgba(255, 255, 255, 0.025);
	--wht0125:rgba(255, 255, 255, 0.0125);
	--blk10:rgba(0, 0, 0, 0.10);
	--blk09:rgba(0, 0, 0, 0.09);
	--blk01:rgba(0, 0, 0, 0.01);
	--c01:#EE7752;
	--c02:#E73C7E;
	--c03:#23A6D5;
	--c04:#23D5AB;
	--c06:#00E9FF;
	--c07:#B385FF;
	--c08:#FDDA9A;
	--c09:#FF66A2;
}
@-webkit-keyframes gradient { 0% {background-position:0% 50%;} 50% {background-position:100% 50%;} 100% {background-position:0%  50%;} }
body {
	--c-action:#196AFF;
	--c-bg:#DAD7D7;
	--c-content:#222211;
	--c-dark:#11111F;
	--c-glass:#BBBBBC;
	--c-light:#EAEAEE;
	--cc8b:#1C1C1C;
	--cc7b:#383838;
	--cc6b:#535353;
	--cc5b:#6F6F6F;
	--cc4b:#000000;
	--cc3b:#8B8B8B;
	--cc2b:#A7A7A7;
	--cc1b:#C2C2C2;
	--cc10:#ABABAB;
	--cc09:#787878;
	--cc08:#454545;
	--cc07:#232323;
	--cc06:#1B1B1B;
	--cc05:#232323;
	--cc04:#454545;
	--cc03:#787878;
	--cc02:#232323;
	--cc01:#DEDEDE;
  --blue50:#0000FF80;
	--cyn1:color-mix(in oklab, #00FF00 49%, #0000FF 51%);
	--cyn2:color-mix(in srgb, #00DDEE 30%, var(--cyn1) 70%);
	--cyn3:color-mix(in srgb, #00FF00 48%, #0000FF 50%);





	--blft:var(--wht40);

	--border3:1px solid var(--wht40);
	--border2:0.1em solid var(--cyn1);
	--border:.1px solid var(--m);

  
	--border-top2:20.751px solid var(--bxbd);
	--border-top:0.61px solid var(--wht40);


	--bq-bdr:1px solid var(--wht70);
	--bq-bdr-btm:1px solid var(--wht05);

	--bq-bg-c:var(--wht08);
	--bq-bg:var(--wht10);

	--bq-sh:
     inset 0 2px 8px var(--wht152),
     inset 0 0 18px var(--wht70),
     inset -6px 3px 12px var(--wht17),
     inset 6px 0 12px var(--wht10),
     0 4px 16px var(--blk10);

	--bq-sh2:inset -4px -2px 18px var(--wht20), inset -6px 3px 12px var(--wht17), inset 6px 0 12px var(--wht10), inset -3px -3px 8px var(--blk01), -0.1px 0 4px var(--wht67), 0 4px 16px var(--blk10), inset 0 2px 8px var(--wht152), 0 0 18px var(--blk09);


	--bx:color-mix(in srgb, var(--c-action) 60%, var(--c-bg) 40%);
	--bxbg:color-mix(in srgb, var(--bx) 60%, transparent 40%);
	--bxbd:color-mix(in srgb, var(--m) 80%, transparent 20%);
	--bx-bdr:1px solid var(--m);

	--m90p:color-mix(in srgb, var(--m) 90%, transparent 10%);
	--m80p:color-mix(in srgb, var(--m) 80%, transparent 20%);
	--m70p:color-mix(in srgb, var(--bx) 70%, transparent 30%);
	--m60p:color-mix(in srgb, var(--bx) 60%, transparent 40%);


	--bxsh:
    0 0 1px var(--m),
    inset 0 0 0 var(--cyn1),

    inset 1px 0 28px var(--m70p),

     inset 1px 0 22px var(--wht70),
    inset 0 -3px 3px var(--m95), 
    inset 0 3px 9px var(--m99), 
    inset -2px -2px 9px var(--m98), 
    inset -3px -3px 8px var(--wht20), 
    inset 3px 3px 12px var(--wht30),
    inset 0 0 12px var(--blk10), 
    inset -2px 3px 9px var(--wht60), 
    inset 0 0 8px var(--blk09),
    inset 3px 3px 14px var(--wht20), 
      inset 2px 0 28px var(--blue50),
    inset 3px 3px 12px var(--m);


	--c-qt:var(--wht32);

	--cyn50:color-mix(in srgb, var(--cyn1) 99%, transparent 50%);

	--cy-lft-top-blr:-3px -3px 4px var(--dir-c);
	--cy-lft-btm-blr:-3px 3px 4px var(--dir-c);

	--cy-lft-top:-5px -5px 0 var(--dir-c);
	--cy-lft-btm:-5px 5px 0 var(--dir-c);

	--cy-rt-top-blr:3px -3px 4px var(--dir-c);
	--cy-rt-btm-blr:3px 3px 4px var(--dir-c);

	--cy-rt-top:5px -5px 0 var(--dir-c);
	--cy-rt-btm:5px 5px 0 var(--dir-c);

	--dir-c:var(--cyn50);

	--glass-reflex-dark:1;
	--glass-reflex-light:1;

	--m:#196AFF;
	--m4:color-mix(in srgb, var(--m) 99%, transparent 40%);
	--m5:color-mix(in srgb, var(--m) 99%, transparent 50%);
	--m6:color-mix(in srgb, var(--m) 99%, transparent 60%);
	--m7:color-mix(in srgb, var(--m) 99%, transparent 70%);
	--m8:color-mix(in srgb, var(--m) 99%, transparent 80%);
	--m9:color-mix(in srgb, var(--m) 99%, transparent 90%);
	--m95:color-mix(in srgb, var(--m) 99%, transparent 95%);
	--m98:color-mix(in srgb, var(--m) 99%, transparent 98%);
	--m99:color-mix(in srgb, var(--m) 99%, transparent 99%);



	--saturation:150%;

	--test2-sh:var(--cy-lft-top), var(--cy-rt-top), var(--cy-rt-btm), var(--cy-lft-btm);

	--test3-sh:var(--cy-lft-top), var(--cy-rt-top), var(--cy-rt-btm), var(--cy-lft-btm), inset var(--cy-lft-top-blr), inset var(--cy-rt-top-blr), inset var(--cy-rt-btm-blr), inset var(--cy-lft-btm-blr);

	--test-sh:var(--cy-lft-top-blr), var(--cy-rt-top-blr), var(--cy-rt-btm-blr), var(--cy-lft-btm-blr), inset var(--cy-lft-top-blr), inset var(--cy-rt-top-blr), inset var(--cy-rt-btm-blr), inset var(--cy-lft-btm-blr);


	/*background:linear-gradient(-95deg, var(--c06), var(--c07), var(--c08), var(--c09));*/
	/*background:linear-gradient(var(--cc01), var(--cc02), var(--cc03), var(--cc04), var(--cc05), var(--cc06), var(--cc07), var(--cc08), var(--cc01));*/
	/*background:linear-gradient(90deg, var(--cc01), var(--cc02), var(--cc03), var(--cc04), var(--cc05));*/
	/*background:linear-gradient(90deg, var(--cc01), var(--cc02));*/
	background:var(--c-bg);
	background-image:linear-gradient(90deg,var(--cc01),var(--cc02));
	background-size:200% 200%;
	-webkit-animation:gradient 15s ease infinite;
	animation:gradient 15s ease infinite;
	font-size:20px;
	font-family:"DM Sans", sans-serif;
	font-optical-sizing:auto;
	color:var(--c-content);
	transition:background 400ms cubic-bezier(1, 0, 0.4, 1),color 400ms cubic-bezier(1, 0, 0.4, 1);
}
body:has(input[value="dark"]:checked) {
	--m:#03D5FF;
	--m4:color-mix(in srgb, var(--m) 99%, transparent 40%);
	--m5:color-mix(in srgb, var(--m) 99%, transparent 50%);
	--m6:color-mix(in srgb, var(--m) 99%, transparent 60%);
	--m7:color-mix(in srgb, var(--m) 99%, transparent 70%);
	--m8:color-mix(in srgb, var(--m) 99%, transparent 80%);
	--m9:color-mix(in srgb, var(--m) 99%, transparent 90%);
	--m95:color-mix(in srgb, var(--m) 99%, transparent 95%);
	--m98:color-mix(in srgb, var(--m) 99%, transparent 98%);
	--m99:color-mix(in srgb, var(--m) 99%, transparent 99%);
	--bx:color-mix(in srgb, var(--c-action) 40%, var(--c-bg) 60%);
	--bxbg:color-mix(in srgb, var(--bx) 60%, transparent 50%);
	--bxbd:color-mix(in srgb, var(--m) 80%, transparent 30%);
	--border-top:1px solid var(--bxbd);
	--bxsh:inset -3px -3px 8px var(--wht16), inset 3px 3px 12px var(--wht16), inset 0 0 12px var(--blk10), inset 2px 1px 12px var(--m9), 0 0 18px var(--blk09), 0 -2px 3px var(--m9);
	--c-glass:#BBBBBC;
	--c-light:#EEEEEE;
	--c-dark:#111111;
	--c-content:#E1E1E1;
	--c-action:#03D5FF;
	--c-bg:#19191F;
	--blft:var(--wht57);
	--glass-reflex-dark:2;
	--glass-reflex-light:0.3;
	--c-qt:var(--wht23);
	--bq-sh2:inset -3px -3px 8px var(--blk01), inset 3px 3px 12px var(--wht20), inset 0 0 12px var(--wht16), 0 0 18px var(--blk09), 2px 0 3px var(--wht67);
	--saturation:150%;
	background:var(--c-bg);
}
body:has(input[value="dim"]:checked) {
	--blft:var(--wht57);
	--m:#E72B93;
	--m4:color-mix(in srgb, var(--m) 99%, transparent 40%);
	--m5:color-mix(in srgb, var(--m) 99%, transparent 50%);
	--m6:color-mix(in srgb, var(--m) 99%, transparent 60%);
	--m7:color-mix(in srgb, var(--m) 99%, transparent 70%);
	--m8:color-mix(in srgb, var(--m) 99%, transparent 80%);
	--m9:color-mix(in srgb, var(--m) 99%, transparent 90%);
	--m95:color-mix(in srgb, var(--m) 99%, transparent 95%);
	--m98:color-mix(in srgb, var(--m) 99%, transparent 98%);
	--m99:color-mix(in srgb, var(--m) 99%, transparent 99%);
	--bx:color-mix(in srgb, var(--m) 40%, var(--c-bg) 60%);
	--bxbg:color-mix(in srgb, var(--bx) 60%, transparent 50%);
	--bxbd:color-mix(in srgb, var(--m) 80%, transparent 70%);
	--border-top:1px solid var(--bxbd);
	--bxsh:inset -3px -3px 8px var(--wht16), inset 3px 3px 12px var(--wht16), inset 0 0 12px var(--blk10), inset 2px 1px 12px var(--m9), 0 0 18px var(--blk09), 0 -2px 3px var(--m9);
	--c-light:#99DEFF;
	--c-dark:#33002B;
	--c-glass:hsl(335 250% 74% / 1);
	--c-content:#D5DBE2;
	--c-action:#E72B93;
	--c-bg:#152433;
	--c-qt:var(--wht20);
	--bq-sh2:inset -3px -3px 8px var(--blk01), inset 3px 3px 12px var(--wht20), inset 0 0 12px var(--wht16), 0 0 18px var(--blk09), 2px 0 4px var(--wht57);
	--glass-reflex-dark:2;
	--glass-reflex-light:0.7;
	--saturation:200%;
	background:var(--c-bg);
}
blockquote, blockquote:not(:has(>blockquote)) {
	display:block;
	font-size:1.82em;
	background-color:var(--bq-bg);
	box-shadow:var(--bq-sh2);
	box-shadow:var(--bq-sh);
	border-radius:10px;
	border-radius:1rem;
	border:var(--bq-bdr);
	margin-left:0;
	margin-right:0;
	margin-bottom:7%;
	margin-top:3%;
  margin:3% 0 7% 0;
	padding-left:1em;
	padding-top:2rem;
	padding-bottom:2rem;
	padding-right:1%;
  padding: 2rem 1% 2rem 2.2rem;
	z-index:-4;
}
.test{
	border:0.1px solid var(--cyn1);
	-webkit-box-shadow:inset 0 0 0 var(--cyn2);
	-moz-box-shadow:1px 0 0 var(--cyn2);
	box-shadow:var(--test-sh);
	-webkit-border-radius:8px;
	-moz-border-radius:8px;
	border-radius:8px;
	padding:0.5em;
}
.box {
	background-color:var(--bxbg);
  border:var(--border);
	box-shadow:var(--bxsh);
	transition:background 400ms cubic-bezier(1, 0, 0.4, 1);
	padding:1em 1.4em;
	border-radius:0.8em;
}
.switcher {
	position:fixed;
	z-index:1;
	top:40px;
	left:50%;
	translate:-50%;
	display:flex;
	align-items:center;
	gap:8px;
	width:244px;
	max-width:244px;
	height:70px;
	box-sizing:border-box;
	padding:8px 12px 10px;
	margin:0 auto;
	border:none;
	border-radius:99em;
	font-size:var(--fz);
	background-color:color-mix(in srgb, var(--c-glass) 12%, transparent);
	backdrop-filter:blur(8px) url(#switcher) saturate(var(--saturation));
	-webkit-backdrop-filter:blur(8px) saturate(var(--saturation));
	box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--c-light) calc(var(--glass-reflex-light) * 10%),transparent), inset 1.8px 3px 0px -2px color-mix(in srgb, var(--c-light) calc(var(--glass-reflex-light) * 90%), transparent), inset -2px -2px 0px -2px color-mix(in srgb, var(--c-light) calc(var(--glass-reflex-light) * 80%), transparent), inset -3px -8px 1px -6px color-mix(in srgb, var(--c-light) calc(var(--glass-reflex-light) * 60%), transparent), inset -0.3px -1px 4px 0px color-mix(in srgb,var(--c-dark) calc(var(--glass-reflex-dark) * 12%),transparent), inset -1.5px 2.5px 0px -2px color-mix(in srgb,var(--c-dark) calc(var(--glass-reflex-dark) * 20%),transparent), inset 0px 3px 4px -2px color-mix(in srgb, var(--c-dark) calc(var(--glass-reflex-dark) * 20%), transparent), inset 2px -6.5px 1px -4px color-mix(in srgb,var(--c-dark) calc(var(--glass-reflex-dark) * 10%),transparent),0px 1px 5px 0px color-mix(in srgb,var(--c-dark) calc(var(--glass-reflex-dark) * 10%),transparent),0px 6px 16px 0px color-mix(in srgb,var(--c-dark) calc(var(--glass-reflex-dark) * 8%),transparent);
	transition:background-color 400ms cubic-bezier(1, 0, 0.4, 1), box-shadow 400ms cubic-bezier(1, 0, 0.4, 1);
}
.switcher__legend {
	position:absolute;
	width:1px;
	height:1px;
	margin:-1px;
	border:0;
	padding:0;
	white-space:nowrap;
	-webkit-clip-path:inset(100%);
	clip-path:inset(100%);
	clip:rect(0 0 0 0);
	overflow:hidden;
}
.switcher__input {
	clip:rect(0 0 0 0);
	-webkit-clip-path:inset(100%);
	clip-path:inset(100%);
	height:1px;
	width:1px;
	overflow:hidden;
	position:absolute;
	white-space:nowrap;
}
.switcher__icon {
	display:block;
	width:100%;
	transition:scale 200ms cubic-bezier(0.5, 0, 0, 1);
}
.switcher__filter {
	position:absolute;
	width:0;
	height:0;
	z-index:-1;
}
.switcher__option {
	--c:var(--c-content);
	display:flex;
	justify-content:center;
	align-items:center;
	padding:0 16px;
	width:68px;
	height:100%;
	box-sizing:border-box;
	border-radius:99em;
	opacity:1;
	transition:all 160ms;
}
.switcher__option:hover {
	--c:var(--c-action);
	cursor:pointer;
}
.switcher__option:hover .switcher__icon { scale:1.2; }
.switcher__option:has(input:checked) {
	--c:var(--c-content);
	cursor:auto;
}
.switcher__option:has(input:checked) .switcher__icon { scale:1; }
.switcher::after {
	content:"";
	position:absolute;
	left:4px;
	top:4px;
	display:block;
	width:84px;
	height:calc(100% - 10px);
	border-radius:99em;
	background-color:color-mix(in srgb, var(--c-glass) 36%, transparent);
	z-index:-1;
	box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--c-light) calc(var(--glass-reflex-light) * 10%),transparent), inset 2px 1px 0px -1px color-mix(in srgb, var(--c-light) calc(var(--glass-reflex-light) * 90%), transparent), inset -1.5px -1px 0px -1px color-mix(in srgb, var(--c-light) calc(var(--glass-reflex-light) * 80%), transparent), inset -2px -6px 1px -5px color-mix(in srgb, var(--c-light) calc(var(--glass-reflex-light) * 60%), transparent), inset -1px 2px 3px -1px color-mix(in srgb,var(--c-dark) calc(var(--glass-reflex-dark) * 20%),transparent), inset 0px -4px 1px -2px color-mix(in srgb,var(--c-dark) calc(var(--glass-reflex-dark) * 10%),transparent),0px 3px 6px 0px color-mix(in srgb,var(--c-dark) calc(var(--glass-reflex-dark) * 8%),transparent);
}
.switcher:has(input[c-option="1"]:checked)::after {
	translate:0 0;
	transform-origin:right;
	transition:background-color 400ms cubic-bezier(1, 0, 0.4, 1),box-shadow 400ms cubic-bezier(1, 0, 0.4, 1), translate 400ms cubic-bezier(1, 0, 0.4, 1);
	-webkit-animation:scaleToggle 440ms ease;
	animation:scaleToggle 440ms ease;
}
.switcher:has(input[c-option="2"]:checked)::after {
	translate:76px 0;
	transition:background-color 400ms cubic-bezier(1, 0, 0.4, 1), box-shadow 400ms cubic-bezier(1, 0, 0.4, 1), translate 400ms cubic-bezier(1, 0, 0.4, 1);
	-webkit-animation:scaleToggle2 440ms ease;
	animation:scaleToggle2 440ms ease;
}
.switcher[c-previous="1"]:has(input[c-option="2"]:checked)::after { transform-origin:left; }
.switcher[c-previous="3"]:has(input[c-option="2"]:checked)::after { transform-origin:right; }
.switcher:has(input[c-option="3"]:checked)::after {
	translate:152px 0;
	transform-origin:left;
	transition:background-color 400ms cubic-bezier(1, 0, 0.4, 1), box-shadow 400ms cubic-bezier(1, 0, 0.4, 1), translate 400ms cubic-bezier(1, 0, 0.4, 1);
	-webkit-animation:scaleToggle3 440ms ease;
	animation:scaleToggle3 440ms ease;
}
@-webkit-keyframes scaleToggle { 0% { scale:1 1; } 50% { scale:1.1 1; } 100% { scale:1 1; } } @keyframes scaleToggle { 0% { scale:1 1; } 50% { scale:1.1 1; } 100% { scale:1 1; } } @-webkit-keyframes scaleToggle2 { 0% { scale:1 1; } 50% { scale:1.2 1; } 100% { scale:1 1; } } @keyframes scaleToggle2 { 0% { scale:1 1; } 50% { scale:1.2 1; } 100% { scale:1 1; } } @-webkit-keyframes scaleToggle3 { 0% { scale:1 1; } 50% { scale:1.1 1; } 100% { scale:1 1; } } @keyframes scaleToggle3 { 0% { scale:1 1; } 50% { scale:1.1 1; } 100% { scale:1 1; } }
/* //////////////////////////////////////////
/  Article Styles //////////////////////// */
.article {
	display:flex;
	flex-direction:column;
	align-items:center;
	padding:5em 2em;
}
h1, h2, h3, h4, h5, h6, p, blockquote {
	width:100%;
	max-width:600px;
	box-sizing:border-box;
}
h1 {
	font-size:3em;
	margin:0.9em 0 0.6em;
}
h2 {
	font-size:2em;
	margin:0.7em 0 0.6em;
}
p {
	line-height:160%;
	margin:0 0 1em;
}
figure {
	margin:1em 0 2em;
	display:flex;
	flex-direction:column;
	align-items:center;
}
figcaption {
	max-width:600px;
	margin-top:1em;
	font-size:0.8em;
	color:color-mix(in srgb, var(--c-content) 60%, var(--c-bg));
}
a {
	color:var(--c-action);
	text-decoration-thickness:0.05em;
	text-underline-position:under;
	-webkit-text-decoration-color:color-mix(in srgb, currentColor, transparent 70%);
	text-decoration-color:color-mix(in srgb, currentColor, transparent 70%);
	transition:color 160ms, -webkit-text-decoration-color 160ms;
	transition:color 160ms, text-decoration-color 160ms;
	transition:color 160ms, text-decoration-color 160ms, -webkit-text-decoration-color 160ms;
}
a:hover {
	color:color-mix(in srgb, var(--c-action), var(--c-content) 40%);
	-webkit-text-decoration-color:color-mix(in srgb, currentColor, transparent 30%);
	text-decoration-color:color-mix(in srgb, currentColor, transparent 30%);
}
img {
	display:block;
	border-radius:0.8em;
	width:100%;
	max-width:700px;
	aspect-ratio:5 / 3;
	-o-object-fit:cover;
	object-fit:cover;
}
```


_______

```lang-css
:root {
	--whtf:rgba(255, 255, 255, 1);
	--wht90:rgba(255, 255, 255, 0.90);
	--wht80:rgba(255, 255, 255, 0.80);
	--wht70:rgba(255, 255, 255, 0.70);
	--wht67:rgba(255, 255, 255, 0.67);
	--wht57:rgba(255, 255, 255, 0.57);
	--wht60:rgba(255, 255, 255, 0.60);
	--wht50:rgba(255, 255, 255, 0.50);
	--wht40:rgba(255, 255, 255, 0.40);
	--wht32:rgba(255, 255, 255, 0.32);
	--wht30:rgba(255, 255, 255, 0.30);
	--wht25:rgba(255, 255, 255, 0.25);
	--wht23:rgba(255, 255, 255, 0.23);
	--wht20:rgba(255, 255, 255, 0.20);
	--wht17:rgba(255, 255, 255, 0.17);
	--wht16:rgba(255, 255, 255, 0.16);
	--wht152:rgba(255, 255, 255, 0.152);
	--wht15:rgba(255, 255, 255, 0.15);
	--wht10:rgba(255, 255, 255, 0.10);
	--wht08:rgba(255, 255, 255, 0.08);
	--wht05:rgba(255, 255, 255, 0.05);
	--wht025:rgba(255, 255, 255, 0.025);
	--wht0125:rgba(255, 255, 255, 0.0125);
	--blk10:rgba(0, 0, 0, 0.10);
	--blk09:rgba(0, 0, 0, 0.09);
	--blk01:rgba(0, 0, 0, 0.01);
	--c01:#EE7752;
	--c02:#E73C7E;
	--c03:#23A6D5;
	--c04:#23D5AB;
	--c06:#00E9FF;
	--c07:#B385FF;
	--c08:#FDDA9A;
	--c09:#FF66A2;
}
@-webkit-keyframes gradient { 0% {background-position:0% 50%;} 50% {background-position:100% 50%;} 100% {background-position:0%  50%;} }
body {
	--c-action:#196AFF;
	--c-bg:#DAD7D7;
	--c-content:#222211;
	--c-dark:#11111F;
	--c-glass:#BBBBBC;
	--c-light:#EAEAEE;
	--cc8b:#1C1C1C;
	--cc7b:#383838;
	--cc6b:#535353;
	--cc5b:#6F6F6F;
	--cc4b:#000000;
	--cc3b:#8B8B8B;
	--cc2b:#A7A7A7;
	--cc1b:#C2C2C2;
	--cc10:#ABABAB;
	--cc09:#787878;
	--cc08:#454545;
	--cc07:#232323;
	--cc06:#1B1B1B;
	--cc05:#232323;
	--cc04:#454545;
	--cc03:#787878;
	--cc02:#232323;
	--cc01:#DEDEDE;
  --blue50:#0000FF80;
	--cyn1:color-mix(in oklab, #00FF00 49%, #0000FF 51%);
	--cyn2:color-mix(in srgb, #00DDEE 30%, var(--cyn1) 70%);
	--cyn3:color-mix(in srgb, #00FF00 48%, #0000FF 50%);
	--blft:var(--wht40);
	--border3:1px solid var(--wht40);
	--border2:0.1em solid var(--cyn1);
	--border:.1px solid var(--m);
	--border-top2:20.751px solid var(--bxbd);
	--border-top:0.61px solid var(--wht40);
	--bq-bdr:1px solid var(--wht70);
	--bq-bdr-btm:1px solid var(--wht05);
	--bq-bg-c:var(--wht08);
	--bq-bg:var(--wht10);
	--bq-sh:inset 0 2px 8px var(--wht152),
						inset 0 0 18px var(--wht70),
			 inset -6px 3px 12px var(--wht17),
					inset 6px 0 12px var(--wht10),
								0 4px 16px var(--blk10);
	--bq-sh2:inset -4px -2px 18px var(--wht20), inset -6px 3px 12px var(--wht17), inset 6px 0 12px var(--wht10), inset -3px -3px 8px var(--blk01), -0.1px 0 4px var(--wht67), 0 4px 16px var(--blk10), inset 0 2px 8px var(--wht152), 0 0 18px var(--blk09);
	--bx:color-mix(in srgb, var(--c-action) 60%, var(--c-bg) 40%);
	--bxbg:color-mix(in srgb, var(--bx) 60%, transparent 40%);
	--bxbd:color-mix(in srgb, var(--m) 80%, transparent 20%);
	--bx-bdr:1px solid var(--m);
	--m90p:color-mix(in srgb, var(--m) 90%, transparent 10%);
	--m80p:color-mix(in srgb, var(--m) 80%, transparent 20%);
	--m70p:color-mix(in srgb, var(--bx) 70%, transparent 30%);
	--m60p:color-mix(in srgb, var(--bx) 60%, transparent 40%);
	--bxsh:0 0 1px var(--m),
    inset 0 0 0 var(--cyn1),
    inset 1px 0 28px var(--m70p),
    inset 1px 0 22px var(--wht70),
    inset 0 -3px 3px var(--m95), 
    inset 0 3px 9px var(--m99), 
    inset -2px -2px 9px var(--m98), 
    inset -3px -3px 8px var(--wht20), 
    inset 3px 3px 12px var(--wht30),
    inset 0 0 12px var(--blk10), 
    inset -2px 3px 9px var(--wht60), 
    inset 0 0 8px var(--blk09),
    inset 3px 3px 14px var(--wht20), 
    inset 2px 0 28px var(--blue50),
    inset 3px 3px 12px var(--m);
	--c-qt:var(--wht32);
	--cyn50:color-mix(in srgb, var(--cyn1) 99%, transparent 50%);
	--cy-lft-top-blr:-3px -3px 4px var(--dir-c);
	--cy-lft-btm-blr:-3px 3px 4px var(--dir-c);
	--cy-lft-top:-5px -5px 0 var(--dir-c);
	--cy-lft-btm:-5px 5px 0 var(--dir-c);
	--cy-rt-top-blr:3px -3px 4px var(--dir-c);
	--cy-rt-btm-blr:3px 3px 4px var(--dir-c);
	--cy-rt-top:5px -5px 0 var(--dir-c);
	--cy-rt-btm:5px 5px 0 var(--dir-c);
	--dir-c:var(--cyn50);
	--glass-reflex-dark:1;
	--glass-reflex-light:1;
	--m:#196AFF;
	--m4:color-mix(in srgb, var(--m) 99%, transparent 40%);
	--m5:color-mix(in srgb, var(--m) 99%, transparent 50%);
	--m6:color-mix(in srgb, var(--m) 99%, transparent 60%);
	--m7:color-mix(in srgb, var(--m) 99%, transparent 70%);
	--m8:color-mix(in srgb, var(--m) 99%, transparent 80%);
	--m9:color-mix(in srgb, var(--m) 99%, transparent 90%);
	--m95:color-mix(in srgb, var(--m) 99%, transparent 95%);
	--m98:color-mix(in srgb, var(--m) 99%, transparent 98%);
	--m99:color-mix(in srgb, var(--m) 99%, transparent 99%);
	--saturation:150%;
	--test2-sh:var(--cy-lft-top), var(--cy-rt-top), var(--cy-rt-btm), var(--cy-lft-btm);
	--test3-sh:var(--cy-lft-top), var(--cy-rt-top), var(--cy-rt-btm), var(--cy-lft-btm), inset var(--cy-lft-top-blr), inset var(--cy-rt-top-blr), inset var(--cy-rt-btm-blr), inset var(--cy-lft-btm-blr);
	--test-sh:var(--cy-lft-top-blr), var(--cy-rt-top-blr), var(--cy-rt-btm-blr), var(--cy-lft-btm-blr), inset var(--cy-lft-top-blr), inset var(--cy-rt-top-blr), inset var(--cy-rt-btm-blr), inset var(--cy-lft-btm-blr);
	background:var(--c-bg);
	background-image:linear-gradient(90deg,var(--cc01),var(--cc02));
	background-size:200% 200%;
	-webkit-animation:gradient 15s ease infinite;
	animation:gradient 15s ease infinite;
	font-size:20px;
	font-family:"DM Sans", sans-serif;
	font-optical-sizing:auto;
	color:var(--c-content);
	transition:background 400ms cubic-bezier(1, 0, 0.4, 1),color 400ms cubic-bezier(1, 0, 0.4, 1);
}
body:has(input[value="dark"]:checked) {
	--m:#03D5FF;
	--m4:color-mix(in srgb, var(--m) 99%, transparent 40%);
	--m5:color-mix(in srgb, var(--m) 99%, transparent 50%);
	--m6:color-mix(in srgb, var(--m) 99%, transparent 60%);
	--m7:color-mix(in srgb, var(--m) 99%, transparent 70%);
	--m8:color-mix(in srgb, var(--m) 99%, transparent 80%);
	--m9:color-mix(in srgb, var(--m) 99%, transparent 90%);
	--m95:color-mix(in srgb, var(--m) 99%, transparent 95%);
	--m98:color-mix(in srgb, var(--m) 99%, transparent 98%);
	--m99:color-mix(in srgb, var(--m) 99%, transparent 99%);
	--bx:color-mix(in srgb, var(--c-action) 40%, var(--c-bg) 60%);
	--bxbg:color-mix(in srgb, var(--bx) 60%, transparent 50%);
	--bxbd:color-mix(in srgb, var(--m) 80%, transparent 30%);
	--border-top:1px solid var(--bxbd);
	--bxsh:inset -3px -3px 8px var(--wht16), inset 3px 3px 12px var(--wht16), inset 0 0 12px var(--blk10), inset 2px 1px 12px var(--m9), 0 0 18px var(--blk09), 0 -2px 3px var(--m9);
	--c-glass:#BBBBBC;
	--c-light:#EEEEEE;
	--c-dark:#111111;
	--c-content:#E1E1E1;
	--c-action:#03D5FF;
	--c-bg:#19191F;
	--blft:var(--wht57);
	--glass-reflex-dark:2;
	--glass-reflex-light:0.3;
	--c-qt:var(--wht23);
	--bq-sh2:inset -3px -3px 8px var(--blk01), inset 3px 3px 12px var(--wht20), inset 0 0 12px var(--wht16), 0 0 18px var(--blk09), 2px 0 3px var(--wht67);
	--saturation:150%;
	background:var(--c-bg);
}
body:has(input[value="dim"]:checked) {
	--blft:var(--wht57);
	--m:#E72B93;
	--m4:color-mix(in srgb, var(--m) 99%, transparent 40%);
	--m5:color-mix(in srgb, var(--m) 99%, transparent 50%);
	--m6:color-mix(in srgb, var(--m) 99%, transparent 60%);
	--m7:color-mix(in srgb, var(--m) 99%, transparent 70%);
	--m8:color-mix(in srgb, var(--m) 99%, transparent 80%);
	--m9:color-mix(in srgb, var(--m) 99%, transparent 90%);
	--m95:color-mix(in srgb, var(--m) 99%, transparent 95%);
	--m98:color-mix(in srgb, var(--m) 99%, transparent 98%);
	--m99:color-mix(in srgb, var(--m) 99%, transparent 99%);
	--bx:color-mix(in srgb, var(--m) 40%, var(--c-bg) 60%);
	--bxbg:color-mix(in srgb, var(--bx) 60%, transparent 50%);
	--bxbd:color-mix(in srgb, var(--m) 80%, transparent 70%);
	--border-top:1px solid var(--bxbd);
	--bxsh:inset -3px -3px 8px var(--wht16), inset 3px 3px 12px var(--wht16), inset 0 0 12px var(--blk10), inset 2px 1px 12px var(--m9), 0 0 18px var(--blk09), 0 -2px 3px var(--m9);
	--c-light:#99DEFF;
	--c-dark:#33002B;
	--c-glass:hsl(335 250% 74% / 1);
	--c-content:#D5DBE2;
	--c-action:#E72B93;
	--c-bg:#152433;
	--c-qt:var(--wht20);
	--bq-sh2:inset -3px -3px 8px var(--blk01), inset 3px 3px 12px var(--wht20), inset 0 0 12px var(--wht16), 0 0 18px var(--blk09), 2px 0 4px var(--wht57);
	--glass-reflex-dark:2;
	--glass-reflex-light:0.7;
	--saturation:200%;
	background:var(--c-bg);
}
blockquote, blockquote:not(:has(>blockquote)) {
	display:block;
	font-size:1.82em;
	/*background:var(--bq-bg);*/
	background-color:var(--bq-bg);
	box-shadow:var(--bq-sh2);
	box-shadow:var(--bq-sh);
	border-radius:10px;
	border-radius:1rem;
	border:var(--bq-bdr);
	/*border-left:0.1em solid var(--blft);
	border-bottom:var(--bq-bdr-btm);*/
	margin-left:0;
	margin-right:0;
	margin-bottom:7%;
	margin-top:3%;
  margin:3% 0 7% 0;
	padding-left:1em;
	padding-top:2rem;
	padding-bottom:2rem;
	padding-right:1%;
  padding: 2rem 1% 2rem 2.2rem;
	z-index:-4;
}
/*blockquote:not(:has(>blockquote))::before
blockquote::before {
	/*top:0;^/
	/*left:0;*/
	/*width:100%;*/
	/*height:100%;*/
	/*background-image:linear-gradient(45deg,var(--wht025) 0%,var(--wht0125) 50%,var(--wht025) 100%);
	background-color:#F0F8;
	opacity:0.7;
	opacity:1;
	border-radius:inherit;
	pointer-events:none;
	z-index:-3;
}*/
.test{
	border:0.1px solid var(--cyn1);
	-webkit-box-shadow:inset 0 0 0 var(--cyn2);
	-moz-box-shadow:1px 0 0 var(--cyn2);
	box-shadow:var(--test-sh);
	-webkit-border-radius:8px;
	-moz-border-radius:8px;
	border-radius:8px;
	padding:0.5em;
}
.box {
	background-color:var(--bxbg);
	/*border-top:1px solid var(--bxbd);
	border-top:var(--border-top);*/
  border:var(--border);
	box-shadow:var(--bxsh);
	transition:background 400ms cubic-bezier(1, 0, 0.4, 1);
	padding:1em 1.4em;
	border-radius:0.8em;
	/*border-top:4px solid color-mix(in srgb, var(--c-action) 50%, transparent);*/
	/*background-color:color-mix(in srgb, var(--c-action) 8%, var(--c-bg));*/
	/*background-color:var(--bxbg);*/
}
/*.box:before {
	background-color:var(--bxbg);
	border:var(--border);
	border-top:1px solid var(--bxbd);
	border-top:var(--border-top);
	box-shadow:var(--bxsh);
	box-shadow:var(--test-sh);
	transition:background 400ms cubic-bezier(1, 0, 0.4, 1);
	z-index:3;
	/*border-top:4px solid color-mix(in srgb, var(--c-action) 50%, transparent);*/
	/*background-color:color-mix(in srgb, var(--c-action) 8%, var(--c-bg));*/
	/*background-color:var(--bxbg);*
}*/
.switcher {
	position:fixed;
	z-index:1;
	top:40px;
	left:50%;
	translate:-50%;
	display:flex;
	align-items:center;
	gap:8px;
	width:244px;
	max-width:244px;
	height:70px;
	box-sizing:border-box;
	padding:8px 12px 10px;
	margin:0 auto;
	border:none;
	border-radius:99em;
	font-size:var(--fz);
	background-color:color-mix(in srgb, var(--c-glass) 12%, transparent);
	backdrop-filter:blur(8px) url(#switcher) saturate(var(--saturation));
	-webkit-backdrop-filter:blur(8px) saturate(var(--saturation));
	box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--c-light) calc(var(--glass-reflex-light) * 10%),transparent), inset 1.8px 3px 0px -2px color-mix(in srgb, var(--c-light) calc(var(--glass-reflex-light) * 90%), transparent), inset -2px -2px 0px -2px color-mix(in srgb, var(--c-light) calc(var(--glass-reflex-light) * 80%), transparent), inset -3px -8px 1px -6px color-mix(in srgb, var(--c-light) calc(var(--glass-reflex-light) * 60%), transparent), inset -0.3px -1px 4px 0px color-mix(in srgb,var(--c-dark) calc(var(--glass-reflex-dark) * 12%),transparent), inset -1.5px 2.5px 0px -2px color-mix(in srgb,var(--c-dark) calc(var(--glass-reflex-dark) * 20%),transparent), inset 0px 3px 4px -2px color-mix(in srgb, var(--c-dark) calc(var(--glass-reflex-dark) * 20%), transparent), inset 2px -6.5px 1px -4px color-mix(in srgb,var(--c-dark) calc(var(--glass-reflex-dark) * 10%),transparent),0px 1px 5px 0px color-mix(in srgb,var(--c-dark) calc(var(--glass-reflex-dark) * 10%),transparent),0px 6px 16px 0px color-mix(in srgb,var(--c-dark) calc(var(--glass-reflex-dark) * 8%),transparent);
	transition:background-color 400ms cubic-bezier(1, 0, 0.4, 1), box-shadow 400ms cubic-bezier(1, 0, 0.4, 1);
}
.switcher__legend {
	position:absolute;
	width:1px;
	height:1px;
	margin:-1px;
	border:0;
	padding:0;
	white-space:nowrap;
	-webkit-clip-path:inset(100%);
	clip-path:inset(100%);
	clip:rect(0 0 0 0);
	overflow:hidden;
}
.switcher__input {
	clip:rect(0 0 0 0);
	-webkit-clip-path:inset(100%);
	clip-path:inset(100%);
	height:1px;
	width:1px;
	overflow:hidden;
	position:absolute;
	white-space:nowrap;
}
.switcher__icon {
	display:block;
	width:100%;
	transition:scale 200ms cubic-bezier(0.5, 0, 0, 1);
}
.switcher__filter {
	position:absolute;
	width:0;
	height:0;
	z-index:-1;
}
.switcher__option {
	--c:var(--c-content);
	display:flex;
	justify-content:center;
	align-items:center;
	padding:0 16px;
	width:68px;
	height:100%;
	box-sizing:border-box;
	border-radius:99em;
	opacity:1;
	transition:all 160ms;
}
.switcher__option:hover {
	--c:var(--c-action);
	cursor:pointer;
}
.switcher__option:hover .switcher__icon { scale:1.2; }
.switcher__option:has(input:checked) {
	--c:var(--c-content);
	cursor:auto;
}
.switcher__option:has(input:checked) .switcher__icon { scale:1; }
.switcher::after {
	content:"";
	position:absolute;
	left:4px;
	top:4px;
	display:block;
	width:84px;
	height:calc(100% - 10px);
	border-radius:99em;
	background-color:color-mix(in srgb, var(--c-glass) 36%, transparent);
	z-index:-1;
	box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--c-light) calc(var(--glass-reflex-light) * 10%),transparent), inset 2px 1px 0px -1px color-mix(in srgb, var(--c-light) calc(var(--glass-reflex-light) * 90%), transparent), inset -1.5px -1px 0px -1px color-mix(in srgb, var(--c-light) calc(var(--glass-reflex-light) * 80%), transparent), inset -2px -6px 1px -5px color-mix(in srgb, var(--c-light) calc(var(--glass-reflex-light) * 60%), transparent), inset -1px 2px 3px -1px color-mix(in srgb,var(--c-dark) calc(var(--glass-reflex-dark) * 20%),transparent), inset 0px -4px 1px -2px color-mix(in srgb,var(--c-dark) calc(var(--glass-reflex-dark) * 10%),transparent),0px 3px 6px 0px color-mix(in srgb,var(--c-dark) calc(var(--glass-reflex-dark) * 8%),transparent);
}
.switcher:has(input[c-option="1"]:checked)::after {
	translate:0 0;
	transform-origin:right;
	transition:background-color 400ms cubic-bezier(1, 0, 0.4, 1),box-shadow 400ms cubic-bezier(1, 0, 0.4, 1), translate 400ms cubic-bezier(1, 0, 0.4, 1);
	-webkit-animation:scaleToggle 440ms ease;
	animation:scaleToggle 440ms ease;
}
.switcher:has(input[c-option="2"]:checked)::after {
	translate:76px 0;
	transition:background-color 400ms cubic-bezier(1, 0, 0.4, 1), box-shadow 400ms cubic-bezier(1, 0, 0.4, 1), translate 400ms cubic-bezier(1, 0, 0.4, 1);
	-webkit-animation:scaleToggle2 440ms ease;
	animation:scaleToggle2 440ms ease;
}
.switcher[c-previous="1"]:has(input[c-option="2"]:checked)::after { transform-origin:left; }
.switcher[c-previous="3"]:has(input[c-option="2"]:checked)::after { transform-origin:right; }
.switcher:has(input[c-option="3"]:checked)::after {
	translate:152px 0;
	transform-origin:left;
	transition:background-color 400ms cubic-bezier(1, 0, 0.4, 1), box-shadow 400ms cubic-bezier(1, 0, 0.4, 1), translate 400ms cubic-bezier(1, 0, 0.4, 1);
	-webkit-animation:scaleToggle3 440ms ease;
	animation:scaleToggle3 440ms ease;
}
@-webkit-keyframes scaleToggle { 0% { scale:1 1; } 50% { scale:1.1 1; } 100% { scale:1 1; } } @keyframes scaleToggle { 0% { scale:1 1; } 50% { scale:1.1 1; } 100% { scale:1 1; } } @-webkit-keyframes scaleToggle2 { 0% { scale:1 1; } 50% { scale:1.2 1; } 100% { scale:1 1; } } @keyframes scaleToggle2 { 0% { scale:1 1; } 50% { scale:1.2 1; } 100% { scale:1 1; } } @-webkit-keyframes scaleToggle3 { 0% { scale:1 1; } 50% { scale:1.1 1; } 100% { scale:1 1; } } @keyframes scaleToggle3 { 0% { scale:1 1; } 50% { scale:1.1 1; } 100% { scale:1 1; } }
/* //////////////////////////////////////////
/  Article Styles //////////////////////// */
.article {
	display:flex;
	flex-direction:column;
	align-items:center;
	padding:5em 2em;
}
h1, h2, h3, h4, h5, h6, p, blockquote {
	width:100%;
	max-width:600px;
	box-sizing:border-box;
}
h1 {
	font-size:3em;
	margin:0.9em 0 0.6em;
}
h2 {
	font-size:2em;
	margin:0.7em 0 0.6em;
}
p {
	line-height:160%;
	margin:0 0 1em;
}
figure {
	margin:1em 0 2em;
	display:flex;
	flex-direction:column;
	align-items:center;
}
figcaption {
	max-width:600px;
	margin-top:1em;
	font-size:0.8em;
	color:color-mix(in srgb, var(--c-content) 60%, var(--c-bg));
}
a {
	color:var(--c-action);
	text-decoration-thickness:0.05em;
	text-underline-position:under;
	-webkit-text-decoration-color:color-mix(in srgb, currentColor, transparent 70%);
	text-decoration-color:color-mix(in srgb, currentColor, transparent 70%);
	transition:color 160ms, -webkit-text-decoration-color 160ms;
	transition:color 160ms, text-decoration-color 160ms;
	transition:color 160ms, text-decoration-color 160ms, -webkit-text-decoration-color 160ms;
}
a:hover {
	color:color-mix(in srgb, var(--c-action), var(--c-content) 40%);
	-webkit-text-decoration-color:color-mix(in srgb, currentColor, transparent 30%);
	text-decoration-color:color-mix(in srgb, currentColor, transparent 30%);
}
img {
	display:block;
	border-radius:0.8em;
	width:100%;
	max-width:700px;
	aspect-ratio:5 / 3;
	-o-object-fit:cover;
	object-fit:cover;
}
```


_______



```lang-html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Apple Liquid glass switcher</title>
    <meta name="viewport" content="width=device-width, initial-scale=1"><link rel="stylesheet" href="https://public.codepenassets.com/css/normalize-5.0.0.min.css">
<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.0.2/css/bootstrap.min.css'>
<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css'>
<style>
:root {
	--whtf:rgba(255, 255, 255, 1);
	--wht90:rgba(255, 255, 255, 0.90);
	--wht80:rgba(255, 255, 255, 0.80);
	--wht70:rgba(255, 255, 255, 0.70);
	--wht67:rgba(255, 255, 255, 0.67);
	--wht57:rgba(255, 255, 255, 0.57);
	--wht60:rgba(255, 255, 255, 0.60);
	--wht50:rgba(255, 255, 255, 0.50);
	--wht40:rgba(255, 255, 255, 0.40);
	--wht32:rgba(255, 255, 255, 0.32);
	--wht30:rgba(255, 255, 255, 0.30);
	--wht25:rgba(255, 255, 255, 0.25);
	--wht23:rgba(255, 255, 255, 0.23);
	--wht20:rgba(255, 255, 255, 0.20);
	--wht17:rgba(255, 255, 255, 0.17);
	--wht16:rgba(255, 255, 255, 0.16);
	--wht152:rgba(255, 255, 255, 0.152);
	--wht15:rgba(255, 255, 255, 0.15);
	--wht10:rgba(255, 255, 255, 0.10);
	--wht08:rgba(255, 255, 255, 0.08);
	--wht05:rgba(255, 255, 255, 0.05);
	--wht025:rgba(255, 255, 255, 0.025);
	--wht0125:rgba(255, 255, 255, 0.0125);
	--blk10:rgba(0, 0, 0, 0.10);
	--blk09:rgba(0, 0, 0, 0.09);
	--blk01:rgba(0, 0, 0, 0.01);
	--c01:#EE7752;
	--c02:#E73C7E;
	--c03:#23A6D5;
	--c04:#23D5AB;
	--c06:#00E9FF;
	--c07:#B385FF;
	--c08:#FDDA9A;
	--c09:#FF66A2;
}
@-webkit-keyframes gradient { 0% {background-position:0% 50%;} 50% {background-position:100% 50%;} 100% {background-position:0%  50%;} }
body {
	--c-action:#196AFF;
	--c-bg:#DAD7D7;
	--c-content:#222211;
	--c-dark:#11111F;
	--c-glass:#BBBBBC;
	--c-light:#EAEAEE;
	--cc8b:#1C1C1C;
	--cc7b:#383838;
	--cc6b:#535353;
	--cc5b:#6F6F6F;
	--cc4b:#000000;
	--cc3b:#8B8B8B;
	--cc2b:#A7A7A7;
	--cc1b:#C2C2C2;
	--cc10:#ABABAB;
	--cc09:#787878;
	--cc08:#454545;
	--cc07:#232323;
	--cc06:#1B1B1B;
	--cc05:#232323;
	--cc04:#454545;
	--cc03:#787878;
	--cc02:#232323;
	--cc01:#DEDEDE;
  --blue50:#0000FF80;
	--cyn1:color-mix(in oklab, #00FF00 49%, #0000FF 51%);
	--cyn2:color-mix(in srgb, #00DDEE 30%, var(--cyn1) 70%);
	--cyn3:color-mix(in srgb, #00FF00 48%, #0000FF 50%);
	--blft:var(--wht40);
	--border3:1px solid var(--wht40);
	--border2:0.1em solid var(--cyn1);
	--border:.1px solid var(--m);
	--border-top2:20.751px solid var(--bxbd);
	--border-top:0.61px solid var(--wht40);
	--bq-bdr:1px solid var(--wht70);
	--bq-bdr-btm:1px solid var(--wht05);
	--bq-bg-c:var(--wht08);
	--bq-bg:var(--wht10);
	--bq-sh:
     inset 0 2px 8px var(--wht152),
     inset 0 0 18px var(--wht70),
     inset -6px 3px 12px var(--wht17),
     inset 6px 0 12px var(--wht10),
     0 4px 16px var(--blk10);
	--bq-sh2:inset -4px -2px 18px var(--wht20), inset -6px 3px 12px var(--wht17), inset 6px 0 12px var(--wht10), inset -3px -3px 8px var(--blk01), -0.1px 0 4px var(--wht67), 0 4px 16px var(--blk10), inset 0 2px 8px var(--wht152), 0 0 18px var(--blk09);
	--bx:color-mix(in srgb, var(--c-action) 60%, var(--c-bg) 40%);
	--bxbg:color-mix(in srgb, var(--bx) 60%, transparent 40%);
	--bxbd:color-mix(in srgb, var(--m) 80%, transparent 20%);
	--bx-bdr:1px solid var(--m);
	--m90p:color-mix(in srgb, var(--m) 90%, transparent 10%);
	--m80p:color-mix(in srgb, var(--m) 80%, transparent 20%);
	--m70p:color-mix(in srgb, var(--bx) 70%, transparent 30%);
	--m60p:color-mix(in srgb, var(--bx) 60%, transparent 40%);
	--bxsh:
    0 0 1px var(--m),
    inset 0 0 0 var(--cyn1),
    inset 1px 0 28px var(--m70p),
     inset 1px 0 22px var(--wht70),
    inset 0 -3px 3px var(--m95), 
    inset 0 3px 9px var(--m99), 
    inset -2px -2px 9px var(--m98), 
    inset -3px -3px 8px var(--wht20), 
    inset 3px 3px 12px var(--wht30),
    inset 0 0 12px var(--blk10), 
    inset -2px 3px 9px var(--wht60), 
    inset 0 0 8px var(--blk09),
    inset 3px 3px 14px var(--wht20), 
      inset 2px 0 28px var(--blue50),
    inset 3px 3px 12px var(--m);
	--c-qt:var(--wht32);
	--cyn50:color-mix(in srgb, var(--cyn1) 99%, transparent 50%);
	--cy-lft-top-blr:-3px -3px 4px var(--dir-c);
	--cy-lft-btm-blr:-3px 3px 4px var(--dir-c);
	--cy-lft-top:-5px -5px 0 var(--dir-c);
	--cy-lft-btm:-5px 5px 0 var(--dir-c);
	--cy-rt-top-blr:3px -3px 4px var(--dir-c);
	--cy-rt-btm-blr:3px 3px 4px var(--dir-c);
	--cy-rt-top:5px -5px 0 var(--dir-c);
	--cy-rt-btm:5px 5px 0 var(--dir-c);
	--dir-c:var(--cyn50);
	--glass-reflex-dark:1;
	--glass-reflex-light:1;
	--m:#196AFF;
	--m4:color-mix(in srgb, var(--m) 99%, transparent 40%);
	--m5:color-mix(in srgb, var(--m) 99%, transparent 50%);
	--m6:color-mix(in srgb, var(--m) 99%, transparent 60%);
	--m7:color-mix(in srgb, var(--m) 99%, transparent 70%);
	--m8:color-mix(in srgb, var(--m) 99%, transparent 80%);
	--m9:color-mix(in srgb, var(--m) 99%, transparent 90%);
	--m95:color-mix(in srgb, var(--m) 99%, transparent 95%);
	--m98:color-mix(in srgb, var(--m) 99%, transparent 98%);
	--m99:color-mix(in srgb, var(--m) 99%, transparent 99%);
	--saturation:150%;
	--test2-sh:var(--cy-lft-top), var(--cy-rt-top), var(--cy-rt-btm), var(--cy-lft-btm);
	--test3-sh:var(--cy-lft-top), var(--cy-rt-top), var(--cy-rt-btm), var(--cy-lft-btm), inset var(--cy-lft-top-blr), inset var(--cy-rt-top-blr), inset var(--cy-rt-btm-blr), inset var(--cy-lft-btm-blr);
	--test-sh:var(--cy-lft-top-blr), var(--cy-rt-top-blr), var(--cy-rt-btm-blr), var(--cy-lft-btm-blr), inset var(--cy-lft-top-blr), inset var(--cy-rt-top-blr), inset var(--cy-rt-btm-blr), inset var(--cy-lft-btm-blr);
	background:var(--c-bg);
	background-image:linear-gradient(90deg,var(--cc01),var(--cc02));
	background-size:200% 200%;
	-webkit-animation:gradient 15s ease infinite;
	animation:gradient 15s ease infinite;
	font-size:20px;
	font-family:"DM Sans", sans-serif;
	font-optical-sizing:auto;
	color:var(--c-content);
	transition:background 400ms cubic-bezier(1, 0, 0.4, 1),color 400ms cubic-bezier(1, 0, 0.4, 1);
}
body:has(input[value="dark"]:checked) {
	--m:#03D5FF;
	--m4:color-mix(in srgb, var(--m) 99%, transparent 40%);
	--m5:color-mix(in srgb, var(--m) 99%, transparent 50%);
	--m6:color-mix(in srgb, var(--m) 99%, transparent 60%);
	--m7:color-mix(in srgb, var(--m) 99%, transparent 70%);
	--m8:color-mix(in srgb, var(--m) 99%, transparent 80%);
	--m9:color-mix(in srgb, var(--m) 99%, transparent 90%);
	--m95:color-mix(in srgb, var(--m) 99%, transparent 95%);
	--m98:color-mix(in srgb, var(--m) 99%, transparent 98%);
	--m99:color-mix(in srgb, var(--m) 99%, transparent 99%);
	--bx:color-mix(in srgb, var(--c-action) 40%, var(--c-bg) 60%);
	--bxbg:color-mix(in srgb, var(--bx) 60%, transparent 50%);
	--bxbd:color-mix(in srgb, var(--m) 80%, transparent 30%);
	--border-top:1px solid var(--bxbd);
	--bxsh:inset -3px -3px 8px var(--wht16), inset 3px 3px 12px var(--wht16), inset 0 0 12px var(--blk10), inset 2px 1px 12px var(--m9), 0 0 18px var(--blk09), 0 -2px 3px var(--m9);
	--c-glass:#BBBBBC;
	--c-light:#EEEEEE;
	--c-dark:#111111;
	--c-content:#E1E1E1;
	--c-action:#03D5FF;
	--c-bg:#19191F;
	--blft:var(--wht57);
	--glass-reflex-dark:2;
	--glass-reflex-light:0.3;
	--c-qt:var(--wht23);
	--bq-sh2:inset -3px -3px 8px var(--blk01), inset 3px 3px 12px var(--wht20), inset 0 0 12px var(--wht16), 0 0 18px var(--blk09), 2px 0 3px var(--wht67);
	--saturation:150%;
	background:var(--c-bg);
}
body:has(input[value="dim"]:checked) {
	--blft:var(--wht57);
	--m:#E72B93;
	--m4:color-mix(in srgb, var(--m) 99%, transparent 40%);
	--m5:color-mix(in srgb, var(--m) 99%, transparent 50%);
	--m6:color-mix(in srgb, var(--m) 99%, transparent 60%);
	--m7:color-mix(in srgb, var(--m) 99%, transparent 70%);
	--m8:color-mix(in srgb, var(--m) 99%, transparent 80%);
	--m9:color-mix(in srgb, var(--m) 99%, transparent 90%);
	--m95:color-mix(in srgb, var(--m) 99%, transparent 95%);
	--m98:color-mix(in srgb, var(--m) 99%, transparent 98%);
	--m99:color-mix(in srgb, var(--m) 99%, transparent 99%);
	--bx:color-mix(in srgb, var(--m) 40%, var(--c-bg) 60%);
	--bxbg:color-mix(in srgb, var(--bx) 60%, transparent 50%);
	--bxbd:color-mix(in srgb, var(--m) 80%, transparent 70%);
	--border-top:1px solid var(--bxbd);
	--bxsh:inset -3px -3px 8px var(--wht16), inset 3px 3px 12px var(--wht16), inset 0 0 12px var(--blk10), inset 2px 1px 12px var(--m9), 0 0 18px var(--blk09), 0 -2px 3px var(--m9);
	--c-light:#99DEFF;
	--c-dark:#33002B;
	--c-glass:hsl(335 250% 74% / 1);
	--c-content:#D5DBE2;
	--c-action:#E72B93;
	--c-bg:#152433;
	--c-qt:var(--wht20);
	--bq-sh2:inset -3px -3px 8px var(--blk01), inset 3px 3px 12px var(--wht20), inset 0 0 12px var(--wht16), 0 0 18px var(--blk09), 2px 0 4px var(--wht57);
	--glass-reflex-dark:2;
	--glass-reflex-light:0.7;
	--saturation:200%;
	background:var(--c-bg);
}
blockquote, blockquote:not(:has(>blockquote)) {
	display:block;
	font-size:1.82em;
	background-color:var(--bq-bg);
	box-shadow:var(--bq-sh2);
	box-shadow:var(--bq-sh);
	border-radius:10px;
	border-radius:1rem;
	border:var(--bq-bdr);
	border-bottom:var(--bq-bdr-btm);*/
	margin-left:0;
	margin-right:0;
	margin-bottom:7%;
	margin-top:3%;
  margin:3% 0 7% 0;
	padding-left:1em;
	padding-top:2rem;
	padding-bottom:2rem;
	padding-right:1%;
  padding: 2rem 1% 2rem 2.2rem;
	z-index:-4;
}
.test{
	border:0.1px solid var(--cyn1);
	-webkit-box-shadow:inset 0 0 0 var(--cyn2);
	-moz-box-shadow:1px 0 0 var(--cyn2);
	box-shadow:var(--test-sh);
	-webkit-border-radius:8px;
	-moz-border-radius:8px;
	border-radius:8px;
	padding:0.5em;
}
.box {
	background-color:var(--bxbg);
  border:var(--border);
	box-shadow:var(--bxsh);
	transition:background 400ms cubic-bezier(1, 0, 0.4, 1);
	padding:1em 1.4em;
	border-radius:0.8em;
}
.switcher {
	position:fixed;
	z-index:1;
	top:40px;
	left:50%;
	translate:-50%;
	display:flex;
	align-items:center;
	gap:8px;
	width:244px;
	max-width:244px;
	height:70px;
	box-sizing:border-box;
	padding:8px 12px 10px;
	margin:0 auto;
	border:none;
	border-radius:99em;
	font-size:var(--fz);
	background-color:color-mix(in srgb, var(--c-glass) 12%, transparent);
	backdrop-filter:blur(8px) url(#switcher) saturate(var(--saturation));
	-webkit-backdrop-filter:blur(8px) saturate(var(--saturation));
	box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--c-light) calc(var(--glass-reflex-light) * 10%),transparent), inset 1.8px 3px 0px -2px color-mix(in srgb, var(--c-light) calc(var(--glass-reflex-light) * 90%), transparent), inset -2px -2px 0px -2px color-mix(in srgb, var(--c-light) calc(var(--glass-reflex-light) * 80%), transparent), inset -3px -8px 1px -6px color-mix(in srgb, var(--c-light) calc(var(--glass-reflex-light) * 60%), transparent), inset -0.3px -1px 4px 0px color-mix(in srgb,var(--c-dark) calc(var(--glass-reflex-dark) * 12%),transparent), inset -1.5px 2.5px 0px -2px color-mix(in srgb,var(--c-dark) calc(var(--glass-reflex-dark) * 20%),transparent), inset 0px 3px 4px -2px color-mix(in srgb, var(--c-dark) calc(var(--glass-reflex-dark) * 20%), transparent), inset 2px -6.5px 1px -4px color-mix(in srgb,var(--c-dark) calc(var(--glass-reflex-dark) * 10%),transparent),0px 1px 5px 0px color-mix(in srgb,var(--c-dark) calc(var(--glass-reflex-dark) * 10%),transparent),0px 6px 16px 0px color-mix(in srgb,var(--c-dark) calc(var(--glass-reflex-dark) * 8%),transparent);
	transition:background-color 400ms cubic-bezier(1, 0, 0.4, 1), box-shadow 400ms cubic-bezier(1, 0, 0.4, 1);
}
.switcher__legend {
	position:absolute;
	width:1px;
	height:1px;
	margin:-1px;
	border:0;
	padding:0;
	white-space:nowrap;
	-webkit-clip-path:inset(100%);
	clip-path:inset(100%);
	clip:rect(0 0 0 0);
	overflow:hidden;
}
.switcher__input {
	clip:rect(0 0 0 0);
	-webkit-clip-path:inset(100%);
	clip-path:inset(100%);
	height:1px;
	width:1px;
	overflow:hidden;
	position:absolute;
	white-space:nowrap;
}
.switcher__icon {
	display:block;
	width:100%;
	transition:scale 200ms cubic-bezier(0.5, 0, 0, 1);
}
.switcher__filter {
	position:absolute;
	width:0;
	height:0;
	z-index:-1;
}
.switcher__option {
	--c:var(--c-content);
	display:flex;
	justify-content:center;
	align-items:center;
	padding:0 16px;
	width:68px;
	height:100%;
	box-sizing:border-box;
	border-radius:99em;
	opacity:1;
	transition:all 160ms;
}
.switcher__option:hover {
	--c:var(--c-action);
	cursor:pointer;
}
.switcher__option:hover .switcher__icon { scale:1.2; }
.switcher__option:has(input:checked) {
	--c:var(--c-content);
	cursor:auto;
}
.switcher__option:has(input:checked) .switcher__icon { scale:1; }
.switcher::after {
	content:"";
	position:absolute;
	left:4px;
	top:4px;
	display:block;
	width:84px;
	height:calc(100% - 10px);
	border-radius:99em;
	background-color:color-mix(in srgb, var(--c-glass) 36%, transparent);
	z-index:-1;
	box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--c-light) calc(var(--glass-reflex-light) * 10%),transparent), inset 2px 1px 0px -1px color-mix(in srgb, var(--c-light) calc(var(--glass-reflex-light) * 90%), transparent), inset -1.5px -1px 0px -1px color-mix(in srgb, var(--c-light) calc(var(--glass-reflex-light) * 80%), transparent), inset -2px -6px 1px -5px color-mix(in srgb, var(--c-light) calc(var(--glass-reflex-light) * 60%), transparent), inset -1px 2px 3px -1px color-mix(in srgb,var(--c-dark) calc(var(--glass-reflex-dark) * 20%),transparent), inset 0px -4px 1px -2px color-mix(in srgb,var(--c-dark) calc(var(--glass-reflex-dark) * 10%),transparent),0px 3px 6px 0px color-mix(in srgb,var(--c-dark) calc(var(--glass-reflex-dark) * 8%),transparent);
}
.switcher:has(input[c-option="1"]:checked)::after {
	translate:0 0;
	transform-origin:right;
	transition:background-color 400ms cubic-bezier(1, 0, 0.4, 1),box-shadow 400ms cubic-bezier(1, 0, 0.4, 1), translate 400ms cubic-bezier(1, 0, 0.4, 1);
	-webkit-animation:scaleToggle 440ms ease;
	animation:scaleToggle 440ms ease;
}
.switcher:has(input[c-option="2"]:checked)::after {
	translate:76px 0;
	transition:background-color 400ms cubic-bezier(1, 0, 0.4, 1), box-shadow 400ms cubic-bezier(1, 0, 0.4, 1), translate 400ms cubic-bezier(1, 0, 0.4, 1);
	-webkit-animation:scaleToggle2 440ms ease;
	animation:scaleToggle2 440ms ease;
}
.switcher[c-previous="1"]:has(input[c-option="2"]:checked)::after { transform-origin:left; }
.switcher[c-previous="3"]:has(input[c-option="2"]:checked)::after { transform-origin:right; }
.switcher:has(input[c-option="3"]:checked)::after {
	translate:152px 0;
	transform-origin:left;
	transition:background-color 400ms cubic-bezier(1, 0, 0.4, 1), box-shadow 400ms cubic-bezier(1, 0, 0.4, 1), translate 400ms cubic-bezier(1, 0, 0.4, 1);
	-webkit-animation:scaleToggle3 440ms ease;
	animation:scaleToggle3 440ms ease;
}
@-webkit-keyframes scaleToggle { 0% { scale:1 1; } 50% { scale:1.1 1; } 100% { scale:1 1; } } @keyframes scaleToggle { 0% { scale:1 1; } 50% { scale:1.1 1; } 100% { scale:1 1; } } @-webkit-keyframes scaleToggle2 { 0% { scale:1 1; } 50% { scale:1.2 1; } 100% { scale:1 1; } } @keyframes scaleToggle2 { 0% { scale:1 1; } 50% { scale:1.2 1; } 100% { scale:1 1; } } @-webkit-keyframes scaleToggle3 { 0% { scale:1 1; } 50% { scale:1.1 1; } 100% { scale:1 1; } } @keyframes scaleToggle3 { 0% { scale:1 1; } 50% { scale:1.1 1; } 100% { scale:1 1; } }
/* //////////////////////////////////////////
/  Article Styles //////////////////////// */
.article {
	display:flex;
	flex-direction:column;
	align-items:center;
	padding:5em 2em;
}
h1, h2, h3, h4, h5, h6, p, blockquote {
	width:100%;
	max-width:600px;
	box-sizing:border-box;
}
h1 {
	font-size:3em;
	margin:0.9em 0 0.6em;
}
h2 {
	font-size:2em;
	margin:0.7em 0 0.6em;
}
p {
	line-height:160%;
	margin:0 0 1em;
}
figure {
	margin:1em 0 2em;
	display:flex;
	flex-direction:column;
	align-items:center;
}
figcaption {
	max-width:600px;
	margin-top:1em;
	font-size:0.8em;
	color:color-mix(in srgb, var(--c-content) 60%, var(--c-bg));
}
a {
	color:var(--c-action);
	text-decoration-thickness:0.05em;
	text-underline-position:under;
	-webkit-text-decoration-color:color-mix(in srgb, currentColor, transparent 70%);
	text-decoration-color:color-mix(in srgb, currentColor, transparent 70%);
	transition:color 160ms, -webkit-text-decoration-color 160ms;
	transition:color 160ms, text-decoration-color 160ms;
	transition:color 160ms, text-decoration-color 160ms, -webkit-text-decoration-color 160ms;
}
a:hover {
	color:color-mix(in srgb, var(--c-action), var(--c-content) 40%);
	-webkit-text-decoration-color:color-mix(in srgb, currentColor, transparent 30%);
	text-decoration-color:color-mix(in srgb, currentColor, transparent 30%);
}
img {
	display:block;
	border-radius:0.8em;
	width:100%;
	max-width:700px;
	aspect-ratio:5 / 3;
	-o-object-fit:cover;
	object-fit:cover;
}
</style>
  </head>
  <body>
  <fieldset class="switcher">
  <legend class="switcher__legend">Choose theme</legend>
  <label class="switcher__option">
    <input class="switcher__input" type="radio" name="theme" value="light" c-option="1" checked />
    <svg class="switcher__icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 36 36">
      <path fill="var(--c)" fill-rule="evenodd" d="M18 12a6 6 0 1 1 0 12 6 6 0 0 1 0-12Zm0 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z" clip-rule="evenodd" />
      <path fill="var(--c)" d="M17 6.038a1 1 0 1 1 2 0v3a1 1 0 0 1-2 0v-3ZM24.244 7.742a1 1 0 1 1 1.618 1.176L24.1 11.345a1 1 0 1 1-1.618-1.176l1.763-2.427ZM29.104 13.379a1 1 0 0 1 .618 1.902l-2.854.927a1 1 0 1 1-.618-1.902l2.854-.927ZM29.722 20.795a1 1 0 0 1-.619 1.902l-2.853-.927a1 1 0 1 1 .618-1.902l2.854.927ZM25.862 27.159a1 1 0 0 1-1.618 1.175l-1.763-2.427a1 1 0 1 1 1.618-1.175l1.763 2.427ZM19 30.038a1 1 0 0 1-2 0v-3a1 1 0 1 1 2 0v3ZM11.755 28.334a1 1 0 0 1-1.618-1.175l1.764-2.427a1 1 0 1 1 1.618 1.175l-1.764 2.427ZM6.896 22.697a1 1 0 1 1-.618-1.902l2.853-.927a1 1 0 1 1 .618 1.902l-2.853.927ZM6.278 15.28a1 1 0 1 1 .618-1.901l2.853.927a1 1 0 1 1-.618 1.902l-2.853-.927ZM10.137 8.918a1 1 0 0 1 1.618-1.176l1.764 2.427a1 1 0 0 1-1.618 1.176l-1.764-2.427Z" />
    </svg>
  </label>
  <label class="switcher__option">
    <input class="switcher__input" type="radio" name="theme" value="dark" c-option="2" />
    <svg class="switcher__icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 36 36">
      <path fill="var(--c)" d="M12.5 8.473a10.968 10.968 0 0 1 8.785-.97 7.435 7.435 0 0 0-3.737 4.672l-.09.373A7.454 7.454 0 0 0 28.732 20.4a10.97 10.97 0 0 1-5.232 7.125l-.497.27c-5.014 2.566-11.175.916-14.234-3.813l-.295-.483C5.53 18.403 7.13 11.93 12.017 8.77l.483-.297Zm4.234.616a8.946 8.946 0 0 0-2.805.883l-.429.234A9 9 0 0 0 10.206 22.5l.241.395A9 9 0 0 0 22.5 25.794l.416-.255a8.94 8.94 0 0 0 2.167-1.99 9.433 9.433 0 0 1-2.782-.313c-5.043-1.352-8.036-6.535-6.686-11.578l.147-.491c.242-.745.573-1.44.972-2.078Z" />
    </svg>
  </label>
  <label class="switcher__option">
    <input class="switcher__input" type="radio" name="theme" value="dim" c-option="3" />
    <svg class="switcher__icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 36 36">
      <path fill="var(--c)" d="M5 21a1 1 0 0 1 1-1h24a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1ZM12 25a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H13a1 1 0 0 1-1-1ZM15 29a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1ZM18 13a6 6 0 0 1 5.915 7h-2.041A4.005 4.005 0 0 0 18 15a4 4 0 0 0-3.874 5h-2.041A6 6 0 0 1 18 13ZM17 7.038a1 1 0 1 1 2 0v3a1 1 0 0 1-2 0v-3ZM24.244 8.742a1 1 0 1 1 1.618 1.176L24.1 12.345a1 1 0 1 1-1.618-1.176l1.763-2.427ZM29.104 14.379a1 1 0 0 1 .618 1.902l-2.854.927a1 1 0 1 1-.618-1.902l2.854-.927ZM6.278 16.28a1 1 0 1 1 .618-1.901l2.853.927a1 1 0 1 1-.618 1.902l-2.853-.927ZM10.137 9.918a1 1 0 0 1 1.618-1.176l1.764 2.427a1 1 0 0 1-1.618 1.176l-1.764-2.427Z" />
    </svg>
  </label>
  <!--   <div class="switcher__toggle"></div> -->
  <div class="switcher__filter">
    <svg>
      <filter id="switcher" primitiveUnits="objectBoundingBox">
        <feImage result="map" width="100%" height="100%" x="0" y="0" href="

				" />

        <feGaussianBlur in="SourceGraphic" stdDeviation="0.04" result="blur" />
        <feDisplacementMap id="disp" in="blur" in2="map" scale="0.5" xChannelSelector="R" yChannelSelector="G">
        </feDisplacementMap>
      </filter>

      <filter id="toggler" primitiveUnits="objectBoundingBox">
        <feImage result="map" width="100%" height="100%" x="0" y="0" href="

				" />

        <feGaussianBlur in="SourceGraphic" stdDeviation="0.01" result="blur" />
        <feDisplacementMap id="disp" in="blur" in2="map" scale="0.5" xChannelSelector="R" yChannelSelector="G">
        </feDisplacementMap>
      </filter>
    </svg>
  </div>
</fieldset>
<article class="article">
  <h1>Liquid glass</h1>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui maxime optio quam debitis autem, veritatis cumque corrupti sed. Ipsa dolor quod alias dicta dolores. Ducimus pariatur nostrum quo, impedit <a href="">facilis voluptatibus</a>! Non doloremque, facere neque dolorem animi earum odio placeat quae voluptatem nisi nihil deleniti voluptatibus.
  </p>
  <blockquote> Et aliquam libero deserunt maxime! Perspiciatis neque deserunt sequi deleniti!
  </blockquote>
  <p>
    Sit amet consectetur adipisicing elit. Quam error qui nam quis! Dolorum, dolore saepe ipsam quae aliquam tenetur dolores dolor repellendus facere a quasi soluta voluptate provident earum cum. Nostrum consequuntur corporis quibusdam tempora amet.</p>
  <figure>
    <img src="https://images.unsplash.com/photo-1706720094773-d91e070e4b90?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Photo by Neeqolah Creative Works on Unsplash">
    <figcaption>Photo by Neeqolah Creative Works on <a href="https://unsplash.com/photos/a-close-up-of-a-green-object-on-a-yellow-background-A2kyFEwh3zo">Unsplash</a></figcaption>
  </figure>
  <p>
    Sit amet consectetur adipisicing elit. Quam error qui nam quis! Dolorum, dolore saepe ipsam quae aliquam tenetur dolores dolor repellendus facere a quasi soluta voluptate provident earum cum. Nostrum consequuntur corporis quibusdam tempora amet.</p>
  <blockquote> Et aliquam libero deserunt maxime! Perspiciatis neque deserunt sequi deleniti!
  </blockquote>
  <p>
    Nisi quos earum ex nulla neque <a href="">tempora explicabo reiciendis</a> vitae sapiente accusamus tempore consequatur nemo, placeat magni quasi corrupti nobis alias, rerum ipsam fuga quisquam tenetur repellendus! Sit laborum aut odit pariatur quos cupiditate iure maiores.
  </p>
  <p>
    Animi enim odio ea porro molestiae laudantium ipsam nulla quia distinctio quod incidunt pariatur accusamus possimus laborum veritatis maxime, asperiores quasi!</p>
  <h2>
    Doloremque nisi eius quis
  </h2>
  <p>Magnam quo voluptate vitae voluptatem expedita vel illum ut. Tempore, sed? Sunt distinctio minus dolore, consequuntur eos qui eveniet error rerum tempora, autem et quaerat, ea repellendus unde iure.
  </p>
  <figure>
    <img src="https://images.unsplash.com/photo-1734606901283-489b25f7aa9b?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Photo by Neeqolah Creative Works on Unsplash">
    <figcaption>Photo by Irene Demetri on <a href="https://unsplash.com/photos/a-close-up-of-a-green-object-on-a-yellow-background-A2kyFEwh3zo">Unsplash</a></figcaption>
  </figure>
  <p>
    Quod iste recusandae sed labore corporis ea provident debitis hic maxime placeat alias rem cumque animi explicabo laboriosam, dicta molestias? Corporis quibusdam, aliquam asperiores quo officia reiciendis nemo aspernatur similique voluptatibus in tempora? Laborum temporibus ipsa at exercitationem ullam labore tempore neque.
  </p>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, aut commodi aliquid, blanditiis doloribus suscipit perferendis hic assumenda dolorum magnam enim. Error minima magnam modi aliquam quia at obcaecati sunt quas velit numquam, voluptatem inventore blanditiis necessitatibus.</p>
  <blockquote>
    Consequatur itaque sit amet consectetur adipisicing elit.
  </blockquote>
  <p>
    Ab eveniet recusandae incidunt id cumque porro? Dignissimos nostrum iure possimus mollitia sed provident esse optio odio consequatur! Recusandae dicta ab atque? Eveniet molestias autem accusantium vero.
  </p>
  <p>
    Ipsum explicabo quod laborum non provident, consectetur sint unde hic dolor quisquam ullam nulla veniam! Sapiente impedit sint expedita officiis fugit est quia. Neque, ea aspernatur?
  </p><br>
  <p class="box">
    Perspiciatis sapiente eum velit inventore illum accusamus eos at esse mollitia debitis quae rem odit, ipsam nam. Voluptas beatae, velit voluptatum dolor obcaecati a nobis consequuntur quis id eaque! Sapiente nostrum rerum esse quo laborum excepturi explicabo, perspiciatis dicta corporis atque?
  </p>
  <h2>Quod voluptas aliquid id saepe</h2>
  <p>
    Et minima quas amet! Debitis commodi consectetur laborum fugit voluptatum qui distinctio, natus odit obcaecati. Voluptate suscipit consectetur, aspernatur ratione impedit minus facilis voluptatum tempora nesciunt pariatur ipsa provident qui distinctio ad quasi magnam exercitationem itaque.
  </p>
  <p>
    Dolor sit, amet consectetur adipisicing elit. Earum, amet ea quaerat, repellendus ipsum sunt blanditiis ab tempora doloribus quas voluptas magni ut perferendis unde dolor tenetur repudiandae.
  </p>
  <p>
    Eos dolore dicta delectus dolorum porro fuga modi, perferendis natus ratione repellendus sit harum sint!
  </p>
  <p>
    Maxime in officiis fugiat corporis cum doloremque atque, at architecto dicta quod inventore corrupti facilis repellendus pariatur possimus error! At aperiam aliquam fugiat eveniet sapiente soluta hic ab ipsam, corrupti temporibus tempore?
  </p>
  Made with love by <a href="//codepen.io/DedaloD">Den Dionigi | UX Designer</a>
</article>
    <script  src="./script.js"></script>

  </body>
  
</html>
```


_______




_______




_______




_______




_______



_______




_______




_______




_______




_______




_______






_______







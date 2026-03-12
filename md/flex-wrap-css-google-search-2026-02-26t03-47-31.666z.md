

Filters and Topics
AI Mode
All
Images
Videos
News
Maps
Shopping
Books
Flights
Finance
flex-wrap css
22 minutes ago

undefined
undefined
undefined
7 sites
The flex-wrap CSS property controls whether flex items are forced onto a single line or can wrap onto multiple lines within their container. It is applied to the flex container (the parent element with display: flex). 
MDN Web Docs
MDN Web Docs
 +2
Syntax and Values
The flex-wrap property accepts one of the following keyword values: 
MDN Web Docs
MDN Web Docs
 +2
nowrap: This is the default value. Flex items will all stay on a single line, potentially overflowing the container if they are too wide.
wrap: Flex items will break onto multiple lines if they are too wide to fit within the container's width (or height if flex-direction is column). New lines are stacked in the normal direction (e.g., top to bottom in a horizontal writing mode).
wrap-reverse: Behaves the same as wrap, but the new lines are stacked in reverse order (e.g., bottom to top). 
MDN Web Docs
MDN Web Docs
 +4
Example Usage
To allow flex items to wrap, you would use:
css
.container {
  display: flex;
  flex-wrap: wrap;
}
Use code with caution.

You can also use the flex-flow MDN Web Docs shorthand property to set both flex-direction and flex-wrap at once. 
MDN Web Docs
MDN Web Docs
css
.container {
  display: flex;
  flex-flow: row wrap; /* Sets direction to row and enables wrapping */
}
Use code with caution.

For more detailed guides and examples, refer to the MDN Web Docs on flex-wrap or the Complete Guide to CSS Flexbox on CSS-Tricks. 


flex-wrap - CSS | MDN - Mozilla

MDN Web Docs
CSS flex-wrap property - W3Schools

W3Schools
Improve Responsiveness with flex-wrap in CSS - DigitalOcean

DigitalOcean

Show all

Ask about
⬇ Export MD
⬇ JSON
⚙️
Export ChatExport
Save As PDF
Single-Select
Use mouse/arrows. Click to convert.
Press Shift to Multi-Select.
Esc cancel, Enter convert.Ask about 
使用方向键选择元素
上：选择父元素
下：选择第一个子元素
左：选择上一个兄弟元素
右：选择下一个兄弟元素
使用滚轮放大缩小
上：选择父元素
下：选择第一个子元素
点击元素选择
按下 Esc 键取消选择
Use arrow keys to select elements:
Up: Select parent element
Down: Select the first child element
Left: Select the previous sibling element
Right: Select the next sibling element
Use scroll wheel to zoom in and out:
Up: Select parent element
Down: Select the first child element
Click to select an element
Press Esc key to cancel selection
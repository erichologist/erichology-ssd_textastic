### 4.11 Interactive elements

#### 4.11.1 The `details` element

[Element/details](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details "The  HTML element creates a disclosure widget in which information is visible only when the widget is toggled into an \"open\" state. A summary or label must be provided using the  element.")

Support in all current engines.

Firefox49+Safari6+Chrome12+Opera?Edge79+Edge (Legacy)?Internet ExplorerNoFirefox Android49+Safari iOS?Chrome Android?WebView Android?Samsung Internet?Opera Android?

[HTMLDetailsElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDetailsElement "The HTMLDetailsElement interface provides special properties (beyond the regular HTMLElement interface it also has available to it by inheritance) for manipulating  elements.")

Support in all current engines.

Firefox49+Safari6+Chrome10+Opera?Edge79+Edge (Legacy)?Internet ExplorerNoFirefox Android?Safari iOS?Chrome Android?WebView Android37+Samsung Internet?Opera Android?

[HTMLDetailsElement/open](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDetailsElement/open "The open property of the HTMLDetailsElement interface is a boolean value reflecting the open HTML attribute, indicating whether the 's contents (not counting the ) is to be shown to the user.")

Support in all current engines.

Firefox49+Safari6+Chrome10+Opera?Edge79+Edge (Legacy)?Internet ExplorerNoFirefox Android?Safari iOS?Chrome Android?WebView Android37+Samsung Internet?Opera Android?

[Categories](dom.html#concept-element-categories):

[Flow content](dom.html#flow-content-2).

[Interactive content](dom.html#interactive-content-2).

[Palpable content](dom.html#palpable-content-2).

[Contexts in which this element can be used](dom.html#concept-element-contexts):

Where [flow content](dom.html#flow-content-2) is expected.

[Content model](dom.html#concept-element-content-model):

One `[summary](#the-summary-element)` element followed by [flow content](dom.html#flow-content-2).

[Tag omission in text/html](dom.html#concept-element-tag-omission):

Neither tag is omissible.

[Content attributes](dom.html#concept-element-attributes):

[Global attributes](dom.html#global-attributes)

`[name](#attr-details-name)` — Name of group of mutually-exclusive `[details](#the-details-element)` elements

`[open](#attr-details-open)` — Whether the details are visible

[Accessibility considerations](dom.html#concept-element-accessibility-considerations):

[For authors](https://w3c.github.io/html-aria/#el-details).

[For implementers](https://w3c.github.io/html-aam/#el-details).

[DOM interface](dom.html#concept-element-dom):

```

[Exposed=Window]
interface HTMLDetailsElement : [HTMLElement](dom.html#htmlelement) {
  [[HTMLConstructor](dom.html#htmlconstructor)] constructor();

  [[CEReactions](custom-elements.html#cereactions), [Reflect](common-dom-interfaces.html#xattr-reflect)] attribute DOMString name;
  [[CEReactions](custom-elements.html#cereactions), [Reflect](common-dom-interfaces.html#xattr-reflect)] attribute boolean open;

};

```

The `[details](#the-details-element)` element [represents](dom.html#represents) a disclosure widget from which the user can obtain additional information or controls.

As with all HTML elements, it is not conforming to use the `[details](#the-details-element)` element when attempting to represent another type of control. For example, tab widgets and menu widgets are not disclosure widgets, so abusing the `[details](#the-details-element)` element to implement these patterns is incorrect.

The `[details](#the-details-element)` element is not appropriate for footnotes. Please see [the section on footnotes](semantics-other.html#footnotes) for details on how to mark up footnotes.

The first `[summary](#the-summary-element)` element child of the element, if any, [represents](dom.html#represents) the summary or legend of the details. If there is no child `[summary](#the-summary-element)` element, the user agent should provide its own legend (e.g. "Details").

The rest of the element's contents [represents](dom.html#represents) the additional information or controls.

The `name` content attribute gives the name of the group of related `[details](#the-details-element)` elements that the element is a member of. Opening one member of this group causes other members of the group to close. If the attribute is specified, its value must not be the empty string.

Before using this feature, authors should consider whether this grouping of related `[details](#the-details-element)` elements into an exclusive accordion is helpful or harmful to users. While using an exclusive accordion can reduce the maximum amount of space that a set of content can occupy, it can also frustrate users who have to open many items to find what they want or users who want to look at the contents of multiple items at the same time.

A document must not contain more than one `[details](#the-details-element)` element in the same [details name group](#details-name-group) that has the `[open](#attr-details-open)` attribute present. Authors must not use script to add `[details](#the-details-element)` elements to a document in a way that would cause a [details name group](#details-name-group) to have more than one `[details](#the-details-element)` element with the `[open](#attr-details-open)` attribute present.

The group of elements that is created by a common `[name](#attr-details-name)` attribute is exclusive, meaning that at most one of the `[details](#the-details-element)` elements can be open at once. While this exclusivity is enforced by user agents, the resulting enforcement immediately changes the `[open](#attr-details-open)` attributes in the markup. This requirement on authors forbids such misleading markup.

A document must not contain a `[details](#the-details-element)` element that is a descendant of another `[details](#the-details-element)` element in the same [details name group](#details-name-group).

Documents that use the `[name](#attr-details-name)` attribute to group multiple related `[details](#the-details-element)` elements should keep those related elements together in a containing element (such as a `[section](sections.html#the-section-element)` element or `[article](sections.html#the-article-element)` element). When it makes sense for the group to be introduced with a heading, authors should put that heading in a [heading](sections.html#concept-heading) element at the start of the containing element.

Visually and programmatically grouping related elements together can be important for accessible user experiences. This can help users understand the relationship between such elements. When related elements are in disparate sections of a web page rather than being grouped, the elements' relationships to each other can be less discoverable or understandable.

The `open` content attribute is a [boolean attribute](common-microsyntaxes.html#boolean-attribute). If present, it indicates that both the summary and the additional information is to be shown to the user. If the attribute is absent, only the summary is to be shown.

When the element is created, if the attribute is absent, the additional information should be hidden; if the attribute is present, that information should be shown. Subsequently, if the attribute is removed, then the information should be hidden; if the attribute is added, the information should be shown.

The user agent should allow the user to request that the additional information be shown or hidden. To honor a request for the details to be shown, the user agent must [set](https://dom.spec.whatwg.org/#concept-element-attributes-set-value) the `[open](#attr-details-open)` attribute on the element to the empty string. To honor a request for the information to be hidden, the user agent must [remove](https://dom.spec.whatwg.org/#concept-element-attributes-remove) the `[open](#attr-details-open)` attribute from the element.

This ability to request that additional information be shown or hidden may simply be the [activation behavior](https://dom.spec.whatwg.org/#eventtarget-activation-behavior) of the appropriate `[summary](#the-summary-element)` element, in the case such an element exists. However, if no such element exists, user agents can still provide this ability through some other user interface affordance.

The details name group that contains a `[details](#the-details-element)` element a also contains all the other `[details](#the-details-element)` elements b that fulfill all of the following conditions:


*   Both a and b are in the same [tree](https://dom.spec.whatwg.org/#concept-tree).

*   They both have a `[name](#attr-details-name)` attribute, their `[name](#attr-details-name)` attributes are not the empty string, and the value of a's `[name](#attr-details-name)` attribute equals the value of b's `[name](#attr-details-name)` attribute.

Every `[details](#the-details-element)` element has a details toggle task tracker, which is a [toggle task tracker](interaction.html#toggle-task-tracker) or null, initially null.

The following [attribute change steps](https://dom.spec.whatwg.org/#concept-element-attributes-change-ext), given element, localName, oldValue, value, and namespace, are used for all `[details](#the-details-element)` elements:

1.  If namespace is not null, then return.
    
2.  If localName is `[name](#attr-details-name)`, then [ensure details exclusivity by closing the given element if needed](#ensure-details-exclusivity-by-closing-the-given-element-if-needed) given element.
    
3.  If localName is `[open](#attr-details-open)`, then:
    
    1.  If one of oldValue or value is null and the other is not null, run the following steps, which are known as the details notification task steps, for this `[details](#the-details-element)` element:
        
        When the `[open](#attr-details-open)` attribute is toggled several times in succession, the resulting tasks essentially get coalesced so that only one event is fired.
        
        1.  If oldValue is null, [queue a details toggle event task](#queue-a-details-toggle-event-task) given the `[details](#the-details-element)` element, "`closed`", and "`open`".
            
        2.  Otherwise, [queue a details toggle event task](#queue-a-details-toggle-event-task) given the `[details](#the-details-element)` element, "`open`", and "`closed`".
            
    2.  If oldValue is null and value is not null, then [ensure details exclusivity by closing other elements if needed](#ensure-details-exclusivity-by-closing-other-elements-if-needed) given element.

The `[details](#the-details-element)` [HTML element insertion steps](infrastructure.html#html-element-insertion-steps), given insertedNode, are:

1.  [Ensure details exclusivity by closing the given element if needed](#ensure-details-exclusivity-by-closing-the-given-element-if-needed) given insertedNode.

To be clear, these attribute change and insertion steps also run when an attribute or element is inserted via the parser.

To queue a details toggle event task given a `[details](#the-details-element)` element element, a string oldState, and a string newState:

1.  If element's [details toggle task tracker](#details-toggle-task-tracker) is not null, then:
    
    1.  Set oldState to element's [details toggle task tracker](#details-toggle-task-tracker)'s [old state](interaction.html#toggle-task-old-state).
        
    2.  Remove element's [details toggle task tracker](#details-toggle-task-tracker)'s [task](interaction.html#toggle-task-task) from its [task queue](webappapis.html#task-queue).
        
    3.  Set element's [details toggle task tracker](#details-toggle-task-tracker) to null.
        
2.  [Queue an element task](webappapis.html#queue-an-element-task) given the [DOM manipulation task source](webappapis.html#dom-manipulation-task-source) and element to run the following steps:
    
    1.  [Fire an event](https://dom.spec.whatwg.org/#concept-event-fire) named `[toggle](indices.html#event-toggle)` at element, using `[ToggleEvent](interaction.html#toggleevent)`, with the `[oldState](interaction.html#dom-toggleevent-oldstate)` attribute initialized to oldState and the `[newState](interaction.html#dom-toggleevent-newstate)` attribute initialized to newState.
        
    2.  Set element's [details toggle task tracker](#details-toggle-task-tracker) to null.
        
3.  Set element's [details toggle task tracker](#details-toggle-task-tracker) to a struct with [task](interaction.html#toggle-task-task) set to the just-queued [task](webappapis.html#concept-task) and [old state](interaction.html#toggle-task-old-state) set to oldState.

To ensure details exclusivity by closing other elements if needed given a `[details](#the-details-element)` element element:

1.  [Assert](https://infra.spec.whatwg.org/#assert): element has an `[open](#attr-details-open)` attribute.
    
2.  If element does not have a `[name](#attr-details-name)` attribute, or its `[name](#attr-details-name)` attribute is the empty string, then return.
    
3.  Let groupMembers be a list of elements, containing all elements in element's [details name group](#details-name-group) except for element, in [tree order](https://dom.spec.whatwg.org/#concept-tree-order).
    
4.  [For each](https://infra.spec.whatwg.org/#list-iterate) element otherElement of groupMembers:
    
    1.  If the `[open](#attr-details-open)` attribute is set on otherElement, then:
        
        1.  [Assert](https://infra.spec.whatwg.org/#assert): otherElement is the only element in groupMembers that has the `[open](#attr-details-open)` attribute set.
            
        2.  [Remove](https://dom.spec.whatwg.org/#concept-element-attributes-remove) the `[open](#attr-details-open)` attribute on otherElement.
            
        3.  [Break](https://infra.spec.whatwg.org/#iteration-break).

To ensure details exclusivity by closing the given element if needed given a `[details](#the-details-element)` element element:

1.  If element does not have an `[open](#attr-details-open)` attribute, then return.
    
2.  If element does not have a `[name](#attr-details-name)` attribute, or its `[name](#attr-details-name)` attribute is the empty string, then return.
    
3.  Let groupMembers be a list of elements, containing all elements in element's [details name group](#details-name-group) except for element, in [tree order](https://dom.spec.whatwg.org/#concept-tree-order).
    
4.  [For each](https://infra.spec.whatwg.org/#list-iterate) element otherElement of groupMembers:
    
    1.  If the `[open](#attr-details-open)` attribute is set on otherElement, then:
        
        1.  [Remove](https://dom.spec.whatwg.org/#concept-element-attributes-remove) the `[open](#attr-details-open)` attribute on element.
            
        2.  [Break](https://infra.spec.whatwg.org/#iteration-break).

The following example shows the `[details](#the-details-element)` element being used to hide technical details in a progress report.

```


 Copying "Really Achieving Your Childhood Dreams"
 
  Copying...  25%
  
   Transfer rate: 452KB/s
   Local filename: /home/rpausch/raycd.m4v
   Remote filename: /var/www/lectures/raycd.m4v
   Duration: 01:16:27
   Color profile: SD (6-1-6)
   Dimensions: 320×240
  
 


```

The following shows how a `[details](#the-details-element)` element can be used to hide some controls by default:

```


 Name & Extension:
 
  Hide extension


```

One could use this in conjunction with other `[details](#the-details-element)` in a list to allow the user to collapse a set of fields down to a small set of headings, with the ability to open each one.

In these examples, the summary really just summarizes what the controls can change, and not the actual values, which is less than ideal.

The following example shows the `[name](#attr-details-name)` attribute of the `[details](#the-details-element)` element being used to create an exclusive accordion, a set of `[details](#the-details-element)` elements where a user action to open one `[details](#the-details-element)` element causes any open `[details](#the-details-element)` to close.

```


 
  Material
  The picture frame is made of solid oak wood.
 
 
  Size
  The picture frame fits a photo 40cm tall and 30cm wide.
  The frame is 45cm tall, 35cm wide, and 2cm thick.
 
 
  Color
  The picture frame is available in its natural wood
  color, or with black stain.
 


```

The following example shows what happens when the `[open](#attr-details-open)` attribute is set on a `[details](#the-details-element)` element that is part of a set of elements using the `[name](#attr-details-name)` attribute to create an exclusive accordion.

Given the initial markup:

```


 ...
 ...
 ...


```

and the script:

```

document.getElementById("d2").setAttribute("open", "");

```

then the resulting tree after the script executes will be equivalent to the markup:

```


 ...
 ...
 ...


```

because setting the `[open](#attr-details-open)` attribute on `d2` removes it from `d1`.

The same happens when the user activates the `[summary](#the-summary-element)` element inside of `d2`.

Because the `[open](#attr-details-open)` attribute is added and removed automatically as the user interacts with the control, it can be used in CSS to style the element differently based on its state. Here, a style sheet is used to animate the color of the summary when the element is opened or closed:

```


 details > summary { transition: color 1s; color: black; }
 details[open] > summary { color: red; }


 Automated Status: Operational
 Velocity: 12m/s
 Direction: North


```

#### 4.11.2 The `summary` element

[Element/summary](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/summary "The  HTML element specifies a summary, caption, or legend for a  element's disclosure box. Clicking the  element toggles the state of the parent  element open and closed.")

Support in all current engines.

Firefox49+Safari6+Chrome12+Opera?Edge79+Edge (Legacy)?Internet ExplorerNoFirefox Android?Safari iOS?Chrome Android?WebView Android4+Samsung Internet?Opera Android?

[Categories](dom.html#concept-element-categories):

None.

[Contexts in which this element can be used](dom.html#concept-element-contexts):

As the [first child](https://dom.spec.whatwg.org/#concept-tree-first-child) of a `[details](#the-details-element)` element.

[Content model](dom.html#concept-element-content-model):

[Phrasing content](dom.html#phrasing-content-2), optionally intermixed with [heading content](dom.html#heading-content-2).

[Tag omission in text/html](dom.html#concept-element-tag-omission):

Neither tag is omissible.

[Content attributes](dom.html#concept-element-attributes):

[Global attributes](dom.html#global-attributes)

[Accessibility considerations](dom.html#concept-element-accessibility-considerations):

[For authors](https://w3c.github.io/html-aria/#el-summary).

[For implementers](https://w3c.github.io/html-aam/#el-summary).

[DOM interface](dom.html#concept-element-dom):

Uses `[HTMLElement](dom.html#htmlelement)`.

The `[summary](#the-summary-element)` element [represents](dom.html#represents) a summary, caption, or legend for the rest of the contents of the `[summary](#the-summary-element)` element's parent `[details](#the-details-element)` element, if any.

A `[summary](#the-summary-element)` element is a summary for its parent details if the following algorithm returns true:

1.  If this `[summary](#the-summary-element)` element has no parent, then return false.
    
2.  Let parent be this `[summary](#the-summary-element)` element's parent.
    
3.  If parent is not a `[details](#the-details-element)` element, then return false.
    
4.  If parent's first `[summary](#the-summary-element)` element child is not this `[summary](#the-summary-element)` element, then return false.
    
5.  Return true.

The [activation behavior](https://dom.spec.whatwg.org/#eventtarget-activation-behavior) of `[summary](#the-summary-element)` elements is to run the following steps:

1.  If this `[summary](#the-summary-element)` element is not the [summary for its parent details](#summary-for-its-parent-details), then return.
    
2.  Let parent be this `[summary](#the-summary-element)` element's parent.
    
3.  If the `[open](#attr-details-open)` attribute is present on parent, then [remove](https://dom.spec.whatwg.org/#concept-element-attributes-remove) it. Otherwise, [set](https://dom.spec.whatwg.org/#concept-element-attributes-set-value) parent's `[open](#attr-details-open)` attribute to the empty string.
    
    This will then run the [details notification task steps](#details-notification-task-steps).

#### 4.11.3 Commands

##### 4.11.3.1 Facets

A command is the abstraction behind menu items, buttons, and links. Once a command is defined, other parts of the interface can refer to the same command, allowing many access points to a single feature to share facets such as the [Disabled State](#command-facet-disabledstate).

Commands are defined to have the following facets:

Label

The name of the command as seen by the user.

Access Key

A key combination selected by the user agent that triggers the command. A command might not have an Access Key.

Whether the command is hidden or not (basically, whether it should be shown in menus).

Disabled State

Whether the command is relevant and can be triggered or not.

Action

The actual effect that triggering the command will have. This could be a scripted event handler, a [URL](https://url.spec.whatwg.org/#concept-url) to which to [navigate](browsing-the-web.html#navigate), or a form submission.

User agents may expose the [commands](#concept-command) that match the following criteria:


*   The facet is false (visible)

    
*   The element is [in a document](https://dom.spec.whatwg.org/#in-a-document) with a non-null [browsing context](document-sequences.html#concept-document-bc).

    
*   Neither the element nor any of its ancestors has a attribute specified.

User agents are encouraged to do this especially for commands that have [Access Keys](#command-facet-accesskey), as a way to advertise those keys to the user.

For example, such commands could be listed in the user agent's menu bar.

##### 4.11.3.2 Using the `a` element to define a command

An `[a](text-level-semantics.html#the-a-element)` element with an `[href](links.html#attr-hyperlink-href)` attribute [defines a command](#concept-command).

The [Label](#command-facet-label) of the command is the element's [descendant text content](https://dom.spec.whatwg.org/#concept-descendant-text-content).

The [Access Key](#command-facet-accesskey) of the command is the element's [assigned access key](interaction.html#assigned-access-key), if any.

The of the command is true (hidden) if the element has a attribute, and false otherwise.

The [Disabled State](#command-facet-disabledstate) facet of the command is true if the element or one of its ancestors is [inert](interaction.html#inert), and false otherwise.

The [Action](#command-facet-action) of the command is to [fire a `click` event](webappapis.html#fire-a-click-event) at the element.

##### 4.11.3.3 Using the `button` element to define a command

A `[button](form-elements.html#the-button-element)` element always [defines a command](#concept-command).

The [Label](#command-facet-label), [Access Key](#command-facet-accesskey), , and [Action](#command-facet-action) facets of the command are determined [as for `a` elements](#using-the-a-element-to-define-a-command) (see the previous section).

The [Disabled State](#command-facet-disabledstate) of the command is true if the element or one of its ancestors is [inert](interaction.html#inert), or if the element's [disabled](form-control-infrastructure.html#concept-fe-disabled) state is set, and false otherwise.

##### 4.11.3.4 Using the `input` element to define a command

An `[input](input.html#the-input-element)` element whose `[type](input.html#attr-input-type)` attribute is in one of the [Submit Button](input.html#submit-button-state-\(type=submit\)), [Reset Button](input.html#reset-button-state-\(type=reset\)), [Image Button](input.html#image-button-state-\(type=image\)), [Button](input.html#button-state-\(type=button\)), [Radio Button](input.html#radio-button-state-\(type=radio\)), or [Checkbox](input.html#checkbox-state-\(type=checkbox\)) states [defines a command](#concept-command).

The [Label](#command-facet-label) of the command is determined as follows:

1.  If the `[type](input.html#attr-input-type)` attribute is in one of the [Submit Button](input.html#submit-button-state-\(type=submit\)), [Reset Button](input.html#reset-button-state-\(type=reset\)), [Image Button](input.html#image-button-state-\(type=image\)), or [Button](input.html#button-state-\(type=button\)) states, then the [Label](#command-facet-label) is the string given by the `[value](input.html#attr-input-value)` attribute, if any, and a UA-dependent, locale-dependent value that the UA uses to label the button itself if the attribute is absent.
    
2.  Otherwise, if the element is a [labeled control](forms.html#labeled-control), then the [Label](#command-facet-label) is the [descendant text content](https://dom.spec.whatwg.org/#concept-descendant-text-content) of the first `[label](forms.html#the-label-element)` element in [tree order](https://dom.spec.whatwg.org/#concept-tree-order) whose [labeled control](forms.html#labeled-control) is the element in question. (In JavaScript terms, this is given by `element.labels[0].textContent`.)
    
3.  Otherwise, if the `[value](input.html#attr-input-value)` attribute is present, then the [Label](#command-facet-label) is the value of that attribute.
    
4.  Otherwise, the [Label](#command-facet-label) is the empty string.

Even though the `[value](input.html#attr-input-value)` attribute on `[input](input.html#the-input-element)` elements in the [Image Button](input.html#image-button-state-\(type=image\)) state is non-conformant, the attribute can still contribute to the [Label](#command-facet-label) determination, if it is present and the Image Button's `[alt](input.html#attr-input-alt)` attribute is missing.

The [Access Key](#command-facet-accesskey) of the command is the element's [assigned access key](interaction.html#assigned-access-key), if any.

The of the command is true (hidden) if the element has a attribute, and false otherwise.

The [Disabled State](#command-facet-disabledstate) of the command is true if the element or one of its ancestors is [inert](interaction.html#inert), or if the element's [disabled](form-control-infrastructure.html#concept-fe-disabled) state is set, and false otherwise.

The [Action](#command-facet-action) of the command is to [fire a `click` event](webappapis.html#fire-a-click-event) at the element.

##### 4.11.3.5 Using the `option` element to define a command

An `[option](form-elements.html#the-option-element)` element with an ancestor `[select](form-elements.html#the-select-element)` element and either no `[value](form-elements.html#attr-option-value)` attribute or a `[value](form-elements.html#attr-option-value)` attribute that is not the empty string [defines a command](#concept-command).

The [Label](#command-facet-label) of the command is the value of the `[option](form-elements.html#the-option-element)` element's `[label](form-elements.html#attr-option-label)` attribute, if there is one, or else the `[option](form-elements.html#the-option-element)` element's [descendant text content](https://dom.spec.whatwg.org/#concept-descendant-text-content), with [ASCII whitespace stripped and collapsed](https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace).

The [Access Key](#command-facet-accesskey) of the command is the element's [assigned access key](interaction.html#assigned-access-key), if any.

The of the command is true (hidden) if the element has a attribute, and false otherwise.

The [Disabled State](#command-facet-disabledstate) of the command is true if the element is [disabled](form-elements.html#concept-option-disabled), or if its nearest ancestor `[select](form-elements.html#the-select-element)` element is [disabled](form-control-infrastructure.html#concept-fe-disabled), or if it or one of its ancestors is [inert](interaction.html#inert), and false otherwise.

If the `[option](form-elements.html#the-option-element)`'s nearest ancestor `[select](form-elements.html#the-select-element)` element has a `[multiple](form-elements.html#attr-select-multiple)` attribute, the [Action](#command-facet-action) of the command is to [toggle](form-elements.html#concept-select-toggle) the `[option](form-elements.html#the-option-element)` element. Otherwise, the [Action](#command-facet-action) is to [pick](form-elements.html#concept-select-pick) the `[option](form-elements.html#the-option-element)` element.

##### 4.11.3.6 Using the `accesskey` attribute on a `legend` element to define a command

A `[legend](form-elements.html#the-legend-element)` element [defines a command](#concept-command) if all of the following are true:


*   It has an [assigned access key](interaction.html#assigned-access-key).

    
*   It is a child of a `[fieldset](form-elements.html#the-fieldset-element)` element.

    
*   Its parent has a descendant that [defines a command](#concept-command) that is neither a `[label](forms.html#the-label-element)` element nor a `[legend](form-elements.html#the-legend-element)` element. This element, if it exists, is the `legend` element's `accesskey` delegatee.

The [Label](#command-facet-label) of the command is the element's [descendant text content](https://dom.spec.whatwg.org/#concept-descendant-text-content).

The [Access Key](#command-facet-accesskey) of the command is the element's [assigned access key](interaction.html#assigned-access-key).

The , [Disabled State](#command-facet-disabledstate), and [Action](#command-facet-action) facets of the command are the same as the respective facets of [the `legend` element's `accesskey` delegatee](#the-legend-element's-accesskey-delegatee).

In this example, the `[legend](form-elements.html#the-legend-element)` element specifies an `[accesskey](interaction.html#the-accesskey-attribute)`, which, when activated, will delegate to the `[input](input.html#the-input-element)` element inside the `[legend](form-elements.html#the-legend-element)` element.

```


 
  I want 
   pizza(s) with these toppings
 
  Cheese
  Ham
  Pineapple


```

##### 4.11.3.7 Using the `accesskey` attribute to define a command on other elements

An element that has an [assigned access key](interaction.html#assigned-access-key) [defines a command](#concept-command).

If one of the earlier sections that define elements that [define commands](#concept-command) define that this element [defines a command](#concept-command), then that section applies to this element, and this section does not. Otherwise, this section applies to that element.

The [Label](#command-facet-label) of the command depends on the element. If the element is a [labeled control](forms.html#labeled-control), the [descendant text content](https://dom.spec.whatwg.org/#concept-descendant-text-content) of the first `[label](forms.html#the-label-element)` element in [tree order](https://dom.spec.whatwg.org/#concept-tree-order) whose [labeled control](forms.html#labeled-control) is the element in question is the [Label](#command-facet-label) (in JavaScript terms, this is given by `element.labels[0].textContent`). Otherwise, the [Label](#command-facet-label) is the element's [descendant text content](https://dom.spec.whatwg.org/#concept-descendant-text-content).

The [Access Key](#command-facet-accesskey) of the command is the element's [assigned access key](interaction.html#assigned-access-key).

The of the command is true (hidden) if the element has a attribute, and false otherwise.

The [Disabled State](#command-facet-disabledstate) of the command is true if the element or one of its ancestors is [inert](interaction.html#inert), and false otherwise.

The [Action](#command-facet-action) of the command is to run the following steps:

1.  Run the [focusing steps](interaction.html#focusing-steps) for the element.

2.  [Fire a `click` event](webappapis.html#fire-a-click-event) at the element.

#### 4.11.4 The `dialog` element

[Element/dialog](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog "The  HTML element represents a dialog box or other interactive component, such as a dismissible alert, inspector, or subwindow.")

Support in all current engines.

Firefox98+Safari15.4+Chrome37+Opera?Edge79+Edge (Legacy)?Internet ExplorerNoFirefox Android?Safari iOS?Chrome Android?WebView Android?Samsung Internet?Opera Android?

[HTMLDialogElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement "The HTMLDialogElement interface provides methods to manipulate  elements. It inherits properties and methods from the HTMLElement interface.")

Support in all current engines.

Firefox98+Safari15.4+Chrome37+Opera?Edge79+Edge (Legacy)?Internet ExplorerNoFirefox Android?Safari iOS?Chrome Android?WebView Android?Samsung Internet?Opera Android?

[HTMLDialogElement/open](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/open "The open property of the HTMLDialogElement interface is a boolean value reflecting the open HTML attribute, indicating whether the  is available for interaction.")

Support in all current engines.

Firefox98+Safari15.4+Chrome37+Opera?Edge79+Edge (Legacy)?Internet ExplorerNoFirefox Android?Safari iOS?Chrome Android?WebView Android?Samsung Internet?Opera Android?

[Categories](dom.html#concept-element-categories):

[Flow content](dom.html#flow-content-2).

[Contexts in which this element can be used](dom.html#concept-element-contexts):

Where [flow content](dom.html#flow-content-2) is expected.

[Content model](dom.html#concept-element-content-model):

[Flow content](dom.html#flow-content-2).

[Tag omission in text/html](dom.html#concept-element-tag-omission):

Neither tag is omissible.

[Content attributes](dom.html#concept-element-attributes):

[Global attributes](dom.html#global-attributes)

`[closedby](#attr-dialog-closedby)` — Which user actions will close the dialog

`[open](#attr-dialog-open)` — Whether the dialog box is showing

[Accessibility considerations](dom.html#concept-element-accessibility-considerations):

[For authors](https://w3c.github.io/html-aria/#el-dialog).

[For implementers](https://w3c.github.io/html-aam/#el-dialog).

[DOM interface](dom.html#concept-element-dom):

```

[Exposed=Window]
interface HTMLDialogElement : [HTMLElement](dom.html#htmlelement) {
  [[HTMLConstructor](dom.html#htmlconstructor)] constructor();

  [[CEReactions](custom-elements.html#cereactions), [Reflect](common-dom-interfaces.html#xattr-reflect)] attribute boolean open;
  attribute DOMString [returnValue](#dom-dialog-returnvalue);
  [[CEReactions](custom-elements.html#cereactions), [ReflectSetter](common-dom-interfaces.html#xattr-reflectsetter)] attribute DOMString [closedBy](#dom-dialog-closedby);
  [[CEReactions](custom-elements.html#cereactions)] undefined [show](#dom-dialog-show)();
  [[CEReactions](custom-elements.html#cereactions)] undefined [showModal](#dom-dialog-showmodal)();
  [[CEReactions](custom-elements.html#cereactions)] undefined [close](#dom-dialog-close)(optional DOMString returnValue);
  [[CEReactions](custom-elements.html#cereactions)] undefined [requestClose](#dom-dialog-requestclose)(optional DOMString returnValue);

};

```

The `[dialog](#the-dialog-element)` element represents a transitory part of an application, in the form of a small window ("dialog box"), which the user interacts with to perform a task or gather information. Once the user is done, the dialog can be automatically closed by the application, or manually closed by the user.

Especially for modal dialogs, which are a familiar pattern across all types of applications, authors should work to ensure that dialogs in their web applications behave in a way that is familiar to users of non-web applications.

As with all HTML elements, it is not conforming to use the `[dialog](#the-dialog-element)` element when attempting to represent another type of control. For example, context menus, tooltips, and popup listboxes are not dialog boxes, so abusing the `[dialog](#the-dialog-element)` element to implement these patterns is incorrect.

An important part of user-facing dialog behavior is the placement of initial focus. The [dialog focusing steps](#dialog-focusing-steps) attempt to pick a good candidate for initial focus when a dialog is shown, but might not be a substitute for authors carefully thinking through the correct choice to match user expectations for a specific dialog. As such, authors should use the `[autofocus](interaction.html#attr-fe-autofocus)` attribute on the descendant element of the dialog that the user is expected to immediately interact with after the dialog opens. If there is no such element, then authors should use the `[autofocus](interaction.html#attr-fe-autofocus)` attribute on the `[dialog](#the-dialog-element)` element itself.

In the following example, a dialog is used for editing the details of a product in an inventory management web application.

```


  Product Number 
  Product Name 


```

If the `[autofocus](interaction.html#attr-fe-autofocus)` attribute was not present, the Product Number field would have been focused by the dialog focusing steps. Although that is reasonable behavior, the author determined that the more relevant field to focus was the Product Name field, as the Product Number field is readonly and expects no user input. So, the author used autofocus to override the default.

Even if the author wants to focus the Product Number field by default, they are best off explicitly specifying that by using autofocus on that `[input](input.html#the-input-element)` element. This makes the intent obvious to future readers of the code, and ensures the code stays robust in the face of future updates. (For example, if another developer added a close button, and positioned it in the node tree before the Product Number field).

Another important aspect of user behavior is whether dialogs are scrollable or not. In some cases, overflow (and thus scrollability) cannot be avoided, e.g., when it is caused by the user's high text zoom settings. But in general, scrollable dialogs are not expected by users. Adding large text nodes directly to dialog elements is particularly bad as this is likely to cause the dialog element itself to overflow. Authors are best off avoiding them.

The following terms of service dialog respects the above suggestions.

```


  
    By placing an order via this Web site on the first day of the fourth month of the year
    2010 Anno Domini, you agree to grant Us a non-transferable option to claim, for now and for
    ever more, your immortal soul.
    Should We wish to exercise this option, you agree to surrender your immortal soul,
    and any claim you may have on it, within 5 (five) working days of receiving written
    notification from  this site or one of its duly authorized minions.
     elements ... -->
  
  
    Agree
    Disagree
  


```

Note how the [dialog focusing steps](#dialog-focusing-steps) would have picked the scrollable `[div](grouping-content.html#the-div-element)` element by default, but similarly to the previous example, we have placed `[autofocus](interaction.html#attr-fe-autofocus)` on the `[div](grouping-content.html#the-div-element)` so as to be more explicit and robust against future changes.

In contrast, if the `[p](grouping-content.html#the-p-element)` elements expressing the terms of service did not have such a wrapper `[div](grouping-content.html#the-div-element)` element, then the `[dialog](#the-dialog-element)` itself would become scrollable, violating the above advice. Furthermore, in the absence of any `[autofocus](interaction.html#attr-fe-autofocus)` attribute, such a markup pattern would have violated the above advice and tripped up the [dialog focusing steps](#dialog-focusing-steps)'s default behavior, and caused focus to jump to the Agree `[button](form-elements.html#the-button-element)`, which is a bad user experience.

This dialog box has some small print. The `[strong](text-level-semantics.html#the-strong-element)` element is used to draw the user's attention to the more important part.

```


 Add to Wallet
 How many gold coins do you want to add to your wallet?
 
 You add coins at your own risk.
  Only add perfectly round coins
 


```

The `open` attribute is a [boolean attribute](common-microsyntaxes.html#boolean-attribute). When specified, it indicates that the `[dialog](#the-dialog-element)` element is active and that the user can interact with it.

The `closedby` content attribute is an [enumerated attribute](common-microsyntaxes.html#enumerated-attribute) with the following keywords and states:

| Keyword | State | Brief description |
| --- | --- | --- |
| any | Any | Close requests or clicks outside close the dialog. |
| closerequest | Close Request | Close requests close the dialog. |
| none | None | No user actions automatically close the dialog. |

The `[closedby](#attr-dialog-closedby)` attribute's *[invalid value default](common-microsyntaxes.html#invalid-value-default)* and *[missing value default](common-microsyntaxes.html#missing-value-default)* are both the Auto state.

The [Auto](#attr-dialog-closedby-auto-state) state behaves as [Close Request](#attr-dialog-closedby-closerequest-state) state when the `[dialog](#the-dialog-element)` was shown using its `[showModal()](#dom-dialog-showmodal)` method; otherwise the [None](#attr-dialog-closedby-none-state) state.

A `[dialog](#the-dialog-element)` element without an `[open](#attr-dialog-open)` attribute specified should not be shown to the user. This requirement may be implemented indirectly through the style layer. For example, user agents that [support the suggested default rendering](infrastructure.html#renderingUA) implement this requirement using the CSS rules described in the [Rendering section](rendering.html#rendering).

Removing the `[open](#attr-dialog-open)` attribute will usually hide the dialog. However, doing so has a number of strange additional consequences:


*   The `[close](indices.html#event-close)` event will not be fired.

    
*   The `[close()](#dom-dialog-close)` method, and any [close requests](interaction.html#close-request), will no longer be able to close the dialog.

    
*   If the dialog was shown using its `[showModal()](#dom-dialog-showmodal)` method, the `[Document](dom.html#document)` will still be [blocked](interaction.html#blocked-by-a-modal-dialog).

For these reasons, it is generally better to never remove the `[open](#attr-dialog-open)` attribute manually. Instead, use the `[requestClose()](#dom-dialog-requestclose)` or `[close()](#dom-dialog-close)` methods to close the dialog, or the attribute to hide it.

The `[tabindex](interaction.html#attr-tabindex)` attribute must not be specified on `[dialog](#the-dialog-element)` elements.

`dialog.[show](#dom-dialog-show)()`

[HTMLDialogElement/show](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/show "The show() method of the HTMLDialogElement interface displays the dialog modelessly, i.e. still allowing interaction with content outside of the dialog.")

Support in all current engines.

Firefox98+Safari15.4+Chrome37+Opera?Edge79+Edge (Legacy)?Internet ExplorerNoFirefox Android?Safari iOS?Chrome Android?WebView Android?Samsung Internet?Opera Android?

Displays the `[dialog](#the-dialog-element)` element.

`dialog.[showModal](#dom-dialog-showmodal)()`

[HTMLDialogElement/showModal](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/showModal "The showModal() method of the HTMLDialogElement interface displays the dialog as a modal, over the top of any other dialogs that might be present. It displays in the top layer, along with a ::backdrop pseudo-element. Interaction outside the dialog is blocked and the content outside it is rendered inert.")

Support in all current engines.

Firefox98+Safari15.4+Chrome37+Opera?Edge79+Edge (Legacy)?Internet ExplorerNoFirefox Android?Safari iOS?Chrome Android?WebView Android?Samsung Internet?Opera Android?

Displays the `[dialog](#the-dialog-element)` element and makes it the top-most modal dialog.

This method honors the `[autofocus](interaction.html#attr-fe-autofocus)` attribute.

`dialog.[close](#dom-dialog-close)([result])`

[HTMLDialogElement/close](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/close "The close() method of the HTMLDialogElement interface closes the . An optional string may be passed as an argument, updating the returnValue of the dialog.")

Support in all current engines.

Firefox98+Safari15.4+Chrome37+Opera?Edge79+Edge (Legacy)?Internet ExplorerNoFirefox Android?Safari iOS?Chrome Android?WebView Android?Samsung Internet?Opera Android?

Closes the `[dialog](#the-dialog-element)` element.

The argument, if provided, provides a return value.

`dialog.[requestClose](#dom-dialog-requestclose)([result])`

Acts as if a [close request](interaction.html#close-request) was sent targeting dialog, by first firing a `[cancel](indices.html#event-cancel)` event, and if that event is not canceled with `[preventDefault()](https://dom.spec.whatwg.org/#dom-event-preventdefault)`, proceeding to close the dialog in the same way as the `[close()](#dom-dialog-close)` method (including firing a `[close](indices.html#event-close)` event).

This is a helper utility that can be used to consolidate cancelation and closing logic into the `[cancel](indices.html#event-cancel)` and `[close](indices.html#event-close)` event handlers, by having all non-[close request](interaction.html#close-request) closing affordances call this method.

Note that this method ignores the `[closedby](#attr-dialog-closedby)` attribute: that is, even if `[closedby](#attr-dialog-closedby)` is set to "`[none](#attr-dialog-closedby-none)`", the same behavior will apply.

The argument, if provided, provides a return value.

`dialog.[returnValue](#dom-dialog-returnvalue) [= result]`

[HTMLDialogElement/returnValue](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/returnValue "The returnValue property of the HTMLDialogElement interface gets or sets the return value for the , usually to indicate which button the user pressed to close it.")

Support in all current engines.

Firefox98+Safari15.4+Chrome37+Opera?Edge79+Edge (Legacy)?Internet ExplorerNoFirefox Android?Safari iOS?Chrome Android?WebView Android?Samsung Internet?Opera Android?

Returns the `[dialog](#the-dialog-element)`'s return value.

Can be set, to update the return value.

The `show()` method steps are:

1.  If [this](https://webidl.spec.whatwg.org/#this) has an `[open](#attr-dialog-open)` attribute and [is modal](#is-modal) of [this](https://webidl.spec.whatwg.org/#this) is false, then return.
    
2.  If [this](https://webidl.spec.whatwg.org/#this) has an `[open](#attr-dialog-open)` attribute, then throw an ["`InvalidStateError`"](https://webidl.spec.whatwg.org/#invalidstateerror) `[DOMException](https://webidl.spec.whatwg.org/#dfn-DOMException)`.
    
3.  If the result of [firing an event](https://dom.spec.whatwg.org/#concept-event-fire) named `[beforetoggle](indices.html#event-beforetoggle)`, using `[ToggleEvent](interaction.html#toggleevent)`, with the `[cancelable](https://dom.spec.whatwg.org/#dom-event-cancelable)` attribute initialized to true, the `[oldState](interaction.html#dom-toggleevent-oldstate)` attribute initialized to "`closed`", and the `[newState](interaction.html#dom-toggleevent-newstate)` attribute initialized to "`open`" at [this](https://webidl.spec.whatwg.org/#this) is false, then return.
    
4.  If [this](https://webidl.spec.whatwg.org/#this) has an `[open](#attr-dialog-open)` attribute, then return.
    
5.  [Queue a dialog toggle event task](#queue-a-dialog-toggle-event-task) given [this](https://webidl.spec.whatwg.org/#this), "`closed`", "`open`", and null.
    
6.  Add an `[open](#attr-dialog-open)` attribute to [this](https://webidl.spec.whatwg.org/#this), whose value is the empty string.
    
7.  Set [this](https://webidl.spec.whatwg.org/#this)'s [previously focused element](#previously-focused-element) to the [focused](interaction.html#focused) element.
    
8.  Let document be [this](https://webidl.spec.whatwg.org/#this)'s [node document](https://dom.spec.whatwg.org/#concept-node-document).
    
9.  Let hideUntil be the result of running [topmost popover ancestor](popover.html#topmost-popover-ancestor) given [this](https://webidl.spec.whatwg.org/#this), document's [showing hint popover list](popover.html#showing-hint-popover-list), null, and false.
    
10.  If hideUntil is null, then set hideUntil to the result of running [topmost popover ancestor](popover.html#topmost-popover-ancestor) given [this](https://webidl.spec.whatwg.org/#this), document's [showing auto popover list](popover.html#auto-popover-list), null, and false.
     
11.  If hideUntil is null, then set hideUntil to document.
     
12.  Run [hide all popovers until](popover.html#hide-all-popovers-until) given hideUntil, false, and true.
     
13.  Run the [dialog focusing steps](#dialog-focusing-steps) given [this](https://webidl.spec.whatwg.org/#this).

The `showModal()` method steps are to [show a modal dialog](#show-a-modal-dialog) given [this](https://webidl.spec.whatwg.org/#this) and null.

The `close(returnValue)` method steps are:

1.  If returnValue is not given, then set it to null.
    
2.  [Close the dialog](#close-the-dialog) [this](https://webidl.spec.whatwg.org/#this) with returnValue and null.

The `requestClose(returnValue)` method steps are:

1.  If returnValue is not given, then set it to null.
    
2.  [Request to close the dialog](#dialog-request-close) [this](https://webidl.spec.whatwg.org/#this) with returnValue and null.

We use show/close as the verbs for `[dialog](#the-dialog-element)` elements, as opposed to verb pairs that are more commonly thought of as antonyms such as show/hide or open/close, due to the following constraints:


*   Hiding a dialog is different from closing one. Closing a dialog gives it a return value, fires an event, unblocks the page for other dialogs, and so on. Whereas hiding a dialog is a purely visual property, and is something you can already do with the attribute or by removing the `[open](#attr-dialog-open)` attribute. (See also the [note above](#note-dialog-remove-open-attribute) about removing the `[open](#attr-dialog-open)` attribute, and how hiding the dialog in that way is generally not desired.)

    
*   Showing a dialog is different from opening one. Opening a dialog consists of creating and showing that dialog (similar to how `[window.open()](nav-history-apis.html#dom-open)` both creates and shows a new window). Whereas showing the dialog is the process of taking a `[dialog](#the-dialog-element)` element that is already in the DOM, and making it interactive and visible to the user.

    
*   If we were to have a `dialog.open()` method despite the above, it would conflict with the `[dialog.open](#dom-dialog-open)` property.

Furthermore, a [survey](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2013-December/041799.html) of many other UI frameworks contemporary to the original design of the `[dialog](#the-dialog-element)` element made it clear that the show/close verb pair was reasonably common.

In summary, it turns out that the implications of certain verbs, and how they are used in technology contexts, mean that paired actions such as showing and closing a dialog are not always expressible as antonyms.

The `returnValue` IDL attribute, on getting, must return the last value to which it was set. On setting, it must be set to the new value. When the element is created, it must be set to the empty string.

The `closedBy` getter steps are to return the keyword corresponding to the [computed closed-by state](#computed-closed-by-state) given [this](https://webidl.spec.whatwg.org/#this).

Each `[Document](dom.html#document)` has a dialog pointerdown target, which is an [HTML dialog element](#htmldialogelement) or null, initially null.

Each [HTML element](infrastructure.html#html-elements) has a previously focused element which is null or an element, and it is initially null. When `[showModal()](#dom-dialog-showmodal)` and `[show()](#dom-dialog-show)` are called, this element is set to the currently [focused](interaction.html#focused) element before running the [dialog focusing steps](#dialog-focusing-steps). Elements with the `[popover](popover.html#attr-popover)` attribute set this element to the currently [focused](interaction.html#focused) element during the [show popover algorithm](popover.html#show-popover).

Each `[dialog](#the-dialog-element)` element has a dialog toggle task tracker, which is a [toggle task tracker](interaction.html#toggle-task-tracker) or null, initially null.

Each `[dialog](#the-dialog-element)` element has a close watcher, which is a [close watcher](interaction.html#close-watcher) or null, initially null.

Each `[dialog](#the-dialog-element)` element has a request close return value, which is a string or null, initially null.

Each `[dialog](#the-dialog-element)` element has a request close source element, which is an `[Element](https://dom.spec.whatwg.org/#interface-element)` or null, initially null.

Each `[dialog](#the-dialog-element)` element has an enable close watcher for request close boolean, initially false.

`[dialog](#the-dialog-element)`'s [enable close watcher for request close](#enable-close-watcher-for-requestclose\(\)) is used to force enable the dialog's [close watcher](#dialog-close-watcher) while [requesting to close](#dialog-request-close) it. A dialog whose [computed closed-by state](#computed-closed-by-state) is the [None](#attr-dialog-closedby-none-state) state would otherwise have a disabled [close watcher](#dialog-close-watcher).

Each `[dialog](#the-dialog-element)` element has an is modal boolean, initially false.

The `[dialog](#the-dialog-element)` [HTML element insertion steps](infrastructure.html#html-element-insertion-steps), given insertedNode, are:

1.  If insertedNode's [node document](https://dom.spec.whatwg.org/#concept-node-document) is not [fully active](document-sequences.html#fully-active), then return.
    
2.  If insertedNode has an `[open](#attr-dialog-open)` attribute and is [connected](https://dom.spec.whatwg.org/#connected), then run the [dialog setup steps](#dialog-setup-steps) given insertedNode.

The `[dialog](#the-dialog-element)` [HTML element removing steps](infrastructure.html#html-element-removing-steps), given removedNode and oldParent, are:

1.  If removedNode has an `[open](#attr-dialog-open)` attribute, then run the [dialog cleanup steps](#dialog-cleanup-steps) given removedNode.
    
2.  If removedNode's [node document](https://dom.spec.whatwg.org/#concept-node-document)'s [top layer](https://drafts.csswg.org/css-position-4/#document-top-layer) [contains](https://infra.spec.whatwg.org/#list-contain) removedNode, then [remove an element from the top layer immediately](https://drafts.csswg.org/css-position-4/#remove-an-element-from-the-top-layer-immediately) given removedNode.
    
3.  Set [is modal](#is-modal) of removedNode to false.

The following [attribute change steps](https://dom.spec.whatwg.org/#concept-element-attributes-change-ext), given element, localName, oldValue, value, and namespace are used for `[dialog](#the-dialog-element)` elements:

1.  If namespace is not null, then return.
    
2.  If localName is not `[open](#attr-dialog-open)`, then return.
    
3.  If value is null and oldValue is not null, then run the [dialog cleanup steps](#dialog-cleanup-steps) given element.
    
4.  If element's [node document](https://dom.spec.whatwg.org/#concept-node-document) is not [fully active](document-sequences.html#fully-active), then return.
    
5.  If element is not [connected](https://dom.spec.whatwg.org/#connected), then return.
    
    This ensures that the dialog setup steps are not run on nodes that are disconnected, which would result in a [close watcher](interaction.html#close-watcher) being established. The [dialog cleanup steps](#dialog-cleanup-steps) need no such guard.
    
6.  If value is not null and oldValue is null, then run the [dialog setup steps](#dialog-setup-steps) given element.

To show a modal dialog given a `[dialog](#the-dialog-element)` element subject and an `[Element](https://dom.spec.whatwg.org/#interface-element)` or null source:

1.  If subject has an `[open](#attr-dialog-open)` attribute and [is modal](#is-modal) of subject is true, then return.
    
2.  If subject has an `[open](#attr-dialog-open)` attribute, then throw an ["`InvalidStateError`"](https://webidl.spec.whatwg.org/#invalidstateerror) `[DOMException](https://webidl.spec.whatwg.org/#dfn-DOMException)`.
    
3.  If subject's [node document](https://dom.spec.whatwg.org/#concept-node-document) is not [fully active](document-sequences.html#fully-active), then throw an ["`InvalidStateError`"](https://webidl.spec.whatwg.org/#invalidstateerror) `[DOMException](https://webidl.spec.whatwg.org/#dfn-DOMException)`.
    
4.  If subject is not [connected](https://dom.spec.whatwg.org/#connected), then throw an ["`InvalidStateError`"](https://webidl.spec.whatwg.org/#invalidstateerror) `[DOMException](https://webidl.spec.whatwg.org/#dfn-DOMException)`.
    
5.  If subject is in the [popover showing state](popover.html#popover-showing-state), then throw an ["`InvalidStateError`"](https://webidl.spec.whatwg.org/#invalidstateerror) `[DOMException](https://webidl.spec.whatwg.org/#dfn-DOMException)`.
    
6.  If the result of [firing an event](https://dom.spec.whatwg.org/#concept-event-fire) named `[beforetoggle](indices.html#event-beforetoggle)`, using `[ToggleEvent](interaction.html#toggleevent)`, with the `[cancelable](https://dom.spec.whatwg.org/#dom-event-cancelable)` attribute initialized to true, the `[oldState](interaction.html#dom-toggleevent-oldstate)` attribute initialized to "`closed`", the `[newState](interaction.html#dom-toggleevent-newstate)` attribute initialized to "`open`", and the `[source](interaction.html#dom-toggleevent-source)` attribute initialized to source at subject is false, then return.
    
7.  If subject has an `[open](#attr-dialog-open)` attribute, then return.
    
8.  If subject is not [connected](https://dom.spec.whatwg.org/#connected), then return.
    
9.  If subject is in the [popover showing state](popover.html#popover-showing-state), then return.
    
10.  [Queue a dialog toggle event task](#queue-a-dialog-toggle-event-task) given subject, "`closed`", "`open`", and source.
     
11.  Add an `[open](#attr-dialog-open)` attribute to subject, whose value is the empty string.
     
12.  [Assert](https://infra.spec.whatwg.org/#assert): subject's [close watcher](#dialog-close-watcher) is not null.
     
13.  Set [is modal](#is-modal) of subject to true.
     
14.  Set subject's [node document](https://dom.spec.whatwg.org/#concept-node-document) to be [blocked by the modal dialog](interaction.html#blocked-by-a-modal-dialog) subject.
     
     This will cause the [focused area of the document](interaction.html#focused-area-of-the-document) to become [inert](interaction.html#inert) (unless that currently focused area is a [shadow-including descendant](https://dom.spec.whatwg.org/#concept-shadow-including-descendant) of subject). In such cases, the [focused area of the document](interaction.html#focused-area-of-the-document) will soon be [reset](webappapis.html#focus-fixup-rule) to the [viewport](https://drafts.csswg.org/css2/#viewport). In a couple steps we will attempt to find a better candidate to focus.
     
15.  If subject's [node document](https://dom.spec.whatwg.org/#concept-node-document)'s [top layer](https://drafts.csswg.org/css-position-4/#document-top-layer) does not already [contain](https://infra.spec.whatwg.org/#list-contain) subject, then [add an element to the top layer](https://drafts.csswg.org/css-position-4/#add-an-element-to-the-top-layer) given subject.
     
16.  Set subject's [previously focused element](#previously-focused-element) to the [focused](interaction.html#focused) element.
     
17.  Let document be subject's [node document](https://dom.spec.whatwg.org/#concept-node-document).
     
18.  Let hideUntil be the result of running [topmost popover ancestor](popover.html#topmost-popover-ancestor) given subject, document's [showing hint popover list](popover.html#showing-hint-popover-list), null, and false.
     
19.  If hideUntil is null, then set hideUntil to the result of running [topmost popover ancestor](popover.html#topmost-popover-ancestor) given subject, document's [showing auto popover list](popover.html#auto-popover-list), null, and false.
     
20.  If hideUntil is null, then set hideUntil to document.
     
21.  Run [hide all popovers until](popover.html#hide-all-popovers-until) given hideUntil, false, and true.
     
22.  Run the [dialog focusing steps](#dialog-focusing-steps) given subject.

To set the dialog close watcher, given a `[dialog](#the-dialog-element)` element dialog:

1.  [Assert](https://infra.spec.whatwg.org/#assert): dialog's [close watcher](#dialog-close-watcher) is null.
    
2.  [Assert](https://infra.spec.whatwg.org/#assert): dialog has an `[open](#attr-dialog-open)` attribute and dialog's [node document](https://dom.spec.whatwg.org/#concept-node-document) is [fully active](document-sequences.html#fully-active).
    
3.  Set dialog's [close watcher](#dialog-close-watcher) to the result of [establishing a close watcher](interaction.html#establish-a-close-watcher) given dialog's [relevant global object](webappapis.html#concept-relevant-global), with:

    
    *   *[cancelAction](interaction.html#create-close-watcher-cancelaction)* given canPreventClose being to return the result of [firing an event](https://dom.spec.whatwg.org/#concept-event-fire) named `[cancel](indices.html#event-cancel)` at dialog, with the `[cancelable](https://dom.spec.whatwg.org/#dom-event-cancelable)` attribute initialized to canPreventClose.

        
    *   *[closeAction](interaction.html#create-close-watcher-closeaction)* being to [close the dialog](#close-the-dialog) given dialog, dialog's [request close return value](#request-close-return-value), and dialog's [request close source element](#request-close-source-element).

        
    *   *[getEnabledState](interaction.html#create-close-watcher-getenabledstate)* being to return true if dialog's [enable close watcher for request close](#enable-close-watcher-for-requestclose\(\)) is true or dialog's [computed closed-by state](#computed-closed-by-state) is not [None](#attr-dialog-closedby-none-state); otherwise false.

The [is valid command steps](form-elements.html#is-valid-command-steps) for `[dialog](#the-dialog-element)` elements, given a `[command](form-elements.html#attr-button-command)` attribute command, are:

1.  If command is in the [Close](form-elements.html#attr-button-command-close-state) state, the [Request Close](form-elements.html#attr-button-command-request-close-state) state, or the [Show Modal](form-elements.html#attr-button-command-show-modal-state) state, then return true.
    
2.  Return false.

The [command steps](form-elements.html#command-steps) for `[dialog](#the-dialog-element)` elements, given an element element, an element source, and a `[command](form-elements.html#attr-button-command)` attribute command, are:

1.  If element is in the [popover showing](popover.html#popover-showing-state) state, then return.
    
2.  If command is in the [Close](form-elements.html#attr-button-command-close-state) state and element has an `[open](#attr-dialog-open)` attribute, then [close the dialog](#close-the-dialog) element with source's [optional value](form-control-infrastructure.html#concept-fe-optional-value) and source.
    
3.  If command is in the [Request Close](form-elements.html#attr-button-command-request-close-state) state and element has an `[open](#attr-dialog-open)` attribute, then [request to close the dialog](#dialog-request-close) element with source's [optional value](form-control-infrastructure.html#concept-fe-optional-value) and source.
    
4.  If command is the [Show Modal](form-elements.html#attr-button-command-show-modal-state) state and element does not have an `[open](#attr-dialog-open)` attribute, then [show a modal dialog](#show-a-modal-dialog) given element and source.

The following buttons use `[commandfor](form-elements.html#attr-button-commandfor)` to open and close a "confirm" `[dialog](#the-dialog-element)` as modal when activated:

```


 Delete


 
  
   Delete
  
  
   Cancel
  
 

    

```

When a `[dialog](#the-dialog-element)` element subject is to be closed, with null or a string result and an `[Element](https://dom.spec.whatwg.org/#interface-element)` or null source, run these steps:

1.  If subject does not have an `[open](#attr-dialog-open)` attribute, then return.
    
2.  [Fire an event](https://dom.spec.whatwg.org/#concept-event-fire) named `[beforetoggle](indices.html#event-beforetoggle)`, using `[ToggleEvent](interaction.html#toggleevent)`, with the `[oldState](interaction.html#dom-toggleevent-oldstate)` attribute initialized to "`open`", the `[newState](interaction.html#dom-toggleevent-newstate)` attribute initialized to "`closed`", and the `[source](interaction.html#dom-toggleevent-source)` attribute initialized to source at subject.
    
3.  If subject does not have an `[open](#attr-dialog-open)` attribute, then return.
    
4.  [Queue a dialog toggle event task](#queue-a-dialog-toggle-event-task) given subject, "`open`", "`closed`", and source.
    
5.  Remove subject's `[open](#attr-dialog-open)` attribute.
    
6.  If [is modal](#is-modal) of subject is true, then [request an element to be removed from the top layer](https://drafts.csswg.org/css-position-4/#request-an-element-to-be-removed-from-the-top-layer) given subject.
    
7.  Let wasModal be the value of subject's [is modal](#is-modal) flag.
    
8.  Set [is modal](#is-modal) of subject to false.
    
9.  If result is not null, then set subject's `[returnValue](#dom-dialog-returnvalue)` attribute to result.
    
10.  Set subject's [request close return value](#request-close-return-value) to null.
     
11.  Set subject's [request close source element](#request-close-source-element) to null.
     
12.  If subject's [previously focused element](#previously-focused-element) is not null, then:
     
     1.  Let element be subject's [previously focused element](#previously-focused-element).
         
     2.  Set subject's [previously focused element](#previously-focused-element) to null.
         
     3.  If subject's [node document](https://dom.spec.whatwg.org/#concept-node-document)'s [focused area of the document](interaction.html#focused-area-of-the-document)'s [DOM anchor](interaction.html#dom-anchor) is a [shadow-including inclusive descendant](https://dom.spec.whatwg.org/#concept-shadow-including-inclusive-descendant) of subject, or wasModal is true, then run the [focusing steps](interaction.html#focusing-steps) for element; the viewport should not be scrolled by doing this step.
         
13.  [Queue an element task](webappapis.html#queue-an-element-task) on the [user interaction task source](webappapis.html#user-interaction-task-source) given the subject element to [fire an event](https://dom.spec.whatwg.org/#concept-event-fire) named `[close](indices.html#event-close)` at subject.

To request to close `[dialog](#the-dialog-element)` element subject, given null or a string returnValue and null or an `[Element](https://dom.spec.whatwg.org/#interface-element)` source:

1.  If subject does not have an `[open](#attr-dialog-open)` attribute, then return.
    
2.  If subject is not [connected](https://dom.spec.whatwg.org/#connected) or subject's [node document](https://dom.spec.whatwg.org/#concept-node-document) is not [fully active](document-sequences.html#fully-active), then return.
    
3.  [Assert](https://infra.spec.whatwg.org/#assert): subject's [close watcher](#dialog-close-watcher) is not null.
    
4.  Set subject's [enable close watcher for request close](#enable-close-watcher-for-requestclose\(\)) to true.
    
5.  Set subject's [request close return value](#request-close-return-value) to returnValue.
    
6.  Set subject's [request close source element](#request-close-source-element) to source.
    
7.  [Request to close](interaction.html#close-watcher-request-close) subject's [close watcher](#dialog-close-watcher) with false.
    
8.  Set subject's [enable close watcher for request close](#enable-close-watcher-for-requestclose\(\)) to false.

To queue a dialog toggle event task given a `[dialog](#the-dialog-element)` element element, a string oldState, a string newState, and an `[Element](https://dom.spec.whatwg.org/#interface-element)` or null source:

1.  If element's [dialog toggle task tracker](#dialog-toggle-task-tracker) is not null, then:
    
    1.  Set oldState to element's [dialog toggle task tracker](#dialog-toggle-task-tracker)'s [old state](interaction.html#toggle-task-old-state).
        
    2.  Remove element's [dialog toggle task tracker](#dialog-toggle-task-tracker)'s [task](interaction.html#toggle-task-task) from its [task queue](webappapis.html#task-queue).
        
    3.  Set element's [dialog toggle task tracker](#dialog-toggle-task-tracker) to null.
        
2.  [Queue an element task](webappapis.html#queue-an-element-task) given the [DOM manipulation task source](webappapis.html#dom-manipulation-task-source) and element to run the following steps:
    
    1.  [Fire an event](https://dom.spec.whatwg.org/#concept-event-fire) named `[toggle](indices.html#event-toggle)` at element, using `[ToggleEvent](interaction.html#toggleevent)`, with the `[oldState](interaction.html#dom-toggleevent-oldstate)` attribute initialized to oldState, the `[newState](interaction.html#dom-toggleevent-newstate)` attribute initialized to newState, and the `[source](interaction.html#dom-toggleevent-source)` attribute initialized to source.
        
    2.  Set element's [dialog toggle task tracker](#dialog-toggle-task-tracker) to null.
        
3.  Set element's [dialog toggle task tracker](#dialog-toggle-task-tracker) to a struct with [task](interaction.html#toggle-task-task) set to the just-queued [task](webappapis.html#concept-task) and [old state](interaction.html#toggle-task-old-state) set to oldState.

To retrieve a dialog's computed closed-by state, given a `[dialog](#the-dialog-element)` dialog:

1.  If the state of dialog's `[closedby](#attr-dialog-closedby)` attribute is [Auto](#attr-dialog-closedby-auto-state):
    
    1.  If dialog's [is modal](#is-modal) is true, then return [Close Request](#attr-dialog-closedby-closerequest-state).
        
    2.  Return [None](#attr-dialog-closedby-none-state).
        
2.  Return the state of dialog's `[closedby](#attr-dialog-closedby)` attribute.

The dialog focusing steps, given a `[dialog](#the-dialog-element)` element subject, are as follows:

1.  If the [allow focus steps](interaction.html#allow-focus-steps) given subject's [node document](https://dom.spec.whatwg.org/#concept-node-document) return false, then return.
    
2.  Let control be null.
    
3.  If subject has the `[autofocus](interaction.html#attr-fe-autofocus)` attribute, then set control to subject.
    
4.  If control is null, then set control to the [focus delegate](interaction.html#focus-delegate) of subject.
    
5.  If control is null, then set control to subject.
    
6.  Run the [focusing steps](interaction.html#focusing-steps) for control.
    
    If control is not [focusable](interaction.html#focusable), this will do nothing. This would only happen if subject had no focus delegate, and the user agent decided that `[dialog](#the-dialog-element)` elements were not generally focusable. In that case, any [earlier modifications](#note-dialog-plus-focus-fixup) to the [focused area of the document](interaction.html#focused-area-of-the-document) will apply.
    
7.  Let topDocument be control's [node navigable](document-sequences.html#node-navigable)'s [top-level traversable](document-sequences.html#nav-top)'s [active document](document-sequences.html#nav-document).
    
8.  If control's [node document](https://dom.spec.whatwg.org/#concept-node-document)'s [origin](https://dom.spec.whatwg.org/#concept-document-origin) is not the [same](browsers.html#same-origin) as the [origin](https://dom.spec.whatwg.org/#concept-document-origin) of topDocument, then return.
    
9.  [Empty](https://infra.spec.whatwg.org/#list-empty) topDocument's [autofocus candidates](interaction.html#autofocus-candidates).
    
10.  Set topDocument's [autofocus processed flag](interaction.html#autofocus-processed-flag) to true.

The dialog setup steps, given a `[dialog](#the-dialog-element)` element subject, are as follows:

1.  [Assert](https://infra.spec.whatwg.org/#assert): subject has an `[open](#attr-dialog-open)` attribute.
    
2.  [Assert](https://infra.spec.whatwg.org/#assert): subject is [connected](https://dom.spec.whatwg.org/#connected).
    
3.  [Assert](https://infra.spec.whatwg.org/#assert): subject's [node document](https://dom.spec.whatwg.org/#concept-node-document)'s [open dialogs list](dom.html#open-dialogs-list) does not [contain](https://infra.spec.whatwg.org/#list-contain) subject.
    
4.  Add subject to subject's [node document](https://dom.spec.whatwg.org/#concept-node-document)'s [open dialogs list](dom.html#open-dialogs-list).
    
5.  [Set the dialog close watcher](#set-the-dialog-close-watcher) with subject.

The dialog cleanup steps, given a `[dialog](#the-dialog-element)` element subject, are as follows:

1.  [Remove](https://infra.spec.whatwg.org/#list-remove) subject from subject's [node document](https://dom.spec.whatwg.org/#concept-node-document)'s [open dialogs list](dom.html#open-dialogs-list).
    
2.  If subject's [close watcher](#dialog-close-watcher) is not null, then:
    
    1.  [Destroy](interaction.html#close-watcher-destroy) subject's [close watcher](#dialog-close-watcher).
        
    2.  Set subject's [close watcher](#dialog-close-watcher) to null.

#### 4.11.5 Dialog light dismiss

"Light dismiss" means that clicking outside of a `[dialog](#the-dialog-element)` element whose `[closedby](#attr-dialog-closedby)` attribute is in the [Any](#attr-dialog-closedby-any-state) state will close the `[dialog](#the-dialog-element)` element. This is in addition to how such `[dialog](#the-dialog-element)`s respond to [close requests](interaction.html#close-request).

To light dismiss open dialogs, given a `[PointerEvent](https://w3c.github.io/pointerevents/#pointerevent-interface)` event:

1.  [Assert](https://infra.spec.whatwg.org/#assert): event's `[isTrusted](https://dom.spec.whatwg.org/#dom-event-istrusted)` attribute is true.
    
2.  Let document be event's [target](https://dom.spec.whatwg.org/#concept-event-target)'s [node document](https://dom.spec.whatwg.org/#concept-node-document).
    
3.  If document's [open dialogs list](dom.html#open-dialogs-list) is [empty](https://infra.spec.whatwg.org/#list-is-empty), then return.
    
4.  Let ancestor be the result of running [nearest clicked dialog](#nearest-clicked-dialog) given event.
    
5.  If event's `[type](https://dom.spec.whatwg.org/#dom-event-type)` is "`[pointerdown](https://w3c.github.io/pointerevents/#the-pointerdown-event)`", then set document's [dialog pointerdown target](#dialog-pointerdown-target) to ancestor.
    
6.  If event's `[type](https://dom.spec.whatwg.org/#dom-event-type)` is "`[pointerup](https://w3c.github.io/pointerevents/#the-pointerup-event)`", then:
    
    1.  Let sameTarget be true if ancestor is document's [dialog pointerdown target](#dialog-pointerdown-target).
        
    2.  Set document's [dialog pointerdown target](#dialog-pointerdown-target) to null.
        
    3.  If sameTarget is false, then return.
        
    4.  Let topmostDialog be the last element of document's [open dialogs list](dom.html#open-dialogs-list).
        
    5.  If ancestor is topmostDialog, then return.
        
    6.  If topmostDialog's [computed closed-by state](#computed-closed-by-state) is not [Any](#attr-dialog-closedby-any-state), then return.
        
    7.  [Assert](https://infra.spec.whatwg.org/#assert): topmostDialog's [close watcher](#dialog-close-watcher) is not null.
        
    8.  [Request to close](interaction.html#close-watcher-request-close) topmostDialog's [close watcher](#dialog-close-watcher) with false.

To run light dismiss activities, given a `[PointerEvent](https://w3c.github.io/pointerevents/#pointerevent-interface)` event:

1.  Run [light dismiss open popovers](popover.html#light-dismiss-open-popovers) with event.
    
2.  Run [light dismiss open dialogs](#light-dismiss-open-dialogs) with event.

[Run light dismiss activities](#run-light-dismiss-activities) will be called by the [Pointer Events spec](https://github.com/w3c/pointerevents/pull/460) when the user clicks or touches anywhere on the page.

To find the nearest clicked dialog, given a `[PointerEvent](https://w3c.github.io/pointerevents/#pointerevent-interface)` event:

1.  Let target be event's [target](https://dom.spec.whatwg.org/#concept-event-target).
    
2.  If target is a `[dialog](#the-dialog-element)` element, target has an `[open](#attr-dialog-open)` attribute, target's [is modal](#is-modal) is true, and event's `[clientX](https://drafts.csswg.org/cssom-view/#dom-mouseevent-clientx)` and `[clientY](https://drafts.csswg.org/cssom-view/#dom-mouseevent-clienty)` are outside the bounds of target, then return null.
    
    The check for `[clientX](https://drafts.csswg.org/cssom-view/#dom-mouseevent-clientx)` and `[clientY](https://drafts.csswg.org/cssom-view/#dom-mouseevent-clienty)` is because a pointer event that hits the `::backdrop` pseudo element of a dialog will result in event having a target of the dialog element itself.
    
3.  Let currentNode be target.
    
4.  While currentNode is not null:
    
    1.  If currentNode is a `[dialog](#the-dialog-element)` element and currentNode has an `[open](#attr-dialog-open)` attribute, then return currentNode.
        
    2.  Set currentNode to currentNode's parent in the [flat tree](https://drafts.csswg.org/css-scoping/#flat-tree).
        
5.  Return null.

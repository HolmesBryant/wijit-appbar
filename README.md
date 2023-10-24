# Appbar Web Component

Renders an app-bar style widget. There are three available slots:
"left", "center" and "right". You can assign multiple items to each
slot.

## Attributes

-   dir optional (default: row) The orientation of the bar. Acceptable
    values are: "row" or "column"


<h2>Usage</h2>
    <code>
        <script type="module" src="wijit-appbar.js"></script>
        <wijit-appbar dir="row">
          <div slot="left">Foo</div>
          <div slot="center">Bar</div>
          <div slot="right">Baz</div>
        </wijit-appbar>
    </code>

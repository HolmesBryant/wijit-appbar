# Appbar Web Component

Renders an app-bar style widget. There are three available slots:
"left", "center" and "right". You can assign multiple items to each
slot.

## Attributes

-   [dir] optional (default: row) The orientation of the bar. Acceptable
    values are: "row" or "column"


<h2>Usage</h2>
    <pre>
        &lt;script type="module" src="wijit-appbar.js">&lt;/script>
        &lt;wijit-appbar dir="row">
          &lt;div slot="left">Foo&lt;/div>
          &lt;div slot="center">Bar&lt;/div>
          &lt;div slot="right">Baz&lt;/div>
        &lt;/wijit-appbar>
    </pre>

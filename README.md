# Appbar Web Component

Renders an app-bar style widget. There are three available slots:
"left", "center" and "right". You can assign multiple items to each
slot.

Demo: https://holmesbryant.github.io/wijit-appbar/

## Attributes

-   [dir] optional (default: row) The orientation of the bar. Acceptable values are: "row" or "column"


## Usage

Add the script.

    <script type="module" src="wijit-appbar.js"></script>


Add the tag.

    <wijit-appbar>
        <div slot="left">Foo</div>
        <div slot="center">Bar</div>
        <div slot="right">Baz</div>
    </wijit-appbar>

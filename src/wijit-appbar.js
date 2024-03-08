/**
 *  Renders an app-bar style widget
 *
 *  @author Holmes Bryant <https://github.com/HolmesBryant>
 *  @license GPL-3.0
 *
 *  @attribute [dir] optional (default: row) The orientation of the bar. Acceptable values are: "row" or "column".
 *
 *  @usage
 *  <script type="module" src="wijit-appbar.js"></script>
 *  <wijit-appbar dir="row">
 *    <div slot="left">Foo</div>
 *    <div slot="center">Bar</div>
 *    <div slot="right">Baz</div>
 *  </wijit-appbar>
 */
export class WijitAppbar extends HTMLElement {
	shadow = ShadowRoot;
	directions = ['row', 'column'];
	#dir = "row";
	static observedAttributes = ['dir'];

	constructor() {
		super();
		this.shadow = this.attachShadow({mode: 'open'});
		this.shadow.innerHTML = `
		<style>
			:host {
				display: flex;
				align-items: center;
			}

            #wrapper {
            	align-items: center;
				display: flex;
				flex-direction: ${this.dir};
				flex-wrap: wrap;
				height: 100%;
				justify-content: space-between;
				margin-top: -1ch;
				position: relative;
				width: 100%;
				z-index: 1;
            }

            #wrapper > * {
            	margin-top: 1ch;
            }

            span {
                align-items: center;
                display: inline-flex;
                flex-direction: row;
            }

            span:nth-child(2) {
                flex: 2;
                justify-content: center;
            }

            span:first-child {
            	flex: 1;
            	justify-content: start;
            }

            span:last-child {
            	flex: 1;
            	justify-content: end;
            }

		</style>
		<div id="wrapper">
			<span><slot name="left"></slot></span>
			<span><slot name="center"></slot></span>
			<span><slot name="right"></slot></span>
        </div>
		`;
	}

	connectedCallback() {
		this.dir = this.getAttribute('dir') || this.dir;
	}

	attributeChangedCallback(attr = String, oldval = String, newval = String) {
		this[attr] = newval;
	}

	get dir() {
		return this.#dir;
	}

	set dir(value) {
		if (this.#dir !== value) {
			this.#dir = value;
			const wrapper = this.shadowRoot.querySelector('#wrapper');
			wrapper.style.flexDirection = value;
		}
	}
}

document.addEventListener('DOMContentLoaded', customElements.define('wijit-appbar', WijitAppbar));

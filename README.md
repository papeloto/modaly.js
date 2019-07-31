# modaly.js [![Build Status](https://travis-ci.org/papeloto/modaly.js.svg?branch=master)](https://travis-ci.org/papeloto/modaly.js) [![Coverage Status](https://coveralls.io/repos/github/papeloto/modaly.js/badge.svg?branch=master)](https://coveralls.io/github/papeloto/modaly.js?branch=master)

Tiny and easy javascript library for creating web modals.
- Easy to use and customize
- Lightweight **3.19kB** (1.31 kB gzip)
- Automatic accessibility features
- Single file with styles injection
- Highly compatible ([browser list](https://browserl.ist/?q=%3E+0.25%25%2C+not+dead))


## Install
NPM
```sh
npm install modaly.js
```

CDN
```html
<script src="https://unpkg.com/modaly.js"></script>
```

Alternatively, you can [download](https://github.com/papeloto/modaly.js/tree/master/dist) distribution files directly.

## Usage

The basic setup for one modal with default options is the following.

```html
<div id="modal-1">
    <!-- the modal content goes here -->
</div>
```

```js
new Modaly("#modal-1");
```

To open the modal add the `data-modaly-open` attribute to any DOM element.

```html
<button data-modaly-open="#modal-1">
    Open Modal
</button>
```

To close the modal add the `data-modaly-close` attribute to any element inside the modal.

```html
<div id="modal-1">
    <!-- the modal content goes here -->

    <img src="close-icon.svg" data-modaly-close />
</div>
```

You can open/close the modal programmatically.

```js
const modal = new Modaly("#offer-modal");

if (offersAvailable) {
    modal.show();
}
```

```js
const modal = new Modaly("#timeout-modal");

setTimeout(() => modal.hide(), 5000);
```

## Options

You can further customize the behaviour and looks of your modals.

```js
new Modaly("#modal-custom", {
    // Style
    background: "black",
    opacity: 0.75,
    duration: 250,
    animation: "ease-in",

    // Navigation
    escape: true,
    overlay: true,
    accesible: true,

    // Callbacks
    onShow: (modal, trigger) => {},
    onHide: (modal, trigger) => {}
});
```

<br/>

| Option     | Default   | Description                                                       |
| :--------- | :-------- | :---------------------------------------------------------------- |
| background | "black"   | Modal overlay color                                               |
| opacity    | 0.75      | Modal overlay opacity                                             |
| duration   | 250       | Milliseconds that the transition lasts                            |
| animation  | "ease-in" | Timing function for the transition                                |
| escape     | true      | If the modal can be closed using the `ESC` key                    |
| overlay    | true      | If the modal can be closed clicking the overaly                   |
| accessible | true      | Setup the modal and triggers to be used by assistive technologies |

<br/>

## Callbacks
#### `onShow(modal, trigger)`
Fired when the modal it is about to open.
- `modal`: the modal DOM element.
- `trigger`: which DOM element openned the modal. `null` if no DOM element triggered it.

#### `onHide(modal, trigger)`
Fired when the modal it is about to close.
- `modal`: the modal DOM element.
- `trigger`: which DOM element closed the modal. `null` if no DOM element triggered it.

## Accessibility
If the option `accesible` is `true`, accessibility attributes will be added to the modal and the close triggers automatically.

It will change from this.

```html
<div id="modal-1">
    <!-- modal content -->

    <img src="close-icon.svg" data-modaly-close />
</div>
```

To this. The `aria-hidden` attribute will toggle accordingly to the modal.

```html
<div id="modal-1" role="dialog" aria-modal="true" aria-hidden="true">
    <!-- modal content -->

    <img src="close-icon.svg" data-modaly-close aria-label="close this dialog"/>
</div>
```

*Disclaimer: I am by no means an expert on accessibility technologies, but if you are one, feel free to reach out for improving the library.*


## Licensing
Created by [Victor Navarro](https://github.com/papeloto/) and licensed under [MIT](https://github.com/papeloto/modaly.js/blob/master/LICENSE) license.

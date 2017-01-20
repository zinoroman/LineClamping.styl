[![NPM version](https://img.shields.io/npm/v/line-clamping.styl.svg) ](https://npmjs.org/package/line-clamping.styl "View this project on NPM") [ ![NPM downloads](https://img.shields.io/npm/dm/line-clamping.styl.svg) ](https://npmjs.org/package/line-clamping.styl "View this project on NPM") [ ![Dependency Status](https://img.shields.io/david/zinoroman/LineClamping.styl.svg) ](https://david-dm.org/zinoroman/LineClamping.styl "View the status of this project's dependencies on DavidDM") [ ![Dev Dependency Status](https://img.shields.io/david/dev/zinoroman/LineClamping.styl.svg)](https://david-dm.org/zinoroman/LineClamping.styl#info=devDependencies "View the status of this project's development dependencies on DavidDM")

# line-clamping.styl
Stylus mixin for clamping multiline text

##Get started

###Installation

You can install **line-clamping.styl** using *npm*

```bash
npm i line-clamping.styl --save-dev
```

If you are feeling yourself like a hipster you can use *yarn*

```bash
yarn add line-clamping.styl --dev
```

###Importing

####Using gulp

Import the installed package from `node_modules`

```javascript
import lineClamping from 'line-clamping.styl';
```

Add it to `use` array for stylus

```javascript
stylus({
    use: [lineClamping()],
})
```

That's all! Now you are ready to use **line-clamping.styl**

###Usage

`line-clamping` mixin takes 4 arguments:

```stylus
line-clamping($lines-count = 1, $line-height = 1.25, $font-size = inherit, $is-inline = false)
```

For example, if you need to create block `.block` that should have two lines of the text, `line-height: 2` and `font-size: 20px` then the code will be following:

```stylus
.block
    line-clamping(2, 2, 20px)
```

If you want to use `$is-inline` mode you must set `width` property for the element.

```stylus
.inline-block
    width 200px
    line-clamping(2, 2, 20px, true)
```

You can find more examples of usage `line-clamping()` in `test` folder

###Testing

First of all you need to install the dependencies:

```bash
yarn
```

After installation run following command:

```bash
yarn test
```
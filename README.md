[![NPM version](https://img.shields.io/npm/v/line-clamping.styl.svg) ](https://npmjs.org/package/line-clamping.styl "View this project on NPM") [ ![NPM downloads](https://img.shields.io/npm/dm/line-clamping.styl.svg) ](https://npmjs.org/package/line-clamping.styl "View this project on NPM") [ ![Dependency Status](https://img.shields.io/david/zinoroman/LineClamping.styl.svg) ](https://david-dm.org/zinoroman/LineClamping.styl "View the status of this project's dependencies on DavidDM") [ ![Dev Dependency Status](https://img.shields.io/david/dev/zinoroman/LineClamping.styl.svg)](https://david-dm.org/zinoroman/LineClamping.styl#info=devDependencies "View the status of this project's development dependencies on DavidDM")

# LineClamping.styl
Stylus mixin for clamping multiline text

##Get started

###Installation

You can install **LineClamping.styl** using *npm*

```
npm i line-clamping.styl --save-dev
```

If you are feeling yourself like a hipster you can use *yarn*

```
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

That's all! Now you are ready to use **LineClamping.styl**

###Usage

`line-clamping` mixin takes 4 arguments:

```stylus
line-clamping($lines-count = 1, $font-size = 16px, $line-height = 1.25, $is-inline = false)
```

For example, if you need to create block `.block` that has `font-size: 20px` and `line-height: 2` with two lines of the text then the code will be following:

```stylus
.block
    line-clamping(2, 20px, 2)
```

If you want to use `$is-inline` mode you must set `width` property for the element.

```stylus
.inline-block
    width 200px
    line-clamping(2, 20px, 2, true)
```

You can find more examples of usage `line-clamping()` in `test` folder

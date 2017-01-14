# LineClamping.styl
Stylus mixin for clamping multiline text

##Project Info in Badges

[![NPM version](https://img.shields.io/npm/v/line-clamping.styl.svg) ](https://npmjs.org/package/line-clamping.styl "View this project on NPM") [ ![NPM downloads](https://img.shields.io/npm/dm/line-clamping.styl.svg) ](https://npmjs.org/package/line-clamping.styl "View this project on NPM") [ ![Dependency Status](https://img.shields.io/david/zinoroman/LineClamping.styl.svg) ](https://david-dm.org/zinoroman/LineClamping.styl "View the status of this project's dependencies on DavidDM") [ ![Dev Dependency Status](https://img.shields.io/david/dev/zinoroman/LineClamping.styl.svg)](https://david-dm.org/zinoroman/LineClamping.styl#info=devDependencies "View the status of this project's development dependencies on DavidDM")

##Installation

You can install **LineClamping.styl** using *npm*

```
  npm i line-clamping.styl --save-dev
```

If you are feeling yourself hipster you can use *yarn*

```
  yarn add line-clamping.styl
```

##Get started

###Using Gulp
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

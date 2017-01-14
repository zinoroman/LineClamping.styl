# LineClamping.styl &middot; [![npm version](https://badge.fury.io/js/line-clamping.styl.svg)](https://badge.fury.io/js/line-clamping.styl)
Stylus mixin for clamping multiline text

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

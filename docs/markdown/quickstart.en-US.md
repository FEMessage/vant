# Quickstart

### Install

```bash
# Using npm
npm i @femessage/vant -S

# Using yarn
yarn add @femessage/vant
```

> Tips: Please install Vant 3.0 for Vue 3 projects, see [issue#7035](https://github.com/femessage/vant/issues/7035)

## Usage

### 1. Import on demand

Use [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) to import components on demand

```bash
# Install plugin
npm i babel-plugin-import -D
```

```js
// set babel config in .babelrc or babel-loader
// Note: Don't set libraryDirectory if you are using webpack 1.
{
  "plugins": [
    ["import", {
      "libraryName": "@femessage/vant",
      "libraryDirectory": "es",
      "style": true
    }]
  ]
}

// For users who use babel7, that can be configured in babel.config.js
module.exports = {
  plugins: [
    ['import', {
      libraryName: '@femessage/vant',
      libraryDirectory: 'es',
      style: true
    }, '@femessage/vant']
  ]
};
```

```js
// Then you can import components from vant
import { Button } from '@femessage/vant';
```

> If you are using TypeScript，please use [ts-import-plugin](https://github.com/Brooooooklyn/ts-import-plugin) instead

### 2. Manually import

```js
import Button from '@femessage/vant/lib/button';
import '@femessage/vant/lib/button/style';
```

### 3. Import all components

```js
import Vue from 'vue';
import Vant from '@femessage/vant';
import '@femessage/vant/lib/index.css';

Vue.use(Vant);
```

> If you configured babel-plugin-import, you won't be allowed to import all components.

### 4. CDN

The easiest way to use Vant is to include a CDN link in the html file, after which you can access all components via the global variable `vant`.

```html
<!-- import style -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@femessage/vant@latest/lib/index.css"
/>

<!-- import script -->
<script src="https://cdn.jsdelivr.net/npm/vue@2.6/dist/vue.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@femessage/vant@latest/lib/vant.min.js"></script>

<script>
  // Render the Button component
  new Vue({
    el: '#app',
    template: `<van-button>Button</van-button>`,
  });

  // Call function component
  vant.Toast('Message');

  // Register Lazyload directive
  Vue.use(vant.Lazyload);
</script>
```

## Other

### Rem units

Vant use `px` as size units by default，you can use tools such as `postcss-pxtorem` to transform units to `rem`.

- [postcss-pxtorem](https://github.com/cuth/postcss-pxtorem)
- [lib-flexible](https://github.com/amfe/lib-flexible)

#### PostCSS Config

postcss config example:

```js
module.exports = {
  plugins: {
    autoprefixer: {
      browsers: ['Android >= 4.0', 'iOS >= 8'],
    },
    'postcss-pxtorem': {
      rootValue: 37.5,
      propList: ['*'],
    },
  },
};
```

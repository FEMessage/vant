# Search

### Install

```javascript
import Vue from 'vue';
import { Select } from '@femessage/vant';

Vue.use(Select);
```

## Usage

### Basic Usage

```html
<van-Select placeholder="Placeholder" v-model="value" />
```

```javascript
export default {
  data() {
    value: '',
  },
};
```

### Listen to Events

`search` event will be triggered when click the search button on the keyboard, `cancel` event will be triggered when click the cancel button.

```html
<form action="/">
  <van-search
    v-model="value"
    placeholder="Placeholder"
    show-action
    @search="onSearch"
    @cancel="onCancel"
  />
</form>
```

> Tips: There will be a search button on the keyboard when Search is inside a form in iOS.

### Custom Action Button

Use `action` slot to custom right button, `cancel` event will no longer be triggered when use this slot

```html
<van-search v-model="value" show-action shape="round" @search="onSearch">
  <div slot="action" @click="onSearch">Search</div>
</van-search>
```

## API

### Props

Search support all native properties of input tag，such as `maxlength`、`placeholder`、`autofocus`

| Attribute | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| label | Left side label | _string_ | - | - |
| shape | Shape of field, can be set to `round` | _string_ | `square` | - |
| background | Background color of field | _string_ | `#f2f2f2` | - |
| clearable | Whether to be clearable | _boolean_ | `true` | - |
| show-action | Whether to show right action button | _boolean_ | `false` | - |
| action-text | Text of action button | _boolean_ | `Cancel` | 2.2.2 |
| disabled | Whether to disable field | _boolean_ | `false` | - |
| readonly | Whether to be readonly | _boolean_ | `false` | - |
| error | Whether to show error info | _boolean_ | `false` | - |
| input-align | Text align of field, can be set to `center` `right` | _string_ | `left` | - |
| left-icon | Left icon name | _string_ | `search` | - |
| right-icon | Right icon name | _string_ | - | - |

### Events

| Event  | Description                        | Arguments            |
| ------ | ---------------------------------- | -------------------- |
| search | Triggered when confirm search      | value: current value |
| input  | Triggered when input value changed | value: current value |
| focus  | Triggered when input gets focus    | event: Event         |
| blur   | Triggered when input loses focus   | event: Event         |
| clear  | Triggered when click clear icon    | event: Event         |
| cancel | Triggered when click cancel button | -                    |

### Slots

| Name       | Description                                                 |
| ---------- | ----------------------------------------------------------- |
| label      | Custom Search label                                         |
| action     | Custom right button, displayed when `show-action` is `true` |
| left-icon  | Custom left icon                                            |
| right-icon | Custom right icon                                           |

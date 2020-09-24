# AddressList

### Install

```js
import Vue from 'vue';
import { AddressList } from '@femessage/vant';

Vue.use(AddressList);
```

## Usage

### Basic Usage

```html
<van-address-list
  v-model="chosenAddressId"
  :list="list"
  :disabled-list="disabledList"
  disabled-text="The following address is out of range"
  default-tag-text="Default"
  @add="onAdd"
  @edit="onEdit"
  @delete="onDelete"
  @set-default="onSetDefault"
/>
```

```js
import { Toast } from '@femessage/vant';

export default {
  data() {
    return {
      chosenAddressId: '1',
      list: [
        {
          id: '1',
          name: 'John Snow',
          tel: '13000000000',
          address: 'Somewhere',
          isDefault: true,
        },
        {
          id: '2',
          name: 'Ned Stark',
          tel: '1310000000',
          address: 'Somewhere',
        },
      ],
      disabledList: [
        {
          id: '3',
          name: 'Tywin',
          tel: '1320000000',
          address: 'Somewhere',
        },
      ],
    };
  },
  methods: {
    onAdd() {
      Toast('Add');
    },
    onEdit(item, index) {
      Toast('Edit:' + index);
    },
    onDelete(item, index) {
      Toast('Delete:' + index);
    },
    onSetDefault(item, index) {
      Toast('SetDefault', index);
    },
  },
};
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| v-model | Id of chosen address | _string_ | - |
| list | Address list | _Address[]_ | `[]` |
| disabled-list | Disabled address list | _Address[]_ | `[]` |
| disabled-text | Disabled text | _string_ | - |
| add-button-text | Add button text | _string_ | `Add new address` |
| default-tag-text `v2.3.0` | Default tag text | _string_ | - |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| add | Triggered when click add button | - |
| edit | Triggered when edit address | item: address object，index |
| edit-disabled | Triggered when edit disabled address | item: address object，index |
| delete | Triggered when delete address | item: address object，index |
| delete-disabled | Triggered when delete disabled address | item: address object，index |
| click-item | Triggered when click address item | item: address object，index |
| click-item-disabled | Triggered when click disabled address | item: address object，index |
| set-default | Triggered when set default address item | item: address object，index |
| set-default-disabled | Triggered when set default disabled address | item: address object，index |

### Data Structure of Address

| Key       | Description        | Type               |
| --------- | ------------------ | ------------------ |
| id        | Id                 | _number \| string_ |
| name      | Name               | _string_           |
| tel       | Phone              | _number \| string_ |
| address   | Address            | _string_           |
| isDefault | Is default address | _boolean_          |

### Slots

| Name | Description | SlotProps |
| --- | --- | --- |
| default | Custom content after list | - |
| top | Custom content before list | - |
| item-bottom `v2.5.0` | Custom content after list item | item |
| radioIcon | Custom radio icon | checked: checked or not |
| edit | Custom edit icon | - |
| delete | Custom delete icon | - |

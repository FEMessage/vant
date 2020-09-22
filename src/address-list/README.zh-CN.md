# AddressList 地址列表

### 引入

```js
import Vue from 'vue';
import { AddressList } from 'vant';

Vue.use(AddressList);
```

## 代码演示

### 基础用法

```html
<van-address-list
  v-model="chosenAddressId"
  :list="list"
  :disabled-list="disabledList"
  disabled-text="以下地址超出配送范围"
  default-tag-text="默认"
  @add="onAdd"
  @edit="onEdit"
  @delete="onDelete"
  @set-default="onSetDefault"
/>
```

```js
import { Toast } from 'vant';

export default {
  data() {
    return {
      chosenAddressId: '1',
      list: [
        {
          id: '1',
          name: '张三',
          tel: '13000000000',
          address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
          isDefault: true,
        },
        {
          id: '2',
          name: '李四',
          tel: '1310000000',
          address: '浙江省杭州市拱墅区莫干山路 50 号',
        },
      ],
      disabledList: [
        {
          id: '3',
          name: '王五',
          tel: '1320000000',
          address: '浙江省杭州市滨江区江南大道 15 号',
        },
      ],
    };
  },
  methods: {
    onAdd() {
      Toast('新增地址');
    },
    onEdit(item, index) {
      Toast('编辑地址:' + index);
    },
    onDelete(item, index) {
      Toast('删除地址:' + index);
    },
    onSetDefault(item, index) {
      Toast('设为默认地址', index);
    },
  },
};
```

## API

### Props

| 参数                      | 说明              | 类型        | 默认值     |
| ------------------------- | ----------------- | ----------- | ---------- |
| v-model                   | 当前选中地址的 id | _string_    | -          |
| list                      | 地址列表          | _Address[]_ | `[]`       |
| disabled-list             | 不可配送地址列表  | _Address[]_ | `[]`       |
| disabled-text             | 不可配送提示文案  | _string_    | -          |
| add-button-text           | 底部按钮文字      | _string_    | `新增地址` |
| default-tag-text `v2.3.0` | 默认地址标签文字  | _string_    | -          |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| add | 点击新增按钮时触发 | - |
| edit | 点击编辑按钮时触发 | item: 地址对象，index: 索引 |
| edit-disabled | 点击编辑按钮时触发 | item: 地址对象，index: 索引 |
| delete | 点击删除按钮时触发 | item: 地址对象，index: 索引 |
| delete-disabled | 删除不可配送的地址时触发 | item: 地址对象，index: 索引 |
| click-item | 点击任意地址时触发 | item: 地址对象，index: 索引 |
| click-item-disabled | 点击不可配送的地址时触发 | item: 地址对象，index: 索引 |
| set-default | 点击设为默认时触发 | item: 地址对象，index: 索引 |
| set-default-disabled | 将不可配送的地址设为默认时触发 | item: 地址对象，index: 索引 |

### Address 数据结构

| 键名      | 说明               | 类型               |
| --------- | ------------------ | ------------------ |
| id        | 每条地址的唯一标识 | _number \| string_ |
| name      | 收货人姓名         | _string_           |
| tel       | 收货人手机号       | _number \| string_ |
| address   | 收货地址           | _string_           |
| isDefault | 是否为默认地址     | _boolean_          |

### Slots

| 名称                 | 说明                 | SlotProps               |
| -------------------- | -------------------- | ----------------------- |
| default              | 在列表下方插入内容   | -                       |
| top                  | 在顶部插入内容       | -                       |
| item-bottom `v2.5.0` | 在列表项底部插入内容 | 列表项的值              |
| radioIcon            | 自定义 radio 图标    | checked: 是否为选中状态 |
| edit                 | 自定义编辑 icon      | -                       |
| delete               | 自定义删除 icon      | -                       |

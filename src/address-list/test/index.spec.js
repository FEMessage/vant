import { mount } from '../../../test';
import AddressList from '..';

const list = [
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
];

test('unswitchable', () => {
  const wrapper = mount(AddressList, {
    propsData: {
      list,
      switchable: false,
    },
  });

  expect(wrapper).toMatchSnapshot();
});

test('set-default event', () => {
  const onSetDefault = jest.fn();
  const wrapper = mount(AddressList, {
    propsData: {
      list,
    },
    context: {
      on: {
        'set-default': onSetDefault,
      },
    },
  });

  wrapper.find('.van-radio__icon').trigger('click');

  expect(onSetDefault).toHaveBeenCalledTimes(1);
});

test('click-item event', () => {
  const onClickItem = jest.fn();
  const wrapper = mount(AddressList, {
    propsData: {
      list,
    },
    context: {
      on: {
        'click-item': onClickItem,
      },
    },
  });

  wrapper.find('.van-address-item__content').trigger('click');

  expect(onClickItem).toHaveBeenCalledTimes(1);
});

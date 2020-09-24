// Utils
import { createNamespace } from '../utils';
import { emit, inherit } from '../utils/functional';

// Components
import Button from '../button';
import RadioGroup from '../radio-group';
import AddressItem, { AddressItemData, AddressItemSlots } from './Item';

// Types
import { CreateElement, RenderContext } from 'vue/types';
import { ScopedSlot } from '../utils/types';

export type AddressListProps = {
  value?: string | number;
  disabledText?: string;
  addButtonText?: string;
  list?: AddressItemData[];
  disabledList?: AddressItemData[];
  defaultTagText?: string;
};

export type AddressListSlots = AddressItemSlots & {
  top?: ScopedSlot;
  'item-bottom'?: ScopedSlot;
};

const [createComponent, bem, t] = createNamespace('address-list');

function AddressList(
  h: CreateElement,
  props: AddressListProps,
  slots: AddressListSlots,
  ctx: RenderContext<AddressListProps>
) {
  function genList(list?: AddressItemData[], disabled?: boolean) {
    if (!list) {
      return;
    }

    return list.map((item, index) => (
      <AddressItem
        data={item}
        key={item.id}
        disabled={disabled}
        defaultTagText={props.defaultTagText}
        scopedSlots={{
          bottom: slots['item-bottom'],
          radioIcon: slots.radioIcon,
          edit: slots.edit,
          delete: slots.delete,
        }}
        onEdit={() => {
          emit(ctx, disabled ? 'edit-disabled' : 'edit', item, index);
        }}
        onClick={() => {
          emit(
            ctx,
            disabled ? 'click-item-disabled' : 'click-item',
            item,
            index
          );
        }}
        onDelete={() => {
          emit(ctx, disabled ? 'delete-disabled' : 'delete', item, index);
        }}
        onDefault={() => {
          emit(
            ctx,
            disabled ? 'set-default-disabled' : 'set-default',
            item,
            index
          );

          if (!disabled) {
            emit(ctx, 'input', item.id);
          }
        }}
      />
    ));
  }

  const List = genList(props.list);
  const DisabledList = genList(props.disabledList, true);

  return (
    <div class={bem()} {...inherit(ctx)}>
      {slots.top?.()}
      <RadioGroup value={props.value}>{List}</RadioGroup>
      {props.disabledText && (
        <div class={bem('disabled-text')}>{props.disabledText}</div>
      )}
      {DisabledList}
      {slots.default?.()}
      <div class={bem('bottom')}>
        <Button
          round
          block
          type="danger"
          class={bem('add')}
          text={props.addButtonText || t('add')}
          onClick={() => {
            emit(ctx, 'add');
          }}
        />
      </div>
    </div>
  );
}

AddressList.props = {
  list: Array,
  value: [Number, String],
  disabledList: Array,
  disabledText: String,
  addButtonText: String,
  defaultTagText: String,
};

export default createComponent<AddressListProps>(AddressList);

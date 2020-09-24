// Utils
import { createNamespace } from '../utils';
import { emit, inherit } from '../utils/functional';

// Components
import Tag from '../tag';
import Icon from '../icon';
import Cell from '../cell';
import Radio from '../radio';

// Types
import { CreateElement, RenderContext } from 'vue/types';
import { DefaultSlots, ScopedSlot } from '../utils/types';

export type AddressItemData = {
  id: string | number;
  tel: string | number;
  name: string;
  address: string;
  isDefault: boolean;
};

export type AddressItemProps = {
  data: AddressItemData;
  disabled?: boolean;
  defaultTagText?: string;
};

export type AddressItemSlots = DefaultSlots & {
  bottom?: ScopedSlot;
  radioIcon?: ScopedSlot;
  edit?: ScopedSlot;
  delete?: ScopedSlot;
};

export type AddressItemEvents = {
  onEdit(): void;
  onClick(): void;
  onDelete(): void;
  onDefault(): void;
};

const [createComponent, bem, t] = createNamespace('address-item');

function AddressItem(
  h: CreateElement,
  props: AddressItemProps,
  slots: AddressItemSlots,
  ctx: RenderContext<AddressItemProps>
) {
  const { disabled } = props;

  function onClick() {
    emit(ctx, 'click');
  }

  function onSetDefault() {
    emit(ctx, 'default');
  }

  const genRightIcon = () => (
    <div class={bem('icons-wrapper')}>
      <span
        style="display: flex"
        class={bem('edit')}
        onClick={(event: Event) => {
          event.stopPropagation();
          emit(ctx, 'edit');
        }}
      >
        {slots.edit ? slots.edit() : <Icon name="edit" />}
      </span>
      <span
        style="display: flex"
        class={bem('delete')}
        onClick={(event: Event) => {
          event.stopPropagation();
          emit(ctx, 'delete');
        }}
      >
        {slots.delete ? slots.delete() : <Icon name="delete" />}
      </span>
    </div>
  );

  function genTag() {
    if (props.data.isDefault && props.defaultTagText) {
      return (
        <Tag type="danger" round class={bem('tag')}>
          {props.defaultTagText}
        </Tag>
      );
    }
  }

  function genContent() {
    const { data } = props;
    const Info = [
      <div class={bem('content')} onClick={onClick}>
        <div class={bem('name')}>
          {`${data.name} ${data.tel}`}
          {genTag()}
        </div>
        <div class={bem('address')}>{data.address}</div>
      </div>,
      <div onClick={onSetDefault} class={bem('bar')}>
        <Radio
          name={data.id}
          class={bem('set-default')}
          scopedSlots={{ icon: slots.radioIcon }}
        >
          {t('setDefault')}
        </Radio>
        {genRightIcon()}
      </div>,
    ];

    return Info;
  }

  return (
    <div class={bem({ disabled })}>
      <Cell
        border={false}
        scopedSlots={{
          default: genContent,
        }}
        {...inherit(ctx)}
      />
      {slots.bottom?.({ ...props.data, disabled })}
    </div>
  );
}

AddressItem.props = {
  data: Object,
  disabled: Boolean,
  defaultTagText: String,
};

export default createComponent<AddressItemProps, AddressItemEvents>(
  AddressItem
);

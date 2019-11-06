import { createNamespace } from '../utils';
import Field from '../field';
import ActionSheet from '../action-sheet';
import { stopPropagation } from '../utils/dom/event';

const selectProps = {
  options: {
    type: Array,
    default: () => [],
  },

  sheetAttrs: {
    type: Object,
    default: () => ({}),
  },
};

const fieldSlots = [
  'label',
  'left-icon',
  'right-icon',
  'button',
];

const [createComponent, bem] = createNamespace('select');

export default createComponent({
  props: {
    ...selectProps,
  },

  data() {
    return {
      showSheet: false,
    };
  },

  methods: {
    onCancel($event) {
      stopPropagation($event);
      this.$emit('cancel');
    },

    onSelect(item, index) {
      this.$emit('input', item.name);
      this.$emit('select', item, index);
    },

    triggle(value, $event) {
      stopPropagation($event);
      this.showSheet = value;
    },

    inheritSlots() {
      return fieldSlots.map(slotName => (
        this.slots(slotName) && <template slot={slotName}>
          {this.slots(slotName)}
        </template>
      ));
    },
  },

  render() {
    return (
      <Field
        class={bem()}
        readonly={true}
        onClick={($event) => this.triggle(true, $event)}
        {...{ attrs: this.$attrs }}
        {...{ listeners: this.$listeners }}
      >
        {this.inheritSlots()}
        <ActionSheet
          onClick={stopPropagation}
          class={bem('options')}
          {...{ attrs: this.sheetAttrs }}
          onCancel={this.onCancel}
          onSelect={this.onSelect}
          value={this.showSheet}
          actions={this.options}
          closeOnClickAction={true}
          onInput={this.triggle}
        />
      </Field>
    );
  },
});

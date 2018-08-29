<template>
  <button class="button" :class="[{ active, }, typeClass]">
    <div class="label">{{ label }}</div>
  </button>
</template>

<script lang="ts">
import buttonMixin from '../mixins/button';

export default {
  mixins: [buttonMixin],
  props: {
    label: {
      default: '',
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../styles/button.scss';

$types: direct night normal;

.button {
  font-size: 32px;
  font-weight: 200;
  text-align: left;
  height: 73px;
  width: 200px;
  justify-content: center;
}

.label {
  background-position: center left;
  background-repeat: no-repeat;
  background-size: 32px;
  padding-left: 40px;

}

@each $type in $types {
  .button.type-#{$type} .label {
    background-image: url('../assets/buttons/#{$type}.svg');
  }
}
</style>

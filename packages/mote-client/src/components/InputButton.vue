<template>
  <button class="button" :class="[{ active, }, typeClass]" />
</template>

<script lang="ts">
import buttonMixin from '../mixins/button';

export default {
  mixins: [buttonMixin],
  props: {
    type: {
      default: '',
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../styles/button.scss';

$types: appletv pc ps4 snes switch xboxone;

.button {
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 130px;
  height: 200px;
  width: 200px;
}

@each $type in $types {
  .button.type-#{$type} {
    background-image: url('../assets/buttons/#{$type}.svg');
  }
}

</style>

<template>
  <div class="button-set">
    <InputButton v-for="button in buttons" :key=button.type :type=button.type />
  </div>
</template>

<script lang="ts">
import InputButton from './InputButton.vue';

export default {
  components: {
    InputButton
  },
  data () {
    return {
      buttons: [
        { type: 'appletv' },
        { type: 'snes' },
        { type: 'pc' },
        { type: 'switch' },
        { type: 'ps4' },
        { type: 'xboxone' }
      ]
    };
  }
};
</script>

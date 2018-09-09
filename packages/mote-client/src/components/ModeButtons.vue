<template>
  <div class="button-set">
    <ModeButton v-for="button in buttons"
                :key=button.type
                :label=button.label
                :type=button.type />
  </div>
</template>

<script lang="ts">
import ModeButton from './ModeButton.vue';

export default {
  components: {
    ModeButton
  },
  data () {
    return {
      buttons: [
        { label: 'Normal', type: 'normal' },
        { label: 'Direct', type: 'direct' },
        { label: 'Night', type: 'night' }
      ]
    };
  }
};
</script>

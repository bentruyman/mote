<template>
  <div id="app">
    <div class="button-set inputs">
      <InputButton type="appletv" />
      <InputButton type="snes" />
      <InputButton type="pc" />
      <InputButton type="switch" />
      <InputButton type="ps4" />
      <InputButton type="xboxone" />
    </div>
    <div class="button-set modes">
      <ModeButton label="Normal" type="normal" />
      <ModeButton label="Direct" type="direct" />
      <ModeButton label="Night" type="night" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import InputButton from './components/InputButton.vue';
import ModeButton from './components/ModeButton.vue';

export default Vue.extend({
  components: {
    InputButton,
    ModeButton
  }
});
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
}

#app {
  background-color: #30383D;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  height: 768px;
  width: 1024px;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
}

.button-set {
  width: 624px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.inputs {
  margin-bottom: 20px;
}

.inputs .button {
  margin-bottom: 12px;
}

.modes {
}
</style>

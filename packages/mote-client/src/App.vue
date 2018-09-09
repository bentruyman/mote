<template>
  <div id="app">
    <InputButtons class="inputs" />
    <ModeButtons class="modes" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import InputButtons from './components/InputButtons.vue';
import ModeButtons from './components/ModeButtons.vue';

export default Vue.extend({
  mounted () {
    var source = new EventSource('http://localhost:3001/stream');

    source.addEventListener('message', function (e) {
      console.log({ message: e.data });
    }, false);

    source.addEventListener('open', function (e) {
      console.log('open');
    }, false);

    source.addEventListener('error', function (e) {
      console.log({ error: e });
      if (e.target.readyState === EventSource.CLOSED) {
        console.log('disconnected');
      } else if (e.target.readyState === EventSource.CONNECTING) {
        console.log('connected');
      }
    }, false);
  },
  components: {
    InputButtons,
    ModeButtons
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
  align-content: center;
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

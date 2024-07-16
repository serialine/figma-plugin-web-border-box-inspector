<script lang="ts" setup>
import { useEventListener } from '@vueuse/core'
import { ref } from 'vue'

const title = 'Rectangle Creator'
const count = 5

// methods
function create() {
  window.parent.postMessage({ pluginMessage: { type: 'create-rectangles', count } }, '*')
}
function cancel() {
  window.parent.postMessage({ pluginMessage: { type: 'cancel' } }, '*')
}

const selection = ref('No selection')
useEventListener(window, 'message', (event) => {
  selection.value = event.data.pluginMessage?.[0]?.id || 'No selection'
})
</script>

<template>
  <h2>{{ title }}</h2>
  <p>Selection: {{ selection }}</p>
  <p>Count: <input id="count" v-model="count"></p>
  <button id="create" @click="create()">
    Create
  </button>
  <button id="cancel" @click="cancel()">
    Cancel
  </button>
</template>

<style lang="scss">
</style>

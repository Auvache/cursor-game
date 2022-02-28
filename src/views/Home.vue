<template>
  <div>
    <h1>Welcome to the Cursor Game</h1>
    <p>Move your cursor to the goal to move to the next level</p>
    <p>If you break the rules, you lose</p>
    <p>What counts as breaking the rules?</p>
    <p>I guess you will find out</p>
    <h2>Good luck</h2>
    <router-link to="/1">Start the game</router-link>
  </div>
</template>

<script>
import Level1 from './Level1.vue'
import { ref } from 'vue'

export default {
  name: 'Home',
  components: { Level1 },
  setup() {
    const errorCount = ref(0)

    return { errorCount }
  }
  
  
}
</script>


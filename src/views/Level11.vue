<template>
    <EndModal :isEnd="isEnd" :level="level" />
    <h2>Congrats, that's it so far</h2>
    <p>Don't worry, there is more coming</p>
    <router-link :to="nextLevel" v-if="!isEnd" class="goal">Home</router-link>
    
</template>

<script>
import gameRules from '../functions/gameRules'
import EndModal from '../components/EndModal.vue'

export default {
  components: { EndModal },
  setup() {
    const level = 11

    // TODO: fix navigation
    const nextLevel = '/'
    const { message, isEnd, end } = gameRules(level)

    return { level, message, isEnd, end, nextLevel }
  }
}
</script>

<style scoped>
.goal {
  position: relative;
}

</style>
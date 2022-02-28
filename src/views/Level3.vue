<template>
    <EndModal :isEnd="isEnd" :level="level" />
    <h2>Level {{ level }}</h2>

    <div @mouseleave="end" class="gameboard">
      <p>What does it mean to leave the gameboard?</p>
      <div class="bridge"></div>
      <router-link :to="nextLevel" v-if="!isEnd" class="goal"></router-link>
    </div>
    
</template>

<script>
import gameRules from '../functions/gameRules'
import EndModal from '../components/EndModal.vue'

export default {
  components: { EndModal },
  setup() {
    const level = 3
    const nextLevel = '/' + (level + 1)
    const { message, isEnd, end } = gameRules(level)

    return { level, message, isEnd, end, nextLevel }
  }
}
</script>

<style scoped>
.goal {
  position: absolute;
  left: 105px;
    bottom: -115px;
}

.bridge {
  position: absolute;
  left: 200px;
  bottom: -100px;
  height: 200px;
  width: 20px;
  background: greenyellow;
}
</style>
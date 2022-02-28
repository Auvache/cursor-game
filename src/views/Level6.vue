<template>
    <EndModal :isEnd="isEnd" :level="level" />
    <h2>Level {{ level }}</h2>

    <div @mouseleave="end" class="gameboard">
      <router-link :to="nextLevel" v-if="!isEnd" class="goal"></router-link>
    </div>
    
</template>

<script>
import gameRules from '../functions/gameRules'
import EndModal from '../components/EndModal.vue'

export default {
  components: { EndModal },
  setup() {
    const level = 6
    const nextLevel = '/' + (level + 1)
    const { message, isEnd, end } = gameRules(level)

    return { level, message, isEnd, end, nextLevel }
  }
}
</script>

<style scoped>
.goal {
  margin-top: 40px;
  width: 0;
  height: 0;
  animation-name: size;
  animation-duration: 2s;
  animation-iteration-count: 1;
}

@keyframes size {
  0% {
    width: 0;
    height: 0;
  }
  50% {
    width: 100px;
    height: 100px;
  }
  100% {
    width: 0;
    height: 0;
  }
}

</style>
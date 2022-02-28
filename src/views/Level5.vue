<template>
    <EndModal :isEnd="isEnd" :level="level" />
    <h2>Level {{ level }}</h2>

    <div @mouseleave="end" class="gameboard">
      <p>I hope you stayed out of the gameboard, or are really fast</p>
      <p>I think you've got it. No more talking...</p>
      <router-link :to="nextLevel" v-if="!isEnd" class="goal"></router-link>
    </div>
    
</template>

<script>
import gameRules from '../functions/gameRules'
import EndModal from '../components/EndModal.vue'

export default {
  components: { EndModal },
  setup() {
    const level = 5
    const nextLevel = '/' + (level + 1)
    const { message, isEnd, end } = gameRules(level)

    return { level, message, isEnd, end, nextLevel }
  }
}
</script>

<style scoped>
.goal {
  position: absolute;
  left: 50%;
  bottom: -125px;
}

</style>
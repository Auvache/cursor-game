<template>
    <EndModal :isEnd="isEnd" :level="level" />
    <h2>Level {{ level }}</h2>
    <div @mouseleave="" class="gameboard">
      <router-link :to="nextLevel" v-if="!isEnd" class="goal"></router-link>
      <div class="row">
        <div class="col tile blue"></div>
        <div class="col tile red"></div>
        <div class="col tile orange"></div>
        <div class="col tile blue"></div>
        <div class="col tile blue"></div>
        <div class="col tile blue"></div>
      </div>
      




    </div>
    
</template>

<script>
import gameRules from '../functions/gameRules'
import EndModal from '../components/EndModal.vue'

export default {
  components: { EndModal },
  setup() {
    const level = 7
    const nextLevel = '/' + (level + 1)
    const { message, isEnd, end } = gameRules(level)

    return { level, message, isEnd, end, nextLevel }
  }
}
</script>

<style scoped>
.goal {
  position: absolute;
  left: 25px;
  top: 0;
}

.tile {
  height: 100px;
}

</style>
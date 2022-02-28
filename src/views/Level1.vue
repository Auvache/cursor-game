<template>
    <EndModal :isEnd="isEnd" :level="level" />
    <h2>Level {{ level }}</h2>

    <div @mouseleave="end" class="gameboard">
      <p>Don't leave the gameboard</p>
      <router-link :to="nextLevel" v-if="!isEnd" class="goal">click the goal</router-link>
    </div>
    
</template>

<script>
import gameRules from '../functions/gameRules'
import EndModal from '../components/EndModal.vue'

export default {
  components: { EndModal },
  setup() {
    const level = 1
    const nextLevel = '/' + (level + 1)
    const { message, isEnd, end } = gameRules(level)

    return { level, message, isEnd, end, nextLevel }
  }
}
</script>

<style>
.gameboard {
  width: 1500px;
  height: 1000px;
  max-width: 90%;
  max-height: 60%;
  margin: auto auto 40px;
  box-sizing: border-box;
  border: 1px solid #333;
  position: relative;
  background: #ffffff;
}

.test {
  width: 200px;
  height: 200px;
  margin:  30px;
  background-color: pink;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.goal {
  width: 100px;
  height: 100px;
  margin: auto;
  background-color: #0a6522;
  animation-name: color;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  color: #ffffff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-weight: 700;
}

@keyframes color {
  0% {
    background-color: #0a6522;
  }
  50% {
    background-color: #74b72e;
  }
  100% {
    background-color: #0a6522;
  }
}

</style>
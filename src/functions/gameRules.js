import { ref } from 'vue'

const gameRules = (level) => {
    const message = ref(null)
    const isEnd = ref(false)

    const end = () => {
        isEnd.value = true
        message.value = 'Sorry, you lost at level ' + level + '.Better luck next time'
    }

    return { message, isEnd, end }
}

export default gameRules
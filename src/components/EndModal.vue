<template>
    <div class="end-screen" v-if="isEnd">
        <div class="modal">
            <h3>You only made it to level {{ level }}</h3>
            <p>If only you had followed the rules</p>
            <router-link to="/">Start Over</router-link><br>
        </div>
    </div>
</template>

<script>
export default {
    props: ['level', 'isEnd']
}
</script>

<style>
.end-screen {
    position: absolute;
    width: 100%;
    height: 90%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
}
.modal {
    background: #ffffff;
    border-radius: 20px;
    padding: 100px;

}
</style>
<template>
  <div class="main-Container">
    <div class="topic-style">
        <p>오늘부터 한 달간 시작되는 나의 잠재력 꺼내기</p>
    </div>
    <div class="caption-style">
        <p>아래에 이번 달 목표를 작성하고<br>원하는 목표를 성취하며 잠재력을 이끌어 내보세요.</p>
    </div>
    <div class="form-container">
        <div class="form-style">
            <input v-model="inputGoal">
            <button @click="goToaddGoal">등록하기</button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            inputGoal: '',
        }
    },
    methods: {
        goToaddGoal() {
            return this.$router.push('/login')
        }
    }
}
</script>

<style scoped>
.main-container {
    display: flex;
    align-items: center;
    justify-content: center;
}
.main-container h1 {
    font-size: 2vh;
    color: red;
}
.topic-style {
    margin-top: 17vh;
}
.topic-style p {
    font-size: 3.4vh;
    color: #0b0b0b;
    font-weight: bold;
}
.caption-style {
    margin-top: 4vh;
}
.caption-style p {
    font-size: 2vh;
    color: #0b0b0b;
    font-weight: 400;
}
.form-container {
    margin-top: 12vh;
    display: flex;
    justify-content: center;
}
.form-style {
    background-color: white;
    border-radius: 2rem;
    height: 5vh;
    width: 35vw;
    border: 1px solid #0b0b0b;
    display: flex;
    align-items: center;
}
.form-style input {
    border: none;
    height: 4vh;
    width: 30vw;
    margin-left: 1vw;
    outline: none;
}
.form-style button {
    background-color: #304ffe;
    border-radius: 2rem;
    height: 5vh;
    width: 6vw;
    color: white; 
    font-weight: bold;
    outline: none;
    border: none;
}
</style>
<template>
<div v-if="this.$store.state.UserLogin !== 0" id="user-info">
    <h3>DisplayUser</h3>
    <p>UserDisplay : {{ $store.state.UserDisplay }}</p>
</div>
</template>


<!------------------------------------------------------------------------>
<script>

export default {
    name: 'DisplayUser'
}
</script>


<!------ Add "scoped" attribute to limit CSS to this component only ------>
<style scoped lang="scss">
#user-info {
    margin: 10px auto;
    background-color:rgb(206, 252, 228);
}
h3 { color:rgb(104, 206, 153)}
</style>
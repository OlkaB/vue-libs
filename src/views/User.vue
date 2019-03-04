<template>
    <div class="username">
        <h3>User view - how actions and mutations works (module ver)</h3>
        <p>username: {{ userName }}</p>
        <p>action after 2.5s: <input type="text" v-model="userName"></p>
        <p>user age: {{ userAge }}</p>
        <p>mutation: <input type="text" v-model="userAge"></p>
    </div>
</template>

<script>
export default {
    computed: {
        userName: {
            get () {
                return this.$store.getters.userName
            },
            set (value) {
                this.$store.dispatch('changeUsername', value)
            }
        },
        userAge: {
            get () {
                return this.$store.getters.userAge
            },
            set (value) {
                this.$store.commit('changeAge', value)
            }
        }
    }
}
</script>

<template>
    <div class="username">
        <h3>Basket view</h3>
        <p>total quantity: {{ prodsQuantity }}</p>
        <p>total value: {{ totalValue }}</p>
        <input type="text" v-model="totalValue">
    </div>
</template>

<script>
    export default {
        computed: {
            prodsQuantity () {
                return this.$store.getters.prodsQuantity
            },
            totalValue: {
                get () {
                    return this.$store.getters.totalValue
                },
                set (value) {
                    console.log('Set totalVal: ', value)
                    this.$store.commit('updateTotalValue', value)
                }
            }
        }
    }
</script>

<template>
    <div class="alert" :class="type">
        <h4>
            <slot/>
        </h4>
    </div>
</template>

<script>
export default {
    props: ['type']
}
</script>

<style lang="scss" scoped>
.alert {
    padding: 10px;
    margin-bottom: 20px;
    color: #fff;

    &.alert {
        background-color: red;
    }
    &.warning {
        background-color: orange;
    }
    &.success {
        background-color: green;
    }
    &.info {
        background-color: blue;
    }
}
</style>

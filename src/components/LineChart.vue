<script>
    import { Line, mixins } from 'vue-chartjs'
    const { reactiveProp } = mixins

    export default {
        extends: Line,
        mixins: [reactiveProp],
        props: ['chartdata', 'chartoptions'],
        mounted () {
            this.renderChart(this.chartdata, this.chartoptions)
        }
    }
</script>

<style>
</style>

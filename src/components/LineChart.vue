<script>
    import { Line, mixins } from 'vue-chartjs'
    const { reactiveProp } = mixins

    export default {
        extends: Line,
        mixins: [reactiveProp],
        props: ['chartData', 'chartoptions'],
        watch: {
            chartData () {
                this.$data._chart.update()
            }
        },
        mounted () {
            this.renderChart(this.chartData, this.chartoptions);
        }
    }
</script>

<style>
</style>

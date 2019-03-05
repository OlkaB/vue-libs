<script>
    import { Line, mixins } from 'vue-chartjs'
    const { reactiveProp } = mixins

    export default {
        extends: Line,
        mixins: [reactiveProp],
        props: ['chartdata', 'chartoptions'],
        watch: {
            chartdata () {
                this.$data._chart.update()
            }
        },
        mounted () {
            this.renderChart(this.chartdata, this.chartoptions);
            console.log('this.$data: ', this.$data._chart)
        }
    }
</script>

<style>
</style>

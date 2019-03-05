<template>
    <div class="charts">
        <h3>Charts</h3>
        <LineChart :chartdata="chartdata" :chartoptions="chartoptions" />
    </div>
</template>

<script>
    import LineChart from '@/components/LineChart.vue'

    export default {
        data () {
            return {
                chartdata: {
                    labels: ['January', 'February', 'March', 'April'],
                    datasets: [
                        {
                            label: 'Data One',
                            backgroundColor: '#f87979',
                            data: [40, 50, 10, 20]
                        }
                    ]
                },
                chartoptions: {
                    responsive: true,
                    maintainAspectRatio: false
                }
            }
        },
        components: {
            LineChart
        }
    }
</script>

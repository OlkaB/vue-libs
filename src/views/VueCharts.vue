<template>
  <div class="charts">
    <h3>Charts</h3>
    <div v-if="APIChart.isLoaded" >
        <h4>API chart is loaded</h4>
        <LineChart     
            :chart-data="APIChart.chartdata"
            :chartoptions="APIChart.chartoptions"
        />
    </div>
    <LineChart 
        :chart-data="staticChart.chartdata" :chartoptions="staticChart.chartoptions"
    />
  </div>
</template>

<script>
import LineChart from "@/components/LineChart.vue";

export default {
  data() {
    return {
      staticChart: {
        chartdata: {
          labels: ["January", "February", "March", "April"],
          datasets: [
            {
              label: "Data One",
              backgroundColor: "#f87979",
              data: [40, 50, 10, 20]
            }
          ]
        },
        chartoptions: {
          responsive: true,
          maintainAspectRatio: false
        }
      },
      APIChart: {
        isLoaded: false,
        chartdata: {
          labels: [],
          datasets: [
            {
              label: "Api chart",
              fill: false,
              backgroundColor: "green",
              borderColor: 'green',
              pointHoverRadius: 5,
              data: [],              
            }
          ]
        },
        chartoptions: {
          responsive: true,
          maintainAspectRatio: false
        }
      }
    };
  },
  components: {
    LineChart
  },
  mounted() {
    var self = this;
    this.$http
      .get("http://localhost:3000/lineChartData")
      .then(
        response => {
          self.APIChart.chartdata.labels = response.body.labels;
          self.APIChart.chartdata.datasets[0].data = response.body.data;
          if (self.APIChart.chartdata.datasets[0].data && self.APIChart.chartdata.labels) {
            self.APIChart.isLoaded = true;
          }
        },
        error => {
          console.error("Server response error: ", error);
        }
      );
  }
};
</script>

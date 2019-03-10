<template>
  <div class="charts">
    <div v-if="APIChart.isLoaded" >
        <h3>API data chart</h3>
        <LineChart     
            :chart-data="APIChart.chartdata"
            :chartoptions="APIChart.chartoptions"
        />
    </div>
    <Alert v-else type="info">
        Please wait, loading API chart data... 
    </Alert>
    <Alert v-if="APIChart.isResponseError" type="alert">
        To see chart with data from API please turn on json server (./temp/json-server/readme.md)
    </Alert>
    
    <h3>Static data chart</h3>
    <LineChart 
        :chart-data="staticChart.chartdata" :chartoptions="staticChart.chartoptions"
    />
  </div>
</template>

<script>
import LineChart from "@/components/LineChart.vue";
import Alert from "@/components/Alert.vue";

export default {
  components: {
    LineChart,
    Alert
  },
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
        isResponseError: false,
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
          self.APIChartisResponseError = true;
        }
      );
  }
};
</script>


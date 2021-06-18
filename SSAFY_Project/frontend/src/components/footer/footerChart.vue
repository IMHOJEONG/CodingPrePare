<template>
  <div>
    <canvas id="myChart" width="400" height="400"> </canvas>
  </div>
</template>

<script>
import Chart from "chart.js";
import footerChartData from "./footerChartData.js";
export default {
  name: "footerChart",
  data() {
    return {
      footerChartData: footerChartData,
    };
  },
  mounted() {
    const ctx = document.getElementById("myChart");
    new Chart(ctx, this.footerChartData);
  },
};
</script>
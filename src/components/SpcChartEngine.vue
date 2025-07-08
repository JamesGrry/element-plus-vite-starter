<script setup lang="ts">
import { ref, defineProps } from 'vue';
import * as echarts from 'echarts';
// import { buildChartFromObject } from 'spc-chart-engine'; // 或默认导入
const chartRef = ref();
let chartInstance: echarts.ECharts;
const configProps = defineProps({
    config: {
        type: Object as () => any,
        required: true
    }
})
// console.log(configProps)
function loadData() {
    chartInstance = echarts.init(chartRef.value);
    console.log(configProps?.config)
    // chartInstance.setOption(buildChartFromObject(configProps?.config));
}
const handleVisibility = (isVisible: any) => {
    if (isVisible) {
        // loadData()
    }
};
</script>
<template>
    <div v-viewport="handleVisibility" ref="chartRef" style="width: 100%; height: 400px"></div>
</template>
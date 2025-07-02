<script setup lang="ts">
import { onMounted, ref } from 'vue';
import echarts from '@/utils/echarts'; // 改为导入按需配置的文件

const chartRef = ref();
const chartRef2 = ref();
let chartInstance: echarts.ECharts;

let seriesData: number[] = [];
for (let i = 0; i < 10000; i++) {
    seriesData.push(Math.random() * 800);
}

function loadData() {
    const option = {
        title: {
            text: 'X-Bar 控制图line'
        },
        animation: false,
        xAxis: {
            type: 'category',
            data: seriesData.map((_, i) => `P${i}`)
        },
        yAxis: {
            min: 0,
            max: 800
        },
        tooltip: {
            trigger: 'axis',
            show: true,
            formatter: (params: any) => {
                return (typeof params[0].data === 'object') ? `${params[0].data.value}` : `${params[0].data}`
            }
        },
        series: [
            {
                type: 'line',
                data: seriesData,
                sampling: 'lttb',
            }
        ],

    };
    chartInstance = echarts.init(chartRef.value);
    chartInstance.setOption(option);
}
function loadData2() {
    const option = {
        title: {
            text: 'X-Bar 控制图bar'
        },
        animation: false,
        xAxis: {
            type: 'category',
            data: seriesData.map((_, i) => `P${i}`)
        },
        yAxis: {
            min: 0,
            max: 800
        },
        tooltip: {
            trigger: 'axis',
            show: true,
            formatter: (params: any) => {
                return (typeof params[0].data === 'object') ? `${params[0].data.value}` : `${params[0].data}`
            }
        },
        series: [
            {
                type: 'bar',
                data: seriesData,
                // sampling: 'lttb',
            }
        ],

    };
    chartInstance = echarts.init(chartRef2.value);
    chartInstance.setOption(option);
}
onMounted(() => {
    loadData()
    loadData2()
})

</script>

<template>
    <div ref="chartRef" style="width: 100%; height: 400px"></div>
    <div ref="chartRef2" style="width: 100%; height: 400px"></div>
</template>

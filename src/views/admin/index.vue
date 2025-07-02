<script setup lang="ts">
import SpcChartEngine from '@/components/SpcChartEngine.vue';
import { ref } from 'vue';

let echarNumber = 20;
const number = ref(echarNumber);
const seriesType = [{
    title: "X-Bar 控制图演示line",
    seriesType: "line"
}, {
    title: "X-Bar 控制图演示bar",
    seriesType: "bar"
}]
let data: number[] = [];
for (let i = 0; i < 10000; i++) {
    data.push(Math.random() * 800);
}
let config: any = [];
for (let i = 0; i < echarNumber; i++) {
    config.push({
        type: "xbar",
        title: seriesType[i]?.title??"X-Bar 测试",
        min: 0,
        max: 800,
        data: data,
        rules: ["trend", "above3σ"],
        theme: "dark",
        tooltipMode: "mini",
        axisPolicy: "auto-round",
        plugin: ["anomalyDetector", "spcRulePlugin"],
        performance: {
            lazy: true,
            downsample: true,
            maxPoints: 100,
            transition: false
        },
        seriesType: seriesType[i]?.seriesType ?? "line",
        original: {
            // backgroundColor: "#000",
        }
    })
}
console.log(config);

</script>

<template>
    <div>
        <template v-for="i in number" :key="i">
            <SpcChartEngine :config="config[i - 1]" />
        </template>
    </div>
</template>


// 引入核心模块
import * as echarts from 'echarts/core';
// 引入图表类型
import { BarChart, LineChart } from 'echarts/charts';
// 引入组件
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent
} from 'echarts/components';
// 引入特性
import { LabelLayout, UniversalTransition } from 'echarts/features';
// 引入渲染器
import { CanvasRenderer } from 'echarts/renderers';

// 注册必须的组件
echarts.use([
  BarChart,
  LineChart,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer
]);

export default echarts;

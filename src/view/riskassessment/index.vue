<template>
  <div class="bigscreen_lt">
    <div class="bigscreen_lt_top">
      <div class="bigscreen_lt_top_l">
        <img src="/public/img/光标.png" alt="" />
        <span>环境信息</span>
      </div>
    </div>
    <div class="bigscreen_lt_bottom">
      <div class="bigscreen_lt_bottom_nei">
        <div class="bigscreen_lt_bottom_nei_t">
          <span>描述</span>
          <span>位号</span>
          <span>数值</span>
          <span>时间</span>
        </div>
        <div
          class="bigscreen_lt_bottom_nei_b"
          v-for="(item, index) in environmentFileList"
        >
          <span>{{ `${item?.environment?.description}-${item?.environment?.unitName}` }}</span>
          <span>{{ item?.environment?.tag }}</span>
          <span :class="getValueColorClass(item)" >{{ item.value }}</span>
          <span>{{ item.createTime }}</span>
        </div>
      </div>
    </div>
  </div>
  <div class="bigscreen_lb">
    <div class="bigscreen_lb_top">
      <div class="bigscreen_lb_top_l">
        <img src="/public/img/光标.png" alt="" />
        <span>历史告警统计</span>
      </div>
      <el-radio-group
        v-model="historyStatisticsData.dayType"
        @change="historyStatistics"
        class="group"
      >
        <el-radio-button label="周" value="week" />
        <el-radio-button label="年" value="year" />
      </el-radio-group>
    </div>
    <div class="bigscreen_lb_bottom">
      <div class="bigscreen_lb_bottom_nei" ref="bigscreenLBRef"></div>
    </div>
  </div>
  <center></center>
  <div class="bigscreen_rt">
    <div class="bigscreen_rt_top">
      <div class="bigscreen_rt_top_l">
        <img src="/public/img/光标.png" alt="" />
        <span>区域报警统计</span>
      </div>
      <el-radio-group
        v-model="powerByAreaTotalStaticData.dayType"
        @change="powerByAreaTotalStaticFun"
        class="group"
      >
        <el-radio-button label="周" value="week" />
        <el-radio-button label="年" value="year" />
      </el-radio-group>
    </div>
    <div class="bigscreen_rt_bottom">
      <div class="bigscreen_rt_bottom_nei" ref="bigscreenRTRef"></div>
    </div>
  </div>
  <div class="bigscreen_rb">
    <div class="bigscreen_rb_top">
      <div class="bigscreen_rb_top_l">
        <img src="/public/img/光标.png" alt="" />
        <span>传感器数据</span>
      </div>
    </div>
    <div class="bigscreen_rb_bottom">
      <div class="bigscreen_rb_bottom_nei">
        <div class="bigscreen_rb_bottom_nei_t">
          <span>传感器编号</span>
          <span>传感器名称</span>
          <span>数值</span>
          <span>时间</span>
        </div>
        <div class="bigscreen_rb_bottom_neib">
          <Vue3SeamlessScroll
            :list="equipmentlist"
            :class-option="{
              step: 5,
            }"
            hover
            class="scrool"
          >
            <div
              class="bigscreen_rb_bottom_nei_b"
              v-for="item in equipmentlist"
            >
              <span>
                {{ item.thresholdId }}
              </span>
              <span>{{ item?.threshold.sensorName }}</span>
              <span :style="{color:getEquipmentDataColor(item)}" >{{ item?.equipmentData }}</span>
              <span>{{ dayjs(item?.createTime).format("YYYY-MM-DD hh:mm:ss") }}</span>
            </div>
          </Vue3SeamlessScroll>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, nextTick, onUnmounted } from "vue";
import * as echarts from "echarts";
import {
  environmentalDetectionList,
  environmentalFilesList,
  eventByAreaTotalStatic,
  powerByAreaTotalStatic,
} from "../../api/environment";
import { thresholdDataList, thresholdList } from "../../api/riskassessment";
import { getstatistics } from "../../api/incident";
import center from "../../components/center.vue";
import { Vue3SeamlessScroll } from "vue3-seamless-scroll";
import dayjs from "dayjs";
import { useIntervalFn } from '@vueuse/core'


// 修改获取设备数据颜色的方法
const getEquipmentDataColor = row => {
  if (!row.threshold?.values?.length) return "inherit";

  const value = Number(row.equipmentData);
  const thresholds = row.threshold.values;

  // 按照level等级排序
  const sortedThresholds = [...thresholds].sort((a, b) => {
    const levelA = Number(a.level.replace(/[^0-9]/g, ""));
    const levelB = Number(b.level.replace(/[^0-9]/g, ""));
    return levelB - levelA;
  });

  for (const threshold of sortedThresholds) {
    if (value >= threshold.min && value <= threshold.max) {
      // 根据不同等级返回不同颜色
      switch (threshold.level) {
        case "一级":
          return "#F53F3F"; // 紧急 - 红色
        case "紧急":
          return "#F53F3F"; // 紧急 - 红色
        case "二级":
          return "#FF7D00"; // 重要 - 橙色
        case "重要":
          return "#FF7D00"; // 重要 - 橙色
        case "三级":
          return "#FADC19"; // 一般 - 黄色
        case "中度":
          return "#FADC19"; // 一般 - 黄色
        case "四级":
          return "#168CFF"; // 一般 - 蓝色
        case "一般":
          return "#168CFF"; // 一般 - 绿色
        case "五级":
          return "#00B42A"; // 一般 - 绿色
        case "轻微":
          return "#00B42A"; // 一般 - 绿色

        default:
          return "#168CFF";
      }
    }
  }

  return "inherit";
};

//环境信息
const environmentFileFormData = ref({
  pageNum: 1,
  pageSize: 10,
  orderColumn: "createTime",
  orderDirection: "descending",
  // startTime:dayjs().format("YYYY-MM-DD"),
  // endTime:dayjs().add(1,"day").format("YYYY-MM-DD")
});
const environmentFileList = ref<any[]>([]);
const environmentFileFun = async () => {
  // environmentFileFormData.value.startTime = dayjs().format("YYYY-MM-DD");
  // environmentFileFormData.value.endTime = dayjs().add(1,"day").format("YYYY-MM-DD")
  const { data } = await environmentalDetectionList(environmentFileFormData.value);
  console.log("aaaa",data)
  let list = data.data.rows.slice(0, 9);
  environmentFileList.value = list.map((item, index) => {
    return {
      ...item,
      status: false,
    };
  });
};

// 修改 getValueColorClass 方法
const getValueColorClass = row => {
  const value = row.value;
  const alarmLevels = row.environment?.alarmlevels || [];
  console.log("alarmLevels",row)
  for (const level of alarmLevels) {
    if (value >= level.min && value <= level.max) {
      switch (level.level) {
        case "一级":
        case "紧急":
          return "text-urgent";
        case "二级":
        case "重要":
          return "text-important";
        case "三级":
        case "中度":
          return "text-warning";
        case "四级":
        case "一般":
          return "text-info";
        case "五级":
        case "轻微":
          return "text-success";
        default:
          return "";
      }
    }
  }
  return "text-info"; // 默认颜色
};

const environmentFileTimer = useIntervalFn(() => {
  environmentFileTimer.pause();
  environmentFileFun().finally(()=>{
    environmentFileTimer.resume();
  })
}, 5000)

//历史告警统计
let bigscreenLBChart: any = null;
const bigscreenLBRef = ref();
const bigscreenLBoption = {
  grid: {
    left: "6%",
    right: "6%",
    bottom: "6%",
    containLabel: true,
  },
  xAxis: {
    type: "category",
    data: [],
    axisLabel: {
      color: "#ffffff",
    },
  },
  yAxis: {
    type: "value",
    splitLine: {
      lineStyle: {
        type: "dashed",
        color: "rgba(255,255,255,0.14)",
      },
    },
    axisLabel: {
      color: "#ffffff",
    },
  },
  tooltip: {
					trigger: 'axis', //坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用
					axisPointer: {// 坐标轴指示器，坐标轴触发有效
						type: 'line' // 默认为直线，可选为：'line' | 'shadow'
					}
  },
  series: [
    {
      data: [],
      type: "bar",
      itemStyle: {
        color: "#68B1A6", // 线条颜色
      },
    },
  ],
};
const historyStatisticsData = ref({
  dayType: "week",
});
const historyStatistics = async () => {
  const { data } = await getstatistics({
    dayType: historyStatisticsData.value.dayType,
  });

  let sum = new Array(data.data[0].times.length).fill(0);
  sum.forEach((item) => {
    data.data.forEach((value) => {
      value.data.forEach((d, i) => {
        sum[i] += d;
      });
    });
  });
  bigscreenLBoption.xAxis.data = data.data[0].times;
  bigscreenLBoption.series[0].data = sum;
  if (bigscreenLBRef.value) {
    bigscreenLBChart = echarts.init(bigscreenLBRef.value);
    bigscreenLBChart.setOption(bigscreenLBoption);
  }
};

//设备数据
const equipmentFormData = ref({
  pageNum: 1,
  pageSize: 20,
  orderColumn: "createTime",
  orderDirection: "descending",
});
const equipmentlist = ref<any[]>([]);
const equipmentListFun = async () => {
  // const { data } = await thresholdList(equipmentFormData.value);
  // let list = data.data.rows;
  // equipmentlist.value = list;
  const {data} = await thresholdDataList(equipmentFormData.value);
  console.log("dadad",data)
  let list = data.data.rows;
  equipmentlist.value = list;
};

const equipmentListTimer = useIntervalFn(()=>{
  equipmentListTimer.pause();
  equipmentListFun().finally(()=>{
    equipmentListTimer.resume();
  })
},5000)

let bigscreenRTChart: any = null;
const bigscreenRTRef = ref();

const bigscreenRToption = {
  grid: {
    left: "6%",
    right: "6%",
    bottom: "6%",
    containLabel: true,
  },
  tooltip: {
					trigger: 'axis', //坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用
					axisPointer: {// 坐标轴指示器，坐标轴触发有效
						type: 'line' // 默认为直线，可选为：'line' | 'shadow'
					}
  },
  xAxis: {
    type: "category",
    data: [],
    axisLabel: {
      color: "#ffffff",
    },
  },
  yAxis: {
    type: "value",
    nameTextStyle: {
      color: "#ffffff",
      padding: [0, 30, 5, 0],
    },
    splitLine: {
      lineStyle: {
        type: "dashed",
        color: "rgba(255,255,255,0.14)",
      },
    },
    axisLabel: {
      color: "#ffffff",
    },
  },
  series: [
    {
      data: [],
      type: "bar",
      itemStyle: {
        color: "#68B1A6", // 线条颜色
      },
    },
  ],
};
const powerByAreaTotalStaticData = ref({
  des: "",
  dayType: "week",
  type: "电",
});
const powerByAreaTotalStaticFun = async () => {
  const { data } = await eventByAreaTotalStatic(
    powerByAreaTotalStaticData.value
  );
  bigscreenRToption.xAxis.data = data.data.times;
  bigscreenRToption.series[0].data = data.data.data;
  if (bigscreenRTRef.value) {
    bigscreenRTChart = echarts.init(bigscreenRTRef.value);
    bigscreenRTChart.setOption(bigscreenRToption);
  }
};

window.onresize = function () {
  bigscreenLBChart.resize();
  bigscreenRTChart.resize();
};

onMounted(() => {
  equipmentListFun();
  environmentFileFun();
  historyStatistics();
  powerByAreaTotalStaticFun();
});

onUnmounted(()=>{
  environmentFileTimer.pause();
})
</script>

<style lang="scss" scoped>
$design-width: 1920;
$design-height: 1080;

@function adaptiveWidth($px) {
  @return #{$px / $design-width * 100}vw;
}

@function adaptiveHeight($px) {
  @return #{$px / $design-height * 100}vh;
}

@function adaptiveFontSize($px) {
  @return #{$px / $design-width * 100}vw;
}

.text-urgent {
  color: #f53f3f !important;
}
.text-important {
  color: #ff7d00 !important;
}
.text-warning {
  color: #fadc19 !important;
}
.text-info {
  color: #168cff !important;
}
.text-success {
  color: #00b42a !important;
}

.bigscreen_lt,
.bigscreen_lb,
.bigscreen_rt,
.bigscreen_rb {
  width: adaptiveWidth(443);
  height: adaptiveHeight(445);
}
.bigscreen_lt {
  position: absolute;
  top: adaptiveHeight(91);
  left: adaptiveWidth(26);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .bigscreen_lt_top {
    width: 100%;
    height: adaptiveHeight(40);
    background: url("/public/img/背景-上层(1).gif") no-repeat;
    background-size: 110% 110%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .bigscreen_lt_top_l {
      display: flex;
      align-items: center;
      img {
        margin-left: adaptiveWidth(11);
      }
      span {
        font-weight: 600;
        font-size: adaptiveFontSize(16);
        text-align: center;
        font-style: normal;
        text-transform: none;
        background: linear-gradient(
          to bottom,
          #c7e5fd 42%,
          #3582c7 100%
        ); /* 渐变背景 */
        background-clip: text; /* 让背景应用到文本 */
        -webkit-text-fill-color: transparent; /* 使文本颜色透明 */
        padding-left: adaptiveWidth(10);
      }
    }
    .bigscreen_lt_top_r {
      color: #ffffff;
      font-size: adaptiveFontSize(14);
      margin-right: adaptiveWidth(11);
      cursor: pointer;
    }
  }
  .bigscreen_lt_bottom {
    width: 100%;
    height: adaptiveHeight(406);
    margin-top: adaptiveHeight(5);
    background: url("/public/img/bigback.png") no-repeat;
    background-size: 100% 100%;
    .bigscreen_lt_bottom_nei {
      width: adaptiveWidth(407);
      margin: 0 auto;
      .bigscreen_lt_bottom_nei_t {
        width: 100%;
        height: adaptiveHeight(30);
        margin-top: adaptiveHeight(15);
        background: url("/public/img/equipment/tabletop.png") no-repeat;
        background-size: 100% 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        span {
          width: 33%;
          color: #9eabb7;
          font-size: adaptiveFontSize(14);
          text-align: center;
        }
      }
      .bigscreen_lt_bottom_nei_b {
        width: 100%;
        height: adaptiveHeight(33);
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: adaptiveHeight(5);
        cursor: pointer;
        span {
          width: 33%;
          color: #ffffff;
          font-size: adaptiveFontSize(12);
          text-align: center;
          white-space: nowrap; /* 禁止换行 */
          overflow: hidden; /* 超出内容隐藏 */
          text-overflow: ellipsis; /* 显示省略号 */
        }
      }
    }
  }
}

.bigscreen_lb {
  position: absolute;
  bottom: adaptiveHeight(85);
  left: adaptiveWidth(26);
  .bigscreen_lb_top {
    width: 100%;
    height: adaptiveHeight(40);
    background: url("/public/img/背景-上层(1).gif") no-repeat;
    background-size: 110% 110%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .bigscreen_lb_top_l {
      display: flex;
      align-items: center;
      img {
        margin-left: adaptiveWidth(11);
      }
      span {
        font-weight: 600;
        font-size: adaptiveFontSize(16);
        text-align: center;
        font-style: normal;
        text-transform: none;
        background: linear-gradient(
          to bottom,
          #c7e5fd 42%,
          #3582c7 100%
        ); /* 渐变背景 */
        background-clip: text; /* 让背景应用到文本 */
        -webkit-text-fill-color: transparent; /* 使文本颜色透明 */
        padding-left: adaptiveWidth(10);
      }
    }
  }
  .bigscreen_lb_bottom {
    width: 100%;
    height: adaptiveHeight(406);
    margin-top: adaptiveHeight(5);
    background: url("/public/img/bigback.png") no-repeat;
    background-size: 100% 100%;
    .bigscreen_lb_bottom_nei {
      width: 100%;
      height: 100%;
    }
  }
}

.bigscreen_rt {
  position: absolute;
  top: adaptiveHeight(91);
  right: adaptiveWidth(26);
  .bigscreen_rt_top {
    width: 100%;
    height: adaptiveHeight(40);
    background: url("/public/img/背景-上层(1).gif") no-repeat;
    background-size: 110% 110%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .bigscreen_rt_top_l {
      display: flex;
      align-items: center;
      img {
        margin-left: adaptiveWidth(11);
      }
      span {
        font-weight: 600;
        font-size: adaptiveFontSize(16);
        text-align: center;
        font-style: normal;
        text-transform: none;
        background: linear-gradient(
          to bottom,
          #c7e5fd 42%,
          #3582c7 100%
        ); /* 渐变背景 */
        background-clip: text; /* 让背景应用到文本 */
        -webkit-text-fill-color: transparent; /* 使文本颜色透明 */
        padding-left: adaptiveWidth(10);
      }
    }
  }
  .bigscreen_rt_bottom {
    width: 100%;
    height: adaptiveHeight(406);
    margin-top: adaptiveHeight(5);
    background: url("/public/img/bigback.png") no-repeat;
    background-size: 100% 100%;
    position: relative;
    .bigscreen_rt_bottom_nei {
      width: 100%;
      height: 100%;
    }
  }
}

.bigscreen_rb {
  position: absolute;
  bottom: adaptiveHeight(85);
  right: adaptiveWidth(26);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .bigscreen_rb_top {
    width: 100%;
    height: adaptiveHeight(40);
    background: url("/public/img/背景-上层(1).gif") no-repeat;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-size: 110% 110%;
    .bigscreen_rb_top_l {
      display: flex;
      align-items: center;
      img {
        margin-left: 11px;
      }
      span {
        font-weight: 600;
        font-size: adaptiveFontSize(16);
        text-align: center;
        font-style: normal;
        text-transform: none;
        background: linear-gradient(
          to bottom,
          #c7e5fd 42%,
          #3582c7 100%
        ); /* 渐变背景 */
        background-clip: text; /* 让背景应用到文本 */
        -webkit-text-fill-color: transparent; /* 使文本颜色透明 */
        padding-left: adaptiveWidth(10);
      }
    }

    .bigscreen_rb_top_r {
      display: flex;
      align-items: center;
      margin-right: 11px;
    }
  }
  .bigscreen_rb_bottom {
    width: 100%;
    height: adaptiveHeight(406);
    margin-top: adaptiveHeight(5);
    background: url("/public/img/bigback.png") no-repeat;
    background-size: 100% 100%;
    .bigscreen_rb_bottom_nei {
      width: adaptiveWidth(407);
      margin: 0 auto;
      .bigscreen_rb_bottom_nei_t {
        width: 100%;
        height: adaptiveHeight(30);
        margin-top: adaptiveHeight(15);
        background: url("/public/img/equipment/tabletop.png") no-repeat;
        background-size: 100% 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        span {
          width: 25%;
          color: #9eabb7;
          font-size: adaptiveFontSize(14);
          text-align: center;
        }
      }
      .bigscreen_rb_bottom_neib {
        width: 100%;
        height: adaptiveHeight(350);
        overflow: hidden;
        .bigscreen_rb_bottom_nei_b {
          width: 100%;
          height: adaptiveHeight(33);
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: adaptiveHeight(5);
          span {
            width: 25%;
            color: #ffffff;
            font-size: adaptiveFontSize(12);
            white-space: nowrap; /* 禁止换行 */
            overflow: hidden; /* 超出内容隐藏 */
            text-overflow: ellipsis; /* 显示省略号 */
            text-align: center;
          }
        }
      }
    }
  }
}

.ltDialog {
  width: adaptiveWidth(440);
  height: adaptiveHeight(280);
  background: url("/public/img/弹窗背景.png") no-repeat;
  background-size: 100% 100%;
  position: absolute;
  top: adaptiveHeight(100);
  left: adaptiveWidth(480);
  z-index: 10;
  .ltDialog_top {
    width: 100%;
    height: adaptiveHeight(45);
    display: flex;
    align-items: center;
    justify-content: space-between;
    span {
      font-size: adaptiveFontSize(20);
      color: #ffffff;
      padding-left: adaptiveWidth(15);
      font-family: youshe;
    }
    img {
      width: adaptiveWidth(8);
      height: adaptiveHeight(8);
      padding-right: adaptiveWidth(10);
      cursor: pointer;
    }
  }
  .ltDialog_bottom {
    width: adaptiveWidth(420);
    height: adaptiveHeight(215);
  }
}

:deep(.selectcss) {
  .el-select__wrapper {
    background-color: transparent !important;
  }
  .el-select__placeholder {
    color: #ffffff !important;
  }

  .el-select__selected-item {
    color: #ffffff !important;
  }
}

.inputcss :deep(.el-input__wrapper) {
  background-color: rgba(255, 255, 255, 0);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: none;
}
.scroll {
  height: adaptiveHeight(195);
  width: 100%;
  overflow: hidden;
}

.group {
  margin-right: adaptiveWidth(11);
}
.group
  :deep(
    .el-radio-button.is-active
      .el-radio-button__original-radio:not(:disabled)
      + .el-radio-button__inner
  ) {
  background: rgba(255, 255, 255, 0.8);
  color: rgba(7, 36, 57, 1);
  border-color: rgba(255, 255, 255, 0);
  font-size: adaptiveFontSize(12);
}
.group :deep(.el-radio-button .el-radio-button__inner) {
  padding: adaptiveWidth(2) adaptiveHeight(6);
  background: rgba(255, 255, 255, 0);
  border-color: rgba(255, 255, 255, 0);
  font-size: adaptiveFontSize(12);
  border-radius: 2px;
}
</style>

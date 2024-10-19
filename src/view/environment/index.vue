<template>
  <div class="bigscreen_lt">
    <div class="bigscreen_lt_top">
      <div class="bigscreen_lt_top_l">
        <img src="/src/assets/img/光标.png" alt="" />
        <span>数据展示</span>
      </div>
    </div>
    <div class="bigscreen_lt_bottom">
      <div class="bigscreen_lt_bottom_nei" v-for="item in list">
        <div class="bigscreen_lt_bottom_nei_shang">
          <img :src="item.img" alt="" />
          <span>{{ item.type }}</span>
          <span>{{ item.value }}</span>
          <span>{{ item.unit }}</span>
          <span>{{ item.equipment }}</span>
          <span>{{ item.model }}</span>
        </div>
        <div class="bigscreen_lt_bottom_nei_xia"></div>
      </div>
    </div>
  </div>
  <div class="bigscreen_lb">
    <div class="bigscreen_lb_top">
      <div class="bigscreen_lb_top_l">
        <img src="/src/assets/img/光标.png" alt="" />
        <span>当前总功耗</span>
      </div>
      <el-input
        class="inputcss"
        style="width: 148px; height: 24px; margin-right: 11px"
        placeholder="请输入监控报告"
        :prefix-icon="Search"
      />
    </div>
    <div class="bigscreen_lb_bottom">
      <div class="bigscreen_lb_bottom_nei" ref="bigscreenLBRef"></div>
    </div>
  </div>
  <center></center>
  <div class="bigscreen_rt">
    <div class="bigscreen_rt_top">
      <div class="bigscreen_rt_top_l">
        <img src="/src/assets/img/光标.png" alt="" />
        <span>历史功耗</span>
      </div>
    </div>
    <div class="bigscreen_rt_bottom"></div>
  </div>
  <div class="bigscreen_rb">
    <div class="bigscreen_rb_top">
      <div class="bigscreen_rb_top_l">
        <img src="/src/assets/img/光标.png" alt="" />
        <span>趋势变化</span>
      </div>
      <div
        style="
          width: 65px;
          height: 24px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          margin-right: 11px;
          display: flex;
          align-items: center;
          justify-content: center;
        "
      >
        <el-radio-group v-model="radio1" class="group">
          <el-radio-button label="周" value="zhou" />
          <el-radio-button label="日" value="ri" />
        </el-radio-group>
      </div>
    </div>
    <div class="bigscreen_rb_bottom">
      <div class="bigscreen_rb_bottom_nei" ref="bigscreenRBRef"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import * as echarts from "echarts";
// import { BorderBox1 } from "@dataview/datav-vue3/es";
import { Search } from "@element-plus/icons-vue";
import { Vue3SeamlessScroll } from "vue3-seamless-scroll";
import center from "../../components/center.vue";

const radio1 = ref("zhou");
const list = ref([
  {
    img: "/src/assets/img/environment/温度.png",
    type: "温度",
    value: "19.28",
    unit: "℃",
    equipment: "QC培养箱1",
    model: "EMSNS-BX1-TT01",
  },
  {
    img: "/src/assets/img/environment/湿度.png",
    type: "湿度",
    value: "55",
    unit: "%",
    equipment: "QC加湿器",
    model: "EMSNS-BX1-TT01",
  },
  {
    img: "/src/assets/img/environment/压差.png",
    type: "压差",
    value: "110",
    unit: "Pa",
    equipment: "排风过滤器1",
    model: "EMSNS-BX1-TT01",
  },
  {
    img: "/src/assets/img/environment/温度.png",
    type: "温度",
    value: "51.7",
    unit: "℃",
    equipment: "QC冰箱",
    model: "EMSNS-BX1-TT01",
  },
]);

const list2 = ref([
  {
    background: "/src/assets/img/红色背景框.png",
    text: "《WHO实验室生物安全手册 (第四版)》",
  },
  {
    background: "/src/assets/img/绿色背景框.png",
    text: "《WHO实验室生物安全手册 (第四版)》",
  },
  {
    background: "/src/assets/img/黄色背景框.png",
    text: "《WHO实验室生物安全手册 (第四版)》",
  },
]);

const bigscreenLBRef = ref();
const bigscreenLBoption = {
  grid: {
    left: "60px",
    top: "40px",
    bottom: "40px",
  },

  xAxis: {
    type: "category",
    data: ["01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00"],
  },
  yAxis: {
    type: "value",
    splitLine: {
      show: true, //让网格显示
      lineStyle: {
        //网格样式
        color: ["rgba(255, 255, 255, 0.15)"], //网格的颜色
        width: 2, //网格的宽度
        type: "dashed", //网格是实实线，可以修改成虚线以及其他的类型
      },
    },
  },
  series: [
    {
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: "line",
      smooth: true,
      symbol: "none",
      lineStyle: {
        color: "rgba(61, 230, 255, 1)", // 线条颜色
      },
      areaStyle: {
        color: {
          type: "linear",
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: "rgba(61, 230, 255, 0.60)", // 0% 处的颜色
            },
            {
              offset: 1,
              color: "rgba(61, 230, 255, 0)", // 100% 处的颜色
            },
          ],
          global: false, // 缺省为 false
        },
      },
    },
  ],
};

let bigscreenRBChart: any = null;
const bigscreenRBRef = ref();

const bigscreenRBoption = {
  grid: {
    left: "60px",
    top: "40px",
    bottom: "40px",
  },

  xAxis: {
    type: "category",
    data: ["01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00"],
  },
  yAxis: {
    type: "value",
    splitLine: {
      show: true, //让网格显示
      lineStyle: {
        //网格样式
        color: ["rgba(255, 255, 255, 0.15)"], //网格的颜色
        width: 2, //网格的宽度
        type: "dashed", //网格是实实线，可以修改成虚线以及其他的类型
      },
    },
  },
  series: [
    {
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: "line",
      smooth: true,
      symbol: "none",
      lineStyle: {
        color: "rgba(25,100,238, 1)", // 线条颜色
      },
      areaStyle: {
        color: {
          type: "linear",
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: "rgba(25,100,238, 0.60)", // 0% 处的颜色
            },
            {
              offset: 1,
              color: "rgba(25,100,238, 0)", // 100% 处的颜色
            },
          ],
          global: false, // 缺省为 false
        },
      },
    },
  ],
};

onMounted(() => {
  if (bigscreenLBRef.value) {
    const bigscreenLBChart = echarts.init(bigscreenLBRef.value);
    bigscreenLBChart.setOption(bigscreenLBoption);
  }

  if (bigscreenRBRef.value) {
    bigscreenRBChart = echarts.init(bigscreenRBRef.value);
    bigscreenRBChart.setOption(bigscreenRBoption);
  }
});
</script>

<style lang="scss" scoped>
.bigscreen_lt,
.bigscreen_lb,
.bigscreen_rt,
.bigscreen_rb {
  width: 443px;
  height: 445px;
}
.bigscreen_lt {
  position: absolute;
  top: 91px;
  left: 26px;
  .bigscreen_lt_top {
    width: 100%;
    height: 34px;
    background: url("/src/assets/img/背景-上层(1).gif") no-repeat;
    background-size: 100% 100%;
    display: flex;
    align-items: center;
    .bigscreen_lt_top_l {
      display: flex;
      align-items: center;
      img {
        margin-left: 11px;
      }
      span {
        font-weight: 600;
        font-size: 16px;
        line-height: 19px;
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
        padding-left: 10px;
      }
    }
  }
  .bigscreen_lt_bottom {
    width: 100%;
    height: 406px;
    margin-top: 5px;
    background: url("/src/assets/img/背景下层.png") no-repeat;
    background-size: 100% 100%;
    display: flex;
    .bigscreen_lt_bottom_nei {
      width: 95px;
      height: 300px;

      position: relative;
      background: linear-gradient(
        180deg,
        rgba(10, 49, 89, 0) 0%,
        rgba(10, 49, 89, 0.41) 13%,
        rgba(13, 62, 102, 0.64) 24%,
        rgba(14, 60, 109, 0.7) 50%,
        rgba(11, 54, 97, 0.55) 79%,
        rgba(11, 54, 97, 0.46) 86%,
        rgba(10, 49, 89, 0) 100%
      );
      .bigscreen_lt_bottom_nei_shang {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: absolute;
        z-index: 2;
      }
      .bigscreen_lt_bottom_nei_xia {
        width: 100%;
        height: 115px;
        position: absolute;
        bottom: 0;
        background: url("/src/assets/img/environment/底座.png") no-repeat;
        background-position: 0 39px;
        z-index: 1;
      }
      &:nth-child(1) {
        margin-top: 37px;
        margin-left: 15px;
      }
      &:nth-child(2) {
        margin-top: 77px;
        margin-left: 10px;
      }
      &:nth-child(3) {
        margin-top: 37px;
        margin-left: 10px;
      }
      &:nth-child(4) {
        margin-top: 77px;
        margin-left: 10px;
      }
      span {
        color: #ffffff;
        &:nth-child(2) {
          font-size: 23px;
          padding-top: 32px;
        }
        &:nth-child(3) {
          font-size: 20px;
          padding-top: 5px;
          color: #f96168;
        }
        &:nth-child(4) {
          font-size: 20px;
          padding-top: 5px;
        }
        &:nth-child(5) {
          font-size: 15px;
          padding-top: 20px;
        }
        &:nth-child(6) {
          text-align: center;
          font-size: 12px;
          // padding-top: 10px;
          padding: 5px 10px 0;
        }
      }
    }
  }
}

.bigscreen_lb {
  position: absolute;
  bottom: 85px;
  left: 26px;
  .bigscreen_lb_top {
    width: 100%;
    height: 34px;
    background: url("/src/assets/img/背景-上层(1).gif") no-repeat;
    background-size: 100% 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .bigscreen_lb_top_l {
      display: flex;
      align-items: center;
      img {
        margin-left: 11px;
      }
      span {
        font-weight: 600;
        font-size: 16px;
        line-height: 19px;
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
        padding-left: 10px;
      }
    }
  }
  .bigscreen_lb_bottom {
    width: 100%;
    height: 406px;
    margin-top: 5px;
    background: url("/src/assets/img/背景下层.png") no-repeat;
    background-size: 100% 100%;
    .bigscreen_lb_bottom_nei {
      width: 100%;
      height: 100%;
    }
  }
}

.bigscreen_rt {
  position: absolute;
  top: 91px;
  right: 26px;
  .bigscreen_rt_top {
    width: 100%;
    height: 34px;
    background: url("/src/assets/img/背景-上层(1).gif") no-repeat;
    background-size: 100% 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .bigscreen_rt_top_l {
      display: flex;
      align-items: center;
      img {
        margin-left: 11px;
      }
      span {
        font-weight: 600;
        font-size: 16px;
        line-height: 19px;
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
        padding-left: 10px;
      }
    }
  }
  .bigscreen_rt_bottom {
    width: 100%;
    height: 406px;
    margin-top: 5px;
    background: url("/src/assets/img/背景下层.png") no-repeat;
    background-size: 100% 100%;
    .bigscreen_rt_bottom_nei {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      img {
        width: 126px;
        height: 176px;
        margin-right: 28px;
      }
      .bigscreen_rt_bottom_r {
        width: 218px;
        height: 167px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        div {
          width: 100%;
          height: 41px;
          background: url("/src/assets/img/半透明背景1.png") no-repeat;
          background-size: 100% 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          span {
            font-size: 14px;
            color: rgba(255, 255, 255, 1);
            margin-left: 10px;
          }
        }
      }
    }
  }
}

.bigscreen_rb {
  position: absolute;
  bottom: 85px;
  right: 26px;
  .bigscreen_rb_top {
    width: 100%;
    height: 34px;
    background: url("/src/assets/img/背景-上层(1).gif") no-repeat;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-size: 100% 100%;
    .bigscreen_rb_top_l {
      display: flex;
      align-items: center;
      img {
        margin-left: 11px;
      }
      span {
        font-weight: 600;
        font-size: 16px;
        line-height: 19px;
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
        padding-left: 10px;
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
    height: 406px;
    margin-top: 5px;
    background: url("/src/assets/img/背景下层.png") no-repeat;
    background-size: 100% 100%;
    .bigscreen_rb_bottom_nei {
      width: 100%;
      height: 100%;
    }
  }
}

.inputcss :deep(.el-input__wrapper) {
  background-color: rgba(255, 255, 255, 0);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: none;
}
.scroll {
  height: 195px;
  width: 100%;
  overflow: hidden;
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
  font-size: 12px;
}
.group :deep(.el-radio-button .el-radio-button__inner) {
  padding: 2px 8px;
  background: rgba(255, 255, 255, 0);
  border-color: rgba(255, 255, 255, 0);
  font-size: 12px;
  border-radius: 2px;
}
</style>

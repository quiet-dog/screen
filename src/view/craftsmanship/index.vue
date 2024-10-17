<template>
  <div class="bigscreen_lt">
    <div class="bigscreen_lt_top">
      <div class="bigscreen_lt_top_l">
        <img src="/src/assets/img/光标.png" alt="" />
        <span>报警信息</span>
      </div>
    </div>
    <div class="bigscreen_lt_bottom"></div>
  </div>
  <div class="bigscreen_lb">
    <div class="bigscreen_lb_top">
      <div class="bigscreen_lb_top_l">
        <img src="/src/assets/img/光标.png" alt="" />
        <span>工艺节点</span>
      </div>
      <el-input
        class="inputcss"
        style="width: 148px; height: 24px; margin-right: 11px"
        placeholder="请输入监控报告"
        :prefix-icon="Search"
      />
    </div>
    <div class="bigscreen_lb_bottom"></div>
  </div>
  <center></center>
  <div class="bigscreen_rt">
    <div class="bigscreen_rt_top">
      <div class="bigscreen_rt_top_l">
        <img src="/src/assets/img/光标.png" alt="" />
        <span>工艺要素</span>
      </div>
    </div>
    <div class="bigscreen_rt_bottom"></div>
  </div>
  <div class="bigscreen_rb">
    <div class="bigscreen_rb_top">
      <div class="bigscreen_rb_top_l">
        <img src="/src/assets/img/光标.png" alt="" />
        <span>工艺档案</span>
      </div>
    </div>
    <div class="bigscreen_rb_bottom">
      <div class="bigscreen_rb_bottom_nei">
        <div
          class="bigscreen_rb_bottom_nei_item"
          v-for="(item, index) in list2"
        >
          <div style="color: #ffffff; display: flex; align-items: center">
            <div
              :style="{
                width: '13px',
                height: '13px',
                border: `1px solid ${index % 2 === 0 ? '#01D1E7' : '#DF9819'}`,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '0 15px',
              }"
            >
              <div
                :style="{
                  width: '5px',
                  height: '5px',
                  background: index % 2 === 0 ? '#01D1E7' : '#DF9819',
                }"
              ></div>
            </div>
            {{ item.code }}
          </div>
          <div style="color: #ffffff">{{ item.time }}</div>
          <div
            :style="{
              color: index % 2 === 0 ? '#01D1E7' : '#DF9819',
              marginRight: '15px',
            }"
          >
            {{ item.name }}
          </div>
        </div>
      </div>
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
    name: "物料A库存异常",
    img: "/src/assets/img/黄色.png",
    status: "物料报警",
  },
  {
    name: "设备一监测数据异常",
    img: "/src/assets/img/绿色.png",
    status: "设备报警",
  },
  {
    name: "XXX产品出现质量问题",
    img: "/src/assets/img/红色.png",
    status: "质量问题",
  },
  {
    name: "XXX发生安全事故",
    img: "/src/assets/img/蓝色.png",
    status: "事故问题",
  },
]);

const list2 = ref([
  { code: "编号1", time: "2024-10-11", name: "徐凯品" },
  { code: "编号1", time: "2024-10-11", name: "徐凯品" },
  { code: "编号1", time: "2024-10-11", name: "徐凯品" },
  { code: "编号1", time: "2024-10-11", name: "徐凯品" },
  { code: "编号1", time: "2024-10-11", name: "徐凯品" },
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
    data: ["07-21", "07-22", "07-23", "07-24", "07-25", "07-26", "07-27"],
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
              color: "rgba(54, 161, 255, 0.60)", // 0% 处的颜色
            },
            {
              offset: 1,
              color: "rgba(25, 104, 255, 0)", // 100% 处的颜色
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
  legend: {
    data: [
      {
        name: "设备报警",
        itemStyle: { color: "RGBA(255, 169, 19, 1)" },
      },
      {
        name: "环境数据",
        itemStyle: { color: "RGBA(225, 110, 122, 1)" },
      },
      {
        name: "物料数据",
        itemStyle: { color: "RGBA(65, 195, 142, 1)" },
      },
      {
        name: "工艺节点",
        itemStyle: { color: "RGBA(210, 114, 255, 1)" },
      },
    ],
    top: "10px",
    textStyle: {
      color: "#ffffff",
    },
  },
  xAxis: {
    type: "category",
    data: ["07-21", "07-22", "07-23", "07-24", "07-25", "07-26", "07-27"],
  },
  yAxis: {
    type: "value",
    splitLine: {
      show: true,
      lineStyle: {
        color: ["rgba(255, 255, 255, 0.15)"],
        width: 2,
        type: "dashed",
      },
    },
  },
  series: [
    {
      name: "设备报警",
      data: [50, 60, 90, 200, 120, 140, 80],
      type: "line",
      smooth: true,
      symbol: "none",
      lineStyle: {
        color: "RGBA(255, 169, 19, 1)", // 线条颜色
      },
      areaStyle: createAreaStyle(
        "RGBA(255, 169, 19, 0.5)",
        "rgba(255, 169, 19, 0)"
      ),
    },
    {
      name: "环境数据",
      data: [20, 40, 60, 210, 90, 140, 50],
      type: "line",
      smooth: true,
      symbol: "none",
      lineStyle: {
        color: "RGBA(225, 110, 122, 1)", // 线条颜色
      },
      areaStyle: createAreaStyle(
        "RGBA(225, 110, 122, 0.5)",
        "rgba(225, 110, 122, 0)"
      ),
    },
    {
      name: "物料数据",
      data: [200, 20, 21, 30, 200, 170, 50],
      type: "line",
      smooth: true,
      symbol: "none",
      lineStyle: {
        color: "RGBA(65, 195, 142, 1)", // 线条颜色
      },
      areaStyle: createAreaStyle(
        "RGBA(65, 195, 142, 0.5)",
        "rgba(65, 195, 142, 0)"
      ),
    },
    {
      name: "工艺节点",
      data: [200, 180, 40, 30, 50, 170, 50],
      type: "line",
      smooth: true,
      symbol: "none",
      lineStyle: {
        color: "RGBA(210, 114, 255, 1)", // 线条颜色
      },
      areaStyle: createAreaStyle(
        "RGBA(210, 114, 255, 0.5)",
        "rgba(210, 114, 255, 0)"
      ),
    },
  ],
};

// 创建 areaStyle 的函数
function createAreaStyle(startColor: string, endColor: string) {
  return {
    color: {
      type: "linear",
      x: 0,
      y: 0,
      x2: 0,
      y2: 1,
      colorStops: [
        {
          offset: 0,
          color: startColor,
        },
        {
          offset: 1,
          color: endColor,
        },
      ],
      global: false,
    },
  };
}

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
    .bigscreen_lt_bottom_nei {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .bigscreen_lt_nei1,
      .bigscreen_lt_nei2,
      .bigscreen_lt_nei3,
      .bigscreen_lt_nei4 {
        width: 93px;
        height: 210px;
        display: flex;
        flex-direction: column;
        align-items: center;
        span {
          &:nth-child(1) {
            color: rgba(255, 255, 255, 0.8);
            font-size: 14px;
            font-weight: 400;
            padding-top: 97px;
          }
          &:nth-child(2) {
            color: #ffffff;
            font-size: 20px;
            font-weight: 500;
          }
          &:nth-child(3) {
            color: rgba(255, 255, 255, 0.8);
            font-size: 8px;
            font-weight: 400;
          }
        }
      }
      .bigscreen_lt_nei1 {
        background: url("/src/assets/img/设备报警.png") no-repeat;
        background-size: 100% 100%;
        margin-left: 18px;
      }
      .bigscreen_lt_nei2 {
        background: url("/src/assets/img/环境数据.png") no-repeat;
        background-size: 100% 100%;
      }
      .bigscreen_lt_nei3 {
        background: url("/src/assets/img/环境数据.png") no-repeat;
        background-size: 100% 100%;
      }
      .bigscreen_lt_nei4 {
        background: url("/src/assets/img/环境数据.png") no-repeat;
        background-size: 100% 100%;
        margin-right: 18px;
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
  }
  .bigscreen_rb_bottom {
    width: 100%;
    height: 406px;
    margin-top: 5px;
    background: url("/src/assets/img/背景下层.png") no-repeat;
    background-size: 100% 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .bigscreen_rb_bottom_nei {
      width: 393px;
      height: 346px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin: auto;
      .bigscreen_rb_bottom_nei_item {
        width: 100%;
        height: 60px;
        background: rgba(4, 30, 62);
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
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

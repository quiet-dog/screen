<template>
  <div class="bigscreen">
    <div class="bigscreen_header">
      <img
        style="position: absolute; top: 18px; left: 50%; margin-left: -241px"
        src="/src/assets/img/高生物安全动态监管平台.png"
        alt=""
      />
      <div class="bigscreen_header_r">
        <span>{{ time }}</span>
        <span style="padding-left: 30px">{{ dayOfWeek }}</span>
        <img
          style="padding-left: 25px"
          src="/src/assets/img/天气图标.png"
          alt=""
        />
        <img style="margin-left: 6px" src="/src/assets/img/温度计.png" alt="" />
        <span style="padding-right: 40px">26℃</span>
      </div>
    </div>
    <div class="bigscreen_lt">
      <div class="bigscreen_lt_top">
        <div class="bigscreen_lt_top_l">
          <img src="/src/assets/img/光标.png" alt="" />
          <span>报警信息</span>
        </div>
      </div>
      <BorderBox1 class="bigscreen_lt_bottom">
        <div class="bigscreen_lt_bottom_nei">
          <div class="bigscreen_lt_nei1">
            <span>设备报警</span>
            <span>二级</span>
            <span>2024-07-31 22:58:15</span>
          </div>
          <div class="bigscreen_lt_nei2">
            <span>环境数据</span>
            <span>三级</span>
            <span>2024-07-31 22:58:15</span>
          </div>
          <div class="bigscreen_lt_nei3">
            <span>物料数据</span>
            <span>二级</span>
            <span>2024-07-31 22:58:15</span>
          </div>
          <div class="bigscreen_lt_nei4">
            <span>工艺节点</span>
            <span>三级</span>
            <span>2024-07-31 22:58:15</span>
          </div>
        </div>
      </BorderBox1>
    </div>

    <div class="bigscreen_lc">
      <div class="bigscreen_lc_top">
        <div class="bigscreen_lc_top_l">
          <img src="/src/assets/img/光标.png" alt="" />
          <span>事件报告</span>
        </div>
      </div>
      <BorderBox1 class="bigscreen_lc_bottom">
        <div class="bigscreen_lc_bottom_nei">
          <img
            style="width: 163px; height: 159px"
            src="/src/assets/img/事件报告图标.png"
            alt=""
          />
          <div class="bigscreen_lc_bottom_r">
            <div class="bigscreen_lc_bottom_rnei">
              <span>物料A库存异常</span>
              <div
                style="
                  background: url('/src/assets/img/黄色.png') no-repeat;
                  background-size: 100% 100%;
                "
              >
                物料报警
              </div>
            </div>
            <div class="bigscreen_lc_bottom_rnei">
              <span>设备一监测数据异常</span>
              <div
                style="
                  background: url('/src/assets/img/绿色.png') no-repeat;
                  background-size: 100% 100%;
                "
              >
                设备报警
              </div>
            </div>
            <div class="bigscreen_lc_bottom_rnei">
              <span>月饼食品产生严重质量问题</span>
              <div
                style="
                  background: url('/src/assets/img/红色.png') no-repeat;
                  background-size: 100% 100%;
                "
              >
                质量问题
              </div>
            </div>
            <div class="bigscreen_lc_bottom_rnei">
              <span>科学大道西路段发生安全事故</span>
              <div
                style="
                  background: url('/src/assets/img/蓝色.png') no-repeat;
                  background-size: 100% 100%;
                "
              >
                事故问题
              </div>
            </div>
          </div>
        </div>
      </BorderBox1>
    </div>

    <div class="bigscreen_lb">
      <div class="bigscreen_lb_top">
        <div class="bigscreen_lb_top_l">
          <img src="/src/assets/img/光标.png" alt="" />
          <span>报警历史</span>
        </div>
      </div>
      <BorderBox1 class="bigscreen_lb_bottom">
        <div class="bigscreen_lb_bottom_nei" ref="bigscreenLBRef"></div>
      </BorderBox1>
    </div>
    <div class="bigscreen_rt">
      <div class="bigscreen_rt_top">
        <div class="bigscreen_rt_top_l">
          <img src="/src/assets/img/光标.png" alt="" />
          <span>监控报告</span>
        </div>
      </div>
      <BorderBox1 class="bigscreen_rt_bottom">
        <div class="bigscreen_rt_bottom_nei">
          <img src="/src/assets/img/监控报告图标.png" alt="" />
          <div class="bigscreen_rt_bottom_r">
            <div><span>JK218 科学大道点位1</span></div>
            <div><span>JK218 科学大道点位1</span></div>
            <div><span>JK218 科学大道点位1</span></div>
          </div>
        </div>
      </BorderBox1>
    </div>
    <div class="bigscreen_rc">
      <div class="bigscreen_rc_top">
        <div class="bigscreen_rc_top_l">
          <img src="/src/assets/img/光标.png" alt="" />
          <span>政策法规</span>
        </div>
      </div>
      <BorderBox1 class="bigscreen_rc_bottom">
        <div class="bigscreen_rc_bottom_nei">
          <div>
            <img src="/src/assets/img/线.png" alt="" />
          </div>

          <div class="bigscreen_rc_bottom_r">
            <div class="bigscreen_rc_bottom_rnei">
              <span style="color: rgba(172, 223, 255, 1); font-size: 11px"
                >2024年09月23日 22:15:53</span
              >
              <div
                style="
                  background: url('/src/assets/img/红色背景框.png') no-repeat;
                  background-size: 100% 100%;
                "
              >
                <span>《WHO实验室生物安全手册 (第四版)》</span>
                <img src="/src/assets/img/查看详情.png" alt="" />
              </div>
            </div>
            <div class="bigscreen_rc_bottom_rnei">
              <span style="color: rgba(172, 223, 255, 1); font-size: 11px"
                >2024年09月23日 22:15:53</span
              >
              <div
                style="
                  background: url('/src/assets/img/绿色背景框.png') no-repeat;
                  background-size: 100% 100%;
                "
              >
                <span>《WHO实验室生物安全手册 (第四版)》</span>
                <img src="/src/assets/img/查看详情.png" alt="" />
              </div>
            </div>
            <div class="bigscreen_rc_bottom_rnei">
              <span style="color: rgba(172, 223, 255, 1); font-size: 11px"
                >2024年09月23日 22:15:53</span
              >
              <div
                style="
                  background: url('/src/assets/img/黄色背景框.png') no-repeat;
                  background-size: 100% 100%;
                "
              >
                <span>《WHO实验室生物安全手册 (第四版)》</span>
                <img src="/src/assets/img/查看详情.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </BorderBox1>
    </div>
    <div class="bigscreen_rb">
      <div class="bigscreen_rb_top">
        <div class="bigscreen_rb_top_l">
          <img src="/src/assets/img/光标.png" alt="" />
          <span>生产安全线</span>
        </div>
      </div>
      <BorderBox1 class="bigscreen_rb_bottom">
        <div class="bigscreen_rb_bottom_nei" ref="bigscreenRBRef"></div>
      </BorderBox1>
    </div>
    <div class="bigscreen_ct">
      <div class="bigscreen_ct_l">
        <span>今日报警数量</span>
        <div></div>
      </div>
      <div class="bigscreen_ct_r">
        <span>历史报警数量</span>
        <div></div>
      </div>
    </div>
    <div class="bigscreen_cb">
      <div class="bigscreen_cb_nei"></div>
    </div>
    <div class="bigscreen_bottom">
      <div class="bigscreen_bottom_nei">
        <div>总体态势</div>
        <div>人员数据</div>
        <div>设备数据</div>
        <div>物理数据</div>
        <div>工艺数据</div>
        <div>环境数据</div>
        <div>事件数据</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import dayjs from "dayjs";
import * as echarts from "echarts";
import { BorderBox1 } from "@dataview/datav-vue3/es";

let times: any;
const daysInChinese = [
  "星期日",
  "星期一",
  "星期二",
  "星期三",
  "星期四",
  "星期五",
  "星期六",
];
const dayOfWeek = ref(daysInChinese[dayjs().day()]);
const updateDayOfWeek = () => {
  // 更新星期几
  dayOfWeek.value = daysInChinese[dayjs().day()];
};
const setMidnightTimer = () => {
  // 获取当前时间
  const now = dayjs();
  // 计算距离明天 0 点的时间（毫秒）
  const nextMidnight = dayjs().endOf("day").add(1, "millisecond");
  const timeUntilMidnight = nextMidnight.diff(now);

  // 设置定时器在 0 点更新
  times = setTimeout(() => {
    updateDayOfWeek();
    // 在 0 点之后，设置一个每天执行的定时器
    setInterval(updateDayOfWeek, 24 * 60 * 60 * 1000); // 每 24 小时更新一次
  }, timeUntilMidnight);
};

let timer: any;
const time = ref<string>(dayjs().format("YYYY-MM-DD HH:mm:ss"));

const bigscreenLBRef = ref();
const bigscreenLBoption = {
  grid: {
    left: "60px",
    top: "40px",
    bottom: "40px",
  },

  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
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

const bigscreenRBRef = ref();
const bigscreenRBoption = {
  grid: {
    left: "60px",
    top: "40px",
    bottom: "40px",
  },
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
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
      itemStyle: {
        color: "rgba(56, 124, 255,1)", //改变折线点的颜色
        lineStyle: {
          color: "rgba(56, 124, 255, 1)", //改变折线颜色
        },
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
              color: "rgba(56, 124, 255, 0.50)", // 0% 处的颜色
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
    {
      data: [520, 532, 601, 634, 990, 930, 920],
      type: "line",
      smooth: true,
      symbol: "none",
      itemStyle: {
        color: "rgb(62, 230, 255, 1)", //改变折线点的颜色
        lineStyle: {
          color: "rgb(62, 230, 255, 1)", //改变折线颜色
        },
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
              color: "rgb(62, 230, 255, 0.5)", // 0% 处的颜色
            },
            {
              offset: 1,
              color: "rgba(62, 230, 255, 0)", // 100% 处的颜色
            },
          ],
          global: false, // 缺省为 false
        },
      },
    },
  ],
};

onMounted(() => {
  timer = setInterval(() => {
    time.value = dayjs().format("YYYY-MM-DD HH:mm:ss");
  }, 1000);
  setMidnightTimer();
  if (bigscreenLBRef.value) {
    const bigscreenLBChart = echarts.init(bigscreenLBRef.value);
    bigscreenLBChart.setOption(bigscreenLBoption);
  }

  if (bigscreenRBRef.value) {
    const bigscreenRBChart = echarts.init(bigscreenRBRef.value);
    bigscreenRBChart.setOption(bigscreenRBoption);
  }
});

onUnmounted(() => {
  // 清除定时器
  clearInterval(timer);
  clearInterval(times);
});
</script>

<style scoped>
.bigscreen {
  width: 100vw;
  height: 100vh;
  background-color: #041726;
  position: relative;
}
.bigscreen_header {
  width: 100%;
  height: 251px;
  background: url("/src/assets/img/标题背景.png") no-repeat;
  background-size: 100% 100%;
  position: absolute;
  top: 0;
}
.bigscreen_header_r {
  height: 100px;
  display: flex;
  align-items: center;
  position: absolute;
  right: 0;
}
.bigscreen_header_r span {
  font-size: 20px;
  color: rgba(255, 255, 255, 1);
}
.bigscreen_lt,
.bigscreen_lc,
.bigscreen_lb,
.bigscreen_rt,
.bigscreen_rc,
.bigscreen_rb {
  width: 443px;
  height: 292px;
}
.bigscreen_lt {
  position: absolute;
  top: 91px;
  left: 26px;
}
.bigscreen_lt_top {
  width: 100%;
  height: 34px;
  background: url("/src/assets/img/背景-上层.png") no-repeat;
  background-size: 100% 100%;
  display: flex;
  align-items: center;
}
.bigscreen_lt_top_l {
  display: flex;
  align-items: center;
}
.bigscreen_lt_top_l img {
  margin-left: 11px;
}
.bigscreen_lt_top_l span {
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
.bigscreen_lt_bottom {
  width: 100%;
  height: 251px;
  margin-top: 5px;
  background: url("/src/assets/img/背景下层.png") no-repeat;
  background-size: 100% 100%;
}
.bigscreen_lt_bottom_nei {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.bigscreen_lt_nei1 {
  width: 93px;
  height: 210px;
  background: url("/src/assets/img/设备报警.png") no-repeat;
  background-size: 100% 100%;
  margin-left: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.bigscreen_lt_nei1 span:nth-child(1) {
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
  font-weight: 400;
  padding-top: 97px;
}
.bigscreen_lt_nei1 span:nth-child(2) {
  color: #ffffff;
  font-size: 20px;
  font-weight: 500;
}
.bigscreen_lt_nei1 span:nth-child(3) {
  color: rgba(255, 255, 255, 0.8);
  font-size: 8px;
  font-weight: 400;
}
.bigscreen_lt_nei2 {
  width: 93px;
  height: 210px;
  background: url("/src/assets/img/环境数据.png") no-repeat;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.bigscreen_lt_nei2 span:nth-child(1) {
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
  font-weight: 400;
  padding-top: 97px;
}
.bigscreen_lt_nei2 span:nth-child(2) {
  color: #ffffff;
  font-size: 20px;
  font-weight: 500;
}
.bigscreen_lt_nei2 span:nth-child(3) {
  color: rgba(255, 255, 255, 0.8);
  font-size: 8px;
  font-weight: 400;
}
.bigscreen_lt_nei3 {
  width: 93px;
  height: 210px;
  background: url("/src/assets/img/物料报警.png") no-repeat;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.bigscreen_lt_nei3 span:nth-child(1) {
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
  font-weight: 400;
  padding-top: 97px;
}
.bigscreen_lt_nei3 span:nth-child(2) {
  color: #ffffff;
  font-size: 20px;
  font-weight: 500;
}
.bigscreen_lt_nei3 span:nth-child(3) {
  color: rgba(255, 255, 255, 0.8);
  font-size: 8px;
  font-weight: 400;
}
.bigscreen_lt_nei4 {
  width: 93px;
  height: 210px;
  background: url("/src/assets/img/工艺节点.png") no-repeat;
  background-size: 100% 100%;
  margin-right: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.bigscreen_lt_nei4 span:nth-child(1) {
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
  font-weight: 400;
  padding-top: 97px;
}
.bigscreen_lt_nei4 span:nth-child(2) {
  color: #ffffff;
  font-size: 20px;
  font-weight: 500;
}
.bigscreen_lt_nei4 span:nth-child(3) {
  color: rgba(255, 255, 255, 0.8);
  font-size: 8px;
  font-weight: 400;
}

.bigscreen_lc {
  position: absolute;
  top: 395px;
  left: 26px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.bigscreen_lc_top {
  width: 100%;
  height: 34px;
  background: url("/src/assets/img/背景-上层.png") no-repeat;
  background-size: 100% 100%;
  display: flex;
  align-items: center;
}
.bigscreen_lc_top_l {
  display: flex;
  align-items: center;
}
.bigscreen_lc_top_l img {
  margin-left: 11px;
}
.bigscreen_lc_top_l span {
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
.bigscreen_lc_bottom {
  width: 100%;
  height: 251px;
  margin-top: 5px;
  background: url("/src/assets/img/背景下层.png") no-repeat;
  background-size: 100% 100%;
}
.bigscreen_lc_bottom_nei {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.bigscreen_lc_bottom_r {
  width: 265px;
  height: 195px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.bigscreen_lc_bottom_rnei {
  width: 100%;
  height: 45px;
  background: url("/src/assets/img/背景1.png") no-repeat;
  background-size: 100% 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.bigscreen_lc_bottom_rnei span {
  color: rgba(244, 249, 255, 1);
  font-size: 11px;
  margin-left: 20px;
}
.bigscreen_lc_bottom_rnei div {
  width: 67px;
  height: 31px;
  color: rgba(244, 249, 255, 1);
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 3px;
}

.bigscreen_lb {
  position: absolute;
  bottom: 85px;
  left: 26px;
}
.bigscreen_lb_top {
  width: 100%;
  height: 34px;
  background: url("/src/assets/img/背景-上层.png") no-repeat;
  background-size: 100% 100%;
  display: flex;
  align-items: center;
}
.bigscreen_lb_top_l {
  display: flex;
  align-items: center;
}
.bigscreen_lb_top_l img {
  margin-left: 11px;
}
.bigscreen_lb_top_l span {
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
.bigscreen_lb_bottom {
  width: 100%;
  height: 251px;
  margin-top: 5px;
  background: url("/src/assets/img/背景下层.png") no-repeat;
  background-size: 100% 100%;
}
.bigscreen_lb_bottom_nei {
  width: 100%;
  height: 100%;
}

.bigscreen_rt {
  position: absolute;
  top: 91px;
  right: 26px;
}
.bigscreen_rt_top {
  width: 100%;
  height: 34px;
  background: url("/src/assets/img/背景-上层.png") no-repeat;
  background-size: 100% 100%;
  display: flex;
  align-items: center;
}
.bigscreen_rt_top_l {
  display: flex;
  align-items: center;
}
.bigscreen_rt_top_l img {
  margin-left: 11px;
}
.bigscreen_rt_top_l span {
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
.bigscreen_rt_bottom {
  width: 100%;
  height: 251px;
  margin-top: 5px;
  background: url("/src/assets/img/背景下层.png") no-repeat;
  background-size: 100% 100%;
}
.bigscreen_rt_bottom_nei {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
.bigscreen_rt_bottom_nei img {
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
}
.bigscreen_rt_bottom_r div {
  width: 100%;
  height: 41px;
  background: url("/src/assets/img/半透明背景1.png") no-repeat;
  background-size: 100% 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.bigscreen_rt_bottom_r div span {
  font-size: 14px;
  color: rgba(255, 255, 255, 1);
  margin-left: 10px;
}
.bigscreen_rc {
  position: absolute;
  top: 395px;
  right: 26px;
}
.bigscreen_rc_top {
  width: 100%;
  height: 34px;
  background: url("/src/assets/img/背景-上层.png") no-repeat;
  background-size: 100% 100%;
  display: flex;
  align-items: center;
}
.bigscreen_rc_top_l {
  display: flex;
  align-items: center;
}
.bigscreen_rc_top_l img {
  margin-left: 11px;
}
.bigscreen_rc_top_l span {
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
.bigscreen_rc_bottom {
  width: 100%;
  height: 251px;
  margin-top: 5px;
  background: url("/src/assets/img/背景下层.png") no-repeat;
  background-size: 100% 100%;
}
.bigscreen_rc_bottom_nei {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.bigscreen_rc_bottom_r {
  width: 381px;
  height: 207px;
  margin-left: 18px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.bigscreen_rc_bottom_rnei {
  width: 100%;
  height: 57px;
}
.bigscreen_rc_bottom_rnei div {
  width: 100%;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.bigscreen_rc_bottom_rnei div span {
  color: rgba(255, 255, 255, 1);
  font-size: 14px;
}

.bigscreen_rb {
  position: absolute;
  bottom: 85px;
  right: 26px;
}
.bigscreen_rb_top {
  width: 100%;
  height: 34px;
  background: url("/src/assets/img/背景-上层.png") no-repeat;
  display: flex;
  align-items: center;
  background-size: 100% 100%;
}
.bigscreen_rb_top_l {
  display: flex;
  align-items: center;
}
.bigscreen_rb_top_l img {
  margin-left: 11px;
}
.bigscreen_rb_top_l span {
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
.bigscreen_rb_bottom {
  width: 100%;
  height: 251px;
  margin-top: 5px;
  background: url("/src/assets/img/背景下层.png") no-repeat;
  background-size: 100% 100%;
}
.bigscreen_rb_bottom_nei {
  width: 100%;
  height: 100%;
}
.bigscreen_ct {
  width: 840px;
  height: 119px;
  position: absolute;
  top: 132px;
  left: 50%;
  margin-left: -420px;
  display: flex;
  justify-content: space-between;
}
.bigscreen_ct_l {
  width: 208px;
  height: 100%;
}
.bigscreen_ct_l span {
  color: rgba(242, 242, 242, 1);
  font-size: 24px;
}
.bigscreen_ct_l div {
  width: 100%;
  height: 72px;
  margin-top: 12px;
  background: url("/src/assets/img/Group_1321314865.png") no-repeat;
  background-size: 100% 100%;
}
.bigscreen_ct_r {
  width: 353px;
  height: 100%;
}
.bigscreen_ct_r span {
  color: rgba(242, 242, 242, 1);
  font-size: 24px;
}
.bigscreen_ct_r div {
  width: 100%;
  height: 72px;
  margin-top: 12px;
  background: url("/src/assets/img/左边数字背景.png") no-repeat;
  background-size: 100% 100%;
}
.bigscreen_cb {
  width: 996px;
  height: 665px;
  background: url("/src/assets/img/网格背景.png") no-repeat;
  background-size: 100% 100%;
  position: absolute;
  bottom: 140px;
  left: 50%;
  margin-left: -498px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.bigscreen_cb_nei {
  width: 840px;
  height: 642px;
  background: url("/src/assets/img/主体图片.png") no-repeat;
  background-size: 100% 100%;
}
.bigscreen_bottom {
  width: 100%;
  height: 112px;
  background: url("/src/assets/img/底座背景.png") no-repeat;
  background-size: 100% 100%;
  position: absolute;
  bottom: 0;
}
.bigscreen_bottom_nei {
  width: 860px;
  height: 55px;

  position: absolute;
  top: 15px;
  left: 50%;
  margin-left: -430px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.bigscreen_bottom_nei div {
  width: 112px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(255, 255, 255, 1);
  font-size: 20px;
}
</style>

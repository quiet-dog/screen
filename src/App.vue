<template>
  <div class="bigscreen">
    <div class="bigscreen_header">
      <img src="/src/assets/img/高生物安全动态监管平台.png" alt="" />
    </div>
    <div class="bigscreen_lt">
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
    <div class="bigscreen_lc">
      <div class="bigscreen_lc_top"></div>
      <div class="bigscreen_lc_bottom">
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
    </div>
    <div class="bigscreen_lb"></div>
    <div class="bigscreen_rt">
      <div class="bigscreen_rt_top"></div>
      <div class="bigscreen_rt_bottom">
        <img src="/src/assets/img/监控报告图标.png" alt="" />
        <div class="bigscreen_rt_bottom_r">
          <div><span>JK218 科学大道点位1</span></div>
          <div><span>JK218 科学大道点位1</span></div>
          <div><span>JK218 科学大道点位1</span></div>
        </div>
      </div>
    </div>
    <div class="bigscreen_rc">
      <div class="bigscreen_rc_top"></div>
      <div class="bigscreen_rc_bottom">
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
    </div>
    <div class="bigscreen_rb"></div>
    <div class="bigscreen_ct">
      <div class="bigscreen_ct_l">
        <span>今日报警数量</span>
        <div></div>
      </div>
      <div class="bigscreen_ct_r">
        <span>指标总数量</span>
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
import HelloWorld from "./components/HelloWorld.vue";
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
.bigscreen_header img {
  position: absolute;
  top: 18px;
  left: 50%;
  margin-left: -241px;
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
  background: url("/src/assets/img/报警信息.png") no-repeat;
  background-size: 100% 100%;
}
.bigscreen_lt_nei1 {
  width: 93px;
  height: 210px;
  background: url("/src/assets/img/设备报警.png") no-repeat;
  background-size: 100% 100%;
  position: absolute;
  top: 60px;
  left: 18px;
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
  position: absolute;
  top: 60px;
  left: 123px;
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
  position: absolute;
  top: 60px;
  right: 123px;
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
  position: absolute;
  top: 60px;
  right: 18px;
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
  background: url("/src/assets/img/事件报告.png") no-repeat;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.bigscreen_lc_top {
  width: 100%;
  height: 34px;
}
.bigscreen_lc_bottom {
  width: 100%;
  height: 251px;
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
  background: url("/src/assets/img/报警历史.png") no-repeat;
  background-size: 100% 100%;
}

.bigscreen_rt {
  position: absolute;
  top: 91px;
  right: 26px;
  background: url("/src/assets/img/监控报告.png") no-repeat;
  background-size: 100% 100%;
}
.bigscreen_rt_top {
  width: 100%;
  height: 34px;
}
.bigscreen_rt_bottom {
  width: 100%;
  height: 251px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.bigscreen_rt_bottom img {
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
  background: url("/src/assets/img/法规政策.png") no-repeat;
  background-size: 100% 100%;
}
.bigscreen_rc_top {
  width: 100%;
  height: 34px;
}
.bigscreen_rc_bottom {
  width: 100%;
  height: 251px;
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
  background: url("/src/assets/img/生产安全线.png") no-repeat;
  background-size: 100% 100%;
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
  width: 353px;
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
  background: url("/src/assets/img/左边数字背景.png") no-repeat;
  background-size: 100% 100%;
}
.bigscreen_ct_r {
  width: 208px;
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
  background: url("/src/assets/img/Group_1321314865.png") no-repeat;
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

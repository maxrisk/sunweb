<template>
  <div class="home">
    <full-page :options="options" ref="fullPage">
      <div class="section">
        <div style="height: 100%;">
          <div class="home-section">
            <div class="btn-container">
              <el-popover
                  placement="top"
                  width="180"
                  trigger="hover"
                  v-model="qrcodeVisible">
                <img src="../assets/images/qrcode.png" width="180" alt="二维码">
                <button slot="reference" class="gradient-btn" v-scroll-reveal.reset>立即下载</button>
              </el-popover>
            </div>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="home-section2"></div>
      </div>
      <div class="section">
        <div class="home-section3"></div>
      </div>
      <div class="section">
        <div class="home-section4"></div>
      </div>
      <div class="section fp-auto-height">
        <div class="advantage">
          <h1>医程通优势</h1>
          <el-row type="flex" justify="center">
            <el-col :md="16" :sm="24">
              <ul class="swiper-tabs">
                <li :class="{ active: swiperCurIndex === 0 }" @click="swiperCurIndex = 0">创新产品体系</li>
                <li :class="{ active: swiperCurIndex === 1 }" @click="swiperCurIndex = 1">携手中国银联</li>
                <li :class="{ active: swiperCurIndex === 2 }" @click="swiperCurIndex = 2">三甲医院强势入驻</li>
              </ul>
              <swiper ref="swiper" class="swiper-con" :options="{ allowTouchMove: false }">
                <swiper-slide>
                  <el-row class="slide-container">
                    <el-col :xs="24" :sm="12" class="slide-container-content">
                      <h1>创新产品体系</h1>
                      <p>阳光康众与医院开展深度合作，打通就医全流程，通过手机即可完成门诊、住院、医保等传统线下就医全流程，方便患者到医院就医，功能包括当天挂号、预约挂号、医保支付、排队候诊、门诊缴费、报告查询、住院押金、住院清单、院内导航等。广州地区医保就医率先全面打通，手机在线绑定社保卡余额查询，实现医保个账在线支付。</p>
                    </el-col>
                    <el-col :xs="0" :sm="12">
                      <img src="../assets/images/home/system.png" alt="医程通创新产品体系">
                    </el-col>
                  </el-row>
                </swiper-slide>
                <swiper-slide>
                  <el-row class="slide-container">
                    <el-col :xs="24" :sm="12" class="slide-container-content">
                      <h1>携手中国银联</h1>
                      <p>2015 年 4 月，阳光康众携手中国银联共同推出医程通产品，并在 2016 年 8 月成功升级为医程通 APP 3.0，合作区域遍及广东、山东、海南、安徽、河北、湖南等地，一举使当地市民就医进入指尖医院时代，医程通打通就医全流程，银联卡在手即可轻松就医，大大降低了患者看病时的时间成本和精力成本，也为医患关系的和谐共处营造温床。</p>
                    </el-col>
                    <el-col :xs="0" :sm="12">
                      <img src="../assets/images/home/unionpay.png" alt="中国银联 医程通">
                    </el-col>
                  </el-row>
                </swiper-slide>
                <swiper-slide class="hospital-list">
                  <h2>三甲医院强势入驻</h2>
                  <p class="hospital-list-desc">面对医院，提供创新性信息化建设方案和推广服务，助力医院提高运营效率，并打造互联网分级诊疗平台，实现医联体内诊疗信息互联互通。</p>
                  <p class="hospital-list-subtitle">合作医院</p>
                  <swiper :options="{ pagination: { el: '.swiper-pagination', clickable: true, bulletClass: 'home-bullet', bulletActiveClass: 'home-bullet-active' } }">
                    <swiper-slide class="hospital-swiper">
                      <el-row>
                        <el-col :xs="12" :sm="8" :md="6" class="hospital-item">
                          <img src="../assets/images/home/hospital-logo.jpeg" alt="广州妇女儿童医疗中心">
                          <p>广州妇女儿童医疗中心</p>
                        </el-col>
                        <el-col :xs="12" :sm="8" :md="6" class="hospital-item">
                          <img src="../assets/images/home/hospital-logo.jpeg" alt="广州妇女儿童医疗中心">
                          <p>广州妇女儿童医疗中心</p>
                        </el-col>
                        <el-col :xs="12" :sm="8" :md="6" class="hospital-item">
                          <img src="../assets/images/home/hospital-logo.jpeg" alt="广州妇女儿童医疗中心">
                          <p>广州妇女儿童医疗中心</p>
                        </el-col>
                        <el-col :xs="12" :sm="8" :md="6" class="hospital-item">
                          <img src="../assets/images/home/hospital-logo.jpeg" alt="广州妇女儿童医疗中心">
                          <p>广州妇女儿童医疗中心</p>
                        </el-col>
                        <el-col :xs="12" :sm="8" :md="6" class="hospital-item">
                          <img src="../assets/images/home/hospital-logo.jpeg" alt="广州妇女儿童医疗中心">
                          <p>广州妇女儿童医疗中心</p>
                        </el-col>
                        <el-col :xs="12" :sm="8" :md="6" class="hospital-item">
                          <img src="../assets/images/home/hospital-logo.jpeg" alt="广州妇女儿童医疗中心">
                          <p>广州妇女儿童医疗中心</p>
                        </el-col>
                        <el-col :xs="12" :sm="8" :md="6" class="hospital-item">
                          <img src="../assets/images/home/hospital-logo.jpeg" alt="广州妇女儿童医疗中心">
                          <p>广州妇女儿童医疗中心</p>
                        </el-col>
                        <el-col :xs="12" :sm="8" :md="6" class="hospital-item">
                          <img src="../assets/images/home/hospital-logo.jpeg" alt="广州妇女儿童医疗中心">
                          <p>广州妇女儿童医疗中心</p>
                        </el-col>
                        <el-col :xs="12" :sm="8" :md="6" class="hospital-item">
                          <img src="../assets/images/home/hospital-logo.jpeg" alt="广州妇女儿童医疗中心">
                          <p>广州妇女儿童医疗中心</p>
                        </el-col>
                        <el-col :xs="12" :sm="8" :md="6" class="hospital-item">
                          <img src="../assets/images/home/hospital-logo.jpeg" alt="广州妇女儿童医疗中心">
                          <p>广州妇女儿童医疗中心</p>
                        </el-col>
                        <el-col :xs="12" :sm="8" :md="6" class="hospital-item">
                          <img src="../assets/images/home/hospital-logo.jpeg" alt="广州妇女儿童医疗中心">
                          <p>广州妇女儿童医疗中心</p>
                        </el-col>
                        <el-col :xs="12" :sm="8" :md="6" class="hospital-item">
                          <img src="../assets/images/home/hospital-logo.jpeg" alt="广州妇女儿童医疗中心">
                          <p>广州妇女儿童医疗中心</p>
                        </el-col>
                      </el-row>
                    </swiper-slide>
                    <swiper-slide class="hospital-swiper">
                      <el-row>
                        <el-col :xs="12" :sm="8" :md="6" class="hospital-item">
                          <img src="../assets/images/home/hospital-logo.jpeg" alt="广州妇女儿童医疗中心">
                          <p>广州妇女儿童医疗中心</p>
                        </el-col>
                        <el-col :xs="12" :sm="8" :md="6" class="hospital-item">
                          <img src="../assets/images/home/hospital-logo.jpeg" alt="广州妇女儿童医疗中心">
                          <p>广州妇女儿童医疗中心</p>
                        </el-col>
                        <el-col :xs="12" :sm="8" :md="6" class="hospital-item">
                          <img src="../assets/images/home/hospital-logo.jpeg" alt="广州妇女儿童医疗中心">
                          <p>广州妇女儿童医疗中心</p>
                        </el-col>
                      </el-row>
                    </swiper-slide>
                    <div class="swiper-pagination"  slot="pagination"></div>
                  </swiper>
                </swiper-slide>
              </swiper>
            </el-col>
          </el-row>
        </div>
      </div>
      <div class="section fp-auto-height">
        <el-row type="flex" justify="center" class="home-footer">
          <el-col :xm="24" :sm="16">
            <h2 style="text-align: center">关注医程通</h2>
            <div class="qrcode-list">
              <div class="qrcode-item">
                <img src="../assets/images/qrcodes/yct-app.png" alt="医程通 APP 二维码">
                <p>下载医程通 APP</p>
              </div>
              <div class="qrcode-item">
                <img src="../assets/images/qrcodes/yct-miniprogram.png" alt="医程通小程序">
                <p>医程通小程序</p>
              </div>
              <div class="qrcode-item">
                <img src="../assets/images/qrcodes/medical-miniprogram.png" alt="广州医保查询小程序">
                <p>广州医保查询小程序</p>
              </div>
              <div class="qrcode-item">
                <img src="../assets/images/qrcodes/yct-wechat.png" alt="医程通官方微信">
                <p>医程通官方微信</p>
              </div>
              <div class="qrcode-item">
                <img src="../assets/images/qrcodes/sun-club.png" alt="阳光妈咪官方微信">
                <p>阳光妈咪官方微信</p>
              </div>
            </div>
          </el-col>
        </el-row>
        <sun-footer></sun-footer>
      </div>
    </full-page>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import SunFooter from "../components/SunFooter";

export default {
  name: "home",
  data() {
    return {
      qrcodeVisible: false,
      activeName: "second",
      swiperCurIndex: 0,
      options: {
        licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
        scrollBar: false,
        verticalCentered: false,
        navigation: true,
        sectionsColor: [
          "#fff",
          "#edf3ff",
          "#fff",
          "#edf3ff",
          "#fff",
          "#edf3ff",
          "#b4b8ab"
        ]
      }
    };
  },
  methods: {
    slideTo(index) {
      this.$refs.swiper.swiper.slideTo(index, 500);
    }
  },
  watch: {
    swiperCurIndex(val) {
      this.slideTo(val);
    }
  },
  deactivated() {
    this.$refs.fullPage.api.destroy("all");
  },
  components: {
    swiper,
    swiperSlide,
    SunFooter
  }
};
</script>

<style scoped lang="scss">
@import "~swiper/dist/css/swiper.css";
@import "../assets/style/media-queries";
@import "../assets/style/theme";

@mixin section-bg($imgPath) {
  height: calc(100% - 80px);
  position: relative;
  top: 80px;
  background: url($imgPath) center no-repeat;
  background-size: cover;
  width: 88%;
  margin: 0 auto;
  @include mobile {
    height: calc(100% - 50px);
    top: 50px;
    width: 100%;
  }
}

.home {
  height: 100%;
  &-section {
    height: calc(100% - 160px);
    box-sizing: border-box;
    position: relative;
    top: 80px;
    background: url("../assets/images/home/banner.png") center no-repeat;
    background-size: cover;
    @include mobile {
      top: 50px;
    }
  }

  &-section2 {
    @include section-bg("../assets/images/home/banner2.png");
  }

  &-section3 {
    @include section-bg("../assets/images/home/banner3.png");
  }

  &-section4 {
    @include section-bg("../assets/images/home/banner4.png");
  }
}

.advantage {
  padding-top: 80px;

  @include mobile {
    padding-top: 50px;
  }

  h1 {
    text-align: center;
  }
}

.btn-container {
  position: absolute;
  top: 68%;
  left: 50%;
  transform: translateX(50%);

  &:hover img {
    display: block !important;
  }

  img {
    display: none;
    position: absolute;
    left: 0;
    top: 80px;
    width: 100%;
  }
}
.gradient-btn {
  color: #fff;
  width: 226px;
  height: 65px;
  border-radius: 76px;
  font-size: 20px;
  background: linear-gradient(90deg, #4ad9fe, #4399fe);
  border: none;
  box-shadow: 0 5px 10px -4px rgba(0, 0, 0, 0.3);
  cursor: pointer;
}
.myContent {
  height: 300px;
}
.swiper-tabs {
  width: 100%;
  display: flex;
  justify-content: center;
  color: #999;
  border-bottom: 1px #c6c6c6 solid;
  margin: 0;
  padding: 0;

  li {
    display: inline-block;
    list-style: none;
    margin: 0 40px;
    padding: 16px 0;
    cursor: pointer;

    &.active {
      color: $primary-color;
      position: relative;

      &::after {
        content: "";
        height: 4px;
        width: 60px;
        background-color: #6689fa;
        position: absolute;
        bottom: -1px;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
}

.swiper-con {
  height: 100%;
}

.slide-container {
  display: flex;
  align-items: center;
  margin-top: 90px;
  margin-bottom: 90px;
  @include mobile {
    margin: 30px;
  }

  &-content {
    font-size: 18px;
    line-height: 32px;

    h1 {
      text-align: left;
      margin: 35px 0;
    }
  }

  img {
    width: 100%;
    box-sizing: border-box;
    padding-left: 160px;
  }
}
.hospital-list {
  h2 {
    text-align: left;
  }

  p {
    margin: 0;
    font-size: 18px;
  }

  &-desc {
    color: #424242;
    line-height: 32px;
  }

  &-subtitle {
    padding: 16px 0;
    margin-top: 35px !important;
    border-bottom: 1px #c6c6c6 solid;
  }
}

.hospital-swiper {
  padding: 30px 0;
}
.hospital-item {
  display: flex;
  align-items: center;
  margin-bottom: 30px;

  img {
    width: 65px;
    height: 65px;
    object-fit: contain;
    background-color: #f2f2f2;
    padding: 7px;
    border-radius: 4px;
    border: 1px #cecece solid;
  }

  p {
    font-size: 14px;
    color: #313131;
    flex: 1;
    padding: 0 16px;
  }
}

.qrcode-list {
  display: flex;
  justify-content: space-around;
  align-items: center;

  .qrcode-item {
    position: relative;

    img {
      width: 158px;
    }

    p {
      margin: 0;
      text-align: center;
      position: absolute;
      bottom: 0;
      width: 100%;
    }
  }
}
.home-footer {
  padding: 30px 0;
}
</style>

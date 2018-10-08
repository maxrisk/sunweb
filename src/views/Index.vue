<template>
  <div class="home">
    <full-page :options="options" ref="fullPage">
      <div class="section">
        <div style="height: 100%;">
          <div class="section-page first-section">
              <div class="first-center">
                <div class="first-left fl">
                     <img src="../assets/images/new/first-img01.png">
                </div>
                <div class="first-right fr">
                    <h3><img src="../assets/images/new/first-tit01.png"></h3>
                    <h4><img src="../assets/images/new/first-tit02.png"></h4>
                    <div class="first-list">
                        <span>
                            <img src="../assets/images/new/first-icon01.png">
                            <strong>挂号</strong>
                         </span>
                         <span>
                            <img src="../assets/images/new/first-icon02.png">
                            <strong>排队候诊</strong>
                         </span>
                         <span>
                            <img src="../assets/images/new/first-icon03.png">
                            <strong>门诊缴费</strong>
                         </span>
                         <span>
                            <img src="../assets/images/new/first-icon04.png">
                            <strong>报告查询</strong>
                         </span>
                         <span>
                            <img src="../assets/images/new/first-icon01.png">
                            <strong>挂号</strong>
                         </span>
                         <span>
                            <img src="../assets/images/new/first-icon02.png">
                            <strong>排队候诊</strong>
                         </span>
                         <span>
                            <img src="../assets/images/new/first-icon03.png">
                            <strong>门诊缴费</strong>
                         </span>
                          <span>
                            <img src="../assets/images/new/first-icon04.png">
                            <strong>报告查询</strong>
                         </span>
                    </div>
                    <div class="btn-download">

                      <el-popover
                              placement="top"
                              width="180"
                              trigger="hover"
                              v-model="qrcodeVisible">
                        <img src="../assets/images/qrcode.png" width="180" alt="二维码">
                        <button slot="reference" class="gradient-btn" >立即下载</button>
                      </el-popover>


                    </div>
                </div>
              </div>



          </div>
        </div>
      </div>
      <div class="section">
        <div class="section-page second-page">
             <div class="page-center second-center">
                  <div class="second-left fl">
                       <h3>三甲医院轻松挂号</h3>
                       <h4>医生号源 排班及时知</br>挂号缴费不排队</h4>
                       <div class="second-icon">
                            <span>
                                 <img src="../assets/images/new/second-icon01.png">
                                 <strong>挂号</strong>
                            </span>
                           <span>
                                 <img src="../assets/images/new/second-icon02.png">
                                 <strong>排队候诊</strong>
                            </span>
                           <span>
                                 <img src="../assets/images/new/second-icon03.png">
                                 <strong>门诊缴费</strong>
                            </span>
                       </div>
                  </div>
                  <div class="second-right fr">
                      <img src="../assets/images/new/second-img01.png">
                  </div>
             </div>
        </div>
      </div>
      <div class="section">
          <div class="section-page third-page">
              <div class="page-center third-center">
                  <div class="third-top">
                      <div class="third-top-left fl">
                          <img src="../assets/images/new/third-img01.png">
                      </div>
                      <div class="third-top-right fr vertical-center">
                          <h3>就医报告实时知</h3>
                          <h4>检查检验报告手机轻松查</h4>
                      </div>
                  </div>
                  <div class="third-bottom">
                      <div class="third-bottom-right fr">
                          <img src="../assets/images/new/third-img02.png">
                      </div>
                      <div class="third-bottom-left fl vertical-center">
                          <h3>医保就医超方便</h3>
                          <h4>三步绑卡 立查医保个账余额<br>医保便捷支付挂号、门诊费用</h4>
                      </div>
                  </div>
              </div>
          </div>
      </div>
        <div class="section">
            <div class="section-page four-page">
                <div class="page-center four-center">
                    <div class="four-top">
                        <div class="four-top-left fl">
                            <img src="../assets/images/new/four-img01.png">
                        </div>
                        <div class="four-top-right fr vertical-center">
                            <h3>家庭健康管理</h3>
                            <h4>爱人／子女／父母健康轻松管理<br>健康档案，就医记录复查不怕忘</h4>
                        </div>
                    </div>
                    <div class="four-bottom">
                        <div class="four-bottom-right fr">
                            <img src="../assets/images/new/four-img02.png">
                        </div>
                        <div class="four-bottom-left fl vertical-center">
                            <h3>幸孕时光超轻松</h3>
                            <h4>随时随地产科建档，产检挂号快人一步</h4>
                            <div class="four-icon">
                                <span>
                                     <img src="../assets/images/new/four-icon01.png">
                                     <strong>产科挂号</strong>
                                </span>
                                    <span>
                                     <img src="../assets/images/new/four-icon02.png">
                                     <strong>诊间取号</strong>
                                </span>
                                    <span>
                                     <img src="../assets/images/new/four-icon03.png">
                                     <strong>诊间取号</strong>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
                  <el-row class="slide-container slide-second">
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
                    <swiper-slide class="hospital-swiper" v-for="(hospitals, index) in hospitalChunks" :key="index">
                      <el-row>
                        <el-col :xs="12" :sm="8" :md="6" class="hospital-item" v-for="(hospital, key) in hospitals" :key="key">
                          <img :src="hospital.LOGO_PATH !== '' ? `https://yctimg.968309.net/pic/${hospital.LOGO_PATH}` : `${baseUrl}${hospital.LOCAL_PATH}`" :alt="hospital.NAME">
                          <p>{{ hospital.NAME }}</p>
                        </el-col>
                      </el-row>
                    </swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
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
    <div class="customer-service">
      <el-popover
          placement="left"
          width="80"
          trigger="hover"
          popper-class="my-popper"
          v-model="contactVisible">
        <div class="customer-service-contact">客服电话：<br>400-152-0899</div>
        <img src="../assets/images/home/customer-service.png" alt="客服" slot="reference">
      </el-popover>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import SunFooter from "../components/SunFooter";
import hospitals from "../../hospitals";

export default {
  name: "home",
  data() {
    return {
      baseUrl: process.env.BASE_URL,
      hospitals: hospitals.RECORDS,
      qrcodeVisible: false,
      contactVisible: false,
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
    },
    arrayChunk(arr, size) {
      if (!Array.isArray(arr)) return false;

      let i,
        j,
        newArr = [];

      for (i = 0, j = arr.length; i < j; i += size) {
        newArr.push(arr.slice(i, i + size));
      }

      return newArr;
    }
  },
  mounted() {
    console.log(hospitals);
  },
  computed: {
    hospitalChunks() {
      return this.arrayChunk(this.hospitals, 12);
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
  background-size: contain;
  /*width: 88%;*/
  /*margin: 0 auto;*/
  @include mobile {
    height: calc(100% - 50px);
    top: 50px;
    width: 100%;
  }
}

.home .section-page,.section-page * {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.home {
  height: 100%;
    .section-page {
        height: 100%;
        padding-top:70px;
    }
  .first-section {
    height: calc(100% - 80px);
    box-sizing: border-box;
    position: relative;
    background-color: #677ff8;
    top: 0;
    @include adaptive600 {
      height: calc(100% - 60px);
    }

    img {
      max-width: 100%;
      max-height: 100%;
    }

    .first-left {
      position: relative;
      height: 100%;
      padding: 40px 0;
      @include adaptive630 {
        padding: 30px 0;
      }
        @include adaptiveWidth1440 {
            max-width: 750px;
        }



      img {
        transform: translate3d(0, -50%, 0);
        position: relative;
        top: 50%;
        max-height: 100%;
      }
    }

    .first-right {
      transform: translate3d(0, -50%, 0);
      position: relative;
      top: 50%;
      width: 502px;
        @include adaptiveWidth1440 {
            margin-right: 20px;
        }
      h3,
      h4 {
        margin: 0;
        padding: 0;
      }
      h3 {
        @include adaptive720 {
          height: 70px;
        }
        @include adaptive690 {
          height: 64px;
        }
        @include adaptive600 {
          height: 58px;
        }
      }
      h4 {
        @include adaptive720 {
          height: 45px;
          padding-top: 2px;
        }
        @include adaptive690 {
          height: 42px;
        }
        @include adaptive600 {
          height: 40px;
        }
      }
      .first-list {
        color: #fff;
        font-size: 14px;
        display: inline-block;
        width: 100%;

        span {
          display: inline-block;
          text-align: center;
          margin-right: 56px;
          padding-top: 30px;
          @include adaptive750 {
            padding-top: 20px;
          }
          @include adaptive690 {
            padding-top: 18px;
          }
          @include adaptive660 {
            padding-top: 14px;
          }
          @include adaptive600 {
            padding-top: 12px;
            margin-right: 40px;
          }
          strong {
            display: block;
            padding-top: 10px;
            @include adaptive660 {
              padding-top: 5px;
            }
          }
        }
      }
      .btn-download {
        margin-top: 50px;
        @include adaptive750 {
          margin-top: 40px;
        }
        @include adaptive720 {
          margin-top: 35px;
        }
        @include adaptive660 {
          margin-top: 30px;
        }
        @include adaptive600 {
          margin-top: 24px;
        }
        &:hover img {
          display: block !important;
        }
        .gradient-btn {
          @include adaptive720 {
            height: 60px;
            line-height: 60px;
          }
          @include adaptive660 {
            height: 54px;
            line-height: 54px;
          }
          @include adaptive600 {
            height: 50px;
            line-height: 50px;
            width: 200px;
          }
        }

        img {
          display: none;
          position: absolute;
          left: 0;
          top: 80px;
          width: 100%;
        }
      }
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

.page-center {
    width: 1180px;
    margin: 0 auto;
    height: 100%;
}
.vertical-center {
    -webkit-transform: translate3d(0, -50%, 0);
    transform: translate3d(0, -50%, 0);
    position: relative;
    top: 50%;
}

.second-page {
    p,h3,h4 { margin:0; padding:0}
    .second-center {
        padding:30px 0;
        padding-top: 50px;
        @include adaptive690 {
            width: 1080px;
        }

    }
    .second-left {
        -webkit-transform: translate3d(0, -50%, 0);
        transform: translate3d(0, -50%, 0);
        position: relative;
        top: 48%;
        img { max-height: 100%; }
        h3 {
             font-size: 54px;color: #424242; padding-bottom: 15px; font-weight: normal;
            @include adaptive630 {
                font-size: 48px;
            }
        }
        h4 { font-size: 24px; color: #9c9c9c; line-height: 1.3; font-weight: normal;
            @include adaptive630 {
                font-size: 20px;
                line-height: 1.4;
            }
        }
        .second-icon {
            margin-top: 65px;
            color: #4a515f;
            font-size: 16px;

            span { display: inline-block; margin-right: 60px;  }
            strong {font-size: 16px; display: block;text-align: center; color: #4a515f; padding-top:8px; font-weight: normal;
                @include adaptive630 {
                    font-size: 14px;
                }
            }
            img {
                @include adaptive630 {
                    height: 80px;
                }
            }
        }
    }

    .second-right {
        height: 100%;
        img { max-height: 100%; }
    }
}

.third-page {
    p,h3,h4 { margin:0; padding:0}
    img { max-height: 100%; }
    h3 {
        font-size: 54px;color: #424242; padding-bottom: 15px; font-weight: normal;

        @include adaptive720 {
            font-size: 50px;
        }
        @include adaptive690 {
            font-size: 48px;
        }
        @include adaptive630 {
            font-size: 44px;
        }
    }
    h4 { font-size: 24px; color: #9c9c9c; line-height: 1.3; font-weight: normal;
        @include adaptive720 {
            font-size: 22px;
        }
        @include adaptive720 {
            font-size: 22px;
        }
        @include adaptive630 {
            font-size: 18px;
            line-height: 1.4;
        }
    }
    .third-center {
        width: 1080px;
        padding:30px 0;
        padding-top: 50px;
        @include adaptive720 {
            width: 980px;
        }
        @include adaptive690 {
            padding:20px 0;
        }
        @include adaptive630 {
            width: 900px;
        }

    }
    .third-top,.third-bottom {
        display: inline-block; width: 100%; height: 50%;
        @include adaptive630 {
            height: 52%;
        }
    }
    .third-bottom {
        @include adaptive630 {
            position: relative;
            top: -4%;
        }
    }
    .third-top-left {
        height: 100%;
    }
    .third-bottom-right {
        height: 100%;
    }

}

.four-page {
    p,h3,h4 { margin:0; padding:0}
    img { max-height: 100%; }
    h3 {
        font-size: 50px;color: #424242; padding-bottom: 10px; font-weight: normal;

        @include adaptive720 {
            font-size: 50px;
        }
        @include adaptive690 {
            font-size: 48px;
        }
        @include adaptive660 {
            font-size: 46px;
            padding-bottom: 6px;
        }
        @include adaptive600 {
            font-size: 42px;
        }
    }
    h4 { font-size: 24px; color: #9c9c9c; line-height: 1.3; font-weight: normal;
        @include adaptive720 {
            font-size: 22px;
        }
        @include adaptive690 {
            font-size: 20px;
            line-height: 1.4;
        }
        @include adaptive660 {
            font-size: 18px;
            line-height: 1.3;
        }
        @include adaptive600 {
            font-size: 16px;
        }
    }
    .four-center {
        width: 1080px;
        padding:30px 0;
        @include adaptive720 {
            width: 980px;
        }
        @include adaptive690 {
            padding:20px 0;
        }
        @include adaptive630 {
            width: 900px;
        }

    }
    .four-top,.four-bottom {
        display: inline-block; width: 100%; height: 50%;
        @include adaptive600 {
            height: 52%;
        }
    }
    .four-bottom{
        @include adaptive600 {
            position: relative;
            top: -4%;
        }
    }
    .four-top-left {
        height: 100%;
    }
    .four-bottom-right {
        height: 100%;
    }
    .four-icon {
        margin-top: 20px;
        color: #4a515f;
        font-size: 16px;
        @include adaptive630 {
            margin-top: 14px;
        }

        span { display: inline-block; margin-right: 40px;  }
        strong {font-size: 16px; display: block;text-align: center; color: #4a515f; padding-top:8px; font-weight: normal;
            @include adaptive630 {
                font-size: 14px;
            }
        }
        img {
            @include adaptive720 {
                height: 80px;
            }
            @include adaptive660 {
                height: 72px;
            }
            @include adaptive600 {
                height: 60px;
            }
        }
    }

}

.first-center {
  width: 1380px;
  margin: 0 auto;
  height: 100%;
    @include adaptiveWidth1440 {
        width: 1300px;
    }
  @include adaptive690 {
    width: 1280px;
  }
  @include adaptive630 {
    width: 1200px;
  }



}


.fl {
  float: left;
}
.fr {
  float: right;
}
.advantage {
  padding-top: 70px;

  @include mobile {
    padding-top: 50px;
  }

  h1 {
    text-align: center;
      margin-bottom: 10px;
      margin-top: 35px;
  }
}

.btn-container {
  position: absolute;
  top: 75%;
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
  margin-top: 60px;
  margin-bottom: 60px;
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

.slide-second {
    margin-top: 90px;
    margin-bottom: 90px;
    @include mobile {
        margin: 30px;
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
.customer-service {
  position: absolute;
  right: 20px;
  bottom: 28px;
  z-index: 99;

  &-contact {
    font-size: 14px;
    line-height: 18px;
    color: $primary-color;
  }
}
.home-footer {
  padding: 30px 0;
}
.my-popper {
  min-width: 100px !important;
}


/* animation */
/* first-page */
.first-right h3,.first-right h4,.first-left,.first-list,.btn-download  {
    transition: all 0.6s ease-in-out;
}
.first-right h3,.first-right h4,.first-list,.btn-download{
    opacity: 0;
    transform: translate3d(0,40px,0);
}
.section.active .first-right h3,.section.active .first-right h4 ,.section.active .first-list,.section.active .btn-download{
    opacity: 1;
    transform: translate3d(0,0,0);
}
.first-right h4 { transition-delay: 0.3s; }
.first-list { transition-delay: 0.6s; }
.btn-download { transition-delay: 0.9s; }
.first-left  { opacity: 0; transform:scale3d(0.8,0.8,1);  }
.section.active .first-left   { opacity: 1; transform:scale3d(1,1,1);  }
.first-left { transition-delay: 0.3s; }

/* second-page */
.second-left h3,.second-left h4,.second-icon span,.second-right  {
    transition: all 0.6s 0.3s ease-in-out;
}
.second-left h3,.second-left h4 {
    opacity: 0;
    transform: translate3d(0,40px,0);
}
.section.active .second-left h3,.section.active .second-left h4{
    opacity: 1;
    transform: translate3d(0,0,0);
}
.second-left h4{ transition-delay: 0.6s; }
.second-right  {
    opacity: 0;
    transform: translate3d(100px,0,0);
}
.section.active .second-right  {
    opacity: 1;
    transform: translate3d(0,0,0);
}
.second-right { transition-delay: 0.6s; }
    .second-icon span {
        opacity: 0;
        transform: translate3d(-50px,0,0);
    }
.section.active .second-icon span {
    opacity: 1;
    transform: translate3d(0,0,0);
}
.section.active .second-icon span:nth-child(1) {  transition-delay: 0.8s;}
.section.active .second-icon span:nth-child(2) {  transition-delay: 1s;}
.section.active .second-icon span:nth-child(3) {  transition-delay: 1.2s;}

/* third-page */
.third-page h3,.third-page h4,.third-top-left,.third-bottom-right {
    transition: all 0.6s 0.3s ease-in-out;
}
.third-page h3,.third-page h4 {
    opacity: 0;
    transform: translate3d(-40px,0,0);
}
.third-top-right h3,.third-top-right h4 {
    transform: translate3d(40px,0,0);
}


.section.active .third-page h3,.section.active .third-page h4 {
    opacity: 1;
    transform: translate3d(0,0,0);
}
.third-page h4{ transition-delay: 0.6s; }

    .third-top-left {
        opacity: 0;
        transform: translate3d(0px,-60px,0);
    }
.third-bottom-right {
    opacity: 0;
    transform: translate3d(0px,60px,0);
}
.section.active .third-top-left,.section.active .third-bottom-right {
    opacity: 1;
    transform: translate3d(0,0,0);
}
.third-top-left,.third-bottom-right { transition-delay: 0.6s; }

/* four-page */
.four-page h3,.four-page h4,.four-top-left,.four-bottom-right,.four-icon span {
    transition: all 0.6s 0.3s ease-in-out;
}
.four-page h3,.four-page h4 {
    opacity: 0;
    transform: translate3d(-40px,0,0);
}
.four-top-right h3,.four-top-right h4 {
    transform: translate3d(40px,0,0);
}


.section.active .four-page h3,.section.active .four-page h4 {
    opacity: 1;
    transform: translate3d(0,0,0);
}
.four-page h4{ transition-delay: 0.6s; }

.four-top-left {
    opacity: 0;
    transform: translate3d(-60px,0,0);
}
.four-bottom-right {
    opacity: 0;
    transform: translate3d(60px,0,0);
}
.section.active .four-top-left,.section.active .four-bottom-right {
    opacity: 1;
    transform: translate3d(0,0,0);
}
.third-top-left,.four-bottom-right { transition-delay: 0.6s; }

.four-icon span {
    opacity: 0;
    transform: translate3d(0,40px,0);
}
.section.active .four-icon span {
    opacity: 1;
    transform: translate3d(0,0,0);
}
.section.active .four-icon span:nth-child(1) {  transition-delay: 0.8s;}
.section.active .four-icon span:nth-child(2) {  transition-delay: 1s;}
.section.active .four-icon span:nth-child(3) {  transition-delay: 1.2s;}

/* four-page */
.advantage > h1,.advantage .swiper-tabs,.advantage .swiper-container {
    transition: all 0.6s 0.3s ease-in-out;
}
.advantage .swiper-container { opacity: 0; }
.advantage > h1,.advantage .swiper-tabs {
    opacity: 0;
    transform: translate3d(0,40px,0);
}
.section.active .advantage > h1,.section.active .advantage .swiper-tabs {
    opacity: 1;
    transform: translate3d(0,0,0);
}
.section.active  .advantage .swiper-container { opacity: 1; }
.advantage .swiper-tabs {  transition-delay: 0.6s;}
.advantage .swiper-container  {  transition-delay: 0.9s;}
</style>

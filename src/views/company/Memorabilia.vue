<template>
  <div class="memorabilia">
    <img src="../../assets/images/company/company-memorabilia.png" alt="阳光康众">
    <el-row type="flex" justify="center">
      <el-col :sm="24" :md="20" :lg="18" :xl="16" style="height: 510px;">
        <div class="swiper-con">
          <swiper :options="swiperOption" class="year-swiper" @slideChange="handleSlideChange" ref="yearSwiper">
            <swiper-slide v-for="(item, key) in list" :key="item.year" class="year-swiper-item" @click.native="slideTo(key)">{{ item.year }}</swiper-slide>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
          </swiper>
          <div class="break-line">
            <div class="dot"></div>
          </div>
        </div>
        <div class="content">
          <div class="triangle-up"></div>
          <p v-for="(content, index) in list[swiperCurIndex].contents" :key="index">{{ content }}</p>
        </div>
      </el-col>
    </el-row>
    <sun-footer></sun-footer>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import SunFooter from "../../components/SunFooter";

export default {
  data() {
    return {
      swiperCurIndex: 0,
      list: [
        {
          year: 2018,
          contents: [
            "2018年2月，阳光康众正式开始承建和运营中国银联智慧医疗云平台，负责平台的开发维护，运营推广，制定平台能力接入和输出规范等工作。",
            "2018年5月，医程通APP正式上线线上绑定社保卡功能，同时还可以线上查询医保卡余额和直接线上医保支付，省去现场排队缴费烦恼。",
            "2018年7月，医程通小程序上线，支持门诊缴费、医保个账余额查询。"
          ]
        },
        {
          year: 2017,
          contents: [
            "2017年1月，阳光康众宣布于近日完成数千万元融资，投资方为复朴投资。",
            "2017年3月，作为中国肿瘤防治联盟六大功能平台之一，由联盟和中国建设银行广东省分行共同支持，阳光康众旗下全资子公司广东易健通信息科技公司负责研发、联盟运营的移动MDT——“优康问癌”APP于2016年12月上线，并在此次年会上正式推出面世。",
            "2017年4月，银联医程通APP与保险公司合作，联合在全国率先推出挂号撤销险服务功能。"
          ]
        },
        {
          year: 2016,
          contents: [
            "2016年6月，银联现代医院•医程通上线汕尾市人民医院，助力医院成为粤东地区首家“互联网+医院”。",
            "2016年9月，医程通正式接入顺德区妇幼保健院，推出医保卡在线支付功能。这标志着顺德妇幼保健院将成为当地首家医程通医保个账手机支付医院。",
            "2016年11月，人社部副部长游钧一行在广东省社保局局长阙广长，广州市人社局局长杨秦、市医保局局长李程等领导的陪同下，到广州市妇儿医疗中心调研“互联网+”社保卡使用情况，并特意了解了医程通医保个账手机支付试点情况。"
          ]
        },
        {
          year: 2015,
          contents: [
            "2015年4月27日，与中国银联携手推出“医程通”APP，为国内首个支持医保个帐支付的APP应用，获各界盛赞。",
            "2015年5月，阳光康众整合推出“互联网+医院”产品，涵盖银联“现代医院”、支付宝“未来医院”、微信公众号平台。",
            "2015年7月，与中国银联、广州华侨医院携手举办医程通APP上线新闻发布会，获得300多家新闻媒体报道及高度肯定。"
          ]
        },
        {
          year: 2014,
          contents: [
            "2014年4月，阳光康众搬迁至海珠区琶洲保利国际广场南塔5楼，为员工创造了更优雅的工作环境。",
            "2014年6月,  公司正式更名为广东天泽阳光康众医疗投资管理有限公司。",
            "2014年9月，O2O产品“小熊带诊”面世，专人带领用户就医，服务用户更专业更成熟。"
          ]
        },
        {
          year: 2013,
          contents: ["2013年10月，与广州华侨医院推出国内领先的“就医助理”应用。"]
        },
        {
          year: 2012,
          contents: [
            "2012年1月，与中国工商银行广东省分行合作发行康众灵通卡。",
            "2012年12月，山东阳光康众公司成立，标志着阳光康众着手布局全国性战略。"
          ]
        },
        {
          year: 2011,
          contents: [
            "2011年7月，为佛山市第一人民医院打造全国首个医院自助挂号、自助缴费银联创新支付系统。",
            "2011年12月，与佛山社保局展开深入合作。"
          ]
        },
        {
          year: 2010,
          contents: [
            "2010年2月，联合光大银行推出阳光医疗卡服务。",
            "2010年3月，与广州市妇女儿童医疗中心三大院区开始全面合作。",
            "2010年11月，与广州华侨医院合作上线“健康新快线”，打造国内首个门诊全流程服务及移动金融支付功能服务。"
          ]
        },
        {
          year: 2009,
          contents: [
            "2009年1月22号，阳光康众正式注册成立。",
            "2009年7月，成为广东银联的战略合作伙伴。"
          ]
        }
      ],
      swiperOption: {
        slidesPerView: 5,
        centeredSlides: true,
        spaceBetween: 30,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  },
  methods: {
    handleSlideChange() {
      this.$set(
        this,
        "swiperCurIndex",
        this.$refs.yearSwiper.swiper.activeIndex
      );
    },
    slideTo(index) {
      this.$refs.yearSwiper.swiper.slideTo(index);
    }
  },
  components: {
    swiper,
    swiperSlide,
    SunFooter
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/theme";
@import "../../assets/style/media-queries";

.memorabilia {
  margin-top: 70px;

  & > img {
    width: 100%;
    object-fit: cover;
  }
}

.swiper-con {
  padding: 0 120px;
  height: auto;

  @include mobile {
    padding: 0 50px;
  }
}

.year-swiper {
  margin-top: 40px;
  font-size: 50px;
  width: 100%;
  box-sizing: border-box;
  color: #cecece;
  line-height: 60px;

  &-item {
    text-align: center;
    padding: 50px 0;
    transition: all 0.25s;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .swiper-slide-prev,
  .swiper-slide-next {
    color: #9a9a9a;
  }

  .swiper-slide-active {
    color: $primary-color;
    font-size: 60px;
  }

  .swiper-button-prev,
  .swiper-button-next {
    background-color: #fff;
  }

  .swiper-button-prev {
    left: 0;
    padding-right: 10px;
    background-image: url("../../assets/images/swiper-left.png");
  }

  .swiper-button-next {
    right: 0;
    padding-left: 10px;
    background-image: url("../../assets/images/swiper-right.png");
  }
}
.break-line {
  position: relative;

  .dot {
    width: 14px;
    height: 14px;
    border-radius: 14px;
    background-color: $primary-color;
    margin: 0 auto;
  }

  &::before,
  &::after {
    content: "";
    height: 4px;
    width: 50%;
    display: block;
    position: absolute;
    bottom: 5px;
    left: 0;
  }

  &::before {
    background: linear-gradient(to left, $primary-color, #fff);
  }

  &::after {
    transform: translateX(100%);
    background: linear-gradient(to right, $primary-color, #fff);
  }
}
.content {
  background: #edf3ff;
  color: #6a6a6a;
  padding: 15px 30px;
  margin-top: 50px;
  margin-bottom: 50px;
  border-radius: 2px;
  position: relative;
  z-index: 1;

  p {
    line-height: 1.5;
  }
}
.triangle-up {
  width: 0;
  height: 0;
  border-left: 30px solid transparent;
  border-right: 30px solid transparent;
  border-bottom: 30px solid #edf3ff;
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 0;
}
</style>

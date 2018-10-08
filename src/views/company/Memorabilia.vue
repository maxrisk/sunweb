<template>
  <div class="memorabilia">
    <img src="../../assets/images/company/company-memorabilia.png" alt="阳光康众">
    <el-row type="flex" justify="center">
      <el-col :sm="24" :md="20" :lg="18" :xl="16">
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
            "2018 年 2 月，阳光康众负责承建和运营中国银联智慧医疗云平台，负责平台的开发维护，运营推广，制定平台能力接入和输出规范等工作。",
            "2018 年 4 月，华南医院信息网络大会在广州白云国际会议中心 3 号楼岭南大会堂成功召开。阳光康众获 2017 年度最具竞争力企业称号。",
            "2018 年 5 月，阳光康众入选广州市企业研究开发机构建设专题（第二批）项目。",
            "2018 年 5 月，医程通APP正式上线线上绑定社保卡功能，同时还可以线上查询医保卡余额和直接线上医保支付，省去现场排队缴费烦恼。",
            "2018 年 6 月，阳光康众成为广东省粤港澳合作促进会医药卫生大健康委员会单位会员。"
          ]
        },
        {
          year: 2017,
          contents: [
            "2017 年 1 月，阳光康众宣布于近日完成数千万元融资，投资方为复朴投资",
            "2017 年 3 月，中国银联广东分公司携旗下银联医程通 APP 亮相华南医院信息网络大会，展示就医全流程、医保个账手机支付和医保在线购药配送三大优势服务，获得广泛关注",
            "2017 年 3 月，作为中国肿瘤防治联盟六大功能平台之一，由联盟和中国建设银行广东省分行共同支持，阳光康众旗下全资子公司广东易健通信息科技公司负责研发、联盟运营的移动MDT——“优康问癌”APP于2016年12月上线，并在此次年会上正式推出面世",
            "2017 年 4 月，银联医程通 APP 与保险公司合作，联合在全国率先推出挂号撤销险服务功能",
            "2017 年 5 月，银联医程通APP在广州市第八人民医院正式上线，推出挂号、缴费和查看报告等功能，极大地改变原来的就医流程，使病人就诊变得轻松自主",
            "2017 年 7 月，2017 中国财经论坛暨财经 30 年领袖峰会在京召开，广东银联“医程通”荣获2017中国十大（行业）品牌奖；同月，在广东省工商局最新出的 “2016 年度守合同重信用企业” 公示名单中，阳光康众再度喜获 “广东省守合同重信用企业” 荣誉称号。这是自 2011 年 7 月起开展此评审以来，阳光康众已连续7年获得该荣誉称号。",
            "2017 年 8 月，中国银联广东分公司携旗下银联医程通 APP 参与 2017 中国医院协会信息网络大会（CHIMA 2017），在大会上以体验馆的形式，创新展示了 “指尖医院” - 医程通的功能与特色；同月，广州人社部与医程通联合，参与中国联通物联网生态大会，作为广州城市特色代表，展示 “医保网上支付” 功能",
            "2017 年 9 月，第十届“高端医疗服务与建设”国际研讨会在上海举行，中国银联携银联现代医院代表-医程通，参与大会，展示银联现代医院对医疗领域发展的助力",
            "2017 年 10 月，广州市海珠区科技工业商务和信息化局发布《关于认定2016年度海珠区高成长性中∏小企业库名单的通知》，阳光康众入选“2016年度海珠区高成长性中小企业”，纳入海珠区百家高成长性中小企业库",
            "2017 年 12 月，双十二期间，银联 “医程通” 推出 “诊金62折” 活动，用户通过银联 “医程通” APP 到医院挂号、缴费，都能享受 62 折优惠，看病更轻松"
          ]
        },
        {
          year: 2016,
          contents: [
            "2016 年 1 月，阳光康众研发的 “互联网 + 医院医疗服务平台”、“云 PACS 医学影像平台” 等三项移动医疗产品，被广东省高新技术企业协会认定为 “广东省高新技术产品”。",
            "2016 年 3 月，广州市科技创新委员会发布《关于公布首批广州市科技型中小企业信贷风险补偿资金池备案企业库企业名单的通知》，阳光康众成功首批入库备案。",
            "2016 年 3 月，阳光康众顺应市场、政策需求，首次推出医程通X.0系列产品：医程通 1.0 单院版、医程通 2.0 医联体版、医程通 3.0 网络医疗版、医程通 4.0 三医联动版亮相华南医院信息网络大会，受到与会嘉宾的关注和好评。",
            "2016 年 4 月，银联现代医院•医程通上线广东省第二人民医院，专门针对病人住院推出床边结算和押金补缴服务，并助力广东省第二人民医院联合广东省网络医院在全国率先利用 “互联网 + 医疗” 实现医疗、医保、医药的三医融合，广州市医保参保人就将可以全部享受这些服务。",
            "2016 年 5 月，经工信部中国电子信息产业发展研究院、赛迪智库互联网研究所等权威机构评定，银联现代医院医程通 X.0 系列产品，凭借着其他移动医疗服务产品无法比拟的服务优势，荣获 2016 年互联网 + 医疗最佳行业解决方案奖",
            "2016 年 6 月，经广东省有关部门、各地经济和信息化主管部门推荐和专家评审，阳光康众 “医程通” 互联网 + 医院服务平台获评 2016 年广东省 “互联网 +” 试点项目",
            "2016 年 6 月，银联现代医院•医程通上线汕尾市人民医院，助力医院成为粤东地区首家 “互联网 + 医院”",
            "2016 年 7 月，在广东省工商局最新出炉的 “2015年度守合同重信用企业” 公示名单中，阳光康众再度喜获 “广东省守合同重信用企业” 荣誉称号。这是自 2011 年 7 月起开展此评审以来，阳光康众已连续 6 年获得该荣誉称号",
            "2016 年 8 月，华南师范大学计算机学院赵淦森副院长等领导和学生代表一行莅临阳光康众参观指导，并在公司共同挂牌成立实习基地，为在校大学生提供一个良好的实践平台，也为公司的技术研发贡献智慧",
            "2016 年 9 月，医程通正式接入顺德区妇幼保健院，推出医保卡在线支付功能。这标志着顺德妇幼保健院将成为当地首家医程通医保个账手机支付医院。",
            "2016 年 11 月，人社部副部长游钧一行在广东省社保局局长阙广长，广州市人社局局长杨秦、市医保局局长李程等领导的陪同下，到广州市妇儿医疗中心调研“互联网+”社保卡使用情况，并特意了解了医程通医保个账手机支付试点情况",
            "2016 年 11 月，由阳光康众负责承建的珠海市妇幼保健院远程医学中心举行启动仪式，珠海市政府领导对远程医学中心的投建和使用给予了高度赞许。投入应用后，远程医学中心将主要对外、对上、对下开展远程诊疗项目，大大方便了群众看病就医，足不出户看专家门诊",
            "2016 年 11 月，广州市皮防所接入银联现代医院•医程通APP宣布正式启动，自此病人只需下载使用医程通 APP，即可在手机上轻松体验就医全流程服务。此举标志着广州市皮防所成为广东省首家皮肤病防治银联现代医院，引领整个广东地区皮肤病防治专科医院从此进入拇指时代",
            "2016 年 12 月，阳光康众承建的揭阳市 “智慧医疗” 远程影像诊断平台上线启动，让当地患者不用多花钱多跑路，在基层医疗机构就可以接受上级医疗专家在线诊断",
            "2016 年 12 月，应邀出席国务院调研组在广东省开展的互联网 + 健康医疗发展情况调研会，并积极建言献策",
            "2016 年 12 月，龙岗区第三人民医院正式启动上线医程通 APP，成为深圳首家银联现代医院",
            "2016 年 12 月，经过广东省营销学会专家委员会评定，“医程通” 品牌营销荣获新营销案例领潮奖"
          ]
        },
        {
          year: 2015,
          contents: [
            "2015 年 1 月 1 日，阳光康众以医院直属客服身份进驻中山大学附属眼科医院，为医院提供专业的前线客户服务，并成功打造专属医院的电话预约挂号呼叫中心。",
            "2015 年 1 月 28 日，阳光康众旗下山东阳光康众科技发展有限公司与山东省济南市儿童医院正式签署合作协议，帮助济南儿童医院打造预约挂号平台。",
            "2015 年 2 月 6 日，“专注前行、阳光2015” 主题年会召开。",
            "2015 年 4 月 27 日，与中国银联携手推出 “医程通” APP，为国内首个支持医保个帐支付的 APP 应用，获各界盛赞。",
            "2015 年 5 月，与山东省卫生教育培训中心、山东祥泰科技公司联合发起建设 “山东省网络医疗服务平台”，揭开政府、企业、投资商三方共建网络医疗平台的序幕。",
            "2015 年 5 月，阳光康众整合推出 “互联网 + 医院” 产品，涵盖银联 “现代医院”、支付宝 “未来医院”、微信公众号平台。",
            "2015 年 7 月，中山大学中山眼科中心上线 “互联网 + 医院”。",
            "2015 年 7 月，与中国银联、广州华侨医院携手举办医程通APP上线新闻发布会，获得 300 多家新闻媒体报道及高度肯定。",
            "2015 年 8 月，与山东省肿瘤医院达成战略合作，为山东省肿瘤医院建设远程会诊系统工程。",
            "2015 年 8 月，阳光康众开展医程通公益救助行动，为贫困患儿提供医疗 O2O 健康服务。",
            "2015 年 9 月，阳光康众签约建设移动互联网医院达到 21 家。",
            "2015 年 11 月，阳光康众与中国显示集成领域专业供应商广州远润科技正式签署合作协议，双方将共同为陕西省华阴市人民医院信息化建设出谋划策。",
            "2015 年 12 月，安徽马鞍山十七冶医院接入医程通 APP，安徽首家 “拇指医院” 诞生，拉开了安徽省 “互联网 + 医院” 建设的序幕。"
          ]
        },
        {
          year: 2014,
          contents: [
            "2014 年 4 月，阳光康众搬迁至海珠区琶洲保利国际广场南塔5楼，为员工创造了更优雅的工作环境。",
            "2014 年 6 月, 公司正式更名为广东天泽阳光康众医疗投资管理有限公司。",
            "2014 年 7 月，“易健通医生” 项目正式上线，专为医生与用户深入沟通打造，标志着在促进医患沟通方面开创新举措。",
            "2014 年 7 月，阳光康众与珠海市妇幼保健院联合打造 “珠海妇幼” 微信公众号上线，为珠海市首个提供医疗服务的微信平台。",
            "2014 年 9 月，O2O产品 “小熊带诊” 面世，专人带领用户就医，服务用户更专业更成熟。",
            "2014 年 10 月，与佛山南海区第三人民医院合作打造 “银医通”，帮助医院开启自助服务系统。",
            "2014 年 10 月，新增 190 多家医院正式接入阳光康众网，合作规模再上新台阶。",
            "2014 年 11 月，“预约挂号平台” 在河源市正式上线，助力河源迈进 “智慧医疗” 时代。"
          ]
        },
        {
          year: 2013,
          contents: [
            "2013 年 1 月，北京阳光康众公司成立，标志着公司医疗资源整合能力更上一台阶。",
            "2013 年 10 月，与广州华侨医院推出国内领先的 “就医助理”应用”。"
          ]
        },
        {
          year: 2012,
          contents: [
            "2012 年 1 月，与中国工商银行广东省分行合作发行康众灵通卡。",
            "2012 年 12 月，山东阳光康众公司成立，标志着阳光康众着手布局全国性战略。"
          ]
        },
        {
          year: 2011,
          contents: [
            "2011 年 7 月，为佛山第一人民医院打造全国首个医院自助挂号、自助缴费银联创新支付系统。",
            "2011 年 12 月，与佛山社保局展开深入合作。"
          ]
        },
        {
          year: 2010,
          contents: [
            "2010 年 2 月，联合光大银行推出阳光医疗银标卡服务。",
            "2010 年 3 月，与广州妇女儿童医疗中心三大院区开始全面合作。",
            "2010 年 11 月，与广州华侨医院合作上线 “健康新快线”，打造国内首个门诊全流程服务及移动金融支付功能服务。"
          ]
        },
        {
          year: 2009,
          contents: [
            "2009 年 1 月，阳光康众正式注册成立。",
            "2009 年 7 月，成为广东银联的战略合作伙伴。",
            "2009 年 8 月，携手广州妇婴医院首创开通短信贴心服务。",
            "2009 年 11 月，联手广州红会医院推出全国首创的 “时点挂号” 服务。"
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

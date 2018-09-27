<template>
  <div class="company">
    <div class="company-banner">
      <img src="../../assets/images/company/company-banner.png" alt="companybanner">
    </div>
    <div class="company-title">
      <el-row type="flex" justify="center">
        <el-col :sm="24" :md="16">
          <div>
            <el-row>
              <el-col :sm="6" :md="6">
                <div class="line"></div>
              </el-col>
              <el-col :sm="12" :md="12">
                <h1 class="first-title" v-scroll-reveal>企业概况</h1>
              </el-col>
              <el-col :sm="6" :md="6">
                <div class="line"></div>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="company-history">
      <el-row type="flex" justify="center" class="history-bottom">
        <el-col :sm="24" :md="16">
          <h5 class="secondary-title" v-scroll-reveal><span class="title-begin">1 ）企业 </span><span class="title-end bold-text">简要发展史</span></h5>
          <div class="history-content history-sun" v-scroll-reveal>
            <img class="right-img" src="../../assets/images/company/company-history.png" alt="companyhistoryimage">
            <p>阳光康众公司注册资金 5308 万元，自创立 9 年以来，一直以 “让健康来之容易” 为企业使命，致力于改善 “看病烦、看病难” 问题，搭建以“互联网+”为基础的智慧型医疗健康服务平台。先后与超过 300 家医院达成合作，累计为超过 500 万人次提供过“互联网+医疗”服务，为患者节约就医时间累计超过 250 万小时。2015 年 4 月，阳光康众携手中国银联共同推出医程通产品，并在 2016 年 8 月成功升级为医程通 APP 3.0，合作区域遍及广东、山东、海南、安徽、河北、湖南等地，一举使当地市民就医进入指尖医院时代，医程通打通就医全流程，大大降低了患者看病时的时间成本和精力成本，也为医患关系的和谐共处营造温床。深耕医疗的 9 年，我们不断优化医院就医流程，持续挖掘需求、迭代功能，致力于提升医院和用户的满意度，享受更加便捷的医疗服务。</p>
          </div>
          <div class="history-content history-hainan" v-scroll-reveal>
            <img class="left-img" src="../../assets/images/company/company-hainan.png" alt="companyhistoryimage">
            <h6 class="platforn-title">海南智慧医院 APP</h6>
            <p>2016 年 5 月 16 日，海南省卫生计生委第十一次委务会决定，在省卫生计生委统计信息中心（数据中心）建设完全由省卫生计生委主导、基于居民健康卡应用的全省统一的智慧医院服务平台和海南省智慧医院手机 APP，实现医疗服务信息数据的闭环安全运行。</p>
            <p>2017 年，由海南省卫计委、阳光康众、中国银联共同推出的海南智慧医院 APP，对接全省医疗服务机构为公众提供基于“互联网”的便捷服务。 2017 年 10 月、2018 年 4 月，省卫生计生委先后印发《关于推进海南省智慧医院服务平台建设的通知》和《关于进一步加快推进海南智慧医院建设的通知》，先后要求省直属医院及各市县人民医院、中医院合计 50 家医院按照时间节点接入海南智慧医院服务平台，确保全省二级以上医疗机构 2018 年全部完成接入。目前，已完成 17 家医院上线，其余仍有 30 余家医院及基层医院云 his 正在根据计划进行接入工作。</p>
          </div>
          <div class="history-content history-unionpay" v-scroll-reveal>
            <img class="right-img" src="../../assets/images/company/company-unionpay.png" alt="companyhistoryimage">
            <h6 class="platforn-title">银联智慧医疗云平台</h6>
            <p>2018 年，在健康中国 2030 规划的大背景下，由中国银联总公司负责指导，阳光康众负责承建和运营的中国银联智慧医疗云平台正式启动建设工作。2018 年 3 月，全国第一批 43 家医院全流程正式上线，5 月河南卫健委接入 110 家医院，6 月份上线云闪付 APP 智慧医疗平台。在中国银联总公司和阳光康众不懈的努力下，平台运行良好、医疗内容输出稳定，短时间形成极佳的“口碑”，陕西卫健委平台、上海卫宁平台、辽宁卫健委平台，贵州卫健委平台以及各地区医院积极希望参与优质医疗内容的提供。</p>
            <p>截止 8 月，中国银联智慧医疗平台在全国 28 个省、130 余个地市，完成全国 1441 家的医院上线，提供预约挂号服务，其中三甲医院数量 400 余家，占全国三甲医院总数的三分之一。除诊疗服务，智慧医疗平台还提供体检、疫苗、妇幼等其他医疗或泛医疗服务。</p>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="company-advantage">
      <el-row type="flex" justify="center">
        <el-col :sm="24" :md="16">
          <div class="advantage-content">
            <el-row class="margin-top-bottm">
              <el-col :sm="8" :md="8" class="advantage-img" v-scroll-reveal>
                <img class="company-advantage-img" src="../../assets/images/company/company-advantage.png" alt="company-advantage">
              </el-col>
              <el-col :sm="16" :md="16" v-scroll-reveal>
                <h5 class="secondary-title"><span class="title-begin">2 ）企业 </span><span class="title-end bold-text">核心优势资源</span></h5>
                <h3 class="yct-special">1、“医程通” APP 产品特色功能</h3>
                <p><img class="tick-icon" src="../../assets/images/company/company-tick.png" alt="company-tick">就医全流程。面对大众，阳光康众与医院开展深度合作，打通就医全流程，通过手机即可完成门诊、住院、医保等传统线下就医全流程，方便患者到医院就医，功能包括当天挂号、预约挂号、医保支付、排队候诊、门诊缴费、报告查询、住院押金、住院清单、院内导航等。</p>
                <p><img class="tick-icon" src="../../assets/images/company/company-tick.png" alt="company-tick">线上绑定社保卡功能，在线社保卡余额查询，实现医保个账在线支付。</p>
                <p><img class="tick-icon" src="../../assets/images/company/company-tick.png" alt="company-tick">“幸孕时光”。是阳光康众为妇幼专科医院或综合医院的产科科室提供的针对孕产妇关于围产期健康管理的一体化解决方案，通过信息化系统减少医护人员的手工工作量，提高工作效率，增加服务质量，提升用户满意度。</p>
                <p>2、面对医院，提供创新性信息化建设方案和推广服务，助力医院提高运营效率，并打造互联网分级诊疗平台，实现医联体内诊疗信息互联互通。</p>
                <p>3、面对政府，建立统一信息平台，连接区域各级医疗机构，支持区域医疗数据集成与共享，落实分级诊疗，实现优质医疗资源纵向流动，惠及基层。</p>
                <p>4、面对企业，连接金融、保险、零售、渠道等产业合作，建设开放、共赢的行业生态系统，共创医疗服务全新模式。</p>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </div>
    <sun-footer></sun-footer>
  </div>
</template>

<script>
import SunFooter from "../../components/SunFooter";

export default {
  name: "company",
  components: {
    SunFooter
  }
};
</script>

<style scoped lang="scss">
@import "../../assets/style/media-queries";
.company {
  margin-top: 80px;
  @include mobile {
    margin-top: 50px;
  }

  &-banner {
    img {
      width: 100%;
    }
  }

  &-history {
    img {
      width: 200px;
      height: 200px;
    }

    .history-content {
      margin-bottom: 80px;
    }

    .right-img {
      float: right;
      margin-left: 68px;
      margin-bottom: 68px;
    }

    .left-img {
      float: left;
      margin-right: 68px;
      margin-bottom: 68px;
    }

    p {
      font-size: 16px;
      line-height: 27px;
      color: #6a6a6a;
      margin: 15px 0px;
    }
  }

  .platforn-title {
    font-size: 18px;
    font-weight: bold;
    color: #313131;
    margin: 0;
  }

  &-advantage {
    background-color: #edf3ff;

    p {
      font-size: 16px;
      line-height: 27px;
      color: #6a6a6a;
      margin: 0;
    }
  }
}

.first-title {
  margin-top: 58px;
  margin-bottom: 68px;
  text-align: center;
  font-size: 44px;
  color: #313131;
}

.line {
  margin-top: 80px;
  width: 100%;
  height: 1px;
  vertical-align: middle;
  background-color: #cecece;
}

.secondary-title {
  margin: 0;
}

.history-bottom {
  margin-bottom: 16px;
}

.margin-top-bottm {
  margin-top: 90px;
  margin-bottom: 94px;
}

.company-advantage-img {
  width: 200px;
  height: 200px;
}

.tick-icon {
  width: 20px;
  height: 14px;
  vertical-align: middle;
  margin-right: 6px;
}

.bold-text {
  font-weight: bold;
}

.yct-special {
  font-size: 16px;
  color: #313131;
  line-height: 27px;
  margin: 17px 0 0 0;
}

.main-text {
  font-size: 16px;
  color: #6a6a6a;
  line-height: 27px;
}

.title-begin {
  font-size: 20px;
  line-height: 27px;
  color: #313131;
  margin: 0;
  font-weight: normal;
}

.title-end {
  font-size: 24px;
  line-height: 27px;
  color: #313131;
  margin: 0;
}
</style>

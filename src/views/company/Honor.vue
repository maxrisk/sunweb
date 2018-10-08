<template>
    <div class="honor">
        <div class="honor-banner">
            <img src="../../assets/images/honor-banner.png" alt="honor-banner">
        </div>
        <el-row type="flex" justify="center">
            <el-col :sm="24" :md="16">
                <div class="deeds-main-box">
                    <el-row class="bottom-line">
                        <el-col :sm="6" :md="6" v-scroll-reveal>
                            <div class="deeds-topical">
                                <h6>2016 - 至今</h6>
                                <h6>厚积薄发，勇创佳绩</h6>
                            </div>
                        </el-col>
                        <el-col :sm="18" :md="18" class="left-line">
                            <div class="deeds-year" v-scroll-reveal>
                                <el-row>
                                    <el-col :sm="2" :md="2">
                                        <span class="year">2018</span>
                                    </el-col>
                                    <el-col :sm="22" :md="22">
                                        <div class="deed-list">
                                            <p>2018 年，阳光康众入选广州市企业研究开发机构建设专题（第二批）项目</p>
                                            <p>2018 年 6 月，阳光康众成为广东省粤港澳合作促进会医药卫生大健康委员会单位会员 2018 年 6 月，被广东省工商局评为 “广东省守合同重信用企业（网商）”。这是自 2011 年 7 月起开展此评审以来，阳光康众连续 8 年获得该荣誉称号</p>
                                        </div>
                                    </el-col>
                                </el-row>
                            </div>
                            <div class="deeds-year" v-scroll-reveal="{ delay: 100 }">
                                <el-row>
                                    <el-col :sm="2" :md="2">
                                        <span class="year">2017</span>
                                    </el-col>
                                    <el-col :sm="22" :md="22">
                                        <div class="deed-list">
                                            <p>2017 年 4 月，“医程通智慧医疗服务平台” 成功申报 2016 年度海珠区科技计划项目立项</p>
                                            <p>2017 年 7 月，再度被广东省工商局评为 “广东省守合同重信用企业（网商）”。2017 年 10 月，阳光康众入选“海珠区百家高成长性中小企业”</p>
                                            <p>2017 年，阳光康众被评为广东省医院信息化建设最具竞争力企业</p>
                                        </div>
                                    </el-col>
                                </el-row>
                            </div>
                            <div class="deeds-year" v-scroll-reveal="{ delay: 200 }">
                                <el-row>
                                    <el-col :sm="2" :md="2">
                                        <span class="year">2016</span>
                                    </el-col>
                                    <el-col :sm="22" :md="22">
                                        <div class="deed-list">
                                            <p>2016 年，被评为 “广东省高新技术企业”</p>
                                            <p>2016 年 6 月，阳光康众 “医程通” 互联网 + 医院服务平台获评 2016 年广东省 “互联网 +” 试点项目</p>
                                        </div>
                                    </el-col>
                                </el-row>
                            </div>
                        </el-col>
                    </el-row>

                    <el-row class="bottom-line">
                        <el-col :sm="6" :md="6" v-scroll-reveal>
                            <div class="deeds-topical margin-top">
                                <h6>2013 - 2015</h6>
                                <h6>蓄力发展，医疗健康</h6>
                            </div>
                        </el-col>
                        <el-col :sm="18" :md="18" class="margin-top left-line">
                            <div class="deeds-year" v-scroll-reveal="{ delay: 300 }">
                                <el-row>
                                    <el-col :sm="2" :md="2">
                                        <span class="year">2015</span>
                                    </el-col>
                                    <el-col :sm="22" :md="22">
                                        <div class="deed-list">
                                            <p>2015 年，被评为 “广州市高新技术培育企业”、“广州市科技创新小巨人企业”</p>
                                        </div>
                                    </el-col>
                                </el-row>
                            </div>
                            <div class="deeds-year" v-scroll-reveal="{ delay: 400 }">
                                <el-row>
                                    <el-col :sm="2" :md="2">
                                        <span class="year">2014</span>
                                    </el-col>
                                    <el-col :sm="22" :md="22">
                                        <div class="deed-list">
                                            <p>2014 年 1 月，就医助理 APP 荣登 “2013 健康界 TOP 10”、“最具价值 App” 榜</p>
                                        </div>
                                    </el-col>
                                </el-row>
                            </div>
                            <div class="deeds-year" v-scroll-reveal="{ delay: 500 }">
                                <el-row>
                                    <el-col :sm="2" :md="2">
                                        <span class="year">2013</span>
                                    </el-col>
                                    <el-col :sm="22" :md="22">
                                        <div class="deed-list">
                                            <p>2013 年 11 月，获 2013 “英特尔杯” 中国移动医疗好应用大赛 “应用创新奖”</p>
                                            <p>2013 年 12 月，就医助理 APP 获第七届中国健康年度总评榜 “医疗服务创新先锋” 奖</p>
                                        </div>
                                    </el-col>
                                </el-row>
                            </div>
                        </el-col>
                    </el-row>

                    <el-row class="bottom-line">
                        <el-col :sm="6" :md="6" v-scroll-reveal>
                            <div class="deeds-topical margin-top">
                                <h6>2009 - 2012</h6>
                                <h6>梦想起航，稳步成长</h6>
                            </div>
                        </el-col>
                        <el-col :sm="18" :md="18" class="margin-top left-line">
                            <div class="deeds-year" v-scroll-reveal="{ delay: 600 }">
                                <el-row>
                                    <el-col :sm="2" :md="2">
                                        <span class="year">2012</span>
                                    </el-col>
                                    <el-col :sm="22" :md="22">
                                        <div class="deed-list">
                                            <p>2012 年 10 月，成为广东省网商协会理事单位</p>
                                            <p>2012 年 11 月，被广东省科学技术厅、广东省财政厅、广东省国家税务局、广东省地方税务局联合认定为高新技术企业</p>
                                            <p>2012 年 11 月，被广东省工商局评为 2011 年度 “广东省守合同重信用企业（网商）”</p>
                                        </div>
                                    </el-col>
                                </el-row>
                            </div>
                            <div class="deeds-year" v-scroll-reveal="{ delay: 700 }">
                                <el-row>
                                    <el-col :sm="2" :md="2">
                                        <span class="year">2011</span>
                                    </el-col>
                                    <el-col :sm="22" :md="22">
                                        <div class="deed-list">
                                            <p>2011 年 11 月，被广东省工商局评为 2010 年度 “广东省守合同重信用企业（网商）”</p>
                                            <p>2011 年 12 月，财政部、发改委调研组莅临阳光康众参观视察</p>
                                            <p>2011 年 12 月，佛山社保局授权阳光康众为佛山社保卡服务运营商</p>
                                        </div>
                                    </el-col>
                                </el-row>
                            </div>
                            <div class="deeds-year" v-scroll-reveal="{ delay: 800 }">
                                <el-row>
                                    <el-col :sm="2" :md="2">
                                        <span class="year">2010</span>
                                    </el-col>
                                    <el-col :sm="22" :md="22">
                                        <div class="deed-list">
                                            <p>2010 年 11 月，成为广东省保健行业协会理事单位</p>
                                            <p>2010 年 11 月，成为广东省通信行业协会理事单位</p>
                                        </div>
                                    </el-col>
                                </el-row>
                            </div>
                            <div class="deeds-year" v-scroll-reveal="{ delay: 900 }">
                                <el-row>
                                    <el-col :sm="2" :md="2">
                                        <span class="year">2009</span>
                                    </el-col>
                                    <el-col :sm="22" :md="22">
                                        <div class="deed-list">
                                            <p>2009 年 6 月，成为共青团中央青年就业创业见习基地</p>
                                        </div>
                                    </el-col>
                                </el-row>
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </el-col>
        </el-row>
        <sun-footer></sun-footer>
    </div>
</template>

<script>
import SunFooter from "../../components/SunFooter";

export default {
  name: "honor",
  components: {
    SunFooter
  }
};
</script>


<style lang="scss" scoped>
@import "../../assets/style/media-queries";

.honor {
  margin-top: 70px;
  @include mobile {
    margin-top: 50px;
  }

  &-banner {
    img {
      width: 100%;
    }
  }
}

.deeds-main-box {
  margin-top: 49px;
  margin-bottom: 50px;
}

.bottom-line {
  border-bottom: 1px solid #f2f2f2;
}

.margin-top {
  padding-top: 40px;
}

.deeds-topical {
  h6 {
    font-size: 18px;
    line-height: 27px;
    color: #313131;
    margin: 0;
  }
}

.left-line {
  border-left: 3px solid #f2f2f2;
}

.year {
  display: block;
  width: 44px;
  height: 44px;
  line-height: 44px;
  margin-left: -24px;
  margin-top: -6px;
  text-align: center;
  font-size: 14px;
  color: #ffffff;
  border-radius: 22px;
  background-color: #5471f6;
  @include mobile {
    margin-left: 0;
  }
}

.deed-list {
  p {
    font-size: 14px;
    color: #6a6a6a;
    line-height: 27px;
    margin: 0;
  }
}

.deeds-year {
  padding-bottom: 40px;
}
</style>

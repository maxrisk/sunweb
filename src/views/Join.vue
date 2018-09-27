<template>
  <div class="join">
    <section class="join-banner">
      <img src="../assets/images/join-banner.png" alt="joinbanner">
    </section>

    <el-row>
      <el-col :sm="4" :md="4" :lg="4">
        <div class="grid-content"></div>
      </el-col>
      <el-col :sm="16" :md="16" :lg="16" class="margin-left-right">
        <div class="grid-content join-description" v-scroll-reveal>
          <p>阳光康众成立于 2009 年 1 月，是国内行业领先的 “医疗 + 互联网” 服务运营商，公司专注于医疗行业的 “互联网 +” 平台建设及运营，为区域 / 医疗机构 /
            医生提供信息化解决方案，为用户提供便捷的就医服务，实现大医疗产业互联网生态圈的搭建。拥有医程通 APP、易健通医生等产品，区域覆盖广东 / 山东 / 海南 / 安徽 / 福建等地。行业领先的 “医疗 + 互联网”
            服务运营商：借助互联网工具，通过整合产业资源，应用电子商务，导入金融保险服务，搭建大医疗产业价值共享平台，实现供求关系重构，提升交易效率，提高资本收益。通过整合医院 / 医生 / 政府 / 保险 / 金融 /
            渠道伙伴等行业生态链，创造移动互联网时代的医疗服务全新模式。以医程通 APP 为核心，实现传统医疗服务的互联网化，成为院内院外、患者医生间的服务纽带，打造全新的网络医疗服务平台；以 OMO
            方式完成用户发展、服务、增值的运营闭环。</p>
        </div>
      </el-col>
      <el-col :sm="4" :md="4" :lg="4">
        <div class="grid-content"></div>
      </el-col>
    </el-row>

    <el-row>
      <el-col :sm="4" :md="4" :lg="4">
        <div class="grid-content"></div>
      </el-col>
      <el-col :sm="16" :md="16" :lg="16">
        <div class="join-recruit">
          <el-row>
            <el-col :sm="24" :md="12" :lg="12" class="margin-left-right">
              <div class="recruit-info" v-scroll-reveal="{ delay: 150 }">
                <h1>商务经理 / 商务总监</h1>
                <div class="responsibility">
                  <h3>【岗位职责】</h3>
                  <p>1、拓展药品 / 医疗器械 / 医疗健康类 / 银行保险类合作伙伴</p>
                  <p>2、收集合作需求以及公司产品，总结形成商业策划案</p>
                  <p>3、协议的初步拟定以及签约完成</p>
                  <p>4、商业合作项目的内部落实推进</p>
                </div>
                <div class="responsibility">
                  <h3>【岗位要求】</h3>
                  <p>1、工作经验 3 年以上，有 1 年以上商务合作经验（政府、企业商务合作）</p>
                  <p>2、有企业合作资源，大型商户合作资源，医院以及药企合作资源者优先</p>
                  <p>3、有互联网行业工作经验优先</p>
                  <p>4、有商业合作方案策划能力、善于总结，对数字敏感</p>
                </div>
                <p><img class="portrait" src="../assets/images/join-portrait.png" alt="portrait"></p>
              </div>

            </el-col>
            <el-col :sm="24" :md="12" :lg="12" class="margin-left-right">
              <div class="recruit-info" v-scroll-reveal="{ delay: 150 }">
                <h1>产品经理 / 产品总监</h1>
                <div class="responsibility">
                  <h3>【岗位职责】</h3>
                  <p>1、根据公司业务发展的总体策略，负责公司产品的规划和管理；</p>
                  <p>2、负责相关产品的市场调研、竞品分析、需求分析、原型设计等工作；</p>
                  <p>3、负责跟进、协调、监督产品开发进度，对产品进行验收；</p>
                  <p>4、协助市场和销售团队进行产品市场推广和销售工作，确保达到市场预期目标；</p>
                  <p>5、负责产品的优化迭代；</p>
                  <p>6、制定产品服务流程和规范；</p>
                </div>
                <div class="responsibility">
                  <h3>【任职要求】</h3>
                  <p>1、本科及以上学历，3年以上相关工作经验，有独立 APP、微信服务号等产品的规划和管理经验，熟悉医疗健康医药行业者优先。</p>
                  <p>2、精通 AXURE / VISIO 等原型设计软件，精通流程图制作，能够独立完成产品的原型设计；</p>
                  <p>3、优秀的文档写作能力，熟练使用 Microsoft Office 系列软件，有良好的归纳总结和分析能力；</p>
                  <p>4、在相关团队支持配合下，能独立或者主导完成从用户调查、市场分析、产品策划、需求分析、原型设计、验收推广等一系列工作；</p>
                  <p>5、工作积极，交流能力良好，愿意接受有挑战性的工作，能够适应加班安排；</p>
                </div>
                <p><img class="portrait" src="../assets/images/join-portrait.png" alt="portrait"></p>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :sm="24" :md="12" :lg="12" class="margin-left-right">
              <div class="recruit-info" v-scroll-reveal="{ delay: 150 }">
                <h1>驻点推广 / 客服</h1>
                <div class="responsibility">
                  <h3>【岗位职责】</h3>
                  <p>1、用户服务</p>
                  <p>2、app 用户获取</p>
                  <p>3、客户指引、咨询及业务办理</p>
                  <p>4、维护好公司与合作医院的良好关系</p>
                  <p>备注：此岗位只在院内的导医台工作，工作地点可就近安排</p>
                </div>
                <div class="responsibility">
                  <h3>【岗位要求】</h3>
                  <p>1、可接收应届毕业生，有从事过医疗服务行业、导诊、客户服务经验者优先。</p>
                  <p>2、粤语和国语表达流利；性格开朗、温和，有较强的语言表达及沟通能力；办公室软件操作良好</p>
                </div>
                <p><img class="portrait" src="../assets/images/join-portrait.png" alt="portrait"></p>
              </div>
            </el-col>
            <el-col :sm="24" :md="12" :lg="12" class="margin-left-right">
              <div class="recruit-info" v-scroll-reveal="{ delay: 150 }">
                <h1>产品运营经理 / 总监</h1>
                <div class="responsibility">
                  <h3>【岗位职责】</h3>
                  <p>1、负责平台的用户增长、交易增长等，为目标负责；</p>
                  <p>2、策划、维护及组织协调产品运营活动，针对用户、产品特点进行业务规划；</p>
                  <p>3、推动基础营销工具开发，简历有效的产品运营体系；</p>
                  <p>4、指定不同渠道的短、长、中期的运营推广计划；</p>
                </div>
                <div class="responsibility">
                  <h3>【岗位要求】</h3>
                  <p>1、5 年以上互联网产品运营经验，熟悉互联网的运营发展趋势，精通互联网的产品、模式和营销方法；</p>
                  <p>2、了解用户体验的要素，善于倾听用户声音，了解用户及用户需求，注重用户感受及体验；</p>
                  <p>3、具备较强的分析和解决问题的能力，以及丰富的领导经验和沟通能力；</p>
                </div>
                <p><img class="portrait" src="../assets/images/join-portrait.png" alt="portrait"></p>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :sm="24" :md="12" :lg="12" class="margin-left-right">
              <div class="recruit-info" v-scroll-reveal="{ delay: 150 }">
                <h1>客服专员 / 健康秘书</h1>
                <div class="responsibility">
                  <h3>【岗位职责】</h3>
                  <p>1、对用户提出的健康、医疗需求进行处理与解答</p>
                  <p>2、医生审核、医生排班、用户资料的完善与用户服务记录存档</p>
                  <p>3、订单的跟进工作，电话咨询三方通话的转接，用户投诉处理、医生、业务人员的订单提成结算及与财务的对接工作</p>
                  <p>4、对医生、用户提出的问题及时做出反馈和解决，多客服的在线咨询、办公室手机的接听、平台的测试、服务流程的编写优化与服务汇报</p>
                  <p>5、配合相关活动或部门事宜；</p>
                </div>
                <div class="responsibility">
                  <h3>【岗位要求】</h3>
                  <p>1、大专或以上学历，具有相关医学、护理等专业背景；</p>
                  <p>2、语言要求 普通话精通，粤语精通；</p>
                  <p>3、1 年客服经验以上，有医院工作经历优先；</p>
                  <p>4、良好的沟通能力，能说出流利的粤语和普通话、良好的服务意识，有高度责任心与耐心。专业技能：懂基本的医务常识，能应对医生、用户提出的问题；</p>
                  <p>5、能力或技能：良好的心理素质、学习能力、应变能力、沟通能力和交际能力；</p>
                </div>
                <p><img class="portrait" src="../assets/images/join-portrait.png" alt="portrait"></p>
              </div>
            </el-col>
            <el-col :sm="24" :md="12" :lg="12" class="margin-left-right">
              <div class="recruit-info" v-scroll-reveal="{ delay: 150 }">
                <h1>高级 Java 工程师</h1>
                <div class="responsibility">
                  <h3>【岗位职责】</h3>
                  <p>1、负责支撑平台和集成产品的研发，并负责技术支撑;</p>
                  <p>2、参与项目的设计、开发工作，核心模块设计与代码编写;</p>
                  <p>3、系统性能优化，难点攻关，保证系统稳定、快速、安全运行;</p>
                  <p>4、参与代码开发规范，技术标准的制定，审核开发人员的系统设计和代码质量 ;</p>
                  <p>5、合理安排重构计划，不断提高产品的代码质量，为团队引入创新的技术、创新的解决方案；</p>
                </div>
                <div class="responsibility">
                  <h3>【岗位要求】</h3>
                  <p>1、3 年及以上 JAVA 开发经验；</p>
                  <p>2、专科及以上学历，计算机相关专业；</p>
                  <p>3、熟悉 J2EE 相关技术，熟悉使用 Spring、Mybatis 等主流开源框架，并理解其实现原理；</p>
                  <p>4、熟悉 memcache，redis，MongoDB 等常用的 Nosql 技术，并理解其实现原理；</p>
                  <p>5、JAVA 基础扎实，理解 io、多线程、集合等基础框架，并对 JVM 有一定深入了解，能对 JVM 做性能分析及调优；</p>
                  <p>6、熟练掌握 SQL,能对语句进行问题定位及优化；</p>
                  <p>7、有 SOA 实施经验优先，熟悉一种主流服务化框架（Dubbo，Spring Cloud）使用者优先；</p>
                  <p>8、良好的面向对象设计能力，对互联网高并发、高可用和复用有一定的实践经验；</p>
                  <p>9、逻辑思路清晰，工作认真负责，学习能力强，个性乐观开朗；</p>
                </div>
                <p><img class="portrait" src="../assets/images/join-portrait.png" alt="portrait"></p>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
      <el-col :sm="4" :md="4" :lg="4">
        <div class="grid-content"></div>
      </el-col>
    </el-row>

    <el-row>
      <el-col :sm="4" :md="4" :lg="4">
        <div class="grid-content"></div>
      </el-col>
      <el-col :sm="16" :md="16" :lg="16" class="margin-left-right">
        <div class="grid-content company-address" v-scroll-reveal="{ delay: 300 }">
          <p><strong>公司地址：广州市海珠区琶洲大道东 1 号保利国际广场南塔 508 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 简历投递：hr@968309.com /
            liuwy@968309.com</strong></p>
        </div>
      </el-col>
      <el-col :sm="4" :md="4" :lg="4">
        <div class="grid-content"></div>
      </el-col>
    </el-row>
    <sun-footer></sun-footer>
  </div>
</template>

<script>
    import SunFooter from "../components/SunFooter";

    export default {
        name: "join",
        components: {
            SunFooter
        }
    };
</script>

<style scoped lang="scss">
  @import "../assets/style/media-queries";

  .el-col {
    border-radius: 4px;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

  .join {
    margin-top: 80px;
    @include mobile {
      margin-top: 50px;
    }

    &-banner {
      img {
        width: 100%;
      }
    }

    &-description {
      p {
        margin-top: 40px;
        font-size: 14px;
        line-height: 27px;
        color: #6a6a6a;
      }
    }

    &-recruit {
      margin-top: 20px;
      .recruit-info {
        margin: 20px 0;
        position: relative;
        float: left;
        h1 {
          margin-top: 134px;
          font-size: 30px;
          color: #313131;
        }
      }
    }
  }

  .responsibility {
    margin-top: 15px;
    h3 {
      line-height: 27px;
      font-size: 16px;
      color: #313131;
      margin: 0;
    }

    p {
      line-height: 27px;
      font-size: 16px;
      color: #6a6a6a;
      margin: 0;
    }
  }

  .margin-left-right {
    padding-left: 15px;
    padding-right: 15px;
  }

  .portrait {
    position: absolute;
    top: 0;
    left: 0;
    width: 110px;
    height: 110px;
  }

  .company-address {
    clear: both;
    margin-top: 15px;
    margin-bottom: 55px;
    font-size: 14px;
    line-height: 27px;
    color: #313131;
  }
</style>

<template>
  <div class="culture">
    <div class="culture-banner">
      <img src="../../assets/images/company/culture-banner.png" alt="cultire-banner">
    </div>
    <div class="culture-content">
      <el-row type="flex" justify="center">
        <el-col :sm="16" :md="16">
          <el-row>
            <el-col :sm="8" :md="8">
              <div class="content-list disease-margin" v-scroll-reveal>
                <img src="../../assets/images/company/culture-equal.png" alt="equal">
                <h1 class="content-list-title">平等包容</h1>
                <p>阳光康众的每一位员工，都拥有一味中药名。自上至下，人人皆以药名相称，没有职级之分。各味药材缘聚在阳光康众，团结友爱，平等和谐，创新进取，其乐融融。</p>
              </div>
            </el-col>
            <el-col :sm="8" :md="8">
              <div class="content-list disease-margin" v-scroll-reveal="{ delay: 150 }">
                <img src="../../assets/images/company/culture-disease.png" alt="equal" style="width: 68px; height: 62px; margin-top: 13px; margin-bottom: 13px;">
                <h1 class="content-list-title">治未病</h1>
                <p>中医倡导“治未病”，预防胜于治疗。阳光康众以此作为企业发展的使命之一，期望通过整合社会资源，发挥力量，想用户所想，为用户提供健康保障，在医疗健康事业的道路上不断自我完善，不断创造超越用户期望的服务体验。</p>
              </div>
            </el-col>
            <el-col :sm="8" :md="8">
              <div class="content-list disease-margin" v-scroll-reveal="{ delay: 300 }">
                <img src="../../assets/images/company/culture-drug.png" alt="equal" style="width: 68px; height: 62px; margin-top: 13px; margin-bottom: 13px;">
                <h1 class="content-list-title">“药”尽其才</h1>
                <p>每一位员工都是一味有用的药材，每一味药材都化身健康使者。药材们齐心协力，始终以用户为中心，发挥小宇宙，汇成大智慧，倾情为用户提供专业贴心的医疗解决方案，致力缓解“看病烦、看病难”等就医难题，为中国医疗健康事业的发展贡献力量。</p>
              </div>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
    <div class="culture-compose-img">
      <el-row type="flex" justify="center">
        <el-col :sm="16" :md="16" v-scroll-reveal>
          <img src="../../assets/images/company/culture-compose.png" alt="compose-img">
        </el-col>
      </el-row>
    </div>
    <sun-footer class="culture-footer"></sun-footer>
  </div>
</template>

<script>
import SunFooter from "../../components/SunFooter";

export default {
  name: "culture",
  components: {
    SunFooter
  }
};
</script>

<style scoped lang="scss">
@import "../../assets/style/media-queries";

.culture {
  margin-top: 70px;

  @mixin mobile {
    margin-top: 50px;
  }

  &-banner {
    img {
      width: 100%;
    }
  }

  &-content {
    margin-top: 77px;
    margin-bottom: 77px;
  }

  &-compose-img {
    padding-top: 82px;
    padding-bottom: 100px;
    background-color: #edf3ff;
    img {
      width: 100%;
    }
  }

  &-footer {
    background-color: #edf3ff;
  }
}

.content-list {
  text-align: center;
  img {
    width: 88px;
    height: 88px;
  }

  &-title {
    font-size: 28px;
    font-weight: bold;
    color: #3f3f3f;
    margin-top: 35px;
  }

  p {
    font-size: 14px;
    color: #6a6a6a;
    line-height: 27px;
    text-align: left !important;
  }
}

.equal-margin-right {
  margin-right: 60px;
}

.disease-margin {
  margin-left: 30px;
  margin-right: 30px;
}

.drug-margin-left {
  margin-left: 60px;
}

.float-left {
  float: left;
}
</style>

<template>
  <div class="sun-footer">
    <!--<div class="nav-list">-->
      <!--<router-link :to="{ name: 'company.intro' }">关于我们</router-link>-->
      <!--<router-link :to="{ name: 'home' }">免费条款</router-link>-->
      <!--<router-link :to="{ name: 'join' }">联系我们</router-link>-->
    <!--</div>-->
    <p class="notification">提示：任何关于疾病的建议都不能替代执行医师的面对面诊断。所有门诊时间仅供参考，最终以医院当日公布为准。网友、医生言论仅代表其个人观点，不代表本站同意其说法，请谨慎参阅，本站不承担由此引起的法律责任</p>
    <p class="notification">Copyright © 2014 广东天泽阳光康众医疗投资管理有限公司. 粤 ICP 备 09007530 号 - 15</p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
@import "../assets/style/media-queries";

.sun-footer {
  overflow: hidden;
}
.nav-list {
  text-align: center;
  margin: 30px 0;

  a {
    margin: 0 16px;
    font-size: 14px;
    color: #6a6a6a;
    position: relative;

    &::after {
      content: "|";
      position: absolute;
      right: -18px;
      top: 0;
      color: #999;
    }

    &:last-child::after {
      content: "";
    }
  }

  @include mobile {
    text-align: left;
  }
}
.notification {
  width: 750px;
  margin: 0 auto 20px;
  text-align: center;
  color: #999;
  font-size: 12px;
  line-height: 18px;

  &:first-child {
    margin-top: 30px;
  }

  @include mobile {
    width: 100%;
  }
}
</style>

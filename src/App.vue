<template>
  <div id="app">
    <el-row class="nav pc-nav hidden-xs-only" type="flex" justify="center">
      <el-col :span="4">
        <router-link to="/" class="menu-item">
          <img class="pc-nav-logo" src="./assets/images/logo.png" alt="医程通 LOGO">
        </router-link>
      </el-col>
      <el-col :span="12">
        <div class="menu">
          <router-link to="/" class="menu-item">医程通</router-link>
          <el-dropdown class="menu-item sun-dorpdown" :class="{ 'router-link-exact-active': isCompanyRoute }">
            <span class="el-dropdown-link">
              阳光康众
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item :class="{ 'sun-dorpdown-active': $route.name === 'company.culture' }" @click.native="$router.push({ name: 'company.culture' })">文化、使命、愿景</el-dropdown-item>
              <el-dropdown-item :class="{ 'sun-dorpdown-active': $route.name === 'company.intro' }" @click.native="$router.push({ name: 'company.intro' })">公司简介</el-dropdown-item>
              <el-dropdown-item :class="{ 'sun-dorpdown-active': $route.name === 'company.memorabilia' }" @click.native="$router.push({ name: 'company.memorabilia' })">阳光大事记</el-dropdown-item>
              <el-dropdown-item :class="{ 'sun-dorpdown-active': $route.name === 'company.honor' }" @click.native="$router.push({ name: 'company.honor' })">阳光荣誉</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <router-link to="/join" class="menu-item">加入我们</router-link>
        </div>
      </el-col>
    </el-row>
    <div class="nav mobile-nav hidden-sm-and-up">
      <img class="mobile-nav-logo" src="./assets/images/logo.png" alt="医程通 LOGO">
      <div class="menu-btn" :class="{ show: showMenu }" @click="showMenu = !showMenu">
        <div class="menu-btn-line"></div>
        <div class="menu-btn-line"></div>
        <div class="menu-btn-line"></div>
      </div>
    </div>
    <keep-alive include="home">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false,
      showPcMenu: false
    };
  },
  computed: {
    isCompanyRoute() {
      const regex = /\/company/gm;
      let m = regex.exec(this.$route.path);

      return m !== null;
    }
  },
  methods: {
    test(str) {
      console.log(str);
    }
  }
};
</script>

<style lang="scss">
@import "assets/style/theme";

a {
  color: #6a6a6a;
}

#app {
  height: 100%;
}
.nav {
  position: fixed !important;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  width: 100%;
  background-color: #fff;
}
.pc-nav {
  height: 70px;
  box-shadow: 0 0 10px -3px rgba(0, 0, 0, 0.3);

  &-logo {
    width: 140px;
  }
}
.mobile-nav {
  height: 50px;
  padding: 0 10px;
  box-sizing: border-box;

  &-logo {
    height: 36px;
  }
}
.menu {
  float: right;

  &-item {
    font-size: 16px;
    color: #6a6a6a;
    padding: 0 45px;
    transition: color 0.25s;

    .el-dropdown-link {
      font-size: 16px;
    }

    &:last-child {
      margin-right: 0;
    }

    .el-dropdown-link:hover,
    &:hover {
      color: $primary-color;
    }

    &.router-link-exact-active {
      color: #5471f6;
    }
  }
}
.menu-btn {
  position: absolute;
  right: 6px;
  top: 6px;
  transition: all 0.5s;
  padding: 10px;
  box-sizing: border-box;

  .menu-btn-line {
    height: 2px;
    width: 20px;
    border-radius: 2px;
    margin-bottom: 5px;
    background-color: #666;
    transition: all 0.25s;

    &:last-child {
      margin-bottom: 0;
    }
  }
}
.show {
  transform: rotate(180deg);

  .menu-btn-line:nth-child(1) {
    transform: rotate(45deg) translate3d(5px, 5px, 0);
  }
  .menu-btn-line:nth-child(2) {
    opacity: 0;
  }
  .menu-btn-line:nth-child(3) {
    transform: rotate(135deg) translate3d(-5px, 5px, 0);
  }
}

.sun-dorpdown {
  cursor: pointer;

  &-active {
    &:hover {
      color: #66b1ff !important;
    }

    color: #fff !important;
    background-color: $primary-color;
  }
}
</style>

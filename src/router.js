import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    // savedPosition is only available for popstate navigations.
    return savedPosition;
  } else {
    const position = {};
    // new navigation.
    // scroll to anchor by returning the selector
    if (to.hash) {
      position.selector = to.hash;
    }
    // check if any matched route config has meta that requires scrolling to top
    if (to.matched.some(m => m.meta.scrollToTop)) {
      // cords will be used if no selector is provided,
      // or if the selector didn't match any element.
      position.x = 0;
      position.y = 0;
    }
    // if the returned position is falsy or an empty object,
    // will retain current scroll position.
    return position;
  }
};

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/join",
      name: "join",
      meta: { scrollToTop: true },
      component: () => import("./views/Join.vue")
    },
    {
      path: "/company/intro",
      name: "company.intro",
      meta: { scrollToTop: true },
      component: () => import("./views/company/Intro.vue")
    },
    {
      path: "/company/honor",
      name: "company.honor",
      meta: { scrollToTop: true },
      component: () => import("./views/company/Honor.vue")
    },
    {
      path: "/company/culture",
      name: "company.culture",
      meta: { scrollToTop: true },
      component: () => import("./views/company/Culture.vue")
    },
    {
      path: "/company/memorabilia",
      name: "company.memorabilia",
      meta: { scrollToTop: true },
      component: () => import("./views/company/Memorabilia.vue")
    }
  ]
});

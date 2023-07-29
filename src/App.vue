<template>
  <main class="page" @scroll="scrollHandler" ref="page" :class="{ scrolled: scrolled }">
    <header class="frame">
      <router-link class="title-bar bar bar-button" to="/">
        <div class="title-icon title-logo"></div>
        Oriel Research
      </router-link>
      <div class="flex-spacer"></div>
      <nav class="nav-bar bar bar-container">
        <router-link
          class="nav-link"
          v-for="page in pages"
          :key="page.name"
          :to="page.path"
          exact
          >{{ page.name }}</router-link
        >
      </nav>
      <router-link class="bar bar-button bar-alt font-larger" to="/contact">Contact Us</router-link>
    </header>
    <!--     
    <router-view class="loaded-contents" v-slot="{ Component, route }">
      <Transition>
        <component :is="Component" :key="route.path" />
      </Transition>
    </router-view> 
    -->
    <router-view class="loaded-contents" />
    <footer class="frame">
      <div class="title-bar bar">
        <div class="title-copyright title-icon"></div>
        2021 All rights reserved to Oriel Research, Inc.
      </div>
      <nav class="nav-bar bar bar-container">
        <router-link
          class="nav-link"
          v-for="page in footerPages"
          :key="page.name"
          :to="page.path"
          exact
          >{{ page.name }}</router-link
        >
      </nav>
      <div class="flex-spacer"></div>
      <router-link class="bar bar-button bar-alt font-larger" to="/careers"
        >Connect With Us</router-link
      >
    </footer>
  </main>
</template>
<script>
export default {
  name: "PageView",
  components: {},
  data() {
    return {
      scrolled: false,
      pageList: [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "News", path: "/news" },
        { name: "Careers", path: "/careers" },
      ],
      footerPages: [
        { name: "Terms of Use", path: "/terms" },
        { name: "Privacy Policy", path: "/privacy" },
      ],
    };
  },
  computed: {
    pages() {
      // filter out current page name from pageList
      return this.pageList.filter((page) => page.path !== this.$route.path);
    },
  },
  created() {
    this.checkScrollable();
  },
  methods: {
    scrollHandler() {
      // get scroll position
      const scrollPosition = this.$refs.page?.scrollTop;
      // check if scrolled
      if (scrollPosition > 0) {
        this.scrolled = true;
      } else {
        this.scrolled = false;
      }
    },
    checkScrollable() {
      if (this.$refs.page?.scrollHeight > this.$refs.page?.clientHeight) {
        this.scrolled = false;
      } else {
        this.scrolled = true;
      }
    },
  },
  watch: {
    $route() {
      this.checkScrollable();
    },
  },
};
</script>
<style>
@import url(@/assets/style/main.css);
#app {
  font-family: Humber, Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* size */
  height: 100%;
}
/* handle scroll in page */
main.page {
  /* overflow */
  overflow-y: auto;
  height: 100%;
  /* layout */
  display: flex;
  flex-flow: column nowrap;
  align-items: stretch;
  justify-content: flex-start;
}
/* bar things */
.bar {
  /* layout */
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  gap: var(--gap-bar);
  /* style */
  text-transform: uppercase;
  color: var(--color-text);
  background-color: var(--color-bar);
  border: var(--border-bar);
  height: var(--height-bar);
  border-radius: var(--radius-bar);
  font: var(--font-bar);
  padding: var(--padding-bar);
  /* interaction */
  user-select: none;
}
.bar-alt {
  background-color: var(--color-bar-dark);
  border: var(--border-bar-dark);
  color: var(--color-text-dark-alt);
}
.bar-container {
  gap: var(--gap-bar-container);
  padding: var(--padding-bar-container);
}
.bar.font-larger {
  font-size: var(--font-bar-larger);
  font-weight: 600;
}
/* header title */
.title-bar {
  padding: var(--padding-bar-icon-left);
}

.title-logo {
  background: var(--bg-logo);
}
.title-copyright {
  background: url(@/assets/img/copyright.png);
}
.title-icon {
  width: var(--size-logo);
  height: var(--size-logo);
  border-radius: var(--size-logo);
  background-size: contain;
}
/* header nav */
.nav-link {
  color: var(--color-text);
  text-decoration: none;
  font-weight: 600;
}

/* header and footer */
header,
footer,
.frame {
  padding: var(--padding-frame);
  display: flex;
  flex-flow: row nowrap;
  gap: var(--gap-frame);
  background: var(--color-bg);
  box-shadow: none;
  transition: box-shadow 1s ease-in-out;
}
header {
  position: sticky;
  top: 0;
}
.scrolled > .frame {
  box-shadow: var(--shadow-frame);
}
/* contents */
.loaded-contents {
  flex: 1 1 auto;
}
/* transitions */
</style>

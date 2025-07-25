<template>
  <main class="page" @scroll="scrollHandler" ref="page" :class="{ scrolled: scrolled }">
    <header class="frame">
      <router-link class="title-bar bar bar-button" to="/">
        <div class="bar-icon title-logo"></div>
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
      <router-link class="contact-btn bar bar-button bar-alt font-larger" to="/contact"
        >Contact Us</router-link
      >
    </header>
    <!--     
    <router-view class="loaded-contents" v-slot="{ Component, route }">
      <Transition>
        <component :is="Component" :key="route.path" />
      </Transition>
    </router-view> 
    -->
    <div class="spread-contents">
      <router-view class="loaded-contents" />
      <footer class="frame">
        <div class="title-bar bar">
          <div class="title-copyright bar-icon"></div>
          <span
            >2021-2023 <span class="desktop-text">All rights reserved to</span> Oriel Research,
            Inc.</span
          >
        </div>
        <nav class="nav-bar bar bar-container">
          <router-link
            class="nav-link"
            v-for="page in footerPages"
            :key="page.name"
            :to="page.path"
            exact
            >{{ page.name }}<span class="desktop-text">{{ page.desktop }}</span></router-link
          >
        </nav>
        <div class="flex-spacer"></div>
        <router-link class="bar bar-button bar-alt font-larger nogap" to="/careers"
          >Connect<span class="desktop-text">&nbsp;With Us</span></router-link
        >
      </footer>
    </div>
    <button
      v-if="canScroll"
      ref="scrollbtn"
      @click="scrollToBottom"
      class="scroll-btn bar bar-action bar-large"
      :class="{ done: doneScrolling }"
    >
      Scroll <span class="bar-icon down"></span>
    </button>
  </main>
</template>
<script>
export default {
  name: "PageView",
  components: {},
  data() {
    return {
      scrolled: false,
      doneScrolling: false,
      canScroll: true,
      pageList: [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "News", path: "/news" },
        { name: "Careers", path: "/careers" },
      ],
      footerPages: [
        { name: "Terms", desktop: " of Use", path: "/terms" },
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
  mounted() {
    // run check scrollable after short delay
    setTimeout(() => {
      this.checkScrollable(false);
    }, 20);
  },
  methods: {
    scrollToBottom() {
      const pageElement = this.$refs.page,
        scrollHeight = pageElement.scrollHeight,
        clientHeight = pageElement.clientHeight,
        duration = 1000;
      let startTime;
      function scrollStep(timestamp) {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const scrollY = easeInOutCubic(progress, 0, scrollHeight - clientHeight, duration);
        pageElement.scrollTop = scrollY;
        if (progress < duration) {
          window.requestAnimationFrame(scrollStep);
        }
      }
      function easeInOutCubic(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t * t + b;
        t -= 2;
        return (c / 2) * (t * t * t + 2) + b;
      }

      window.requestAnimationFrame(scrollStep);
      window.requestAnimationFrame(scrollStep.bind(this));
    },
    scrollHandler() {
      this.checkScrollable(true);
      // get scroll position
      const scrollPosition = this.$refs.page?.scrollTop;
      // check if scrolled
      this.scrolled =
        this.$refs.page?.scrollHeight - 84 <= this.$refs.page?.clientHeight || scrollPosition > 0;
      // check if done scrolling
      this.doneScrolling =
        this.doneScrolling ||
        scrollPosition + 84 + 20 + this.$refs.page?.clientHeight >= this.$refs.page?.scrollHeight;
    },
    checkScrollable(keep) {
      if (this.$refs.page?.scrollHeight - 84 > this.$refs.page?.clientHeight) {
        this.canScroll = true;
        this.scrolled = keep ? this.scrolled : false;
        this.doneScrolling = keep ? this.doneScrolling : false;
      } else {
        this.scrolled = true;
        this.doneScrolling = true;
        this.canScroll = false;
      }
    },
  },
  watch: {
    $route() {
      this.checkScrollable(false);
      // backup for waiting for page to render
      // scroll to top
      this.$refs.page.scrollTop = 0;
      setTimeout(() => {
        this.checkScrollable(false);
      }, 20);
    },
  },
};
</script>
<style>
@import url(@/assets/style/main.css);
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* size */
  height: 100%;
}
/* handle scroll in page */
main.page {
  /* overflow */
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  /* layout */
  display: flex;
  flex-flow: column nowrap;
  align-items: stretch;
  justify-content: flex-start;
}
.bar.scroll-btn {
  padding: 4px 13px;
  bottom: 16px;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  transition: bottom 1.2s ease-in-out;
  z-index: 10;
}
.bar.scroll-btn:not(.done) {
  animation: raise_btn 0.6s ease-out;
}
@keyframes raise_btn {
  0% {
    bottom: -45px;
  }
  100% {
    bottom: 16px;
  }
}
.bar.scroll-btn.done {
  bottom: -100px;
}
.bar.scroll-btn span {
  margin-right: -5px;
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
  width: fit-content;
  /* style */
  text-transform: uppercase;
  color: var(--color-text);
  background-color: var(--color-bar);
  border: var(--border-bar);
  height: var(--height-bar);
  border-radius: var(--radius-bar);
  font: var(--font-bar);
  padding: var(--padding-bar);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  /* interaction */
  user-select: none;
}
.bar.bar-dark-border {
  border-color: var(--color-border-dark);
}
.bar-action {
  padding: var(--padding-bar-action);
  gap: var(--gap-bar-action);
}
.bar-large {
  height: 36px;
  font-size: 14.5px;
  gap: 10px;
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
.frame .bar-container {
  justify-content: space-evenly;
  display: flex;
}
@media (max-width: 620px) {
  .frame .bar-container {
    gap: 5px;
  }
  .frame .flex-spacer {
    display: none;
  }
  header,
  footer {
    justify-content: space-evenly;
  }
  .desktop-text {
    display: none;
  }
}
@media (max-width: 545px) {
  main.scrolled header .title-bar {
    display: none;
  }
  main.scrolled header {
    justify-content: space-between;
  }
  main.scrolled .frame .bar-container {
    justify-content: space-evenly;
    gap: 2px;
    flex-grow: 1;
  }
}
@media (max-width: 370px) {
  main.scrolled header .contact-btn {
    display: none;
  }
  main.scrolled header {
    justify-content: center;
  }
}
.bar.font-larger {
  font-size: var(--font-bar-larger);
  font-weight: var(--weight-larger);
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
.bar-icon.out {
  background: url(@/assets/img/action/out.png);
}
.bar-icon.right {
  background: url(@/assets/img/action/right.png);
}
.bar-icon.down {
  background: url(@/assets/img/action/down.png);
}
.bar-icon.send {
  background: url(@/assets/img/action/send.png);
}
.bar-icon.gpt {
  background: url(@/assets/img/action/gpt.png);
}
.bar .bar-icon {
  width: var(--size-logo);
  height: var(--size-logo);
  border-radius: var(--size-logo);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  display: inline-block;
  user-select: none;
}
/* header nav */
.nav-link {
  color: var(--color-text);
  text-decoration: none;
  font-weight: var(--weight-bar-alt);
}

/* header and footer */
header,
footer,
.frame {
  padding: var(--padding-frame);
  display: flex;
  flex-flow: row wrap;
  gap: var(--gap-frame);
  background: var(--color-bg);
  box-shadow: none;
  transition: box-shadow 1s ease-in-out;
  z-index: 11;
  height: auto;
}
header {
  position: sticky;
  top: 0;
}
.scrolled .frame {
  box-shadow: var(--shadow-frame);
}
/* contents */
.loaded-contents {
  flex: 1 1 auto;
  /* hide footer on small page spread */
}
.spread-contents {
  flex: 1 1 auto;
  min-height: 100vh;
  /* layout */
  display: flex;
  flex-flow: column nowrap;
}
/* transitions */
</style>

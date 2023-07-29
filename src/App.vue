<template>
  <main class="home" @scroll="scrollHandler" ref="home">
    <header class="frame" :class="{ scrolled: scrolled }">
      <button class="title-bar bar bar-button">
        <div class="title-logo"></div>
        Oriel Research
      </button>
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
      <button class="bar bar-button bar-alt font-larger">Contact Us</button>
    </header>
    <router-view />
    <footer class="frame">
      <button class="title-bar bar bar-button">
        <div class="title-copyright"></div>
        2021 All rights reserved to Oriel Research, Inc.
      </button>
      <div class="flex-spacer"></div>
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
      <button class="bar bar-button bar-alt font-larger">Connect With Us</button>
    </footer>
  </main>
</template>
<script>
export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      scrolled: false,
      pages: [
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
  mounted() {
    // log refs
    console.log(this.$refs);
  },
  methods: {
    scrollHandler() {
      // get scroll position
      const scrollPosition = this.$refs.home.scrollTop;
      // check if scrolled
      if (scrollPosition > 0) {
        this.scrolled = true;
      } else {
        this.scrolled = false;
      }
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
}
/* handle scroll in home */
.home {
  overflow-y: auto;
  height: 100vh;
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
.title-icon {
  width: var(--size-logo);
  height: var(--size-logo);
  border-radius: var(--size-logo);
}
.title-logo {
  background: var(--bg-logo);
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
.frame.scrolled,
footer.frame {
  box-shadow: var(--shadow-frame);
}
</style>

<template>
  <div class="home">
    <section class="tagline-section" ref="tagline">
      <h1 class="tagline-text">
        <span>Advanced early detection</span>
        <br />
        <span class="accented-text">Evidence-based</span>&nbsp;<span>treatment</span>.
      </h1>
      <div class="action-blurb">
        <p class="action-blurb-text">
          Our proprietary machine learning model processes large omic and clinical data to aid
          diagnosis, therapy matching, and target development.
        </p>
        <div class="action-blurb-click-align">
          <router-link class="bar bar-button bar-action" to="/about"
            >Discover Technology <span class="bar-icon out"></span
          ></router-link>
        </div>
      </div>
    </section>
    <section class="about-section">
      <div class="text-section">
        <h3 class="section-title">About/Blog</h3>
        <p class="section-text">
          Oriel Research Therapeutics (ORT) is a bioinformatics company that provides services both
          for harmonized real-world patients' derived genomic data, AI based model development, and
          early detection tests for cancer and other diseases using its AI-based platform.
        </p>
        <div class="flex-spacer"></div>
        <img
          class="jj-logo"
          :src="require('@/assets/img/jjinnovation.svg')"
          alt="Johnson &amp; Johnson Innovation"
        />
      </div>
      <div class="blog-peek">
        <article class="post" v-for="post in blogPeek" :key="post.title">
          <img class="post-img" :src="post.src" :alt="'Post image for: ' + post.title" />
          <div class="post-details">
            <div class="post-meta-wrapper">
              <img class="post-author-img" :src="post.authorImg" :alt="post.author" />
              <p class="post-meta">
                <span class="post-author">{{ post.author }}</span>
                <br />
                <span class="post-length">{{ post.length }}</span
                >&nbsp;·&nbsp;
                <span class="post-date">{{ post.date }}</span>
              </p>
            </div>
            <div class="post-title">{{ post.title }}</div>
          </div>
        </article>
        <div class="blog-peek-more-overlay">
          <router-link class="blog-peek-more-button bar bar-button bar-action bar-large" to="/blog">
            More<span class="bar-icon right"></span>
          </router-link>
        </div>
      </div>
    </section>
    <section class="services-section alt text-section">
      <h3 class="section-title">ORT Services</h3>
      <div class="section-contents">
        <img :src="require('@/assets/img/graphic/organic.svg')" alt="" class="services-graphic" />
        <div class="video-stack">
          <div id="video">
            <iframe
              id="video-iframe"
              @load="onFrameLoad"
              :src="`https://www.youtube-nocookie.com/embed/${vid_id}?vq=hd1080&modestbranding=1&rel=0&iv_load_policy=3&fs=0&color=white&disablekb=1&q=orielresearch`"
              width="1920"
              height="1080"
              title="Oriel Research Therapeutics - Services"
              frameborder="0"
              :style="{ visibility: frame_loading ? 'hidden' : 'visible' }"
            ></iframe>
            <button
              v-if="has_next_vid"
              @click="next_vid"
              class="video-next bar bar-action bar-large"
            >
              Next<span class="bar-icon right"></span>
            </button>
          </div>
          <div class="video-after video-after-1"></div>
          <div class="video-after video-after-2"></div>
        </div>
      </div>
    </section>
    <section class="gpt-section text-section">
      <div class="section-header">
        <h3 class="section-title">ORT-GPT</h3>
        <button class="bar bar-button bar-action bar-dark-border">
          Try an Example <span class="bar-icon out"></span>
        </button>
      </div>
      <div class="section-contents"></div>
    </section>
    <section class="team-section alt text-section">
      <div class="section-header">
        <h3 class="section-title">Our Team</h3>
        <router-link class="bar bar-button bar-action bar-dark-border" to="/careers">
          Explore Careers <span class="bar-icon out"></span>
        </router-link>
      </div>
      <div class="section-contents"></div>
    </section>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data: () => ({
    frame_loading: true,
    vid_ids: ["Zuf-PAWWEzo", "FgO9Pugmd0o"],
    vid_index: 0,
    blogPeek: [
      // will be loaded from json
      {
        title: "Myelodysplastic Syndrome to Acute Myeloid Leukemia",
        author: "Eila Oriel Research",
        authorImg: require("@/assets/img/blog/eila.png"),
        length: "6 min",
        date: "June 4",
        src: require("@/assets/img/blog/myelodysplastic.png"),
      },
      {
        title: "ORT launches metagenomics pipeline",
        author: "Eila Oriel Research",
        authorImg: require("@/assets/img/blog/eila.png"),
        length: "1 min",
        date: "June 4",
        src: require("@/assets/img/blog/launch.png"),
      },
    ],
  }),
  computed: {
    vid_id() {
      return this.vid_ids[this.vid_index];
    },
    has_next_vid() {
      // return true since we'll loop through
      return true;
      // return this.vid_index < this.vid_ids.length - 1;
    },
  },
  methods: {
    onFrameLoad() {
      this.frame_loading = false;
    },
    next_vid() {
      this.vid_index++;
      this.vid_index %= this.vid_ids.length;
      this.frame_loading = true;
    },
  },
};
</script>

<style scoped>
section {
  display: flex;
  flex-flow: row wrap;
  padding: var(--padding-section);
}
section.alt {
  background: var(--color-bg-alt);
}
section.row {
  flex-direction: row;
}
section.column {
  flex-direction: column;
}

.text-section {
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-text-section);
}
section .section-header {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 20px;
}
section .section-title,
section h3 {
  margin: 0;
  padding: 0;
  font-size: 60px;
  font-weight: var(--weight-section);
  line-height: 86px;
}

/* first section */
.tagline-section {
  gap: 50px;
  justify-content: space-between;
}
h1.tagline-text {
  color: var(--color-text);
  text-align: left;
  line-height: 90px;
  font-weight: var(--weight-tagline);
  font-size: 76px;
  /* spacing */
  margin: 0;
  padding: 0;
}
.tagline {
  flex: 1 1 1035px;
}
.action-blurb {
  flex: 1 1 325px;
  display: flex;
  flex-flow: column nowrap;
  max-width: 500px;
}
.action-blurb-text {
  font-size: 18.4px;
  line-height: 30px;
  font-weight: var(--weight-medium);
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.action-blurb-click-align {
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  flex-grow: 1;
  padding: 10px 0;
}
/* second section */
.about-section {
  background: var(--color-bg-dark);
  color: var(--color-text-dark-alt);
  /* allow for better blog post overflow */
  padding-right: 0;
  gap: 6px;
  /* for blog post on newline at end */
  justify-content: flex-end;
}
.about-section .text-section {
  flex: 0 1 835px;
  padding-right: 24px;
  margin-right: auto;
}
.about-section .section-text {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--color-on-dark-alt);
  font-weight: var(--weight-medium);
  font-size: 30px;
  line-height: 46px;
}
.jj-logo {
  max-width: 100%;
  height: auto;
}
.blog-peek {
  flex: 1 1 325px;
  display: flex;
  flex-flow: row nowrap;
  gap: 40px;
  overflow-x: auto;
  /* for overlay positioning */
  position: relative;
  /* for when wrapped to newline gradient still looks right*/
  max-width: fit-content;
}
.blog-peek::-webkit-scrollbar {
  display: none;
}
.blog-peek .post {
  border-radius: 20px;
  border: var(--border-blog-post);
  background-color: var(--color-bg);
  color: var(--color-text);
  /* layout */
  overflow: hidden;
  display: flex;
  flex-flow: column nowrap;
  width: var(--width-blog-post);
  min-width: var(--width-blog-post);
  max-width: var(--width-blog-post);
  cursor: pointer;
}
.blog-peek .post .post-img {
  height: 175px;
  width: 100%;
  object-fit: cover;
  object-position: center;
}
.blog-peek .post * {
  user-select: none;
}
.blog-peek .post .post-details {
  display: flex;
  flex-flow: column nowrap;
  padding: 15px 18px;
  gap: 10px;
}
.blog-peek .post .post-meta-wrapper {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 10px;
}
.blog-peek .post .post-meta-wrapper .post-author-img {
  height: 52px;
  width: 52px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
}
.blog-peek .post .post-meta span {
  color: var(--color-blog-post-details);
  font-size: 15px;
  line-height: 22px;
  font-weight: var(--weight-medium);
}
.blog-peek .post .post-meta span.post-author {
  color: var(--color-blog-post-author);
  font-size: 18px;
  line-height: 26px;
  font-weight: var(--weight-medium);
}
.blog-peek .post .post-title {
  font-size: 31px;
  line-height: 45px;
  font-weight: var(--weight-post);
  /* clip to two lines */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.blog-peek-more-overlay {
  width: 285px;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  background: linear-gradient(90deg, #00000000 0%, var(--color-bg-dark) 100%);
  padding: 36px;
  /* layout */
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-end;
  /* interaction */
  pointer-events: none;
}
.blog-peek-more-button {
  pointer-events: all;
}
.blog-peek-more-button span {
  margin-right: -4px;
}
/* third section */
.services-section .section-contents {
  display: flex;
  flex-flow: row nowrap;
  gap: 30px;
  width: 100%;
  align-items: center;
}
.services-section .services-graphic {
  width: 450px;
  height: 100%;
  flex: 450px 0 0;
  object-fit: scale-down;
  object-position: center;
  /* don't keep aspect ratio */
  aspect-ratio: none;
}
.services-section .video-stack {
  height: 100%;
  flex-grow: 1;
  display: flex;
  flex-flow: row nowrap;
  align-items: stretch;
  justify-content: stretch;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 0 16px #91919126;
}
.services-section .video-stack > * {
  border-radius: 0 20px 20px 0;
  overflow: hidden;
}
.services-section .video-stack .video-after {
  margin-left: -40px;
}
.services-section .video-stack #video {
  flex: 9 1 700px;
  position: relative;
  height: 100%;
  background: url(@/assets/img/video-placeholder.png) center no-repeat;
  background-size: cover;
  background-color: var(--color-bg);
  z-index: 3;
}
.services-section.video-stack .video-after-1 {
  flex: 4 1 120px;
  background: #abb6c7;
  z-index: 2;
}
.services-section .video-stack .video-after-2 {
  flex: 3 1 70px;
  background: #f2d3a7;
  z-index: 1;
}

.services-section .video-next {
  z-index: 10;
}
.services-section #video::before {
  content: "";
  display: block;
  padding-top: 56.25%;
}
.services-section #video-iframe {
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  margin: -2px;
  position: absolute;
  top: 0;
  left: 0;
}
.services-section .video-next {
  position: absolute;
  bottom: 25px;
  right: 25px;
}
@media (max-width: 1400px) {
  .services-section .services-graphic {
    display: none;
  }
}
.services-section .section-title {
  margin-bottom: 20px;
}

/* forth section */
.gpt-section {
}

/* fifth section */
.team-section {
}
</style>

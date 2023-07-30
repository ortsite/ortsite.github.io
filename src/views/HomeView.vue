<template>
  <div class="home">
    <section-wrapper class="tagline-wrapper">
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
    </section-wrapper>
    <section-wrapper class="about-wrapper">
      <section class="about-section">
        <div class="text-section">
          <h3 class="section-title">About/Blog</h3>
          <p class="section-text">
            Oriel Research Therapeutics (ORT) is a bioinformatics company that provides services
            both for harmonized real-world patients' derived genomic data, AI based model
            development, and early detection tests for cancer and other diseases using its AI-based
            platform.
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
            <router-link
              class="blog-peek-more-button bar bar-button bar-action bar-large"
              to="/blog"
            >
              More<span class="bar-icon right"></span>
            </router-link>
          </div>
        </div>
      </section>
    </section-wrapper>
    <section-wrapper class="services-wrapper alt">
      <section class="services-section alt text-section">
        <h3 class="section-title">ORT Services</h3>
        <div class="section-contents">
          <img :src="require('@/assets/img/graphic/organic.svg')" alt="" class="services-graphic" />
          <div class="video-stack">
            <div id="video">
              <Transition name="fade-out" mode="out-in">
                <iframe
                  id="video-iframe"
                  @load="onFrameLoad"
                  :src="`https://www.youtube-nocookie.com/embed/${vid_id}?vq=hd1080&modestbranding=1&rel=0&iv_load_policy=3&fs=0&color=white&disablekb=1&q=orielresearch`"
                  width="1920"
                  height="1080"
                  title="Oriel Research Therapeutics - Services"
                  frameborder="0"
                  :class="{ ready: !frame_loading }"
                  :key="vid_id"
                ></iframe>
              </Transition>
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
    </section-wrapper>
    <section-wrapper class="gpt-wrapper">
      <section class="gpt-section text-section">
        <div class="section-header">
          <h3 class="section-title">ORT-GPT</h3>
          <button
            @click="prompt = 'Example prompt text to autofill.'"
            class="bar bar-button bar-action bar-dark-border"
          >
            Try an Example <span class="bar-icon gpt"></span>
          </button>
        </div>
        <div class="section-contents">
          <p class="section-text">
            Welcome! I'm an AI-powered customer service bot representing ORT-GPT, a professional
            computational biology service. I'm here to help you with your orders for genomics data
            and computational analysis services. Simply type your request in the text box below, and
            once you hit the submit button, your request will be shared with the ORT team.
          </p>
          <div class="query-box">
            <textarea placeholder="Your Query" v-model="prompt"></textarea>
            <button class="query-submit bar bar-button bar-action">
              Submit Query <span class="bar-icon send"></span>
            </button>
          </div>
        </div></section
    ></section-wrapper>
    <section-wrapper class="team-wrapper alt">
      <section class="team-section alt text-section">
        <div class="section-header">
          <h3 class="section-title">Our Team</h3>
          <router-link class="bar bar-button bar-action bar-dark-border" to="/careers">
            Explore Careers <span class="bar-icon out"></span>
          </router-link>
        </div>
        <div class="section-contents">
          <div class="team-member" v-for="member in team" :key="member.name">
            <div class="team-member-name">{{ member.name }} {{ member.cert }}</div>
            <a
              class="team-member-contact bar bar-button bar-action pointer"
              @click="open('mailto:' + member.contact, '_blank')"
              >Contact {{ member.name.split(" ")[0] }}
              <span class="bar-icon out"></span>
            </a>
            <img class="team-member-img" :src="member.img" :alt="member.name" />
            <div class="team-member-details">
              <div class="team-member-title">{{ member.title }}</div>
              <div class="team-member-roles">{{ member.roles }}</div>
            </div>
          </div>
        </div>
      </section>
    </section-wrapper>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data: () => ({
    prompt: "",
    team: [
      {
        name: "Elia Arich",
        cert: "ME",
        contact: "info@orielresearch.com",
        img: require("@/assets/img/team/elia.png"),
        title: "Founder, CEO",
        roles: "Microsoft Technion, Broad Institute, MGH, Whitehead Institute, Stanford",
      },
      {
        name: "Noam Shoresh",
        cert: "PhD",
        contact: "info@orielresearch.com",
        img: require("@/assets/img/team/noam.png"),
        title: "Science, Bioinformatics",
        roles: "Harvard Medical School, Broad Institute, MGH, The Hebrew University",
      },
    ],
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
    open(url, target) {
      window.open(url, target);
    },
  },
};
</script>

<style scoped>
section-wrapper {
  display: block;
  width: 100%;
}
section {
  display: flex;
  flex-flow: row wrap;
  padding: var(--padding-section);
  max-width: 1500px;
  margin: 0 auto;
}
section.alt,
section-wrapper.alt {
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
  gap: 16px;
}
section .section-title,
section h3 {
  margin: 0;
  padding: 0;
  font-size: 48px;
  font-weight: var(--weight-section);
  line-height: 68px;
}

/* first section */
.tagline-section {
  gap: 40px;
  justify-content: space-between;
}
h1.tagline-text {
  color: var(--color-text);
  text-align: left;
  line-height: 72px;
  font-weight: var(--weight-tagline);
  font-size: 61px;
  /* spacing */
  margin: 0;
  padding: 0;
}
.tagline {
  flex: 1 1 828px;
}
.action-blurb {
  flex: 1 1 290px;
  display: flex;
  flex-flow: column nowrap;
  max-width: 520px;
}
.action-blurb-text {
  font-size: 14.7px;
  line-height: 24px;
  font-weight: var(--weight-medium);
  display: flex;
  flex-flow: column nowrap;
  flex-grow: 1;
  align-content: flex-start;
  justify-content: flex-end;
  /* display: -webkit-box; */
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
  padding: 8px 0;
}
/* second section */
section.about-section,
section-wrapper.about-wrapper {
  background: var(--color-bg-dark);
}
section.about-section {
  color: var(--color-text-dark-alt);
  /* allow for better blog post overflow */
  padding-right: 0;
  gap: 5px;
  /* for blog post on newline at end */
  justify-content: flex-end;
}
.about-section .text-section {
  flex: 0 1 668px;
  padding-right: 19.2px;
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
  font-size: 24px;
  line-height: 37px;
}
.jj-logo {
  max-width: 100%;
  height: auto;
  margin-bottom: 8px;
}
.blog-peek {
  flex: 1 1 260px;
  display: flex;
  flex-flow: row nowrap;
  gap: 32px;
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
  border-radius: 16px;
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
  height: 140px;
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
  padding: 12px 15px;
  gap: 8px;
}
.blog-peek .post .post-meta-wrapper {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 8px;
}
.blog-peek .post .post-meta-wrapper .post-author-img {
  height: 42px;
  width: 42px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
}
.blog-peek .post .post-meta span {
  color: var(--color-blog-post-details);
  font-size: 12px;
  line-height: 17px;
  font-weight: var(--weight-medium);
}
.blog-peek .post .post-meta span.post-author {
  color: var(--color-blog-post-author);
  font-size: 15px;
  line-height: 18px;
  font-weight: var(--weight-medium);
}
.blog-peek .post .post-title {
  font-size: 25px;
  line-height: 36px;
  font-weight: var(--weight-post);
  /* clip to two lines */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.blog-peek-more-overlay {
  width: 230px;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  background: linear-gradient(90deg, #00000000 0%, var(--color-bg-dark) 100%);
  padding: 30px;
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
  gap: 24px;
  width: 100%;
  align-items: center;
}
.services-section .services-graphic {
  width: 350px;
  height: 100%;
  flex: 350px 1 0;
  object-fit: scale-down;
  object-position: center;
  /* don't keep aspect ratio */
  aspect-ratio: none;
}
.services-section .video-stack {
  height: 100%;
  flex-grow: 2;
  flex-basis: 800px;
  display: flex;
  flex-flow: row nowrap;
  align-items: stretch;
  justify-content: stretch;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 0 12px #91919126;
}
.services-section .video-stack > * {
  border-radius: 0 16px 16px 0;
  overflow: hidden;
}
.services-section .video-stack .video-after {
  margin-left: -32px;
}
.services-section .video-stack #video {
  flex: 9 1 560px;
  position: relative;
  height: 100%;
  background: url(@/assets/img/video-placeholder.png) center no-repeat;
  background: url(@/assets/img/video-placeholder.svg) center no-repeat;
  background-size: cover;
  background-color: var(--color-bg);
  z-index: 3;
}
.services-section .video-stack .video-after-1 {
  flex: 4 1 100px;
  background: #abb6c7;
  z-index: 2;
}
.services-section .video-stack .video-after-2 {
  flex: 2 1 70px;
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
  /* for transition */
  /* transform: scale(0.25);  */
  /* transform: translateX(100%); */
  /* transition: transform 0.35s ease-out; */
  opacity: 0;
  transition: opacity 0.2s ease-out;
}
.services-section #video-iframe.ready {
  /* transform: translateX(0); */
  opacity: 1;
}
.services-section .video-next {
  position: absolute;
  bottom: 20px;
  right: 20px;
}
@media (max-width: 620px) {
  .services-section .video-after {
    display: none;
  }
}
@media (max-width: 1040px) {
  .services-section .services-graphic {
    display: none;
  }
}
.services-section .section-title {
  margin-bottom: 16px;
}

/* forth section */
.gpt-section .section-contents {
  display: flex;
  flex-flow: row wrap;
  gap: 24px;
}
.gpt-section .section-text {
  font-size: 18px;
  line-height: 35px;
  font-weight: 400;
  color: var(--color-on-dark-alt);
  flex: 1 1 550px;
}
.gpt-section .query-box {
  background: var(--color-bg-alt);
  font-size: 18px;
  line-height: 25px;
  border-radius: 20px;
  flex: 2 1 450px;
  /* a little neumorphism with the shadow */
  box-shadow: 2px 2px 6px #cdcdcd80, -2px -2px 6px #ffffffff;
  overflow: hidden;
  position: relative;
}
.gpt-section .query-box textarea {
  width: 100%;
  height: 100%;
  border: none;
  background: none;
  resize: none;
  font-size: inherit;
  line-height: inherit;
  font-weight: var(--weight-medium);
  color: var(--color-text);
  font-family: var(--font-family);
  outline: none;
  padding: 16px 24px 40px;
}
.gpt-section .query-box .query-submit {
  position: absolute;
  bottom: 14px;
  right: 14px;
  height: 30px;
  border: none;
  background-color: var(--color-accent);
  color: var(--color-on-dark);
  padding-right: 14px;
  gap: 8px;
  transition: box-shadow 0.15s ease-out;
}
.gpt-section .query-box .query-submit:hover {
  /* neumorphic shadows */
  box-shadow: inset 2px 2px 4px #2c2c2c20, inset -2px -2px 4px #ffffff25;
}
.gpt-section .query-box .query-submit:active {
  /* neumorphic shadows */
  box-shadow: inset 2px 2px 7px #2c2c2c60, inset -2px -2px 7px #ffffff70;
}
/* fifth section */
.team-section .section-contents {
  display: flex;
  flex-flow: row wrap;
  gap: 24px;
  justify-content: flex-start;
  width: 100%;
}
.team-section .section-header {
  margin-bottom: 8px;
}
.team-section .team-member {
  gap: var(--gap-team-member);
  padding: var(--padding-team-card);
  display: flex;
  flex-flow: column nowrap;
  /* style */
  background: var(--color-bg-darker);
  border-radius: 16px;
  width: var(--width-team-card);
  max-width: 100%;
  flex: 0 1 var(--width-team-card);
}
.team-section .team-member .team-member-name {
  color: var(--color-text);
  font-size: 33px;
  line-height: 48px;
  font-weight: var(--weight-team-name);
}
.team-section .team-member .team-member-img {
  border-radius: 8px;
  user-select: none;
  pointer-events: none;
}
.team-section .team-member .team-member-details .team-member-title {
  color: var(--color-accent);
  font-weight: 650;
  font-size: 19px;
  line-height: 28px;
  margin-bottom: 8px;
}
.team-section .team-member .team-member-details .team-member-roles {
  color: var(--color-text);
  font-weight: var(--weight-medium);
  font-size: 15px;
  line-height: 21px;
  font-weight: 620;
  text-transform: uppercase;
}

#video-iframe {
  border-radius: 15px;
  overflow: hidden;
}
/* fade transition */
.fade-out-enter-active,
.fade-out-leave-active {
  transition: opacity 0.2s !important;
}

.fade-out-enter, .fade-out-leave-to /* .fade-out-transition-leave-active in <2.1.8 */ {
  opacity: 0 !important;
}
</style>

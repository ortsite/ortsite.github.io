<template>
  <div class="home">
    <section class="tagline-section" ref="tagline">
      <h1 class="tagline-text">
        <span>Advanced early detection</span>
        <br />
        <span class="accented-text">Evidence-based</span>
        <span>treatment</span>.
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
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data: () => ({
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
  components: {},
};
</script>

<style scoped>
section {
  display: flex;
  flex-flow: row wrap;
  padding: var(--padding-section);
}
section.row {
  flex-direction: row;
}
section.column {
  flex-direction: column;
}

section .text-section {
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-text-section);
}

section .section-title,
section h3 {
  margin: 0;
  padding: 0;
  font-size: 60px;
  font-weight: 600;
  line-height: 86px;
}

/* first section */
.tagline-section {
  gap: 50px;
}
h1.tagline-text {
  color: var(--color-text);
  text-align: left;
  line-height: 90px;
  font-weight: 600;
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
}
.action-blurb-text {
  font-size: 18.4;
  line-height: 30px;
  font-weight: 600;
  max-width: 600px;
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
}
/* second section */
.about-section {
  background: var(--color-bg-dark);
  color: var(--color-text-dark-alt);
  /* allow for better blog post overflow */
  padding-right: 0;
  gap: 6px;
}
.about-section .text-section {
  flex: 1 1 835px;
  padding-right: 24px;
}
.about-section .section-text {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--color-on-dark-alt);
  font-weight: 600;
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
  font-weight: 600;
}
.blog-peek .post .post-meta span.post-author {
  color: var(--color-blog-post-author);
  font-size: 18px;
  line-height: 26px;
  font-weight: 600;
}
.blog-peek .post .post-title {
  font-size: 31px;
  line-height: 45px;
  font-weight: 600;
  /* clip to two lines */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>

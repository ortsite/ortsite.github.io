<template>
  <main class="pagenotfound">
    <div class="err-container">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>
        The page you are looking for might have been removed, had its name changed, or is
        temporarily unavailable.
      </p>
      <router-link class="action bar bar-button" to="/">Go to Home</router-link>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style scoped>
main.pagenotfound,
.err-container {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: var(--color-bg-alt);
}
h1 {
  color: var(--color-text);
  text-align: left;
  line-height: 90px;
  font-weight: 600;
  font-size: 76px;
  font-family: sans-serif;
}
p {
  max-width: 500px;
  color: var(--color-text-alt);
  opacity: 0.8;
  font-size: 18px;
  margin: 20px 0;
}
</style>
